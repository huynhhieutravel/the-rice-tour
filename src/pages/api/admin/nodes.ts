import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from '../utils';

export const GET = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('view', 'post')) return apiError('Forbidden', 403);

  const db = env?.dulichcoguu_d1;
  if (!db) return apiError('Database not available', 500);

    await db.exec("CREATE TABLE IF NOT EXISTS UrlTags (url TEXT PRIMARY KEY, tags TEXT);");
    try { await db.exec("ALTER TABLE UrlTags ADD COLUMN notes TEXT;"); } catch(e) {}
    try { await db.exec("ALTER TABLE UrlTags ADD COLUMN priority INTEGER DEFAULT 0;"); } catch(e) {}
    try { await db.exec("ALTER TABLE InternalLinkTracker ADD COLUMN is404 BOOLEAN DEFAULT 0;"); } catch (e) {}

    // RESTORE THE POST
    try {
      await db.exec(`UPDATE Post SET status = 'published', content = '', isElementor = 0, updatedAt = CURRENT_TIMESTAMP WHERE slug = 'am-thuc-ladakh'`);
    } catch(e) {}


    // Auto-clean dirty JSON array tags from previous bugs
    try {
      await db.exec(`UPDATE UrlTags SET tags = REPLACE(REPLACE(REPLACE(tags, '["', ''), '"]', ''), '"', '') WHERE tags LIKE '%[%'`);
    } catch(e) {}

    const url = new URL(request.url);
    const search = url.searchParams.get('search') || '';
    const type = url.searchParams.get('type') || '';
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const offset = (page - 1) * limit;
    const tagOnly = url.searchParams.get('tagOnly') === 'true';
    const brokenOnly = url.searchParams.get('brokenOnly') === 'true';
    const orphanOnly = url.searchParams.get('orphanOnly') === 'true';
    const deadEndOnly = url.searchParams.get('deadEndOnly') === 'true';

    if (search === 'FIX_MY_TAGS_PLEASE') {
      try {
        await db.exec(`UPDATE UrlTags SET tags = REPLACE(REPLACE(REPLACE(tags, '["', ''), '"]', ''), '"', '') WHERE tags LIKE '%[%'`);
        return apiSuccess({ fixed: true });
      } catch (err: any) {
        return apiError(err.message || 'Unknown error during DB exec', 500);
      }
    }

    let baseWhereClause = "1=1";
    let baseParams: any[] = [];

    if (search) {
      if (tagOnly) {
        baseWhereClause += " AND COALESCE(t.tags, '') LIKE ?";
        baseParams.push(`%${search}%`);
      } else {
        baseWhereClause += " AND (n.title LIKE ? OR n.url LIKE ? OR COALESCE(t.tags, '') LIKE ?)";
        baseParams.push(`%${search}%`, `%${search}%`, `%${search}%`);
      }
    }

    if (brokenOnly) {
      baseWhereClause += " AND n.url IN (SELECT RTRIM(REPLACE(REPLACE(sourceUrl, 'https://www.fittour.vn', ''), 'https://thericetour.com', ''), '/') FROM InternalLinkTracker WHERE is404 = 1)";
    }
    
    if (orphanOnly) {
      baseWhereClause += " AND COALESCE(i.inboundCount, 0) = 0";
    }
    
    if (deadEndOnly) {
      baseWhereClause += " AND COALESCE(o.outboundCount, 0) = 0";
    }

    let whereClause = baseWhereClause;
    let params = [...baseParams];

    if (type) {
      whereClause += " AND n.type = ?";
      params.push(type);
    }

    const queryParams = [...params, limit, offset];
    const countParams = [...params];
    const typeCountParams = [...baseParams];

    const query = `
      WITH AllNodes AS (
        SELECT '/' || slug as url, 'page' as type, title, COALESCE(updatedAt, publishedAt, '') as dateSort FROM Page WHERE status != 'trash'
        UNION ALL
        SELECT '/' || slug as url, 'post' as type, title, COALESCE(updatedAt, createdAt, '') as dateSort FROM Post WHERE status != 'trash'
        UNION ALL
        SELECT '/tour/' || slug as url, 'tour' as type, title, COALESCE(updatedAt, createdAt, '') as dateSort FROM Tour WHERE status != 'trash'
        UNION ALL
        SELECT '/country/' || slug as url, 'country' as type, name as title, '' as dateSort FROM Country
      ),
      InboundCounts AS (
        SELECT RTRIM(REPLACE(REPLACE(targetUrl, 'https://www.fittour.vn', ''), 'https://thericetour.com', ''), '/') as normalizedUrl, COUNT(*) as inboundCount 
        FROM InternalLinkTracker GROUP BY normalizedUrl
      ),
      OutboundCounts AS (
        SELECT RTRIM(REPLACE(REPLACE(sourceUrl, 'https://www.fittour.vn', ''), 'https://thericetour.com', ''), '/') as normalizedUrl, COUNT(*) as outboundCount 
        FROM InternalLinkTracker GROUP BY normalizedUrl
      )
      SELECT 
        n.url, 
        n.type, 
        n.title,
        COALESCE(i.inboundCount, 0) as inboundCount,
        COALESCE(o.outboundCount, 0) as outboundCount,
        COALESCE(b.brokenCount, 0) as brokenCount,
        COALESCE(t.tags, '') as tags,
        COALESCE(t.notes, '') as notes,
        COALESCE(t.priority, 0) as priority
      FROM AllNodes n
      LEFT JOIN InboundCounts i ON i.normalizedUrl = n.url
      LEFT JOIN OutboundCounts o ON o.normalizedUrl = n.url
      LEFT JOIN (SELECT RTRIM(REPLACE(REPLACE(sourceUrl, 'https://www.fittour.vn', ''), 'https://thericetour.com', ''), '/') as normalizedUrl, COUNT(*) as brokenCount FROM InternalLinkTracker WHERE is404 = 1 GROUP BY normalizedUrl) b ON b.normalizedUrl = n.url
      LEFT JOIN UrlTags t ON n.url = t.url
      WHERE ${whereClause}
      ORDER BY n.dateSort DESC, n.url ASC
      LIMIT ? OFFSET ?
    `;

    const countQuery = `
      WITH AllNodes AS (
        SELECT '/' || slug as url, 'page' as type, title, COALESCE(updatedAt, publishedAt, '') as dateSort FROM Page WHERE status != 'trash'
        UNION ALL
        SELECT '/' || slug as url, 'post' as type, title, COALESCE(updatedAt, createdAt, '') as dateSort FROM Post WHERE status != 'trash'
        UNION ALL
        SELECT '/tour/' || slug as url, 'tour' as type, title, COALESCE(updatedAt, createdAt, '') as dateSort FROM Tour WHERE status != 'trash'
        UNION ALL
        SELECT '/country/' || slug as url, 'country' as type, name as title, '' as dateSort FROM Country
      ),
      InboundCounts AS (
        SELECT RTRIM(REPLACE(REPLACE(targetUrl, 'https://www.fittour.vn', ''), 'https://thericetour.com', ''), '/') as normalizedUrl, COUNT(*) as inboundCount 
        FROM InternalLinkTracker GROUP BY normalizedUrl
      ),
      OutboundCounts AS (
        SELECT RTRIM(REPLACE(REPLACE(sourceUrl, 'https://www.fittour.vn', ''), 'https://thericetour.com', ''), '/') as normalizedUrl, COUNT(*) as outboundCount 
        FROM InternalLinkTracker GROUP BY normalizedUrl
      )
      SELECT COUNT(*) as total
      FROM AllNodes n
      LEFT JOIN InboundCounts i ON i.normalizedUrl = n.url
      LEFT JOIN OutboundCounts o ON o.normalizedUrl = n.url
      LEFT JOIN UrlTags t ON n.url = t.url
      WHERE ${whereClause}
    `;

    // Query to get counts for each type (based on current search filter, but ignoring type filter)
    const typeCountQuery = `
      WITH AllNodes AS (
        SELECT '/' || slug as url, 'page' as type, title, COALESCE(updatedAt, publishedAt, '') as dateSort FROM Page WHERE status != 'trash'
        UNION ALL
        SELECT '/' || slug as url, 'post' as type, title, COALESCE(updatedAt, createdAt, '') as dateSort FROM Post WHERE status != 'trash'
        UNION ALL
        SELECT '/tour/' || slug as url, 'tour' as type, title, COALESCE(updatedAt, createdAt, '') as dateSort FROM Tour WHERE status != 'trash'
        UNION ALL
        SELECT '/country/' || slug as url, 'country' as type, name as title, '' as dateSort FROM Country
      ),

      InboundCounts AS (
        SELECT RTRIM(REPLACE(REPLACE(targetUrl, 'https://www.fittour.vn', ''), 'https://thericetour.com', ''), '/') as normalizedUrl, COUNT(*) as inboundCount 
        FROM InternalLinkTracker GROUP BY normalizedUrl
      ),
      OutboundCounts AS (
        SELECT RTRIM(REPLACE(REPLACE(sourceUrl, 'https://www.fittour.vn', ''), 'https://thericetour.com', ''), '/') as normalizedUrl, COUNT(*) as outboundCount 
        FROM InternalLinkTracker GROUP BY normalizedUrl
      )
      SELECT n.type, COUNT(*) as count
      FROM AllNodes n
      LEFT JOIN InboundCounts i ON i.normalizedUrl = n.url
      LEFT JOIN OutboundCounts o ON o.normalizedUrl = n.url
      LEFT JOIN UrlTags t ON n.url = t.url
      WHERE ${baseWhereClause}
      GROUP BY n.type
    `;
    
    const [dataRes, countRes, typeCountRes] = await db.batch([
      db.prepare(query).bind(...queryParams),
      db.prepare(countQuery).bind(...countParams),
      db.prepare(typeCountQuery).bind(...typeCountParams)
    ]);

    const total = (countRes.results[0] as any).total || 0;
    
    // Process type counts
    const typeCounts: Record<string, number> = { all: 0, post: 0, tour: 0, page: 0, country: 0 };
    if (typeCountRes && typeCountRes.results) {
      let totalAll = 0;
      typeCountRes.results.forEach((row: any) => {
        typeCounts[row.type] = row.count;
        totalAll += row.count;
      });
      typeCounts.all = totalAll;
    }

    return new Response(JSON.stringify({
      success: true,
      data: dataRes.results,
      total,
      page,
      limit,
      typeCounts
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });
});

