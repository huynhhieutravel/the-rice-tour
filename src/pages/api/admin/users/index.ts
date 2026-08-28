import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import bcrypt from 'bcryptjs';
import { apiSuccess, apiError, withErrorHandler } from '../../utils';
import { logAudit } from '../../../../lib/audit';

export const prerender = false;

// GET: Lấy danh sách tác giả (từ bảng "User" — Profile table, chứa name + url cho Author Attribution)
export const GET: APIRoute = withErrorHandler(async ({ locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('view', 'post')) return apiError('Forbidden', 403);

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('Database missing', 500);

  const { results } = await d1Db.prepare('SELECT id, COALESCE(displayName, username) as name, username as slug, email, avatar, url FROM users ORDER BY username ASC').all();
  return apiSuccess(results || []);
});

// POST: Tạo User mới
export const POST: APIRoute = withErrorHandler(async ({ request, locals }) => {
  const user = (locals as any).user;
  const authorize = (locals as any).authorize;

  if (!authorize('create', 'user')) {
    return apiError('Bạn không có quyền tạo tài khoản.', 403);
  }

  const d1Db = env?.dulichcoguu_d1;
  if (!d1Db) return apiError('DB Error', 500);

  const body = await request.json();
  const { username, email, role, password } = body;

  if (!username || !email || !role || !password) {
    return apiError('Thiếu thông tin bắt buộc.', 400);
  }

  // Anti-Escalation Check: user cannot create super_admin unless they are super_admin
  if (role === 'super_admin' && user.role !== 'super_admin') {
    return apiError('Bạn không thể cấp quyền Super Admin.', 403);
  }

  // Check duplicate email or username
  const existing = await d1Db.prepare("SELECT id FROM users WHERE email = ? OR username = ?").bind(email, username).first();
  if (existing) {
    return apiError('Email hoặc Tên đăng nhập đã tồn tại.', 400);
  }

  const id = crypto.randomUUID();
  const passwordHash = bcrypt.hashSync(password, 10);
  const now = new Date().toISOString();

  // Try insert with must_change_password if supported, else fallback to standard core schema
  try {
    await d1Db.prepare(`
      INSERT INTO users (id, username, email, password_hash, displayName, role, is_active, created_at, must_change_password)
      VALUES (?, ?, ?, ?, ?, ?, 1, ?, 1)
    `).bind(id, username, email, passwordHash, username, role, now).run();
  } catch (insertErr: any) {
    await d1Db.prepare(`
      INSERT INTO users (id, username, email, password_hash, displayName, role, is_active, created_at)
      VALUES (?, ?, ?, ?, ?, ?, 1, ?)
    `).bind(id, username, email, passwordHash, username, role, now).run();
  }

  const ipAddress = request.headers.get('CF-Connecting-IP') || null;
  const userAgent = request.headers.get('User-Agent') || null;
  await logAudit(d1Db, user?.userId || user?.id, id, 'create_user', ipAddress, userAgent, { username, role });

  return apiSuccess({ id, username, email, role }, 201);
});
