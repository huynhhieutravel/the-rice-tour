import type { APIRoute } from 'astro';
import slugify from 'slugify';
import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from '../../utils';
import { logAudit } from '../../../../lib/audit';

export const prerender = false;

// GET: Lấy nội dung chi tiết của 1 bài viết để load vào Editor
export const GET: APIRoute = withErrorHandler(async ({ params, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('view', 'post')) return apiError('Forbidden', 403);
  
  const id = params.id ? String(params.id).trim() : '';
  if (!id) return apiError('Invalid post ID', 400);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('Database missing', 500);

  let post = await d1Db.prepare("SELECT * FROM Post WHERE id = ?").bind(id).first<any>();
  
  if (!post) {
    return apiError("Post not found", 404);
  }

  // Auto-clean any legacy Mekong Smile watermark thumbnails
  if (post.featuredImage && (post.featuredImage.includes('nucuoimekong') || post.featuredImage.includes('r2.nucuoimekong.com'))) {
    post.featuredImage = null;
    try {
      await d1Db.prepare("UPDATE Post SET featuredImage = NULL WHERE id = ?").bind(id).run();
    } catch(e) {}
  }

  // Auto-populate / Upgrade HTML content for pipeline demo posts to full 3-column Magazine layout
  const { khanRanHtml, happyLandHtml } = await import('@/data/demo-articles');
  if (id === '33735' || post.slug === 'khan-ran-nam-bo') {
    if (!post.content || post.content.trim().length < 50 || !post.content.includes('Table of Contents')) {
      post.content = khanRanHtml;
      post.contentFormat = 'html';
      post.format = 'landing';
      post.isElementor = 0;
      try {
        await d1Db.prepare("UPDATE Post SET content = ?, contentFormat = 'html', format = 'landing', featuredImage = NULL, isElementor = 0 WHERE id = ?").bind(khanRanHtml, id).run();
      } catch(e) {}
    }
  } else if (id === '33734' || post.slug === 'khu-du-lich-happy-land-ben-luc-long-an') {
    if (!post.content || post.content.trim().length < 50) {
      post.content = happyLandHtml;
      post.contentFormat = 'html';
      post.format = 'landing';
      post.isElementor = 0;
      try {
        await d1Db.prepare("UPDATE Post SET content = ?, contentFormat = 'html', format = 'landing', featuredImage = NULL, isElementor = 0 WHERE id = ?").bind(happyLandHtml, id).run();
      } catch(e) {}
    }
  }

  const { results: cats } = await d1Db.prepare(
    "SELECT categoryId FROM PostCategory WHERE postId = ?"
  ).bind(id).all();
  post.categoryIds = cats ? cats.map((c: any) => c.categoryId) : [];

  const { results: tags } = await d1Db.prepare(
    "SELECT tagId FROM PostTag WHERE postId = ?"
  ).bind(id).all();
  post.tagIds = tags ? tags.map((t: any) => t.tagId) : [];

  return apiSuccess(post);
});

