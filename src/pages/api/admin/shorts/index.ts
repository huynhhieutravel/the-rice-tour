import { env } from 'cloudflare:workers';
import { v4 as uuidv4 } from 'uuid';
import { apiSuccess, apiError, withErrorHandler } from '../../utils';
import { logAudit } from '../../../../lib/audit';

export const prerender = false;

// Helpers to extract Video IDs
function extractTikTokId(url: string) {
  const match = url.match(/video\/(\d+)/);
  return match ? match[1] : null;
}

function extractYoutubeId(url: string) {
  const match = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

function extractInstagramId(url: string) {
  const match = url.match(/reel\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

export const GET = withErrorHandler(async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  // Use general post auth logic
  if (!authorize('view', 'post')) return apiError('Forbidden', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const { searchParams } = new URL(request.url);
  const search = searchParams.get('q');
  const platform = searchParams.get('platform');
  const status = searchParams.get('status');
  
  let query = "SELECT * FROM ShortVideo WHERE 1=1";
  let params: string[] = [];

  if (search) {
    let safeSearch = search.trim();
    if (safeSearch.length > 40) safeSearch = safeSearch.substring(0, 40);
    query += " AND title LIKE ?";
    params.push(`%${safeSearch}%`);
  }
  
  if (platform) {
    query += " AND platform = ?";
    params.push(platform);
  }
  
  if (status) {
    query += " AND status = ?";
    params.push(status);
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
    return apiError('Bạn không có quyền tạo video.', 403);
  }

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const body = await request.json();
  const { platform, videoUrl, title, description, topicSlug, tourSlug, thumbnailUrl, viewOrder, status } = body;

  if (!videoUrl) {
    return apiError('Vui lòng cung cấp link video', 400);
  }

  let finalPlatform = platform || 'tiktok';
  let videoId = '';
  
  if (finalPlatform === 'tiktok') {
    videoId = extractTikTokId(videoUrl) || '';
  } else if (finalPlatform === 'youtube') {
    videoId = extractYoutubeId(videoUrl) || '';
  } else if (finalPlatform === 'instagram') {
    videoId = extractInstagramId(videoUrl) || '';
  } else {
    // local or others
    videoId = videoUrl;
  }
  
  if (finalPlatform !== 'local' && !videoId) {
    return apiError('Không thể trích xuất ID từ link này. Vui lòng kiểm tra lại URL.', 400);
  }

  const id = `shrt_${uuidv4()}`;

  await d1Db.prepare(`
    INSERT INTO ShortVideo (
      id, platform, videoUrl, videoId, title, description, topicSlug, tourSlug, thumbnailUrl, viewOrder, status, createdAt
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).bind(
    id, 
    finalPlatform, 
    videoUrl, 
    videoId, 
    title || null, 
    description || null, 
    topicSlug || null, 
    tourSlug || null, 
    thumbnailUrl || null, 
    viewOrder || 0, 
    status || 'draft',
    new Date().toISOString()
  ).run();

  const ipAddress = request.headers.get('CF-Connecting-IP') || null;
  const userAgent = request.headers.get('User-Agent') || null;
  await logAudit(d1Db, user?.userId || user?.id, null, 'create_short_video', ipAddress, userAgent, { shortVideoId: id });

  return apiSuccess({ id }, 201);
});
