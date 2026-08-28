import type { APIRoute } from 'astro';
import { env } from "cloudflare:workers";

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const slug = url.searchParams.get('slug');
    if (!slug) return new Response('No slug', { status: 400 });

    const db = env.dulichcoguu_d1;
    const stmt = db.prepare(`SELECT * FROM Post WHERE slug = ?`);
    const postData = await stmt.bind(slug).first();

    return new Response(JSON.stringify(postData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (e) {
    return new Response(e.message, { status: 500 });
  }
}
