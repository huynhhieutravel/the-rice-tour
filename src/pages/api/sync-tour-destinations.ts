import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const prerender = false;

export const GET: APIRoute = async () => {
  const d1Db = (env as any)?.dulichcoguu_d1 || (env as any)?.thericetour_d1 || (env as any)?.DB;
  if (!d1Db) {
    return new Response(JSON.stringify({ error: 'No D1 database binding' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const southVietnamTourSlugs = [
    'half-day-cu-chi-tunnels-tour',
    '1-day-premium-cu-chi-tunnels',
    'full-day-mekong-delta-tour-ben-tre-my-tho',
    '2-day-mekong-delta-tour',
    'ho-chi-minh-city-half-day-private-tour',
    'cooking-class-local-market'
  ];

  const mekongTourSlugs = [
    'full-day-mekong-delta-tour-ben-tre-my-tho',
    '2-day-mekong-delta-tour',
    'cooking-class-local-market'
  ];

  // Clean old TourCountry links for these destinations
  await d1Db.prepare("DELETE FROM TourCountry WHERE country_slug IN ('south-vietnam', 'mekong-delta')").run();

  let inserted = 0;

  // Insert south-vietnam tours
  for (let i = 0; i < southVietnamTourSlugs.length; i++) {
    const slug = southVietnamTourSlugs[i];
    const tour = await d1Db.prepare("SELECT id FROM Tour WHERE slug = ?").bind(slug).first<any>();
    if (tour?.id) {
      await d1Db.prepare(`
        INSERT INTO TourCountry (tour_id, country_slug, display_order)
        VALUES (?, 'south-vietnam', ?)
      `).bind(tour.id, i + 1).run();
      inserted++;
    }
  }

  // Insert mekong-delta tours
  for (let i = 0; i < mekongTourSlugs.length; i++) {
    const slug = mekongTourSlugs[i];
    const tour = await d1Db.prepare("SELECT id FROM Tour WHERE slug = ?").bind(slug).first<any>();
    if (tour?.id) {
      await d1Db.prepare(`
        INSERT INTO TourCountry (tour_id, country_slug, display_order)
        VALUES (?, 'mekong-delta', ?)
      `).bind(tour.id, i + 1).run();
      inserted++;
    }
  }

  return new Response(JSON.stringify({
    success: true,
    message: 'TourCountry relationships synchronized successfully',
    inserted
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
