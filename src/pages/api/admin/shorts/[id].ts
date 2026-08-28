import { env } from 'cloudflare:workers';
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

export const GET = withErrorHandler(async ({ params, request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('view', 'post')) return apiError('Forbidden', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const id = params.id;
  if (!id) return apiError('Bad request', 400);

  const item = await d1Db.prepare("SELECT * FROM ShortVideo WHERE id = ?").bind(id).first();
  if (!item) return apiError('Not found', 404);

  return apiSuccess(item);
});

export const PATCH = withErrorHandler(async ({ params, request, locals }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;

  if (!authorize('edit', 'post')) {
    return apiError('Bạn không có quyền sửa video này.', 403);
  }

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const id = params.id;
  if (!id) return apiError('Bad request', 400);

  const existing = await d1Db.prepare("SELECT id FROM ShortVideo WHERE id = ?").bind(id).first();
  if (!existing) return apiError('Not found', 404);

  const body = await request.json();
  const { platform, videoUrl, title, description, topicSlug, tourSlug, thumbnailUrl, viewOrder, status } = body;

  let finalPlatform = platform || 'tiktok';
  let videoId = '';
  
  if (videoUrl) {
    if (finalPlatform === 'tiktok') {
      videoId = extractTikTokId(videoUrl) || '';
    } else if (finalPlatform === 'youtube') {
      videoId = extractYoutubeId(videoUrl) || '';
    } else if (finalPlatform === 'instagram') {
      videoId = extractInstagramId(videoUrl) || '';
    } else {
      videoId = videoUrl;
    }
    
    if (finalPlatform !== 'local' && !videoId) {
      return apiError('Không thể trích xuất ID từ link này. Vui lòng kiểm tra lại URL.', 400);
    }
  }

  let updates: string[] = [];
  let sqlParams: any[] = [];

  if (platform !== undefined) { updates.push("platform = ?"); sqlParams.push(platform); }
  if (videoUrl !== undefined) { updates.push("videoUrl = ?"); sqlParams.push(videoUrl); }
  if (videoId) { updates.push("videoId = ?"); sqlParams.push(videoId); }
  if (title !== undefined) { updates.push("title = ?"); sqlParams.push(title); }
  if (description !== undefined) { updates.push("description = ?"); sqlParams.push(description); }
  if (topic !== undefined) { updates.push("topic = ?"); sqlParams.push(topic); }
  if (tourSlug !== undefined) { updates.push("tourSlug = ?"); sqlParams.push(tourSlug); }
  if (thumbnailUrl !== undefined) { updates.push("thumbnailUrl = ?"); sqlParams.push(thumbnailUrl); }
  if (viewOrder !== undefined) { updates.push("viewOrder = ?"); sqlParams.push(viewOrder); }
  if (status !== undefined) { updates.push("status = ?"); sqlParams.push(status); }

  if (updates.length > 0) {
    updates.push("updatedAt = ?");
    sqlParams.push(new Date().toISOString());

    const query = `UPDATE ShortVideo SET ${updates.join(', ')} WHERE id = ?`;
    sqlParams.push(id);
    await d1Db.prepare(query).bind(...sqlParams).run();

    const ipAddress = request.headers.get('CF-Connecting-IP') || null;
    const userAgent = request.headers.get('User-Agent') || null;
    await logAudit(d1Db, user?.userId || user?.id, null, 'update_short_video', ipAddress, userAgent, { shortVideoId: id });
  }

  return apiSuccess({ success: true });
});

export const DELETE = withErrorHandler(async ({ params, request, locals }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;

  if (!authorize('delete', 'post')) {
    return apiError('Bạn không có quyền xóa video này.', 403);
  }

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB error', 500);

  const id = params.id;
  if (!id) return apiError('Bad request', 400);

  await d1Db.prepare("DELETE FROM ShortVideo WHERE id = ?").bind(id).run();

  const ipAddress = request.headers.get('CF-Connecting-IP') || null;
  const userAgent = request.headers.get('User-Agent') || null;
  await logAudit(d1Db, user?.userId || user?.id, null, 'delete_short_video', ipAddress, userAgent, { shortVideoId: id });

  return apiSuccess({ success: true });
});
