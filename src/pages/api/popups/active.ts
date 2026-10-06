import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

let memoryCachedPopups: { data: string; expiry: number } | null = null;

export const GET: APIRoute = async ({ request }) => {
  const now = Date.now();
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400"
  };

  if (memoryCachedPopups && memoryCachedPopups.expiry > now) {
    return new Response(memoryCachedPopups.data, { status: 200, headers });
  }

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response(JSON.stringify([]), { status: 200, headers });
  
  try {
    const { results } = await d1Db.prepare(`
      SELECT id, title, content as description, button_url as link, image_url as image, slug as pageSlugToMatch 
      FROM Popup 
      WHERE is_active = 1 
      ORDER BY created_at DESC
    `).all();
    const dataStr = JSON.stringify(results || []);
    memoryCachedPopups = { data: dataStr, expiry: now + 300000 }; // 5 min worker memory cache
    return new Response(dataStr, { status: 200, headers });
  } catch (error: any) {
    return new Response(JSON.stringify([]), { status: 200, headers });
  }
};
