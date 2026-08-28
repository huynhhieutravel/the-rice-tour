import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async ({ request }) => {
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response(JSON.stringify([]), { status: 200, headers: { "Content-Type": "application/json" } });
  
  try {
    const { results } = await d1Db.prepare(`
      SELECT id, title, content as description, button_url as link, image_url as image, slug as pageSlugToMatch 
      FROM Popup 
      WHERE is_active = 1 
      ORDER BY created_at DESC
    `).all();
    return new Response(JSON.stringify(results || []), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify([]), { status: 200, headers: { "Content-Type": "application/json" } });
  }
};
