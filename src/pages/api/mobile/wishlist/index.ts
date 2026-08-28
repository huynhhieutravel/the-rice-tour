import type { APIRoute } from 'astro';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
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

// Helper: Xác thực Token cơ bản (Phase hiện tại đang dùng btoa JSON)
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

// GET: Lấy danh sách Wishlist (JOIN với bảng Tour để lấy chi tiết)
export const GET: APIRoute = async ({ request, locals }) => {
  const d1Db = await getD1Db(locals);
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: "Database not connected" }), { status: 500, headers: CORS_HEADERS });

  const user_id = getUserId(request);
  if (!user_id) return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), { status: 401, headers: CORS_HEADERS });

  try {
    // JOIN giữa MobileWishlist và Tour để trả về đầy đủ metadata của Tour cho App
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
      data: results
    }), { status: 200, headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500, headers: CORS_HEADERS });
  }
};

// POST: Thêm Tour vào Wishlist
export const POST: APIRoute = async ({ request, locals }) => {
  const d1Db = await getD1Db(locals);
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: "Database not connected" }), { status: 500, headers: CORS_HEADERS });

  const user_id = getUserId(request);
  if (!user_id) return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), { status: 401, headers: CORS_HEADERS });

  try {
    const body = await request.json();
    const { tour_slug } = body;

    if (!tour_slug) {
      return new Response(JSON.stringify({ success: false, error: "Missing tour_slug" }), { status: 400, headers: CORS_HEADERS });
    }

    // Sử dụng INSERT OR IGNORE để tránh lỗi khi người dùng thêm trùng 1 tour nhiều lần
    const insertStmt = d1Db.prepare(`
      INSERT OR IGNORE INTO MobileWishlist (user_id, tour_id)
      VALUES (?, ?)
    `);
    await insertStmt.bind(user_id, tour_slug).run();

    return new Response(JSON.stringify({ success: true, message: "Added to wishlist" }), { status: 200, headers: CORS_HEADERS });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500, headers: CORS_HEADERS });
  }
};

// DELETE: Xóa Tour khỏi Wishlist
export const DELETE: APIRoute = async ({ request, locals }) => {
  const d1Db = await getD1Db(locals);
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: "Database not connected" }), { status: 500, headers: CORS_HEADERS });

  const user_id = getUserId(request);
  if (!user_id) return new Response(JSON.stringify({ success: false, error: "Unauthorized" }), { status: 401, headers: CORS_HEADERS });

  try {
    // URL format: /api/mobile/wishlist?tour_slug=xxx
    const url = new URL(request.url);
    const tour_slug = url.searchParams.get('tour_slug');

    if (!tour_slug) {
      return new Response(JSON.stringify({ success: false, error: "Missing tour_slug parameter" }), { status: 400, headers: CORS_HEADERS });
    }

    const deleteStmt = d1Db.prepare(`
      DELETE FROM MobileWishlist WHERE user_id = ? AND tour_id = ?
    `);
    await deleteStmt.bind(user_id, tour_slug).run();

    return new Response(JSON.stringify({ success: true, message: "Removed from wishlist" }), { status: 200, headers: CORS_HEADERS });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500, headers: CORS_HEADERS });
  }
};
