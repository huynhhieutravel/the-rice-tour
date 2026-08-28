import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import slugify from 'slugify';
import { apiSuccess, apiError, withErrorHandler } from '../../utils';

export const prerender = false;

// Cập nhật Trip
export const PATCH: APIRoute = withErrorHandler(async ({ request, params, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('edit', 'post')) return apiError('Forbidden', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const { id } = params;
  if (!id) return apiError('Missing ID', 400);

  const body = await request.json();
  const { title, slug, departureCode, status } = body;

  const existing = await d1Db.prepare("SELECT * FROM Trip WHERE id = ?").bind(id).first();
  if (!existing) return apiError('Không tìm thấy Trip', 404);

  let finalSlug = slug;
  if (slug && slug !== existing.slug) {
    const slugCheck = await d1Db.prepare("SELECT id FROM Trip WHERE slug = ? AND id != ?").bind(slug, id).first();
    if (slugCheck) return apiError('Đường dẫn này đã tồn tại.', 400);
  }

  const updates: string[] = [];
  const values: any[] = [];

  if (title !== undefined) { updates.push("title = ?"); values.push(title); }
  if (finalSlug !== undefined) { updates.push("slug = ?"); values.push(finalSlug); }
  if (departureCode !== undefined) { updates.push("departureCode = ?"); values.push(departureCode); }
  if (status !== undefined) { updates.push("status = ?"); values.push(status); }

  if (updates.length > 0) {
    updates.push("updatedAt = ?");
    values.push(new Date().toISOString());

    const query = `UPDATE Trip SET ${updates.join(', ')} WHERE id = ?`;
    values.push(id);
    await d1Db.prepare(query).bind(...values).run();
  }

  return apiSuccess({ success: true });
});

// Xóa Trip
export const DELETE: APIRoute = withErrorHandler(async ({ params, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('delete', 'post')) return apiError('Forbidden', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const { id } = params;
  if (!id) return apiError('Missing ID', 400);

  await d1Db.prepare("DELETE FROM Trip WHERE id = ?").bind(id).run();
  return apiSuccess({ success: true });
});
