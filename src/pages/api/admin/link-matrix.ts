// src/pages/api/admin/link-matrix.ts
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

// GET /api/admin/link-matrix
export const GET: APIRoute = async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ success: false, error: 'Forbidden' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: 'DB not found' }), { status: 500 });
  
  try {
    const url = new URL(request.url);
    const cluster = url.searchParams.get('clusterName');
    
    let query = "SELECT * FROM MatrixLink ORDER BY clusterName ASC, title ASC";
    let params: any[] = [];
    
    if (cluster) {
        query = "SELECT * FROM MatrixLink WHERE clusterName = ? ORDER BY title ASC";
        params.push(cluster);
    }
    
    const stmt = params.length > 0 ? d1Db.prepare(query).bind(...params) : d1Db.prepare(query);
    const { results } = await stmt.all();
    
    return new Response(JSON.stringify({ success: true, data: results || [] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};

// POST /api/admin/link-matrix (Create or Update)
export const POST: APIRoute = async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return new Response(JSON.stringify({ success: false, error: 'Forbidden' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response(JSON.stringify({ success: false, error: 'DB not found' }), { status: 500 });
  
  try {
    const body = await request.json();
    const { id, title, targetUrl, anchorTexts, clusterName } = body;

    if (!title || !targetUrl || !anchorTexts || !clusterName) {
      return new Response(JSON.stringify({ success: false, error: 'All fields are required' }), { status: 400 });
    }

    if (id) {
        // UPDATE
        await d1Db.prepare(`
            UPDATE MatrixLink 
            SET title = ?, targetUrl = ?, anchorTexts = ?, clusterName = ?, updatedAt = datetime('now')
            WHERE id = ?
        `).bind(title, targetUrl, anchorTexts, clusterName, id).run();
        return new Response(JSON.stringify({ success: true, message: 'Link Matrix updated' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } else {
        // CREATE
        await d1Db.prepare(`
            INSERT INTO MatrixLink (title, targetUrl, anchorTexts, clusterName, createdAt, updatedAt)
            VALUES (?, ?, ?, ?, datetime('now'), datetime('now'))
        `).bind(title, targetUrl, anchorTexts, clusterName).run();
        return new Response(JSON.stringify({ success: true, message: 'Link Matrix created' }), { status: 201, headers: { 'Content-Type': 'application/json' } });
    }
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};

// DELETE /api/admin/link-matrix
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

    await d1Db.prepare("DELETE FROM MatrixLink WHERE id = ?").bind(id).run();

    return new Response(JSON.stringify({ success: true, message: 'Link Matrix deleted' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
};
