import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async ({ locals }) => {
  try {
    const d1Db = (env as any)?.dulichcoguu_d1 || (env as any)?.thericetour_d1 || (env as any)?.DB;
    if (!d1Db) {
      return new Response(JSON.stringify({ error: 'No D1 binding found' }), { status: 500 });
    }

    await d1Db.prepare(`
      UPDATE Tour SET 
        content = '<!-- Astro Native Page: src/pages/tour/1-day-premium-cu-chi-tunnels.astro -->',
        price_text = '3,090,000 VND',
        price_number = 3090000,
        format = 'astro',
        updatedAt = datetime('now')
      WHERE slug = '1-day-premium-cu-chi-tunnels'
    `).run();

    return new Response(JSON.stringify({
      success: true,
      message: 'Successfully updated Tour in D1 to format=astro (Native Astro Page)!',
      slug: '1-day-premium-cu-chi-tunnels',
      format: 'astro'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message, stack: err.stack }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
