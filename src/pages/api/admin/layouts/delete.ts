import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const POST: APIRoute = async ({ request, locals }) => {
  const authorize = (locals as any).authorize;
  if (!authorize('manage_settings', 'system')) {
    return new Response(JSON.stringify({ success: false, error: 'Forbidden' }), { status: 403, headers: { 'Content-Type': 'application/json' } });
  }

  try {
    const data = await request.json();
    const { id } = data;

    if (!id) {
      return new Response(JSON.stringify({ success: false, error: 'Missing ID' }), { status: 400 });
    }

    const d1Db = env?.dulichcoguu_d1;
    if (!d1Db) {
      return new Response(JSON.stringify({ success: false, error: 'D1 database not configured' }), { status: 500 });
    }

    // Get current profiles
    const { results } = await d1Db.prepare("SELECT value FROM SiteSetting WHERE key = 'layout_profiles'").all();
    let profiles = [];
    if (results && results.length > 0) {
      profiles = typeof results[0].value === 'string' ? JSON.parse(results[0].value) : results[0].value;
    }

    // Filter out the deleted profile
    const newProfiles = profiles.filter((p: any) => p.id !== id);

    // Save back to DB
    await d1Db.prepare("UPDATE SiteSetting SET value = ? WHERE key = 'layout_profiles'")
      .bind(JSON.stringify(newProfiles))
      .run();

    return new Response(JSON.stringify({ success: true }));
  } catch (err: any) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500 });
  }
};
