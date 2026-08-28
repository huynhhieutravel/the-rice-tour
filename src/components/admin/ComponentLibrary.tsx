import React, { useState } from 'react';

interface Snippet {
  id: string;
  title: string;
  category: string | string[];
  description: string;
  previewSvg: string;
  exampleUrl?: string;
  templateHtml?: string;
}

const snippets: Snippet[] = [
  {
    id: "tour-standard-master-full",
    exampleUrl: "/admin/template-tour",
    title: "Template Tour Du Lịch Toàn Diện (chuẩn FIT Tour)",
    category: ["tour", "landing-page"],
    description: "Bộ khung chuẩn toàn diện cho trang Tour du lịch FIT Tour (Lấy từ Tour Lệ Giang 6N5Đ). Bao gồm: 2 cột Grid, Hero Badges, Highlight Box, Unfold Box, Nơi ở (Hotel Slider), Lịch trình chi tiết ngày 1-6 (Timeline & Gallery), Bảng Lịch khởi hành & Lọc tháng, Thông tin thêm (FAQ & Điều khoản), Gallery khách hàng, Sticky Booking Card & Mobile CTA Bar.",
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #0f172a; border: 1px solid #e2e8f0;">
      <rect x="20" y="30" width="260" height="40" rx="4" fill="#1e293b"/>
      <rect x="30" y="40" width="180" height="8" rx="2" fill="#f59e0b"/>
    </svg>`,
    templateHtml: `</p> <p class="text-emerald-900 text-sm m-0">Trong trường hợp show "Ấn Tượng Lệ Giang" ngưng biểu diễn để bảo trì, chương trình sẽ được thay thế bằng show "Lệ Thủy Kim Sa" tại khu vực thành cổ Lệ Giang.</p> </div> <ul style="list-style-type:disc; padding-left:20px; margin-bottom:14px;"> <li><strong>Ngọc Thủy Trại:</strong> Chiêm ngưỡng nét đẹp văn hóa Đông Ba có bề dày hơn 1.000 năm lịch sử của người Nạp Tây (Naxi).</li> <li><strong>Đại Nghiên Cổ Trấn:</strong> Trái tim cổ kính và là khu cổ trấn lớn nhất của Lệ Giang. Đây là trung tâm văn hóa quan trọng của người Nạp Tây, được UNESCO công nhận là Di sản Văn hóa Thế giới.</li> </ul> <p style="margin-bottom:14px"><strong>Buổi tối:</strong> Đoàn dùng bữa tối. Sau đó về lại khách sạn nghỉ ngơi, hoặc tự do khám phá Lệ Giang về đêm.<br>Nghỉ đêm tại Lệ Giang.</p>  </div> </details> <details class="premium-itinerary-item"> <summary class="premium-itinerary-summary"> <div class="itinerary-toggle-icon">+</div> <span>Ngày 6: Lệ Giang ✈ TP. HCM – Về nước</span> </summary> <div class="premium-itinerary-content custom-blog-prose max-w-none">  <p style="margin-bottom:14px"><strong>Buổi sáng:</strong> Quý khách dùng bữa sáng tại khách sạn, sau đó làm thủ tục trả phòng.<br>Xe và hướng dẫn viên đưa đoàn di chuyển ra sân bay Lệ Giang để đáp chuyến bay về lại TP. HCM, Việt Nam.</p> <ul style="list-style-type:disc; padding-left:20px; margin-bottom:14px;"> <li><strong>Chuyến bay dự kiến:</strong> DR5051 (LJG - SGN) khởi hành lúc 10:40 - 13:25.</li> </ul> <p style="margin-bottom:14px">Đến sân bay Tân Sơn Nhất, hướng dẫn viên FIT TOUR chia tay đoàn và hẹn gặp lại quý khách trong những hành trình trải nghiệm tiếp theo!</p>  </div> </details>  </div> </div> <p style="font-style:italic;color:#64748b;font-size:0.9rem;margin-top:16px;padding:0 12px;">
Lưu ý: Chương trình sẽ có thay đổi nếu đường bay, thời tiết gây ảnh hưởng. Tuy vậy, chúng tôi vẫn sẽ đảm bảo tuyến điểm (hoặc thay thế tương ứng).
</p> </section> <!-- LỊCH KHỞI HÀNH --> <section class="tour-departure-section mb-12"> <h2 class="text-2xl font-bold text-slate-800 mb-6">Lịch khởi hành</h2> <div class="lich-khoi-hanh-wrapper font-sans ">    <div class="departures-container">  <div class="hidden md:block overflow-x-auto "> <table class="w-full text-left border-collapse m-0"> <thead> <tr class="bg-slate-50"> <th class="p-4 font-bold text-slate-700 border-b border-border text-sm">Điểm đến</th> <th class="p-4 font-bold text-slate-700 border-b border-border text-sm">Hành trình bay</th> <th class="p-4 font-bold text-slate-700 border-b border-border text-sm">Khởi hành</th> <th class="p-4 font-bold text-slate-700 border-b border-border text-sm">Giá / Khách</th> <th class="p-4 font-bold text-slate-700 border-b border-border text-sm text-center">Tình trạng</th>  </tr> </thead> <tbody class="bg-white"> <tr class="lkh-row border-b border-border hover:bg-slate-50/80 transition-colors last:border-b-0" data-title="TOUR LỆ GIANG 6N5Đ - NO SHOPPING " data-code="LỆ GIANG 22 -27OCT2026" data-dest="Lệ Giang,Trung Quốc Chung" data-date="2026-10-21T17:00:00.000Z"> <td class="p-4"> <div class="font-bold text-slate-800 text-sm leading-snug">TOUR LỆ GIANG 6N5Đ - NO SHOPPING </div> <span class="font-mono text-[10px] text-slate-500 mt-1 inline-block">LỆ GIANG 22 -27OCT2026</span> </td> <td class="p-4 text-xs text-slate-600 space-y-1.5"> <div class="space-y-1.5"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">Ruili Airlines</span> </div>  <div class="text-[11px] text-slate-500 mt-0.5">TPHCM </div> </div> </td> <td class="p-4"> <div class="font-bold text-slate-800">22/10/2026</div> <div class="text-xs text-slate-500 mt-0.5">Về: 27/10/2026</div> </td> <td class="p-4 font-bold text-brand-700 whitespace-nowrap">27.990.000 VNĐ</td> <td class="p-4 text-center"> <span class="inline-block px-3 py-1 rounded-full text-xs font-bold border text-green-700 bg-green-50 border-green-200"> Mở bán </span> </td>  </tr><tr class="lkh-row border-b border-border hover:bg-slate-50/80 transition-colors last:border-b-0" data-title="TOUR LỆ GIANG 6N5Đ - NO SHOPPING " data-code="LỆ GIANG 19 - 24NOV2026" data-dest="Lệ Giang,Trung Quốc Chung" data-date="2026-11-18T17:00:00.000Z"> <td class="p-4"> <div class="font-bold text-slate-800 text-sm leading-snug">TOUR LỆ GIANG 6N5Đ - NO SHOPPING </div> <span class="font-mono text-[10px] text-slate-500 mt-1 inline-block">LỆ GIANG 19 - 24NOV2026</span> </td> <td class="p-4 text-xs text-slate-600 space-y-1.5"> <div class="space-y-1.5"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">Ruili Airlines</span> </div>  <div class="text-[11px] text-slate-500 mt-0.5">TPHCM </div> </div> </td> <td class="p-4"> <div class="font-bold text-slate-800">19/11/2026</div> <div class="text-xs text-slate-500 mt-0.5">Về: 24/11/2026</div> </td> <td class="p-4 font-bold text-brand-700 whitespace-nowrap">27.990.000 VNĐ</td> <td class="p-4 text-center"> <span class="inline-block px-3 py-1 rounded-full text-xs font-bold border text-green-700 bg-green-50 border-green-200"> Mở bán </span> </td>  </tr> </tbody> </table> </div>  <div class="md:hidden space-y-4"> <div class="lkh-card bg-white py-4 border-b border-border last:border-0" data-title="TOUR LỆ GIANG 6N5Đ - NO SHOPPING " data-code="LỆ GIANG 22 -27OCT2026" data-dest="Lệ Giang,Trung Quốc Chung" data-date="2026-10-21T17:00:00.000Z"> <div class="flex justify-between items-start mb-3"> <div class="flex-1 pr-3"> <div class="font-bold text-slate-800 text-sm leading-snug mb-1">TOUR LỆ GIANG 6N5Đ - NO SHOPPING </div> <span class="font-mono text-[10px] text-slate-500">LỆ GIANG 22 -27OCT2026</span> </div> <span class="px-2.5 py-1 rounded-md text-[11px] font-bold border whitespace-nowrap text-green-700 bg-green-50 border-green-200"> Mở bán </span> </div>  <div class="bg-slate-50 rounded-lg p-3 mb-3 space-y-1.5 text-xs"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">Ruili Airlines</span> </div>  <div class="text-[11px] text-slate-500">TPHCM </div> </div> <div class="flex items-center gap-2 text-sm text-slate-600 mb-1"> <span>🛫 22/10/2026</span> <span class="text-slate-500">→ 27/10/2026</span> </div> <div class="h-px bg-slate-100 w-full my-3"></div> <div class="flex flex-col gap-3"> <div class="flex justify-between items-center"> <span class="text-sm text-slate-500">Giá trọn gói</span> <span class="font-bold text-brand-700 text-lg">27.990.000 VNĐ</span> </div>  </div> </div><div class="lkh-card bg-white py-4 border-b border-border last:border-0" data-title="TOUR LỆ GIANG 6N5Đ - NO SHOPPING " data-code="LỆ GIANG 19 - 24NOV2026" data-dest="Lệ Giang,Trung Quốc Chung" data-date="2026-11-18T17:00:00.000Z"> <div class="flex justify-between items-start mb-3"> <div class="flex-1 pr-3"> <div class="font-bold text-slate-800 text-sm leading-snug mb-1">TOUR LỆ GIANG 6N5Đ - NO SHOPPING </div> <span class="font-mono text-[10px] text-slate-500">LỆ GIANG 19 - 24NOV2026</span> </div> <span class="px-2.5 py-1 rounded-md text-[11px] font-bold border whitespace-nowrap text-green-700 bg-green-50 border-green-200"> Mở bán </span> </div>  <div class="bg-slate-50 rounded-lg p-3 mb-3 space-y-1.5 text-xs"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">Ruili Airlines</span> </div>  <div class="text-[11px] text-slate-500">TPHCM </div> </div> <div class="flex items-center gap-2 text-sm text-slate-600 mb-1"> <span>🛫 19/11/2026</span> <span class="text-slate-500">→ 24/11/2026</span> </div> <div class="h-px bg-slate-100 w-full my-3"></div> <div class="flex flex-col gap-3"> <div class="flex justify-between items-center"> <span class="text-sm text-slate-500">Giá trọn gói</span> <span class="font-bold text-brand-700 text-lg">27.990.000 VNĐ</span> </div>  </div> </div> </div> </div> </div>  <script>
(function() {
  function initLKH() {
    const search = document.getElementById('lkh-search');
    const resetBtn = document.getElementById('lkh-reset');
    const resultCount = document.getElementById('lkh-result-count');
    
    // Prevent double-binding in Astro View Transitions
    if (!search || search.dataset.initialized) return;
    search.dataset.initialized = 'true';

    let allowedDests = []; // empty = show all
    let selectedMonths = []; // empty = show all

    function runFilter() {
      const q = (search.value || '').toLowerCase().trim();
      const items = document.querySelectorAll('.lkh-row, .lkh-card');
      let shown = 0;
      items.forEach(el => {
        const title = (el.dataset.title || '').toLowerCase();
        const code = (el.dataset.code || '').toLowerCase();
        const dest = (el.dataset.dest || '').toLowerCase().trim();
        const date = el.dataset.date || '';
        let ok = true;
        
        if (q && !title.includes(q) && !code.includes(q)) ok = false;
        
        if (selectedMonths.length > 0) {
          const matchMonth = selectedMonths.some(sm => date.startsWith(sm));
          if (!matchMonth) ok = false;
        }
        
        if (allowedDests.length) {
          const hasDestMatch = allowedDests.some(ad => dest.includes(ad.toLowerCase().trim()));
          if (!hasDestMatch) ok = false;
        }
        
        el.style.display = ok ? '' : 'none';
        if (ok) shown++;
      });
      if (resultCount) {
        const total = items.length;
        resultCount.textContent = (q || selectedMonths.length || allowedDests.length) ? 'Hiển thị ' + shown + '/' + total + ' tour' : '';
      }
    }

    search.addEventListener('input', runFilter);

    // Month Dropdown Logic
    const monthWrap = document.querySelector('.lkh-month-wrap');
    const monthBtn = document.getElementById('lkh-month-btn');
    const monthBtnText = document.getElementById('lkh-month-btn-text');
    const monthMenu = document.getElementById('lkh-month-menu');
    const monthCbs = document.querySelectorAll('.lkh-month-cb');

    if (monthBtn && monthMenu) {
      monthBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        monthMenu.classList.toggle('hidden');
      });

      document.addEventListener('click', (e) => {
        if (!monthMenu.classList.contains('hidden') && !monthWrap.contains(e.target)) {
          monthMenu.classList.add('hidden');
        }
      });

      monthCbs.forEach(cb => {
        cb.addEventListener('change', () => {
          selectedMonths = Array.from(monthCbs).filter(c => c.checked).map(c => c.value);
          if (selectedMonths.length === 0) {
            monthBtnText.textContent = 'Tất cả các tháng';
          } else if (selectedMonths.length === 1) {
            const [y, m] = selectedMonths[0].split('-');
            monthBtnText.textContent = \`Tháng \${m}/\${y}\`;
          } else {
            monthBtnText.textContent = \`Đã chọn \${selectedMonths.length} tháng\`;
          }
          runFilter();
        });
      });
    }

    // Group tabs
    const groupTabs = document.querySelectorAll('.lkh-group-tab');
    const groupWraps = document.querySelectorAll('.lkh-group-wrap');

    function closeAllDropdowns() {
      groupWraps.forEach(w => w.classList.remove('open'));
    }

    function setActiveGroup(tab) {
      groupTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // Reset dropdown item highlights
      document.querySelectorAll('.lkh-dropdown-item').forEach(di => di.classList.remove('active'));
    }

    groupTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        const wrap = tab.closest('.lkh-group-wrap');
        const childrenStr = tab.dataset.children || '';
        let children = [];
        try { children = JSON.parse(childrenStr); } catch(_) {}

        // If "Tất cả" button (no group)
        if (!tab.dataset.group) {
          closeAllDropdowns();
          setActiveGroup(tab);
          allowedDests = [];
          runFilter();
          return;
        }

        // If group has only 1 child, act as direct filter
        if (children.length <= 1) {
          closeAllDropdowns();
          setActiveGroup(tab);
          allowedDests = children;
          runFilter();
          return;
        }

        // Toggle dropdown
        const isOpen = wrap && wrap.classList.contains('open');
        closeAllDropdowns();
        if (!isOpen && wrap) {
          wrap.classList.add('open');
        }
        // Select entire group
        setActiveGroup(tab);
        allowedDests = children;
        runFilter();
      });
    });

    // Sub-destination items
    document.querySelectorAll('.lkh-dropdown-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const wrap = item.closest('.lkh-group-wrap');
        const groupTab = wrap.querySelector('.lkh-group-tab');
        const childrenStr = groupTab.dataset.children || '';
        let children = [];
        try { children = JSON.parse(childrenStr); } catch(_) {}

        // Highlight
        setActiveGroup(groupTab);
        wrap.querySelectorAll('.lkh-dropdown-item').forEach(di => {
          di.classList.remove('active');
          di.classList.remove('active-sub');
        });
        item.classList.add('active');

        const sub = item.dataset.sub || '';
        if (!sub) {
          // "Tất cả [Group]" 
          allowedDests = children;
        } else {
          allowedDests = [sub];
        }
        closeAllDropdowns();
        runFilter();
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => closeAllDropdowns());

    // Reset button
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        search.value = '';
        allowedDests = [];
        selectedMonths = [];
        if (monthCbs) monthCbs.forEach(cb => cb.checked = false);
        if (monthBtnText) monthBtnText.textContent = 'Tất cả các tháng';
        
        closeAllDropdowns();
        groupTabs.forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.lkh-dropdown-item').forEach(di => {
          di.classList.remove('active');
          di.classList.remove('active-sub');
          // Re-add active-sub to the "Tất cả" dropdown item
          if (!di.dataset.sub) di.classList.add('active-sub');
        });
        const allBtn = document.querySelector('.lkh-group-tab[data-group=""]');
        if (allBtn) allBtn.classList.add('active');
        runFilter();
      });
    }
    
    // Auto-run filter initially just in case values are pre-filled by browser
    setTimeout(runFilter, 100);
  }

  // Chạy initLKH khi trang load lần đầu
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLKH);
  } else {
    initLKH();
  }
  // Chạy lại initLKH nếu dùng Astro View Transitions
  document.addEventListener('astro:page-load', initLKH);
})();
</script> </section> <!-- LỊCH KHỞI HÀNH TRUNG QUỐC KHÁC --> <section class="tour-departure-section mb-12"> <h2 class="text-2xl font-bold text-slate-800 mb-6">Các lịch khởi hành khác đến Trung Quốc</h2> <div class="lich-khoi-hanh-wrapper font-sans ">    <div class="departures-container">  <div class="hidden md:block overflow-x-auto "> <table class="w-full text-left border-collapse m-0"> <thead> <tr class="bg-slate-50"> <th class="p-4 font-bold text-slate-700 border-b border-border text-sm">Điểm đến</th> <th class="p-4 font-bold text-slate-700 border-b border-border text-sm">Hành trình bay</th> <th class="p-4 font-bold text-slate-700 border-b border-border text-sm">Khởi hành</th> <th class="p-4 font-bold text-slate-700 border-b border-border text-sm">Giá / Khách</th> <th class="p-4 font-bold text-slate-700 border-b border-border text-sm text-center">Tình trạng</th>  </tr> </thead> <tbody class="bg-white"> <tr class="lkh-row border-b border-border hover:bg-slate-50/80 transition-colors last:border-b-0" data-title="CHUYẾN TÀU THANH TẠNG 10N9Đ - NO SHOPPING" data-code="[HAN] CTTT 28AUG - 06SEP2026" data-dest="Trung Quốc Chung,Tây Tạng" data-date="2026-08-27T17:00:00.000Z"> <td class="p-4"> <div class="font-bold text-slate-800 text-sm leading-snug">CHUYẾN TÀU THANH TẠNG 10N9Đ - NO SHOPPING</div> <span class="font-mono text-[10px] text-slate-500 mt-1 inline-block">[HAN] CTTT 28AUG - 06SEP2026</span> </td> <td class="p-4 text-xs text-slate-600 space-y-1.5"> <div class="space-y-1.5"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">Sichuan Airlines</span> </div>  <div class="text-[11px] text-slate-500 mt-0.5">HAN</div> </div> </td> <td class="p-4"> <div class="font-bold text-slate-800">28/08/2026</div> <div class="text-xs text-slate-500 mt-0.5">Về: 06/09/2026</div> </td> <td class="p-4 font-bold text-brand-700 whitespace-nowrap">68.990.000 VNĐ</td> <td class="p-4 text-center"> <span class="inline-block px-3 py-1 rounded-full text-xs font-bold border text-green-700 bg-green-50 border-green-200"> Mở bán </span> </td>  </tr><tr class="lkh-row border-b border-border hover:bg-slate-50/80 transition-colors last:border-b-0" data-title="TOUR GIANG NAM ĐOÀN RIÊNG 7N6Đ - NO SHOPPING" data-code="[PRIVATE] GIANG NAM  28AUG - 03SEP2026" data-dest="Giang Nam" data-date="2026-08-27T17:00:00.000Z"> <td class="p-4"> <div class="font-bold text-slate-800 text-sm leading-snug">TOUR GIANG NAM ĐOÀN RIÊNG 7N6Đ - NO SHOPPING</div> <span class="font-mono text-[10px] text-slate-500 mt-1 inline-block">[PRIVATE] GIANG NAM  28AUG - 03SEP2026</span> </td> <td class="p-4 text-xs text-slate-600 space-y-1.5"> <div class="space-y-1.5"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">China Eastern Airlines</span> </div>  <div class="text-[11px] text-slate-500 mt-0.5">HAN</div> </div> </td> <td class="p-4"> <div class="font-bold text-slate-800">28/08/2026</div> <div class="text-xs text-slate-500 mt-0.5">Về: 03/09/2026</div> </td> <td class="p-4 font-bold text-brand-700 whitespace-nowrap">49.000.000 VNĐ</td> <td class="p-4 text-center"> <span class="inline-block px-3 py-1 rounded-full text-xs font-bold border text-red-700 bg-red-50 border-red-200"> Hết chỗ </span> </td>  </tr><tr class="lkh-row border-b border-border hover:bg-slate-50/80 transition-colors last:border-b-0" data-title="TOUR ĐẠO THÀNH Á ĐINH 8N7Đ - NO SHOPPING" data-code="ĐẠO THÀNH Á ĐINH 30AUG - 06SEP2026" data-dest="Á Đinh" data-date="2026-08-29T17:00:00.000Z"> <td class="p-4"> <div class="font-bold text-slate-800 text-sm leading-snug">TOUR ĐẠO THÀNH Á ĐINH 8N7Đ - NO SHOPPING</div> <span class="font-mono text-[10px] text-slate-500 mt-1 inline-block">ĐẠO THÀNH Á ĐINH 30AUG - 06SEP2026</span> </td> <td class="p-4 text-xs text-slate-600 space-y-1.5"> <div class="space-y-1.5"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">Sichuan Airlines</span> </div>  <div class="text-[11px] text-slate-500 mt-0.5">TPHCM/HÀ NỘI</div> </div> </td> <td class="p-4"> <div class="font-bold text-slate-800">30/08/2026</div> <div class="text-xs text-slate-500 mt-0.5">Về: 06/09/2026</div> </td> <td class="p-4 font-bold text-brand-700 whitespace-nowrap">41.900.000 VNĐ</td> <td class="p-4 text-center"> <span class="inline-block px-3 py-1 rounded-full text-xs font-bold border text-red-700 bg-red-50 border-red-200"> Hết chỗ </span> </td>  </tr><tr class="lkh-row border-b border-border hover:bg-slate-50/80 transition-colors last:border-b-0" data-title="TÂN CƯƠNG 8N7Đ - NO SHOPPING" data-code="TÂN CƯƠNG 23 - 30OCT2026" data-dest="Trung Quốc Chung,Tân Cương" data-date="2026-10-22T17:00:00.000Z"> <td class="p-4"> <div class="font-bold text-slate-800 text-sm leading-snug">TÂN CƯƠNG 8N7Đ - NO SHOPPING</div> <span class="font-mono text-[10px] text-slate-500 mt-1 inline-block">TÂN CƯƠNG 23 - 30OCT2026</span> </td> <td class="p-4 text-xs text-slate-600 space-y-1.5"> <div class="space-y-1.5"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">Air China</span> </div>  <div class="text-[11px] text-slate-500 mt-0.5">SGN</div> </div> </td> <td class="p-4"> <div class="font-bold text-slate-800">23/10/2026</div> <div class="text-xs text-slate-500 mt-0.5">Về: 30/10/2026</div> </td> <td class="p-4 font-bold text-brand-700 whitespace-nowrap">67.990.000 VNĐ</td> <td class="p-4 text-center"> <span class="inline-block px-3 py-1 rounded-full text-xs font-bold border text-green-700 bg-green-50 border-green-200"> Mở bán </span> </td>  </tr><tr class="lkh-row border-b border-border hover:bg-slate-50/80 transition-colors last:border-b-0" data-title="TOUR ĐẠO THÀNH Á ĐINH 8N7Đ - NO SHOPPING" data-code="ĐẠO THÀNH Á ĐINH 31OCT - 07NOV2026" data-dest="Á Đinh" data-date="2026-10-30T17:00:00.000Z"> <td class="p-4"> <div class="font-bold text-slate-800 text-sm leading-snug">TOUR ĐẠO THÀNH Á ĐINH 8N7Đ - NO SHOPPING</div> <span class="font-mono text-[10px] text-slate-500 mt-1 inline-block">ĐẠO THÀNH Á ĐINH 31OCT - 07NOV2026</span> </td> <td class="p-4 text-xs text-slate-600 space-y-1.5"> <div class="space-y-1.5"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">Sichuan Airlines</span> </div>  <div class="text-[11px] text-slate-500 mt-0.5">TPHCM/HÀ NỘI</div> </div> </td> <td class="p-4"> <div class="font-bold text-slate-800">31/10/2026</div> <div class="text-xs text-slate-500 mt-0.5">Về: 07/11/2026</div> </td> <td class="p-4 font-bold text-brand-700 whitespace-nowrap">49.900.000 VNĐ</td> <td class="p-4 text-center"> <span class="inline-block px-3 py-1 rounded-full text-xs font-bold border text-green-700 bg-green-50 border-green-200"> Mở bán </span> </td>  </tr><tr class="lkh-row border-b border-border hover:bg-slate-50/80 transition-colors last:border-b-0" data-title="TOUR LỆ GIANG 6N5Đ - NO SHOPPING " data-code="LỆ GIANG 19 - 24NOV2026" data-dest="Lệ Giang,Trung Quốc Chung" data-date="2026-11-18T17:00:00.000Z"> <td class="p-4"> <div class="font-bold text-slate-800 text-sm leading-snug">TOUR LỆ GIANG 6N5Đ - NO SHOPPING </div> <span class="font-mono text-[10px] text-slate-500 mt-1 inline-block">LỆ GIANG 19 - 24NOV2026</span> </td> <td class="p-4 text-xs text-slate-600 space-y-1.5"> <div class="space-y-1.5"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">Ruili Airlines</span> </div>  <div class="text-[11px] text-slate-500 mt-0.5">TPHCM </div> </div> </td> <td class="p-4"> <div class="font-bold text-slate-800">19/11/2026</div> <div class="text-xs text-slate-500 mt-0.5">Về: 24/11/2026</div> </td> <td class="p-4 font-bold text-brand-700 whitespace-nowrap">27.990.000 VNĐ</td> <td class="p-4 text-center"> <span class="inline-block px-3 py-1 rounded-full text-xs font-bold border text-green-700 bg-green-50 border-green-200"> Mở bán </span> </td>  </tr> </tbody> </table> </div>  <div class="md:hidden space-y-4"> <div class="lkh-card bg-white py-4 border-b border-border last:border-0" data-title="CHUYẾN TÀU THANH TẠNG 10N9Đ - NO SHOPPING" data-code="[HAN] CTTT 28AUG - 06SEP2026" data-dest="Trung Quốc Chung,Tây Tạng" data-date="2026-08-27T17:00:00.000Z"> <div class="flex justify-between items-start mb-3"> <div class="flex-1 pr-3"> <div class="font-bold text-slate-800 text-sm leading-snug mb-1">CHUYẾN TÀU THANH TẠNG 10N9Đ - NO SHOPPING</div> <span class="font-mono text-[10px] text-slate-500">[HAN] CTTT 28AUG - 06SEP2026</span> </div> <span class="px-2.5 py-1 rounded-md text-[11px] font-bold border whitespace-nowrap text-green-700 bg-green-50 border-green-200"> Mở bán </span> </div>  <div class="bg-slate-50 rounded-lg p-3 mb-3 space-y-1.5 text-xs"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">Sichuan Airlines</span> </div>  <div class="text-[11px] text-slate-500">HAN</div> </div> <div class="flex items-center gap-2 text-sm text-slate-600 mb-1"> <span>🛫 28/08/2026</span> <span class="text-slate-500">→ 06/09/2026</span> </div> <div class="h-px bg-slate-100 w-full my-3"></div> <div class="flex flex-col gap-3"> <div class="flex justify-between items-center"> <span class="text-sm text-slate-500">Giá trọn gói</span> <span class="font-bold text-brand-700 text-lg">68.990.000 VNĐ</span> </div>  </div> </div><div class="lkh-card bg-white py-4 border-b border-border last:border-0" data-title="TOUR GIANG NAM ĐOÀN RIÊNG 7N6Đ - NO SHOPPING" data-code="[PRIVATE] GIANG NAM  28AUG - 03SEP2026" data-dest="Giang Nam" data-date="2026-08-27T17:00:00.000Z"> <div class="flex justify-between items-start mb-3"> <div class="flex-1 pr-3"> <div class="font-bold text-slate-800 text-sm leading-snug mb-1">TOUR GIANG NAM ĐOÀN RIÊNG 7N6Đ - NO SHOPPING</div> <span class="font-mono text-[10px] text-slate-500">[PRIVATE] GIANG NAM  28AUG - 03SEP2026</span> </div> <span class="px-2.5 py-1 rounded-md text-[11px] font-bold border whitespace-nowrap text-red-700 bg-red-50 border-red-200"> Hết chỗ </span> </div>  <div class="bg-slate-50 rounded-lg p-3 mb-3 space-y-1.5 text-xs"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">China Eastern Airlines</span> </div>  <div class="text-[11px] text-slate-500">HAN</div> </div> <div class="flex items-center gap-2 text-sm text-slate-600 mb-1"> <span>🛫 28/08/2026</span> <span class="text-slate-500">→ 03/09/2026</span> </div> <div class="h-px bg-slate-100 w-full my-3"></div> <div class="flex flex-col gap-3"> <div class="flex justify-between items-center"> <span class="text-sm text-slate-500">Giá trọn gói</span> <span class="font-bold text-brand-700 text-lg">49.000.000 VNĐ</span> </div>  </div> </div><div class="lkh-card bg-white py-4 border-b border-border last:border-0" data-title="TOUR ĐẠO THÀNH Á ĐINH 8N7Đ - NO SHOPPING" data-code="ĐẠO THÀNH Á ĐINH 30AUG - 06SEP2026" data-dest="Á Đinh" data-date="2026-08-29T17:00:00.000Z"> <div class="flex justify-between items-start mb-3"> <div class="flex-1 pr-3"> <div class="font-bold text-slate-800 text-sm leading-snug mb-1">TOUR ĐẠO THÀNH Á ĐINH 8N7Đ - NO SHOPPING</div> <span class="font-mono text-[10px] text-slate-500">ĐẠO THÀNH Á ĐINH 30AUG - 06SEP2026</span> </div> <span class="px-2.5 py-1 rounded-md text-[11px] font-bold border whitespace-nowrap text-red-700 bg-red-50 border-red-200"> Hết chỗ </span> </div>  <div class="bg-slate-50 rounded-lg p-3 mb-3 space-y-1.5 text-xs"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">Sichuan Airlines</span> </div>  <div class="text-[11px] text-slate-500">TPHCM/HÀ NỘI</div> </div> <div class="flex items-center gap-2 text-sm text-slate-600 mb-1"> <span>🛫 30/08/2026</span> <span class="text-slate-500">→ 06/09/2026</span> </div> <div class="h-px bg-slate-100 w-full my-3"></div> <div class="flex flex-col gap-3"> <div class="flex justify-between items-center"> <span class="text-sm text-slate-500">Giá trọn gói</span> <span class="font-bold text-brand-700 text-lg">41.900.000 VNĐ</span> </div>  </div> </div><div class="lkh-card bg-white py-4 border-b border-border last:border-0" data-title="TÂN CƯƠNG 8N7Đ - NO SHOPPING" data-code="TÂN CƯƠNG 23 - 30OCT2026" data-dest="Trung Quốc Chung,Tân Cương" data-date="2026-10-22T17:00:00.000Z"> <div class="flex justify-between items-start mb-3"> <div class="flex-1 pr-3"> <div class="font-bold text-slate-800 text-sm leading-snug mb-1">TÂN CƯƠNG 8N7Đ - NO SHOPPING</div> <span class="font-mono text-[10px] text-slate-500">TÂN CƯƠNG 23 - 30OCT2026</span> </div> <span class="px-2.5 py-1 rounded-md text-[11px] font-bold border whitespace-nowrap text-green-700 bg-green-50 border-green-200"> Mở bán </span> </div>  <div class="bg-slate-50 rounded-lg p-3 mb-3 space-y-1.5 text-xs"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">Air China</span> </div>  <div class="text-[11px] text-slate-500">SGN</div> </div> <div class="flex items-center gap-2 text-sm text-slate-600 mb-1"> <span>🛫 23/10/2026</span> <span class="text-slate-500">→ 30/10/2026</span> </div> <div class="h-px bg-slate-100 w-full my-3"></div> <div class="flex flex-col gap-3"> <div class="flex justify-between items-center"> <span class="text-sm text-slate-500">Giá trọn gói</span> <span class="font-bold text-brand-700 text-lg">67.990.000 VNĐ</span> </div>  </div> </div><div class="lkh-card bg-white py-4 border-b border-border last:border-0" data-title="TOUR ĐẠO THÀNH Á ĐINH 8N7Đ - NO SHOPPING" data-code="ĐẠO THÀNH Á ĐINH 31OCT - 07NOV2026" data-dest="Á Đinh" data-date="2026-10-30T17:00:00.000Z"> <div class="flex justify-between items-start mb-3"> <div class="flex-1 pr-3"> <div class="font-bold text-slate-800 text-sm leading-snug mb-1">TOUR ĐẠO THÀNH Á ĐINH 8N7Đ - NO SHOPPING</div> <span class="font-mono text-[10px] text-slate-500">ĐẠO THÀNH Á ĐINH 31OCT - 07NOV2026</span> </div> <span class="px-2.5 py-1 rounded-md text-[11px] font-bold border whitespace-nowrap text-green-700 bg-green-50 border-green-200"> Mở bán </span> </div>  <div class="bg-slate-50 rounded-lg p-3 mb-3 space-y-1.5 text-xs"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">Sichuan Airlines</span> </div>  <div class="text-[11px] text-slate-500">TPHCM/HÀ NỘI</div> </div> <div class="flex items-center gap-2 text-sm text-slate-600 mb-1"> <span>🛫 31/10/2026</span> <span class="text-slate-500">→ 07/11/2026</span> </div> <div class="h-px bg-slate-100 w-full my-3"></div> <div class="flex flex-col gap-3"> <div class="flex justify-between items-center"> <span class="text-sm text-slate-500">Giá trọn gói</span> <span class="font-bold text-brand-700 text-lg">49.900.000 VNĐ</span> </div>  </div> </div><div class="lkh-card bg-white py-4 border-b border-border last:border-0" data-title="TOUR LỆ GIANG 6N5Đ - NO SHOPPING " data-code="LỆ GIANG 19 - 24NOV2026" data-dest="Lệ Giang,Trung Quốc Chung" data-date="2026-11-18T17:00:00.000Z"> <div class="flex justify-between items-start mb-3"> <div class="flex-1 pr-3"> <div class="font-bold text-slate-800 text-sm leading-snug mb-1">TOUR LỆ GIANG 6N5Đ - NO SHOPPING </div> <span class="font-mono text-[10px] text-slate-500">LỆ GIANG 19 - 24NOV2026</span> </div> <span class="px-2.5 py-1 rounded-md text-[11px] font-bold border whitespace-nowrap text-green-700 bg-green-50 border-green-200"> Mở bán </span> </div>  <div class="bg-slate-50 rounded-lg p-3 mb-3 space-y-1.5 text-xs"> <div class="flex items-center gap-1.5"> <span class="text-brand-500 shrink-0">✈</span> <span class="font-semibold text-slate-700">Ruili Airlines</span> </div>  <div class="text-[11px] text-slate-500">TPHCM </div> </div> <div class="flex items-center gap-2 text-sm text-slate-600 mb-1"> <span>🛫 19/11/2026</span> <span class="text-slate-500">→ 24/11/2026</span> </div> <div class="h-px bg-slate-100 w-full my-3"></div> <div class="flex flex-col gap-3"> <div class="flex justify-between items-center"> <span class="text-sm text-slate-500">Giá trọn gói</span> <span class="font-bold text-brand-700 text-lg">27.990.000 VNĐ</span> </div>  </div> </div> </div> </div> </div>  <script>
(function() {
  function initLKH() {
    const search = document.getElementById('lkh-search');
    const resetBtn = document.getElementById('lkh-reset');
    const resultCount = document.getElementById('lkh-result-count');
    
    // Prevent double-binding in Astro View Transitions
    if (!search || search.dataset.initialized) return;
    search.dataset.initialized = 'true';

    let allowedDests = []; // empty = show all
    let selectedMonths = []; // empty = show all

    function runFilter() {
      const q = (search.value || '').toLowerCase().trim();
      const items = document.querySelectorAll('.lkh-row, .lkh-card');
      let shown = 0;
      items.forEach(el => {
        const title = (el.dataset.title || '').toLowerCase();
        const code = (el.dataset.code || '').toLowerCase();
        const dest = (el.dataset.dest || '').toLowerCase().trim();
        const date = el.dataset.date || '';
        let ok = true;
        
        if (q && !title.includes(q) && !code.includes(q)) ok = false;
        
        if (selectedMonths.length > 0) {
          const matchMonth = selectedMonths.some(sm => date.startsWith(sm));
          if (!matchMonth) ok = false;
        }
        
        if (allowedDests.length) {
          const hasDestMatch = allowedDests.some(ad => dest.includes(ad.toLowerCase().trim()));
          if (!hasDestMatch) ok = false;
        }
        
        el.style.display = ok ? '' : 'none';
        if (ok) shown++;
      });
      if (resultCount) {
        const total = items.length;
        resultCount.textContent = (q || selectedMonths.length || allowedDests.length) ? 'Hiển thị ' + shown + '/' + total + ' tour' : '';
      }
    }

    search.addEventListener('input', runFilter);

    // Month Dropdown Logic
    const monthWrap = document.querySelector('.lkh-month-wrap');
    const monthBtn = document.getElementById('lkh-month-btn');
    const monthBtnText = document.getElementById('lkh-month-btn-text');
    const monthMenu = document.getElementById('lkh-month-menu');
    const monthCbs = document.querySelectorAll('.lkh-month-cb');

    if (monthBtn && monthMenu) {
      monthBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        monthMenu.classList.toggle('hidden');
      });

      document.addEventListener('click', (e) => {
        if (!monthMenu.classList.contains('hidden') && !monthWrap.contains(e.target)) {
          monthMenu.classList.add('hidden');
        }
      });

      monthCbs.forEach(cb => {
        cb.addEventListener('change', () => {
          selectedMonths = Array.from(monthCbs).filter(c => c.checked).map(c => c.value);
          if (selectedMonths.length === 0) {
            monthBtnText.textContent = 'Tất cả các tháng';
          } else if (selectedMonths.length === 1) {
            const [y, m] = selectedMonths[0].split('-');
            monthBtnText.textContent = \`Tháng \${m}/\${y}\`;
          } else {
            monthBtnText.textContent = \`Đã chọn \${selectedMonths.length} tháng\`;
          }
          runFilter();
        });
      });
    }

    // Group tabs
    const groupTabs = document.querySelectorAll('.lkh-group-tab');
    const groupWraps = document.querySelectorAll('.lkh-group-wrap');

    function closeAllDropdowns() {
      groupWraps.forEach(w => w.classList.remove('open'));
    }

    function setActiveGroup(tab) {
      groupTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // Reset dropdown item highlights
      document.querySelectorAll('.lkh-dropdown-item').forEach(di => di.classList.remove('active'));
    }

    groupTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        e.stopPropagation();
        const wrap = tab.closest('.lkh-group-wrap');
        const childrenStr = tab.dataset.children || '';
        let children = [];
        try { children = JSON.parse(childrenStr); } catch(_) {}

        // If "Tất cả" button (no group)
        if (!tab.dataset.group) {
          closeAllDropdowns();
          setActiveGroup(tab);
          allowedDests = [];
          runFilter();
          return;
        }

        // If group has only 1 child, act as direct filter
        if (children.length <= 1) {
          closeAllDropdowns();
          setActiveGroup(tab);
          allowedDests = children;
          runFilter();
          return;
        }

        // Toggle dropdown
        const isOpen = wrap && wrap.classList.contains('open');
        closeAllDropdowns();
        if (!isOpen && wrap) {
          wrap.classList.add('open');
        }
        // Select entire group
        setActiveGroup(tab);
        allowedDests = children;
        runFilter();
      });
    });

    // Sub-destination items
    document.querySelectorAll('.lkh-dropdown-item').forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        const wrap = item.closest('.lkh-group-wrap');
        const groupTab = wrap.querySelector('.lkh-group-tab');
        const childrenStr = groupTab.dataset.children || '';
        let children = [];
        try { children = JSON.parse(childrenStr); } catch(_) {}

        // Highlight
        setActiveGroup(groupTab);
        wrap.querySelectorAll('.lkh-dropdown-item').forEach(di => {
          di.classList.remove('active');
          di.classList.remove('active-sub');
        });
        item.classList.add('active');

        const sub = item.dataset.sub || '';
        if (!sub) {
          // "Tất cả [Group]" 
          allowedDests = children;
        } else {
          allowedDests = [sub];
        }
        closeAllDropdowns();
        runFilter();
      });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => closeAllDropdowns());

    // Reset button
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        search.value = '';
        allowedDests = [];
        selectedMonths = [];
        if (monthCbs) monthCbs.forEach(cb => cb.checked = false);
        if (monthBtnText) monthBtnText.textContent = 'Tất cả các tháng';
        
        closeAllDropdowns();
        groupTabs.forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.lkh-dropdown-item').forEach(di => {
          di.classList.remove('active');
          di.classList.remove('active-sub');
          // Re-add active-sub to the "Tất cả" dropdown item
          if (!di.dataset.sub) di.classList.add('active-sub');
        });
        const allBtn = document.querySelector('.lkh-group-tab[data-group=""]');
        if (allBtn) allBtn.classList.add('active');
        runFilter();
      });
    }
    
    // Auto-run filter initially just in case values are pre-filled by browser
    setTimeout(runFilter, 100);
  }

  // Chạy initLKH khi trang load lần đầu
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLKH);
  } else {
    initLKH();
  }
  // Chạy lại initLKH nếu dùng Astro View Transitions
  document.addEventListener('astro:page-load', initLKH);
})();
</script> </section> <!-- THÔNG TIN THÊM --> <section class="tour-faq-section mb-12 mt-12"> <h2 class="text-2xl font-bold text-slate-800 mb-6">Thông Tin Thêm</h2> <div class="tour-faq-wrapper flex flex-col gap-4">  <details open class="group bg-white border border-slate-200 rounded-xl overflow-hidden mb-4 shadow-sm"> <summary class="flex items-center gap-3 p-4 font-semibold cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors list-none [&::-webkit-details-marker]:hidden"> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>    <span class="flex-1 text-lg font-bold text-green-700">Bao Gồm</span> <span class="faq-toggle-icon text-2xl font-light text-slate-400 group-open:rotate-45 transition-transform duration-300">+</span> </summary> <div class="faq-content custom-blog-prose max-w-none p-6 md:p-7 text-slate-600 bg-white border-t border-slate-100">  <ol><li>Vé máy bay khứ hồi: BAY THẲNG TP HCM – Lệ Giang – TP HCM</li><li>Visa nhập cảnh Trung Quốc</li><li>Xe di chuyển theo hành trình</li><li>Lưu trú: Khách sạn 4 sao, 02 khách/phòng (phòng Twin/Double)</li><li>Ăn uống: Bữa sáng buffet tại khách sạn, các bữa ăn chính Set menu</li><li>Nước uống: 2 chai/ngày</li><li>Hướng dẫn viên: Trưởng đoàn FIT TOUR + HDV địa phương</li><li>Vé tham quan trọn gói theo chương trình</li><li>Vé xe điện + Vé thang cuốn</li><li>Bình oxy cho các trường hợp khẩn cấp</li><li>Bảo hiểm du lịch trọn gói</li><li>Nước suối hằng ngày: 02 chai/khách/ngày</li><li>Quà tặng lưu niệm</li></ol>  </div> </details> <details class="group bg-white border border-slate-200 rounded-xl overflow-hidden mb-4 shadow-sm"> <summary class="flex items-center gap-3 p-4 font-semibold cursor-pointer bg-slate-50 hover:bg-slate-100 transition-colors list-none [&::-webkit-details-marker]:hidden">  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>   <span class="flex-1 text-lg font-bold text-red-700">Không Bao Gồm</span> <span class="faq-toggle-icon text-2xl font-light text-slate-400 group-open:rotate-45 transition-transform duration-300">+</span> </summary> <div class="faq-content custom-blog-prose max-w-none p-6 md:p-7 text-slate-600 bg-white border-t border-slate-100">  <ol><li>Chi phí các dịch vụ không được liệt kê trong phần Bao gồm</li><li>Phụ thu phòng đơn (áp dụng cho khách yêu cầu ở riêng 1 phòng)</li><li>VAT</li><li>Các chi phí cá nhân</li><li>Tiền Tip cho Tour Leader, Hướng dẫn viên và Lái xe (tối thiểu 36USD/khách/tour)</li><li>Phụ thu phòng đơn 300 USD/khách – nếu quý khách có nhu cầu ngủ phòng riêng hoặc không có khách ghép chung.</li></ol>  </div> </details>  </div> </section> <!-- GALLERY ẢNH KHÁCH HÀNG --> <section class="tour-gallery-section mb-12 mt-12 group"> <div class="mb-6"> <h2 class="text-2xl font-bold text-slate-800 m-0">Hình ảnh khách hàng Fit Tour tại Lệ Giang</h2> </div> <div class="relative"> <button class="tour-gallery-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-slate-200 hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 hidden md:flex items-center justify-center transition-all shadow-lg text-slate-700 translate-y-[-50%]"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg> </button> <div class="tour-gallery-slider flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:gap-6 hide-scrollbar cursor-grab active:cursor-grabbing" style="-ms-overflow-style: none; scrollbar-width: none;">  <div class="flex-shrink-0 snap-center overflow-hidden rounded-xl bg-slate-100 w-[85%] sm:w-[60%] md:w-[calc(50%-12px)]" style="aspect-ratio: 16/9;"> <img src="https://media.fittour.vn/uploads/2024/12/cau-da-thi-tran-co-chau-trang-trung-quoc.webp" alt="Hình ảnh khách hàng Fit Tour tại Lệ Giang" class="w-full h-full object-cover pointer-events-none" loading="lazy"> </div><div class="flex-shrink-0 snap-center overflow-hidden rounded-xl bg-slate-100 w-[85%] sm:w-[60%] md:w-[calc(50%-12px)]" style="aspect-ratio: 16/9;"> <img src="https://media.fittour.vn/uploads/2024/10/du-khach-ngo-ngang-truoc-ve-dep-ve-dem-cua-vong-tien-coc.webp" alt="Hình ảnh khách hàng Fit Tour tại Lệ Giang" class="w-full h-full object-cover pointer-events-none" loading="lazy"> </div><div class="flex-shrink-0 snap-center overflow-hidden rounded-xl bg-slate-100 w-[85%] sm:w-[60%] md:w-[calc(50%-12px)]" style="aspect-ratio: 16/9;"> <img src="https://media.fittour.vn/uploads/2024/10/cac-nghe-si-trinh-dien-show-tai-vu-le-chau.webp" alt="Hình ảnh khách hàng Fit Tour tại Lệ Giang" class="w-full h-full object-cover pointer-events-none" loading="lazy"> </div><div class="flex-shrink-0 snap-center overflow-hidden rounded-xl bg-slate-100 w-[85%] sm:w-[60%] md:w-[calc(50%-12px)]" style="aspect-ratio: 16/9;"> <img src="https://media.fittour.vn/uploads/2024/10/con-duong-len-nui-vong-tien-coc.webp" alt="Hình ảnh khách hàng Fit Tour tại Lệ Giang" class="w-full h-full object-cover pointer-events-none" loading="lazy"> </div><div class="flex-shrink-0 snap-center overflow-hidden rounded-xl bg-slate-100 w-[85%] sm:w-[60%] md:w-[calc(50%-12px)]" style="aspect-ratio: 16/9;"> <img src="https://media.fittour.vn/uploads/2024/04/doan-company-trip-le-giang-den-moc-phu-pho-co-le-giang.webp" alt="Hình ảnh khách hàng Fit Tour tại Lệ Giang" class="w-full h-full object-cover pointer-events-none" loading="lazy"> </div><div class="flex-shrink-0 snap-center overflow-hidden rounded-xl bg-slate-100 w-[85%] sm:w-[60%] md:w-[calc(50%-12px)]" style="aspect-ratio: 16/9;"> <img src="https://media.fittour.vn/uploads/2024/04/doan-company-trip-le-giang-den-ho-na-pa.webp" alt="Hình ảnh khách hàng Fit Tour tại Lệ Giang" class="w-full h-full object-cover pointer-events-none" loading="lazy"> </div><div class="flex-shrink-0 snap-center overflow-hidden rounded-xl bg-slate-100 w-[85%] sm:w-[60%] md:w-[calc(50%-12px)]" style="aspect-ratio: 16/9;"> <img src="https://media.fittour.vn/uploads/2024/09/mot-phan-khu-vuc-khuon-vien-tho-lau.webp" alt="Hình ảnh khách hàng Fit Tour tại Lệ Giang" class="w-full h-full object-cover pointer-events-none" loading="lazy"> </div><div class="flex-shrink-0 snap-center overflow-hidden rounded-xl bg-slate-100 w-[85%] sm:w-[60%] md:w-[calc(50%-12px)]" style="aspect-ratio: 16/9;"> <img src="https://media.fittour.vn/uploads/2024/12/thuyen-go-len-len-song-ben-lang-co.webp" alt="Hình ảnh khách hàng Fit Tour tại Lệ Giang" class="w-full h-full object-cover pointer-events-none" loading="lazy"> </div> </div> <button class="tour-gallery-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-slate-200 hover:bg-brand-50 hover:text-brand-700 hover:border-brand-200 hidden md:flex items-center justify-center transition-all shadow-lg text-slate-700 translate-y-[-50%]"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"></path></svg> </button> </div> </section> <script type="module">globalThis.process??={};globalThis.process.env??={};function d(){document.querySelectorAll(".tour-gallery-section").forEach(l=>{const e=l.querySelector(".tour-gallery-slider"),o=l.querySelector(".tour-gallery-prev"),s=l.querySelector(".tour-gallery-next");if(!e)return;const n=e.firstElementChild,u=parseInt(window.getComputedStyle(e).gap)||24,a=n?n.clientWidth+u:e.clientWidth*.5;o&&o.addEventListener("click",()=>{e.scrollBy({left:-a,behavior:"smooth"})}),s&&s.addEventListener("click",()=>{e.scrollBy({left:a,behavior:"smooth"})});let t=!1,c=0,i=0;e.addEventListener("mousedown",r=>{t=!0,e.style.cursor="grabbing",c=r.pageX-e.offsetLeft,i=e.scrollLeft}),e.addEventListener("mouseleave",()=>{t=!1,e.style.cursor="grab"}),e.addEventListener("mouseup",()=>{t=!1,e.style.cursor="grab"}),e.addEventListener("mousemove",r=>{if(!t)return;r.preventDefault();const f=(r.pageX-e.offsetLeft-c)*2;e.scrollLeft=i-f})})}document.addEventListener("DOMContentLoaded",d);document.addEventListener("astro:page-load",d);</script> </div> <!-- ================= CỘT SIDEBAR (PHẢI) ================= --> <div class="tour-sidebar-col"> <div class="sticky top-[100px] flex flex-col gap-8"> <div> <h1 class="text-2xl md:text-3xl font-extrabold text-slate-800 leading-[1.2] mt-0 tracking-tight" style="margin-bottom: 24px;"> Tour Lệ Giang 6N5Đ trọn gói - No Shopping - Thiết kế riêng bởi FIT Tour </h1> <div class="text-gray-600 text-[16px] leading-relaxed font-normal custom-blog-prose mb-6"> <p style="margin-bottom:14px"><strong>Tour Lệ Giang – Đại Lý – Shangri-La (6N5Đ)</strong> bay thẳng tiện lợi, đưa quý khách khám phá trọn vẹn văn hóa Tây Tạng và thiên nhiên hùng vĩ của Vân Nam.</p> <p style="margin-bottom:14px"><strong>Điểm nhấn khác biệt của FIT TOUR:</strong></p> <ul style="list-style-type:disc; padding-left:20px; margin-bottom:14px"> <li style="margin-bottom:8px"><strong>NO SHOPPING:</strong> Không điểm mua sắm bắt buộc, tận hưởng trọn vẹn thời gian tham quan.</li> <li style="margin-bottom:8px"><strong>Dịch vụ cao cấp:</strong> Lưu trú khách sạn 4 sao chuẩn quốc tế xuyên suốt hành trình.</li> <li style="margin-bottom:8px"><strong>Chăm sóc tận tâm:</strong> Chuẩn bị sẵn bình oxy cá nhân cho từng khách khi chinh phục Núi Tuyết Ngọc Long.</li> <li style="margin-bottom:8px"><strong>Trải nghiệm tinh hoa:</strong> Khám phá phố cổ Lệ Giang, cáp treo Băng Xuyên (4.506m), tu viện Tùng Tán Lâm và Hành lang sinh thái Hồ Nhĩ Hải.</li> </ul> </div> </div> <!-- STICKY PRICE CARD --> <div class="sticky-price-card"> <div class="service-grid"> <div class="service-item"> <div class="service-icon"> <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> </div> <div class="service-title">Dịch vụ</div> <div class="service-sub">Trọn gói</div> </div> <div class="service-item"> <div class="service-icon"> <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> </div> <div class="service-title">Thời gian</div> <div class="service-sub">6 ngày 5 đêm</div> </div> </div> <div style="margin-bottom: 24px;"> <div class="price-label">Giá Từ</div> <div class="price-amount">27.990.000 VNĐ</div> </div> <div class="action-buttons"> <a href="/zalo" target="_blank" class="btn-primary btn-zalo"> <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21.5 12.3c0-4.9-4.3-8.8-9.5-8.8s-9.5 3.9-9.5 8.8c0 4.1 2.9 7.6 6.8 8.6.2.1.5.3.4.6-.1.4-.4 1.3-.5 1.8-.1.3-.2.4.1.6.3.1.5-.1.8-.3 1.3-.8 2.8-1.8 3.3-2.1.3-.2.6-.2.9-.1 2.3.8 5-.4 6.3-2.3.8-1.5 1-4.1.9-6.8z"></path></svg>
Tư vấn Zalo
</a> <a href="/msg" target="_blank" class="btn-primary btn-msg"> <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.923 1.472 5.518 3.753 7.185v3.42l3.41-1.86a10.871 10.871 0 0 0 2.837.382c5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.096 12.443-2.823-3.003-5.514 3.003 6.068-6.438 2.89 3.002 5.445-3.002-6.066 6.438z"></path></svg>
Messenger
</a> </div> </div> </div> </div> </div> </div> <div class="snippet-wrapper snippet-china-tours"><style>
.snippet-china-tours a[href="/tour/tour-le-giang-6n5d"], .snippet-china-tours a[href="/tour/tour-le-giang-6n5d/"] { display: none !important; }
</style><section class="py-12 lg:py-16 bg-slate-50 border-t border-slate-200" id="journeys">
  <div class="max-w-[1400px] mx-auto px-6 lg:px-12">
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div>
        <p class="text-brand-600 text-[10px] font-bold tracking-[0.2em] mb-3">Khám Phá Trung Hoa</p>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 tracking-wide">Các Hành Trình Nổi Bật Khác</h2>
      </div>
    </div>
    <div class="relative w-full">
      <button data-action="carousel-prev" type="button" class="hidden md:flex items-center justify-center bg-white text-slate-800 rounded-full cursor-pointer hover:bg-brand-500 hover:text-white transition-colors border border-slate-200 shadow-lg" style="position: absolute; left: -24px; top: 40%; transform: translateY(-50%); z-index: 50; width: 48px; height: 48px;">
        <svg style="width: 24px; height: 24px; pointer-events: none;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button data-action="carousel-next" type="button" class="hidden md:flex items-center justify-center bg-white text-slate-800 rounded-full cursor-pointer hover:bg-brand-500 hover:text-white transition-colors border border-slate-200 shadow-lg" style="position: absolute; right: -24px; top: 40%; transform: translateY(-50%); z-index: 50; width: 48px; height: 48px;">
        <svg style="width: 24px; height: 24px; pointer-events: none;" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </button>
      
      <div id="tour-gallery-scroll" data-component="tour-carousel" class="flex overflow-x-auto -mx-6 px-6 lg:-mx-12 lg:px-12 snap-x snap-mandatory items-stretch" style="gap: 1.25rem; padding-bottom: 2rem; scrollbar-width: none; scroll-behavior: smooth;">
      
        <!-- Card 1 -->
        <a href="/tour/tour-dao-thanh-a-dinh" class="group bg-white hover:bg-slate-50 transition-colors flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 snap-center self-stretch" style="flex: 0 0 auto; width: 380px; max-width: 75vw;">
          <div class="relative w-full overflow-hidden bg-slate-100" style="aspect-ratio: 16/9; flex-shrink: 0;">
            <img src="https://media.fittour.vn/uploads/2023/12/dao-thanh-a-dinh-8n7d-fit-tour.webp" alt="Tour Đạo Thành Á Đinh" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" loading="lazy">
            <div class="absolute bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center max-w-[calc(100%-2rem)] shadow-sm" style="top: 1rem; left: 1rem; padding: 6px 12px;">
              <span class="text-brand-600 font-bold uppercase whitespace-nowrap text-ellipsis overflow-hidden block" style="font-size: 9px; letter-spacing: 0.05em; line-height: 1; padding-top: 2px;">Thiên Nhiên – Văn Hoá</span>
            </div>
          </div>
          <div class="p-6 flex flex-col grow relative z-10">
            <p class="font-bold uppercase mb-2" style="color: #ea580c; font-size: 10px; letter-spacing: 0.2em;">8N7Đ | The Pure Land</p>
            <h3 class="text-slate-800 font-bold mb-2 leading-tight transition-colors" style="font-size: 18px;">Đạo Thành Á Đinh</h3>
            <p class="text-slate-500 italic mb-4" style="font-size: 13px;">Thành Đô • Tứ Cô Nương • Đạo Thành</p>
            <p class="text-slate-600 font-light leading-relaxed mb-6 grow" style="font-size: 13px;">Hành trình khám phá vùng đất thiêng liêng với những ngọn núi tuyết vĩnh cửu và mặt hồ xanh biếc.</p>
            <div class="pt-4 mt-auto" style="border-top: 1px solid #e2e8f0;">
              <p class="text-slate-500 leading-relaxed" style="font-size: 11px;"><span class="text-slate-800 font-medium">Hành trình:</span> Tứ Cô Nương • Lý Đường • Shangri-La</p>
            </div>
          </div>
        </a>

        <!-- Card 2 -->
        <a href="/tour/tour-le-giang-6n5d" class="group bg-white hover:bg-slate-50 transition-colors flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 snap-center self-stretch" style="flex: 0 0 auto; width: 380px; max-width: 75vw;">
          <div class="relative w-full overflow-hidden bg-slate-100" style="aspect-ratio: 16/9; flex-shrink: 0;">
            <img src="https://media.fittour.vn/uploads/2021/09/tour-le-giang-fittour.webp" alt="Tour Lệ Giang" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" loading="lazy">
            <div class="absolute bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center max-w-[calc(100%-2rem)] shadow-sm" style="top: 1rem; left: 1rem; padding: 6px 12px;">
              <span class="text-brand-600 font-bold uppercase whitespace-nowrap text-ellipsis overflow-hidden block" style="font-size: 9px; letter-spacing: 0.05em; line-height: 1; padding-top: 2px;">Cổ Trấn – Lãng Mạn</span>
            </div>
          </div>
          <div class="p-6 flex flex-col grow relative z-10">
            <p class="font-bold uppercase mb-2" style="color: #ea580c; font-size: 10px; letter-spacing: 0.2em;">6N5Đ | Romance Journey</p>
            <h3 class="text-slate-800 font-bold mb-2 leading-tight transition-colors" style="font-size: 18px;">Lệ Giang – Trở Về Miền Cổ Mộng</h3>
            <p class="text-slate-500 italic mb-4" style="font-size: 13px;">Lệ Giang • Đại Lý • Shangri-La</p>
            <p class="text-slate-600 font-light leading-relaxed mb-6 grow" style="font-size: 13px;">Dạo bước trên những cung đường đá xanh trăm năm tuổi và cảm nhận nhịp sống chậm rãi.</p>
            <div class="pt-4 mt-auto" style="border-top: 1px solid #e2e8f0;">
              <p class="text-slate-500 leading-relaxed" style="font-size: 11px;"><span class="text-slate-800 font-medium">Hành trình:</span> Đại Lý • Hồ Nhĩ Hải • Núi Tuyết Ngọc Long</p>
            </div>
          </div>
        </a>

        <!-- Card 3 -->
        <a href="/tour/cuu-trai-cau-fittour" class="group bg-white hover:bg-slate-50 transition-colors flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 snap-center self-stretch" style="flex: 0 0 auto; width: 380px; max-width: 75vw;">
          <div class="relative w-full overflow-hidden bg-slate-100" style="aspect-ratio: 16/9; flex-shrink: 0;">
            <img src="https://media.fittour.vn/uploads/2025/05/tour-cuu-trai-cau-bay-thang-fittour.webp" alt="Tour Cửu Trại Câu" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" loading="lazy">
            <div class="absolute bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center max-w-[calc(100%-2rem)] shadow-sm" style="top: 1rem; left: 1rem; padding: 6px 12px;">
              <span class="text-brand-600 font-bold uppercase whitespace-nowrap text-ellipsis overflow-hidden block" style="font-size: 9px; letter-spacing: 0.05em; line-height: 1; padding-top: 2px;">Di Sản – Cảnh Quan</span>
            </div>
          </div>
          <div class="p-6 flex flex-col grow relative z-10">
            <p class="font-bold uppercase mb-2" style="color: #ea580c; font-size: 10px; letter-spacing: 0.2em;">6N5Đ | Paradise on Earth</p>
            <h3 class="text-slate-800 font-bold mb-2 leading-tight transition-colors" style="font-size: 18px;">Cửu Trại Câu – Thiên Đường</h3>
            <p class="text-slate-500 italic mb-4" style="font-size: 13px;">Thành Đô • Cửu Trại Câu</p>
            <p class="text-slate-600 font-light leading-relaxed mb-6 grow" style="font-size: 13px;">Chiêm ngưỡng sắc hồ đa sắc tuyệt đẹp và thả hồn vào không gian tiên cảnh của thiên nhiên Tứ Xuyên.</p>
            <div class="pt-4 mt-auto" style="border-top: 1px solid #e2e8f0;">
              <p class="text-slate-500 leading-relaxed" style="font-size: 11px;"><span class="text-slate-800 font-medium">Hành trình:</span> Thành Đô • Đô Giang Yến • Cửu Trại Câu</p>
            </div>
          </div>
        </a>

        <!-- Card 4 -->
        <a href="/tour/tour-tan-cuong-road-trip" class="group bg-white hover:bg-slate-50 transition-colors flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 snap-center self-stretch" style="flex: 0 0 auto; width: 380px; max-width: 75vw;">
          <div class="relative w-full overflow-hidden bg-slate-100" style="aspect-ratio: 16/9; flex-shrink: 0;">
            <img src="https://media.fittour.vn/uploads/2024/04/tan-cuong-roadtrip-9n8d.webp" alt="Tour Tân Cương" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" loading="lazy">
            <div class="absolute bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center max-w-[calc(100%-2rem)] shadow-sm" style="top: 1rem; left: 1rem; padding: 6px 12px;">
              <span class="text-brand-600 font-bold uppercase whitespace-nowrap text-ellipsis overflow-hidden block" style="font-size: 9px; letter-spacing: 0.05em; line-height: 1; padding-top: 2px;">Roadtrip – Đồng Cỏ</span>
            </div>
          </div>
          <div class="p-6 flex flex-col grow relative z-10">
            <p class="font-bold uppercase mb-2" style="color: #ea580c; font-size: 10px; letter-spacing: 0.2em;">9N8Đ | Epic Silk Road</p>
            <h3 class="text-slate-800 font-bold mb-2 leading-tight transition-colors" style="font-size: 18px;">Tân Cương – Viễn Xứ</h3>
            <p class="text-slate-500 italic mb-4" style="font-size: 13px;">Urumqi • Turpan • Kanas • Hemu</p>
            <p class="text-slate-600 font-light leading-relaxed mb-6 grow" style="font-size: 13px;">Băng qua sa mạc, thảo nguyên bao la và khám phá văn hóa đa dạng trên con đường tơ lụa huyền thoại.</p>
            <div class="pt-4 mt-auto" style="border-top: 1px solid #e2e8f0;">
              <p class="text-slate-500 leading-relaxed" style="font-size: 11px;"><span class="text-slate-800 font-medium">Hành trình:</span> Urumqi • Turpan • Burqin • Làng Hemu</p>
            </div>
          </div>
        </a>

        <!-- Card 5 -->
        <a href="/tour/tour-bac-kinh-5n5d" class="group bg-white hover:bg-slate-50 transition-colors flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 snap-center self-stretch" style="flex: 0 0 auto; width: 380px; max-width: 75vw;">
          <div class="relative w-full overflow-hidden bg-slate-100" style="aspect-ratio: 16/9; flex-shrink: 0;">
            <img src="https://media.fittour.vn/uploads/2025/08/tour-bac-kinh-fittour.webp" alt="Tour Bắc Kinh" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" loading="lazy">
            <div class="absolute bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center max-w-[calc(100%-2rem)] shadow-sm" style="top: 1rem; left: 1rem; padding: 6px 12px;">
              <span class="text-brand-600 font-bold uppercase whitespace-nowrap text-ellipsis overflow-hidden block" style="font-size: 9px; letter-spacing: 0.05em; line-height: 1; padding-top: 2px;">Lịch Sử – Văn Hóa</span>
            </div>
          </div>
          <div class="p-6 flex flex-col grow relative z-10">
            <p class="font-bold uppercase mb-2" style="color: #ea580c; font-size: 10px; letter-spacing: 0.2em;">5N4Đ | Imperial Capital</p>
            <h3 class="text-slate-800 font-bold mb-2 leading-tight transition-colors" style="font-size: 18px;">Bắc Kinh – Cố Đô</h3>
            <p class="text-slate-500 italic mb-4" style="font-size: 13px;">Bắc Kinh • Vạn Lý Trường Thành</p>
            <p class="text-slate-600 font-light leading-relaxed mb-6 grow" style="font-size: 13px;">Khám phá Tử Cấm Thành kỳ vĩ và sải bước trên Vạn Lý Trường Thành huyền thoại.</p>
            <div class="pt-4 mt-auto" style="border-top: 1px solid #e2e8f0;">
              <p class="text-slate-500 leading-relaxed" style="font-size: 11px;"><span class="text-slate-800 font-medium">Hành trình:</span> Cố Cung • Thiên An Môn • Thái Miếu</p>
            </div>
          </div>
        </a>

        <!-- Card 6 -->
        <a href="/tour/tour-trung-quoc-giang-nam" class="group bg-white hover:bg-slate-50 transition-colors flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 snap-center self-stretch" style="flex: 0 0 auto; width: 380px; max-width: 75vw;">
          <div class="relative w-full overflow-hidden bg-slate-100" style="aspect-ratio: 16/9; flex-shrink: 0;">
            <img src="https://media.fittour.vn/uploads/2023/11/tour-giang-nam-fittour.webp" alt="Tour Giang Nam" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" loading="lazy">
            <div class="absolute bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center max-w-[calc(100%-2rem)] shadow-sm" style="top: 1rem; left: 1rem; padding: 6px 12px;">
              <span class="text-brand-600 font-bold uppercase whitespace-nowrap text-ellipsis overflow-hidden block" style="font-size: 9px; letter-spacing: 0.05em; line-height: 1; padding-top: 2px;">Cảnh Quan – Thơ Ca</span>
            </div>
          </div>
          <div class="p-6 flex flex-col grow relative z-10">
            <p class="font-bold uppercase mb-2" style="color: #ea580c; font-size: 10px; letter-spacing: 0.2em;">5N5Đ | Water Towns</p>
            <h3 class="text-slate-800 font-bold mb-2 leading-tight transition-colors" style="font-size: 18px;">Giang Nam – Cổ Trấn</h3>
            <p class="text-slate-500 italic mb-4" style="font-size: 13px;">Hàng Châu • Tô Châu • Ô Trấn</p>
            <p class="text-slate-600 font-light leading-relaxed mb-6 grow" style="font-size: 13px;">Dạo thuyền trên Tây Hồ và lạc vào không gian thơ mộng của những thuỷ trấn đẹp nhất Giang Nam.</p>
            <div class="pt-4 mt-auto" style="border-top: 1px solid #e2e8f0;">
              <p class="text-slate-500 leading-relaxed" style="font-size: 11px;"><span class="text-slate-800 font-medium">Hành trình:</span> Ô Trấn • Tây Hồ • Bến Thượng Hải</p>
            </div>
          </div>
        </a>

        <!-- Card 7 -->
        <a href="/tour/tour-tu-xuyen-8n7d" class="group bg-white hover:bg-slate-50 transition-colors flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 snap-center self-stretch" style="flex: 0 0 auto; width: 380px; max-width: 75vw;">
          <div class="relative w-full overflow-hidden bg-slate-100" style="aspect-ratio: 16/9; flex-shrink: 0;">
            <img src="https://media.fittour.vn/uploads/2024/07/tour-tu-xuyen-8n7d-fittour.webp" alt="Tour Tứ Xuyên" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" loading="lazy">
            <div class="absolute bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center max-w-[calc(100%-2rem)] shadow-sm" style="top: 1rem; left: 1rem; padding: 6px 12px;">
              <span class="text-brand-600 font-bold uppercase whitespace-nowrap text-ellipsis overflow-hidden block" style="font-size: 9px; letter-spacing: 0.05em; line-height: 1; padding-top: 2px;">Tôn Giáo – Ẩm Thực</span>
            </div>
          </div>
          <div class="p-6 flex flex-col grow relative z-10">
            <p class="font-bold uppercase mb-2" style="color: #ea580c; font-size: 10px; letter-spacing: 0.2em;">8N7Đ | Land of Abundance</p>
            <h3 class="text-slate-800 font-bold mb-2 leading-tight transition-colors" style="font-size: 18px;">Tứ Xuyên – Thiên Phủ</h3>
            <p class="text-slate-500 italic mb-4" style="font-size: 13px;">Thành Đô • Lạc Sơn • Nga Mi</p>
            <p class="text-slate-600 font-light leading-relaxed mb-6 grow" style="font-size: 13px;">Chiêm bái Lạc Sơn Đại Phật khổng lồ và ngọn núi Nga Mi linh thiêng giữa biển mây.</p>
            <div class="pt-4 mt-auto" style="border-top: 1px solid #e2e8f0;">
              <p class="text-slate-500 leading-relaxed" style="font-size: 11px;"><span class="text-slate-800 font-medium">Hành trình:</span> Lạc Sơn • Nga Mi Sơn • Thành Đô</p>
            </div>
          </div>
        </a>

        <!-- Card 8 -->
        <a href="/tour/tour-van-nam-mua-xuan" class="group bg-white hover:bg-slate-50 transition-colors flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-slate-200 snap-center self-stretch" style="flex: 0 0 auto; width: 380px; max-width: 75vw;">
          <div class="relative w-full overflow-hidden bg-slate-100" style="aspect-ratio: 16/9; flex-shrink: 0;">
            <img src="https://media.fittour.vn/uploads/2024/01/tour-van-nam-mua-xuan-8n7d-fittour.webp" alt="Tour Vân Nam" class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" loading="lazy">
            <div class="absolute bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center max-w-[calc(100%-2rem)] shadow-sm" style="top: 1rem; left: 1rem; padding: 6px 12px;">
              <span class="text-brand-600 font-bold uppercase whitespace-nowrap text-ellipsis overflow-hidden block" style="font-size: 9px; letter-spacing: 0.05em; line-height: 1; padding-top: 2px;">Cảnh Quan – Văn Hóa</span>
            </div>
          </div>
          <div class="p-6 flex flex-col grow relative z-10">
            <p class="font-bold uppercase mb-2" style="color: #ea580c; font-size: 10px; letter-spacing: 0.2em;">8N7Đ | Spring Blossom</p>
            <h3 class="text-slate-800 font-bold mb-2 leading-tight transition-colors" style="font-size: 18px;">Vân Nam – Mùa Xuân</h3>
            <p class="text-slate-500 italic mb-4" style="font-size: 13px;">Côn Minh • Đại Lý • Lệ Giang</p>
            <p class="text-slate-600 font-light leading-relaxed mb-6 grow" style="font-size: 13px;">Đón mùa xuân rực rỡ nhất tại vùng đất Côn Minh muôn hoa đua nở và hồ Nhĩ Hải xanh biếc.</p>
            <div class="pt-4 mt-auto" style="border-top: 1px solid #e2e8f0;">
              <p class="text-slate-500 leading-relaxed" style="font-size: 11px;"><span class="text-slate-800 font-medium">Hành trình:</span> Côn Minh • Đại Lý • Lệ Giang</p>
            </div>
          </div>
        </a>

      </div>
    </div>
  </div>
</section>


</div> </main>`
  },
  {
    id: 'editorial-scrollytelling-full',
    exampleUrl: '/admin/template-scrollytelling',
    title: 'Template Editorial Scrollytelling (NatGeo)',
    category: 'blog',
    description: 'Bộ khung đầy đủ cho bài viết Editorial (Layout 2 cột, Thanh tổng quan, Highlight boxes). Lấy từ cấu trúc bài Vạn Lý Trường Thành.',
    templateHtml: `<!-- layout: landing -->
<div class="bg-[#F8F9FA] text-[#1E293B] font-sans antialiased selection:bg-[#F7931E] selection:text-white">  <section class="relative w-full min-h-[600px] lg:min-h-[700px] overflow-hidden flex flex-col justify-center pt-32 pb-20"> <div class="absolute inset-0 z-0 bg-slate-950"> <img src="https://media.fittour.vn/uploads/van-ly-truong-thanh-bac-kinh.webp" alt="Vạn Lý Trường Thành Bắc Kinh Trung Quốc" class="w-full h-full object-cover object-center opacity-80" width="1920" height="1080" fetchpriority="high" loading="eager" decoding="async"> <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div> <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div> </div> <div class="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 w-full">  <div class="flex items-center gap-2 text-[13px] text-white/70 font-medium mb-6"> <a href="/" class="hover:text-white transition-colors">Trang chủ</a> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg> <a href="/blog" class="hover:text-white transition-colors">Blog</a> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg> <span class="text-white font-semibold line-clamp-1">Vạn Lý Trường Thành Bắc Kinh</span> </div>  <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-[1.15] drop-shadow-lg max-w-5xl"> TIÊU ĐỀ BÀI VIẾT TẠI ĐÂY (MẪU FULL RICH HTML) </h1> <h2 class="font-serif text-lg sm:text-2xl lg:text-3xl text-amber-400 italic mb-8 max-w-4xl drop-shadow-md font-medium">
Cẩm nang toàn diện chọn đoạn Trường Thành phù hợp nhất với chuyến đi của bạn
</h2> <p class="text-white/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8 hidden md:block drop-shadow-md font-normal">
Vạn Lý Trường Thành là một trong những biểu tượng nổi tiếng nhất của <a href="/country/trung-quoc" class="text-amber-400 hover:text-amber-300 underline underline-offset-4" title="Du lịch Trung Quốc">Trung Quốc</a> và là điểm đến không thể bỏ qua tại Bắc Kinh. Tuy nhiên, một điều nhiều du khách chỉ nhận ra khi lên kế hoạch là <strong>Vạn Lý Trường Thành không phải một điểm tham quan duy nhất</strong>.
</p>  <div class="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-white/80 border-t border-white/20 pt-6 max-w-3xl"> <a href="/huynh-hieu" class="flex items-center gap-3 group"> <img src="https://media.fittour.vn/uploads/huynhhieutravel.webp" alt="Huynh Hieu Travel" width="40" height="40" class="w-10 h-10 rounded-full border-2 border-white/30 object-cover object-top group-hover:border-amber-400 transition-colors"> <span class="font-bold text-white group-hover:text-amber-400 transition-colors flex items-center gap-1"> Huynh Hieu Travel <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> </span> </a> <div class="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg> <span>Xuất bản: 17/08/2026</span> </div> <div class="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg> <span>14 phút đọc</span> </div> </div>  <div class="flex flex-wrap items-center gap-3 mt-8 pt-4"> <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl"> <span class="text-amber-400 text-base">🏛️</span> Di Sản Thế Giới UNESCO
</div> <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl"> <span class="text-amber-400 text-base">🏰</span> 8 Đoạn Hàng Đầu
</div> <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl"> <span class="text-amber-400 text-base">🥾</span> Trekking & Nhiếp Ảnh
</div> <div class="flex items-center gap-2 text-xs sm:text-sm text-white font-medium bg-black/60 backdrop-blur-md px-3.5 py-2 border border-white/10 rounded-lg shadow-xl"> <span class="text-amber-400 text-base">🌙</span> Night Tour
</div> </div> </div> </section>  <div class="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16"> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">  <aside class="hidden lg:block lg:col-span-3 sticky top-24"> <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 overflow-hidden"> <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-amber-500 pl-3 text-sm tracking-wide uppercase">
Mục lục bài viết
</div> <nav class="space-y-1 text-[13.5px] font-medium max-h-[calc(100vh-200px)] overflow-y-auto pr-1"> <a href="#gioi-thieu" class="flex items-center gap-2 text-amber-900 bg-amber-50/80 px-3 py-2 rounded-lg transition-colors font-bold"> <span class="text-amber-600 text-base">🏠</span> Giới thiệu
</a> <div class="pt-1.5 space-y-1 border-l border-slate-200 ml-3 pl-3"> <a href="#chieu-dai-bac-kinh" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]"> Trường Thành Bắc Kinh Dài Bao Nhiêu? </a><a href="#8-doan-hang-dau" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]"> 8 Đoạn Trường Thành Hàng Đầu </a><a href="#mutianyu" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px] border-l border-transparent hover:border-amber-400"> 1. Mutianyu (Mộ Điền Dục) </a><a href="#badaling" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px] border-l border-transparent hover:border-amber-400"> 2. Badaling (Bát Đạt Lĩnh) </a><a href="#juyongguan" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px] border-l border-transparent hover:border-amber-400"> 3. Juyongguan (Cư Dung Quan) </a><a href="#jinshanling" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px] border-l border-transparent hover:border-amber-400"> 4. Jinshanling (Kim Sơn Lĩnh) </a><a href="#huanghuacheng" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px] border-l border-transparent hover:border-amber-400"> 5. Huanghuacheng (Hoàng Hoa Thành) </a><a href="#simatai" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px] border-l border-transparent hover:border-amber-400"> 6. Simatai (Tư Mã Đài) </a><a href="#jiankou" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px] border-l border-transparent hover:border-amber-400"> 7. Jiankou (Tiễn Khấu) </a><a href="#gubeikou" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 pl-2 text-[12.5px] border-l border-transparent hover:border-amber-400"> 8. Gubeikou (Cổ Bắc Khẩu) </a><a href="#nen-chon-doan-nao" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]"> Bảng So Sánh &amp; Gợi Ý Lựa Chọn </a><a href="#badaling-hay-mutianyu" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]"> Badaling Hay Mutianyu: Nên Đi Đâu? </a><a href="#cach-di-den-truong-thanh" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]"> Cách Đi Đến Vạn Lý Trường Thành </a><a href="#ban-do-dinh-huong" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]"> Bản Đồ &amp; 3 Câu Hỏi Định Hướng </a><a href="#nen-di-mua-nao" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]"> Nên Đi Vào Mùa Nào? </a><a href="#chuan-bi-gi" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]"> Đi Trường Thành Cần Chuẩn Bị Gì? </a><a href="#kinh-nghiem-di-som" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]"> Mẹo Quan Trọng: Hãy Đi Thật Sớm </a><a href="#truong-thanh-ban-dem" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]"> Trải Nghiệm Ban Đêm </a><a href="#bao-ton-di-san" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]"> Bảo Tồn Di Sản &amp; Văn Hóa Du Lịch </a><a href="#ket-luan" class="block transition-colors leading-tight py-1.5 text-slate-600 hover:text-amber-800 font-semibold text-[13px]"> Tổng Kết &amp; Lời Khuyên </a> </div> </nav> </div> </aside>  <main class="col-span-1 lg:col-span-6 space-y-10">  <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 flex flex-wrap lg:flex-nowrap items-center justify-between gap-4"> <div class="w-full flex items-center justify-between gap-4 mb-2 lg:hidden"> <span class="font-bold text-slate-900 text-sm border-l-4 border-amber-500 pl-2 uppercase">Tổng Quan Nhanh</span> </div> <div class="flex items-center gap-3 w-[48%] lg:w-auto"> <div class="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 text-xl border border-amber-200/60 shrink-0">📍</div> <div> <div class="text-[11px] text-slate-500 font-medium">Vị trí</div> <div class="text-[13px] font-bold text-slate-900">6 quận Bắc Kinh</div> </div> </div> <div class="hidden lg:block w-px h-8 bg-slate-200"></div> <div class="flex items-center gap-3 w-[48%] lg:w-auto"> <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 text-xl border border-blue-200/60 shrink-0">📏</div> <div> <div class="text-[11px] text-slate-500 font-medium">Chiều dài Bắc Kinh</div> <div class="text-[13px] font-bold text-slate-900">Khoảng 573 km</div> </div> </div> <div class="hidden lg:block w-px h-8 bg-slate-200"></div> <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0"> <div class="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 text-xl border border-emerald-200/60 shrink-0">⏳</div> <div> <div class="text-[11px] text-slate-500 font-medium">Niên đại chính</div> <div class="text-[13px] font-bold text-slate-900">Thời nhà Minh (1368–1644)</div> </div> </div> <div class="hidden lg:block w-px h-8 bg-slate-200"></div> <div class="flex items-center gap-3 w-[48%] lg:w-auto mt-2 lg:mt-0"> <div class="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-700 text-xl border border-rose-200/60 shrink-0">🏆</div> <div> <div class="text-[11px] text-slate-500 font-medium">UNESCO</div> <div class="text-[13px] font-bold text-slate-900">Di sản Thế giới (1987)</div> </div> </div> </div>  <div id="gioi-thieu" class="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-[16px] prose-p:text-slate-700"> <p>
Từ Bắc Kinh, du khách có thể lựa chọn nhiều đoạn Trường Thành với trải nghiệm rất khác nhau. <strong>Badaling</strong> thuận tiện và nổi tiếng, <strong>Mutianyu</strong> cân bằng giữa cảnh quan và khả năng tiếp cận, <strong>Jinshanling</strong> phù hợp với trekking và nhiếp ảnh, trong khi <strong>Simatai</strong> mang đến trải nghiệm đặc biệt về đêm. Xa hơn nữa là <strong>Jiankou</strong> và <strong>Gubeikou</strong>, nơi dành cho những người muốn tìm kiếm cảm giác hoang sơ và thử thách hơn.
</p> <p class="font-medium text-slate-900 text-lg border-l-4 border-amber-500 pl-4 my-5 bg-amber-50/50 py-3 rounded-r-xl">
Vì vậy, câu hỏi không hẳn là <em>“đoạn Vạn Lý Trường Thành nào đẹp nhất?”</em>, mà là <em>“đoạn nào phù hợp nhất với chuyến đi của bạn?”</em> </p> </div>  <div class="bg-amber-50/80 border border-amber-200/90 p-6 md:p-8 rounded-2xl my-8 shadow-sm"> <div class="flex items-center gap-3 mb-4"> <span class="text-2xl">🌟</span> <h3 class="font-serif text-xl font-bold text-slate-900">
Những Con Số Ấn Tượng Về Vạn Lý Trường Thành
</h3> </div> <ul class="space-y-2.5 text-slate-800 text-[15.5px] leading-relaxed list-disc pl-5"> <li><strong>Tổng chiều dài:</strong> Vượt quá 20.000 km trải dài qua nhiều tỉnh thành Trung Quốc.</li> <li><strong>Thời gian xây dựng:</strong> Kéo dài liên tục qua nhiều thế kỷ từ thế kỷ 3 TCN đến thế kỷ 17.</li> <li><strong>Tại Bắc Kinh:</strong> Trải dài 573 km qua 6 quận, bao gồm tường thành, cửa ải, pháo đài và tháp canh cổ.</li> <li><strong>Công nhận toàn cầu:</strong> Được UNESCO ghi danh là Di sản Thế giới từ năm 1987.</li> </ul> </div>  <section id="chieu-dai-bac-kinh" class="scroll-mt-28 space-y-4"> <div class="border-l-4 border-amber-500 pl-4 mb-4"> <h2 class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
Vạn Lý Trường Thành Ở Bắc Kinh Dài Bao Nhiêu?
</h2> </div> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-4"> <p>
Vạn Lý Trường Thành không phải một bức tường được xây dựng trong một thời kỳ duy nhất. Theo UNESCO, hệ thống này được xây dựng liên tục qua nhiều giai đoạn từ khoảng thế kỷ 3 trước Công nguyên đến thế kỷ 17, với tổng chiều dài của toàn bộ hệ thống vượt quá 20.000 km. Phần lớn những gì du khách thường nhìn thấy ngày nay tại Bắc Kinh thuộc các công trình được xây dựng hoặc mở rộng dưới thời nhà Minh (1368–1644).
</p> <p>
Riêng trong phạm vi Bắc Kinh, Vạn Lý Trường Thành trải qua sáu quận gồm <strong>Pinggu, Miyun, Huairou, Changping, Yanqing và Mentougou</strong>, với tổng chiều dài khoảng <strong>573 km</strong>. Dọc tuyến này tồn tại nhiều dạng di tích khác nhau như tường thành, cửa ải, pháo đài, tháp canh và các công trình phòng thủ.
</p> <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6"> <div class="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-2xs"> <div class="text-amber-700 font-bold text-lg">Huairou</div> <div class="text-xs text-slate-600">Mutianyu, Jiankou</div> </div> <div class="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-2xs"> <div class="text-amber-700 font-bold text-lg">Yanqing</div> <div class="text-xs text-slate-600">Badaling</div> </div> <div class="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-2xs"> <div class="text-amber-700 font-bold text-lg">Miyun</div> <div class="text-xs text-slate-600">Simatai, Gubeikou</div> </div> <div class="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-2xs"> <div class="text-amber-700 font-bold text-lg">Changping</div> <div class="text-xs text-slate-600">Juyongguan</div> </div> <div class="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-2xs"> <div class="text-amber-700 font-bold text-lg">Hebei / Giáp ranh</div> <div class="text-xs text-slate-600">Jinshanling</div> </div> <div class="bg-white p-3.5 rounded-xl border border-slate-200 text-center shadow-2xs"> <div class="text-amber-700 font-bold text-lg">Huairou / Hồ</div> <div class="text-xs text-slate-600">Huanghuacheng</div> </div> </div> <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-[14px] text-slate-700 italic">
* Lưu ý: Jinshanling thực chất nằm ở huyện Luanping (tỉnh Hà Bắc), giáp ranh Bắc Kinh. Tuy nhiên, đoạn Trường Thành này thường xuyên được gộp chung vào các tuyến tham quan khởi hành từ Bắc Kinh.
</div> <p>
Điều này cũng giải thích vì sao trải nghiệm ở mỗi đoạn lại khác nhau. Một đoạn được phục dựng hoàn chỉnh có thể phù hợp cho chuyến tham quan gia đình, trong khi một đoạn khác vẫn giữ vẻ hoang sơ và đòi hỏi người đi phải có thể lực tốt.
</p> <p>
Vạn Lý Trường Thành được UNESCO ghi danh là Di sản Thế giới từ năm 1987. Giá trị của công trình không chỉ nằm ở quy mô mà còn ở vai trò lịch sử, quân sự, kiến trúc và văn hóa trong suốt nhiều thế kỷ của Trung Quốc.
</p> </div> </section> <hr class="border-slate-200 my-8">  <section id="8-doan-hang-dau" class="scroll-mt-28 space-y-12"> <div class="border-l-4 border-amber-500 pl-4"> <h2 class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
8 Đoạn Vạn Lý Trường Thành Hàng Đầu Nên Khám Phá Ở Bắc Kinh
</h2> </div> <p class="text-slate-700 text-[15.5px] leading-relaxed">
Không có một bảng xếp hạng tuyệt đối cho tám đoạn dưới đây. Mỗi nơi mang một đặc điểm riêng, và lựa chọn phù hợp sẽ phụ thuộc vào thời gian, thể lực, sở thích cũng như cách du khách muốn trải nghiệm Vạn Lý Trường Thành.
</p>  <div id="mutianyu" class="scroll-mt-28 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5"> <div class="flex items-center gap-3"> <span class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm shrink-0">1</span> <h3 class="font-serif text-xl sm:text-2xl font-bold text-slate-900">
Vạn Lý Trường Thành Mutianyu – Lựa Chọn Cân Bằng Cho Người Lần Đầu
</h3> </div> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-3"> <p>
Mutianyu là một trong những đoạn Vạn Lý Trường Thành nổi tiếng nhất quanh Bắc Kinh và thường được xem là lựa chọn cân bằng giữa cảnh quan, trải nghiệm đi bộ và khả năng tiếp cận.
</p> <p>
Khác với hình dung về một công trình nằm giữa vùng núi khô cằn, Mutianyu được bao quanh bởi những dãy núi phủ cây xanh, đặc biệt đẹp vào mùa xuân và mùa thu. Những bức tường đá chạy theo sống núi, nối tiếp qua các tháp canh tạo nên khung cảnh rất đặc trưng của vùng phía bắc Bắc Kinh.
</p> <p>
Điểm cộng lớn của Mutianyu là du khách không nhất thiết phải leo toàn bộ từ chân núi. Khu vực này có hệ thống cáp treo và các phương tiện hỗ trợ lên xuống (như máng trượt toboggan), giúp người lớn tuổi hoặc những người không muốn dành quá nhiều sức cho việc leo dốc vẫn có thể trải nghiệm phần đẹp của Trường Thành.
</p> <p>
Các trải nghiệm thực tế gần đây trên Reddit cũng thường đánh giá Mutianyu là lựa chọn cân bằng cho người lần đầu: cảnh quan đẹp, có thể đi bộ khá nhiều nhưng không biến cả ngày thành một chuyến trekking quá nặng, đồng thời thường ít áp lực về đám đông hơn Badaling nếu chọn thời điểm phù hợp.
</p> <p>
Tuy nhiên, không nên hiểu rằng Mutianyu lúc nào cũng vắng. Những ngày cuối tuần, kỳ nghỉ hoặc giờ cao điểm vẫn có thể khá đông. Một số du khách gần đây cho biết đến khoảng 7:00 sáng giúp họ có được trải nghiệm rất thoáng, trong khi lượng khách bắt đầu tăng rõ rệt từ khoảng 9:00.
</p> </div> <div class="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-xl text-slate-900 text-[14.5px]"> <strong class="text-amber-900 flex items-center gap-1.5 mb-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> Phù hợp với:
</strong>
Người lần đầu đến Vạn Lý Trường Thành, gia đình, người muốn kết hợp đi bộ và ngắm cảnh, du khách muốn một lựa chọn cân bằng.
</div> </div>  <div id="badaling" class="scroll-mt-28 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5"> <div class="flex items-center gap-3"> <span class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm shrink-0">2</span> <h3 class="font-serif text-xl sm:text-2xl font-bold text-slate-900">
Vạn Lý Trường Thành Badaling – Biểu Tượng Nổi Tiếng Và Dễ Tiếp Cận
</h3> </div> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-3"> <p>
Nếu Mutianyu là lựa chọn cân bằng thì Badaling lại là cái tên mang tính biểu tượng nhất khi nhắc đến Vạn Lý Trường Thành ở Bắc Kinh.
</p> <p>
Badaling nằm cách trung tâm Bắc Kinh khoảng 60 km về phía tây bắc và là một trong những đoạn được phát triển mạnh về cơ sở hạ tầng du lịch. Đây cũng là đoạn Vạn Lý Trường Thành được UNESCO xác định trong hồ sơ Di sản Thế giới.
</p> <p>
Ưu điểm lớn nhất của Badaling là <strong>sự thuận tiện</strong>. Hệ thống giao thông đến đây khá phát triển, cơ sở vật chất hoàn chỉnh và tuyến tham quan tương đối dễ tiếp cận. Vì vậy, đây vẫn là một lựa chọn rất hợp lý cho người lần đầu đến Bắc Kinh, gia đình hoặc những du khách ưu tiên sự thuận tiện hơn trải nghiệm hoang sơ.
</p> <p>
Đổi lại, sự nổi tiếng cũng đồng nghĩa với lượng khách lớn. Những thảo luận du lịch gần đây thường mô tả Badaling là đoạn được phục dựng và phát triển mạnh, đồng thời đông khách hơn Mutianyu hoặc Jinshanling vào những thời điểm cao điểm. Tuy nhiên, điều này không có nghĩa Badaling lúc nào cũng đông. Một số du khách chia sẻ rằng nếu đến sớm vào ngày thường, vẫn có thể tìm được những khu vực khá vắng.
</p> <p>
Một điểm đáng chú ý khác là Badaling hiện không chỉ có trải nghiệm ban ngày. Khu vực này thường xuyên triển khai chương trình tham quan ban đêm theo mùa (từ khoảng mùa xuân đến mùa thu), kết hợp hệ thống chiếu sáng, biểu diễn và các hoạt động tương tác.
</p> </div> <div class="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-xl text-slate-900 text-[14.5px]"> <strong class="text-amber-900 flex items-center gap-1.5 mb-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> Phù hợp với:
</strong>
Người lần đầu đến Bắc Kinh, gia đình, người ưu tiên giao thông thuận tiện và cơ sở vật chất đầy đủ.
</div> </div>  <div id="juyongguan" class="scroll-mt-28 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5"> <div class="flex items-center gap-3"> <span class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm shrink-0">3</span> <h3 class="font-serif text-xl sm:text-2xl font-bold text-slate-900">
Vạn Lý Trường Thành Juyongguan – Cửa Ải Lịch Sử Gần Bắc Kinh
</h3> </div> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-3"> <p>
Juyongguan, hay Cư Dung Quan, không đơn thuần là một đoạn tường thành. Đây là một cửa ải quân sự quan trọng trong hệ thống phòng thủ phía bắc Trung Quốc và mang đến một góc nhìn khác về cách Vạn Lý Trường Thành kết hợp với địa hình và kiến trúc quân sự.
</p> <p>
Nếu Mutianyu gây ấn tượng bởi những dãy núi nối tiếp nhau, Juyongguan lại nổi bật với không gian cửa ải, tường thành bao quanh thung lũng cùng các công trình kiến trúc lịch sử.
</p> <p>
Đây cũng là lựa chọn đáng cân nhắc nếu du khách quan tâm nhiều đến lịch sử và kiến trúc hơn là một chuyến trekking dài.
</p> <p>
Juyongguan cũng thường được đưa vào các chương trình du lịch ban đêm và hoạt động văn hóa theo mùa của Bắc Kinh. Thành phố từng tổ chức các lễ hội và sự kiện lấy cảm hứng từ văn hóa thời Minh tại đây, kết hợp không gian cửa ải với các hoạt động tương tác.
</p> </div> <div class="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-xl text-slate-900 text-[14.5px]"> <strong class="text-amber-900 flex items-center gap-1.5 mb-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> Phù hợp với:
</strong>
Du khách yêu thích lịch sử, kiến trúc, cửa ải cổ và muốn kết hợp tham quan với các điểm khác quanh Bắc Kinh.
</div> </div>  <div id="jinshanling" class="scroll-mt-28 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5"> <div class="flex items-center gap-3"> <span class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm shrink-0">4</span> <h3 class="font-serif text-xl sm:text-2xl font-bold text-slate-900">
Vạn Lý Trường Thành Jinshanling – Dành Cho Trekking Và Nhiếp Ảnh
</h3> </div> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-3"> <p>
Nếu Mutianyu là lựa chọn cân bằng thì Jinshanling lại nghiêng nhiều hơn về trải nghiệm đi bộ và cảnh quan.
</p> <p>
Jinshanling nổi tiếng với những dãy núi uốn lượn, các tháp canh nối tiếp nhau và những đoạn tường chạy xa về phía đường chân trời. Chính sự kết hợp giữa công trình cổ và địa hình núi khiến nơi đây trở thành một trong những địa điểm được yêu thích bởi những người chụp ảnh và trekking.
</p> <p>
Chính quyền Bắc Kinh cũng giới thiệu Jinshanling như một điểm đến nổi tiếng với nhiếp ảnh, đặc biệt vào mùa thu khi màu sắc của núi rừng tạo nên sự tương phản rõ rệt với tường thành cổ.
</p> <p>
Cộng đồng du lịch cũng thường nhắc đến Jinshanling khi so sánh với Mutianyu và Badaling. Điểm hấp dẫn nhất là cảm giác yên tĩnh và ít tính đô thị hơn, nhưng cái giá phải trả là thời gian di chuyển dài hơn. Một số du khách cho biết hành trình từ Bắc Kinh có thể mất khoảng 2–2,5 giờ mỗi chiều tùy phương tiện và giao thông.
</p> <p>
Vì vậy, Jinshanling không phải lựa chọn lý tưởng nếu lịch trình Bắc Kinh chỉ có một ngày và du khách muốn dành phần lớn thời gian cho trung tâm thành phố. Nhưng nếu mục tiêu chính của ngày hôm đó là <strong>thực sự đi bộ trên Vạn Lý Trường Thành</strong>, Jinshanling rất đáng cân nhắc.
</p> </div> <div class="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-xl text-slate-900 text-[14.5px]"> <strong class="text-amber-900 flex items-center gap-1.5 mb-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> Phù hợp với:
</strong>
Người thích trekking, nhiếp ảnh, thiên nhiên và muốn tránh không khí quá đông đúc.
</div> </div>  <div id="huanghuacheng" class="scroll-mt-28 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5"> <div class="flex items-center gap-3"> <span class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm shrink-0">5</span> <h3 class="font-serif text-xl sm:text-2xl font-bold text-slate-900">
Vạn Lý Trường Thành Huanghuacheng – Trường Thành Bên Hồ
</h3> </div> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-3"> <p>
Huanghuacheng mang đến một hình ảnh khác biệt so với phần lớn những đoạn Trường Thành nổi tiếng quanh Bắc Kinh.
</p> <p>
Tại đây, hồ nước bao quanh và chia cắt các đoạn tường thành, tạo nên sự kết hợp độc đáo giữa công trình phòng thủ cổ đại và cảnh quan mặt nước. Khung cảnh này khiến Huanghuacheng thường được nhắc đến với tên gọi <em>“Vạn Lý Trường Thành bên hồ” (Great Wall by the Lake)</em>.
</p> <p>
Đây là lựa chọn thú vị cho những du khách đã từng xem các hình ảnh quen thuộc của Badaling hoặc Mutianyu và muốn tìm một khung cảnh khác.
</p> <p>
Tuy nhiên, Huanghuacheng không nên được xem đơn giản là “một Badaling thứ hai”. Trải nghiệm ở đây thiên về cảnh quan và thiên nhiên hơn, và việc lựa chọn cung đường cần dựa vào thời gian cũng như điều kiện thực tế của khu vực.
</p> </div> <div class="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-xl text-slate-900 text-[14.5px]"> <strong class="text-amber-900 flex items-center gap-1.5 mb-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> Phù hợp với:
</strong>
Người yêu thiên nhiên, nhiếp ảnh, muốn kết hợp núi – hồ – Trường Thành trong cùng một trải nghiệm.
</div> </div>  <div id="simatai" class="scroll-mt-28 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5"> <div class="flex items-center gap-3"> <span class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm shrink-0">6</span> <h3 class="font-serif text-xl sm:text-2xl font-bold text-slate-900">
Vạn Lý Trường Thành Simatai – Vẻ Nguyên Bản Và Trải Nghiệm Ban Đêm
</h3> </div> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-3"> <p>
Simatai nằm tại Miyun, phía đông bắc Bắc Kinh và nổi tiếng với địa hình dốc, những đoạn tường nằm trên các sống núi cùng nhiều công trình mang đặc trưng thời Minh.
</p> <p>
Một trong những điểm đặc biệt của Simatai là mức độ bảo tồn các đặc điểm công sự thời Minh. Chính quyền Bắc Kinh từng mô tả đây là đoạn giữ lại tương đối đầy đủ những đặc trưng nguyên bản của công trình phòng thủ thời Minh.
</p> <p>
Simatai cũng có mối liên hệ rất chặt với Gubei Water Town (Cổ Bắc Thủy Trấn), tạo thành một tuyến trải nghiệm đặc biệt: ban ngày khám phá Trường Thành, sau đó trở về thị trấn cổ dưới chân núi để nghỉ ngơi và tiếp tục trải nghiệm không gian về đêm.
</p> <p>
Đặc biệt, Simatai là một trong những địa điểm nổi tiếng nhất ở Bắc Kinh về trải nghiệm Vạn Lý Trường Thành ban đêm. Chính quyền Bắc Kinh hiện vẫn giới thiệu các chương trình night tour tại đây, trong đó có những tuyến tham quan bằng cáp treo và khu vực được chiếu sáng sau khi trời tối.
</p> <p>
Nếu du khách muốn kết hợp Vạn Lý Trường Thành với một đêm nghỉ ở ngoại ô Bắc Kinh, Simatai và Gubei Water Town là một lựa chọn rất đáng cân nhắc.
</p> </div> <div class="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-xl text-slate-900 text-[14.5px]"> <strong class="text-amber-900 flex items-center gap-1.5 mb-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> Phù hợp với:
</strong>
Người thích trải nghiệm khác biệt, muốn tham quan Trường Thành ban đêm hoặc muốn kết hợp Trường Thành với Gubei Water Town.
</div> </div>  <div id="jiankou" class="scroll-mt-28 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5"> <div class="flex items-center gap-3"> <span class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm shrink-0">7</span> <h3 class="font-serif text-xl sm:text-2xl font-bold text-slate-900">
Vạn Lý Trường Thành Jiankou – Dành Cho Người Thích Thử Thách
</h3> </div> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-3"> <p>
Jiankou là một trong những đoạn có địa hình gồ ghề và dốc nhất trong khu vực Bắc Kinh, nổi tiếng với hình dáng tường thành chạy trên những sống núi hiểm trở.
</p> <p>
Khác với Badaling hay Mutianyu, Jiankou không phải lựa chọn dành cho một chuyến tham quan nhẹ nhàng. Những đoạn dốc, bậc đá và địa hình chưa được phát triển theo hướng du lịch đại chúng khiến nơi đây phù hợp hơn với người có kinh nghiệm trekking và chuẩn bị thể lực tốt.
</p> <p>
Đây cũng là nơi cần đặc biệt chú ý đến vấn đề an toàn. Không nên tự ý đi vào những khu vực bị đóng hoặc những đoạn chưa được phép tham quan chỉ để tìm kiếm hình ảnh “Trường Thành hoang dã”.
</p> <p>
Các dự án bảo tồn Jiankou vẫn đang được triển khai. Chính quyền Bắc Kinh cho biết dự án sửa chữa Jiankou đã được tiến hành theo nhiều giai đoạn trong khuôn khổ chương trình bảo vệ Vạn Lý Trường Thành.
</p> </div> <div class="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-xl text-slate-900 text-[14.5px]"> <strong class="text-amber-900 flex items-center gap-1.5 mb-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> Phù hợp với:
</strong>
Người có kinh nghiệm trekking, thể lực tốt và muốn tìm trải nghiệm thử thách.
</div> </div>  <div id="gubeikou" class="scroll-mt-28 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-5"> <div class="flex items-center gap-3"> <span class="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm shrink-0">8</span> <h3 class="font-serif text-xl sm:text-2xl font-bold text-slate-900">
Vạn Lý Trường Thành Gubeikou – Không Gian Hoang Sơ Và Lịch Sử Quân Sự
</h3> </div> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-3"> <p>
Gubeikou là một khu vực có vị trí chiến lược quan trọng trong lịch sử phòng thủ phía bắc Bắc Kinh. Không gian nơi đây khác khá xa những khu vực được phát triển mạnh cho khách du lịch như Badaling.
</p> <p>
Gubeikou thường được lựa chọn bởi những người thích hiking và muốn cảm nhận một phần Trường Thành ít mang tính “khu du lịch” hơn.
</p> <p>
Một trong những điểm hấp dẫn là khả năng kết hợp Gubeikou với các tuyến trekking dài hơn, trong đó Jinshanling thường được nhắc đến như một phần của những hành trình khám phá Trường Thành ở khu vực phía đông bắc Bắc Kinh.
</p> <p>
Tuy nhiên, “hoang sơ” không đồng nghĩa với “dễ đi”. Du khách cần kiểm tra tình trạng tuyến đường, khu vực được phép tham quan và điều kiện thời tiết trước khi lên đường.
</p> </div> <div class="bg-amber-50/80 border-l-4 border-amber-500 p-4 rounded-r-xl text-slate-900 text-[14.5px]"> <strong class="text-amber-900 flex items-center gap-1.5 mb-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check" aria-hidden="true"><path d="M20 6 9 17l-5-5"></path></svg> Phù hợp với:
</strong>
Người thích hiking, lịch sử quân sự và những đoạn Trường Thành ít phát triển du lịch đại chúng.
</div> </div> </section> <hr class="border-slate-200 my-8">  <section id="nen-chon-doan-nao" class="scroll-mt-28 space-y-6"> <div class="border-l-4 border-amber-500 pl-4"> <h2 class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
Nên Chọn Đoạn Vạn Lý Trường Thành Nào?
</h2> </div> <p class="text-slate-700 text-[15.5px] leading-relaxed">
Nếu chỉ có một ngày ở Bắc Kinh, không nhất thiết phải cố gắng đi thật nhiều đoạn Trường Thành. Trải nghiệm tốt thường đến từ việc chọn <strong>một đoạn phù hợp</strong>, dành đủ thời gian để đi bộ, ngắm cảnh và cảm nhận không gian.
</p>  <div class="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white"> <table class="w-full text-left text-[14.5px] border-collapse"> <thead> <tr class="bg-slate-900 text-white"> <th class="py-3.5 px-4 font-bold border-b border-slate-800">Bạn muốn trải nghiệm</th> <th class="py-3.5 px-4 font-bold border-b border-slate-800">Nên cân nhắc</th> </tr> </thead> <tbody class="divide-y divide-slate-100 text-slate-700"> <tr class="hover:bg-amber-50/50 transition-colors"> <td class="py-3 px-4 font-medium">Lần đầu đến Vạn Lý Trường Thành</td> <td class="py-3 px-4 font-bold text-amber-800">Mutianyu</td> </tr> <tr class="hover:bg-amber-50/50 transition-colors bg-slate-50/50"> <td class="py-3 px-4 font-medium">Ưu tiên thuận tiện, dễ đi</td> <td class="py-3 px-4 font-bold text-amber-800">Badaling</td> </tr> <tr class="hover:bg-amber-50/50 transition-colors"> <td class="py-3 px-4 font-medium">Đi cùng gia đình</td> <td class="py-3 px-4 font-bold text-amber-800">Mutianyu / Badaling</td> </tr> <tr class="hover:bg-amber-50/50 transition-colors bg-slate-50/50"> <td class="py-3 px-4 font-medium">Muốn cảnh núi đẹp và cân bằng thời gian</td> <td class="py-3 px-4 font-bold text-amber-800">Mutianyu</td> </tr> <tr class="hover:bg-amber-50/50 transition-colors"> <td class="py-3 px-4 font-medium">Thích trekking và nhiếp ảnh</td> <td class="py-3 px-4 font-bold text-amber-800">Jinshanling</td> </tr> <tr class="hover:bg-amber-50/50 transition-colors bg-slate-50/50"> <td class="py-3 px-4 font-medium">Muốn không gian yên tĩnh hơn</td> <td class="py-3 px-4 font-bold text-amber-800">Jinshanling / Gubeikou</td> </tr> <tr class="hover:bg-amber-50/50 transition-colors"> <td class="py-3 px-4 font-medium">Muốn trải nghiệm ban đêm</td> <td class="py-3 px-4 font-bold text-amber-800">Simatai / Badaling / Mutianyu tùy mùa</td> </tr> <tr class="hover:bg-amber-50/50 transition-colors bg-slate-50/50"> <td class="py-3 px-4 font-medium">Muốn kết hợp Trường Thành với hồ</td> <td class="py-3 px-4 font-bold text-amber-800">Huanghuacheng</td> </tr> <tr class="hover:bg-amber-50/50 transition-colors"> <td class="py-3 px-4 font-medium">Thích lịch sử cửa ải quân sự</td> <td class="py-3 px-4 font-bold text-amber-800">Juyongguan</td> </tr> <tr class="hover:bg-amber-50/50 transition-colors bg-slate-50/50"> <td class="py-3 px-4 font-medium">Muốn trekking thử thách hiểm trở</td> <td class="py-3 px-4 font-bold text-amber-800">Jiankou</td> </tr> <tr class="hover:bg-amber-50/50 transition-colors"> <td class="py-3 px-4 font-medium">Muốn kết hợp Trường Thành với thị trấn cổ</td> <td class="py-3 px-4 font-bold text-amber-800">Simatai + Gubei Water Town</td> </tr> </tbody> </table> </div> <p class="text-slate-700 text-[15.5px] leading-relaxed">
Nhìn từ những trải nghiệm thực tế gần đây, <strong>Mutianyu thường là lựa chọn cân bằng nhất cho người lần đầu</strong>. Một số du khách trên Reddit gọi đây là sự kết hợp tốt giữa cảnh quan và khả năng tiếp cận, trong khi Jinshanling phù hợp hơn với người chấp nhận dành nhiều thời gian di chuyển để đổi lấy trải nghiệm trekking yên tĩnh hơn.
</p> </section> <hr class="border-slate-200 my-8">  <section id="badaling-hay-mutianyu" class="scroll-mt-28 space-y-6"> <div class="border-l-4 border-amber-500 pl-4"> <h2 class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
Badaling Hay Mutianyu: Nên Đi Đâu?
</h2> </div> <p class="text-slate-700 text-[15.5px] leading-relaxed">
Đây có lẽ là câu hỏi phổ biến nhất khi lên kế hoạch cho Vạn Lý Trường Thành ở Bắc Kinh.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6"> <div class="bg-white p-6 rounded-2xl border-2 border-slate-200 hover:border-amber-400 transition-colors shadow-2xs space-y-3"> <div class="inline-block px-3 py-1 bg-slate-100 text-slate-800 font-bold text-xs rounded-full uppercase">Biểu tượng & Dễ đi</div> <h3 class="font-serif text-xl font-bold text-slate-900">Chọn Badaling nếu...</h3> <p class="text-slate-600 text-[14.5px] leading-relaxed">
Ưu tiên sự thuận tiện. Đây là một trong những đoạn nổi tiếng nhất, có giao thông tốt, cơ sở vật chất đầy đủ và phù hợp với những người muốn trải nghiệm biểu tượng nổi tiếng nhất của Vạn Lý Trường Thành.
</p> </div> <div class="bg-amber-50/60 p-6 rounded-2xl border-2 border-amber-300 hover:border-amber-500 transition-colors shadow-2xs space-y-3"> <div class="inline-block px-3 py-1 bg-amber-600 text-white font-bold text-xs rounded-full uppercase">Cảnh quan & Cân bằng</div> <h3 class="font-serif text-xl font-bold text-slate-900">Chọn Mutianyu nếu...</h3> <p class="text-slate-700 text-[14.5px] leading-relaxed">
Muốn cân bằng giữa cảnh quan và trải nghiệm. Mutianyu có những tuyến đi bộ đẹp, nhiều góc nhìn ra núi xanh và hệ thống hỗ trợ như cáp treo, máng trượt, phù hợp với hầu hết nhóm du khách.
</p> </div> </div> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-3"> <p>
Điều quan trọng là không nên đánh giá hai nơi chỉ bằng mức độ đông khách. Một số du khách gần đây cho rằng Badaling vẫn rất đáng đi vì quy mô và cảm giác hoành tráng, trong khi Mutianyu mang lại trải nghiệm thoải mái hơn. Trải nghiệm thực tế cũng thay đổi rất nhiều theo ngày và giờ tham quan.
</p> <div class="p-4 bg-slate-900 text-white rounded-xl space-y-1"> <div class="text-amber-400 font-bold text-sm uppercase tracking-wide">💡 Tóm Tắt Lựa Chọn Nhanh:</div> <p class="text-slate-200 text-sm"><strong>Mutianyu:</strong> nếu muốn trải nghiệm cân bằng & cảnh quan thiên nhiên.</p> <p class="text-slate-200 text-sm"><strong>Badaling:</strong> nếu ưu tiên sự thuận tiện và biểu tượng nổi tiếng thế giới.</p> </div> </div> </section> <hr class="border-slate-200 my-8">  <section id="cach-di-den-truong-thanh" class="scroll-mt-28 space-y-6"> <div class="border-l-4 border-amber-500 pl-4"> <h2 class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
Cách Đi Đến Vạn Lý Trường Thành Từ Bắc Kinh
</h2> </div> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-4"> <p>
Các đoạn Vạn Lý Trường Thành nằm cách trung tâm Bắc Kinh khá xa và thời gian di chuyển phụ thuộc rất nhiều vào đoạn được chọn, phương tiện và tình trạng giao thông.
</p> <p>
Đây cũng là lý do không nên chỉ nhìn bản đồ và chọn nơi “gần nhất”. Như nhiều du khách chia sẻ trên Reddit, khoảng cách địa lý không phản ánh đầy đủ thời gian và độ phức tạp của hành trình. Một đoạn xa hơn có thể phù hợp hơn nếu mục tiêu là trekking, trong khi một đoạn gần hơn có thể giúp tiết kiệm nửa ngày cho những điểm tham quan khác ở Bắc Kinh.
</p> </div>  <div class="overflow-x-auto my-6"> <table class="w-full text-[14.5px] text-slate-700 text-left border-collapse bg-white rounded-xl overflow-hidden shadow-2xs border border-slate-200"> <thead class="bg-slate-100 text-slate-900"> <tr> <th class="py-3 px-4 font-bold border-b border-slate-200">Đoạn Trường Thành</th> <th class="py-3 px-4 font-bold border-b border-slate-200">Khoảng cách từ trung tâm</th> <th class="py-3 px-4 font-bold border-b border-slate-200">Thời gian di chuyển ước tính (1 chiều)</th> </tr> </thead> <tbody class="divide-y divide-slate-100"> <tr class="hover:bg-slate-50 transition-colors"> <td class="py-3 px-4 font-bold text-amber-800">Badaling / Juyongguan</td> <td class="py-3 px-4">~ 60 - 70 km</td> <td class="py-3 px-4">1.5 - 2 giờ</td> </tr> <tr class="hover:bg-slate-50 transition-colors bg-slate-50/50"> <td class="py-3 px-4 font-bold text-amber-800">Mutianyu / Huanghuacheng</td> <td class="py-3 px-4">~ 75 - 80 km</td> <td class="py-3 px-4">1.5 - 2 giờ</td> </tr> <tr class="hover:bg-slate-50 transition-colors"> <td class="py-3 px-4 font-bold text-amber-800">Jiankou</td> <td class="py-3 px-4">~ 80 km</td> <td class="py-3 px-4">2 - 2.5 giờ</td> </tr> <tr class="hover:bg-slate-50 transition-colors bg-slate-50/50"> <td class="py-3 px-4 font-bold text-amber-800">Simatai / Gubeikou / Jinshanling</td> <td class="py-3 px-4">~ 120 - 130 km</td> <td class="py-3 px-4">2.5 - 3 giờ</td> </tr> </tbody> </table> <div class="text-[13px] text-slate-500 mt-2 italic">* Thời gian mang tính tham khảo và có thể thay đổi tùy thuộc vào phương tiện cũng như tình trạng kẹt xe tại Bắc Kinh.</div> </div> <div class="space-y-4"> <div class="bg-white p-5 rounded-xl border border-slate-200 space-y-2"> <h3 class="font-serif text-lg font-bold text-slate-900 flex items-center gap-2"> <span class="text-amber-600">🚆</span> Đi Tự Túc (Tàu, Xe Buýt, Taxi)
</h3> <p class="text-slate-600 text-[14.5px] leading-relaxed">
Du khách có thể kết hợp tàu cao tốc (từ ga Bắc Kinh Bắc đi Badaling), xe buýt du lịch, taxi hoặc các ứng dụng gọi xe như Didi (nên tham khảo trước <a href="/ung-dung-can-cai-truoc-khi-du-lich-trung-quoc" class="text-brand-700 hover:text-brand-800 font-semibold underline underline-offset-2">các ứng dụng cần cài khi du lịch Trung Quốc</a>) tùy từng đoạn. Badaling và Mutianyu là hai lựa chọn thuận tiện nhất nếu đi độc lập. Với Jinshanling, Gubeikou hoặc Jiankou, việc thuê xe riêng hoặc đi theo <a href="/tour/tour-bac-kinh-tu-ha-noi" class="text-brand-700 hover:text-brand-800 font-semibold underline underline-offset-2">tour Bắc Kinh từ Hà Nội</a> thường giúp đơn giản hóa hành trình hơn, đặc biệt khi muốn bắt đầu trekking ở một điểm và kết thúc ở một điểm khác.
</p> </div> <div class="bg-white p-5 rounded-xl border border-slate-200 space-y-2"> <h3 class="font-serif text-lg font-bold text-slate-900 flex items-center gap-2"> <span class="text-amber-600">🚐</span> Đi Theo Tour Hoặc Thuê Xe Riêng
</h3> <p class="text-slate-600 text-[14.5px] leading-relaxed">
Đây thường là lựa chọn hợp lý nếu nhóm có người lớn tuổi, gia đình có trẻ nhỏ hoặc muốn tối ưu thời gian. Ưu điểm không chỉ nằm ở việc có phương tiện đưa đón tận nơi mà còn ở khả năng chủ động thời gian. Một số tuyến như Jinshanling có thể mất phần lớn một ngày chỉ cho việc di chuyển và trekking, vì vậy việc có xe chờ sẵn giúp hành trình nhẹ nhàng hơn rất nhiều.
</p> </div> <div class="bg-amber-50/70 p-5 rounded-xl border border-amber-200/80 space-y-2"> <h3 class="font-serif text-lg font-bold text-amber-900 flex items-center gap-2"> <span class="text-amber-700">⚠️</span> Không Nên Xếp Quá Nhiều Đoạn Trong Một Ngày
</h3> <p class="text-slate-800 text-[14.5px] leading-relaxed">
Có du khách đã thử kết hợp Mutianyu, Jinshanling, Gubei và Simatai trong cùng một ngày. Lịch trình về mặt lý thuyết có thể thực hiện được nếu bắt đầu rất sớm, nhưng thực tế cực kỳ căng và không phù hợp với phần lớn du khách. Nếu mục tiêu là trải nghiệm Vạn Lý Trường Thành một cách trọn vẹn, <strong>một ngày dành cho một đoạn chính thường hợp lý hơn</strong>.
</p> </div> </div> </section> <hr class="border-slate-200 my-8">  <section id="ban-do-dinh-huong" class="scroll-mt-28 space-y-6"> <div class="border-l-4 border-amber-500 pl-4"> <h2 class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
Bản Đồ Vạn Lý Trường Thành Bắc Kinh
</h2> </div> <figure class="my-6"> <img src="https://media.fittour.vn/uploads/ban-do-du-lich-van-ly-truong-thanh.webp" alt="Bản Đồ Vạn Lý Trường Thành Bắc Kinh" class="w-full h-auto rounded-xl shadow-sm border border-slate-200" width="1280" height="720" loading="lazy"> <figcaption class="text-center text-sm text-slate-500 mt-3 italic">Bản đồ vị trí các đoạn Vạn Lý Trường Thành chính quanh Bắc Kinh</figcaption> </figure> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-3"> <p>
Vạn Lý Trường Thành ở Bắc Kinh không chạy qua một tuyến duy nhất gần trung tâm thành phố. Các đoạn nổi tiếng nằm rải rác ở phía bắc và phía đông bắc, chủ yếu trong các khu vực như Yanqing, Changping, Huairou và Miyun.
</p> <p>
Vì vậy, khi xem bản đồ, nên xác định trước <strong>ba yếu tố quan trọng</strong>:
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-3 gap-4"> <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs text-center space-y-2"> <div class="text-3xl">📍</div> <div class="font-bold text-slate-900 text-[15px]">Bạn đang ở đâu?</div> <div class="text-xs text-slate-500">Vị trí khách sạn tại trung tâm hay ngoại ô Bắc Kinh</div> </div> <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs text-center space-y-2"> <div class="text-3xl">⏱️</div> <div class="font-bold text-slate-900 text-[15px]">Bao nhiêu thời gian?</div> <div class="text-xs text-slate-500">Nửa ngày, trọn 1 ngày hay kết hợp qua đêm ở Gubei</div> </div> <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs text-center space-y-2"> <div class="text-3xl">🥾</div> <div class="font-bold text-slate-900 text-[15px]">Tham quan hay Trekking?</div> <div class="text-xs text-slate-500">Đi dạo ngắm cảnh nhẹ nhàng hay chinh phục dốc đứng</div> </div> </div> <p class="text-slate-600 text-sm italic">
* Ba câu hỏi này sẽ giúp bạn lựa chọn đoạn phù hợp hơn nhiều so với việc chỉ tìm kiếm chung chung “Great Wall near me”.
</p> </section> <hr class="border-slate-200 my-8">  <section id="nen-di-mua-nao" class="scroll-mt-28 space-y-6"> <div class="border-l-4 border-amber-500 pl-4"> <h2 class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
Nên Đi Vạn Lý Trường Thành Vào Mùa Nào?
</h2> </div> <p class="text-slate-700 text-[15.5px] leading-relaxed">
Mỗi mùa mang đến một diện mạo hoàn toàn khác biệt cho Vạn Lý Trường Thành:
</p> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> <div class="bg-white p-5 rounded-xl border border-slate-200 space-y-2"> <div class="flex items-center gap-2 font-bold text-emerald-800 text-base"> <span>🌸</span> Mùa Xuân (Tháng 3 - Tháng 5)
</div> <p class="text-slate-600 text-sm leading-relaxed">
Thời tiết dễ chịu, cảnh núi bắt đầu đâm chồi xanh mướt và hoa nở rực rỡ quanh Mutianyu. Đây là khoảng thời gian lý tưởng cho những chuyến đi bộ dài ngoài trời.
</p> </div> <div class="bg-white p-5 rounded-xl border border-slate-200 space-y-2"> <div class="flex items-center gap-2 font-bold text-amber-800 text-base"> <span>☀️</span> Mùa Hè (Tháng 6 - Tháng 8)
</div> <p class="text-slate-600 text-sm leading-relaxed">
Cảnh quan xanh tươi tốt nhất nhưng nhiệt độ khá cao, ít bóng râm trên sống núi. Nên ưu tiên đi từ sáng sớm, chuẩn bị đủ nước, mũ rộng vành và kem chống nắng.
</p> </div> <div class="bg-amber-50/60 p-5 rounded-xl border border-amber-200 space-y-2"> <div class="flex items-center gap-2 font-bold text-amber-900 text-base"> <span>🍁</span> Mùa Thu (Tháng 9 - Tháng 11) - Được Yêu Thích Nhất
</div> <p class="text-slate-700 text-sm leading-relaxed">
Mùa thu thường được nhiều người yêu thích vì thời tiết mát mẻ và màu sắc rực rỡ, đặc biệt tại Jinshanling và Mutianyu. Bầu trời xanh trong vắt và rừng cây chuyển màu tạo nên khung cảnh rất ngoạn mục.
</p> </div> <div class="bg-white p-5 rounded-xl border border-slate-200 space-y-2"> <div class="flex items-center gap-2 font-bold text-blue-800 text-base"> <span>❄️</span> Mùa Đông (Tháng 12 - Tháng 2)
</div> <p class="text-slate-600 text-sm leading-relaxed">
Lượng khách thấp nhất năm, cảnh sắc kỳ vĩ khi có tuyết phủ trắng xóa. Tuy nhiên nhiệt độ xuống rất thấp và gió mạnh trên các tháp canh, cần mặc đồ ấm chuyên dụng.
</p> </div> </div> <p class="text-slate-700 text-[15.5px] leading-relaxed">
Không có một mùa duy nhất phù hợp với tất cả mọi người. Nếu ưu tiên <strong>cảnh sắc</strong>, mùa thu là lựa chọn rất đáng cân nhắc; nếu ưu tiên <strong>không gian yên tĩnh</strong>, mùa đông hoặc những ngày thường có thể hấp dẫn hơn.
</p> </section> <hr class="border-slate-200 my-8">  <section id="chuan-bi-gi" class="scroll-mt-28 space-y-6"> <div class="border-l-4 border-amber-500 pl-4"> <h2 class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
Đi Vạn Lý Trường Thành Cần Chuẩn Bị Gì?
</h2> </div> <p class="text-slate-700 text-[15.5px] leading-relaxed">
Vạn Lý Trường Thành đẹp trên ảnh, nhưng trải nghiệm thực tế đòi hỏi nhiều sức lực hơn những gì du khách có thể hình dung:
</p> <div class="space-y-3 text-[15px] text-slate-700"> <div class="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200"> <span class="text-xl">👟</span> <div> <strong class="text-slate-900">Giày có độ bám tốt:</strong> Nhiều đoạn có bậc đá dốc đứng và độ mòn qua hàng thế kỷ khiến bề mặt trơn trượt, đặc biệt ở các đoạn trekking như Jinshanling, Jiankou.
</div> </div> <div class="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200"> <span class="text-xl">💧</span> <div> <strong class="text-slate-900">Nước uống & đồ ăn nhẹ:</strong> Mang theo đủ nước, nhất là vào mùa hè. Không nên phụ thuộc hoàn toàn vào các quầy bán nước dọc tuyến vì giá cao và ít điểm bán ở các đoạn xa.
</div> </div> <div class="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200"> <span class="text-xl">🧢</span> <div> <strong class="text-slate-900">Chống nắng:</strong> Kem chống nắng, mũ và kính râm là vật bất ly thân vì trên đỉnh các bức tường thành hầu như không có bóng râm che chắn.
</div> </div> <div class="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200"> <span class="text-xl">🧥</span> <div> <strong class="text-slate-900">Trang phục mùa đông:</strong> Chú ý đến gió và nhiệt độ. Nhiệt độ và gió trên các đoạn tường thành cao thường khắc nghiệt hơn ở trung tâm Bắc Kinh, đặc biệt là vào mùa đông.
</div> </div> <div class="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-200"> <span class="text-xl">🧗</span> <div> <strong class="text-slate-900">Đừng đánh giá độ khó dựa trên quãng đường:</strong> Nhiều đoạn đá dốc liên tục có thể khiến bạn mệt hơn đáng kể so với việc đi bộ cùng một quãng đường trên địa hình bằng phẳng.
</div> </div> </div> </section> <hr class="border-slate-200 my-8">  <section id="kinh-nghiem-di-som" class="scroll-mt-28"> <div class="bg-gradient-to-br from-amber-50 via-white to-amber-50/50 p-6 md:p-8 rounded-2xl border border-amber-200/90 shadow-sm space-y-4"> <div class="flex items-center gap-3"> <span class="text-3xl">⏰</span> <h2 class="font-serif text-2xl font-bold text-slate-900">
Một Kinh Nghiệm Quan Trọng: Hãy Đi Thật Sớm
</h2> </div> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-3"> <p>
Nếu chỉ có thể chọn một mẹo khi đi Vạn Lý Trường Thành, đó là <strong>đến thật sớm</strong>.
</p> <p>
Các trải nghiệm thực tế được chia sẻ gần đây cho thấy lượng khách có thể thay đổi đáng kể chỉ trong vài giờ. Một du khách đi Mutianyu gần đây cho biết họ đến khoảng <strong>7:00 sáng</strong> và gần như là những người đầu tiên bước lên tường thành, trong khi lượng khách bắt đầu tăng dồn dập từ khoảng 9:00.
</p> <p>
Trong dịp lễ, sự khác biệt còn rõ hơn. Một trải nghiệm được ghi nhận vào dịp Tết Nguyên đán cho thấy khoảng 8:00 sáng vẫn khá thoáng đãng, nhưng sau 10:00 lượng khách tăng mạnh và các lối bậc thang bắt đầu chen chúc.
</p> <p class="font-medium text-amber-900 bg-amber-100/60 p-3.5 rounded-xl">
👉 Công thức vàng để có ảnh đẹp không dính người: <strong>Ngày thường trong tuần + Khởi hành từ 6:00 - 6:30 sáng</strong>.
</p> </div> </div> </section> <hr class="border-slate-200 my-8">  <section id="truong-thanh-ban-dem" class="scroll-mt-28 space-y-6"> <div class="border-l-4 border-amber-500 pl-4"> <h2 class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
Vạn Lý Trường Thành Ban Đêm: Không Chỉ Có Simatai
</h2> </div> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-4"> <p>
Simatai từ lâu đã nổi tiếng với trải nghiệm Vạn Lý Trường Thành về đêm, đặc biệt khi kết hợp cùng thị trấn nước Gubei Water Town dưới chân núi.
</p> <p>
Tuy nhiên, hiện nay nhiều đoạn khác cũng đã mở rộng các chương trình tour đêm:
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-4"> <div class="bg-slate-900 text-white p-5 rounded-xl space-y-2 border border-slate-800"> <div class="text-amber-400 font-bold text-sm">🌙 Badaling Night Tour</div> <p class="text-slate-300 text-xs leading-relaxed">
Chương trình đêm theo mùa với hệ thống chiếu sáng LED hiện đại, trình diễn âm nhạc và tương tác văn hóa (thường diễn ra từ mùa xuân đến mùa thu).
</p> </div> <div class="bg-slate-900 text-white p-5 rounded-xl space-y-2 border border-slate-800"> <div class="text-amber-400 font-bold text-sm">🏮 Mutianyu Night Tour</div> <p class="text-slate-300 text-xs leading-relaxed">
Triển khai theo đợt mùa hè, với hệ thống chiếu sáng và các hoạt động trải nghiệm ban đêm tại khu vực tháp canh và đường đi bộ.
</p> </div> <div class="bg-slate-900 text-white p-5 rounded-xl space-y-2 border border-slate-800"> <div class="text-amber-400 font-bold text-sm">✨ Simatai & Gubei</div> <p class="text-slate-300 text-xs leading-relaxed">
Trải nghiệm cổ kính nhất: Cáp treo ngắm toàn cảnh Trường Thành được chiếu sáng trên sống núi cùng đèn lồng thị trấn Cổ Bắc.
</p> </div> </div> <p class="text-xs text-slate-500 italic">
* Do các chương trình ban đêm phụ thuộc vào mùa và lịch vận hành thực tế, du khách nên kiểm tra thông tin cập nhật chính thức trước ngày khởi hành.
</p> </div> </section> <hr class="border-slate-200 my-8">  <section id="bao-ton-di-san" class="scroll-mt-28 space-y-6"> <div class="border-l-4 border-amber-500 pl-4"> <h2 class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
Bảo Tồn Vạn Lý Trường Thành: Di Sản Cần Được Giữ Gìn
</h2> </div> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-4"> <p>
Vạn Lý Trường Thành có quy mô khổng lồ và trải qua nhiều vùng địa hình khác nhau, vì vậy công tác bảo tồn luôn là một thách thức lớn.
</p> <p>
UNESCO nhấn mạnh rằng toàn bộ hệ thống hơn 20.000 km bao gồm các đoạn tường, pháo đài, cửa ải, tháp canh và nhiều thành phần phòng thủ được xây dựng trong những thời kỳ khác nhau. Việc bảo tồn vì thế cần được thực hiện theo hướng có hệ thống, khoa học và phù hợp với đặc điểm của từng khu vực.
</p> <p>
Tại Bắc Kinh, các chương trình bảo tồn và phục hồi đang được triển khai ở nhiều khu vực. Jiankou là một ví dụ điển hình, với các dự án sửa chữa được thực hiện theo nhiều giai đoạn. Bắc Kinh cũng đang xây dựng Great Wall National Cultural Park nhằm kết hợp bảo tồn di sản với nghiên cứu, giáo dục và phát triển du lịch bền vững.
</p> <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3"> <div class="font-bold text-slate-900 text-[15px] flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> 4 Nguyên Tắc Du Lịch Có Trách Nhiệm:
</div> <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700 text-sm"> <li class="flex items-center gap-2"> <span class="text-rose-500 font-bold">✕</span> Không leo vào khu vực bị rào đóng
</li> <li class="flex items-center gap-2"> <span class="text-rose-500 font-bold">✕</span> Không nhặt hay lấy gạch đá di tích
</li> <li class="flex items-center gap-2"> <span class="text-rose-500 font-bold">✕</span> Không viết, vẽ, khắc lên tường thành
</li> <li class="flex items-center gap-2"> <span class="text-rose-500 font-bold">✕</span> Không xả rác, giữ gìn cảnh quan tự nhiên
</li> </ul> </div> </div> </section> <hr class="border-slate-200 my-8">  <section id="ket-luan" class="scroll-mt-28 space-y-6"> <div class="border-l-4 border-amber-500 pl-4"> <h2 class="font-serif text-2xl lg:text-[26px] font-bold text-slate-900 leading-tight">
Vậy Nên Chọn Đoạn Vạn Lý Trường Thành Nào?
</h2> </div> <div class="text-slate-700 text-[15.5px] leading-relaxed space-y-4"> <p>
Nếu đây là lần đầu đến Bắc Kinh và chỉ có một ngày dành cho Vạn Lý Trường Thành, <strong>Mutianyu là lựa chọn rất đáng cân nhắc</strong> nhờ sự cân bằng giữa cảnh quan, khả năng tiếp cận và trải nghiệm đi bộ.
</p> <p>
Nếu muốn ưu tiên sự thuận tiện, giao thông và cơ sở vật chất, <strong>Badaling</strong> là lựa chọn hợp lý. Nếu chuyến đi thiên về trekking và nhiếp ảnh, hãy dành nhiều thời gian hơn cho <strong>Jinshanling</strong>. Nếu muốn trải nghiệm đặc biệt buổi tối, <strong>Simatai</strong> kết hợp Gubei Water Town là gợi ý hàng đầu.
</p> <p class="font-medium text-slate-900 text-base">
Điều quan trọng nhất là <strong>đừng cố đi tất cả</strong>. Vạn Lý Trường Thành không phải một điểm đến cần “check-in” thật nhanh. Giá trị của nơi này nằm ở cảm giác đứng trên một công trình đã tồn tại qua hàng thế kỷ, nhìn những bức tường chạy theo sống núi và nhận ra quy mô của nó lớn hơn rất nhiều so với những gì một bức ảnh có thể truyền tải.
</p> <p>
Và đó cũng là lý do <strong>lựa chọn đúng đoạn Trường Thành quan trọng hơn việc lựa chọn đoạn “nổi tiếng nhất”</strong>.
</p> </div> <div class="bg-slate-100 p-4 rounded-xl text-xs text-slate-600 space-y-1 mt-6 border border-slate-200"> <div><strong>Cập nhật thông tin:</strong> 17/08/2026.</div> <div><strong>Lưu ý:</strong> Lịch mở cửa, phương tiện, giá vé và các chương trình tham quan ban đêm tại Vạn Lý Trường Thành có thể thay đổi theo mùa, thời tiết và chính sách vận hành. Du khách nên kiểm tra thông tin chính thức trước chuyến đi.</div> </div> </section>  <div class="my-14 bg-gradient-to-br from-amber-500/10 via-white to-amber-500/5 border border-amber-300 p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(247,147,30,0.15)] text-center relative overflow-hidden"> <div class="absolute -right-10 -top-10 text-amber-500/10"><svg width="140" height="140" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2z"></path></svg></div> <h3 class="font-serif text-2xl lg:text-3xl font-bold text-slate-900 mb-3 relative z-10">
Bạn Đã Sẵn Sàng Khám Phá Kỳ Quan Vạn Lý Trường Thành?
</h3> <p class="text-slate-600 mb-8 max-w-xl mx-auto relative z-10 text-sm sm:text-base">
Đồng hành cùng FIT TOUR trong những hành trình khám phá Bắc Kinh và Vạn Lý Trường Thành chuyên sâu, tinh tế và trọn vẹn cảm xúc.
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10"> <a href="/tour/tour-bac-kinh-5n5d" target="_blank" class="w-full sm:w-auto px-7 py-3.5 bg-[#F7931E] hover:bg-[#e08216] text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"> <span>🏯</span> Xem Tour Vạn Lý Trường Thành Bắc Kinh
</a> <a href="/country/trung-quoc" target="_blank" class="w-full sm:w-auto px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold rounded-xl transition-all shadow-xs flex items-center justify-center gap-2"> <span>🇨🇳</span> Cẩm Nang Du Lịch Trung Quốc
</a> </div> </div>  <div class="mt-12 mb-8">  </div> </main>  <aside class="col-span-1 lg:col-span-3"> <div class="sticky top-24 space-y-8">  <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6"> <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-amber-500 pl-3 text-sm tracking-wide uppercase">
Thông tin hữu ích
</div> <div class="space-y-4"> <div class="flex gap-3"> <div class="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 border border-amber-200/60 text-lg">✈️</div> <div> <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Cửa ngõ</div> <div class="font-bold text-slate-800 text-[13px]">Thủ đô Bắc Kinh (Beijing)</div> </div> </div> <div class="flex gap-3"> <div class="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 border border-blue-200/60 text-lg">🍂</div> <div> <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Mùa đẹp nhất</div> <div class="font-bold text-slate-800 text-[13px]">Mùa thu (Tháng 9 - 11)</div> </div> </div> <div class="flex gap-3"> <div class="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/60 text-lg">🚅</div> <div> <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Phương tiện</div> <div class="font-bold text-slate-800 text-[13px]">Tàu cao tốc, Xe buýt, Xe riêng</div> </div> </div> <div class="flex gap-3"> <div class="w-10 h-10 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center shrink-0 border border-purple-200/60 text-lg">🏛️</div> <div> <div class="text-[11px] text-slate-500 uppercase tracking-wide font-bold">Di sản</div> <div class="font-bold text-slate-800 text-[13px]">Di sản Thế giới UNESCO (1987)</div> </div> </div> </div> </div>  <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6"> <div class="flex items-center gap-2 font-bold text-slate-900 mb-5 border-l-4 border-rose-500 pl-3 text-sm tracking-wide uppercase">
Bài Viết Liên Quan
</div> <div class="space-y-4"> <a href="/dia-mao-dan-ha" class="flex gap-3 group"> <div class="w-20 aspect-video rounded-lg bg-slate-100 overflow-hidden shrink-0 border border-slate-200"> <img src="https://media.fittour.vn/uploads/cam-tuc-thanh-hai-ho-thanh-hai-va-cao-nguyen-tay-bac.webp" alt="Địa Mạo Đan Hà Trương Dịch: Kỳ Quan Núi Cầu Vồng 135 Triệu Năm" width="80" height="45" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy"> </div> <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-3"> Địa Mạo Đan Hà Trương Dịch: Kỳ Quan Núi Cầu Vồng 135 Triệu Năm </div> </a><a href="/why-travel-china-fittour" class="flex gap-3 group"> <div class="w-20 aspect-video rounded-lg bg-slate-100 overflow-hidden shrink-0 border border-slate-200"> <img src="https://media.fittour.vn/uploads/china-sereis-background.webp" alt="Tại Sao Nên Du Lịch Trung Quốc Cùng FIT TOUR?" width="80" height="45" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy"> </div> <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-3"> Tại Sao Nên Du Lịch Trung Quốc Cùng FIT TOUR? </div> </a><a href="/quy-dinh-mang-pin-du-phong-khi-du-lich-trung-quoc" class="flex gap-3 group"> <div class="w-20 aspect-video rounded-lg bg-slate-100 overflow-hidden shrink-0 border border-slate-200"> <img src="https://media.fittour.vn/uploads/2025/10/quy-dinh-mang-pin-du-phong-du-lich-trung-quoc.webp" alt="Quy Định Mang Pin Dự Phòng Khi Du Lịch Trung Quốc" width="80" height="45" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy"> </div> <div class="text-[13px] font-bold text-slate-800 group-hover:text-amber-800 transition-colors leading-snug line-clamp-3"> Quy Định Mang Pin Dự Phòng Khi Du Lịch Trung Quốc </div> </a> </div> <div class="mt-5 text-center pt-3 border-t border-slate-100"> <a href="/country/trung-quoc" class="text-amber-700 text-xs font-bold hover:underline">Khám phá cẩm nang Trung Quốc →</a> </div> </div>  <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6"> <div class="text-xs font-bold text-slate-600 mb-4 tracking-wide uppercase text-center">Chia sẻ bài viết</div> <div class="flex justify-center gap-3"> <a href="https://www.facebook.com/sharer/sharer.php?u=https://thericetour.com/van-ly-truong-thanh" target="_blank" rel="noopener noreferrer" aria-label="Chia sẻ lên Facebook" class="w-10 h-10 rounded-full bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors"> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"></path></svg> </a> <button onclick="navigator.clipboard.writeText('https://thericetour.com/van-ly-truong-thanh');" aria-label="Sao chép liên kết" class="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-colors group focus:bg-emerald-100 focus:text-emerald-700"> <svg class="w-4 h-4 group-focus:hidden" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg> <span class="hidden group-focus:block text-[9px] font-bold">OK!</span> </button> </div> </div> </div> </aside> </div> </div> </div>`,
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #0f172a; border: 1px solid #e2e8f0;">
      <!-- Hero -->
      <rect x="20" y="30" width="260" height="40" rx="4" fill="#1e293b"/>
      <rect x="30" y="40" width="180" height="8" rx="2" fill="#f59e0b"/>
      <rect x="30" y="52" width="100" height="4" rx="2" fill="#cbd5e1"/>
      
      <!-- Content grid -->
      <rect x="20" y="80" width="60" height="50" rx="2" fill="#ffffff" fill-opacity="0.1"/>
      <rect x="90" y="80" width="190" height="15" rx="2" fill="#ffffff" fill-opacity="0.2"/>
      <rect x="90" y="100" width="190" height="30" rx="2" fill="#ffffff" fill-opacity="0.05"/>
    </svg>`
  },

  {
    id: 'tour-unfold-description',
    title: 'Đoạn giới thiệu mở rộng (Unfold Show/Hide)',
    category: 'tour',
    description: 'Sử dụng kĩ thuật Checkbox Hack (pure CSS) để tạo nút "SHOW / HIDE" cho các đoạn mô tả dài (như chi tiết các quốc gia Nam Mỹ) nằm trước phần Trải nghiệm hấp dẫn.',
    templateHtml: `<div class="tour-highlights-unfold relative mb-10">
  <input type="checkbox" id="unfold-toggle" class="unfold-checkbox hidden" />
  
  <div class="unfold-content">
    <div class="custom-blog-prose max-w-none text-slate-700 leading-relaxed space-y-6 pb-6">
      <p><strong>NỘI DUNG 1 - TIÊU ĐỀ</strong><br/>
      Đây là đoạn giới thiệu chi tiết về điểm nhấn đầu tiên của hành trình. Nội dung có thể rất dài.</p>
      
      <p><strong>NỘI DUNG 2 - TIÊU ĐỀ</strong><br/>
      Đây là đoạn giới thiệu thứ hai. Bạn có thể chèn bao nhiêu tuỳ thích vào đây.</p>
      
      <p><strong>NỘI DUNG 3 - TIÊU ĐỀ</strong><br/>
      Đây là đoạn giới thiệu thứ ba. Khi vượt quá giới hạn chiều cao, nó sẽ tự động bị ẩn dưới lớp sương mù gradient.</p>
    </div>
    <div class="unfold-overlay"></div>
  </div>
  
  <div class="unfold-btn-wrapper flex justify-center mt-2 relative z-10">
    <label for="unfold-toggle" class="unfold-btn shadow-sm">
      <span class="btn-text-show">SHOW</span>
      <span class="btn-text-hide">HIDE</span>
      <svg class="w-4 h-4 ml-1 transition-transform duration-300 transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </label>
  </div>
</div>

<style>
  /* UNFOLD COMPONENT */
  .unfold-checkbox {
    display: none;
  }
  .unfold-content {
    max-height: 100px;
    overflow: hidden;
    position: relative;
    transition: max-height 0.5s ease;
  }
  .unfold-overlay {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 60px;
    background: linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0));
    pointer-events: none;
    transition: opacity 0.3s ease;
  }
  .unfold-checkbox:checked ~ .unfold-content {
    max-height: 1500px;
  }
  .unfold-checkbox:checked ~ .unfold-content .unfold-overlay {
    opacity: 0;
  }
  .unfold-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 24px;
    border: 1px solid #d1d5db;
    background: #fff;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    color: #374151;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
    border-radius: 4px;
  }
  .unfold-btn:hover {
    background: #f9fafb;
  }
  .unfold-btn .btn-text-show { display: inline; }
  .unfold-btn .btn-text-hide { display: none; }
  .unfold-checkbox:checked ~ .unfold-btn-wrapper .unfold-btn .btn-text-show { display: none; }
  .unfold-checkbox:checked ~ .unfold-btn-wrapper .unfold-btn .btn-text-hide { display: inline; }
  .unfold-checkbox:checked ~ .unfold-btn-wrapper .unfold-btn svg { transform: rotate(180deg); }
</style>`,
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #ffffff; border: 1px solid #e2e8f0;">
      <rect x="20" y="20" width="260" height="8" rx="2" fill="#94a3b8"/>
      <rect x="20" y="36" width="220" height="6" rx="2" fill="#cbd5e1"/>
      <rect x="20" y="48" width="240" height="6" rx="2" fill="#cbd5e1"/>
      <defs>
        <linearGradient id="unfoldFade" x1="150" y1="60" x2="150" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0" />
          <stop offset="100%" stop-color="#ffffff" stop-opacity="1" />
        </linearGradient>
      </defs>
      <rect x="0" y="60" width="300" height="40" fill="url(#unfoldFade)"/>
      <rect x="110" y="110" width="80" height="24" rx="4" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="150" y="126" fill="#475569" font-size="10" font-weight="bold" font-family="sans-serif" text-anchor="middle">v SHOW</text>
    </svg>`
  },

  {
    id: 'tour-highlights',
    title: 'Trải nghiệm hấp dẫn của Tour (Highlights)',
    category: 'tour',
    description: 'Danh sách các điểm nhấn, trải nghiệm tuyệt vời nhất của chuyến đi. Sử dụng icon check mark màu cam và đường gạch chân xám mỏng chuẩn thiết kế tĩnh.',
    templateHtml: `<section class="tour-highlights-section" style="margin-top: 3rem; margin-bottom: 3rem;">
  <h2 class="highlights-title" style="margin-bottom: 1.5rem; color: #1e293b; font-size: 1.5rem; font-weight: 700;">Trải nghiệm hấp dẫn của Tour</h2>
  
  <ul class="highlights-list" style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column;">
    <li class="highlight-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-500, #f97316)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <span style="color: #0f172a; font-size: 1.05rem; line-height: 1.6;">Bay thẳng hãng ANA 5★ – hành trình tiện lợi, dịch vụ chuẩn Nhật</span>
    </li>
    <li class="highlight-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-500, #f97316)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <span style="color: #0f172a; font-size: 1.05rem; line-height: 1.6;">Check-in Hồ Blue Pond – sắc xanh huyền ảo độc nhất Hokkaido</span>
    </li>
    <li class="highlight-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-500, #f97316)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <span style="color: #0f172a; font-size: 1.05rem; line-height: 1.6;">Lạc vào cánh đồng lavender Furano rực rỡ theo mùa</span>
    </li>
    <li class="highlight-item" style="display: flex; align-items: flex-start; gap: 12px; padding: 16px 0; border-bottom: 1px solid #e2e8f0;">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-500, #f97316)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0; margin-top: 2px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      <span style="color: #0f172a; font-size: 1.05rem; line-height: 1.6;">Trải nghiệm tắm Onsen chuẩn Nhật giữa thiên nhiên Yozankei</span>
    </li>
  </ul>
  <style>
    .tour-highlights-section .highlights-list .highlight-item:last-child {
      border-bottom: none !important;
    }
  </style>
</section>`,
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #ffffff; border: 1px solid #e2e8f0;">
      <rect x="20" y="20" width="180" height="12" rx="2" fill="#1e293b"/>
      
      <circle cx="30" cy="55" r="6" stroke="var(--color-brand-500, #f97316)" stroke-width="2"/>
      <path d="M28 55L30 57L34 53" stroke="var(--color-brand-500, #f97316)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="45" y="52" width="220" height="6" rx="3" fill="#334155"/>
      <line x1="20" y1="70" x2="280" y2="70" stroke="#e2e8f0" stroke-width="1"/>
      
      <circle cx="30" cy="85" r="6" stroke="var(--color-brand-500, #f97316)" stroke-width="2"/>
      <path d="M28 85L30 87L34 83" stroke="var(--color-brand-500, #f97316)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="45" y="82" width="180" height="6" rx="3" fill="#334155"/>
      <line x1="20" y1="100" x2="280" y2="100" stroke="#e2e8f0" stroke-width="1"/>
      
      <circle cx="30" cy="115" r="6" stroke="var(--color-brand-500, #f97316)" stroke-width="2"/>
      <path d="M28 115L30 117L34 113" stroke="var(--color-brand-500, #f97316)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="45" y="112" width="200" height="6" rx="3" fill="#334155"/>
    </svg>`,
  },
  {
    id: 'tour-highlights-2',
    title: 'Trải nghiệm hấp dẫn của Tour (Highlight 2)',
    category: 'tour',
    description: 'Danh sách các điểm nhấn với icon checkmark màu cam nền tròn, phù hợp cho giao diện phẳng, thoáng đãng.',
    templateHtml: `<section class="tour-highlights-section mb-12 bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-100" style="margin-top: 3rem; margin-bottom: 3rem; border-radius: 1rem; padding: 2rem; background-color: #f8fafc; border: 1px solid #f1f5f9;">
  <h2 class="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3" style="font-size: 1.5rem; font-weight: 700; color: #1e293b; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem;">
    <svg class="w-6 h-6 text-brand-500" fill="none" stroke="var(--color-brand-500, #f97316)" viewBox="0 0 24 24" style="width: 24px; height: 24px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
    Trải nghiệm hấp dẫn
  </h2>
  <div class="tour-highlights-grid grid grid-cols-1 md:grid-cols-2 gap-4" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
    <div class="flex items-start gap-3" style="display: flex; align-items: flex-start; gap: 0.75rem;">
      <div class="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5" style="width: 24px; height: 24px; border-radius: 50%; background-color: #ffedd5; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
        <svg class="w-4 h-4 text-brand-600" fill="none" stroke="var(--color-brand-600, #ea580c)" viewBox="0 0 24 24" style="width: 16px; height: 16px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <p class="text-slate-700 leading-relaxed text-sm m-0" style="color: #475569; line-height: 1.6; font-size: 0.875rem; margin: 0;">Núi lửa Bromo: Trải nghiệm bình minh tại miệng núi lửa và khám phá vẻ đẹp hùng vĩ của ngọn núi hoạt động.</p>
    </div>
    <div class="flex items-start gap-3" style="display: flex; align-items: flex-start; gap: 0.75rem;">
      <div class="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5" style="width: 24px; height: 24px; border-radius: 50%; background-color: #ffedd5; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
        <svg class="w-4 h-4 text-brand-600" fill="none" stroke="var(--color-brand-600, #ea580c)" viewBox="0 0 24 24" style="width: 16px; height: 16px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <p class="text-slate-700 leading-relaxed text-sm m-0" style="color: #475569; line-height: 1.6; font-size: 0.875rem; margin: 0;">Hồ axit Kawah Ijen: Chiêm ngưỡng ánh sáng xanh mê hoặc và tham gia cuộc hành trình đầy thách thức đến hồ axit kỳ bí.</p>
    </div>
    <div class="flex items-start gap-3" style="display: flex; align-items: flex-start; gap: 0.75rem;">
      <div class="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5" style="width: 24px; height: 24px; border-radius: 50%; background-color: #ffedd5; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
        <svg class="w-4 h-4 text-brand-600" fill="none" stroke="var(--color-brand-600, #ea580c)" viewBox="0 0 24 24" style="width: 16px; height: 16px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <p class="text-slate-700 leading-relaxed text-sm m-0" style="color: #475569; line-height: 1.6; font-size: 0.875rem; margin: 0;">Thác ngàn dòng Tumpak Sewu: Thưởng ngoạn vẻ đẹp mạnh mẽ của thác nước cao và imposant.</p>
    </div>
    <div class="flex items-start gap-3" style="display: flex; align-items: flex-start; gap: 0.75rem;">
      <div class="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0 mt-0.5" style="width: 24px; height: 24px; border-radius: 50%; background-color: #ffedd5; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
        <svg class="w-4 h-4 text-brand-600" fill="none" stroke="var(--color-brand-600, #ea580c)" viewBox="0 0 24 24" style="width: 16px; height: 16px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
      </div>
      <p class="text-slate-700 leading-relaxed text-sm m-0" style="color: #475569; line-height: 1.6; font-size: 0.875rem; margin: 0;">Đảo thiên đường Bali: Khám phá bãi biển trắng mịn và tham gia các hoạt động giải trí và thư giãn.</p>
    </div>
  </div>
</section>`,
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #ffffff; border: 1px solid #e2e8f0;">
      <rect x="10" y="10" width="280" height="130" rx="8" fill="#f8fafc" stroke="#f1f5f9"/>
      <path d="M25 25L27 27M27 27L29 25M27 27V30M24 28L26 27M28 27L30 28" stroke="var(--color-brand-500, #f97316)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="35" y="24" width="120" height="8" rx="2" fill="#1e293b"/>
      <circle cx="30" cy="50" r="6" fill="#ffedd5"/>
      <path d="M27 50L29 52L33 48" stroke="var(--color-brand-600, #ea580c)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="42" y="46" width="90" height="3" rx="1.5" fill="#475569"/>
      <rect x="42" y="52" width="70" height="3" rx="1.5" fill="#475569"/>
      <circle cx="160" cy="50" r="6" fill="#ffedd5"/>
      <path d="M157 50L159 52L163 48" stroke="var(--color-brand-600, #ea580c)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="172" y="46" width="100" height="3" rx="1.5" fill="#475569"/>
      <rect x="172" y="52" width="80" height="3" rx="1.5" fill="#475569"/>
      <circle cx="30" cy="75" r="6" fill="#ffedd5"/>
      <path d="M27 75L29 77L33 73" stroke="var(--color-brand-600, #ea580c)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="42" y="71" width="100" height="3" rx="1.5" fill="#475569"/>
      <rect x="42" y="77" width="80" height="3" rx="1.5" fill="#475569"/>
      <circle cx="160" cy="75" r="6" fill="#ffedd5"/>
      <path d="M157 75L159 77L163 73" stroke="var(--color-brand-600, #ea580c)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="172" y="71" width="90" height="3" rx="1.5" fill="#475569"/>
      <rect x="172" y="77" width="60" height="3" rx="1.5" fill="#475569"/>
      <circle cx="30" cy="100" r="6" fill="#ffedd5"/>
      <path d="M27 100L29 102L33 98" stroke="var(--color-brand-600, #ea580c)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <rect x="42" y="96" width="100" height="3" rx="1.5" fill="#475569"/>
      <rect x="42" y="102" width="50" height="3" rx="1.5" fill="#475569"/>
    </svg>`,
  },
  {
    id: 'tour-itinerary',
    title: 'Lịch trình chi tiết (Ngày 1, Ngày 2...) + SEO Schema',
    category: 'tour',
    description: 'Bố cục Lịch trình Tour chuẩn FIT TOUR với icon dấu + bên trái, tự biến thành x màu đỏ khi mở. Bên trong có sẵn cấu trúc để chèn ảnh. Đi kèm mã JSON-LD chuẩn SEO của Google.',
    templateHtml: `<section class="tour-itinerary-section" style="margin-top: 3rem; margin-bottom: 3rem;">
  <h2 class="itinerary-title" style="margin-bottom: 2rem; color: #1e293b; font-size: 1.75rem; font-weight: 700;">Lịch trình chi tiết</h2>

  <div class="itinerary-wrapper" style="display: flex; flex-direction: column; gap: 1rem;">

    <!-- Ngày 1 -->
    <details class="itinerary-item" style="border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background: #fff;" open>
      <summary style="display: flex; align-items: center; padding: 1.25rem; cursor: pointer; list-style: none; font-weight: 600; color: #334155; font-size: 1.1rem;">
        <div class="icon-toggle" style="margin-right: 16px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; background: var(--color-brand-500, #f97316); color: #fff; border-radius: 50%; font-size: 1.2rem; font-weight: bold; line-height: 1; transition: all 0.2s ease;">+</div>
        <span>Ngày 1: Việt Nam – Ulaanbaatar</span>
      </summary>
      <div class="content" style="padding: 0 1.25rem 1.25rem 4.1rem; color: #475569; line-height: 1.6;">
        <!-- Hình ảnh minh họa (Tùy chọn) -->
        <img src="https://media.fittour.vn/wp-content/uploads/2025/11/blank-photo.jpg" alt="Ngày 1" style="width: 100%; max-height: 350px; object-fit: cover; border-radius: 8px; margin-bottom: 1.25rem; display: block;" />
        <p style="margin-bottom: 0.75rem;"><strong>Sáng:</strong> Quý khách tập trung tại sân bay, làm thủ tục bay đi Ulaanbaatar.</p>
        <p style="margin-bottom: 0;"><strong>Chiều:</strong> Nhận phòng khách sạn, nghỉ ngơi. Dùng bữa tối tại nhà hàng địa phương.</p>
      </div>
    </details>

    <!-- Ngày 2 -->
    <details class="itinerary-item" style="border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background: #fff;">
      <summary style="display: flex; align-items: center; padding: 1.25rem; cursor: pointer; list-style: none; font-weight: 600; color: #334155; font-size: 1.1rem;">
        <div class="icon-toggle" style="margin-right: 16px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; background: var(--color-brand-500, #f97316); color: #fff; border-radius: 50%; font-size: 1.2rem; font-weight: bold; line-height: 1; transition: all 0.2s ease;">+</div>
        <span>Ngày 2: Chào Ulaanbaatar – Chạm Ngõ Trái Tim Mông Cổ Hiện Đại</span>
      </summary>
      <div class="content" style="padding: 0 1.25rem 1.25rem 4.1rem; color: #475569; line-height: 1.6;">
        <p style="margin-bottom: 0;">Nội dung chi tiết ngày 2 nằm ở đây...</p>
      </div>
    </details>

    <!-- Ngày 3 -->
    <details class="itinerary-item" style="border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background: #fff;">
      <summary style="display: flex; align-items: center; padding: 1.25rem; cursor: pointer; list-style: none; font-weight: 600; color: #334155; font-size: 1.1rem;">
        <div class="icon-toggle" style="margin-right: 16px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; width: 28px; height: 28px; background: var(--color-brand-500, #f97316); color: #fff; border-radius: 50%; font-size: 1.2rem; font-weight: bold; line-height: 1; transition: all 0.2s ease;">+</div>
        <span>Ngày 3: Khám Phá Chiều Sâu Tâm Linh Hoặc Chinh Phục Biểu Tượng Kiêu Hãnh</span>
      </summary>
      <div class="content" style="padding: 0 1.25rem 1.25rem 4.1rem; color: #475569; line-height: 1.6;">
        <p style="margin-bottom: 0;">Nội dung chi tiết ngày 3 nằm ở đây...</p>
      </div>
    </details>

  </div>

  <style>
    /* CSS loại bỏ marker mặc định của trình duyệt */
    .tour-itinerary-section .itinerary-item summary::-webkit-details-marker { display: none; }
    /* Hiệu ứng xoay icon + thành dấu x khi mở */
    .tour-itinerary-section .itinerary-item[open] summary .icon-toggle { transform: rotate(45deg); background: #ef4444; }
  </style>

  <!-- SEO Schema (Nhớ cập nhật Name và các điểm đến) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Tour Mông Cổ 8 Ngày 7 Đêm",
    "itinerary": [
      { "@type": "TouristAttraction", "name": "Ngày 1: Việt Nam – Ulaanbaatar" },
      { "@type": "TouristAttraction", "name": "Ngày 2: Chào Ulaanbaatar" },
      { "@type": "TouristAttraction", "name": "Ngày 3: Khám Phá Tâm Linh" }
    ]
  }
  </script>
</section>`,
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #ffffff; border: 1px solid #e2e8f0;">
      <rect x="20" y="20" width="120" height="10" rx="2" fill="#1e293b"/>
      
      <rect x="20" y="40" width="260" height="40" rx="4" fill="#ffffff" stroke="#e2e8f0"/>
      <circle cx="35" cy="50" r="6" fill="#ef4444"/>
      <path d="M33 48L37 52M37 48L33 52" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
      <rect x="50" y="47" width="100" height="6" rx="3" fill="#334155"/>
      <rect x="50" y="60" width="140" height="4" rx="2" fill="#64748b"/>
      <rect x="50" y="68" width="100" height="4" rx="2" fill="#64748b"/>
      
      <rect x="20" y="90" width="260" height="20" rx="4" fill="#ffffff" stroke="#e2e8f0"/>
      <circle cx="35" cy="100" r="6" fill="var(--color-brand-500, #f97316)"/>
      <path d="M35 97V103M32 100H38" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
      <rect x="50" y="97" width="120" height="6" rx="3" fill="#334155"/>
      
      <rect x="20" y="120" width="260" height="20" rx="4" fill="#ffffff" stroke="#e2e8f0"/>
      <circle cx="35" cy="130" r="6" fill="var(--color-brand-500, #f97316)"/>
      <path d="M35 127V133M32 130H38" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
      <rect x="50" y="127" width="140" height="6" rx="3" fill="#334155"/>
    </svg>`,
  },
  {
    id: 'tour-schedule-premium',
    title: 'Lịch Khởi Hành (Premium Apple Style)',
    category: 'tour',
    description: 'Bảng lịch khởi hành thiết kế theo ngôn ngữ Apple (Minimalist, Premium). Lược bỏ màu nền sặc sỡ, dùng viền mờ, đổ bóng nhẹ, typography tinh tế. Có kèm khối ưu đãi và lưu ý dạng Pill hiện đại.',
    templateHtml: `<section class="tour-schedule-section" style="margin-top: 3rem; margin-bottom: 3rem; font-family: inherit;">
  <div style="max-width: 900px; margin: 0 auto;">
    
    <h2 class="schedule-title" style="margin-bottom: 2rem; color: #1d1d1f; font-size: 1.75rem; font-weight: 700; text-align: center;">Lịch Khởi Hành Nam Mỹ 2026</h2>
    
    <!-- Bảng Lịch Khởi Hành -->
    <div style="background: #ffffff; border-radius: 16px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04); overflow: hidden; border: 1px solid #e2e8f0; margin-bottom: 1.5rem;">
      <div style="overflow-x: auto;">
        <table style="width: 100%; min-width: 600px; border-collapse: collapse; text-align: left;">
          <thead>
            <tr style="border-bottom: 1px solid #e2e8f0; background: #f8fafc;">
              <th style="padding: 18px 24px; font-weight: 600; color: #64748b; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Ngày khởi hành</th>
              <th style="padding: 18px 24px; font-weight: 600; color: #64748b; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Giá tour</th>
              <th style="padding: 18px 24px; font-weight: 600; color: #64748b; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Ghi chú</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 20px 24px; font-weight: 600; color: #0f172a; font-size: 1.1rem;">21/04/2026</td>
              <td style="padding: 20px 24px; font-weight: 700; color: var(--color-brand-600, #ea580c); font-size: 1.15rem;">325.000.000 VNĐ</td>
              <td style="padding: 20px 24px; color: #475569; font-size: 0.95rem;">Mùa xuân Patagonia</td>
            </tr>
            <tr>
              <td style="padding: 20px 24px; font-weight: 600; color: #0f172a; font-size: 1.1rem;">10/09/2026</td>
              <td style="padding: 20px 24px; font-weight: 700; color: var(--color-brand-600, #ea580c); font-size: 1.15rem;">325.000.000 VNĐ</td>
              <td style="padding: 20px 24px; color: #475569; font-size: 0.95rem;">Khởi hành mùa thu Nam Mỹ</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- Khối Ưu Đãi đính kèm đáy bảng -->
      <div style="background: #f8fafc; padding: 20px 24px; border-top: 1px solid #e2e8f0;">
        <div style="display: flex; align-items: flex-start; gap: 12px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-500, #f97316)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-top: 2px; flex-shrink: 0;"><path d="M21.5 12H16c-.7 2-2 3-4 3s-3.3-1-4-3H2.5"/><path d="M5.5 5.1L2 12v6c0 1.1.9 2 2 2h16a2 2 0 002-2v-6l-3.4-6.9A2 2 0 0016.8 4H7.2a2 2 0 00-1.8 1.1z"/></svg>
          <div>
            <strong style="color: #0f172a; display: block; margin-bottom: 6px; font-size: 0.95rem;">Ưu đãi đặt sớm:</strong>
            <ul style="margin: 0; padding-left: 1.25rem; color: #475569; font-size: 0.95rem; line-height: 1.6;">
              <li>Giảm 10.000.000 VNĐ/khách (nhóm 5–10 khách)</li>
              <li>Giảm 5.000.000 VNĐ/khách (nhóm 1–4 khách)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Khối Lưu ý (Dạng Pill) -->
    <div style="background: #f1f5f9; border-radius: 12px; padding: 16px 24px; text-align: center; color: #475569; font-size: 0.9rem; display: flex; align-items: center; justify-content: center; gap: 10px;">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
      <span style="line-height: 1.5;"><strong>Lưu ý:</strong> Trường hợp visa không được duyệt, phí không hoàn lại 3.000.000 VNĐ (chưa bao gồm phí xuất vé nếu đã xuất vé lẻ).</span>
    </div>

  </div>
</section>`,
    previewSvg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #fafafa; border: 1px solid #e2e8f0;">
      <rect x="120" y="20" width="160" height="12" rx="3" fill="#1d1d1f"/>
      
      <rect x="30" y="45" width="340" height="100" rx="10" fill="#ffffff" stroke="#f5f5f7" filter="drop-shadow(0px 4px 10px rgba(0,0,0,0.05))"/>
      
      <rect x="45" y="60" width="60" height="5" rx="2" fill="#86868b"/>
      <rect x="160" y="60" width="50" height="5" rx="2" fill="#86868b"/>
      <rect x="270" y="60" width="40" height="5" rx="2" fill="#86868b"/>
      <line x1="30" y1="75" x2="370" y2="75" stroke="#e5e5ea" stroke-width="1"/>
      
      <rect x="45" y="90" width="70" height="7" rx="2" fill="#1d1d1f"/>
      <rect x="160" y="90" width="80" height="7" rx="2" fill="var(--color-brand-600, #ea580c)"/>
      <rect x="270" y="90" width="80" height="5" rx="2" fill="#515154"/>
      <line x1="30" y1="110" x2="370" y2="110" stroke="#f5f5f7" stroke-width="1"/>

      <rect x="45" y="125" width="70" height="7" rx="2" fill="#1d1d1f"/>
      <rect x="160" y="125" width="80" height="7" rx="2" fill="var(--color-brand-600, #ea580c)"/>
      <rect x="270" y="125" width="80" height="5" rx="2" fill="#515154"/>
      
      <rect x="30" y="160" width="340" height="20" rx="6" fill="#f5f5f7"/>
      <circle cx="100" cy="170" r="4" stroke="#86868b" stroke-width="1.5"/>
      <rect x="110" y="168" width="180" height="4" rx="2" fill="#86868b"/>
    </svg>`,
  },
  {
    id: 'tour-accommodation',
    title: 'Dịch vụ Lưu trú (Khách sạn / Lều trại)',
    category: 'tour',
    description: 'Danh sách các loại hình lưu trú dạng liệt kê đơn giản (Khách sạn, Lều trại, Homestay...), tối ưu không gian và không bắt buộc phải có ảnh tĩnh hay đúng tên khách sạn.',
    templateHtml: `<section class="tour-accommodation-section" style="margin-top: 3rem; margin-bottom: 3rem; font-family: inherit;">
  <div style="max-width: 900px; margin: 0 auto;">
    <h2 style="color: #1d1d1f; font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem;">Nơi ở của bạn</h2>
    
    <div style="display: flex; flex-direction: column; gap: 1.25rem;">
      
      <!-- Khách sạn -->
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="width: 56px; height: 56px; border-radius: 50%; background: #ffedd5; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
            <path d="M9 22v-4h6v4"></path>
            <path d="M8 6h.01"></path>
            <path d="M16 6h.01"></path>
            <path d="M12 6h.01"></path>
            <path d="M12 10h.01"></path>
            <path d="M12 14h.01"></path>
            <path d="M16 10h.01"></path>
            <path d="M16 14h.01"></path>
            <path d="M8 10h.01"></path>
            <path d="M8 14h.01"></path>
          </svg>
        </div>
        <div>
          <div style="font-weight: 700; color: #1d1d1f; font-size: 1.15rem; margin-bottom: 4px;">Khách sạn</div>
          <div style="color: #475569; font-size: 0.95rem;">Khách sạn 3-4 sao</div>
        </div>
      </div>
      
      <!-- Lều trại / Camping (Có thể xóa nếu không cần) -->
      <div style="display: flex; align-items: center; gap: 16px;">
        <div style="width: 56px; height: 56px; border-radius: 50%; background: #f1f5f9; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 21h18"></path>
            <path d="M21 21v-4a2 2 0 0 0-2-2h-3.5"></path>
            <path d="M3 21v-4a2 2 0 0 1 2-2h3.5"></path>
            <path d="M10.5 15l1.5-6 1.5 6"></path>
            <path d="M12 3v6"></path>
          </svg>
        </div>
        <div>
          <div style="font-weight: 700; color: #1d1d1f; font-size: 1.15rem; margin-bottom: 4px;">Lều trại / Camping</div>
          <div style="color: #475569; font-size: 0.95rem;">Ngủ lều cao cấp phong cách Glamping giữa thảo nguyên</div>
        </div>
      </div>

    </div>
  </div>
</section>`,
    previewSvg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #ffffff; border: 1px solid #e2e8f0;">
      <!-- Title -->
      <rect x="20" y="30" width="140" height="12" rx="3" fill="#1d1d1f"/>
      
      <!-- Item 1 -->
      <circle cx="45" cy="80" r="20" fill="#ffedd5"/>
      <rect x="35" y="70" width="20" height="20" rx="2" fill="var(--color-brand-500, #f97316)"/>
      <rect x="80" y="70" width="100" height="8" rx="2" fill="#1d1d1f"/>
      <rect x="80" y="85" width="140" height="6" rx="2" fill="#64748b"/>
      
      <!-- Item 2 -->
      <circle cx="45" cy="140" r="20" fill="#f1f5f9"/>
      <path d="M45 130L35 150H55L45 130Z" fill="#94a3b8"/>
      <rect x="80" y="130" width="120" height="8" rx="2" fill="#1d1d1f"/>
      <rect x="80" y="145" width="160" height="6" rx="2" fill="#64748b"/>
    </svg>`,
  },
  {
    id: 'tour-reviews',
    title: 'Đánh giá của Khách hàng (Reviews Grid)',
    category: 'tour',
    description: 'Khối hiển thị Đánh giá từ Google Maps, thiết kế dạng Grid 2 cột tối ưu cho desktop và 1 cột cho mobile. Thể hiện điểm số 4.9 cực kỳ uy tín.',
    templateHtml: `<section class="tour-reviews-section" style="margin-top: 4rem; margin-bottom: 4rem; font-family: inherit;">
  <div style="max-width: 900px; margin: 0 auto;">
    <h2 style="color: #1d1d1f; font-size: 1.75rem; font-weight: 700; margin-bottom: 1.5rem;">Đánh giá của Khách hàng</h2>
    
    <!-- Summary Box -->
    <div style="border: 1px dashed #cbd5e1; border-radius: 12px; padding: 20px 24px; display: flex; align-items: center; gap: 20px; margin-bottom: 2rem; background: #fff;">
      <div style="font-size: 3rem; font-weight: 800; color: #1e293b; line-height: 1;">4.9</div>
      <div>
        <div style="display: flex; gap: 4px; color: #fbbf24; margin-bottom: 4px;">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </div>
        <div style="color: #64748b; font-size: 0.95rem;">10 đánh giá Google Maps cho FIT TOUR cho hành trình này!</div>
      </div>
    </div>

    <!-- Review Cards Grid -->
    <div class="reviews-grid">
      
      <!-- Card 1 -->
      <div class="review-card">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: #f1f5f9; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #475569; font-size: 1.1rem;">MT</div>
          <div>
            <div style="font-weight: 700; color: #1e293b; font-size: 1rem;">Mai Trinh</div>
            <div style="color: #94a3b8; font-size: 0.8rem;">Google Maps</div>
          </div>
        </div>
        <div style="display: flex; gap: 2px; color: #fbbf24; margin-bottom: 12px;">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </div>
        <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
          Mình tham gia tour Nam Mỹ 14 ngày và thật sự rất ấn tượng. Lịch trình dày nhưng không mệt, Machu Picchu và Iguazu là những trải nghiệm đáng nhớ nhất.
        </p>
        <div style="text-align: right; color: #94a3b8; font-size: 0.8rem; font-style: italic;">Tháng 04/2026</div>
      </div>
      
      <!-- Card 2 -->
      <div class="review-card">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
          <div style="width: 44px; height: 44px; border-radius: 50%; background: #f1f5f9; display: flex; align-items: center; justify-content: center; font-weight: 700; color: #475569; font-size: 1.1rem;">QN</div>
          <div>
            <div style="font-weight: 700; color: #1e293b; font-size: 1rem;">Quốc Nam</div>
            <div style="color: #94a3b8; font-size: 0.8rem;">Google Maps</div>
          </div>
        </div>
        <div style="display: flex; gap: 2px; color: #fbbf24; margin-bottom: 12px;">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        </div>
        <p style="color: #475569; font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
          Visa 3 nước được hỗ trợ kỹ lưỡng. Tour leader theo đoàn rất sát sao, xử lý tình huống nhanh. Bay Emirates dài nhưng khá thoải mái.
        </p>
        <div style="text-align: right; color: #94a3b8; font-size: 0.8rem; font-style: italic;">Tháng 09/2025</div>
      </div>
    </div>

    <!-- CTA Button -->
    <div style="text-align: center; margin-top: 2rem;">
      <a href="#" style="display: inline-flex; align-items: center; gap: 8px; border: 1px solid #1e293b; color: #1e293b; padding: 12px 24px; border-radius: 50px; font-weight: 600; font-size: 0.9rem; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px; transition: all 0.2s ease;" onmouseover="this.style.background='#1e293b'; this.style.color='#fff'" onmouseout="this.style.background='transparent'; this.style.color='#1e293b'">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        Xem thêm những đánh giá
      </a>
    </div>
  </div>

  <style>
    .tour-reviews-section .reviews-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .tour-reviews-section .review-card {
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 24px;
      background: #fff;
      display: flex;
      flex-direction: column;
    }
    .tour-reviews-section .review-card p {
      flex-grow: 1; /* Pushes the date to the bottom */
    }
    @media (min-width: 768px) {
      .tour-reviews-section .reviews-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
  </style>
</section>`,
    previewSvg: `<svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #ffffff; border: 1px solid #e2e8f0;">
      <rect x="20" y="20" width="140" height="12" rx="3" fill="#1e293b"/>
      
      <!-- Summary Box -->
      <rect x="20" y="45" width="360" height="30" rx="6" fill="#ffffff" stroke="#cbd5e1" stroke-dasharray="4 4"/>
      <rect x="35" y="52" width="20" height="16" rx="2" fill="#1e293b"/>
      <circle cx="70" cy="56" r="4" fill="#fbbf24"/>
      <circle cx="82" cy="56" r="4" fill="#fbbf24"/>
      <circle cx="94" cy="56" r="4" fill="#fbbf24"/>
      <circle cx="106" cy="56" r="4" fill="#fbbf24"/>
      <circle cx="118" cy="56" r="4" fill="#fbbf24"/>
      <rect x="66" y="64" width="120" height="3" rx="1.5" fill="#94a3b8"/>

      <!-- Review Card 1 -->
      <rect x="20" y="85" width="170" height="70" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
      <circle cx="35" cy="100" r="8" fill="#f1f5f9"/>
      <rect x="50" y="96" width="40" height="4" rx="2" fill="#1e293b"/>
      <rect x="50" y="104" width="30" height="3" rx="1.5" fill="#94a3b8"/>
      <circle cx="35" cy="115" r="2" fill="#fbbf24"/>
      <circle cx="41" cy="115" r="2" fill="#fbbf24"/>
      <circle cx="47" cy="115" r="2" fill="#fbbf24"/>
      <rect x="28" y="125" width="140" height="3" rx="1.5" fill="#475569"/>
      <rect x="28" y="132" width="100" height="3" rx="1.5" fill="#475569"/>
      
      <!-- Review Card 2 -->
      <rect x="210" y="85" width="170" height="70" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
      <circle cx="225" cy="100" r="8" fill="#f1f5f9"/>
      <rect x="240" y="96" width="40" height="4" rx="2" fill="#1e293b"/>
      <rect x="240" y="104" width="30" height="3" rx="1.5" fill="#94a3b8"/>
      <circle cx="225" cy="115" r="2" fill="#fbbf24"/>
      <circle cx="231" cy="115" r="2" fill="#fbbf24"/>
      <circle cx="237" cy="115" r="2" fill="#fbbf24"/>
      <rect x="218" y="125" width="140" height="3" rx="1.5" fill="#475569"/>
      <rect x="218" y="132" width="100" height="3" rx="1.5" fill="#475569"/>

      <!-- CTA -->
      <rect x="130" y="165" width="140" height="15" rx="7.5" fill="#ffffff" stroke="#1e293b"/>
      <rect x="160" y="171" width="80" height="3" rx="1.5" fill="#1e293b"/>
    </svg>`,
  },
  {
    id: 'tour-additional-info',
    title: 'Thông Tin Thêm Tour (Bao gồm / Không bao gồm)',
    category: 'tour',
    description: 'Component chuyên dụng cho Tour để liệt kê: Bao gồm, Không bao gồm, Điều kiện Visa, Lưu ý. Thiết kế dạng Accordion (FAQ) gọn gàng, có icon trực quan.',
    templateHtml: `<section class="faq-section" style="margin-top: 3rem; margin-bottom: 3rem;">
  <h2 class="faq-title" style="margin-bottom: 1.5rem; color: #1e293b; font-size: 1.5rem; font-weight: 700;">Thông Tin Thêm</h2>
  <div class="faq-wrapper" style="display: flex; flex-direction: column; gap: 1rem;">

    <!-- Bao Gồm -->
    <details class="faq-item" style="border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background: #fff;" open>
      <summary class="faq-summary" style="display: flex; align-items: center; padding: 1rem 1.25rem; cursor: pointer; list-style: none; font-weight: 600; color: #334155;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-500, #f97316)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 12px; flex-shrink: 0;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <span>Bao Gồm</span>
        <span class="icon" style="margin-left: auto; color: #94a3b8; font-size: 1.25rem;">+</span>
      </summary>
      <div class="content" style="padding: 0 1.25rem 1.25rem 3rem; color: #475569; line-height: 1.6;">
        <ul style="list-style-type: disc; padding-left: 1.25rem; margin: 0;">
          <li>Vé máy bay khứ hồi (bao gồm hành lý xách tay và ký gửi)</li>
          <li>Khách sạn tiêu chuẩn 4-5 sao (2 người/phòng)</li>
          <li>Các bữa ăn theo chương trình</li>
          <li>Xe tham quan du lịch máy lạnh đời mới</li>
          <li>Vé tham quan các điểm trong chương trình</li>
          <li>Hướng dẫn viên tiếng Việt nhiệt tình suốt tuyến</li>
          <li>Bảo hiểm du lịch quốc tế</li>
        </ul>
      </div>
    </details>

    <!-- Không Bao Gồm -->
    <details class="faq-item" style="border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background: #fff;">
      <summary class="faq-summary" style="display: flex; align-items: center; padding: 1rem 1.25rem; cursor: pointer; list-style: none; font-weight: 600; color: #334155;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-500, #f97316)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 12px; flex-shrink: 0;"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        <span>Không Bao Gồm</span>
        <span class="icon" style="margin-left: auto; color: #94a3b8; font-size: 1.25rem;">+</span>
      </summary>
      <div class="content" style="padding: 0 1.25rem 1.25rem 3rem; color: #475569; line-height: 1.6;">
        <ul style="list-style-type: disc; padding-left: 1.25rem; margin: 0;">
          <li>Chi phí làm Hộ chiếu (còn hạn trên 6 tháng)</li>
          <li>Tiền TIP cho HDV và tài xế địa phương (thông thường 5-7 USD/ngày)</li>
          <li>Phụ thu phòng đơn (nếu khách đi lẻ và muốn ngủ riêng)</li>
          <li>Visa tái nhập VN (dành cho khách quốc tịch nước ngoài)</li>
          <li>Chi phí cá nhân: giặt ủi, điện thoại, ăn uống ngoài chương trình</li>
        </ul>
      </div>
    </details>

    <!-- Điều kiện Visa -->
    <details class="faq-item" style="border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; background: #fff;">
      <summary class="faq-summary" style="display: flex; align-items: center; padding: 1rem 1.25rem; cursor: pointer; list-style: none; font-weight: 600; color: #334155;">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-brand-500, #f97316)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 12px; flex-shrink: 0;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        <span>Điều kiện Visa</span>
        <span class="icon" style="margin-left: auto; color: #94a3b8; font-size: 1.25rem;">+</span>
      </summary>
      <div class="content" style="padding: 0 1.25rem 1.25rem 3rem; color: #475569; line-height: 1.6;">
        <p style="margin: 0;">Khách hàng vui lòng chuẩn bị các hồ sơ sau:</p>
        <ul style="list-style-type: disc; padding-left: 1.25rem; margin-top: 0.5rem;">
          <li>Hộ chiếu gốc còn hạn trên 6 tháng.</li>
          <li>2 ảnh 4x6 nền trắng chụp không quá 3 tháng.</li>
          <li>Giấy xác nhận công việc và sao kê tài khoản ngân hàng.</li>
        </ul>
      </div>
    </details>

  </div>
  <style>
    /* CSS đi kèm để loại bỏ marker mặc định và tạo animation */
    .faq-item summary::-webkit-details-marker { display: none; }
    .faq-item[open] summary .icon { transform: rotate(45deg); transition: transform 0.2s ease; }
    .faq-item summary .icon { transition: transform 0.2s ease; display: inline-block; }
  </style>
</section>`,
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #ffffff; border: 1px solid #e2e8f0;">
      <!-- Title -->
      <rect x="20" y="20" width="100" height="10" rx="2" fill="#1e293b"/>
      
      <!-- Bao Gom (Opened) -->
      <rect x="20" y="40" width="260" height="40" rx="4" fill="#ffffff" stroke="#e2e8f0"/>
      <circle cx="35" cy="50" r="5" fill="var(--color-brand-500, #f97316)"/>
      <rect x="45" y="47" width="60" height="6" rx="3" fill="#334155"/>
      <rect x="45" y="60" width="140" height="4" rx="2" fill="#64748b"/>
      <rect x="45" y="68" width="100" height="4" rx="2" fill="#64748b"/>
      
      <!-- Khong Bao Gom (Closed) -->
      <rect x="20" y="85" width="260" height="20" rx="4" fill="#ffffff" stroke="#e2e8f0"/>
      <circle cx="35" cy="95" r="5" fill="var(--color-brand-500, #f97316)"/>
      <rect x="45" y="92" width="80" height="6" rx="3" fill="#334155"/>
      
      <!-- Dieu Kien Visa (Closed) -->
      <rect x="20" y="110" width="260" height="20" rx="4" fill="#ffffff" stroke="#e2e8f0"/>
      <circle cx="35" cy="120" r="5" fill="var(--color-brand-500, #f97316)"/>
      <rect x="45" y="117" width="90" height="6" rx="3" fill="#334155"/>
    </svg>`,
  },
  {
    id: 'grid-stats-4',
    title: 'Lưới 4 Cột (Stats / Con Số)',
    category: 'layout',
    description: 'Dùng nền trắng, bo góc, viền nhẹ, text căn giữa để đập ngay con số vào mắt người đọc. Dành cho 4 items ngắn gọn.',
    exampleUrl: '/fit-tour-nam-2025',
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #f8fafc; border: 1px solid #e2e8f0;">
      <!-- Col 1 -->
      <rect x="10" y="30" width="60" height="90" rx="4" fill="#ffffff" stroke="#e2e8f0"/>
      <rect x="25" y="45" width="30" height="15" rx="4" fill="var(--color-brand-600, #ea580c)"/>
      <rect x="20" y="70" width="40" height="6" rx="3" fill="#334155"/>
      <rect x="15" y="85" width="50" height="4" rx="2" fill="#94a3b8"/>
      <rect x="15" y="95" width="45" height="4" rx="2" fill="#94a3b8"/>
      <!-- Col 2 -->
      <rect x="80" y="30" width="60" height="90" rx="4" fill="#ffffff" stroke="#e2e8f0"/>
      <rect x="95" y="45" width="30" height="15" rx="4" fill="var(--color-brand-600, #ea580c)"/>
      <rect x="90" y="70" width="40" height="6" rx="3" fill="#334155"/>
      <rect x="85" y="85" width="50" height="4" rx="2" fill="#94a3b8"/>
      <rect x="85" y="95" width="45" height="4" rx="2" fill="#94a3b8"/>
      <!-- Col 3 -->
      <rect x="150" y="30" width="60" height="90" rx="4" fill="#ffffff" stroke="#e2e8f0"/>
      <rect x="165" y="45" width="30" height="15" rx="4" fill="var(--color-brand-600, #ea580c)"/>
      <rect x="160" y="70" width="40" height="6" rx="3" fill="#334155"/>
      <rect x="155" y="85" width="50" height="4" rx="2" fill="#94a3b8"/>
      <rect x="155" y="95" width="45" height="4" rx="2" fill="#94a3b8"/>
      <!-- Col 4 -->
      <rect x="220" y="30" width="60" height="90" rx="4" fill="#ffffff" stroke="#e2e8f0"/>
      <rect x="235" y="45" width="30" height="15" rx="4" fill="var(--color-brand-600, #ea580c)"/>
      <rect x="230" y="70" width="40" height="6" rx="3" fill="#334155"/>
      <rect x="225" y="85" width="50" height="4" rx="2" fill="#94a3b8"/>
      <rect x="225" y="95" width="45" height="4" rx="2" fill="#94a3b8"/>
    </svg>`,
  },
  {
    id: 'grid-features-3',
    title: 'Lưới 3 Cột (Features / Tính năng)',
    category: 'layout',
    description: 'Khoảng cách thoáng hơn, con số hoặc icon to ở trên, và có thể chèn link "Xem Chi Tiết" ở dưới đáy.',
    exampleUrl: '/fit-tour-top-de-cu-hotlist-travellive-2025',
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #f8fafc; border: 1px solid #e2e8f0;">
      <!-- Col 1 -->
      <rect x="15" y="25" width="80" height="100" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
      <rect x="35" y="40" width="40" height="20" rx="4" fill="var(--color-brand-600, #ea580c)"/>
      <rect x="30" y="70" width="50" height="8" rx="4" fill="#334155"/>
      <rect x="25" y="90" width="60" height="5" rx="2.5" fill="#94a3b8"/>
      <rect x="35" y="105" width="40" height="5" rx="2.5" fill="var(--color-brand-600, #ea580c)"/>
      <!-- Col 2 -->
      <rect x="110" y="25" width="80" height="100" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
      <rect x="130" y="40" width="40" height="20" rx="4" fill="var(--color-brand-600, #ea580c)"/>
      <rect x="125" y="70" width="50" height="8" rx="4" fill="#334155"/>
      <rect x="120" y="90" width="60" height="5" rx="2.5" fill="#94a3b8"/>
      <rect x="130" y="105" width="40" height="5" rx="2.5" fill="var(--color-brand-600, #ea580c)"/>
      <!-- Col 3 -->
      <rect x="205" y="25" width="80" height="100" rx="6" fill="#ffffff" stroke="#e2e8f0"/>
      <rect x="225" y="40" width="40" height="20" rx="4" fill="var(--color-brand-600, #ea580c)"/>
      <rect x="220" y="70" width="50" height="8" rx="4" fill="#334155"/>
      <rect x="215" y="90" width="60" height="5" rx="2.5" fill="#94a3b8"/>
      <rect x="225" y="105" width="40" height="5" rx="2.5" fill="var(--color-brand-600, #ea580c)"/>
    </svg>`,
  },
  {
    id: 'grid-highlights-2x2',
    title: 'Lưới 2 Cột (Highlights)',
    category: 'layout',
    description: 'Dùng nền màu xám nhạt (bg-slate-50) để dịu mắt, text căn trái chuẩn "Reading Pattern" vì khối văn bản dài hơn. CSS Grid grid-cols-2 sẽ tự động ngắt xuống hàng khi có nhiều hơn 2 items.',
    exampleUrl: '/fit-tour-nam-2025',
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #ffffff; border: 1px solid #e2e8f0;">
      <!-- Row 1, Col 1 -->
      <rect x="20" y="20" width="120" height="50" rx="6" fill="#f8fafc" stroke="#f1f5f9"/>
      <rect x="30" y="32" width="60" height="6" rx="3" fill="#1e3a8a"/>
      <rect x="30" y="48" width="100" height="4" rx="2" fill="#64748b"/>
      <rect x="30" y="56" width="80" height="4" rx="2" fill="#64748b"/>
      <!-- Row 1, Col 2 -->
      <rect x="160" y="20" width="120" height="50" rx="6" fill="#f8fafc" stroke="#f1f5f9"/>
      <rect x="170" y="32" width="70" height="6" rx="3" fill="#1e3a8a"/>
      <rect x="170" y="48" width="100" height="4" rx="2" fill="#64748b"/>
      <rect x="170" y="56" width="90" height="4" rx="2" fill="#64748b"/>
      <!-- Row 2, Col 1 -->
      <rect x="20" y="80" width="120" height="50" rx="6" fill="#f8fafc" stroke="#f1f5f9"/>
      <rect x="30" y="92" width="50" height="6" rx="3" fill="#1e3a8a"/>
      <rect x="30" y="108" width="100" height="4" rx="2" fill="#64748b"/>
      <rect x="30" y="116" width="85" height="4" rx="2" fill="#64748b"/>
      <!-- Row 2, Col 2 -->
      <rect x="160" y="80" width="120" height="50" rx="6" fill="#f8fafc" stroke="#f1f5f9"/>
      <rect x="170" y="92" width="80" height="6" rx="3" fill="#1e3a8a"/>
      <rect x="170" y="108" width="100" height="4" rx="2" fill="#64748b"/>
      <rect x="170" y="116" width="75" height="4" rx="2" fill="#64748b"/>
    </svg>`,
  },
  {
    id: 'gallery-story-3',
    title: 'Story Gallery (3 Cột)',
    category: ['gallery', 'tour'],
    description: 'Layout dạng lưới đều đặn, ảnh giữ nguyên tỉ lệ gốc, caption nằm sát bên dưới. Thích hợp cho bài viết dạng kể chuyện (Editorial).',
    exampleUrl: '/hinh-anh-le-hoi-hemis',
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #f8fafc; border: 1px solid #e2e8f0;">
      <rect x="20" y="20" width="80" height="80" rx="4" fill="#cbd5e1"/>
      <rect x="20" y="110" width="60" height="8" rx="4" fill="#94a3b8"/>
      
      <rect x="110" y="20" width="80" height="80" rx="4" fill="#cbd5e1"/>
      <rect x="110" y="110" width="70" height="8" rx="4" fill="#94a3b8"/>
      
      <rect x="200" y="20" width="80" height="80" rx="4" fill="#cbd5e1"/>
      <rect x="200" y="110" width="50" height="8" rx="4" fill="#94a3b8"/>
    </svg>`,
  },
  {
    id: 'gallery-story-3-breakout',
    title: 'Story Gallery (3 Cột - Tràn viền)',
    category: ['gallery', 'tour'],
    description: 'Giống Story Gallery 3 cột nhưng bung rộng tối đa toàn màn hình (Breakout).',
    exampleUrl: '/fit-tour-thang-giai-bespoke-tour-nam-thu-2-lien-tiep',
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #f8fafc; border: 1px solid #e2e8f0;">
      <rect x="0" y="20" width="95" height="80" fill="#cbd5e1"/>
      <rect x="15" y="110" width="70" height="8" rx="4" fill="#94a3b8"/>
      
      <rect x="105" y="20" width="90" height="80" fill="#cbd5e1"/>
      <rect x="115" y="110" width="70" height="8" rx="4" fill="#94a3b8"/>
      
      <rect x="205" y="20" width="95" height="80" fill="#cbd5e1"/>
      <rect x="215" y="110" width="70" height="8" rx="4" fill="#94a3b8"/>
      
      <!-- Breakout arrows -->
      <path d="M20 55L10 55L15 50M10 55L15 60" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M280 55L290 55L285 50M290 55L285 60" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    id: 'gallery-story-4-breakout',
    title: 'Story Gallery (4 Cột - Tràn viền)',
    category: ['gallery', 'tour'],
    description: 'Giống Story Gallery nhưng chia làm 4 cột và bung rộng tối đa toàn màn hình (Breakout). Dùng cho những album ảnh phong cảnh hoành tráng.',
    exampleUrl: '/hinh-anh-le-hoi-hemis',
    templateHtml: `<div class="coguu-gallery-story cols-4 gallery-breakout">
  <div class="feature-box">
    <img src="https://media.fittour.vn/wp-content/uploads/2024/06/le-hoi-hemis-ladakh-truyen-thong.jpg" alt="Mô tả ảnh 1" class="feature-image" loading="lazy" />
    <div class="feature-overlay"></div>
  </div>
  <div class="feature-box" style="display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#fdf2f8,#faf5ff,#eff6ff);aspect-ratio:1/1;padding:2rem;">
    <p class="mood-text" style="column-span:unset;margin:0;">
      Hòa mình vào vũ điệu mặt nạ rực rỡ sắc màu, cảm nhận nhịp đập tâm linh mãnh liệt của vùng đất Phật giáo trên mây...
    </p>
  </div>
  <div class="feature-box">
    <img src="https://media.fittour.vn/uploads/2024/06/nguoi-xem-mua-mat-na-trong-le-hoi-tu-tuong-thanh-cao.webp" alt="Mô tả ảnh 3" class="feature-image" loading="lazy" />
    <div class="feature-overlay"></div>
  </div>
  <div class="feature-box">
    <img src="https://media.fittour.vn/uploads/2024/06/san-day-ngap-nguoi-tai-le-hoi-hemis.webp" alt="Mô tả ảnh 4" class="feature-image" loading="lazy" />
    <div class="feature-overlay"></div>
  </div>
</div>`,
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #f8fafc; border: 1px solid #e2e8f0;">
      <rect x="0" y="20" width="70" height="70" fill="#cbd5e1"/>
      <rect x="10" y="100" width="50" height="6" rx="3" fill="#94a3b8"/>
      
      <rect x="75" y="20" width="70" height="70" fill="#cbd5e1"/>
      <rect x="85" y="100" width="50" height="6" rx="3" fill="#94a3b8"/>
      
      <rect x="150" y="20" width="70" height="70" fill="#cbd5e1"/>
      <rect x="160" y="100" width="50" height="6" rx="3" fill="#94a3b8"/>
      
      <rect x="225" y="20" width="75" height="70" fill="#cbd5e1"/>
      <rect x="235" y="100" width="50" height="6" rx="3" fill="#94a3b8"/>
      <!-- Breakout arrows -->
      <path d="M15 55L5 55L10 50M5 55L10 60" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M285 55L295 55L290 50M295 55L290 60" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
  },
  {
    id: 'gallery-masonry',
    title: 'Masonry Gallery (Xếp gạch)',
    category: ['gallery', 'tour'],
    description: 'Layout xếp gạch so le cổ điển. Các ảnh tự động lấp đầy khoảng trống. Không có chú thích chữ.',
    exampleUrl: '/hinh-anh-mua-hoa-dao-o-trung-quoc',
    templateHtml: `<div class="grid-fit-masonry coguu-gallery-cols-2">
  <div class="feature-box break-inside-avoid mb-6">
    <img src="https://media.fittour.vn/wp-content/uploads/2023/11/mong-co-fittour-10.jpg" alt="Mô tả ảnh 1" class="feature-image w-full h-full object-cover rounded-2xl shadow-2xl" loading="lazy" />
    <div class="feature-overlay"></div>
  </div>
  <div class="feature-box break-inside-avoid mb-6">
    <img src="https://media.fittour.vn/wp-content/uploads/2023/11/mong-co-fittour-13.jpg" alt="Mô tả ảnh 2" class="feature-image w-full h-full object-cover rounded-2xl shadow-2xl" loading="lazy" />
    <div class="feature-overlay"></div>
  </div>
  <div class="feature-box break-inside-avoid mb-6">
    <img src="https://media.fittour.vn/wp-content/uploads/2023/11/mong-co-fittour-18.jpg" alt="Mô tả ảnh 3" class="feature-image w-full h-full object-cover rounded-2xl shadow-2xl" loading="lazy" />
    <div class="feature-overlay"></div>
  </div>
  <div class="feature-box break-inside-avoid mb-6">
    <img src="https://media.fittour.vn/wp-content/uploads/2023/11/mong-co-fittour-25.jpg" alt="Mô tả ảnh 4" class="feature-image w-full h-full object-cover rounded-2xl shadow-2xl" loading="lazy" />
    <div class="feature-overlay"></div>
  </div>
</div>`,
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #f8fafc; border: 1px solid #e2e8f0;">
      <rect x="20" y="20" width="80" height="100" rx="4" fill="#cbd5e1"/>
      <rect x="110" y="20" width="80" height="60" rx="4" fill="#94a3b8"/>
      <rect x="110" y="90" width="80" height="40" rx="4" fill="#e2e8f0"/>
      <rect x="200" y="20" width="80" height="40" rx="4" fill="#e2e8f0"/>
      <rect x="200" y="70" width="80" height="60" rx="4" fill="#94a3b8"/>
    </svg>`,
  },
  {
    id: 'cta-premium',
    title: 'CTA Premium (Khối Kêu gọi Đăng ký Tour Đẹp)',
    category: 'cta',
    description: 'Thiết kế nút CTA kích thước lớn, bo góc, có hình nền mờ. Đã được chuyển đổi sang Shortcode. Cú pháp: [cta layout="premium" title="Tiêu đề" subtitle="Phụ đề" image="/url-anh" btn_label="Liên hệ Zalo" btn_href="..."]',
    exampleUrl: '/hinh-anh-mua-hoa-dao-o-trung-quoc',
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #f8fafc; border: 1px solid #e2e8f0;">
      <rect x="20" y="20" width="260" height="110" rx="8" fill="#e0e7ff"/>
      <rect x="40" y="40" width="100" height="12" rx="6" fill="#4338ca"/>
      <rect x="40" y="60" width="180" height="8" rx="4" fill="#94a3b8"/>
      <rect x="40" y="75" width="140" height="8" rx="4" fill="#94a3b8"/>
      <rect x="180" y="40" width="80" height="30" rx="15" fill="var(--color-brand-600, #ea580c)"/>
    </svg>`,
  },
  {
    id: 'cta-split',
    title: 'CTA Split (Banner Liên hệ chia đôi)',
    category: 'cta',
    description: 'Thiết kế chia đôi 2 cột: 1 bên chữ/nút liên hệ Zalo, 1 bên hình ảnh phong cảnh. Cực kỳ bắt mắt và chuyên nghiệp.',
    exampleUrl: '/hinh-anh-mua-hoa-dao-o-trung-quoc',
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #f8fafc; border: 1px solid #e2e8f0;">
      <rect x="20" y="25" width="260" height="100" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
      <rect x="40" y="45" width="80" height="10" rx="5" fill="#334155"/>
      <rect x="40" y="65" width="90" height="6" rx="3" fill="#94a3b8"/>
      <rect x="40" y="85" width="100" height="20" rx="4" fill="#3b82f6"/>
      <rect x="160" y="35" width="100" height="80" rx="6" fill="#cbd5e1"/>
    </svg>`,
  },
  {
    id: 'cta-compact',
    title: 'CTA Compact (Dải Banner ngang mỏng)',
    category: 'cta',
    description: 'Dải banner ngang mỏng, hiển thị gọn gàng, dùng để chèn ngang giữa bài viết để giới thiệu Tour một cách tế nhị, không phá vỡ mạch đọc.',
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #f8fafc; border: 1px solid #e2e8f0;">
      <rect x="20" y="55" width="260" height="40" rx="6" fill="#f1f5f9" stroke="#cbd5e1"/>
      <rect x="35" y="70" width="120" height="10" rx="5" fill="#334155"/>
      <rect x="210" y="63" width="55" height="24" rx="12" fill="var(--color-brand-600, #ea580c)"/>
    </svg>`,
  },
  {
    id: 'cta-banner',
    title: 'CTA Banner (Dải Banner xanh truyền thống)',
    category: 'cta',
    description: 'Banner màu xanh dương đậm có hoa văn mờ, tiêu đề lớn ở giữa, nút bấm màu cam bên dưới.',
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #f8fafc; border: 1px solid #e2e8f0;">
      <rect x="20" y="30" width="260" height="90" rx="6" fill="#1e3a8a"/>
      <rect x="70" y="50" width="160" height="10" rx="5" fill="#ffffff"/>
      <rect x="100" y="70" width="100" height="6" rx="3" fill="#93c5fd"/>
      <rect x="110" y="90" width="80" height="20" rx="10" fill="var(--color-brand-600, #ea580c)"/>
    </svg>`,
  },
  {
    id: 'cta-related-post',
    title: 'CTA Bài Viết Liên Quan',
    category: 'cta',
    description: 'Khối giới thiệu bài viết liên quan dạng card ngang. Ảnh bên trái giữ nguyên tỉ lệ 16:9, bên phải gồm: phụ đề (canh ngang mép trên ảnh), tiêu đề cam in đậm, đường kẻ, và nút CTA cam (canh ngang mép dưới ảnh). Cần 5 class: cta-related-post, cta-related-post-image-wrap, cta-related-post-image, cta-related-post-content, cta-related-post-subtitle, cta-related-post-title, cta-related-post-divider, cta-related-post-btn.',
    exampleUrl: '/fit-tour-thang-giai-bespoke-tour-nam-thu-2-lien-tiep',
    previewSvg: `<svg viewBox="0 0 320 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 10px; background: #f8fafc; border: 1px solid #e2e8f0;">
      <rect x="15" y="20" width="290" height="110" rx="10" fill="#ffffff" stroke="#e2e8f0"/>
      <rect x="25" y="30" width="120" height="90" rx="8" fill="#cbd5e1"/>
      <rect x="50" y="55" width="70" height="8" rx="3" fill="#94a3b8"/>
      <rect x="55" y="70" width="60" height="8" rx="3" fill="#94a3b8"/>
      <rect x="155" y="32" width="70" height="6" rx="3" fill="#374151"/>
      <rect x="155" y="46" width="135" height="8" rx="4" fill="var(--color-brand-500, #f97316)"/>
      <rect x="155" y="60" width="100" height="8" rx="4" fill="var(--color-brand-500, #f97316)"/>
      <line x1="155" y1="85" x2="290" y2="85" stroke="#e2e8f0" stroke-width="1.5"/>
      <rect x="155" y="98" width="110" height="18" rx="5" fill="var(--color-brand-500, #f97316)"/>
      <rect x="165" y="103" width="70" height="7" rx="3" fill="#ffffff"/>
    </svg>`,
  },
  {
    id: 'cta-button',
    title: 'Nút Bấm Đơn Giản',
    category: 'cta',
    description: 'Chỉ là một nút bấm nổi bật màu cam, căn giữa màn hình để kêu gọi khách hàng đăng ký hoặc gọi điện.',
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #f8fafc; border: 1px solid #e2e8f0;">
      <rect x="80" y="55" width="140" height="40" rx="20" fill="var(--color-brand-600, #ea580c)"/>
      <rect x="115" y="71" width="70" height="8" rx="4" fill="#ffffff"/>
    </svg>`,
  },
  {
    id: 'znews-parallax',
    title: 'Znews Cinematic Scroll',
    category: 'landing-page',
    description: 'Bố cục bài đọc E-magazine cao cấp. Ảnh nền cố định toàn màn hình, nội dung trượt lên trong hộp kính mờ (Glassmorphism). Cực kỳ thích hợp cho các bài viết Nhật ký Hành trình hoặc Landing page giới thiệu tour.',
    exampleUrl: '/hanh-trinh-tan-cuong',
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #1e293b; border: 1px solid #e2e8f0; overflow: hidden;">
      <!-- Mountain Background -->
      <rect x="0" y="0" width="300" height="150" fill="#334155"/>
      <path d="M-20 150 L80 50 L150 90 L250 20 L320 100 L320 150 Z" fill="#475569"/>
      <circle cx="240" cy="40" r="15" fill="#94a3b8" opacity="0.6"/>
      <!-- Glassmorphism Text Box -->
      <rect x="30" y="40" width="140" height="70" rx="8" fill="rgba(255, 255, 255, 0.85)" stroke="#ffffff" stroke-width="1.5"/>
      <rect x="45" y="55" width="80" height="8" rx="4" fill="#334155"/>
      <rect x="45" y="75" width="110" height="4" rx="2" fill="#64748b"/>
      <rect x="45" y="85" width="90" height="4" rx="2" fill="#64748b"/>
      <!-- Scroll Indicator -->
      <path d="M140 130 L150 140 L160 130" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
    </svg>`,
  },
  {
    id: 'facebook-profile',
    title: 'Facebook Profile Layout',
    category: 'landing-page',
    description: 'Bố cục bài viết dạng Nhật ký (Diary) mô phỏng chính xác giao diện Facebook Profile. Có ảnh bìa, avatar, cột thông tin và dòng thời gian. Rất dễ chỉnh sửa bằng HTML.',
    exampleUrl: '/nhat-ky-hanh-trinh-nhat-ban-cua-mm-architects',
    templateHtml: `<style>
  /* Hide Astro Default Header & Figure */
  article > header { display: none !important; }
  article > figure { display: none !important; }
  nav[aria-label="Breadcrumb"] { display: none !important; }
</style>
<img src="https://media.fittour.vn/wp-content/uploads/2025/11/blank-cover.jpg" style="display:none;" alt="dummy for sanitizer" />

<div class="fb-profile-wrapper">
  <!-- Header -->
  <div class="fb-header-container">
    <div class="fb-cover-container">
      <img src="https://media.fittour.vn/wp-content/uploads/2025/11/blank-cover.jpg" class="fb-cover-photo" alt="Cover" />
      <div class="fb-avatar-section">
        <img src="https://media.fittour.vn/wp-content/uploads/2025/11/blank-avatar.jpg" class="fb-avatar-img" alt="Avatar" />
        <div class="fb-profile-info">
          <div class="fb-profile-name">
            Tên Công Ty / Người Viết
            <svg class="fb-blue-tick" viewBox="0 0 24 24"><path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M10.465,17.375L6.18,13.09l1.414-1.414l2.871,2.871l7.071-7.071l1.414,1.414L10.465,17.375z" fill="currentColor"/></svg>
          </div>
          <p class="fb-profile-bio">Đoạn giới thiệu ngắn về cá nhân hoặc công ty.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="fb-layout-grid">
    <!-- Left Col (Intro & Photos) -->
    <div class="fb-left-col">
      <div class="fb-box">
        <h2 class="fb-box-title">Giới thiệu</h2>
        <div class="fb-post-content" style="padding: 0;">
          <p>Nội dung phần giới thiệu sẽ nằm ở đây. Bạn có thể sử dụng các thẻ p để tạo các đoạn văn bản.</p>
        </div>
      </div>
    </div>

    <!-- Right Col (Timeline Posts) -->
    <div class="fb-right-col">
      <!-- Post 1: TRƯỜNG HỢP CÓ 1 ẢNH (Thêm style="columns: 1;") -->
      <div class="fb-box fb-post">
        <div class="fb-post-header">
          <img src="https://media.fittour.vn/wp-content/uploads/2025/11/blank-avatar.jpg" class="fb-post-avatar" alt="Author" />
          <div>
            <h3 class="fb-post-author">Tên Tác Giả</h3>
            <div class="fb-post-meta">
              <span>Ngày Tháng lúc 00:00</span>
              <span>·</span>
              <svg viewBox="0 0 16 16"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.98 4.2c-.42.9-1.07 1.62-1.8 2.05v.23a4 4 0 01-4 4h-.13a5.52 5.52 0 01-1.63-2.31c.21-.05.42-.1.62-.16 1.48-.46 2.45-1.57 2.45-2.88V4.87c1.37.12 2.65.7 3.65 1.57-.4-.73-.83-1.4-1.16-2.24zM8 1.5a6.5 6.5 0 014.7 1.96c-.44.82-.9 1.51-1.34 2.2-.82-.72-1.87-1.15-3.02-1.15h-.2l-.12-1.56A6.5 6.5 0 018 1.5zM2.87 9.87c.2.66.48 1.28.84 1.84A6.47 6.47 0 011.5 8c0-1.68.64-3.2 1.68-4.34L3.6 5.86c-.52.54-.85 1.25-.85 2.03 0 .74.22 1.43.6 2.01L2.87 9.87z"/></svg>
            </div>
          </div>
        </div>
        <div class="fb-post-content">
          <p>Đây là trường hợp bài viết chỉ có 1 ảnh duy nhất. Lúc này cần thêm thẻ <strong>style="columns: 1;"</strong> vào class <strong>fb-masonry</strong> để ảnh hiển thị full width cực to và rõ ràng.</p>
        </div>
        <div class="fb-masonry" style="columns: 1;">
          <div class="fb-masonry-item"><a href="https://media.fittour.vn/wp-content/uploads/2025/11/blank-photo.jpg" class="glightbox"><img src="https://media.fittour.vn/wp-content/uploads/2025/11/blank-photo.jpg" class="feature-image w-full h-full object-cover" /></a></div>
        </div>
        <div class="fb-post-stats">
          <div class="flex items-center gap-1">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#1877F2"/><path d="M10 5.5C10 4.67157 9.32843 4 8.5 4C8.08579 4 7.75 4.33579 7.75 4.75V6.5H5.5C4.67157 6.5 4 7.17157 4 8V12.5C4 13.3284 4.67157 14 5.5 14H11.2185C12.185 14 13.0185 13.3031 13.1903 12.3508L13.8219 8.85081C14.0537 7.56515 13.0673 6.5 11.7645 6.5H10V5.5Z" fill="white"/><path d="M7 7.5V13.5" stroke="#1877F2" stroke-width="1.5"/></svg>
            <span class="ml-1">1.2K</span>
          </div>
          <div>120 bình luận</div>
        </div>
        <div class="fb-post-actions">
          <div class="fb-action-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>Thích</div>
          <div class="fb-action-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>Bình luận</div>
          <div class="fb-action-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20v-8a2 2 0 0 1 2-2h14"></path><polyline points="14 5 21 10 14 15"></polyline></svg>Chia sẻ</div>
        </div>
      </div>

      <!-- Post 2: TRƯỜNG HỢP NHIỀU ẢNH (Để mặc định) -->
      <div class="fb-box fb-post">
        <div class="fb-post-header">
          <img src="https://media.fittour.vn/wp-content/uploads/2025/11/blank-avatar.jpg" class="fb-post-avatar" alt="Author" />
          <div>
            <h3 class="fb-post-author">Tên Tác Giả</h3>
            <div class="fb-post-meta">
              <span>Đã thêm 2 ảnh mới</span>
              <span>·</span>
              <svg viewBox="0 0 16 16"><path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.98 4.2c-.42.9-1.07 1.62-1.8 2.05v.23a4 4 0 01-4 4h-.13a5.52 5.52 0 01-1.63-2.31c.21-.05.42-.1.62-.16 1.48-.46 2.45-1.57 2.45-2.88V4.87c1.37.12 2.65.7 3.65 1.57-.4-.73-.83-1.4-1.16-2.24zM8 1.5a6.5 6.5 0 014.7 1.96c-.44.82-.9 1.51-1.34 2.2-.82-.72-1.87-1.15-3.02-1.15h-.2l-.12-1.56A6.5 6.5 0 018 1.5zM2.87 9.87c.2.66.48 1.28.84 1.84A6.47 6.47 0 011.5 8c0-1.68.64-3.2 1.68-4.34L3.6 5.86c-.52.54-.85 1.25-.85 2.03 0 .74.22 1.43.6 2.01L2.87 9.87z"/></svg>
            </div>
          </div>
        </div>
        <div class="fb-post-content">
          <p>Trường hợp bài viết có nhiều ảnh (từ 2 ảnh trở lên), bạn KHÔNG cần thêm style gì cả. Class <strong>fb-masonry</strong> mặc định sẽ tự động chia 2 cột đẹp mắt.</p>
        </div>
        <div class="fb-masonry">
          <div class="fb-masonry-item"><a href="https://media.fittour.vn/wp-content/uploads/2025/11/blank-photo.jpg" class="glightbox"><img src="https://media.fittour.vn/wp-content/uploads/2025/11/blank-photo.jpg" class="feature-image w-full h-full object-cover" /></a></div>
          <div class="fb-masonry-item"><a href="https://media.fittour.vn/wp-content/uploads/2025/11/blank-photo.jpg" class="glightbox"><img src="https://media.fittour.vn/wp-content/uploads/2025/11/blank-photo.jpg" class="feature-image w-full h-full object-cover" /></a></div>
        </div>
        <div class="fb-post-stats">
          <div class="flex items-center gap-1">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="9" fill="#1877F2"/><path d="M10 5.5C10 4.67157 9.32843 4 8.5 4C8.08579 4 7.75 4.33579 7.75 4.75V6.5H5.5C4.67157 6.5 4 7.17157 4 8V12.5C4 13.3284 4.67157 14 5.5 14H11.2185C12.185 14 13.0185 13.3031 13.1903 12.3508L13.8219 8.85081C14.0537 7.56515 13.0673 6.5 11.7645 6.5H10V5.5Z" fill="white"/><path d="M7 7.5V13.5" stroke="#1877F2" stroke-width="1.5"/></svg>
            <span class="ml-1">850</span>
          </div>
          <div>55 bình luận</div>
        </div>
        <div class="fb-post-actions">
          <div class="fb-action-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3"/></svg>Thích</div>
          <div class="fb-action-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>Bình luận</div>
          <div class="fb-action-btn"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20v-8a2 2 0 0 1 2-2h14"></path><polyline points="14 5 21 10 14 15"></polyline></svg>Chia sẻ</div>
        </div>
      </div>
    </div>
  </div>
</div>`,
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #f0f2f5; border: 1px solid #e2e8f0; overflow: hidden;">
      <!-- Cover -->
      <rect x="0" y="0" width="300" height="60" fill="#cbd5e1"/>
      <path d="M0 60 L60 30 L120 50 L200 20 L300 60 Z" fill="#94a3b8"/>
      <!-- Avatar -->
      <circle cx="150" cy="50" r="25" fill="#e2e8f0" stroke="#ffffff" stroke-width="3"/>
      <!-- Name -->
      <rect x="120" y="85" width="60" height="6" rx="3" fill="#1e293b"/>
      <!-- Grid -->
      <rect x="15" y="105" width="80" height="40" rx="4" fill="#ffffff" stroke="#e2e8f0"/>
      <rect x="25" y="115" width="40" height="4" rx="2" fill="#94a3b8"/>
      <rect x="105" y="105" width="180" height="60" rx="4" fill="#ffffff" stroke="#e2e8f0"/>
      <circle cx="120" cy="120" r="8" fill="#cbd5e1"/>
      <rect x="135" y="115" width="40" height="4" rx="2" fill="#334155"/>
      <rect x="135" y="123" width="30" height="3" rx="1.5" fill="#94a3b8"/>
    </svg>`,
  },
  {
    id: 'freedom-layout',
    title: 'Freedom Layout (Grid Cards)',
    category: 'landing-page',
    description: 'Bố cục hiện đại với lưới các thẻ (Cards) có icon dấu tích, phù hợp cho danh sách tính năng, hướng dẫn hoặc các mục liệt kê. Bao gồm cả khối Thống kê (Callout) nổi bật.',
    templateHtml: `<style>
  /* Hide Astro Default Header & Figure */
  article > header { display: none !important; }
  article > figure { display: none !important; }
  nav[aria-label="Breadcrumb"] { display: none !important; }

  .freedom-card {
    background: #ffffff;
    border-radius: 1rem;
    padding: 1.5rem;
    border: 1px solid #e5e7eb;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .freedom-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
  .check-icon {
    width: 2.5rem;
    height: 2.5rem;
    background: #fef3c7;
    color: #f59e0b;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }
</style>

<div class="max-w-7xl mx-auto px-4 py-12 bg-[#f9f7f2]">
  <!-- Intro Section -->
  <div class="max-w-3xl mx-auto text-center mb-12">
    <h1 class="text-3xl md:text-5xl font-black text-[var(--color-brand-600, #ea580c)] uppercase mb-6">Tiêu đề bài viết</h1>
    <p class="text-lg text-slate-600 mb-8">Đoạn giới thiệu ngắn gọn và súc tích về nội dung bài viết.</p>
    
    <div class="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl text-left shadow-sm">
      <div class="flex items-center gap-3 mb-2">
        <span class="text-2xl">🚀</span>
        <h3 class="text-xl font-bold text-amber-900 m-0">Thống kê / Điểm nhấn</h3>
      </div>
      <p class="text-amber-800 m-0">Nội dung quan trọng cần làm nổi bật sẽ nằm ở đây.</p>
    </div>
  </div>

  <!-- Grid of Cards -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    <div class="freedom-card">
      <div class="check-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <h2 class="text-xl font-bold text-slate-900 mb-4 mt-0">Mục tiêu đề 1</h2>
      <p class="text-slate-600">Mô tả chi tiết về mục này. Bạn có thể thay đổi nội dung này tùy ý.</p>
    </div>
    <div class="freedom-card">
      <div class="check-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <h2 class="text-xl font-bold text-slate-900 mb-4 mt-0">Mục tiêu đề 2</h2>
      <p class="text-slate-600">Mô tả chi tiết về mục này. Bạn có thể thay đổi nội dung này tùy ý.</p>
    </div>
    <div class="freedom-card">
      <div class="check-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
      </div>
      <h2 class="text-xl font-bold text-slate-900 mb-4 mt-0">Mục tiêu đề 3</h2>
      <p class="text-slate-600">Mô tả chi tiết về mục này. Bạn có thể thay đổi nội dung này tùy ý.</p>
    </div>
  </div>
</div>`,
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #f9f7f2; border: 1px solid #e2e8f0;">
      <rect x="20" y="20" width="260" height="10" rx="5" fill="var(--color-brand-600, #ea580c)"/>
      <rect x="20" y="40" width="80" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
      <circle cx="35" cy="55" r="8" fill="#fef3c7"/>
      <rect x="110" y="40" width="80" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
      <circle cx="125" cy="55" r="8" fill="#fef3c7"/>
      <rect x="200" y="40" width="80" height="40" rx="8" fill="#ffffff" stroke="#e2e8f0"/>
      <circle cx="215" cy="55" r="8" fill="#fef3c7"/>
      <rect x="20" y="95" width="260" height="40" rx="8" fill="#fffbeb" stroke="#fde68a"/>
    </svg>`,
  },
  {
    id: 'faq-apple',
    title: 'Câu Hỏi Thường Gặp (FAQ) - Apple Style',
    category: ['layout', 'tour'],
    description: 'Bố cục FAQ tinh tế, chuẩn Apple/Google. Viền mỏng, có hiệu ứng Fade-in mượt mà khi mở, không sử dụng class Tailwind rối rắm. Copy mã HTML bên dưới và dán vào tính năng Raw HTML.',
    templateHtml: `<section class="faq-section">
  <h2 class="faq-title">Câu hỏi thường gặp</h2>
  <div class="faq-wrapper">

    <!-- Item 1 (Open mặc định) -->
    <details class="faq-item" open>
      <summary class="faq-summary">
        Câu hỏi của khách hàng nằm ở đây?
        <span class="icon">+</span>
      </summary>
      <div class="content">
        Câu trả lời chi tiết cho khách hàng. Bạn có thể sử dụng văn bản dài thoải mái.
      </div>
    </details>

    <!-- Item 2 -->
    <details class="faq-item">
      <summary class="faq-summary">
        Tôi có thể thêm nhiều câu hỏi không?
        <span class="icon">+</span>
      </summary>
      <div class="content">
        Hoàn toàn được. Chỉ cần copy phần tử "details" này và dán thêm bao nhiêu tùy thích.
      </div>
    </details>

  </div>
</section>`,
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #ffffff; border: 1px solid #e2e8f0;">
      <!-- Title -->
      <rect x="100" y="20" width="100" height="8" rx="4" fill="#1e293b"/>
      
      <!-- Opened Item -->
      <line x1="20" y1="45" x2="280" y2="45" stroke="#e2e8f0" stroke-width="1.5"/>
      <rect x="25" y="55" width="180" height="6" rx="3" fill="#334155"/>
      <line x1="262" y1="55" x2="270" y2="63" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
      <line x1="270" y1="55" x2="262" y2="63" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
      <rect x="25" y="70" width="230" height="4" rx="2" fill="#94a3b8"/>
      <rect x="25" y="80" width="150" height="4" rx="2" fill="#94a3b8"/>
      
      <!-- Closed Item -->
      <line x1="20" y1="100" x2="280" y2="100" stroke="#e2e8f0" stroke-width="1.5"/>
      <rect x="25" y="115" width="140" height="6" rx="3" fill="#334155"/>
      <line x1="266" y1="111" x2="266" y2="119" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
      <line x1="262" y1="115" x2="270" y2="115" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
      <line x1="20" y1="135" x2="280" y2="135" stroke="#e2e8f0" stroke-width="1.5"/>
    </svg>`,
  },
  {
    id: 'tour-image-slider',
    title: 'Tour Image Slider (Ảnh trượt)',
    category: 'tour',
    description: 'Slider ảnh premium dành riêng cho Landing Tour. Tỉ lệ 16:9, bo góc 16px, có nút mũi tên trái/phải, dots navigation, counter (1/N), autoplay 5s, và hỗ trợ touch swipe trên mobile. KHÔNG dùng GLightbox vì slider đã hiển thị ảnh full-width. CSS nằm trong tour-landing.css (Section 14).',
    exampleUrl: '/tour/trekking-trai-can-cu-everest',
    templateHtml: `<style>.tour-slider-container{position:relative;width:100%;overflow:hidden;border-radius:16px;background:#0f172a;aspect-ratio:16/9}.tour-slider-track{display:flex;width:100%;height:100%;transition:transform .5s cubic-bezier(.4,0,.2,1)}.tour-slide{min-width:100%;height:100%;position:relative;flex-shrink:0}.tour-slide-img{width:100%;height:100%;object-fit:cover;display:block}.tour-slider-arrow{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.9);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;z-index:10;box-shadow:0 2px 12px rgba(0,0,0,.18);transition:all .2s ease;color:#1e293b}.tour-slider-arrow:hover{background:#fff;box-shadow:0 4px 20px rgba(0,0,0,.25);transform:translateY(-50%) scale(1.08)}.tour-slider-prev{left:12px}.tour-slider-next{right:12px}.tour-slider-dots{position:absolute;bottom:16px;left:50%;transform:translateX(-50%);display:flex;gap:8px;z-index:10}.tour-slider-dot{width:10px;height:10px;border-radius:50%;border:2px solid rgba(255,255,255,.7);background:transparent;cursor:pointer;transition:all .3s ease;padding:0}.tour-slider-dot.active{background:#fff;border-color:#fff;transform:scale(1.2)}.tour-slider-counter{position:absolute;top:16px;right:16px;background:rgba(0,0,0,.55);color:#fff;font-size:13px;font-weight:600;padding:4px 12px;border-radius:20px;z-index:10;letter-spacing:.5px;backdrop-filter:blur(4px)}</style>
<div class="tour-slider-container">
  <div class="tour-slider-track">
    <div class="tour-slide active">
      <img src="https://media.fittour.vn/uploads/2022/11/du-khach-fit-tour-va-khung-canh-namche-bazaar.webp" alt="Slide 1" class="tour-slide-img" loading="eager" />
    </div>
    <div class="tour-slide">
      <img src="https://media.fittour.vn/uploads/2022/11/den-ngon-nui-voi-tam-nhin-360-do-ra-himalayas.webp" alt="Slide 2" class="tour-slide-img" loading="lazy" />
    </div>
    <div class="tour-slide">
      <img src="https://media.fittour.vn/uploads/2022/11/bat-dau-tu-ngoi-lang-de-den-phakding.webp" alt="Slide 3" class="tour-slide-img" loading="lazy" />
    </div>
  </div>
  <button class="tour-slider-arrow tour-slider-prev" aria-label="Previous">
    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
  </button>
  <button class="tour-slider-arrow tour-slider-next" aria-label="Next">
    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
  </button>
  <div class="tour-slider-dots">
    <button class="tour-slider-dot active" data-slide="0" aria-label="Slide 1"></button>
    <button class="tour-slider-dot" data-slide="1" aria-label="Slide 2"></button>
    <button class="tour-slider-dot" data-slide="2" aria-label="Slide 3"></button>
  </div>
  <div class="tour-slider-counter"><span class="tour-slider-current">1</span> / <span class="tour-slider-total">3</span></div>
</div>
<script>
(function(){
  const track=document.querySelector('.tour-slider-track');
  if(!track)return;
  const slides=track.querySelectorAll('.tour-slide');
  const dots=document.querySelectorAll('.tour-slider-dot');
  const counter=document.querySelector('.tour-slider-current');
  const prevBtn=document.querySelector('.tour-slider-prev');
  const nextBtn=document.querySelector('.tour-slider-next');
  let current=0,total=slides.length,autoTimer;
  function goTo(n){
    current=((n%total)+total)%total;
    track.style.transform='translateX(-'+current*100+'%)';
    dots.forEach((d,i)=>d.classList.toggle('active',i===current));
    if(counter)counter.textContent=current+1;
  }
  prevBtn?.addEventListener('click',()=>{goTo(current-1);resetAuto()});
  nextBtn?.addEventListener('click',()=>{goTo(current+1);resetAuto()});
  dots.forEach(d=>d.addEventListener('click',()=>{goTo(+d.dataset.slide);resetAuto()}));
  let startX=0;
  track.addEventListener('touchstart',e=>{startX=e.touches[0].clientX},{passive:true});
  track.addEventListener('touchend',e=>{const diff=startX-e.changedTouches[0].clientX;if(Math.abs(diff)>50){diff>0?goTo(current+1):goTo(current-1);resetAuto()}},{passive:true});
  function resetAuto(){clearInterval(autoTimer);autoTimer=setInterval(()=>goTo(current+1),5000)}
  autoTimer=setInterval(()=>goTo(current+1),5000);
})();
</script>`,
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #0f172a; border: 1px solid #e2e8f0; overflow: hidden;">
      <!-- Image area -->
      <rect x="0" y="0" width="300" height="150" rx="8" fill="#334155"/>
      <path d="M0 100 L80 50 L150 75 L250 30 L300 70 L300 150 L0 150 Z" fill="#475569"/>
      <!-- Left Arrow -->
      <circle cx="25" cy="75" r="14" fill="rgba(255,255,255,0.9)"/>
      <path d="M28 69L22 75L28 81" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Right Arrow -->
      <circle cx="275" cy="75" r="14" fill="rgba(255,255,255,0.9)"/>
      <path d="M272 69L278 75L272 81" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <!-- Dots -->
      <circle cx="130" cy="135" r="4" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.7)" stroke-width="1.5"/>
      <circle cx="145" cy="135" r="4.5" fill="#ffffff"/>
      <circle cx="160" cy="135" r="4" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.7)" stroke-width="1.5"/>
      <circle cx="175" cy="135" r="4" fill="rgba(255,255,255,0.4)" stroke="rgba(255,255,255,0.7)" stroke-width="1.5"/>
      <!-- Counter -->
      <rect x="240" y="10" width="50" height="22" rx="11" fill="rgba(0,0,0,0.55)"/>
      <text x="265" y="24" fill="white" font-size="11" font-weight="600" text-anchor="middle">2 / 5</text>
    </svg>`,
  },
  {
    id: 'shortcode-lich-khoi-hanh',
    title: 'Shortcode Lịch Khởi Hành B2C (Live ERP)',
    category: 'tour',
    description: 'Sử dụng shortcode [lich_khoi_hanh product_code="Mã-Tour"] để tự động hiển thị dữ liệu lịch khởi hành, giá cả, và tình trạng chỗ từ phần mềm điều hành FIT Tour (erp.fittour.vn) trực tiếp ra frontend.',
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #ffffff; border: 1px solid #e2e8f0;">
      <!-- Title -->
      <rect x="20" y="20" width="120" height="12" rx="3" fill="#1e293b"/>
      
      <!-- Table Header -->
      <rect x="20" y="45" width="260" height="20" rx="4" fill="#f8fafc" stroke="#e2e8f0"/>
      <rect x="30" y="52" width="60" height="6" rx="3" fill="#64748b"/>
      <rect x="110" y="52" width="50" height="6" rx="3" fill="#64748b"/>
      <rect x="180" y="52" width="40" height="6" rx="3" fill="#64748b"/>
      
      <!-- Row 1 -->
      <rect x="20" y="65" width="260" height="30" fill="#ffffff" stroke="#e2e8f0"/>
      <rect x="30" y="77" width="50" height="6" rx="3" fill="#0f172a"/>
      <rect x="110" y="77" width="40" height="6" rx="3" fill="var(--color-brand-600, #ea580c)"/>
      <rect x="180" y="75" width="40" height="10" rx="5" fill="#dcfce7"/>
      <rect x="235" y="73" width="35" height="14" rx="4" fill="var(--color-brand-500, #f97316)"/>
      
      <!-- Row 2 -->
      <rect x="20" y="95" width="260" height="30" fill="#ffffff" stroke="#e2e8f0"/>
      <rect x="30" y="107" width="50" height="6" rx="3" fill="#0f172a"/>
      <rect x="110" y="107" width="40" height="6" rx="3" fill="var(--color-brand-600, #ea580c)"/>
      <rect x="180" y="105" width="40" height="10" rx="5" fill="#fef3c7"/>
      <rect x="235" y="103" width="35" height="14" rx="4" fill="var(--color-brand-500, #f97316)"/>
    </svg>`,
    templateHtml: `<div style="font-family: inherit; color: #334155;">
      <h3 style="color: #0f172a; margin-top: 0;">Hướng dẫn chèn Shortcode Lịch Khởi Hành</h3>
      <p>Shortcode tự động nhận diện thiết bị (hiển thị bảng trên Máy tính và danh sách Card trên Điện thoại) và tự động thay đổi nhãn "Sắp kín chỗ", "Đã hết chỗ" dựa trên số ghế trống. Khi khách ấn "Giữ chỗ", hệ thống tự mở popup form đăng ký.</p>
      
      <div style="background: #1e293b; color: #e2e8f0; padding: 16px; border-radius: 8px; font-family: monospace; font-size: 15px; margin: 16px 0;">
        [lich_khoi_hanh product_code="T-NHAT-01"]
      </div>
      
      <p style="font-size: 13px; color: #ef4444; margin-bottom: 0;">
        <strong>*Lưu ý quan trọng:</strong> <code>product_code</code> chính là <strong>Mã Template Tour</strong> trên hệ thống ERP (erp.fittour.vn), không phải mã của từng tour lẻ. Bạn phải copy đúng mã này để hiển thị toàn bộ lịch trình.
      </p>
    </div>`
  },
  {
    id: 'emagazine-intro-30-70',
    title: 'Section Giới thiệu E-Magazine (30-70)',
    category: 'emagazine',
    description: 'Bố cục tràn màn hình (100vw breakout) dành cho các bài báo kiểu tạp chí, với cột trái (30%) chứa typography lớn, hình con tem và logo; cột phải (70%) là ảnh chính trải kín (object-fit cover). Responsive tự xếp dọc trên mobile.',
    templateHtml: `<div class="hemis-mag gallery-breakout" style="grid-template-columns: 3fr 7fr;">
    <div class="hemis-mag-left" style="padding:48px 48px;">
      <div class="hemis-mag-top">
        <p class="hemis-num">01</p>
        <div class="hemis-circle-wrap mx-auto">
          <svg viewBox="0 0 120 120" class="hemis-circle-svg">
            <defs><path id="hemis-arc2" d="M60,10 a50,50 0 1,1 0,100 a50,50 0 1,1 0,-100"/></defs>
            <text font-family="'Playfair Display',Georgia,serif" font-size="12" letter-spacing="6" fill="#555"><textPath href="#hemis-arc2" startOffset="5%">E M A G A Z I N E</textPath></text>
            <text x="50%" y="54%" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="14" fill="#888" letter-spacing="2">2026</text>
          </svg>
        </div>
        <p class="hemis-sub text-center w-full"><em>Tiêu đề phụ giới thiệu<br>và những trải nghiệm rất khác</em></p>
      </div>
      <div class="hemis-stamp-wrap">
        <img src="https://media.fittour.vn/wp-content/uploads/2025/11/blank-photo.jpg" alt="Stamp image" class="hemis-stamp-img mx-auto" style="max-width:280px">
      </div>
      <div class="hemis-brand text-center w-full">
        <svg viewBox="0 0 60 60" width="40" height="40" fill="none" stroke="#1a1a1a" stroke-width="1.5" class="mx-auto"><path d="M30 5c-5 0-10 5-10 10s5 10 5 15-5 15-5 20c0 3 2 5 5 5s5-2 5-5c0-5-5-10-5-20s5-15 5-15 5 5 5 15-5 15-5 20c0 3 2 5 5 5s5-2 5-5c0-5-5-10-5-20s5-15 5-15"/><path d="M5 30c0-5 5-10 10-10s10 5 15 5 15-5 20-5c3 0 5 2 5 5s-2 5-5 5c-5 0-10-5-20-5s-15 5-15 5-5-5-5-5c0-3 2-5 5-5s5 2 5 5c0 5-5 10-5 20s5 15 5 15" opacity="0.5"/></svg>
        <p class="hemis-title">Tên Địa Danh</p>
        <p class="hemis-loc">Khu vực • Quốc gia</p>
      </div>
    </div>
    <div class="hemis-mag-right">
      <img src="https://media.fittour.vn/wp-content/uploads/2025/11/blank-photo.jpg" alt="Main image">
    </div>
  </div>

<style>
/* Magazine Section - Full Width Breakout */
.hemis-mag{display:grid;background:#f5f3ef;min-height:650px;width:100%;position:relative}
.hemis-mag-left{display:flex;flex-direction:column;justify-content:space-between;border-right:1px solid #e5e2dc}
.hemis-mag-top{}
.hemis-num{font-family:'Playfair Display',Georgia,serif;font-size:3.5rem;font-weight:300;color:#1a1a1a;margin:0 0 20px 0;line-height:1}
.hemis-circle-wrap{width:110px;height:110px;margin:0 0 24px 0}
.hemis-circle-svg{width:110px;height:110px}
.hemis-sub{font-size:1rem;line-height:1.7;color:#444;margin:0 0 0 0}
.hemis-stamp-wrap{margin:28px 0;width:100%}
.hemis-stamp-img{width:100%;aspect-ratio:3/4;object-fit:cover;border:7px solid #fff;box-shadow:0 6px 24px rgba(0,0,0,0.12)}
.hemis-brand{margin-top:auto}
.hemis-title{font-size:2.4rem;font-weight:800;color:#1a1a1a;margin:14px 0 0 0;line-height:1.1;letter-spacing:-0.02em}
.hemis-loc{font-size:0.85rem;color:#777;margin:6px 0 0 0}
.hemis-mag-right{overflow:hidden;position:relative}
.hemis-mag-right img{width:100%;height:100%;object-fit:cover;display:block}

@media(max-width:768px){
  .hemis-mag{display:flex!important;flex-direction:column;width:100%;margin-left:0}
  .hemis-mag-left{border-right:none;border-bottom:1px solid #e5e2dc;padding:30px 24px!important;text-align:center;align-items:center}
  .hemis-circle-wrap{margin:0 auto 24px auto}
  .hemis-stamp-img{max-width:200px!important;margin:0 auto}
  .hemis-brand{text-align:center}
  .hemis-mag-right{min-height:350px}
}
</style>`,
    previewSvg: `<svg viewBox="0 0 300 150" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; border: 1px solid #e2e8f0; background: #f5f3ef; overflow: hidden;">
      <rect x="0" y="0" width="100" height="150" fill="#f5f3ef"/>
      <rect x="100" y="0" width="200" height="150" fill="#cbd5e1"/>
      <!-- Cột trái mô phỏng -->
      <circle cx="50" cy="30" r="15" fill="#e5e2dc" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2 2" />
      <rect x="35" y="60" width="30" height="40" fill="#cbd5e1" stroke="#ffffff" stroke-width="2" />
      <rect x="30" y="115" width="40" height="6" fill="#94a3b8" rx="2" />
      <rect x="25" y="125" width="50" height="4" fill="#cbd5e1" rx="2" />
      <!-- Cột phải mô phỏng -->
      <path d="M100 150 L150 100 L200 120 L250 80 L300 150 Z" fill="#94a3b8" opacity="0.5"/>
    </svg>`
  },
  {
    id: 'modal-booking-special',
    title: 'Pop-up Đăng Ký Chuyên Sâu (Medical/VIP)',
    category: ['cta', 'tour'],
    description: 'Mẫu Pop-up đăng ký cao cấp, có hiệu ứng Glow nền đen sang trọng, kèm phần tick chọn cam kết sức khỏe (phù hợp tour mạo hiểm, khám phá sâu như Ladakh, Everest, Mông Cổ).',
    templateHtml: `<div class="modal-booking-overlay" style="position: fixed; inset: 0; z-index: 50; display: flex; align-items: center; justify-content: center; padding: 1rem; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px);">
  <div class="bg-white rounded-[24px] max-w-lg w-full shadow-2xl overflow-hidden border border-stone-200/80" style="position: relative;">
    <div class="bg-stone-950 p-6 flex items-start justify-between relative overflow-hidden" style="background: #0c0a09; padding: 1.5rem;">
      <!-- Glow effect -->
      <div class="absolute -right-10 -top-10 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl" style="position: absolute; right: -2.5rem; top: -2.5rem; width: 8rem; height: 8rem; background: rgba(245, 158, 11, 0.2); border-radius: 50%; filter: blur(24px);"></div>
      <div class="relative z-10 flex gap-3" style="position: relative; z-index: 10; display: flex; gap: 0.75rem;">
        <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1" style="width: 2rem; height: 2rem; border-radius: 50%; background: rgba(245, 158, 11, 0.2); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 0.25rem;">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
        </div>
        <div>
          <span style="font-size: 10px; font-family: monospace; font-weight: bold; color: #f59e0b; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 2px;">FIT TOUR CHUYÊN NGHIỆP</span>
          <h3 style="font-family: serif; font-weight: 900; color: #ffffff; font-size: 1.25rem; line-height: 1.2; margin: 0;">Đăng Ký Tư Vấn & Đặt Vé Chuyên Sâu</h3>
        </div>
      </div>
      <button style="position: relative; z-index: 10; width: 2rem; height: 2rem; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: rgba(255,255,255,0.1); color: rgba(255,255,255,0.7); border: none; cursor: pointer;">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>

    <div style="padding: 1.5rem; background: #ffffff;">
      <div style="background: #fffbeb; border: 1px solid rgba(120, 53, 15, 0.1); border-radius: 0.75rem; padding: 1rem; margin-bottom: 1.5rem;">
        <span style="font-family: monospace; font-size: 9px; text-transform: uppercase; font-weight: bold; letter-spacing: 0.05em; color: #92400e; display: block; margin-bottom: 4px;">CHƯƠNG TRÌNH LỰA CHỌN:</span>
        <h4 style="font-family: serif; font-weight: 900; color: #1c1917; font-size: 1.05rem; line-height: 1.2; margin: 0 0 8px 0;">
          Hành Trình Ladakh An Toàn - Tư Vấn Vấn Đề Sức khỏe số 1
        </h4>
        <div style="font-size: 11px; font-family: sans-serif; color: #57534e; display: flex; align-items: center; gap: 6px; opacity: 0.9;">
          <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 4px; height: 4px; border-radius: 50%; background: #d97706;"></span> Thời lượng: <strong style="color: #1c1917; font-weight: bold; margin-left: 2px;">Phản hồi trong 15 phút</strong></span>
          <span style="color: #d6d3d1;">|</span>
          <span style="display: flex; align-items: center; gap: 4px;"><span style="width: 4px; height: 4px; border-radius: 50%; background: #059669;"></span> Giá trọn gói từ: <strong style="color: #92400e; font-weight: bold; margin-left: 2px;">Tư vấn miễn phí bởi Bác Sĩ</strong></span>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div>
          <label style="display: block; font-family: monospace; font-size: 9px; color: #78716c; text-transform: uppercase; font-weight: bold; margin-bottom: 4px;">Họ & Tên Hành Khách</label>
          <input type="text" placeholder="Ví dụ: Nguyễn Thị Hoa" style="width: 100%; font-size: 12px; background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 0.5rem; padding: 10px; outline: none; box-sizing: border-box;" />
        </div>
        <div>
          <label style="display: block; font-family: monospace; font-size: 9px; color: #78716c; text-transform: uppercase; font-weight: bold; margin-bottom: 4px;">Số điện thoại liên hệ</label>
          <input type="tel" placeholder="Ví dụ: 0903348XXX" style="width: 100%; font-size: 12px; background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 0.5rem; padding: 10px; outline: none; box-sizing: border-box;" />
        </div>
      </div>
      
      <div style="margin-bottom: 1rem;">
        <label style="display: block; font-family: monospace; font-size: 9px; color: #78716c; text-transform: uppercase; font-weight: bold; margin-bottom: 4px;">Địa chỉ Email</label>
        <input type="email" placeholder="Ví dụ: hoa.nguyen@gmail.com" style="width: 100%; font-size: 12px; background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 0.5rem; padding: 10px; outline: none; box-sizing: border-box;" />
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
        <div>
          <label style="display: block; font-family: monospace; font-size: 9px; color: #78716c; text-transform: uppercase; font-weight: bold; margin-bottom: 4px;">Tháng đi mong muốn</label>
          <select style="width: 100%; font-size: 12px; background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 0.5rem; padding: 10px; outline: none; color: #44403c; box-sizing: border-box;">
            <option>Tháng 9/2026 - Mùa Thu Vàng</option>
            <option>Tháng 10/2026 - Tuyết Đầu Mùa</option>
          </select>
        </div>
        <div>
          <label style="display: block; font-family: monospace; font-size: 9px; color: #78716c; text-transform: uppercase; font-weight: bold; margin-bottom: 4px;">Độ Tuổi Khách Hàng</label>
          <select style="width: 100%; font-size: 12px; background: #fafaf9; border: 1px solid #e7e5e4; border-radius: 0.5rem; padding: 10px; outline: none; font-weight: 600; color: #78350f; box-sizing: border-box;">
            <option>Khách lớn tuổi U70 (Trên 65 tuổi)</option>
            <option>Dưới 50 tuổi</option>
          </select>
        </div>
      </div>

      <div style="border-top: 1px solid #f5f5f4; padding-top: 0.75rem; margin-bottom: 1rem; display: flex; flex-direction: column; gap: 6px;">
        <label style="display: flex; align-items: flex-start; gap: 8px; cursor: pointer; user-select: none;">
          <input type="checkbox" checked style="margin-top: 2px; accent-color: #b45309;" />
          <span style="font-size: 10px; color: #57534e; line-height: 1.4;">
            Tôi cam kết sức khỏe ổn định và đồng ý kiểm tra sàng lọc y khoa về thích nghi độ cao với Fit Tour (Miễn phí đo chỉ số tim & huyết áp trước xuất hành).
          </span>
        </label>
        <label style="display: flex; align-items: flex-start; gap: 8px; cursor: pointer; user-select: none;">
          <input type="checkbox" style="margin-top: 2px; accent-color: #b45309;" />
          <span style="font-size: 10px; color: #57534e; line-height: 1.4;">
            Tôi yêu cầu tư vấn kỹ thuật thở oxy chuyên dùng do xe SUV y tế cung hành để đảm bảo an toàn tuyệt đối.
          </span>
        </label>
      </div>

      <button style="width: 100%; background: #0c0a09; color: #ffffff; font-family: monospace; font-size: 12px; font-weight: bold; padding: 14px 24px; border-radius: 0.75rem; border: none; cursor: pointer; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); display: flex; items-center: center; justify-content: center; gap: 8px;">
        GỬI ĐĂNG KÝ HỖ TRỢ Y TẾ & GIỮ HÀNH TRÌNH
      </button>
    </div>
  </div>
</div>`,
    previewSvg: `<svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; border: 1px solid #e2e8f0; background: #e2e8f0;">
      <!-- Overlay -->
      <rect x="0" y="0" width="300" height="200" fill="rgba(0,0,0,0.4)"/>
      <!-- Modal Box -->
      <rect x="40" y="20" width="220" height="160" rx="12" fill="#ffffff"/>
      <!-- Modal Header (Dark) -->
      <path d="M40 32C40 25.3726 45.3726 20 52 20H248C254.627 20 260 25.3726 260 32V50H40V32Z" fill="#1c1917"/>
      <!-- Icon/Logo -->
      <circle cx="55" cy="35" r="5" fill="#f59e0b" opacity="0.3"/>
      <circle cx="55" cy="35" r="3" fill="#f59e0b"/>
      <!-- Header Text -->
      <rect x="68" y="28" width="60" height="4" rx="2" fill="#f59e0b"/>
      <rect x="68" y="36" width="100" height="6" rx="3" fill="#ffffff"/>
      
      <!-- Highlight box -->
      <rect x="50" y="60" width="200" height="30" rx="4" fill="#fffbeb" stroke="#fef3c7"/>
      <rect x="60" y="66" width="50" height="3" rx="1.5" fill="#d97706"/>
      <rect x="60" y="74" width="130" height="4" rx="2" fill="#44403c"/>
      
      <!-- Input lines -->
      <rect x="50" y="100" width="95" height="15" rx="3" fill="#f5f5f4" stroke="#e7e5e4"/>
      <rect x="155" y="100" width="95" height="15" rx="3" fill="#f5f5f4" stroke="#e7e5e4"/>
      
      <rect x="50" y="125" width="200" height="15" rx="3" fill="#f5f5f4" stroke="#e7e5e4"/>
      
      <!-- Button -->
      <rect x="50" y="150" width="200" height="20" rx="4" fill="#1c1917"/>
      <rect x="100" y="158" width="100" height="4" rx="2" fill="#ffffff"/>
    </svg>`
  }
];

export default function ComponentLibrary() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'gallery' | 'cta' | 'layout' | 'landing-page' | 'tour' | 'emagazine'>('all');
  const [previewHtml, setPreviewHtml] = useState<string | null>(null);

  const filteredSnippets = activeCategory === 'all' 
    ? snippets 
    : snippets.filter(s => Array.isArray(s.category) ? s.category.includes(activeCategory) : s.category === activeCategory);

  return (
    <div style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ padding: '20px 24px', borderBottom: '1px solid #e5e7eb' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: '#111827' }}>📚 Cẩm nang Component Dự án</h2>
        <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#6b7280' }}>
          Danh sách các giao diện đã được thiết kế sẵn. Chọn mẫu bạn thích và yêu cầu AI chèn vào bài viết.
        </p>
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar Tabs */}
        <div style={{ width: '250px', borderRight: '1px solid #e5e7eb', backgroundColor: '#f9fafb', padding: '16px 0' }}>
          {['all', 'emagazine', 'tour', 'gallery', 'cta', 'layout', 'landing-page'].map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              style={{
                display: 'block', width: '100%', textAlign: 'left', padding: '12px 24px', 
                backgroundColor: activeCategory === cat ? '#e0e7ff' : 'transparent',
                color: activeCategory === cat ? '#4338ca' : '#4b5563',
                border: 'none', fontWeight: activeCategory === cat ? 600 : 500,
                cursor: 'pointer', borderLeft: activeCategory === cat ? '4px solid #4338ca' : '4px solid transparent',
                fontSize: '14px'
              }}
            >
              {cat === 'all' && '🌟 Tất cả Mẫu'}
              {cat === 'emagazine' && '📖 Emagazine'}
              {cat === 'tour' && '🧳 Giao diện Tour'}
              {cat === 'gallery' && '🖼️ Thư viện Ảnh (Gallery)'}
              {cat === 'cta' && '🎯 Nút & Hành động (CTA)'}
              {cat === 'layout' && '📝 Layout Blocks'}
              {cat === 'landing-page' && '🚀 Landing Page (Znews)'}
            </button>
          ))}
        </div>

        {/* Main List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px', backgroundColor: '#fff' }}>
          {filteredSnippets.length === 0 && (
            <div style={{ textAlign: 'center', color: '#9ca3af', marginTop: '40px' }}>Chưa có component nào trong danh mục này.</div>
          )}
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
            {filteredSnippets.map(snippet => (
              <div key={snippet.id} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px', transition: 'transform 0.2s, box-shadow 0.2s', cursor: 'default' }} 
                   onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.1)'; }}
                   onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                <div style={{ marginBottom: '16px' }} dangerouslySetInnerHTML={{ __html: snippet.previewSvg }} />
                <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: 600, color: '#1f2937' }}>{snippet.title}</h3>
                <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#4b5563', lineHeight: 1.5, minHeight: '60px' }}>
                  {snippet.description}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ padding: '8px 12px', backgroundColor: '#f1f5f9', borderRadius: '6px', fontSize: '12px', color: '#4338ca', fontWeight: 600, display: 'inline-block' }}>
                    ID: {snippet.id}
                  </div>
                  {snippet.exampleUrl && (
                    <a 
                      href={snippet.exampleUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ padding: '8px 12px', backgroundColor: '#e0e7ff', borderRadius: '6px', fontSize: '12px', color: '#4338ca', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none', transition: 'background-color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#c7d2fe'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e0e7ff'}
                    >
                      🔗 Demo
                    </a>
                  )}
                  {snippet.templateHtml && (
                    <button
                      onClick={() => setPreviewHtml(snippet.templateHtml!)}
                      style={{ padding: '8px 12px', backgroundColor: '#fef3c7', borderRadius: '6px', fontSize: '12px', color: '#b45309', border: '1px solid #f59e0b', fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', transition: 'background-color 0.2s' }}
                    >
                      👁️ Xem Live Preview
                    </button>
                  )}
                  {snippet.templateHtml && (
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(snippet.templateHtml!);
                        window.alert('Đã copy mã HTML. Bạn có thể dán vào tính năng Raw HTML Code trong trình soạn thảo!');
                      }}
                      style={{ padding: '8px 12px', backgroundColor: '#ecfdf5', borderRadius: '6px', fontSize: '12px', color: '#059669', border: '1px solid #10b981', fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '4px', transition: 'background-color 0.2s' }}
                    >
                      📋 Copy
                    </button>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Preview Modal */}
      {previewHtml && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.75)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }} onClick={() => setPreviewHtml(null)}>
          <div style={{ backgroundColor: '#fff', width: '100%', maxWidth: '900px', height: '80vh', borderRadius: '12px', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>Live Preview Component</h3>
              <button onClick={() => setPreviewHtml(null)} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#64748b' }}>&times;</button>
            </div>
            <div style={{ flex: 1, overflowY: 'auto', padding: '32px', backgroundColor: '#fcfcfc' }}>
              {/* Wrapping in a container similar to front-end constraints */}
              <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }} dangerouslySetInnerHTML={{ __html: previewHtml.replace(/gallery-breakout/g, 'preview-no-breakout') }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
