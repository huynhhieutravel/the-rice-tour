import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getCanonicalMediaUrl } from '@/lib/imageOptimization';

export const GET: APIRoute = async () => {
  const d1Db = env.dulichcoguu_d1;
  let pages: any[] = [];
  
  if (d1Db) {
    try {
      const res = await d1Db
        .prepare("SELECT slug, updatedAt, featuredImage FROM Page WHERE status = 'published' OR status = 'publish'")
        .all();
      pages = res.results || [];
    } catch (e) {
      console.error('Failed to fetch pages for sitemap:', e);
    }
  }

  const staticPages = [
    { slug: '', priority: '1.0' },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;
  
  for (const p of staticPages) {
    xml += `  <url>\n    <loc>https://thericetour.com/${p.slug}</loc>\n    <priority>${p.priority}</priority>\n  </url>\n`;
  }

  for (const p of pages) {
    // Avoid double slash if slug is empty
    const slugPath = p.slug ? `${p.slug}` : '';
    xml += `  <url>\n    <loc>https://thericetour.com/${slugPath}</loc>\n`;
    if (p.updatedAt) {
      try {
        const dateStr = typeof p.updatedAt === 'string' ? p.updatedAt.replace(' ', 'T') : p.updatedAt;
        xml += `    <lastmod>${new Date(dateStr).toISOString()}</lastmod>\n`;
      } catch (e) {}
    }
    xml += `    <priority>0.7</priority>\n`;
    if (p.featuredImage) {
      const imgUrl = getCanonicalMediaUrl(p.featuredImage);
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
