// src/pages/api/admin/submissions.ts
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

// GET /api/admin/submissions
export const GET: APIRoute = async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ success: false, error: 'Forbidden' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: 'DB not found' }), { status: 500 });
  
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '20');
    const status = url.searchParams.get('status') || '';
    const offset = (page - 1) * limit;

    let whereClause = '';
    const bindings: any[] = [];
    
    if (status) {
      whereClause = 'WHERE status = ?';
      bindings.push(status);
    }

    const totalCountResult = await d1Db.prepare(`SELECT COUNT(*) as total FROM FormSubmission ${whereClause}`).bind(...bindings).first();
    const total = totalCountResult?.total || 0;

    const queryBindings = [...bindings, limit, offset];
    const { results } = await d1Db.prepare(`SELECT * FROM FormSubmission ${whereClause} ORDER BY createdAt DESC LIMIT ? OFFSET ?`).bind(...queryBindings).all();
    
    // Count by status
    const statusCounts = await d1Db.prepare(`
      SELECT status, COUNT(*) as count FROM FormSubmission GROUP BY status
    `).all();

    return new Response(JSON.stringify({ 
      success: true, 
      data: results || [],
      statusCounts: statusCounts.results || [],
      pagination: { total, page, limit, totalPages: Math.ceil((total as number) / limit) }
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};

// PATCH /api/admin/submissions (update status/notes)
export const PATCH: APIRoute = async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ success: false, error: 'Forbidden' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: 'DB not found' }), { status: 500 });
  
  try {
    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return new Response(JSON.stringify({ success: false, error: 'ID is required' }), { status: 400 });
    }

    const updates: string[] = [];
    const bindings: any[] = [];

    if (status !== undefined) { updates.push('status = ?'); bindings.push(status); }
    if (notes !== undefined) { updates.push('notes = ?'); bindings.push(notes); }
    updates.push("updatedAt = datetime('now')");

    if (updates.length > 1) {
      bindings.push(id);
      await d1Db.prepare(`UPDATE FormSubmission SET ${updates.join(', ')} WHERE id = ?`).bind(...bindings).run();
    }

    return new Response(JSON.stringify({ success: true, message: 'Updated' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};

// DELETE /api/admin/submissions
export const DELETE: APIRoute = async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ success: false, error: 'Forbidden' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: 'DB not found' }), { status: 500 });
  
  try {
    const { id } = await request.json();
    if (!id) {
      return new Response(JSON.stringify({ success: false, error: 'ID is required' }), { status: 400 });
    }

    await d1Db.prepare('DELETE FROM FormSubmission WHERE id = ?').bind(id).run();

    return new Response(JSON.stringify({ success: true, message: 'Deleted' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
