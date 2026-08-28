import type { APIRoute } from "astro";
import { env } from 'cloudflare:workers';

export const prerender = false;

export const GET: APIRoute = async () => {
  const d1Db = env.dulichcoguu_d1;
  const tour = await d1Db.prepare("SELECT format, content FROM Tour WHERE slug = 'tour-alaska-8n7d'").first();
  
  let isElementor = false;
  if (tour) {
    isElementor = tour.format === 'elementor' || (tour.content && tour.content.includes('elementor-'));
  }
  
  return new Response(JSON.stringify({ format: tour?.format, isElementor, hasElementorString: tour?.content?.includes('elementor-') }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
