import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

export const GET: APIRoute = async ({ request, locals }) => {
  const d1 = env?.dulichcoguu_d1;
  if (!d1) return new Response('D1 Database not found', { status: 500 });

  return new Response(JSON.stringify({ status: 'ok' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
