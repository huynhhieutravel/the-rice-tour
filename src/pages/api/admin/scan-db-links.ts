import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from '../utils';
import * as cheerio from 'cheerio';
import astroLinks from '../../../data/astro-links.json';

import { extractLinks } from '../../../utils/link-scanner';

export const POST = withErrorHandler(async ({ request, locals }) => {
  // Allow if cron secret matches OR if user has 'edit post' permission
  const cronSecret = request.headers.get('x-cron-secret');
  const isCron = cronSecret && cronSecret === env.CRON_SECRET;
  
  if (!isCron) {
    const authorize = (locals as any).authorize;
    if (!authorize || !authorize('edit', 'post')) {
      return apiError('Unauthorized', 401);
    }
  }

  const db = env?.dulichcoguu_d1;
  if (!db) return apiError('Database not available', 500);

  // Auto-upgrade schema for 404 tracking
  try {
    await db.exec("ALTER TABLE InternalLinkTracker ADD COLUMN is404 BOOLEAN DEFAULT 0;");
  } catch (e) {}

  // 1. Clear existing 'content' type links
  await db.exec("DELETE FROM InternalLinkTracker WHERE type = 'content'");

  // 2. Fetch URLs to build valid map
  const slugMap = new Map<string, string>();
  const validUrlSet = new Set<string>();
  
  const tables = [
    { name: 'Page', prefix: '/' },
    { name: 'Post', prefix: '/' },
    { name: 'Tour', prefix: '/tour/' }
  ];

  for (const t of tables) {
    const res = await db.prepare(`SELECT '${t.prefix}' || slug as url, slug FROM ${t.name} WHERE status != 'trash'`).all();
    if (res.results) {
      for (const node of res.results as any[]) {
        if (node.slug && node.url) {
          slugMap.set(node.slug, node.url);
          validUrlSet.add(node.url);
        }
      }
    }
  }

  try {
    const catRes = await db.prepare("SELECT '/' || slug as url, slug FROM BlogCategory").all();
    if (catRes.results) {
      for (const node of catRes.results as any[]) {
        if (node.slug && node.url) {
          slugMap.set(node.slug, node.url);
          validUrlSet.add(node.url);
        }
      }
    }
  } catch (e) { console.error(e); }

  try {
    const linkRes = await db.prepare("SELECT '/' || slug as url, slug FROM Link WHERE isActive = 1").all();
    if (linkRes.results) {
      for (const node of linkRes.results as any[]) {
        if (node.slug && node.url) {
          slugMap.set(node.slug, node.url);
          validUrlSet.add(node.url);
        }
      }
    }
  } catch (e) { console.error(e); }

  let totalLinksFound = 0;
  const batchStatements: any[] = [];
  const insertStmt = db.prepare("INSERT INTO InternalLinkTracker (sourceUrl, targetUrl, anchorText, type, is404) VALUES (?, ?, ?, ?, ?)");
  let scannedNodes = 0;

  // Track which slugs are already handled by astro-links
  const astroSlugs = new Set(Object.keys(astroLinks));

  // 3. Scan DB content
  const BATCH_SIZE = 50;
  
  for (const t of tables) {
    let offset = 0;
    while (true) {
      const chunk = await db.prepare(`SELECT '${t.prefix}' || slug as url, slug, content FROM ${t.name} WHERE status != 'trash' LIMIT ${BATCH_SIZE} OFFSET ${offset}`).all();
      
      if (!chunk.results || chunk.results.length === 0) {
        break;
      }
      
      for (const node of chunk.results as any[]) {
        // SKIP node if it is already in astro-links to prevent duplicates!
        if (node.slug && astroSlugs.has(node.slug)) {
          continue; 
        }

        scannedNodes++;
        
        let links: any[] = [];
        if (node.content) {
          links = await extractLinks(db, node.content, node.url, slugMap, validUrlSet);
        }
        
        for (const link of links) {
          totalLinksFound++;
          batchStatements.push(insertStmt.bind(link.sourceUrl, link.targetUrl, link.anchorText, link.type, link.is404));
        }
      }
      offset += BATCH_SIZE;
    }
  }

  // 3.5 Insert Astro Static Links
  for (const [key, rawAstroLinks] of Object.entries(astroLinks)) {
    if (key === '404' || key === '500') continue;
    
    scannedNodes++;
    let sourceUrl = key === '/' ? '/' : `/${key}`;
    if (key.startsWith('components/') || key.startsWith('data/')) {
        sourceUrl = `/${key}`; 
    }
    
    for (const raw of rawAstroLinks as any[]) {
      let targetUrl = raw.targetUrl;
      
      // Normalize target URL
      if (targetUrl.startsWith('https://thericetour.com')) {
        targetUrl = targetUrl.replace('https://thericetour.com', '');
      } else if (targetUrl.startsWith('https://www.fittour.vn')) {
        targetUrl = targetUrl.replace('https://www.fittour.vn', '');
      } else if (targetUrl.startsWith('https://thericetour.com')) {
        targetUrl = targetUrl.replace('https://thericetour.com', '');
      }
      
      if (targetUrl.startsWith('/')) {
        let cleanTargetUrl = targetUrl;
        if (cleanTargetUrl.endsWith('/') && cleanTargetUrl.length > 1) {
          cleanTargetUrl = cleanTargetUrl.slice(0, -1);
        }
        
        // Remove hash and query
        const [basePath, ...rest] = cleanTargetUrl.split(/(?=[#?])/);
        const hashOrQuery = rest.join('');
        
        const parts = basePath.split('/');
        const slug = parts[parts.length - 1];
        if (slugMap.has(slug)) {
          cleanTargetUrl = (slugMap.get(slug) as string) + hashOrQuery;
        }
        
        let is404 = 0;
        const staticRoutes = new Set(['/', '/tours', '/blog', '/destinations', '/contact', '/about', '/search', '/gallery']);
        const urlToCheck = cleanTargetUrl.split(/(?=[#?])/)[0];
        if (!validUrlSet.has(urlToCheck) && !staticRoutes.has(urlToCheck)) {
          const dynamicPrefixes = ['/country/', '/tag/', '/category/', '/chuyen-muc/', '/dich-vu-visa', '/dia-diem-to-chuc', '/author/'];
          const isDynamic = dynamicPrefixes.some(prefix => urlToCheck.startsWith(prefix));
          if (!isDynamic) {
            is404 = 1;
          }
        }
        
        totalLinksFound++;
        batchStatements.push(insertStmt.bind(sourceUrl, cleanTargetUrl, raw.anchorText, 'content', is404));
      }
    }
  }

  // 4. Execute inserts in batches of 100
  let insertedCount = 0;
  const DB_BATCH_SIZE = 100;
  for (let i = 0; i < batchStatements.length; i += DB_BATCH_SIZE) {
    const batch = batchStatements.slice(i, i + DB_BATCH_SIZE);
    await db.batch(batch);
    insertedCount += batch.length;
  }

  return new Response(JSON.stringify({ 
    success: true,
    scannedNodes,
    linksFound: totalLinksFound,
    linksInserted: insertedCount,
    triggeredByCron: !!isCron
  }), { status: 200, headers: { 'Content-Type': 'application/json' } });
});
