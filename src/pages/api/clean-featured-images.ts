import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

export const GET: APIRoute = async () => {
  const d1Db = (env as any)?.dulichcoguu_d1 || (env as any)?.thericetour_d1;
  if (!d1Db) {
    return new Response(JSON.stringify({ error: 'Database binding not available' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Clear all mismatched / wrongly assigned featured images on Post table.
  // When featuredImage is NULL, the system cleanly renders the 16:9 NatGeo-style Editorial Graphic Card.
  const res = await d1Db.prepare(`
    UPDATE Post 
    SET featuredImage = NULL
  `).run();

  return new Response(JSON.stringify({
    success: true,
    message: 'Cleared all mismatched post images to NULL. All posts now render clean 16:9 Editorial Graphic Cards.',
    rowsAffected: res.meta?.changes || 0
  }, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
