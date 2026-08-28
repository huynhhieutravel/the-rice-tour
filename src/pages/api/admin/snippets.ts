import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { sanitizeHTML } from '@/utils/shortcodes/parser';
import { scopeCss } from '@/utils/shortcodes/scoper';

export const GET: APIRoute = async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response("DB Not Configured", { status: 500 });
  
  try {
    const { results } = await d1Db.prepare("SELECT * FROM Snippet ORDER BY created_at DESC").all();
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
    const { slug, name, description, html_content, css_content, status } = body;

    if (!slug || !name) {
      return new Response(JSON.stringify({ error: 'Slug and Name are required' }), { status: 400 });
    }

    // Enterprise Sandbox Security:
    // 1. Sanitize HTML
    const safeHtml = html_content ? sanitizeHTML(html_content) : '';
    // 2. Auto Scope CSS
    const scopedCss = css_content ? scopeCss(css_content, slug) : '';

    const stmt = d1Db.prepare(`
      INSERT INTO Snippet (slug, name, description, html_content, css_content, css_content_scoped, status)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(slug, name, description || '', safeHtml, css_content || '', scopedCss, status || 1);

    await stmt.run();

    return new Response(JSON.stringify({ success: true }), { status: 201 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
