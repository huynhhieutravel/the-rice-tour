import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

const cleanDestinations: Record<string, string> = {
  'south-vietnam': 'https://media.thericetour.com/uploads/two-girls-posing-rusted-tank-cu-chi-tunnels-the-rice.webp',
  'ho-chi-minh-city': 'https://media.thericetour.com/uploads/two-girls-posing-rusted-tank-cu-chi-tunnels-the-rice.webp',
  'saigon': 'https://media.thericetour.com/uploads/two-girls-posing-rusted-tank-cu-chi-tunnels-the-rice.webp',
  'mekong-delta': 'https://media.thericetour.com/uploads/girls-taking-selfie-waving-on-rowing-boat-mekong-canal.webp',
  'cu-chi-tunnels': 'https://media.thericetour.com/uploads/group-posing-secret-tunnel-entrance-leaves-cu-chi-1280x720.webp',
  'cu-chi': 'https://media.thericetour.com/uploads/group-posing-secret-tunnel-entrance-leaves-cu-chi-1280x720.webp',
  'ben-tre': 'https://media.thericetour.com/uploads/seven-story-pagoda-tower-vinh-trang-temple-my-tho.webp',
  'my-tho': 'https://media.thericetour.com/uploads/seven-story-pagoda-tower-vinh-trang-temple-my-tho.webp',
  'can-tho': 'https://media.thericetour.com/uploads/girls-smiling-red-polka-dress-rowing-boat-mekong-canal.webp',
  'central-vietnam': 'https://media.thericetour.com/uploads/seven-story-pagoda-tower-vinh-trang-temple-my-tho.webp',
  'hoi-an': 'https://media.thericetour.com/uploads/man-making-rice-paper-steam-traditional-village-mekong.webp',
  'north-vietnam': 'https://media.thericetour.com/uploads/girls-smiling-red-polka-dress-rowing-boat-mekong-canal.webp',
  'hanoi': 'https://media.thericetour.com/uploads/white-horse-carriage-decorated-colorful-thoi-son-village.webp',
};

export const GET: APIRoute = async () => {
  const d1Db = (env as any)?.dulichcoguu_d1 || (env as any)?.thericetour_d1 || (env as any)?.DB;
  if (!d1Db) {
    return new Response(JSON.stringify({ error: 'No D1 database binding' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const updated: any[] = [];

  for (const [slug, imgUrl] of Object.entries(cleanDestinations)) {
    const res = await d1Db.prepare(`
      UPDATE Country 
      SET featuredImage = ?, bannerImage = ? 
      WHERE slug = ?
    `).bind(imgUrl, imgUrl, slug).run();
    
    if (res.meta?.changes > 0) {
      updated.push({ slug, imgUrl, changes: res.meta.changes });
    }
  }

  // Also replace any remaining unsplash / tainted images in Country table with default
  const fallback = 'https://media.thericetour.com/uploads/girls-taking-selfie-waving-on-rowing-boat-mekong-canal.webp';
  const sanitizeRes = await d1Db.prepare(`
    UPDATE Country 
    SET featuredImage = ? 
    WHERE featuredImage LIKE '%unsplash.com%' OR featuredImage LIKE '%nucoimekong%' OR featuredImage IS NULL OR featuredImage = ''
  `).bind(fallback).run();

  return new Response(JSON.stringify({
    success: true,
    message: 'All destinations updated with authentic The Rice Tour CDN images',
    updated,
    sanitizedOthers: sanitizeRes.meta?.changes || 0,
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
