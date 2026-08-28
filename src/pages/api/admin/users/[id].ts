import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import * as bcrypt from 'bcryptjs';
import { apiSuccess, apiError, withErrorHandler } from '../../utils';
import { logAudit } from '../../../../lib/audit';

export const prerender = false;

export const PUT: APIRoute = withErrorHandler(async ({ request, params, locals }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;
  const targetId = params.id;

  if (!authorize('edit', 'user')) {
    return apiError('Bạn không có quyền sửa tài khoản.', 403);
  }

  const d1Db = env?.dulichcoguu_d1;
  const sessionKV = env?.SESSION;
  if (!d1Db) return apiError('DB Error', 500);

  const targetUser = await d1Db.prepare("SELECT id, role, is_active FROM users WHERE id = ?").bind(targetId).first<any>();
  if (!targetUser) return apiError('Tài khoản không tồn tại.', 404);

  const body = await request.json();
  const { role, is_active, password, displayName, profileUrl, avatarUrl, authorSnippet } = body;

  // Anti-Escalation & Last Admin Protection
  if (role) {
    if (role === 'super_admin' && user.role !== 'super_admin') {
      return apiError('Bạn không thể thăng cấp thành Super Admin.', 403);
    }
    if (targetUser.role === 'super_admin' && user.role !== 'super_admin') {
      return apiError('Bạn không thể hạ cấp Super Admin.', 403);
    }
    if (targetUser.role === 'super_admin' && role !== 'super_admin') {
      // Last admin protection
      const adminCount = await d1Db.prepare("SELECT COUNT(*) as count FROM users WHERE role = 'super_admin' AND is_active = 1").first<{count: number}>();
      if (adminCount && adminCount.count <= 1) {
        return apiError('Không thể hạ cấp Super Admin cuối cùng.', 400);
      }
    }
  }

  // Soft Delete / Disable Protection
  if (is_active !== undefined && is_active === 0) {
    if (!authorize('disable', 'user')) {
      return apiError('Bạn không có quyền khoá tài khoản.', 403);
    }
    if (targetUser.role === 'super_admin') {
      return apiError('Không thể khoá tài khoản Super Admin.', 403);
    }
    if (targetId === user.userId || targetId === user.id) {
      return apiError('Bạn không thể tự khoá chính mình.', 400);
    }
  }

  const updates = [];
  const bindings = [];

  if (role) {
    updates.push("role = ?");
    bindings.push(role);
  }

  if (is_active !== undefined) {
    updates.push("is_active = ?");
    bindings.push(is_active ? 1 : 0);
    
    if (is_active === 0) {
      updates.push("disabled_at = ?");
      bindings.push(new Date().toISOString());
      updates.push("disabled_by = ?");
      bindings.push(user.userId || user.id);
      
      // Revoke session if disabled
      if (sessionKV) {
        // Find session indexing key
        try {
          const userSessionsRaw = await sessionKV.get(`user_sessions:${targetId}`);
          if (userSessionsRaw) {
            const sessions = JSON.parse(userSessionsRaw);
            for (const sId of sessions) {
              await sessionKV.delete(`session:${sId}`);
            }
            await sessionKV.delete(`user_sessions:${targetId}`);
          }
        } catch(e) {}
      }
    } else {
      updates.push("disabled_at = NULL");
      updates.push("disabled_by = NULL");
      updates.push("failed_login_attempts = 0"); // Unlock if locked by attempts
    }
  }

  if (password) {
    const passwordHash = bcrypt.hashSync(password, 10);
    updates.push("password_hash = ?");
    bindings.push(passwordHash);

    // Revoke ALL sessions for the target user (Force Logout)
    if (sessionKV) {
      try {
        const userSessionsRaw = await sessionKV.get(`user_sessions:${targetId}`);
        if (userSessionsRaw) {
          const sessions = JSON.parse(userSessionsRaw);
          for (const sId of sessions) {
            await sessionKV.delete(`session:${sId}`);
          }
          await sessionKV.delete(`user_sessions:${targetId}`);
        }
      } catch(e) {}
    }
  }

  if (updates.length > 0) {
    const query = `UPDATE users SET ${updates.join(', ')} WHERE id = ?`;
    bindings.push(targetId);
    try {
      await d1Db.prepare(query).bind(...bindings).run();
    } catch (updateErr: any) {
      // Fallback to core columns if optional columns like disabled_at/must_change_password don't exist
      const safeUpdates: string[] = [];
      const safeBindings: any[] = [];
      if (role) { safeUpdates.push("role = ?"); safeBindings.push(role); }
      if (is_active !== undefined) { safeUpdates.push("is_active = ?"); safeBindings.push(is_active ? 1 : 0); }
      if (password) {
        const passwordHash = bcrypt.hashSync(password, 10);
        safeUpdates.push("password_hash = ?"); safeBindings.push(passwordHash);
      }
      if (safeUpdates.length > 0) {
        safeBindings.push(targetId);
        await d1Db.prepare(`UPDATE users SET ${safeUpdates.join(', ')} WHERE id = ?`).bind(...safeBindings).run();
      }
    }

    const ipAddress = request.headers.get('CF-Connecting-IP') || null;
    const userAgent = request.headers.get('User-Agent') || null;
    await logAudit(d1Db, user.userId || user.id, targetId, 'update_user', ipAddress, userAgent, { updates: body });
  }

  // Update Profile table ("User") — display name, profile URL, avatar & author snippet
  if (displayName || profileUrl !== undefined || avatarUrl !== undefined || authorSnippet !== undefined) {
    const profileUpdates: string[] = [];
    const profileBindings: any[] = [];
    if (displayName) {
      profileUpdates.push('name = ?');
      profileBindings.push(displayName);
    }
    if (profileUrl !== undefined) {
      profileUpdates.push('url = ?');
      profileBindings.push(profileUrl || null);
    }
    if (avatarUrl !== undefined) {
      profileUpdates.push('avatar = ?');
      profileBindings.push(avatarUrl || null);
    }
    if (authorSnippet !== undefined) {
      profileUpdates.push('author_snippet = ?');
      profileBindings.push(authorSnippet || null);
    }
    if (profileUpdates.length > 0) {
      const existingProfile = await d1Db.prepare('SELECT id FROM "User" WHERE id = ?').bind(targetId).first();
      if (existingProfile) {
        profileBindings.push(targetId);
        await d1Db.prepare(`UPDATE "User" SET ${profileUpdates.join(', ')} WHERE id = ?`).bind(...profileBindings).run();
      } else {
        const fields = ['id'];
        const values = ['?'];
        const insertBindings: any[] = [targetId];
        
        if (displayName) { fields.push('name'); values.push('?'); insertBindings.push(displayName); }
        if (profileUrl !== undefined) { fields.push('url'); values.push('?'); insertBindings.push(profileUrl || null); }
        if (avatarUrl !== undefined) { fields.push('avatar'); values.push('?'); insertBindings.push(avatarUrl || null); }
        if (authorSnippet !== undefined) { fields.push('author_snippet'); values.push('?'); insertBindings.push(authorSnippet || null); }
        
        const newRole = role || targetUser.role || 'author';
        fields.push('role'); values.push('?'); insertBindings.push(newRole);
        
        await d1Db.prepare(`INSERT INTO "User" (${fields.join(', ')}) VALUES (${values.join(', ')})`).bind(...insertBindings).run();
      }
      
      // Sync Post.author text for all posts by this author (so frontend stays consistent)
      if (displayName) {
        await d1Db.prepare('UPDATE Post SET author = ? WHERE authorId = ?').bind(displayName, targetId).run();
      }
    }
  }

  return apiSuccess({ message: 'Cập nhật thành công' });
});

