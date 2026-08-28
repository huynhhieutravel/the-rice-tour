/**
 * /api/search.ts — Public Search API (FTS5 + Đa luồng)
 * 
 * GET /api/search?q=hoa+dao&type=all&limit=10&offset=0
 * 
 * Params:
 *   q      — Từ khóa tìm kiếm (tối thiểu 2 ký tự)
 *   type   — "all" (mặc định) | slug danh mục cụ thể (vd: tour, country, blog-category)
 *   limit  — Số kết quả tối đa (mặc định 12, max 50)
 *   offset — Bỏ qua N kết quả đầu (mặc định 0, dùng cho phân trang)
 * 
 * Response: { groups: [...], total, totalCount, query }
 */
import type { APIContext } from 'astro';
import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from './utils';

// Vietnamese diacritics → ASCII slug equivalent for case-insensitive matching
function removeDiacritics(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd').replace(/Đ/g, 'd')
    .toLowerCase();
}


function buildLikeClause(colTitle: string, colExcerpt: string, colSlug: string, word: string, params: any[]): string {
  const ascii = removeDiacritics(word);
  const variants = new Set<string>();

  const addVariants = (str: string) => {
    variants.add(str.toLowerCase());
    variants.add(str.toUpperCase());
    variants.add(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
  };

  addVariants(word);
  addVariants(ascii);

  const likeStrings = Array.from(variants).map(v => `%${v}%`);
  const clauses = likeStrings.map((_, i) => `${colTitle} LIKE ?${params.length + i + 1} OR ${colExcerpt} LIKE ?${params.length + i + 1} OR ${colSlug} LIKE ?${params.length + i + 1}`);

  params.push(...likeStrings);
  return ` AND (${clauses.join(' OR ')})`;
}

export const GET = withErrorHandler(async (context: APIContext) => {
  const db = (env as any).dulichcoguu_d1;
  const url = new URL(context.request.url);

  // === 1. Parse & Sanitize Input ===
  const rawQuery = (url.searchParams.get('q') || '').trim();
  const type = url.searchParams.get('type') || 'all';
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '12') || 12, 50);
  const offset = Math.max(parseInt(url.searchParams.get('offset') || '0') || 0, 0);

  if (rawQuery.length < 2) {
    return apiSuccess({ groups: [], total: 0, totalCount: 0, query: rawQuery });
  }

  // Sanitize: loại bỏ ký tự đặc biệt FTS5 có thể lỗi
  const sanitized = rawQuery
    .replace(/['"*(){}[\]^~\\:]/g, '')  // Loại bỏ operators FTS5
    .replace(/\s+/g, ' ')
    .trim();

  if (!sanitized) {
    return apiSuccess({ groups: [], total: 0, totalCount: 0, query: rawQuery });
  }

  // Chuyển thành FTS5 query: "hoa dao" → hoa* dao*
  const ftsQuery = sanitized
    .split(' ')
    .filter(w => w.length >= 1)
    .map(w => w + '*')
    .join(' ');

  const likePattern = `%${sanitized}%`;

  let allResults: any[] = [];
  let tourCount = 0;
  let postCount = 0;
  let countryCount = 0;
  let emagazineCount = 0;
  let pageCount = 0;

  // === 2A. Search TOUR (Priority 100) ===
  if (type === 'all' || type === 'tour') {
    try {
      let sql = `
        SELECT 
          id, title, 'tour/' || slug as fullSlug, COALESCE(seoDescription, excerpt) as excerpt, featuredImage,
          'Tours & Hành Trình' as categoryName, 'tour' as categorySlug, 
          100 as catPriority
        FROM Tour
        WHERE status = 'published' AND (badge IS NULL OR badge != 'inactive')
      `;
      const params: any[] = [];
      const words = sanitized.split(' ').filter(w => w.length > 0);

      words.forEach((word) => {
        sql += buildLikeClause('title', 'excerpt', 'slug', word, params);
      });
      sql += ` ORDER BY CASE WHEN title LIKE ?${params.length + 1} THEN 1 ELSE 2 END ASC, COALESCE(updatedAt, createdAt) DESC LIMIT ?${params.length + 2} OFFSET ?${params.length + 3}`;
      params.push(`%${sanitized}%`);
      params.push(limit);
      params.push(offset);

      const { results } = await db.prepare(sql).bind(...params).all();
      if (results) allResults = allResults.concat(results);

    } catch (e) {
      console.error('[Search Tour Error]', e);
    }
  }

  // Count total tours (Always run to populate tabs)
  try {
    let countSql = `SELECT COUNT(*) as cnt FROM Tour WHERE status = 'published' AND (badge IS NULL OR badge != 'inactive')`;
    const countParams: any[] = [];
    const words = sanitized.split(' ').filter(w => w.length > 0);
    words.forEach((word) => {
      countSql += buildLikeClause('title', 'excerpt', 'slug', word, countParams);
    });
    const countResult = await db.prepare(countSql).bind(...countParams).first();
    if (countResult) tourCount = (countResult as any).cnt || 0;
  } catch (e) { console.error('[Search Tour Count Error]', e); }

  // === 2B. Search POST (Blog) (Priority từ DB) ===
  if (type === 'all' || (type !== 'tour' && type !== 'country')) {
    let postResults: any[] = [];

    // Use LIKE search (Case-insensitive, supports Vietnamese variants)
    try {
      let likeSql = `
        SELECT p.id, p.title, p.slug as fullSlug, p.excerpt, p.featuredImage,
          c.name as categoryName, c.slug as categorySlug,
          COALESCE(c.priority, 0) as catPriority,
          EXISTS (SELECT 1 FROM PostCategory pc JOIN BlogCategory c2 ON pc.categoryId = c2.id WHERE pc.postId = p.id AND c2.slug = 'emegazine') as isEmagazine
        FROM Post p
        LEFT JOIN BlogCategory c ON p.categoryId = c.id
        WHERE p.status = 'published'
      `;
      const likeParams: any[] = [];
      const words = sanitized.split(' ').filter(w => w.length > 0);
      words.forEach(word => {
        likeSql += buildLikeClause('p.title', 'p.excerpt', 'p.slug', word, likeParams);
      });

      if (type !== 'all' && type !== 'post') {
        likeSql += ` AND EXISTS (SELECT 1 FROM PostCategory pc JOIN BlogCategory c2 ON pc.categoryId = c2.id WHERE pc.postId = p.id AND c2.slug = ?${likeParams.length + 1})`;
        likeParams.push(type);
      }
      likeSql += ` ORDER BY CASE WHEN p.title LIKE ?${likeParams.length + 1} THEN 1 ELSE 2 END ASC, COALESCE(p.publishedAt, p.createdAt) DESC LIMIT ?${likeParams.length + 2} OFFSET ?${likeParams.length + 3}`;
      likeParams.push(`%${sanitized}%`);
      likeParams.push(limit);
      likeParams.push(offset);

      const { results } = await db.prepare(likeSql).bind(...likeParams).all();
      postResults = results || [];
    } catch (e) { console.error('[Search Post Error]', e); }

    allResults = allResults.concat(postResults);
  }

  // Count total posts and emagazines (Always run to populate tabs)
  try {
    let postCountSql = `SELECT COUNT(*) as cnt FROM Post p LEFT JOIN BlogCategory c ON p.categoryId = c.id WHERE p.status = 'published'`;
    const postCountParams: any[] = [];
    const countWords = sanitized.split(' ').filter(w => w.length > 0);
    countWords.forEach(word => {
      postCountSql += buildLikeClause('p.title', 'p.excerpt', 'p.slug', word, postCountParams);
    });
    const countResult = await db.prepare(postCountSql).bind(...postCountParams).first();
    if (countResult) postCount = (countResult as any).cnt || 0;

    let emaCountSql = `SELECT COUNT(*) as cnt FROM Post p WHERE p.status = 'published' AND EXISTS (SELECT 1 FROM PostCategory pc JOIN BlogCategory c2 ON pc.categoryId = c2.id WHERE pc.postId = p.id AND c2.slug = 'emegazine')`;
    const emaCountParams: any[] = [];
    countWords.forEach(word => {
      emaCountSql += buildLikeClause('p.title', 'p.excerpt', 'p.slug', word, emaCountParams);
    });
    const emaResult = await db.prepare(emaCountSql).bind(...emaCountParams).first();
    if (emaResult) emagazineCount = (emaResult as any).cnt || 0;
  } catch (e) { console.error('[Search Post Count Error]', e); }

  // === 2C. Search COUNTRY (Priority -1, nằm dưới cùng) ===
  if (type === 'all' || type === 'country') {
    try {
      let sql = `
        SELECT 
          id, name as title, 'country/' || slug as fullSlug, COALESCE(metaDescription, description) as excerpt, featuredImage,
          'Cẩm Nang Điểm Đến' as categoryName, 'country' as categorySlug, 
          -1 as catPriority
        FROM Country
        WHERE 1=1
      `;
      const params: any[] = [];
      const words = sanitized.split(' ').filter(w => w.length > 0);

      words.forEach((word) => {
        sql += buildLikeClause('name', 'description', 'slug', word, params);
      });
      sql += ` ORDER BY CASE WHEN name LIKE ?${params.length + 1} THEN 1 ELSE 2 END ASC LIMIT ?${params.length + 2} OFFSET ?${params.length + 3}`;
      params.push(`%${sanitized}%`);
      params.push(limit);
      params.push(offset);

      const { results } = await db.prepare(sql).bind(...params).all();
      if (results) allResults = allResults.concat(results);
    } catch (e) {
      console.error('[Search Country Error]', e);
    }
  }

  // Count total countries (Always run to populate tabs)
  try {
    let countSql = `SELECT COUNT(*) as cnt FROM Country WHERE 1=1`;
    const countParams2: any[] = [];
    const words = sanitized.split(' ').filter(w => w.length > 0);
    words.forEach((word) => {
      countSql += buildLikeClause('name', 'description', 'slug', word, countParams2);
    });
    const countResult = await db.prepare(countSql).bind(...countParams2).first();
    if (countResult) countryCount = (countResult as any).cnt || 0;
  } catch (e) { console.error('[Search Country Count Error]', e); }

  // === 2D. Search PAGE (Priority 60) ===
  if (type === 'all' || type === 'page') {
    try {
      let sql = `
        SELECT 
          id, title, slug as fullSlug, COALESCE(seoDescription, title) as excerpt, featuredImage,
          'Trang' as categoryName, 'page' as categorySlug, 
          60 as catPriority
        FROM Page
        WHERE status = 'published'
      `;
      const params: any[] = [];
      const words = sanitized.split(' ').filter(w => w.length > 0);

      words.forEach((word) => {
        sql += buildLikeClause('title', 'seoDescription', 'slug', word, params);
      });
      sql += ` ORDER BY CASE WHEN title LIKE ?${params.length + 1} THEN 1 ELSE 2 END ASC LIMIT ?${params.length + 2} OFFSET ?${params.length + 3}`;
      params.push(`%${sanitized}%`);
      params.push(limit);
      params.push(offset);

      const { results } = await db.prepare(sql).bind(...params).all();
      if (results) allResults = allResults.concat(results);
    } catch (e) {
      console.error('[Search Page Error]', e);
    }
  }

  // Count total pages (Always run to populate tabs)
  try {
    let countSql = `SELECT COUNT(*) as cnt FROM Page WHERE status = 'published'`;
    const countParamsPage: any[] = [];
    const words = sanitized.split(' ').filter(w => w.length > 0);
    words.forEach((word) => {
      countSql += buildLikeClause('title', 'seoDescription', 'slug', word, countParamsPage);
    });
    const countResult = await db.prepare(countSql).bind(...countParamsPage).first();
    if (countResult) pageCount = (countResult as any).cnt || 0;
  } catch (e) { console.error('[Search Page Count Error]', e); }

  // === 3. Sort & Format Results ===
  const seenSlugs = new Set<string>();
  const sanitizedLower = removeDiacritics(sanitized).toLowerCase();

  let formattedItems: any[] = [];

  for (const row of allResults) {
    if (seenSlugs.has(row.fullSlug)) continue;
    seenSlugs.add(row.fullSlug);

    const masterSlug = row.isEmagazine ? 'emegazine' : (row.categorySlug === 'tour' || row.categorySlug === 'country' ? row.categorySlug : (row.categorySlug === 'page' ? 'page' : 'post'));
    const groupLabel = row.isEmagazine ? 'eMagazine by Fit' : (row.categorySlug === 'tour' ? 'Tours & Hành Trình' : (row.categorySlug === 'country' ? 'Cẩm Nang Điểm Đến' : (row.categorySlug === 'page' ? 'Trang' : 'Blog')));
    const masterPriority = row.categorySlug === 'tour' ? 100 : (row.isEmagazine ? 90 : (row.categorySlug === 'page' ? 60 : (row.categorySlug === 'country' ? -1 : 50)));

    const rawExcerpt = row.excerpt || '';
    const plainExcerpt = rawExcerpt
      .replace(/<[^>]*>?/gm, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/\s+/g, ' ')
      .trim();

    let relevance = 3;
    const titleLower = removeDiacritics(row.title || '').toLowerCase();
    if (titleLower.includes(sanitizedLower)) {
      relevance = 1;
    } else {
      relevance = 2;
    }

    formattedItems.push({
      id: row.id,
      title: row.title,
      slug: row.fullSlug,
      excerpt: plainExcerpt.slice(0, 120),
      thumbnail: row.featuredImage || null,
      categoryName: row.categoryName || groupLabel,
      categorySlug: masterSlug,
      priority: masterPriority,
      relevance: relevance
    });
  }

  // Sort by relevance, then priority
  formattedItems.sort((a, b) => {
    if (a.relevance !== b.relevance) return a.relevance - b.relevance;
    if (a.priority !== b.priority) return b.priority - a.priority;
    return 0;
  });

  const total = formattedItems.length;
  formattedItems = formattedItems.slice(0, limit);

  const format = url.searchParams.get('format') || 'v1';
  let responseData;
  const totalCountValue = tourCount + postCount + countryCount + pageCount;

  if (format === 'v2') {
    const page = Math.floor(offset / limit) + 1;
    // Calculate hasMore based on absolute total count
    const hasMore = (offset + limit) < totalCountValue;

    responseData = {
      success: true,
      query: rawQuery,
      results: {
        tours: formattedItems.filter(i => i.categorySlug === 'tour'),
        blogs: formattedItems.filter(i => i.categorySlug === 'post' || i.categorySlug === 'emegazine'),
        destinations: formattedItems.filter(i => i.categorySlug === 'country'),
        pages: formattedItems.filter(i => i.categorySlug === 'page')
      },
      pagination: {
        page,
        limit,
        hasMore
      }
    };
  } else {
    const limitedGroups = [
      {
        label: 'Kết quả tìm kiếm',
        slug: 'mixed',
        items: formattedItems
      }
    ];
    responseData = {
      success: true,
      data: {
        groups: limitedGroups,
        total,
        totalCount: totalCountValue,
        counts: { tour: tourCount, post: postCount, country: countryCount, emagazine: emagazineCount, page: pageCount },
        query: rawQuery
      }
    };
  }

  // === 4. Response with Cache header ===
  return new Response(
    JSON.stringify(responseData),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=10, s-maxage=30', // Edge cache 30s
      },
    }
  );
});
