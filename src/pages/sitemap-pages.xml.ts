import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { getCanonicalMediaUrl } from '@/lib/imageOptimization';

export const GET: APIRoute = async () => {
  const d1Db = (env as any)?.dulichcoguu_d1 || (env as any)?.thericetour_d1 || (env as any)?.DB;
  let dbPages: any[] = [];
  
  if (d1Db) {
    try {
      const res = await d1Db
        .prepare("SELECT slug, updatedAt, featuredImage FROM Page WHERE status = 'published' OR status = 'publish'")
        .all();
      dbPages = res.results || [];
    } catch (e) {
      console.error('Failed to fetch pages for sitemap:', e);
    }
  }

  // Define core static inbound pages with their priorities
  const staticPagesMap: Record<string, { priority: string; changefreq: string }> = {
    '': { priority: '1.0', changefreq: 'daily' },
    'tours': { priority: '0.9', changefreq: 'daily' },
    'destinations': { priority: '0.9', changefreq: 'weekly' },
    'tailor-made': { priority: '0.9', changefreq: 'weekly' },
    'about-us': { priority: '0.8', changefreq: 'monthly' },
    'contact': { priority: '0.8', changefreq: 'monthly' },
    'blog': { priority: '0.8', changefreq: 'daily' },
    'privacy-policy': { priority: '0.5', changefreq: 'yearly' },
    'terms-of-service': { priority: '0.5', changefreq: 'yearly' },
  };

  // Map to hold unique URL entries
  const urlMap = new Map<string, { loc: string; priority: string; changefreq: string; lastmod?: string; image?: string }>();

  // 1. Add static core pages
  for (const [slug, conf] of Object.entries(staticPagesMap)) {
    const loc = slug ? `https://thericetour.com/${slug}` : `https://thericetour.com/`;
    urlMap.set(slug, {
      loc,
      priority: conf.priority,
      changefreq: conf.changefreq,
    });
  }

  // 2. Merge DB pages (override/add lastmod and images if available)
  for (const p of dbPages) {
    if (!p.slug && p.slug !== '') continue;
    const slugKey = p.slug.trim().replace(/^\/+|\/+$/g, '');
    
    // Ignore legacy or deleted slugs
    if (['gioi-thieu', 'lien-he', 'chinh-sach-bao-mat', 'dieu-khoan-dich-vu', 'diem-den-fit-tour'].includes(slugKey)) {
      continue;
    }

    const existing = urlMap.get(slugKey);
    let lastmod: string | undefined;
    if (p.updatedAt) {
      try {
        const dateStr = typeof p.updatedAt === 'string' ? p.updatedAt.replace(' ', 'T') : p.updatedAt;
        lastmod = new Date(dateStr).toISOString();
      } catch (e) {}
    }

    const image = p.featuredImage ? getCanonicalMediaUrl(p.featuredImage) : undefined;

    if (existing) {
      if (lastmod) existing.lastmod = lastmod;
      if (image) existing.image = image;
    } else {
      urlMap.set(slugKey, {
        loc: `https://thericetour.com/${slugKey}`,
        priority: '0.7',
        changefreq: 'monthly',
        lastmod,
        image,
      });
    }
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;
  
  for (const item of urlMap.values()) {
    xml += `  <url>\n`;
    xml += `    <loc>${item.loc}</loc>\n`;
    if (item.lastmod) {
      xml += `    <lastmod>${item.lastmod}</lastmod>\n`;
    }
    xml += `    <changefreq>${item.changefreq}</changefreq>\n`;
    xml += `    <priority>${item.priority}</priority>\n`;
    if (item.image) {
      xml += `    <image:image>\n      <image:loc>${item.image}</image:loc>\n    </image:image>\n`;
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
