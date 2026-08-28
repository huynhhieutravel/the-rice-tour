import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getCanonicalMediaUrl } from '@/lib/imageOptimization';

/** Escape special XML characters in URLs and text */
function escXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = async ({ request }) => {
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response("Database missing", { status: 500 });

  try {
    const { results: posts } = await d1Db.prepare(`
      SELECT slug, updatedAt, createdAt, featuredImage
      FROM Post 
      WHERE status = 'published' OR status = 'publish'
      ORDER BY createdAt DESC
    `).all();

    const siteUrl = 'https://thericetour.com';

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

    // Trang chủ Blog
    xml += `  <url>\n`;
    xml += `    <loc>${siteUrl}/blog</loc>\n`;
    xml += `    <changefreq>daily</changefreq>\n`;
    xml += `    <priority>1.0</priority>\n`;
    xml += `  </url>\n`;

    // Danh sách bài viết
    for (const post of posts) {

      const date = post.updatedAt || post.createdAt;
      let lastmod = '';
      try {
        const dateStr = typeof date === 'string' ? date.replace(' ', 'T') : date;
        lastmod = new Date(dateStr as string).toISOString().split('T')[0];
      } catch (e) {}
      
      xml += `  <url>\n`;
      xml += `    <loc>${escXml(`${siteUrl}/${post.slug}`)}</loc>\n`;
      if (lastmod) {
        xml += `    <lastmod>${lastmod}</lastmod>\n`;
      }
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.8</priority>\n`;
      if (post.featuredImage) {
        const imgUrl = getCanonicalMediaUrl(post.featuredImage);
        xml += `    <image:image>\n      <image:loc>${escXml(imgUrl)}</image:loc>\n    </image:image>\n`;
      }
      xml += `  </url>\n`;
    }

    xml += `</urlset>`;

    return new Response(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  } catch (err) {
    console.error("Sitemap error:", err);
    return new Response("Error generating sitemap", { status: 500 });
  }
};
