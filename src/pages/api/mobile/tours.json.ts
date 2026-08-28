import type { APIRoute } from "astro";
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async () => {
  // Lấy kết nối D1 Database từ Cloudflare Workers env
  const d1Db = env.dulichcoguu_d1;

  try {
    // Truy vấn dữ liệu Tour từ bảng Tour (chỉ lấy tour đã publish)
    // Chỉ lấy các trường cần thiết cho App hiển thị dạng danh sách (Card)
    const { results } = await d1Db.prepare(`
      SELECT 
        id, 
        title, 
        slug, 
        price_number as price, 
        featuredImage, 
        excerpt 
      FROM Tour 
      WHERE status = 'published' OR status = 'publish'
      ORDER BY createdAt DESC 
      LIMIT 10
    `).all();

    // Mapping lại dữ liệu (Ví dụ thêm tiền tố URL cho ảnh nếu cần)
    const tours = results.map((tour: any) => ({
      id: tour.id,
      title: tour.title,
      slug: tour.slug,
      price: tour.price,
      // Đảm bảo có URL đầy đủ để App có thể load được
      image: tour.featuredImage, 
      excerpt: tour.excerpt,
      // App có thể dùng URL này để mở webview hoặc điều hướng
      web_url: `https://thericetour.com/tour/${tour.slug}`
    }));

    // Trả về JSON cho Mobile App
    return new Response(JSON.stringify({
      success: true,
      message: "Lấy danh sách tour thành công",
      data: tours
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        // Cho phép App từ domain khác gọi API (CORS)
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({
      success: false,
      message: "Lỗi hệ thống",
      error: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
