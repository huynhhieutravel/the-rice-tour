import { execSync } from 'child_process';

const id = '2fb3074f-3f3b-4b3f-bca2-42ec03b6bac4';
const htmlContent = `<!-- layout: astro -->
<!-- SECTION MASTER TITLE - STATIC HTML CHO LCP CỰC NHANH -->
<section class="bg-white py-16 px-4 border-b border-stone-200 font-sans">
  <div class="max-w-4xl mx-auto text-center">
    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-800 text-sm font-semibold tracking-wide mb-6 shadow-sm">
      <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
      CẨM NANG THỰC CHIẾN • PORTAL DU LỊCH
    </div>
    <h1 class="font-serif text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-tight mb-6">
      Kinh nghiệm du lịch Kailash <br/>
      <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-800 to-amber-600">
        Từ HDV thực địa chuyến đi
      </span>
    </h1>
    <p class="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
      Hướng dẫn du lịch toàn diện về Kailash từ HDV kinh nghiệm về các vấn đề Visa, say độ cao, checklist vật dụng, các lưu ý quan trọng dành cho khách du lịch.
    </p>
  </div>
</section>

[kailash-pillar-guide]`;

const query = `UPDATE Page SET raw_content = ?, content = ? WHERE id = ?`;

// We have to escape the query properly for wrangler d1
const safeHtml = htmlContent.replace(/'/g, "''");
const sql = `UPDATE Page SET raw_content = '${safeHtml}', content = '${safeHtml}' WHERE id = '${id}';`;

try {
  console.log('Running query on remote D1...');
  const res = execSync(`npx wrangler d1 execute dulichcoguu-d1 --remote --command="${sql}"`, { encoding: 'utf-8' });
  console.log('Result:', res);
} catch (e) {
  console.error('Failed:', e.stdout || e.message);
}
