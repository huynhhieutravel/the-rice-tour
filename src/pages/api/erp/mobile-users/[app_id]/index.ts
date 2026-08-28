import type { APIRoute } from 'astro';

async function getD1Db(locals: any) {
  try {
    const mod = await import('cloudflare:workers');
    if (mod?.env?.dulichcoguu_d1) return mod.env.dulichcoguu_d1;
  } catch (e) {}
  return (locals as any)?.runtime?.env?.dulichcoguu_d1;
}

// Hàm kiểm tra Secret Key
function verifyErpAuth(request: Request, locals: any) {
  const ERP_SECRET_KEY = import.meta.env.ASTRO_ERP_SECRET || (locals as any)?.runtime?.env?.ASTRO_ERP_SECRET;
  
  if (!ERP_SECRET_KEY) {
    console.error('ASTRO_ERP_SECRET is missing from environment variables');
    return false;
  }

  const authHeader = request.headers.get('Authorization');
  if (!authHeader || authHeader !== `Bearer ${ERP_SECRET_KEY}`) {
    return false;
  }
  return true;
}

// GET: Trả về thông tin User khi CRM truyền app_id sang
export const GET: APIRoute = async ({ params, request, locals }) => {
  if (!verifyErpAuth(request, locals)) {
    return new Response(JSON.stringify({ success: false, error: "Unauthorized ERP Access" }), { status: 401 });
  }

  const d1Db = await getD1Db(locals);
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: "Database not connected" }), { status: 500 });

  const app_id = params.app_id?.toUpperCase();

  if (!app_id || app_id.length !== 6) {
    return new Response(JSON.stringify({ success: false, error: "Invalid app_id" }), { status: 400 });
  }

  try {
    const user = await d1Db.prepare(`
      SELECT user_id, app_id, email, provider, customer_id, created_at, updated_at 
      FROM MobileUser 
      WHERE app_id = ?
    `).bind(app_id).first();

    if (!user) {
      return new Response(JSON.stringify({ success: false, error: "User not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, data: user }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};
