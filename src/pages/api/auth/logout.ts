import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const POST: APIRoute = async ({ request, locals, cookies }) => {
  try {
    const sessionKV = env?.SESSION;
    
    if (sessionKV) {
      const sessionId = cookies.get('admin_session')?.value;
      if (sessionId) {
        // Delete session from KV
        await sessionKV.delete(`session:${sessionId}`);
      }
    }

    // Clear cookie
    cookies.delete('admin_session', { path: '/' });

    return new Response(JSON.stringify({ success: true, redirectUrl: '/admin/login' }), { status: 200 });

  } catch (err: any) {
    console.error('Logout Error:', err);
    return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), { status: 500 });
  }
};
