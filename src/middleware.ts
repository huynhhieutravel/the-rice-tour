import { defineMiddleware } from 'astro:middleware';
import { authorize, DEFAULT_ROLES } from './lib/iam';

const RESERVED_SLUGS = new Set([
  'admin', 'api', 'go', 'blog', 'tour', 'about', 'contact',
  'chuyen-muc', 'tags', 'landing', 'preview-post', 'design',
  '_astro', 'assets', 'images',
  'favicon.ico', 'robots.txt',
  'sitemap.xml', 'sitemap-index.xml', 'sitemap-0.xml', 'sitemap-blog.xml',
  'sitemap-pages.xml', 'sitemap-posts.xml', 'sitemap-tours.xml', 'sitemap-countries.xml'
]);

export const onRequest = defineMiddleware(async (context, next) => {
  const path = context.url.pathname;

  // Get D1 and KV bindings early for admin check
  let d1Db: any = null;
  let sessionKV: any = null;

  try {
    const rt = (context.locals as any)?.runtime;
    if (rt?.env) {
      d1Db = rt.env.dulichcoguu_d1;
      sessionKV = rt.env.SESSION;
    }
  } catch (_) {}

  if (!d1Db || !sessionKV) {
    try {
      const mod = await import('cloudflare:workers');
      if (mod?.env) {
        if (!d1Db) d1Db = mod.env.dulichcoguu_d1;
        if (!sessionKV) sessionKV = mod.env.SESSION;
      }
    } catch (_) {}
  }

  // 0. WWW Redirect & HTTPS Enforce
  const host = context.request.headers.get('Host') || context.url.host;
  if (host === 'www.thericetour.com' || host === 'www.thericetour.com:80' || host === 'www.thericetour.com:443') {
    const url = new URL(context.url);
    url.hostname = 'thericetour.com';
    url.protocol = 'https:';
    return context.redirect(url.toString(), 301);
  }

  // 0.5 Strip junk WordPress/Facebook/Ad query parameters → 301 redirect
  // Middleware redirect = 90% hiệu quả, robots.txt chỉ hỗ trợ 10%
  const JUNK_PARAMS = [
    'nocache', 'jet_blog_ajax',           // WordPress cache/plugin rác
    'replytocom', 'unapproved', 'moderation-hash', // WP comment params
    'preview', '_thumbnail_id', 'doing_wp_cron',    // WP legacy
    'fbclid', 'gclid',                     // Facebook/Google ad tracking
  ];
  const cleanUrl = new URL(context.request.url);
  let hasJunk = false;
  for (const p of JUNK_PARAMS) {
    if (cleanUrl.searchParams.has(p)) {
      cleanUrl.searchParams.delete(p);
      hasJunk = true;
    }
  }
  if (hasJunk) {
    return context.redirect(cleanUrl.toString(), 301);
  }

  // 0.6 Fix /emegazine typo alias → 301 redirect to /emagazine
  const pathname = cleanUrl.pathname;
  if (pathname === '/emegazine' || pathname === '/emegazine/') {
    cleanUrl.pathname = '/emagazine';
    return context.redirect(cleanUrl.toString(), 301);
  }

  // 1. Handle Admin Routes FIRST
  const isAdminUI = path.startsWith('/admin');
  const isAdminAPI = path.startsWith('/api/admin');

  if (isAdminUI || isAdminAPI) {
    if (path === '/admin/login') return next();

    const clearAndReject = () => {
      context.cookies.delete('admin_session', { path: '/' });
      if (isAdminAPI) {
        return new Response(JSON.stringify({ success: false, message: 'Unauthorized' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
      }
      return context.redirect('/admin/login');
    };

    const sessionId = context.cookies.get('admin_session')?.value;
    if (!sessionId) return clearAndReject();

    if (sessionKV) {
      try {
        const sessionStr = await sessionKV.get(`session:${sessionId}`);
        if (!sessionStr) return clearAndReject();

        const session = JSON.parse(sessionStr);

        if (session.is_active !== 1) return clearAndReject();

        const now = new Date();
        const expiresAt = new Date(session.expiresAt);
        if (now > expiresAt) return clearAndReject();

        // Check CSRF on mutations
        if (context.request.method !== 'GET' && context.request.method !== 'HEAD') {
          const origin = context.request.headers.get('Origin');
          const host = context.request.headers.get('Host');
          if (origin && host) {
            try {
              const originHost = new URL(origin).host;
              if (originHost !== host) {
                console.warn(`[CSRF Blocked] Origin: ${origin}, Host: ${host}`);
                return new Response('CSRF check failed', { status: 403 });
              }
            } catch {
              console.warn(`[CSRF Blocked] Invalid origin: ${origin}`);
              return new Response('CSRF check failed', { status: 403 });
            }
          }
        }

        // Update last active in background
        session.last_active_at = now.toISOString();
        context.locals.user = session;

        // IAM Injection: Fetch Role Matrix
        let roleMatrix = DEFAULT_ROLES;
        try {
          const cachedRoles = await sessionKV.get('iam:roles');
          if (cachedRoles) {
            roleMatrix = JSON.parse(cachedRoles);
          } else {
            const setting = await d1Db.prepare("SELECT value FROM SiteSetting WHERE key = 'role_permissions'").first();
            if (setting && setting.value) {
              roleMatrix = JSON.parse(setting.value as string);
              await sessionKV.put('iam:roles', setting.value, { expirationTtl: 3600 });
            }
          }
        } catch (e) {
          console.error('Failed to load role matrix, using default', e);
        }

        // Attach specific role permissions to user
        if (roleMatrix.roles[session.role]) {
          context.locals.user.permissions = roleMatrix.roles[session.role].permissions;
        }

        // Expose helper
        context.locals.authorize = (action: string, resource: string, ctx?: any) => {
          return authorize(context.locals.user, action, resource, ctx);
        };
        
      } catch (err) {
        console.error('Session verification error (KV failure)', err);
        // DO NOT log the user out if KV is temporarily down or throws an error.
        // Return 500 so the user can just refresh, instead of being forced to login again.
        if (isAdminAPI) {
          return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
        }
        return new Response('Internal Server Error: Session verification failed due to KV error.', { status: 500 });
      }
    } else {
      // No KV binding found
      return clearAndReject();
    }
    
    // If we're inside admin and authenticated, we don't need to do shortlink checking
    return applyMarkdownNegotiation(context, await next());
  }

  // 1.5 Lightweight admin session check for public pages (admin bar display)
  const publicSessionId = context.cookies.get('admin_session')?.value;
  if (publicSessionId && sessionKV) {
    try {
      const sessionStr = await sessionKV.get(`session:${publicSessionId}`);
      if (sessionStr) {
        const session = JSON.parse(sessionStr);
        const now = new Date();
        const expiresAt = new Date(session.expiresAt);
        if (session.is_active === 1 && now <= expiresAt) {
          context.locals.isAdminLoggedIn = true;
          context.locals.adminUsername = session.username || 'Admin';
        }
      }
    } catch (_) {}
  }

  // 2. Shortlink processing logic
  // Only process if it's a single segment path
  const pathSegments = path.split('/').filter(Boolean);
  if (path !== '/' && pathSegments.length === 1) {
    const slug = pathSegments[0].toLowerCase();
    
    // Process shortlinks only if not a reserved slug and DB exists
    if (!RESERVED_SLUGS.has(slug) && d1Db) {
      try {
        // Fetch from KV cache
        let linkMap: Record<string, any> = {};
        const cacheKey = 'links:all';
        let cacheHit = false;

        if (sessionKV) {
          try {
            const cached = await sessionKV.get(cacheKey);
            if (cached) {
              linkMap = JSON.parse(cached);
              cacheHit = true;
            }
          } catch (_) {}
        }

        // Cache miss → query D1
        if (!cacheHit) {
          const { results } = await d1Db.prepare("SELECT * FROM Link WHERE isActive = 1").all();
          if (results?.length > 0) {
            for (const link of results) {
              linkMap[(link as any).slug] = link;
            }
          }
          if (sessionKV) {
            try {
              await sessionKV.put(cacheKey, JSON.stringify(linkMap), { expirationTtl: 86400 });
            } catch (_) {}
          }
        }

        // Exact match lookup
        const target = linkMap[slug];
        if (target?.isActive && target?.url) {
          try {
            const u = new URL(target.url);
            const allowedProtocols = ['http:', 'https:', 'mailto:', 'tel:', 'sms:', 'zalo:'];
            if (allowedProtocols.includes(u.protocol)) {
              const sc = target.statusCode || 302;
              console.log(`[LINK_REDIRECT] ${slug} -> ${target.url} (${sc})`);
              return new Response(null, {
                status: sc,
                headers: {
                  'Location': target.url,
                  'Cache-Control': sc === 301 ? 'public, max-age=3600' : 'no-store, no-cache, must-revalidate, max-age=0',
                },
              });
            }
          } catch (_) {}
        }
      } catch (err) {
        console.error('[Middleware Link Error]', err);
      }
    }
  }

  // Generate response for normal pages
  return applyMarkdownNegotiation(context, await next());
});

// Helper function to handle Markdown Negotiation for AI Agents
async function applyMarkdownNegotiation(context: any, response: Response) {
  // 3. AI Agent Markdown Negotiation (RFC compliance for Agent-Ready)
  if (context.request.headers.get('Accept')?.includes('text/markdown')) {
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('text/html')) {
      const html = await response.clone().text();
      
      // Basic HTML to Markdown conversion for AI consumption
      let markdown = html
        // Extract title
        .replace(/<title[^>]*>(.*?)<\/title>/is, '# $1\n\n')
        // Headings
        .replace(/<h([1-6])[^>]*>(.*?)<\/h\1>/gis, (m, level, text) => `${'#'.repeat(Number(level))} ${text.trim()}\n\n`)
        // Paragraphs
        .replace(/<p[^>]*>(.*?)<\/p>/gis, '$1\n\n')
        // Links
        .replace(/<a[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gis, '[$2]($1)')
        // Line breaks
        .replace(/<br\s*\/?>/gi, '\n')
        // Strip out scripts and styles completely
        .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gis, '')
        // Strip remaining HTML tags
        .replace(/<[^>]+>/g, '')
        // Cleanup excessive whitespace
        .replace(/\n{3,}/g, '\n\n')
        .trim();
        
      const tokenEstimate = Math.ceil(markdown.length / 4);

      const newHeaders = new Headers(response.headers);
      newHeaders.set('Content-Type', 'text/markdown; charset=utf-8');
      newHeaders.set('x-markdown-tokens', tokenEstimate.toString());
      newHeaders.delete('Content-Length');

      return new Response(markdown, {
        status: response.status,
        headers: newHeaders
      });
    }
  }

  return response;
}
