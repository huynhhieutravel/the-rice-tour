import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response("DB Not Configured", { status: 500 });
  
  try {
    const { results } = await d1Db.prepare("SELECT * FROM Popup ORDER BY createdAt DESC").all();
    return new Response(JSON.stringify(results), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const POST: APIRoute = async ({ request, locals }) => {
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

    const id = crypto.randomUUID();

    const stmt = d1Db.prepare(`
      INSERT INTO Popup (id, title, description, link, image, pageSlugToMatch, isActive)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(id, title, description || '', link || '', image || '', pageSlugToMatch || '', isActive !== undefined ? isActive : 1);

    await stmt.run();

    return new Response(JSON.stringify({ success: true, id }), { status: 201 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
