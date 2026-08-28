import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from '../utils';

export const GET = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('view', 'post')) return apiError('Forbidden', 403);

  const db = env?.dulichcoguu_d1;
  if (!db) return apiError('Database not available', 500);



  const res = await db.prepare("SELECT DISTINCT tags FROM UrlTags WHERE tags IS NOT NULL AND tags != ''").all();
  
  // Process tags to return a unique array
  const tagSet = new Set<string>();
  if (res.results) {
    res.results.forEach((row: any) => {
      if (row.tags) {
        const splitTags = row.tags.split(',').map((t: string) => t.trim()).filter(Boolean);
        splitTags.forEach((t: string) => tagSet.add(t));
      }
    });
  }

  return new Response(JSON.stringify({
    success: true,
    tags: Array.from(tagSet).sort()
  }), { status: 200, headers: { 'Content-Type': 'application/json' } });
});
