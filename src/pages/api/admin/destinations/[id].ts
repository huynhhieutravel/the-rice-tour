import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const DELETE: APIRoute = async ({ params, locals }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;
  const isAllowed = user?.role === 'super_admin' || user?.role === 'admin' || (authorize && (authorize('delete', 'tour') || authorize('delete', 'tours')));
  if (!isAllowed) {
    return new Response(JSON.stringify({ success: false, error: 'Forbidden: Bạn không có quyền xóa điểm đến' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  }
  
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: 'DB missing' }), { status: 500 });

  const id = params.id;
  if (!id) return new Response(JSON.stringify({ success: false, error: 'ID is required' }), { status: 400 });

  try {
    const dest = await d1Db.prepare("SELECT slug FROM Country WHERE id = ?").bind(id).first<any>();
    if (dest?.slug) {
      await d1Db.prepare("DELETE FROM TourCountry WHERE country_slug = ?").bind(dest.slug).run();
    }
    await d1Db.prepare("DELETE FROM Country WHERE id = ?").bind(id).run();

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (e: any) {
    return new Response(JSON.stringify({ success: false, error: e.message }), { status: 500 });
  }
};

export const GET: APIRoute = async ({ params, locals }) => {
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: 'DB missing' }), { status: 500 });

  const id = params.id;
  try {
    const dest = await d1Db.prepare("SELECT * FROM Country WHERE id = ?").bind(id).first();
    if (!dest) return new Response(JSON.stringify({ success: false, error: 'Not found' }), { status: 404 });
    return new Response(JSON.stringify({ success: true, data: dest }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (e: any) {
    return new Response(JSON.stringify({ success: false, error: e.message }), { status: 500 });
  }
};
