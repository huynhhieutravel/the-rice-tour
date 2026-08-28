import type { APIRoute } from 'astro';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS
  });
};

// Helper: Lấy D1 Database an toàn cho Astro v6
async function getD1Db(locals: any) {
  try {
    const mod = await import('cloudflare:workers');
    if (mod?.env?.dulichcoguu_d1) return mod.env.dulichcoguu_d1;
  } catch (e) {}
  return (locals as any)?.runtime?.env?.dulichcoguu_d1;
}

// Helper: Xác thực Token cơ bản
function getUserId(request: Request) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) return null;
  const token = authHeader.split(' ')[1];
  
  if (token === 'mock-jwt-token-review') return 999; // Hỗ trợ token test

  try {
    const decoded = JSON.parse(atob(token));
    if (decoded.exp && (decoded.exp * 1000) < Date.now()) return null; // Token hết hạn
    return decoded.sub; // Trả về user_id
  } catch (e) {
    // Nếu token không hợp lệ hoặc parse lỗi, trả về null để báo Unauthorized
    return null;
  }
}

export const POST: APIRoute = async ({ request, locals }) => {
  const d1Db = await getD1Db(locals);
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: "Database not connected" }), { status: 500, headers: CORS_HEADERS });

  const user_id = getUserId(request);
  if (!user_id) return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), { status: 401, headers: CORS_HEADERS });

  try {
    const body = await request.json();
    const { tour_slugs } = body; // Mảng các tour_slug cần sync lên

    if (!tour_slugs || !Array.isArray(tour_slugs)) {
      return new Response(JSON.stringify({ success: false, error: "Missing or invalid tour_slugs array" }), { status: 400, headers: CORS_HEADERS });
    }

    if (tour_slugs.length === 0) {
      return new Response(JSON.stringify({ success: true, message: "Nothing to sync", added_count: 0 }), { status: 200, headers: CORS_HEADERS });
    }

    // Dùng Batch Query để insert đồng loạt
    const statements = tour_slugs.map((slug: string) => {
      return d1Db.prepare(`
        INSERT OR IGNORE INTO MobileWishlist (user_id, tour_id)
        VALUES (?, ?)
      `).bind(user_id, slug);
    });

    await d1Db.batch(statements);

    // Lấy lại danh sách Wishlist MỚI NHẤT sau khi sync để App cập nhật local state
    const query = `
      SELECT 
        w.tour_id as tour_slug, 
        w.saved_at as added_at,
        t.title,
        t.featuredImage,
        t.price_number,
        t.format
      FROM MobileWishlist w
      LEFT JOIN Tour t ON w.tour_id = t.slug
      WHERE w.user_id = ?
      ORDER BY w.saved_at DESC
    `;
    const { results } = await d1Db.prepare(query).bind(user_id).all();

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Sync completed",
      added_count: statements.length,
      data: results
    }), { status: 200, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500, headers: CORS_HEADERS });
  }
};
