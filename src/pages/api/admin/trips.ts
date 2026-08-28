import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import slugify from 'slugify';
import { apiSuccess, apiError, withErrorHandler } from '../utils';

export const prerender = false;

// Lấy danh sách Trips
export const GET: APIRoute = withErrorHandler(async ({ locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('view', 'post')) return apiError('Forbidden', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const { results } = await d1Db.prepare(`
    SELECT *
    FROM Trip
    ORDER BY createdAt DESC
  `).all();

  return apiSuccess(results || []);
});

// Tạo mới Trip
export const POST: APIRoute = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('edit', 'post')) return apiError('Forbidden', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const body = await request.json();
  const { title, slug, departureCode, status } = body;

  if (!title) return apiError('Vui lòng nhập tên Trip Landing Page', 400);

  const finalSlug = slug || slugify(title, { lower: true, strict: true, locale: 'vi' });

  // Kiểm tra trùng slug
  const existing = await d1Db.prepare("SELECT id FROM Trip WHERE slug = ?").bind(finalSlug).first();
  if (existing) return apiError('Đường dẫn (Slug) này đã tồn tại, vui lòng chọn đường dẫn khác', 400);

  const id = finalSlug;
  await d1Db.prepare(
    `INSERT INTO Trip (id, title, slug, departureCode, status) 
     VALUES (?, ?, ?, ?, ?)`
  ).bind(
    id, title, finalSlug, departureCode || '', status || 'published'
  ).run();

  return apiSuccess({ id, slug: finalSlug });
});
