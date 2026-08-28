import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async ({ request, params, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response("DB Not Configured", { status: 500 });
  
  try {
    const popup = await d1Db.prepare("SELECT * FROM Popup WHERE id = ?").bind(params.id).first();
    if (!popup) {
      return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    }
    return new Response(JSON.stringify(popup), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const PUT: APIRoute = async ({ request, params, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response("DB Not Configured", { status: 500 });

  try {
    const body = await request.json();
    const { title, description, link, image, pageSlugToMatch, isActive } = body;

    if (!title) {
      return new Response(JSON.stringify({ error: 'Title is required' }), { status: 400 });
    }

    const stmt = d1Db.prepare(`
      UPDATE Popup 
      SET title = ?, description = ?, link = ?, image = ?, pageSlugToMatch = ?, isActive = ?, updatedAt = CURRENT_TIMESTAMP
      WHERE id = ?
    `).bind(title, description || '', link || '', image || '', pageSlugToMatch || '', isActive !== undefined ? isActive : 1, params.id);

    await stmt.run();

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const DELETE: APIRoute = async ({ request, params, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response("DB Not Configured", { status: 500 });

  try {
    await d1Db.prepare("DELETE FROM Popup WHERE id = ?").bind(params.id).run();
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
