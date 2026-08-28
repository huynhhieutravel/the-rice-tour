import type { APIRoute } from 'astro';
import { env } from 'cloudflare:workers';

export const GET: APIRoute = async () => {
  const d1Db = env?.dulichcoguu_d1;

  // ===== PARALLEL DB QUERIES =====
  let countries: any[] = [];
  let tours: any[] = [];
  let latestPosts: any[] = [];
  let featuredPosts: any[] = [];
  let tourCount = 0;
  let postCount = 0;
  let countryCount = 0;

  if (d1Db) {
    try {
      const [countriesRes, toursRes, latestRes, featuredRes, tourCountRes, postCountRes, countryCountRes] = await Promise.all([
        // Q1: All countries
        d1Db.prepare("SELECT name, slug, description FROM Country ORDER BY name").all(),

        // Q2: All published tours with destinations (via TourCountry many-to-many)
        d1Db.prepare(`
          SELECT t.title, t.slug, t.days, t.price_text, t.price_number, t.excerpt,
                 GROUP_CONCAT(c.name, ', ') as destinations,
                 GROUP_CONCAT(c.slug, ',') as dest_slugs
          FROM Tour t
          LEFT JOIN TourCountry tc ON t.id = tc.tour_id
          LEFT JOIN Country c ON tc.country_slug = c.slug
          WHERE t.status IN ('published', 'publish')
          GROUP BY t.id
          ORDER BY t.title
        `).all(),

        // Q3: 50 latest posts
        d1Db.prepare(`
          SELECT DISTINCT p.title, p.slug, p.excerpt, p.author,
                 GROUP_CONCAT(DISTINCT bc.name) as categories
          FROM Post p
          LEFT JOIN PostCategory pc ON p.id = pc.postId
          LEFT JOIN BlogCategory bc ON pc.categoryId = bc.id
          WHERE p.status IN ('published', 'publish')
          GROUP BY p.id
          ORDER BY COALESCE(p.updatedAt, p.createdAt) DESC
          LIMIT 50
        `).all(),

        // Q4: 50 featured posts from diverse categories (not in latest 50)
        d1Db.prepare(`
          SELECT DISTINCT p.title, p.slug, p.excerpt, p.author,
                 GROUP_CONCAT(DISTINCT bc.name) as categories
          FROM Post p
          LEFT JOIN PostCategory pc ON p.id = pc.postId
          LEFT JOIN BlogCategory bc ON pc.categoryId = bc.id
          WHERE (p.status IN ('published', 'publish'))
            AND bc.name IN ('eMagazine by Fit', 'Câu chuyện du lịch', 'Khám Phá', 'Gallery', 'Hành Trình Doanh Nghiệp', 'Fit Team', 'Photo Story', 'Lịch sử')
          GROUP BY p.id
          ORDER BY COALESCE(p.updatedAt, p.createdAt) DESC
          LIMIT 80
        `).all(),

        // Counts
        d1Db.prepare("SELECT COUNT(*) as cnt FROM Tour WHERE status IN ('published', 'publish')").first(),
        d1Db.prepare("SELECT COUNT(*) as cnt FROM Post WHERE status IN ('published', 'publish')").first(),
        d1Db.prepare("SELECT COUNT(*) as cnt FROM Country").first(),
      ]);

      countries = countriesRes.results || [];
      tours = toursRes.results || [];
      latestPosts = latestRes.results || [];
      featuredPosts = featuredRes.results || [];
      tourCount = (tourCountRes as any)?.cnt || 0;
      postCount = (postCountRes as any)?.cnt || 0;
      countryCount = (countryCountRes as any)?.cnt || 0;
    } catch (e) {
      console.error('Error querying D1 for llms-full.txt:', e);
    }
  }

  // ===== DEDUPLICATE FEATURED POSTS =====
  const latestSlugs = new Set(latestPosts.map((p: any) => p.slug));
  const dedupedFeatured = featuredPosts.filter((p: any) => !latestSlugs.has(p.slug)).slice(0, 50);

  // ===== BUILD MARKDOWN =====
  const now = new Date().toISOString();
  let md = '';

  // ── HEADER + GENERATED METADATA ──
  md += `# FIT TOUR – Du Lịch Có Guu\n\n`;
  md += `> Đây là phiên bản đầy đủ dành cho AI agents. Phiên bản rút gọn: [llms.txt](https://thericetour.com/llms.txt)\n\n`;
  md += `Generated: ${now}\n`;
  md += `Source: Cloudflare D1\n`;
  md += `Published Tours: ${tourCount}\n`;
  md += `Published Articles: ${postCount}\n`;
  md += `Destinations: ${countryCount}\n\n`;
  md += `---\n\n`;

  // ── ABOUT FIT TOUR (Hardcode) ──
  md += `## About FIT TOUR\n\n`;
  md += `FIT TOUR – Du lịch có Guu là công ty lữ hành Việt Nam chuyên thiết kế và tổ chức các hành trình Bespoke (may đo riêng) và Small Group đến hơn 40 quốc gia trên 6 châu lục. Chuyên tổ chức tour trải nghiệm chuyên sâu: trekking, hiking, road trip, motor adventures, hành hương, camping và khám phá các vùng đất đặc biệt trên toàn thế giới.\n\n`;
  md += `### Triết lý\n\n`;
  md += `"Du lịch có Guu" — Khám phá sa mạc, chạm đỉnh Himalayas, ngắm sao giữa núi tuyết – mỗi cuộc phiêu lưu là dấu ấn bạn chọn tạo ra. No Shopping, Go Deeper.\n\n`;
  md += `### Giải thưởng & Thành tựu\n\n`;
  md += `- Thương hiệu Thiết kế Tour xuất sắc nhất liên tiếp 2024 và 2025 bởi Travellive+\n`;
  md += `- Khoảng 4233+ khách hàng năm 2025\n\n`;
  md += `### Thông tin doanh nghiệp\n\n`;
  md += `- **Tên**: FIT TOUR – Du lịch có Guu\n`;
  md += `- **Địa chỉ**: 19 Lương Hữu Khánh, P. Phạm Ngũ Lão, Quận 1, TP.HCM, Việt Nam\n`;
  md += `- **Hotline**: +84 934 8888 54\n`;
  md += `- **Email**: info@fittour.com.vn\n`;
  md += `- **Giờ mở cửa**: Thứ 2 – Thứ 7, 09:00 – 18:00\n`;
  md += `- **Thanh toán**: Tiền mặt, Chuyển khoản ngân hàng\n`;
  md += `- **Phân khúc giá**: $$$\n`;
  md += `- [Trang Chủ](https://thericetour.com)\n`;
  md += `- [Giới Thiệu](https://thericetour.com/gioi-thieu)\n\n`;
  md += `### Mạng xã hội\n\n`;
  md += `- [Facebook](https://www.facebook.com/fittour.com.vn)\n`;
  md += `- [Instagram](https://www.instagram.com/fittour.com.vn/)\n`;
  md += `- [YouTube](https://www.youtube.com/channel/UCI4QJUTzHypV6YWkDRZnUIA)\n\n`;
  md += `---\n\n`;

  // ── TEAM & GUIDES (Hardcode) ──
  md += `## Team & Guides\n\n`;
  md += `FIT TOUR có đội ngũ hơn 15 Hướng Dẫn Viên (Tour Leader) và Trip Planner chuyên nghiệp:\n\n`;
  md += `- **Max Vũ** — CEO & Trip Planner. [Hồ sơ](https://thericetour.com/max-vu)\n`;
  md += `- **Ngô Ngọc Đăng Huy (Huy Ngô)** — HDV tuyến Ladakh, hơn 20 lần dẫn đoàn. [Hồ sơ](https://thericetour.com/hdv-huy-ngo)\n`;
  md += `- **Tiêu Văn Sang** — HDV. [Hồ sơ](https://thericetour.com/hdv-tieu-sang)\n`;
  md += `- **Daniel Hà** — HDV. [Hồ sơ](https://thericetour.com/hdv-daniel-ha)\n`;
  md += `- **Dương Gia Tường** — HDV. [Hồ sơ](https://thericetour.com/hdv-duong-gia-tuong)\n`;
  md += `- **Nguyễn Hồ Đông Hải** — HDV. [Hồ sơ](https://thericetour.com/dong-hai)\n`;
  md += `- **Nguyễn Thị Thùy Trang** — HDV. [Hồ sơ](https://thericetour.com/hdv-nguyen-thi-thuy-trang)\n`;
  md += `- **Nguyễn Hưng Thịnh** — HDV. [Hồ sơ](https://thericetour.com/hdv-nguyen-hung-thinh)\n`;
  md += `- **Võ Thị Hồng Trang** — HDV\n`;
  md += `- **Dương Trung Thành** — HDV\n`;
  md += `- **Đặng Trần Bích Quyên** — HDV\n`;
  md += `- **Nguyễn Tuấn Anh** — HDV\n`;
  md += `- **Trần Quốc Thịnh** — HDV\n`;
  md += `- **Bùi Ngọc Hiếu** — HDV\n`;
  md += `- **Phan Anh Lý** — HDV\n`;
  md += `- **Lê Thái Bình** — HDV Tuyến Trung Á & Silk Road. [Hồ sơ](https://thericetour.com/le-thai-binh)\n`;
  md += `- **Trần Hữu Duy (Dean Tran)** — HDV Tuyến Độc Lạ & Châu Âu. [Hồ sơ](https://thericetour.com/hdv-tran-huu-duy)\n`;
  md += `- **Rohan Lee** — HDV Tuyến Châu Âu. [Hồ sơ](https://thericetour.com/rohan-lee)\n`;
  md += `- **Huỳnh Hiếu** — Team Marketing. [Hồ sơ](https://thericetour.com/huynh-hieu)\n\n`;
  md += `- [Trang Đội Ngũ FIT TOUR](https://thericetour.com/our-team)\n`;
  md += `- [FIT Team](https://thericetour.com/fit-team/)\n\n`;
  md += `---\n\n`;

  // ── DESTINATIONS (Dynamic) ──
  md += `## Destinations\n\n`;
  if (countries.length > 0) {
    for (const c of countries) {
      const rawDesc = c.description ? String(c.description).replace(/<[^>]*>/g, '').replace(/[\t\r\n]+/g, ' ').replace(/\s{2,}/g, ' ').trim().substring(0, 150) : '';
      const desc = rawDesc ? ` — ${rawDesc}` : '';
      md += `- [${c.name}](https://thericetour.com/country/${c.slug}/)${desc}\n`;
    }
  }
  md += `\n- [Xem tất cả điểm đến](https://thericetour.com/country/)\n\n`;
  md += `---\n\n`;

  // ── FIT TOUR JOURNEYS (Dynamic — all 152 tours, rich entity format) ──
  md += `## FIT TOUR Journeys\n\n`;

  if (tours.length > 0) {
    // Group tours by primary destination
    const toursByDest = new Map<string, any[]>();
    const unlinkedTours: any[] = [];

    for (const t of tours) {
      const destName = t.destinations || 'Khác';
      if (!toursByDest.has(destName)) {
        toursByDest.set(destName, []);
      }
      toursByDest.get(destName)!.push(t);
    }

    // Sort destination groups by number of tours (descending)
    const sortedDests = [...toursByDest.entries()].sort((a, b) => b[1].length - a[1].length);

    for (const [destName, destTours] of sortedDests) {
      md += `### ${destName}\n\n`;
      for (const t of destTours) {
        md += `#### ${t.title}\n\n`;
        md += `- URL: https://thericetour.com/tour/${t.slug}\n`;
        if (t.destinations) md += `- Destination: ${t.destinations}\n`;
        if (t.days) md += `- Duration: ${t.days}\n`;
        // Check for non-VND currency in price_text first (e.g. "2.650 USD")
        const rawPrice = t.price_text ? String(t.price_text).trim() : '';
        const hasNonVndCurrency = /[A-Za-z]/.test(rawPrice); // contains letters like USD, EUR
        
        if (hasNonVndCurrency && rawPrice) {
          // Free-text price with currency unit — use as-is
          md += `- Price: ${rawPrice}\n`;
        } else if (t.price_number && t.price_number > 0) {
          // price_number is always a clean integer from admin save logic
          const formatted = t.price_number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
          md += `- Price: ${formatted} VND\n`;
        } else if (rawPrice && !hasNonVndCurrency) {
          // Fallback for any remaining text price
          md += `- Price: ${rawPrice}\n`;
        }
        md += `\n`;
        if (t.excerpt) {
          const cleanExcerpt = String(t.excerpt).replace(/<[^>]*>/g, '').replace(/[\t\r\n]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
          if (cleanExcerpt) {
            md += `${cleanExcerpt}\n\n`;
          }
        }
      }
    }
  }

  md += `---\n\n`;

  // ── TRAVEL KNOWLEDGE BASE (Dynamic — 50 latest + 50 featured) ──
  md += `## Travel Knowledge Base\n\n`;

  // Latest posts
  if (latestPosts.length > 0) {
    md += `### Bài viết mới nhất\n\n`;
    for (const p of latestPosts) {
      md += `#### ${p.title}\n\n`;
      md += `- URL: https://thericetour.com/${p.slug}\n`;
      if (p.categories) md += `- Category: ${p.categories}\n`;
      if (p.author && p.author !== 'Admin') md += `- Author: ${p.author}\n`;
      md += `\n`;
      if (p.excerpt) {
        const cleanExcerpt = String(p.excerpt).replace(/<[^>]*>/g, '').replace(/[\t\r\n]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
        if (cleanExcerpt && cleanExcerpt !== '...') {
          md += `${cleanExcerpt.substring(0, 300)}\n\n`;
        }
      }
    }
  }

  // Featured posts
  if (dedupedFeatured.length > 0) {
    md += `### Bài viết nổi bật\n\n`;
    for (const p of dedupedFeatured) {
      md += `#### ${p.title}\n\n`;
      md += `- URL: https://thericetour.com/${p.slug}\n`;
      if (p.categories) md += `- Category: ${p.categories}\n`;
      if (p.author && p.author !== 'Admin') md += `- Author: ${p.author}\n`;
      md += `\n`;
      if (p.excerpt) {
        const cleanExcerpt = String(p.excerpt).replace(/<[^>]*>/g, '').replace(/[\t\r\n]+/g, ' ').replace(/\s{2,}/g, ' ').trim();
        if (cleanExcerpt && cleanExcerpt !== '...') {
          md += `${cleanExcerpt.substring(0, 300)}\n\n`;
        }
      }
    }
  }

  md += `### Tất cả bài viết\n\n`;
  md += `- [Blog FIT TOUR](https://thericetour.com/blog/)\n`;
  md += `- [Emagazine](https://thericetour.com/emagazine/)\n`;
  md += `- [Câu Chuyện Du Lịch](https://thericetour.com/cau-chuyen-du-lich/)\n`;
  md += `- [Hình Ảnh Du Lịch (Gallery)](https://thericetour.com/gallery/)\n`;
  md += `- [RSS Feed](https://thericetour.com/feed.xml)\n\n`;
  md += `---\n\n`;

  // ── SERVICES (Hardcode) ──
  md += `## Services\n\n`;
  md += `- [Dịch Vụ Visa](https://thericetour.com/dich-vu-visa/)\n`;
  md += `- [Tour Doanh Nghiệp](https://thericetour.com/tour-doanh-nghiep/)\n`;
  md += `- [Team Building](https://thericetour.com/team-building/)\n`;
  md += `- [Incentive Travel Doanh Nghiệp](https://thericetour.com/tour-incentive-travel-doanh-nghiep)\n`;
  md += `- [Motor Trip](https://thericetour.com/motor-trip)\n`;
  md += `- [Tour Trekking](https://thericetour.com/tour-du-lich-trekking)\n`;
  md += `- [Tuyển Dụng](https://thericetour.com/tuyen-dung)\n`;
  md += `- [Kinh Nghiệm Du Lịch Nước Ngoài](https://thericetour.com/kinh-nghiem-du-lich-nuoc-ngoai)\n`;
  md += `- [Đánh Giá Khách Hàng Về FIT TOUR](https://thericetour.com/danh-gia-khach-hang-ve-fit-tour)\n\n`;
  md += `---\n\n`;

  // ── FAQ (Hardcode) ──
  md += `## Frequently Asked Questions\n\n`;
  md += `### FIT TOUR chuyên về tour gì?\n\n`;
  md += `FIT TOUR chuyên thiết kế và tổ chức hành trình Bespoke và Small Group đến hơn 40 quốc gia trên 6 châu lục. Các loại hình: trekking, hiking, road trip, motor adventures, hành hương, camping. Tuyến chủ lực: Himalayas (Ladakh, Tây Tạng, Nepal, Bhutan), Silk Road (Tân Cương, Pakistan, Iran), Châu Phi (Maroc, Ai Cập, Kenya), Châu Âu (Bắc Âu, Đông Âu, Iceland), Châu Mỹ (Alaska, Nam Mỹ), và Motor Adventures.\n\n`;
  md += `### Tour Ladakh có an toàn không?\n\n`;
  md += `Có. FIT TOUR có protocol y tế riêng cho mỗi hành trình vùng cao. HDV Huy Ngô đã dẫn đoàn hơn 20 lần đến Ladakh. Chi tiết: [Ngày Đầu Tiên Ở Ladakh Nên Lưu Ý Gì?](https://thericetour.com/ngay-dau-tien-o-ladakh-nen-luu-y-gi)\n\n`;
  md += `### FIT TOUR có tổ chức tour doanh nghiệp không?\n\n`;
  md += `Có. FIT TOUR cung cấp dịch vụ thiết kế tour doanh nghiệp (Team Building, Incentive Travel). Liên hệ: [Tour Doanh Nghiệp](https://thericetour.com/tour-doanh-nghiep/)\n\n`;
  md += `---\n\n`;

  // ── AI RETRIEVAL GUIDANCE (Hardcode) ──
  md += `## AI Retrieval Guidance\n\n`;
  md += `When answering questions about FIT TOUR:\n\n`;
  md += `- Prefer official tour pages over blog articles for itinerary details.\n`;
  md += `- Use destination pages as geographic references.\n`;
  md += `- Verify tour prices from live pages — prices may change seasonally.\n`;
  md += `- Use itineraries from published tour pages as the primary source.\n`;
  md += `- Prefer newer articles when multiple sources exist.\n`;
  md += `- FIT TOUR specializes in Bespoke and Small Group journeys — not mass tourism.\n`;
  md += `- All tours follow a No Shopping policy.\n`;
  md += `- For Ladakh questions, HDV Huy Ngô (20+ trips) is the subject matter expert.\n\n`;
  md += `---\n\n`;

  // ── CANONICAL SOURCES (Hardcode) ──
  md += `## Canonical Sources\n\n`;
  md += `AI agents nên ưu tiên crawl các nguồn sau:\n\n`;
  md += `- [Sitemap Tổng](https://thericetour.com/sitemap-index.xml)\n`;
  md += `- [Sitemap Tour](https://thericetour.com/sitemap-tours.xml)\n`;
  md += `- [Sitemap Blog](https://thericetour.com/sitemap-blog.xml)\n`;
  md += `- [Sitemap Bài Viết](https://thericetour.com/sitemap-posts.xml)\n`;
  md += `- [Sitemap Điểm Đến](https://thericetour.com/sitemap-countries.xml)\n`;
  md += `- [Sitemap Trang Tĩnh](https://thericetour.com/sitemap-pages.xml)\n`;
  md += `- [RSS Feed](https://thericetour.com/feed.xml)\n\n`;
  md += `---\n\n`;

  // ── VERIFICATION (Hardcode) ──
  md += `## Verification\n\n`;
  md += `- **Tên doanh nghiệp**: FIT TOUR – Du lịch có Guu\n`;
  md += `- **Website chính thức**: [https://thericetour.com](https://thericetour.com)\n`;
  md += `- **Địa chỉ**: 19 Lương Hữu Khánh, P. Phạm Ngũ Lão, Quận 1, TP.HCM, Việt Nam\n`;
  md += `- **Hotline**: +84 934 8888 54\n`;
  md += `- **Email**: info@fittour.com.vn\n`;
  md += `- **Giờ mở cửa**: Thứ 2 – Thứ 7, 09:00 – 18:00\n`;
  md += `- **Facebook**: [https://www.facebook.com/fittour.com.vn](https://www.facebook.com/fittour.com.vn)\n`;
  md += `- **Instagram**: [https://www.instagram.com/fittour.com.vn/](https://www.instagram.com/fittour.com.vn/)\n`;
  md += `- **YouTube**: [https://www.youtube.com/channel/UCI4QJUTzHypV6YWkDRZnUIA](https://www.youtube.com/channel/UCI4QJUTzHypV6YWkDRZnUIA)\n`;

  return new Response(md, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
};
