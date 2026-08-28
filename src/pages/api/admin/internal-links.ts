import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async ({ request }) => {
  try {
    const db = env.dulichcoguu_d1;
    if (!db) {
      return new Response(JSON.stringify({ error: 'Database not available' }), { status: 500 });
    }

    const url = new URL(request.url);
    const view = url.searchParams.get('view') || 'outbound'; // outbound | inbound
    const searchUrl = url.searchParams.get('url') || '';

    let results = [];
    if (view === 'outbound') {
      // Tìm các link bên trong trang sourceUrl
      if (searchUrl) {
        const stmt = db.prepare(`SELECT * FROM InternalLinkTracker WHERE sourceUrl = ? ORDER BY id DESC`);
        const { results: rows } = await stmt.bind(searchUrl).all();
        results = rows;
      }
    } else if (view === 'inbound') {
      // Tìm các trang trỏ về targetUrl
      if (searchUrl) {
        const stmt = db.prepare(`SELECT * FROM InternalLinkTracker WHERE targetUrl = ? ORDER BY id DESC`);
        const { results: rows } = await stmt.bind(searchUrl).all();
        results = rows;
      }
    }

    return new Response(JSON.stringify({ success: true, data: results }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
};
