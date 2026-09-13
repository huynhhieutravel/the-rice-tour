import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>https://thericetour.com/sitemap-pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://thericetour.com/sitemap-countries.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://thericetour.com/sitemap-tours.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://thericetour.com/sitemap-blog.xml</loc>
  </sitemap>
  <sitemap>
    <loc>https://thericetour.com/sitemap-categories.xml</loc>
  </sitemap>
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    }
  });
};
