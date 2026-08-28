import { env } from 'cloudflare:workers';
import { v4 as uuidv4 } from 'uuid';
import { apiSuccess, apiError, withErrorHandler } from '../../utils';
import { logAudit } from '../../../../lib/audit';

export const prerender = false;

export const GET = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('view', 'post')) return apiError('Forbidden', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const { searchParams } = new URL(request.url);
  const search = searchParams.get('q');
  
  let query = "SELECT * FROM ShortTopic WHERE 1=1";
  let params: string[] = [];

  if (search) {
    let safeSearch = search.trim();
    if (safeSearch.length > 40) safeSearch = safeSearch.substring(0, 40);
    query += " AND title LIKE ?";
    params.push(`%${safeSearch}%`);
  }
  
  query += " ORDER BY viewOrder ASC, createdAt DESC";

  const stmt = d1Db.prepare(query);
  const { results } = await (params.length > 0 ? stmt.bind(...params) : stmt).all();

  return apiSuccess(results);
});

export const POST = withErrorHandler(async ({ request, locals }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;

  if (!authorize('edit', 'post')) {
    return apiError('Bạn không có quyền tạo danh mục.', 403);
  }

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const body = await request.json();
  const { title, slug, description, thumbnailUrl, viewOrder } = body;

  if (!title || !slug) {
    return apiError('Vui lòng cung cấp Tiêu đề và Slug', 400);
  }

  // Check unique slug
  const existing = await d1Db.prepare("SELECT slug FROM ShortTopic WHERE slug = ?").bind(slug).first();
  if (existing) {
    return apiError('Slug này đã tồn tại, vui lòng chọn slug khác.', 400);
  }

  const id = `stopic_${uuidv4()}`;

  await d1Db.prepare(`
    INSERT INTO ShortTopic (
      id, title, slug, description, thumbnailUrl, viewOrder, createdAt
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `).bind(
    id, 
    title, 
    slug, 
    description || null, 
    thumbnailUrl || null, 
    viewOrder || 0, 
    new Date().toISOString()
  ).run();

  const ipAddress = request.headers.get('CF-Connecting-IP') || null;
  const userAgent = request.headers.get('User-Agent') || null;
  await logAudit(d1Db, user?.userId || user?.id, null, 'create_short_topic', ipAddress, userAgent, { shortTopicId: id });

  return apiSuccess({ id }, 201);
});