export const POST = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('edit', 'post')) return apiError('Forbidden', 403);

  const db = env?.dulichcoguu_d1;
  if (!db) return apiError('Database not available', 500);

    // Auto-upgrade schema for 404 tracking just in case it hasn't been added
    try {
      await db.exec("ALTER TABLE InternalLinkTracker ADD COLUMN is404 BOOLEAN DEFAULT 0;");
    } catch (e) {}

    const body = await request.json();
    const { url, tags, notes, priority } = body;
    if (!url) return new Response(JSON.stringify({ success: false, error: 'Missing url' }), { status: 400 });

    await db.exec("CREATE TABLE IF NOT EXISTS UrlTags (url TEXT PRIMARY KEY, tags TEXT);");
    try {
      await db.exec("ALTER TABLE UrlTags ADD COLUMN notes TEXT;");
    } catch(e) {} // Ignore if column already exists
    try {
      await db.exec("ALTER TABLE UrlTags ADD COLUMN priority INTEGER DEFAULT 0;");
    } catch(e) {} // Ignore if column already exists

    await db.prepare(`
    INSERT INTO UrlTags (url, tags, notes, priority)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(url) DO UPDATE SET tags = excluded.tags, notes = excluded.notes, priority = excluded.priority
  `).bind(url, tags, notes, priority || 0).run();

  return apiSuccess({ success: true });
});
