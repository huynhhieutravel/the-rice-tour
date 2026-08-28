import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from '../utils';

export const GET = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('view', 'post')) return apiError('Forbidden', 403);

  const db = env?.dulichcoguu_d1;
  if (!db) return apiError('Database not available', 500);

  const urlObj = new URL(request.url);
  let targetUrl = urlObj.searchParams.get('url');
  if (!targetUrl) return apiError('Missing url parameter', 400);

  // Handle relative and absolute URL matching
  const absoluteUrl = targetUrl.startsWith('http') ? targetUrl : `https://fittour.vn${targetUrl}`;
  const relativeUrl = targetUrl.replace('https://thericetour.com', '');

  const inboundQuery = `
    SELECT id, sourceUrl, anchorText, tags 
    FROM InternalLinkTracker 
    WHERE targetUrl = ? OR targetUrl = ?
  `;

  const outboundQuery = `
    SELECT id, targetUrl, anchorText, tags, is404
    FROM InternalLinkTracker 
    WHERE sourceUrl = ? OR sourceUrl = ?
  `;

  const [inboundRes, outboundRes] = await db.batch([
    db.prepare(inboundQuery).bind(absoluteUrl, relativeUrl),
    db.prepare(outboundQuery).bind(absoluteUrl, relativeUrl)
  ]);

  return new Response(JSON.stringify({
    success: true,
    inbound: inboundRes.results || [],
    outbound: outboundRes.results || []
  }), { status: 200, headers: { 'Content-Type': 'application/json' } });
});
