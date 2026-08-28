import type { APIRoute } from 'astro';
import bcrypt from 'bcryptjs';
import { env } from 'cloudflare:workers';

function generateSessionId() {
  return crypto.randomUUID();
}

export const POST: APIRoute = async ({ request, locals, cookies }) => {
  try {
    const d1Db = env?.dulichcoguu_d1;
    const sessionKV = env?.SESSION;
    
    if (!d1Db || !sessionKV) {
      return new Response(JSON.stringify({ success: false, message: 'Database connection failed' }), { status: 500 });
    }

    const { username, password } = await request.json();

    if (!username || !password) {
      return new Response(JSON.stringify({ success: false, message: 'Missing credentials' }), { status: 400 });
    }

    // Rate Limiting Check (Simple IP-based or Username-based)
    // We will use username-based rate limiting to prevent brute-forcing a specific account.
    const rateLimitKey = `login_attempts:${username}`;
    let attempts = 0;
    const attemptsStr = await sessionKV.get(rateLimitKey);
    if (attemptsStr) {
      attempts = parseInt(attemptsStr, 10);
      if (attempts >= 5) {
        return new Response(JSON.stringify({ success: false, message: 'Too many failed login attempts. Please try again later.' }), { status: 429 });
      }
    }

    // Query User
    const { results } = await d1Db.prepare('SELECT * FROM users WHERE username = ? LIMIT 1').bind(username).all();
    
    if (!results || results.length === 0) {
      // Increment failed attempts
      await sessionKV.put(rateLimitKey, (attempts + 1).toString(), { expirationTtl: 300 }); // 5 minutes block
      return new Response(JSON.stringify({ success: false, message: 'Invalid credentials' }), { status: 401 });
    }

    const user: any = results[0];

    if (user.is_active !== 1) {
      return new Response(JSON.stringify({ success: false, message: 'Account is disabled' }), { status: 403 });
    }

    // Compare Password
    const isValid = bcrypt.compareSync(password, user.password_hash);

    if (!isValid) {
      // Increment failed attempts
      // Also update DB failed_login_attempts
      await d1Db.prepare('UPDATE users SET failed_login_attempts = failed_login_attempts + 1 WHERE id = ?').bind(user.id).run();
      await sessionKV.put(rateLimitKey, (attempts + 1).toString(), { expirationTtl: 300 });
      return new Response(JSON.stringify({ success: false, message: 'Invalid credentials' }), { status: 401 });
    }

    // Success! Clear rate limit and reset failed_login_attempts in DB
    await sessionKV.delete(rateLimitKey);
    await d1Db.prepare('UPDATE users SET failed_login_attempts = 0, last_login_at = CURRENT_TIMESTAMP WHERE id = ?').bind(user.id).run();

    // Create Session
    const sessionId = generateSessionId();
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days

    const sessionData = {
      sessionId,
      userId: user.id,
      role: user.role,
      is_active: user.is_active,
      expiresAt: expiresAt.toISOString(),
      userAgent: request.headers.get('User-Agent') || 'Unknown',
      ip: request.headers.get('CF-Connecting-IP') || 'Unknown',
      last_active_at: new Date().toISOString()
    };

    // Store in KV (expirationTtl is in seconds)
    await sessionKV.put(`session:${sessionId}`, JSON.stringify(sessionData), { expirationTtl: 7 * 24 * 60 * 60 });

    // Session Indexing for Revocation (IAM-lite)
    try {
      const userSessionsRaw = await sessionKV.get(`user_sessions:${user.id}`);
      let userSessions = [];
      if (userSessionsRaw) {
        userSessions = JSON.parse(userSessionsRaw);
      }
      userSessions.push(sessionId);
      // Keep only last 10 sessions to prevent memory bloat
      if (userSessions.length > 10) userSessions = userSessions.slice(-10);
      await sessionKV.put(`user_sessions:${user.id}`, JSON.stringify(userSessions), { expirationTtl: 7 * 24 * 60 * 60 });
    } catch (e) {
      console.error('Failed to index session', e);
    }

    // Set Cookie
    cookies.set('admin_session', sessionId, {
      path: '/',
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60
    });

    return new Response(JSON.stringify({ success: true, redirectUrl: '/admin' }), { status: 200 });

  } catch (err: any) {
    console.error('Login Error:', err);
    return new Response(JSON.stringify({ success: false, message: 'Lỗi hệ thống. Vui lòng thử lại.' }), { status: 500 });
  }
};
