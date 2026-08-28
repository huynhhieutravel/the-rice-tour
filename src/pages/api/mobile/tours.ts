import type { APIRoute } from 'astro';
import { safeQueryOptional } from '@/lib/db-client';
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async ({ request, url }) => {
  // BẢO VỆ WEBSITE: Endpoint này chỉ dành riêng cho Mobile App
  // Dữ liệu trả về hoàn toàn là JSON, không dính dáng đến HTML Elementor của Web.
  
  const d1Db = env?.dulichcoguu_d1;
  
  if (!d1Db) {
    return new Response(JSON.stringify({ success: false, error: "Database not connected" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Phân trang đơn giản cho App (Scroll vô cực)
  const limit = Number(url.searchParams.get('limit')) || 10;
  const offset = Number(url.searchParams.get('offset')) || 0;

  // Truy vấn trực tiếp từ bảng Tour (loại bỏ các cột HTML nặng nề như content, content_html, css_content)
  const query = `
    SELECT id, title, slug, excerpt, featuredImage, price_number, price_text, days
    FROM Tour
    WHERE status = 'published' OR status = 'publish'
    ORDER BY created_at DESC
    LIMIT ? OFFSET ?
  `;

  const { results: rawTours } = await safeQueryOptional(
    d1Db.prepare(query).bind(limit, offset).all(),
    { results: [] },
    { route: '/api/mobile/tours', queryType: 'fetch_mobile_tours' }
  );

  // Định dạng lại dữ liệu cho App dễ sử dụng (Data Mapping)
  const formattedTours = rawTours.map((t: any) => ({
    id: t.id,
    title: t.title,
    slug: t.slug,
    description: t.excerpt || '',
    image: t.featuredImage || 'https://thericetour.com/placeholder.jpg',
    price: {
      raw: t.price_number || 0,
      display: t.price_text || (t.price_number ? `${t.price_number.toLocaleString('vi-VN')} VNĐ` : 'Liên Hệ')
    },
    duration: t.days || '',
    tags: [] // Placeholder cho App vẽ UI
  }));

  return new Response(JSON.stringify({
    success: true,
    data: formattedTours,
    meta: { limit, offset, count: formattedTours.length }
  }), {
    status: 200,
    headers: { 
      'Content-Type': 'application/json',
      // Cache nhẹ 5 phút ở Edge để App load siêu nhanh, không sập DB
      'Cache-Control': 'public, max-age=300' 
    }
  });
};
