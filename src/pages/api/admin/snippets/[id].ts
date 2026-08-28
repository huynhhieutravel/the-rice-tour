import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { sanitizeHTML } from '@/utils/shortcodes/parser';
import { scopeCss } from '@/utils/shortcodes/scoper';

export const PUT: APIRoute = async ({ request, params, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response("DB Not Configured", { status: 500 });
  const id = params.id;

  try {
    const body = await request.json();
    const { slug, name, description, html_content, css_content, status } = body;

    // Enterprise Sandbox Security:
    const safeHtml = html_content ? sanitizeHTML(html_content) : '';
    const scopedCss = css_content ? scopeCss(css_content, slug) : '';

    const stmt = d1Db.prepare(`
      UPDATE Snippet 
      SET slug = ?, name = ?, description = ?, html_content = ?, css_content = ?, css_content_scoped = ?, status = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).bind(slug, name, description || '', safeHtml, css_content || '', scopedCss, status, id);

    await stmt.run();

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const DELETE: APIRoute = async ({ params, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response("DB Not Configured", { status: 500 });
  const id = params.id;

  try {
    await d1Db.prepare("DELETE FROM Snippet WHERE id = ?").bind(id).run();
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
