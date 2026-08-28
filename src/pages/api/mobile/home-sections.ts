import type { APIRoute } from 'astro';
import { safeQueryOptional } from '@/lib/db-client';
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async ({ request }) => {
  const d1Db = env?.dulichcoguu_d1;
  
  if (!d1Db) {
    return new Response(JSON.stringify({ success: false, error: "Database not connected" }), { 
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }

  try {
    // 1. Fetch config from SiteSetting
    const config_row = await d1Db.prepare("SELECT value FROM SiteSetting WHERE key = 'app_home_config'").first();
    let config: any = {};
    if (config_row && config_row.value) {
      try {
        config = JSON.parse(config_row.value as string);
      } catch (e) {}
    }

    // Default structure matching HomeScreen.js state
    const homeData: any = {
      flash_deals: [],
      china: [],
      himalaya: [],
      silkroad: [],
      africa: [],
      arctic: []
    };

    // 2. Process Flash Deals
    // Flash deals IDs saved in CMS are UUIDs from the Tour table, not ERP codes.
    if (config?.flash_deals?.data && Array.isArray(config.flash_deals.data) && config.flash_deals.data.length > 0) {
      const flashDealIds = config.flash_deals.data;
      const placeholders = flashDealIds.map(() => '?').join(',');
      
      const { results: flashDealTours } = await safeQueryOptional(
        d1Db.prepare(`SELECT id, title, slug, excerpt, featuredImage, price_number FROM Tour WHERE id IN (${placeholders})`).bind(...flashDealIds).all(),
        { results: [] }, { route: '/api/mobile/home-sections', queryType: 'fetch_flash_deals' }
      );
      
      homeData.flash_deals = flashDealTours.map((t: any) => ({
        id: t.id,
        title: t.title,
        slug: t.slug,
        featuredImage: t.featuredImage || 'https://thericetour.com/placeholder.jpg',
        price: t.price_number || 0,
        originalPrice: (t.price_number || 0) + 3000000,
        rating: "9.8",
        status: 'Đang Hot'
      }));
    }

    // 3. Process Region Collections
    // Mapping for our regional tabs
    const regionQueries = [
      { key: 'china', keyword: 'trung-quoc' },
      { key: 'himalaya', keyword: 'himalaya' },
      { key: 'silkroad', keyword: 'silk-road' },
      { key: 'africa', keyword: 'chau-phi' },
      { key: 'arctic', keyword: 'bac-cuc' }
    ];

    for (const region of regionQueries) {
      // Find tours matching the keyword in slug or title
      // FIX: use createdAt instead of created_at
      const query = `
        SELECT id, title, slug, excerpt, featuredImage, price_number, price_text
        FROM Tour
        WHERE (status = 'published' OR status = 'publish')
        AND (slug LIKE ? OR title LIKE ?)
        ORDER BY createdAt DESC
        LIMIT 6
      `;
      const likeTerm = `%${region.keyword}%`;
      const { results: regionTours } = await safeQueryOptional(
        d1Db.prepare(query).bind(likeTerm, likeTerm).all(),
        { results: [] }, { route: '/api/mobile/home-sections', queryType: `fetch_${region.key}` }
      );

      homeData[region.key] = regionTours.map((t: any) => ({
        id: t.id,
        title: t.title,
        slug: t.slug,
        desc: t.excerpt || '',
        image: t.featuredImage || 'https://thericetour.com/placeholder.jpg',
        price: t.price_text || (t.price_number ? `${t.price_number.toLocaleString('vi-VN')} VNĐ` : 'Liên Hệ'),
        price_number: t.price_number || 0,
        rating: "9.5",
        badgeLabel: "Tuyệt vời",
        reviews: Math.floor(Math.random() * 50) + 10
      }));
    }

    return new Response(JSON.stringify(homeData), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { 
      status: 500, 
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
};
