import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

export const GET: APIRoute = async ({ request, locals }) => {
  const d1 = env?.dulichcoguu_d1;
  if (!d1) return new Response('D1 Database not found', { status: 500 });

  try {
    const { results } = await d1.prepare("SELECT * FROM Post WHERE slug IN ('nui-kailash-la-gi', 'chuan-bi-suc-khoe-kora-kailash')").all();
    
    // Remove large text fields
    const safeResults = results.map((row: any) => {
      const { content, content_html, ...rest } = row;
      return rest;
    });

    return new Response(JSON.stringify(safeResults, null, 2), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response('Error: ' + error.message, { status: 500 });
  }
}
