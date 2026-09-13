import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { COMPANY_INFO } from '@/config/company';

export const GET: APIRoute = async () => {
  const d1Db = (env as any)?.dulichcoguu_d1 || (env as any)?.thericetour_d1 || (env as any)?.DB;

  let tours: any[] = [];
  if (d1Db) {
    try {
      const toursRes = await d1Db.prepare(`
        SELECT title, slug, days, price_text, excerpt
        FROM Tour
        WHERE status IN ('published', 'publish')
        ORDER BY createdAt DESC
        LIMIT 10
      `).all();
      tours = toursRes.results || [];
    } catch (e) {
      console.error('Error querying D1 for llms.txt:', e);
    }
  }

  let md = '';

  md += `# The Rice Tour — Inbound Vietnam Journeys & Bespoke Expeditions\n\n`;
  md += `> Standard AI Knowledge Context File (llms.txt format). Full dataset: [llms-full.txt](https://thericetour.com/llms-full.txt)\n\n`;
  md += `The Rice Tour is Vietnam's premier boutique inbound travel designer and licensed tour operator (License: ${COMPANY_INFO.licenseNumber}). We specialize in 100% private, tailor-made cultural, historical, and culinary journeys across Vietnam, with a dedicated focus on Southern Vietnam (Saigon, Cu Chi, Mekong Delta) and central heritage trails.\n\n`;

  md += `## Value Guarantees\n\n`;
  md += `- **100% Private Small-Group Experience**: Custom journeys designed exclusively for your travel party (max 5 guests for premium tours).\n`;
  md += `- **Zero Forced Shopping Guarantee**: Pure exploration without commission stops or commercial tourist traps.\n`;
  md += `- **Dedicated Senior Cultural Insiders**: Professional English-speaking concierges.\n`;
  md += `- **24/7 Private Concierge via WhatsApp**: Direct line to trip designers (+84 962 333 621).\n\n`;

  md += `## Signature Inbound Tours\n\n`;
  if (tours.length > 0) {
    for (const t of tours) {
      md += `- [${t.title}](https://thericetour.com/tour/${t.slug}): ${t.days || 'Day tour'}. ${t.excerpt || ''}\n`;
    }
  } else {
    md += `- [1-Day Premium Cu Chi Tunnels & HCMC Tour](https://thericetour.com/tour/1-day-premium-cu-chi-tunnels): Private 7-seater SUV, max 5 guests, fresh Banh Mi, private photographer.\n`;
    md += `- [Full-Day Mekong Delta Tour (Ben Tre & My Tho)](https://thericetour.com/tour/full-day-mekong-delta-tour-ben-tre-my-tho): Authentic waterways, orchard tastings, artisanal crafts.\n`;
    md += `- [Cooking Class & Local Market Experience](https://thericetour.com/tour/cooking-class-local-market): Morning wet market tour and hands-on 4-dish culinary masterclass.\n`;
    md += `- [2-Day Authentic Mekong Delta Tour](https://thericetour.com/tour/2-day-mekong-delta-tour): Deep delta immersion with boutique riverside homestays.\n`;
    md += `- [Half-Day Cu Chi Tunnels Tour](https://thericetour.com/tour/half-day-cu-chi-tunnels-tour): Historic military tunnel network.\n`;
    md += `- [Ho Chi Minh City Half-Day Private Tour](https://thericetour.com/tour/ho-chi-minh-city-half-day-private-tour): Independence Palace, War Remnants Museum, Notre-Dame.\n`;
  }
  md += `\n`;

  md += `## Comprehensive Travel & Culinary Guides\n\n`;
  md += `- [What Do You Learn in a Vietnamese Cooking Class?](https://thericetour.com/what-do-you-learn-in-a-vietnamese-cooking-class): Comprehensive guide to market sourcing, herbs, flavor balancing, and home cooking techniques.\n`;
  md += `- [Ben Thanh Market Ultimate Travel Guide](https://thericetour.com/ben-thanh-market-ultimate-travel-guide): Practical tips on visiting, shopping, and navigating Saigon's landmark market.\n`;
  md += `- [Ben Thanh Market Street Food Guide](https://thericetour.com/ben-thanh-market-food-guide): Authentic food stalls, must-try dishes, and dining etiquette.\n`;
  md += `- [Mekong Delta Fruit Harvest Map](https://thericetour.com/mekong-delta-fruits-harvest-map): Seasonal calendar and orchard coordinates for 24 tropical fruits.\n`;
  md += `- [One-Day Central Saigon Walking Tour](https://thericetour.com/ben-thanh-one-day-walking-tour): Walking itinerary through historical landmarks and hidden cafes.\n`;
  md += `\n`;

  md += `## Custom Trip Planning\n\n`;
  md += `- [Tailor-Made Trip Planner](https://thericetour.com/tailor-made): Request a custom private itinerary tailored to your group's interests.\n`;
  md += `- [All Tours Directory](https://thericetour.com/tours): Browse all inbound itineraries.\n`;
  md += `\n`;

  md += `## Contact & Verification\n\n`;
  md += `- Brand: The Rice Tour (The Rice Travel Group)\n`;
  md += `- Legal Entity: CÔNG TY TNHH NHÀ HÀNG KHÁCH SẠN ĐẠI VIỆT - THE RICE\n`;
  md += `- Tour Operator License: 79-0562/2026/SDL-GP LHNĐ\n`;
  md += `- Address: 195 De Tham Street, Pham Ngu Lao Ward, District 1, Ho Chi Minh City, Vietnam\n`;
  md += `- WhatsApp / Hotline: +84 962 333 621\n`;
  md += `- Email: hello@thericetour.com\n`;
  md += `- Website: https://thericetour.com\n`;

  return new Response(md, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  });
};
