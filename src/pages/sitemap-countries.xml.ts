import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getCanonicalMediaUrl } from '@/lib/imageOptimization';

export const GET: APIRoute = async () => {
  const d1Db = env.dulichcoguu_d1;
  let items: any[] = [];
  
  if (d1Db) {
    try {
      const res = await d1Db
        .prepare("SELECT slug, featuredImage FROM Country")
        .all();
      items = res.results || [];
    } catch (e) {
      console.error('Failed to fetch countries for sitemap:', e);
    }
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

  for (const item of items) {
    if (!item.slug) continue;
    xml += `  <url>\n    <loc>https://thericetour.com/country/${item.slug}</loc>\n`;
    if (item.updatedAt) {
      try {
        const dateStr = typeof item.updatedAt === 'string' ? item.updatedAt.replace(' ', 'T') : item.updatedAt;
        xml += `    <lastmod>${new Date(dateStr).toISOString()}</lastmod>\n`;
      } catch (e) {}
    }
    xml += `    <priority>0.9</priority>\n`;
    if (item.featuredImage) {
      const imgUrl = getCanonicalMediaUrl(item.featuredImage);
      xml += `    <image:image>\n      <image:loc>${imgUrl}</image:loc>\n    </image:image>\n`;
    }
    xml += `  </url>\n`;
  }
  
  xml += `</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    }
  });
};