// PUT: Cập nhật bài viết
export const PUT: APIRoute = withErrorHandler(async ({ request, params, locals }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;

  const id = params.id ? String(params.id).trim() : '';
  if (!id) return apiError('Invalid post ID', 400);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('Database missing', 500);

  const data: any = await request.json();
  
  const existing = await d1Db.prepare("SELECT id, status, authorId, slug FROM Post WHERE id = ?").bind(id).first<any>();
  if (!existing) {
    return apiError("Post not found", 404);
  }

  if (!authorize('edit', 'post', existing)) {
    console.warn(`[RBAC Blocked] User ${user?.userId} tried to edit post ${id}`);
    return apiError('Bạn không có quyền cập nhật bài viết này.', 403);
  }

  const title = data.title;
  let slug = data.slug ? String(data.slug).trim() : '';
  if (!slug) {
    slug = existing.slug || slugify(title || 'post', { lower: true, strict: true, locale: 'vi' }) || Date.now().toString(36);
  }
  let content = typeof data.content === 'object' ? JSON.stringify(data.content) : data.content;
  if (typeof content === 'string') {
    // Strip any raw JSX comments from HTML content
    content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  }

  // Detect raw HTML for fallback defaults only
  const contentStr = typeof content === 'string' ? content.trim() : '';
  const isRawHtml = contentStr.startsWith('<') && !contentStr.startsWith('{');

  const isElementor = data.isElementor ? 1 : 0;
  const contentFormat = data.contentFormat || (isRawHtml ? 'html' : 'json');

  const excerpt = data.excerpt || '';
  const featuredImage = data.featuredImage || '';
  const format = data.format || (isRawHtml ? 'landing' : 'standard');
  const isSticky = data.isSticky ? 1 : 0;
  const seoTitle = data.seoTitle || null;
  const seoDescription = data.seoDescription || null;
  const canonicalUrl = data.canonicalUrl || null;
  const focusKeyword = data.focusKeyword || null;
  const noindex = data.noindex ? 1 : 0;
  const nofollow = data.nofollow ? 1 : 0;
  const customSchema = data.customSchema || null;
  const updatedAt = new Date().toISOString();

  // Author Attribution
  let authorId: string | null = data.authorId !== undefined ? (data.authorId || null) : (existing.authorId || null);
  let authorName: string = existing.author || 'The Rice Tour Editorial';
  if (authorId) {
    const authorUser = await d1Db.prepare('SELECT id, COALESCE(displayName, username) as name FROM users WHERE id = ?').bind(authorId).first<any>();
    if (authorUser) {
      authorName = authorUser.name;
    }
  }

  // Auto-set publishedAt if status changes from draft/pending to published
  let publishedAtClause = '';
  const paramsList: any[] = [
    title, slug, status, content, contentFormat, excerpt, featuredImage, format, isSticky,
    isElementor, seoTitle, seoDescription, canonicalUrl, focusKeyword, noindex, nofollow, customSchema,
    updatedAt, authorId, authorName
  ];

  if (status === 'published' && existing.status !== 'published') {
    publishedAtClause = ', publishedAt = ?';
    paramsList.push(updatedAt);
  }
  paramsList.push(id);

  await d1Db.prepare(`
    UPDATE Post SET
      title = ?, slug = ?, status = ?, content = ?, contentFormat = ?, excerpt = ?, featuredImage = ?, format = ?, isSticky = ?,
      isElementor = ?, seoTitle = ?, seoDescription = ?, canonicalUrl = ?, focusKeyword = ?, noindex = ?, nofollow = ?, customSchema = ?,
      updatedAt = ?, authorId = ?, author = ?
      ${publishedAtClause}
    WHERE id = ?
  `).bind(...paramsList).run();

  // Update Taxonomies (PostCategory & PostTag)
  if (data.categoryIds !== undefined || data.tagIds !== undefined) {
    try {
      const relStmts: any[] = [];
      if (data.categoryIds !== undefined) {
        relStmts.push(d1Db.prepare("DELETE FROM PostCategory WHERE postId = ?").bind(id));
        for (const catId of data.categoryIds) {
          if (catId) {
            relStmts.push(d1Db.prepare("INSERT INTO PostCategory (postId, categoryId) VALUES (?, ?)").bind(id, String(catId)));
          }
        }
      }

      if (data.tagIds !== undefined) {
        relStmts.push(d1Db.prepare("DELETE FROM PostTag WHERE postId = ?").bind(id));
        for (const tagId of data.tagIds) {
          if (tagId) {
            relStmts.push(d1Db.prepare("INSERT INTO PostTag (postId, tagId) VALUES (?, ?)").bind(id, String(tagId)));
          }
        }
      }

      if (relStmts.length > 0) {
        await d1Db.batch(relStmts);
      }
    } catch (relErr) {
      console.warn(`[PUT /posts/${id}] PostCategory/PostTag batch failed (non-fatal):`, relErr);
    }
  }

  // Ghi Audit Log
  const ipAddress = request.headers.get('CF-Connecting-IP') || null;
  const userAgent = request.headers.get('User-Agent') || null;
  await logAudit(d1Db, user?.userId || user?.id, null, 'edit_post', ipAddress, userAgent, { postId: id });

  // Snapshot Post Revision khi người dùng lưu thủ công (không phải auto-draft)
  let createdRevisionId: string | null = null;
  if (!data.isDraftSave && !data.isDraftDiscard) {
    try {
      // Đảm bảo bảng tồn tại
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

      // Kiểm tra bản revision gần nhất để tránh duplicate
      const latestRev = await d1Db.prepare(
        "SELECT id, title, content, seoTitle, seoDescription, featuredImage FROM PostRevision WHERE postId = ? ORDER BY createdAt DESC LIMIT 1"
      ).bind(id).first<any>();

      const isChanged = !latestRev || 
        latestRev.title !== title || 
        latestRev.content !== content || 
        latestRev.seoTitle !== seoTitle || 
        latestRev.seoDescription !== seoDescription ||
        latestRev.featuredImage !== featuredImage;

      if (isChanged) {
        // Tính Word Count
        let rawText = title || '';
        if (content) {
          try {
            const parsed = JSON.parse(content);
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
            rawText += ' ' + String(content).replace(/<[^>]*>?/gm, ' ');
          }
        }
        const wordCount = rawText.trim().split(/\s+/).filter(Boolean).length;
        const revId = crypto.randomUUID();
        const savedBy = user?.displayName || user?.username || 'Admin';
        const revisionType = status === 'published' ? 'publish' : 'manual';

        await d1Db.prepare(`
          INSERT INTO PostRevision (
            id, postId, title, slug, content, contentFormat, format, excerpt,
            featuredImage, seoTitle, seoDescription, canonicalUrl, focusKeyword,
            authorId, authorName, savedBy, revisionType, wordCount, createdAt
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `).bind(
          revId, id, title || '', slug || '', content || '', contentFormat, format, excerpt || '',
          featuredImage || '', seoTitle || '', seoDescription || '', canonicalUrl || '', focusKeyword || '',
          authorId || null, authorName || '', savedBy, revisionType, wordCount, updatedAt
        ).run();

        createdRevisionId = revId;

        // Retention Policy: Giữ tối đa 30 bản ghi gần nhất cho bài viết này
        await d1Db.prepare(`
          DELETE FROM PostRevision 
          WHERE postId = ? 
          AND id NOT IN (
            SELECT id FROM (
              SELECT id FROM PostRevision WHERE postId = ? ORDER BY createdAt DESC LIMIT 30
            )
          )
        `).bind(id, id).run();
      }
    } catch (revErr) {
      console.warn(`[PUT /posts/${id}] Snapshot revision failed (non-fatal):`, revErr);
    }
  }

  return apiSuccess({ id, updatedAt, revisionId: createdRevisionId });
});

