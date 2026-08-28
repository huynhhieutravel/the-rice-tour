import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from '../../utils';
import { logAudit } from '../../../../lib/audit';

export const prerender = false;

export const GET = withErrorHandler(async ({ params, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('view', 'post')) return apiError('Forbidden', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const id = params.id;
  const topic = await d1Db.prepare("SELECT * FROM ShortTopic WHERE id = ?").bind(id).first();

  if (!topic) {
    return apiError('Không tìm thấy chủ đề', 404);
  }

  return apiSuccess(topic);
});

export const PATCH = withErrorHandler(async ({ request, params, locals }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;
  if (!authorize('edit', 'post')) return apiError('Forbidden', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const id = params.id;
  const body = await request.json();
  const { title, slug, description, thumbnailUrl, viewOrder } = body;

  if (!title || !slug) {
    return apiError('Vui lòng cung cấp Tiêu đề và Slug', 400);
  }

  // Check unique slug ignoring self
  const existing = await d1Db.prepare("SELECT slug FROM ShortTopic WHERE slug = ? AND id != ?").bind(slug, id).first();
  if (existing) {
    return apiError('Slug này đã tồn tại, vui lòng chọn slug khác.', 400);
  }

  await d1Db.prepare(`
    UPDATE ShortTopic 
    SET title = ?, slug = ?, description = ?, thumbnailUrl = ?, viewOrder = ?
    WHERE id = ?
  `).bind(
    title, 
    slug, 
    description || null, 
    thumbnailUrl || null, 
    viewOrder || 0,
    id
  ).run();

  const ipAddress = request.headers.get('CF-Connecting-IP') || null;
  const userAgent = request.headers.get('User-Agent') || null;
  await logAudit(d1Db, user?.userId || user?.id, null, 'update_short_topic', ipAddress, userAgent, { shortTopicId: id });

  return apiSuccess({ id });
});

export const DELETE = withErrorHandler(async ({ params, locals, request }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;
  if (!authorize('delete', 'post')) return apiError('Forbidden', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const id = params.id;
  
  // Lấy slug để cập nhật các video đang dùng topic này thành rỗng
  const topic = await d1Db.prepare("SELECT slug FROM ShortTopic WHERE id = ?").bind(id).first<{slug: string}>();
  
  if (topic) {
    await d1Db.prepare("UPDATE ShortVideo SET topicSlug = NULL WHERE topicSlug = ?").bind(topic.slug).run();
  }

  await d1Db.prepare("DELETE FROM ShortTopic WHERE id = ?").bind(id).run();

  const ipAddress = request.headers.get('CF-Connecting-IP') || null;
  const userAgent = request.headers.get('User-Agent') || null;
  await logAudit(d1Db, user?.userId || user?.id, null, 'delete_short_topic', ipAddress, userAgent, { shortTopicId: id });

  return apiSuccess({ deleted: true });
});
