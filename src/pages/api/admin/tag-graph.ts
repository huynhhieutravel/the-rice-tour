import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from '../utils';

export const GET = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('view', 'post')) return apiError('Forbidden', 403);

  const db = env?.dulichcoguu_d1;
  if (!db) return apiError('Database not available', 500);

  // Auto-create just in case it doesn't exist
  await db.exec("CREATE TABLE IF NOT EXISTS UrlTags (url TEXT PRIMARY KEY, tags TEXT);");

  const url = new URL(request.url);
  const tag = url.searchParams.get('tag');

  if (!tag) return apiError('Missing tag', 400);

  const searchTag = `%${tag}%`;

  // 1. Get all nodes (URLs) matching the tag
  const nodesQuery = `
    WITH AllNodes AS (
      SELECT '/' || slug as url, 'page' as type, title FROM Page WHERE status != 'trash'
      UNION ALL
      SELECT '/' || slug as url, 'post' as type, title FROM Post WHERE status != 'trash'
      UNION ALL
      SELECT '/tour/' || slug as url, 'tour' as type, title FROM Tour WHERE status != 'trash'
      UNION ALL
      SELECT '/country/' || slug as url, 'country' as type, name as title FROM Country
    )
    SELECT n.url, n.type, n.title
    FROM AllNodes n
    JOIN UrlTags t ON n.url = t.url
    WHERE t.tags LIKE ?
  `;

  const nodesRes = await db.prepare(nodesQuery).bind(searchTag).all();
  const dbNodes = nodesRes.results as any[];

  if (dbNodes.length === 0) {
    return apiSuccess({
      nodes: [], edges: [], categories: {}, stats: { totalNodes: 0, totalEdges: 0, orphanNodes: 0, posts: 0, tours: 0, pages: 0 }
    });
  }

  // 2. Get edges between these nodes
  const urls = dbNodes.map(n => n.url);
  
  const absoluteUrls = urls.map(u => `https://fittour.vn${u}`);
  const allMatchingUrls = [...urls, ...absoluteUrls];
  const matchParams = allMatchingUrls.map(() => '?').join(',');

  const edgesQuery = `
    SELECT sourceUrl, targetUrl 
    FROM InternalLinkTracker 
    WHERE sourceUrl IN (${allMatchingUrls.map(u => `'${u.replace(/'/g, "''")}'`).join(',')}) 
      AND targetUrl IN (${allMatchingUrls.map(u => `'${u.replace(/'/g, "''")}'`).join(',')})
  `;

  const edgesRes = await db.prepare(edgesQuery).all();
  
  // Process nodes for frontend
  const nodes = dbNodes.map(n => ({
    id: n.url,
    slug: n.url,
    title: n.title,
    type: n.type,
    connections: 0, // calculated later
    url: n.url
  }));

  // Process edges to ensure they point to the relative URL ids
  const normalizeUrl = (u: string) => u.replace('https://thericetour.com', '');
  const edges = (edgesRes.results || []).map((e: any) => ({
    source: normalizeUrl(e.sourceUrl),
    target: normalizeUrl(e.targetUrl)
  }));

  // Count connections
  edges.forEach(e => {
    const srcNode = nodes.find(n => n.id === e.source);
    const tgtNode = nodes.find(n => n.id === e.target);
    if (srcNode) srcNode.connections++;
    if (tgtNode) tgtNode.connections++;
  });

  return new Response(JSON.stringify({
    success: true,
    nodes,
    edges,
    categories: {},
    stats: {
      totalNodes: nodes.length,
      totalEdges: edges.length,
      orphanNodes: nodes.filter(n => n.connections === 0).length,
      posts: nodes.filter(n => n.type === 'post').length,
      tours: nodes.filter(n => n.type === 'tour').length,
      pages: nodes.filter(n => n.type === 'page' || n.type === 'country').length
    }
  }), { status: 200, headers: { 'Content-Type': 'application/json' } });
});
