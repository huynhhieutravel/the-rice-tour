// src/pages/api/admin/links.ts
import type { APIRoute } from 'astro';

export const prerender = false;

// Helper to invalidate KV Cache
async function invalidateLinkCache(d1Db: any, sessionKV?: any) {
  if (sessionKV) {
    await sessionKV.delete('links:all');
  }
}

import { env } from 'cloudflare:workers';

// GET /api/admin/links
export const GET: APIRoute = async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ success: false, error: 'Forbidden' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: 'DB not found' }), { status: 500 });
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const offset = (page - 1) * limit;

    const totalCountResult = await d1Db.prepare("SELECT COUNT(*) as total FROM Link").first();
    const total = totalCountResult?.total || 0;

    const { results } = await d1Db.prepare("SELECT * FROM Link ORDER BY createdAt DESC LIMIT ? OFFSET ?").bind(limit, offset).all();
    
    return new Response(JSON.stringify({ 
      success: true, 
      data: results || [],
      pagination: { total, page, limit, totalPages: Math.ceil((total as number) / limit) }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};

// POST /api/admin/links
export const POST: APIRoute = async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ success: false, error: 'Forbidden' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  const d1Db = env?.dulichcoguu_d1;
  const sessionKV = env?.SESSION;
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: 'DB not found' }), { status: 500 });
  try {
    const body = await request.json();
    const slug = body.slug;
    const url = body.url || body.targetUrl;
    const label = body.label || body.title || slug;
    const { statusCode, target, rel, isActive } = body;

    if (!slug || !url || !label) {
      return new Response(JSON.stringify({ success: false, error: 'Slug, Label, and URL are required' }), { status: 400 });
    }

    await d1Db.prepare(`
      INSERT INTO Link (slug, label, url, statusCode, target, rel, isActive, createdAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))
    `).bind(slug, label, url, statusCode || 302, target || '_blank', rel || 'nofollow sponsored', isActive ? 1 : 0).run();

    await invalidateLinkCache(d1Db, sessionKV);

    return new Response(JSON.stringify({ success: true, message: 'Link created' }), { status: 201, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    if (error.message.includes('UNIQUE constraint failed')) {
      return new Response(JSON.stringify({ success: false, error: 'Slug already exists' }), { status: 400 });
    }
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};

// PATCH /api/admin/links
export const PATCH: APIRoute = async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ success: false, error: 'Forbidden' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  const d1Db = env?.dulichcoguu_d1;
  const sessionKV = env?.SESSION;
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: 'DB not found' }), { status: 500 });
  try {
    const body = await request.json();
    const { slug, label, url, statusCode, target, rel, isActive } = body;

    if (!slug) {
      return new Response(JSON.stringify({ success: false, error: 'Slug is required for update' }), { status: 400 });
    }

    // Build dynamic UPDATE query
    const updates = [];
    const bindings = [];
    if (label !== undefined) { updates.push("label = ?"); bindings.push(label); }
    if (url !== undefined) { updates.push("url = ?"); bindings.push(url); }
    if (statusCode !== undefined) { updates.push("statusCode = ?"); bindings.push(statusCode); }
    if (target !== undefined) { updates.push("target = ?"); bindings.push(target); }
    if (rel !== undefined) { updates.push("rel = ?"); bindings.push(rel); }
    if (isActive !== undefined) { updates.push("isActive = ?"); bindings.push(isActive ? 1 : 0); }

    if (updates.length > 0) {
      bindings.push(slug);
      await d1Db.prepare(`UPDATE Link SET ${updates.join(', ')} WHERE slug = ?`).bind(...bindings).run();
      await invalidateLinkCache(d1Db, sessionKV);
    }

    return new Response(JSON.stringify({ success: true, message: 'Link updated' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};

// DELETE /api/admin/links
export const DELETE: APIRoute = async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ success: false, error: 'Forbidden' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  const d1Db = env?.dulichcoguu_d1;
  const sessionKV = env?.SESSION;
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: 'DB not found' }), { status: 500 });
  try {
    const { slug } = await request.json();

    if (!slug) {
      return new Response(JSON.stringify({ success: false, error: 'Slug is required' }), { status: 400 });
    }

    await d1Db.prepare("DELETE FROM Link WHERE slug = ?").bind(slug).run();
    await invalidateLinkCache(d1Db, sessionKV);

    return new Response(JSON.stringify({ success: true, message: 'Link deleted' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};
