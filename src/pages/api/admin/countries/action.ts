import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const POST: APIRoute = async ({ request, locals }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;
  const isAllowed = user?.role === 'super_admin' || user?.role === 'admin' || (authorize && (authorize('delete', 'tour') || authorize('delete', 'tours')));
  if (!isAllowed) {
    return new Response(JSON.stringify({ success: false, error: { message: 'Forbidden: Bạn không có quyền thực hiện thao tác này' } }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  }
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: { message: "DB Error" } }), { status: 500 });

  try {
    const body = await request.json();
    const { action, ids } = body;

    if (!action || !ids || !Array.isArray(ids) || ids.length === 0) {
      return new Response(JSON.stringify({ success: false, error: { message: "Invalid request payload" } }), { status: 400 });
    }

    if (action === 'delete') {
      const placeholders = ids.map(() => '?').join(',');
      // To properly delete TourCountry relationships, we need the slugs of the deleted countries.
      // 1. Fetch slugs
      const { results: countries } = await d1Db.prepare(`SELECT slug FROM Country WHERE id IN (${placeholders})`).bind(...ids).all();
      const slugs = countries?.map((c: any) => c.slug) || [];
      
      // 2. Delete junction relations
      if (slugs.length > 0) {
        const slugPlaceholders = slugs.map(() => '?').join(',');
        await d1Db.prepare(`DELETE FROM TourCountry WHERE country_slug IN (${slugPlaceholders})`).bind(...slugs).run();
      }

      // 3. Delete countries
      await d1Db.prepare(`DELETE FROM Country WHERE id IN (${placeholders})`).bind(...ids).run();
    } else {
      return new Response(JSON.stringify({ success: false, error: { message: "Unknown action" } }), { status: 400 });
    }

    return new Response(JSON.stringify({ success: true, message: `Action ${action} completed successfully` }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ success: false, error: { message: error.message || "Internal Server Error" } }), { status: 500 });
  }
};
