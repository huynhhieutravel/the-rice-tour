import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from '../utils';

import { extractLinks } from '../../../utils/link-scanner';

export const POST = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize || !authorize('edit', 'post')) {
    return apiError('Unauthorized', 401);
  }

  const body = await request.json();
  const targetUrl = body.url;
  if (!targetUrl) return apiError('Missing URL', 400);

  const db = env?.dulichcoguu_d1;
  if (!db) return apiError('Database not available', 500);

  // Parse URL to find the table and slug
  let table = 'Page';
  let slug = targetUrl.replace(/^\//, ''); // default for Page/Post
  
  if (targetUrl.startsWith('/tour/')) {
    table = 'Tour';
    slug = targetUrl.replace('/tour/', '');
  } else {
    // Check if it's a Post or Page by querying both? 
    // We will just query both until we find the content.
  }

  // Find content
  let content = null;
  let res = await db.prepare(`SELECT content FROM Tour WHERE slug = ?`).bind(slug).first();
  if (res) {
    content = res.content;
  } else {
    res = await db.prepare(`SELECT content FROM Post WHERE slug = ?`).bind(slug).first();
    if (res) {
      content = res.content;
    } else {
      res = await db.prepare(`SELECT content FROM Page WHERE slug = ?`).bind(slug).first();
      if (res) {
        content = res.content;
      }
    }
  }

  if (content === null || content === undefined) {
    return apiError('Node not found in Database', 404);
  }

  // Rebuild slim valid URL map for checking 404s
  const slugMap = new Map<string, string>();
  const validUrlSet = new Set<string>();
  
  const tables = [
    { name: 'Page', prefix: '/' },
    { name: 'Post', prefix: '/' },
    { name: 'Tour', prefix: '/tour/' }
  ];

  for (const t of tables) {
    const dbRes = await db.prepare(`SELECT '${t.prefix}' || slug as url, slug FROM ${t.name} WHERE status != 'trash'`).all();
    if (dbRes.results) {
      for (const node of dbRes.results as any[]) {
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

  // Delete existing outbound links from this URL
  await db.prepare("DELETE FROM InternalLinkTracker WHERE sourceUrl = ? AND type = 'content'").bind(targetUrl).run();

  // Extract new links
  const links = await extractLinks(db, content, targetUrl, slugMap, validUrlSet);
  
  if (links.length > 0) {
    const insertStmt = db.prepare("INSERT INTO InternalLinkTracker (sourceUrl, targetUrl, anchorText, type, is404) VALUES (?, ?, ?, ?, ?)");
    const batchStatements = links.map(link => insertStmt.bind(link.sourceUrl, link.targetUrl, link.anchorText, link.type, link.is404));
    
    const DB_BATCH_SIZE = 100;
    for (let i = 0; i < batchStatements.length; i += DB_BATCH_SIZE) {
      const batch = batchStatements.slice(i, i + DB_BATCH_SIZE);
      await db.batch(batch);
    }
  }

  return new Response(JSON.stringify({
    success: true,
    scannedUrl: targetUrl,
    linksFound: links.length
  }), { status: 200, headers: { 'Content-Type': 'application/json' } });
});
