import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async ({ request }) => {
  try {
    const db = env.dulichcoguu_d1;
    if (!db) {
      return new Response(JSON.stringify({ error: 'Database not available' }), { status: 500 });
    }

    const url = new URL(request.url);
    const cluster = url.searchParams.get('cluster');

    if (!cluster) {
      return new Response(JSON.stringify({ error: 'Missing cluster parameter' }), { status: 400 });
    }

    // 1. Get all nodes (pages) in this cluster
    const nodesStmt = db.prepare('SELECT title, targetUrl FROM MatrixLink WHERE clusterName = ? ORDER BY title ASC');
    const { results: nodes } = await nodesStmt.bind(cluster).all();

    if (!nodes || nodes.length === 0) {
      return new Response(JSON.stringify({ success: true, data: { nodes: [], links: [] } }));
    }

    // 2. Get all links originating from these nodes
    const urls = nodes.map((n: any) => n.targetUrl);
    const placeholders = urls.map(() => '?').join(',');
    
    // Using a single query to get all internal links where both source and target are in the cluster
    const query = `
      SELECT sourceUrl, targetUrl, anchorText, type 
      FROM InternalLinkTracker 
      WHERE sourceUrl IN (${placeholders}) 
      AND targetUrl IN (${placeholders})
    `;
    
    const bindValues = [...urls, ...urls];
    const { results: links } = await db.prepare(query).bind(...bindValues).all();

    return new Response(JSON.stringify({ 
      success: true, 
      data: { 
        nodes: nodes || [], 
        links: links || [] 
      } 
    }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
