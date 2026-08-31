import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from '../../../utils';
import { logAudit } from '../../../../../lib/audit';

export const prerender = false;

// GET: Lấy danh sách revisions hoặc chi tiết 1 revision theo ?revisionId=
export const GET: APIRoute = withErrorHandler(async ({ params, url, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('view', 'post')) return apiError('Forbidden', 403);

  const postId = params.id ? String(params.id).trim() : '';
  if (!postId) return apiError('Invalid post ID', 400);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('Database missing', 500);

  // Đảm bảo bảng PostRevision tồn tại nếu chưa chạy migration
  try {
    await d1Db.prepare(`
      CREATE TABLE IF NOT EXISTS PostRevision (
        id TEXT PRIMARY KEY,
        postId TEXT NOT NULL,
        title TEXT NOT NULL,
        slug TEXT,
        content TEXT NOT NULL,
        contentFormat TEXT DEFAULT 'json',
        format TEXT DEFAULT 'standard',
        excerpt TEXT,
        featuredImage TEXT,
        seoTitle TEXT,
        seoDescription TEXT,
        canonicalUrl TEXT,
        focusKeyword TEXT,
        authorId TEXT,
        authorName TEXT,
        savedBy TEXT,
        revisionType TEXT DEFAULT 'manual',
        wordCount INTEGER DEFAULT 0,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `).run();
  } catch (e) {}

  const revisionId = url.searchParams.get('revisionId');

  // 1. Nếu có revisionId -> Trả về toàn bộ chi tiết nội dung bản lưu
  if (revisionId) {
    const revision = await d1Db.prepare(
      "SELECT * FROM PostRevision WHERE id = ? AND postId = ?"
    ).bind(revisionId, postId).first<any>();

    if (!revision) {
      return apiError('Revision not found', 404);
    }

    return apiSuccess(revision);
  }

  // 2. Không có revisionId -> Lấy danh sách metadata của các bản lưu (tối đa 30 bản)
  const { results } = await d1Db.prepare(`
    SELECT 
      id, postId, title, slug, contentFormat, format, excerpt, 
      featuredImage, seoTitle, seoDescription, canonicalUrl, focusKeyword,
      authorName, savedBy, revisionType, wordCount, createdAt
    FROM PostRevision 
    WHERE postId = ? 
    ORDER BY createdAt DESC 
    LIMIT 30
  `).bind(postId).all();

  return apiSuccess({
    postId,
    total: results ? results.length : 0,
    revisions: results || []
  });
});

// POST: Tạo thủ công một bản revision snapshot hoặc khôi phục
export const POST: APIRoute = withErrorHandler(async ({ params, request, locals }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;

  const postId = params.id ? String(params.id).trim() : '';
  if (!postId) return apiError('Invalid post ID', 400);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('Database missing', 500);

  const existing = await d1Db.prepare("SELECT * FROM Post WHERE id = ?").bind(postId).first<any>();
  if (!existing) return apiError('Post not found', 404);

  if (!authorize('edit', 'post', existing)) {
    return apiError('Forbidden', 403);
  }

  const data: any = await request.json().catch(() => ({}));
  const revisionId = crypto.randomUUID();
  const savedBy = user?.displayName || user?.username || 'Admin';
  const revisionType = data.revisionType || 'manual';

  // Tính word count
  let rawText = existing.title || '';
  if (existing.content) {
    try {
      const parsed = JSON.parse(existing.content);
      // Tiptap json text extraction simple traversal
      const extractText = (node: any): string => {
        if (!node) return '';
        if (node.text) return node.text;
        if (node.content && Array.isArray(node.content)) {
          return node.content.map(extractText).join(' ');
        }
        return '';
      };
      rawText += ' ' + extractText(parsed);
    } catch {
      rawText += ' ' + (existing.content || '').replace(/<[^>]*>?/gm, ' ');
    }
  }
  const wordCount = rawText.trim().split(/\s+/).filter(Boolean).length;
  const createdAt = new Date().toISOString();

  await d1Db.prepare(`
    INSERT INTO PostRevision (
      id, postId, title, slug, content, contentFormat, format, excerpt,
      featuredImage, seoTitle, seoDescription, canonicalUrl, focusKeyword,
      authorId, authorName, savedBy, revisionType, wordCount, createdAt
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    revisionId, postId, existing.title || '', existing.slug || '', existing.content || '',
    existing.contentFormat || 'json', existing.format || 'standard', existing.excerpt || '',
    existing.featuredImage || '', existing.seoTitle || '', existing.seoDescription || '',
    existing.canonicalUrl || '', existing.focusKeyword || '', existing.authorId || null,
    existing.author || '', savedBy, revisionType, wordCount, createdAt
  ).run();

  // Retention: Giữ 30 bản gần nhất
  try {
    await d1Db.prepare(`
      DELETE FROM PostRevision 
      WHERE postId = ? 
      AND id NOT IN (
        SELECT id FROM (
          SELECT id FROM PostRevision WHERE postId = ? ORDER BY createdAt DESC LIMIT 30
        )
      )
    `).bind(postId, postId).run();
  } catch (cleanErr) {
    console.warn('[PostRevision Clean Failed]:', cleanErr);
  }

  const ipAddress = request.headers.get('CF-Connecting-IP') || null;
  const userAgent = request.headers.get('User-Agent') || null;
  await logAudit(d1Db, user?.userId || user?.id, null, 'create_post_revision', ipAddress, userAgent, {
    postId,
    revisionId
  });

  return apiSuccess({ revisionId, createdAt });
});
