import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

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
    const { results: tags } = await d1Db.prepare(`
      SELECT slug
      FROM Tag 
    `).all();

    const siteUrl = 'https://thericetour.com';

    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    for (const tag of tags) {
      if (!tag.slug) continue;
      xml += `  <url>\n`;
      xml += `    <loc>${escXml(`${siteUrl}/tag/${tag.slug}`)}</loc>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.5</priority>\n`;
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