// DELETE: Hard Delete (only Super Admin)
export const DELETE: APIRoute = withErrorHandler(async ({ params, locals, request }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;
  const targetId = params.id;

  if (user.role !== 'super_admin') {
    return apiError('Chỉ Super Admin mới có quyền xóa cứng.', 403);
  }

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB Error', 500);

  const targetUser = await d1Db.prepare("SELECT id, role FROM users WHERE id = ?").bind(targetId).first<any>();
  if (!targetUser) return apiError('Tài khoản không tồn tại.', 404);

  if (targetUser.role === 'super_admin') {
    const adminCount = await d1Db.prepare("SELECT COUNT(*) as count FROM users WHERE role = 'super_admin'").first<{count: number}>();
    if (adminCount && adminCount.count <= 1) {
      return apiError('Không thể xóa Super Admin cuối cùng.', 400);
    }
  }

  if (targetId === user.userId || targetId === user.id) {
    return apiError('Bạn không thể tự xóa chính mình.', 400);
  }

  await d1Db.prepare("DELETE FROM users WHERE id = ?").bind(targetId).run();

  const ipAddress = request.headers.get('CF-Connecting-IP') || null;
  const userAgent = request.headers.get('User-Agent') || null;
  await logAudit(d1Db, user.userId || user.id, targetId, 'hard_delete_user', ipAddress, userAgent, {});

  return apiSuccess({ message: 'Đã xóa cứng tài khoản' });
});
