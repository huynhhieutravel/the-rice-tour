import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from '../../utils';
import { logAudit } from '../../../../lib/audit';

export const POST: APIRoute = withErrorHandler(async ({ request, locals }) => {
  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError("DB Error", 500);

  const user = (locals as any).user;
  const authorize = (locals as any).authorize;

  const body = await request.json();
  const { action, ids } = body;

  if (!action || !ids || !Array.isArray(ids) || ids.length === 0) {
    return apiError("Invalid request payload", 400);
  }

  // Authoritative check based on action type
  const requiredPermission = ['trash', 'restore', 'delete'].includes(action) ? 'delete' : 'edit';
  if (!authorize(requiredPermission, 'tour')) {
    console.warn(`[RBAC Blocked] User ${user?.userId} tried to ${action} tours`);
    return apiError("Bạn không có quyền thực hiện hành động này.", 403);
  }

  const placeholders = ids.map(() => '?').join(',');

  if (action === 'trash') {
    await d1Db.prepare(`UPDATE Tour SET status = 'trash' WHERE id IN (${placeholders})`).bind(...ids).run();
  } else if (action === 'restore') {
    await d1Db.prepare(`UPDATE Tour SET status = 'draft' WHERE id IN (${placeholders})`).bind(...ids).run();
  } else if (action === 'delete') {
    // Permanent delete
    await d1Db.prepare(`DELETE FROM TourCountry WHERE tour_id IN (${placeholders})`).bind(...ids).run();
    await d1Db.prepare(`DELETE FROM Tour WHERE id IN (${placeholders})`).bind(...ids).run();
  } else if (action === 'mark_inactive') {
    await d1Db.prepare(`UPDATE Tour SET badge = 'inactive' WHERE id IN (${placeholders})`).bind(...ids).run();
  } else if (action === 'mark_active') {
    await d1Db.prepare(`UPDATE Tour SET badge = NULL WHERE id IN (${placeholders}) AND badge = 'inactive'`).bind(...ids).run();
  } else {
    return apiError("Unknown action", 400);
  }

  // Log audit
  const ipAddress = request.headers.get('CF-Connecting-IP') || null;
  const userAgent = request.headers.get('User-Agent') || null;
  await logAudit(d1Db, user?.userId || user?.id, null, `bulk_${action}_tour`, ipAddress, userAgent, { ids });

  return apiSuccess({ message: `Action ${action} completed successfully` });
});
