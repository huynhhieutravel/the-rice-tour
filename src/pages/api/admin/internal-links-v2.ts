import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async ({ request }) => {
  try {
    const db = env.dulichcoguu_d1;
    if (!db) {
      return new Response(JSON.stringify({ error: 'Database not available' }), { status: 500 });
    }

    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const search = url.searchParams.get('search') || '';
    const offset = (page - 1) * limit;

    let query = `SELECT * FROM InternalLinkTracker`;
    let countQuery = `SELECT COUNT(*) as total FROM InternalLinkTracker`;
    let params: string[] = [];

    if (search) {
      query += ` WHERE sourceUrl LIKE ? OR targetUrl LIKE ? OR anchorText LIKE ? OR tags LIKE ?`;
      countQuery += ` WHERE sourceUrl LIKE ? OR targetUrl LIKE ? OR anchorText LIKE ? OR tags LIKE ?`;
      const searchParam = `%${search}%`;
      params = [searchParam, searchParam, searchParam, searchParam];
    }

    query += ` ORDER BY id DESC LIMIT ? OFFSET ?`;
    
    const [dataResult, countResult] = await db.batch([
      db.prepare(query).bind(...params, limit, offset),
      db.prepare(countQuery).bind(...params)
    ]);

    return new Response(JSON.stringify({
      success: true,
      data: dataResult.results,
      total: (countResult.results[0] as any).total,
      page,
      limit
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const db = env.dulichcoguu_d1;
    if (!db) {
      return new Response(JSON.stringify({ error: 'Database not available' }), { status: 500 });
    }

    const { id, tags } = await request.json();
    
    if (!id) {
      return new Response(JSON.stringify({ error: 'Missing ID' }), { status: 400 });
    }

    await db.prepare(`UPDATE InternalLinkTracker SET tags = ? WHERE id = ?`).bind(tags || '', id).run();

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};
