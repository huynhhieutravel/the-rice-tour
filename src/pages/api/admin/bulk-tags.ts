import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from '../utils';

export const POST = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('edit', 'post')) return apiError('Forbidden', 403);

  const db = env?.dulichcoguu_d1;
  if (!db) return apiError('Database not available', 500);

  const body = await request.json();
  const { urls, tags } = body; // urls is an array of strings

  if (!urls || !Array.isArray(urls) || urls.length === 0) {
    return apiError('Missing urls array', 400);
  }

  // Ensure table exists
  await db.exec("CREATE TABLE IF NOT EXISTS UrlTags (url TEXT PRIMARY KEY, tags TEXT);");

  // Fetch existing tags to merge
  const placeholders = urls.map(() => '?').join(',');
  const existingRes = await db.prepare(`SELECT url, tags FROM UrlTags WHERE url IN (${placeholders})`).bind(...urls).all();
  const existingMap = new Map();
  if (existingRes.results) {
    existingRes.results.forEach((row: any) => existingMap.set(row.url, row.tags));
  }

  // We can use a batch to insert all of them
  const stmt = db.prepare(`
    INSERT INTO UrlTags (url, tags)
    VALUES (?, ?)
    ON CONFLICT(url) DO UPDATE SET tags = excluded.tags
  `);

  const newTagsArray = (tags || '').split(',').map((t: string) => t.trim()).filter(Boolean);

  const batch = urls.map((url: string) => {
    const existingStr = existingMap.get(url) || '';
    const existingArray = existingStr.split(',').map((t: string) => t.trim()).filter(Boolean);
    const merged = Array.from(new Set([...existingArray, ...newTagsArray])).join(', ');
    return stmt.bind(url, merged);
  });

  // Execute in batches if too many
  const DB_BATCH_SIZE = 100;
  for (let i = 0; i < batch.length; i += DB_BATCH_SIZE) {
    await db.batch(batch.slice(i, i + DB_BATCH_SIZE));
  }

  return new Response(JSON.stringify({ success: true, updated: urls.length }), { status: 200, headers: { 'Content-Type': 'application/json' } });
});
