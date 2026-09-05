import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';
import { COMPANY_INFO } from '@/config/company';

export const GET: APIRoute = async () => {
  const d1Db = (env as any)?.dulichcoguu_d1 || (env as any)?.thericetour_d1 || (env as any)?.DB;

  let countries: any[] = [];
  let tours: any[] = [];
  let latestPosts: any[] = [];
  let tourCount = 0;
  let postCount = 0;
  let countryCount = 0;

  if (d1Db) {
    try {
      const [countriesRes, toursRes, latestRes, tourCountRes, postCountRes, countryCountRes] = await Promise.all([
        // Q1: All destination regions
        d1Db.prepare("SELECT name, slug, description FROM Country ORDER BY name").all(),

        // Q2: All published tours
        d1Db.prepare(`
          SELECT t.title, t.slug, t.days, t.price_text, t.price_number, t.excerpt,
                 c.name as destination_name, c.slug as destination_slug
          FROM Tour t
          LEFT JOIN Country c ON t.country_slug = c.slug
          WHERE t.status IN ('published', 'publish')
          ORDER BY t.createdAt DESC
        `).all(),

        // Q3: 50 latest blog posts
        d1Db.prepare(`
          SELECT p.title, p.slug, p.excerpt, p.author
          FROM Post p
          WHERE p.status IN ('published', 'publish')
          ORDER BY COALESCE(p.updatedAt, p.createdAt) DESC
          LIMIT 50
        `).all(),

        // Counts
        d1Db.prepare("SELECT COUNT(*) as cnt FROM Tour WHERE status IN ('published', 'publish')").first(),
        d1Db.prepare("SELECT COUNT(*) as cnt FROM Post WHERE status IN ('published', 'publish')").first(),
        d1Db.prepare("SELECT COUNT(*) as cnt FROM Country").first(),
      ]);

      countries = countriesRes.results || [];
      tours = toursRes.results || [];
      latestPosts = latestRes.results || [];
      tourCount = (tourCountRes as any)?.cnt || 0;
      postCount = (postCountRes as any)?.cnt || 0;
      countryCount = (countryCountRes as any)?.cnt || 0;
    } catch (e) {
      console.error('Error querying D1 for llms-full.txt:', e);
    }
  }

  const now = new Date().toISOString();
  let md = '';

  // Header & Generated Metadata
  md += `# The Rice Tour — Authentic Vietnam Inbound Journeys & Bespoke Expeditions\n\n`;
  md += `> Comprehensive AI Knowledge Context File. Short version: [llms.txt](https://thericetour.com/llms.txt)\n\n`;
  md += `Generated: ${now}\n`;
  md += `Source: The Rice Tour Production Cloudflare D1\n`;
  md += `Published Inbound Tours: ${tourCount}\n`;
  md += `Published Field Guides: ${postCount}\n`;
  md += `Core Vietnam Regions: ${countryCount}\n\n`;
  md += `---\n\n`;

  // About The Rice Tour
  md += `## About The Rice Tour\n\n`;
  md += `The Rice Tour is Vietnam's premier boutique inbound travel designer and fully licensed tour operator (License: ${COMPANY_INFO.licenseNumber}). We specialize in crafting 100% private, tailor-made cultural and historical journeys across Vietnam, with a dedicated focus on Southern Vietnam (Mekong Delta, Saigon, Cu Chi) as well as Central and Northern heritage trails.\n\n`;
  md += `### Core Value Guarantees\n\n`;
  md += `- **100% Private Small-Group Experience**: Intimate journeys designed exclusively for your travel party.\n`;
  md += `- **Zero Forced Shopping Guarantee**: No tourist traps, no commissions, no commercial shop stops. 100% pure exploration.\n`;
  md += `- **Senior Local Concierges**: Experienced English-speaking cultural insiders dedicated to your comfort and storytelling.\n`;
  md += `- **24/7 Dedicated WhatsApp Support**: Direct line to private trip designers throughout your journey.\n\n`;

  // Legal & Entity Info
  md += `### Official Corporate Information\n\n`;
  md += `- **Brand Name**: ${COMPANY_INFO.brandName}\n`;
  md += `- **Legal Entity (Vietnam)**: ${COMPANY_INFO.legalNameVi}\n`;
  md += `- **Legal Entity (English)**: ${COMPANY_INFO.legalNameEn}\n`;
  md += `- **Tour Operator License**: ${COMPANY_INFO.licenseNumber}\n`;
  md += `- **Headquarters Address**: ${COMPANY_INFO.headquartersEn}\n`;
  md += `- **Hotline & WhatsApp 24/7**: ${COMPANY_INFO.whatsapp}\n`;
  md += `- **Email**: ${COMPANY_INFO.email}\n`;
  md += `- **Official Website**: ${COMPANY_INFO.website}\n`;
  md += `- **Tailor-Made Custom Trip Planner**: https://thericetour.com/tailor-made\n\n`;
  md += `---\n\n`;

  // Signature Inbound Tours
  md += `## Signature Inbound Expeditions\n\n`;
  if (tours.length > 0) {
    for (const t of tours) {
      md += `### ${t.title}\n\n`;
      md += `- URL: https://thericetour.com/tour/${t.slug}\n`;
      if (t.days) md += `- Duration: ${t.days}\n`;
      if (t.destination_name) md += `- Region: ${t.destination_name}\n`;
      
      const rawPrice = t.price_text ? String(t.price_text).trim() : '';
      if (rawPrice.includes('$') || /USD/i.test(rawPrice)) {
        md += `- Price: ${rawPrice}\n`;
      } else if (t.price_number && t.price_number > 0) {
        const num = Number(t.price_number);
        const usd = num > 1000 ? Math.ceil(num / 25400) : num;
        md += `- Price: $${usd.toLocaleString('en-US')} USD\n`;
      }
      if (t.excerpt) {
        const plainExcerpt = String(t.excerpt).replace(/<[^>]*>/g, '').replace(/[\t\r\n]+/g, ' ').trim();
        md += `- Summary: ${plainExcerpt}\n`;
      }
      md += `\n`;
    }
  }
  md += `---\n\n`;

  // Destinations Matrix
  md += `## Vietnam Destination Matrix\n\n`;
  if (countries.length > 0) {
    for (const c of countries) {
      const rawDesc = c.description ? String(c.description).replace(/<[^>]*>/g, '').replace(/[\t\r\n]+/g, ' ').trim().substring(0, 160) : '';
      md += `- [${c.name}](https://thericetour.com/destination/${c.slug})${rawDesc ? ` — ${rawDesc}` : ''}\n`;
    }
  }
  md += `\n- Explore all regions: https://thericetour.com/destinations\n\n`;
  md += `---\n\n`;

  // Travel Guides & Field Dispatches
  md += `## Travel Guides & Field Notes\n\n`;
  if (latestPosts.length > 0) {
    for (const p of latestPosts) {
      const plainDesc = p.excerpt ? String(p.excerpt).replace(/<[^>]*>/g, '').replace(/[\t\r\n]+/g, ' ').trim().substring(0, 160) : '';
      md += `- [${p.title}](https://thericetour.com/${p.slug})${plainDesc ? ` — ${plainDesc}` : ''}\n`;
    }
  }
  md += `\n- Full Travel Journal: https://thericetour.com/blog\n\n`;
  md += `---\n\n`;

  return new Response(md, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
};
