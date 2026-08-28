import { env } from 'cloudflare:workers';
import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';
import { apiSuccess, apiError, withErrorHandler } from '../utils';
import { logAudit } from '../../../lib/audit';

export const prerender = false;

export const GET = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('view', 'post')) return apiError('Forbidden', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const { searchParams } = new URL(request.url);
  const search = searchParams.get('q');

  let query = "SELECT id, name, slug, count FROM Tag";
  let params: string[] = [];

  if (search) {
    let safeSearch = search.trim();
    if (safeSearch.length > 40) {
      safeSearch = safeSearch.substring(0, 40);
    }
    query += " WHERE name LIKE ?";
    params.push(`%${safeSearch}%`);
  }

  query += " ORDER BY name ASC";

  const stmt = d1Db.prepare(query);
  const { results } = await (params.length > 0 ? stmt.bind(...params) : stmt).all();

  return apiSuccess(results);
});

export const POST = withErrorHandler(async ({ request, locals }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;

  if (!authorize('edit', 'post')) {
    console.warn(`[RBAC Blocked] User ${user?.userId} tried to create tag`);
    return apiError('Bạn không có quyền tạo thẻ.', 403);
  }

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const body = await request.json();
  const { name, slug } = body;

  if (!name) {
    return apiError('Vui lòng nhập tên tag', 400);
  }

  const finalSlug = slug || slugify(name, { lower: true, strict: true, locale: 'vi' });

  // Sync with middleware
  const reservedSlugs = [
    'admin', 'api', 'go', 'blog', 'tour', 'about', 'contact',
    'chuyen-muc', 'tags', 'landing', 'preview-post', 'design',
    '_astro', 'assets', 'images', 'tag', 'category', 'author', 'tai-lieu',
    'favicon.ico', 'robots.txt', 'sitemap.xml', 'sitemap-index.xml', 'sitemap-0.xml', 'sitemap-blog.xml'
  ];
  if (reservedSlugs.includes(finalSlug.toLowerCase())) {
    return apiError('Đường dẫn này bị trùng với hệ thống, vui lòng chọn đường dẫn khác.', 409);
  }

  const id = `tag_${uuidv4()}`;

  // check duplicate slug
  const existing = await d1Db.prepare("SELECT id FROM Tag WHERE slug = ?").bind(finalSlug).first();
  if (existing) {
    return apiError('Đường dẫn (Slug) này đã tồn tại, vui lòng chọn đường dẫn khác', 400);
  }

  await d1Db.prepare(
    "INSERT INTO Tag (id, name, slug) VALUES (?, ?, ?)"
  ).bind(id, name, finalSlug).run();

  const ipAddress = request.headers.get('CF-Connecting-IP') || null;
  const userAgent = request.headers.get('User-Agent') || null;
  await logAudit(d1Db, user?.userId || user?.id, null, 'create_tag', ipAddress, userAgent, { tagId: id, name });

  return apiSuccess({ id, name, slug: finalSlug, count: 0 }, 201);
});
