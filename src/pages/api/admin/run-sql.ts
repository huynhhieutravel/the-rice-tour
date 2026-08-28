import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { logAudit } from '../../../lib/audit';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  // CRITICAL: Only super_admin can execute raw SQL
  const user = (locals as any).user;
  if (!user || user.role !== 'super_admin') {
    return new Response(JSON.stringify({ success: false, message: 'Chỉ Super Admin mới có quyền chạy SQL trực tiếp.' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return new Response(JSON.stringify({ error: 'DB Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });

  try {
    const { query, params } = await request.json();
    if (!query) return new Response(JSON.stringify({ error: 'Missing query' }), { status: 400, headers: { 'Content-Type': 'application/json' } });

    // Audit: Log every raw SQL execution for forensic traceability
    const ipAddress = request.headers.get('CF-Connecting-IP') || null;
    const userAgent = request.headers.get('User-Agent') || null;
    await logAudit(d1Db, user.userId || user.id, null, 'raw_sql_execute', ipAddress, userAgent, {
      query: query.substring(0, 500), // Truncate for storage safety
      params: params || []
    });

    const result = await d1Db.prepare(query).bind(...(params || [])).run();
    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