// DELETE: Soft delete (default) or Permanent delete (?permanent=1)
export const DELETE: APIRoute = withErrorHandler(async ({ params, locals, request, url }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;

  const id = params.id ? String(params.id).trim() : '';
  if (!id) return apiError('Invalid post ID', 400);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('Database missing', 500);

  const existing = await d1Db.prepare("SELECT id, authorId, status FROM Post WHERE id = ?").bind(id).first<any>();
  if (!existing) {
    return apiError("Post not found", 404);
  }

  if (!authorize('delete', 'post', existing)) {
    console.warn(`[RBAC Blocked] User ${user?.userId} tried to delete post ${id}`);
    return apiError('Bạn không có quyền xoá bài viết này.', 403);
  }

  const permanent = url.searchParams.get('permanent') === '1';

  if (permanent) {
    if (existing.status !== 'trash') {
      return apiError('Chỉ có thể xóa vĩnh viễn bài viết đang ở trong Thùng rác.', 400);
    }
    await d1Db.batch([
      d1Db.prepare("DELETE FROM PostCategory WHERE postId = ?").bind(id),
      d1Db.prepare("DELETE FROM PostTag WHERE postId = ?").bind(id),
      d1Db.prepare("DELETE FROM Post WHERE id = ?").bind(id),
    ]);
    return apiSuccess({ id, permanentlyDeleted: true });
  } else {
    const updatedAt = new Date().toISOString();
    await d1Db.prepare("UPDATE Post SET status = 'trash', updatedAt = ? WHERE id = ?")
      .bind(updatedAt, id).run();

    const ipAddress = request.headers.get('CF-Connecting-IP') || null;
    const userAgent = request.headers.get('User-Agent') || null;
    await logAudit(d1Db, user?.userId || user?.id, null, 'trash_post', ipAddress, userAgent, { postId: id });

    return apiSuccess({ id });
  }
});

// PATCH: Restore from trash
export const PATCH: APIRoute = withErrorHandler(async ({ params, locals, request }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;

  const id = params.id ? String(params.id).trim() : '';
  if (!id) return apiError('Invalid post ID', 400);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('Database missing', 500);

  const existing = await d1Db.prepare("SELECT id, authorId, status FROM Post WHERE id = ?").bind(id).first<any>();
  if (!existing) return apiError("Post not found", 404);
  if (existing.status !== 'trash') return apiError("Bài viết này không ở trong thùng rác.", 400);

  if (!authorize('edit', 'post', existing)) {
    return apiError('Bạn không có quyền phục hồi bài viết này.', 403);
  }

  const updatedAt = new Date().toISOString();
  await d1Db.prepare("UPDATE Post SET status = 'draft', updatedAt = ? WHERE id = ?")
    .bind(updatedAt, id).run();

  const ipAddress = request.headers.get('CF-Connecting-IP') || null;
  const userAgent = request.headers.get('User-Agent') || null;
  await logAudit(d1Db, user?.userId || user?.id, null, 'restore_post', ipAddress, userAgent, { postId: id });

  return apiSuccess({ id, restoredTo: 'draft' });
});
