// src/pages/api/admin/settings.ts
import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { apiSuccess, apiError, withErrorHandler } from '../utils';
import { logAudit } from '../../../lib/audit';

export const prerender = false;

function parseSettingValue(setting: any) {
  try {
    return typeof setting.value === 'string' ? JSON.parse(setting.value) : setting.value;
  } catch (e) {
    return setting.value;
  }
}

// GET /api/admin/settings
export const GET: APIRoute = withErrorHandler(async ({ locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) return apiError('Forbidden', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB not found', 500);

  const { results } = await d1Db.prepare("SELECT * FROM SiteSetting").all();
  
  const settingsMap = (results || []).reduce((acc: any, setting: any) => {
    acc[setting.key] = {
      value: parseSettingValue(setting),
      version: setting.version,
      updatedAt: setting.updatedAt
    };
    return acc;
  }, {} as Record<string, any>);

  return apiSuccess(settingsMap);
});

// PATCH or POST /api/admin/settings (Bulk Update)
export const POST: APIRoute = withErrorHandler(async (ctx) => {
  return handleSettingsUpdate(ctx);
});

export const PATCH: APIRoute = withErrorHandler(async (ctx) => {
  return handleSettingsUpdate(ctx);
});

async function handleSettingsUpdate({ request, locals }: any) {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;

  if (!authorize('manage_settings', 'system')) {
    console.warn(`[RBAC Blocked] User ${user?.userId} tried to update settings`);
    return apiError('Bạn không có quyền quản lý hệ thống.', 403);
  }

  const d1Db = env?.dulichcoguu_d1;
  const sessionKV = env?.SESSION;
  if (!d1Db) return apiError('DB not found', 500);
  
  let rawPayload = await request.json();
  let payload: Array<{ key: string; value: any }> = [];

  if (Array.isArray(rawPayload)) {
    payload = rawPayload;
  } else if (typeof rawPayload === 'object' && rawPayload !== null) {
    payload = Object.entries(rawPayload).map(([key, value]) => ({ key, value }));
  } else {
    return apiError('Payload must be an array or object of settings', 400);
  }

  // 1. Fetch current existing keys to know whether to INSERT or UPDATE
  const existingRows = await d1Db.prepare("SELECT key, version FROM SiteSetting").all();
  const existingMap = new Map((existingRows.results || []).map((r: any) => [r.key, r.version]));

  const stmts = [];
  const settingsObjForKV: Record<string, any> = {};
  let newTotalVersion = 0;
  const updatedKeys = [];

  // 2. Prepare D1 Batch Statements
  for (const item of payload) {
    if (!item || typeof item !== 'object' || !item.key || item.value === undefined) continue;
    
    const valueStr = typeof item.value === 'string' ? item.value : JSON.stringify(item.value);
    settingsObjForKV[item.key] = parseSettingValue({ value: valueStr });
    updatedKeys.push(item.key);

    if (existingMap.has(item.key)) {
      const newVer = (existingMap.get(item.key) as number) + 1;
      newTotalVersion += newVer;
      stmts.push(
        d1Db.prepare(`UPDATE SiteSetting SET value = ?, version = ?, updatedAt = datetime('now') WHERE key = ?`)
          .bind(valueStr, newVer, item.key)
      );
    } else {
      newTotalVersion += 1;
      stmts.push(
        d1Db.prepare(`INSERT INTO SiteSetting (key, value, version, updatedAt) VALUES (?, ?, 1, datetime('now'))`)
          .bind(item.key, valueStr)
      );
    }
  }

  if (stmts.length > 0) {
    // 3. Execute Transaction
    await d1Db.batch(stmts);

    // 4. Update KV using Pointer Pattern
    if (sessionKV) {
      // Fetch remaining settings from DB to ensure KV has a complete picture
      const allSettings = await d1Db.prepare("SELECT * FROM SiteSetting").all();
      const fullSettingsObj: Record<string, any> = {};
      let finalVersion = 0;
      
      (allSettings.results || []).forEach((row: any) => {
        fullSettingsObj[row.key] = parseSettingValue(row);
        finalVersion += row.version;
      });

      const targetKey = `settings:v${finalVersion}`;
      // Write Data
      await sessionKV.put(targetKey, JSON.stringify({ settings: fullSettingsObj, version: finalVersion }));
      // Update Pointer
      await sessionKV.put('settings:version', finalVersion.toString());

      // If roles matrix was updated, invalidate IAM cache
      if (updatedKeys.includes('role_permissions')) {
        await sessionKV.delete('iam:roles');
      }
    }
    
    // Log audit
    const ipAddress = request.headers.get('CF-Connecting-IP') || null;
    const userAgent = request.headers.get('User-Agent') || null;
    await logAudit(d1Db, user?.userId || user?.id, null, 'update_settings', ipAddress, userAgent, { updatedKeys });
  }

  return apiSuccess({ message: 'Settings updated successfully' });
}
