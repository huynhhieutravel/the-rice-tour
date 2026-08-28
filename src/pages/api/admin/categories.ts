import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';
import { apiSuccess, apiError, withErrorHandler } from '../utils';
import { logAudit } from '../../../lib/audit';

export const prerender = false;

export const GET: APIRoute = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('view', 'post')) return apiError('Forbidden', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  // Lấy thêm parentId, description, count
  const { results } = await d1Db.prepare(`
    SELECT c.*, p.name as parentName 
    FROM BlogCategory c
    LEFT JOIN BlogCategory p ON c.parentId = p.id
    ORDER BY c.name ASC
  `).all();

  // Xây dựng tree structure
  const categories = results || [];
  const tree: any[] = [];
  const lookup = new Map();

  // Khởi tạo lookup map
  categories.forEach(c => lookup.set(c.id, { ...c, children: [] }));

  // Phân cấp
  lookup.forEach(c => {
    if (c.parentId) {
      const parent = lookup.get(c.parentId);
      if (parent) {
        parent.children.push(c);
      } else {
        tree.push(c); // Nếu parent không tồn tại (lỗi data), đẩy ra gốc
      }
    } else {
      tree.push(c);
    }
  });

  // Làm phẳng danh sách có thụt lề để render dễ hơn trong 1 vòng map
  const flatList: any[] = [];
  function flatten(nodes: any[], depth = 0) {
    nodes.forEach(node => {
      flatList.push({ ...node, depth });
      if (node.children.length > 0) {
        flatten(node.children, depth + 1);
      }
    });
  }
  flatten(tree);

  return apiSuccess(flatList);
});

export const POST: APIRoute = withErrorHandler(async ({ request, locals }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;

  if (!authorize('edit', 'post')) {
    console.warn(`[RBAC Blocked] User ${user?.userId} tried to create category`);
    return apiError('Bạn không có quyền tạo danh mục.', 403);
  }

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const body = await request.json();
  const { name, slug, parentId, description } = body;

  if (!name) return apiError('Vui lòng nhập tên danh mục', 400);

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

  const id = `cat_${uuidv4()}`;

  const existing = await d1Db.prepare("SELECT id FROM BlogCategory WHERE slug = ?").bind(finalSlug).first();
  if (existing) return apiError('Đường dẫn (Slug) này đã tồn tại, vui lòng chọn đường dẫn khác', 400);

  await d1Db.prepare(
    "INSERT INTO BlogCategory (id, name, slug, parentId, description) VALUES (?, ?, ?, ?, ?)"
  ).bind(
    id, 
    name, 
    finalSlug, 
    parentId || null, 
    description || ''
  ).run();

  const ipAddress = request.headers.get('CF-Connecting-IP') || null;
  const userAgent = request.headers.get('User-Agent') || null;
  await logAudit(d1Db, user?.userId || user?.id, null, 'create_category', ipAddress, userAgent, { categoryId: id, name });

  return apiSuccess(null, 201);
});
