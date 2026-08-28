# SOP: QUY CHUẨN TẠO & XUẤT BẢN TOUR LANDING PAGE 2 CỘT
> **Nền tảng:** Astro SSR + Cloudflare D1 Database + Tailwind/Vanilla CSS  
> **Áp dụng cho:** Toàn bộ hệ thống Tour của *The Rice Tour* & *FIT Tour*  
> **Phiên bản:** 2.0 (Cập nhật chuẩn hóa 2026)

---

## 1. TÔN CHỈ KIẾN TRÚC (ARCHITECTURAL PRINCIPLES)

```mermaid
graph TD
    A[Biên Tập Viên / Trip Planner] -->|Soạn nội dung & HTML 2 cột| B[Bảng Tour trong Cloudflare D1]
    B -->|Field: content & raw_content| C[src/pages/tour/[slug].astro]
    C -->|Kế thừa CSS Scoped| D[src/styles/tour-landing.css]
    C -->|Hiển thị đồng nhất| E[Localhost & Production 200 OK]
```

1. **Single Source of Truth:**
   - Dữ liệu toàn bộ của một Tour (bao gồm toàn bộ mã HTML bố cục 2 cột) **BẮT BUỘC lưu trữ trong Database Cloudflare D1 (bảng `Tour`, cột `content`)**.
   - Tuyệt đối **KHÔNG TẠO FILE TĨNH RIÊNG LẺ** (như `src/pages/tour/ten-tour.astro`) vì sẽ gây phân mảnh mã nguồn, lệch dữ liệu với CMS và làm chết luồng deploy.
2. **Template Động Duy Nhất (`src/pages/tour/[slug].astro`):**
   - Đóng vai trò là Renderer trung tâm, tự động kéo dữ liệu từ D1 theo `slug`, nạp `BaseLayout`, nhúng Schema JSON-LD (`Product` & `BreadcrumbList`), và kích hoạt các script tương tác (Lightbox, Slider, Modal, Filter).
3. **CSS Scoped Độc Lập (`src/styles/tour-landing.css`):**
   - Mọi class giao diện 2 cột đều được cô lập an toàn dưới selector cha `.elementor-tour-wrapper` để không ảnh hưởng đến Header/Footer toàn cục.

---

## 2. CẤU TRÚC GIAO DIỆN CHUẨN 2 CỘT (THE 2-COLUMN WIREFRAME)

Toàn bộ khối HTML lưu trong `Tour.content` phải tuân thủ nghiêm ngặt khung cấu trúc sau:

```html
<div class="elementor-tour-wrapper custom-tour-layout">
  
  <!-- 1. ẢNH COVER MOBILE (Dual Placement) -->
  <div class="mobile-image relative w-full rounded-2xl overflow-hidden shadow-lg mb-6">
    <img src="{featuredImg}" alt="{tourTitle}" class="w-full h-auto block rounded-2xl" fetchpriority="high" />
  </div>

  <div class="tour-grid-container">
    
    <!-- ================= CỘT CHÍNH (TRÁI - 70%) ================= -->
    <div class="tour-main-col">
      
      <!-- 2. ẢNH COVER DESKTOP (Dual Placement) -->
      <div class="desktop-image relative w-full rounded-2xl overflow-hidden shadow-lg mb-8">
        <img src="{featuredImg}" alt="{tourTitle}" class="w-full h-auto block rounded-2xl" fetchpriority="high" />
      </div>

      <!-- 3. THANH CTA TƯ VẤN NHANH (PREMIUM CTA BAR) -->
      <div class="premium-cta-bar mb-8">
        <div class="cta-title hidden md:block">Tư vấn Tour</div>
        <div class="cta-links">
          <a href="https://wa.me/..." target="_blank" class="social-btn zalo">...</a>
          <a href="https://zalo.me/..." target="_blank" class="social-btn msg">...</a>
        </div>
        <button type="button" class="cta-form-btn js-open-booking-modal" data-tour-name="{tourTitle}">Điền Form</button>
      </div>

      <!-- 4. TOUR HIGHLIGHTS (4 Ô - LƯỚI 2 CỘT) -->
      <div class="mb-10 pb-8 border-b border-slate-200">
        <h2 class="text-xl md:text-2xl font-bold text-slate-900 mb-6">Điểm nổi bật của Tour (Tour Highlights)</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
          <!-- Ô 1: Nhóm nhỏ VIP (Max 5 khách/xe) -->
          <!-- Ô 2: Thợ ảnh chuyên nghiệp suốt tuyến -->
          <!-- Ô 3: Trải nghiệm di tích / điểm nhấn cốt lõi -->
          <!-- Ô 4: Trải nghiệm văn hóa / ẩm thực độc bản -->
        </div>
      </div>

      <!-- 5. TRẢI NGHIỆM HẤP DẪN (UNFOLD BOX) -->
      <div class="unfold-wrapper">
        <input type="checkbox" id="unfold-check" class="unfold-toggle-input" hidden />
        <div class="unfold-content">
          <!-- Các đoạn văn mô tả chiều sâu cảm xúc của hành trình -->
          <div class="unfold-overlay"></div>
        </div>
        <label for="unfold-check" class="unfold-btn">
          <span class="btn-text-show">SHOW</span>
          <span class="btn-text-hide">HIDE</span>
        </label>
      </div>

      <!-- 6. HỘP MÃ QR & QUOTE TRUYỀN CẢM HỨNG -->
      <div class="tour-qr-box ...">...</div>
      <div class="tour-premium-quote ...">...</div>

      <!-- 7. PHƯƠNG TIỆN & TIÊU CHUẨN DỊCH VỤ (SLIDER) -->
      <section class="tour-accommodation-section mb-12 mt-10">
        <h2 class="text-2xl font-bold text-slate-800 mb-6">Phương tiện & Tiêu chuẩn Dịch vụ đồng hành</h2>
        <div class="tour-slider-container">
          <div class="tour-slider-track">
            <!-- Các slide ảnh xe, khách sạn, ẩm thực -->
          </div>
          <button class="tour-slider-arrow tour-slider-prev">‹</button>
          <button class="tour-slider-arrow tour-slider-next">›</button>
          <div class="tour-slider-dots">...</div>
          <div class="tour-slider-counter">1 / 3</div>
        </div>
      </section>

      <!-- 8. LỊCH TRÌNH CHI TIẾT (ACCORDION CÁC CHẶNG / NGÀY) -->
      <section class="tour-itinerary-section mb-12 mt-12" id="itinerary">
        <h2 class="text-2xl font-bold text-slate-800 mb-6">Lịch trình chi tiết</h2>
        <div class="tour-itinerary">
          <details class="premium-itinerary-item" open>
            <summary class="premium-itinerary-summary">
              <div class="itinerary-toggle-icon">+</div>
              <span>Chặng 1 / Ngày 1: Tiêu đề chặng</span>
            </summary>
            <div class="premium-itinerary-content custom-blog-prose">
              <!-- Điểm nhấn chặng + Thời gian biểu + Hoạt động chi tiết -->
            </div>
          </details>
          <!-- Các chặng tiếp theo -->
        </div>
      </section>

      <!-- 9. BẢNG LỊCH KHỞI HÀNH (DESKTOP TABLE + MOBILE CARDS) -->
      <section class="tour-departure-section mb-12">
        <h2 class="text-2xl font-bold text-slate-800 mb-6">Lịch khởi hành</h2>
        <div class="lich-khoi-hanh-wrapper font-sans">
          <!-- Bảng Desktop + Thẻ Card Mobile + Bộ lọc Input -->
        </div>
      </section>

      <!-- 10. THÔNG TIN THÊM & QUY ĐỊNH HOÀN HỦY (FAQ) -->
      <section class="tour-faq-section mb-12">
        <!-- Các accordion điều khoản, chuẩn bị hành lý, hoàn hủy -->
      </section>

      <!-- 11. GALLERY ẢNH KHÁCH HÀNG THỰC TẾ (SLIDER) -->
      <section class="tour-gallery-section mb-12 mt-12">
        <!-- Khối Slider cuộn ngang mượt mà (Snap slider) -->
      </section>

    </div>

    <!-- ================= CỘT SIDEBAR (PHẢI - 30% STICKY) ================= -->
    <div class="tour-sidebar-col">
      <div class="sticky top-[100px] flex flex-col gap-6">
        
        <!-- Tiêu Đề & Điểm Nhấn Khác Biệt -->
        <h1 class="text-2xl md:text-3xl font-extrabold text-slate-800 leading-tight">{tourTitle}</h1>
        <div class="text-gray-600 text-[15px] leading-relaxed custom-blog-prose">
          <p>{Tóm tắt ngắn gọn giá trị tour}</p>
          <ul>
            <li><strong>NO SHOPPING:</strong> 100% không ghé điểm mua sắm ép buộc.</li>
            <li><strong>Nhóm nhỏ VIP:</strong> Tối đa 5 khách/xe.</li>
            <li><strong>Thợ ảnh chuyên nghiệp:</strong> Tặng trọn bộ ảnh kỷ niệm.</li>
          </ul>
        </div>

        <!-- STICKY PRICE CARD SANG TRỌNG -->
        <div class="sticky-price-card">
          <div class="service-grid">
            <div class="service-item">Dịch vụ: Trọn gói VIP</div>
            <div class="service-item">Thời gian: {days}</div>
          </div>
          <div class="price-header">GIÁ TRỌN GÓI TỪ</div>
          <div class="price-amount">{price_text}</div>
          <button type="button" class="btn-primary js-open-booking-modal" data-tour-name="{tourTitle}">
            ĐĂNG KÝ TƯ VẤN NGAY
          </button>
        </div>

        <!-- KHỐI TOUR LIÊN QUAN -->
        <div class="related-tours-box">...</div>

      </div>
    </div>

  </div>
</div>
```

---

## 3. QUY TRÌNH 4 BƯỚC TRIỂN KHAI TOUR MỚI (STEP-BY-STEP WORKFLOW)

### Bước 1: Soạn Thảo & Chuẩn Hóa Dữ Liệu
1. Thu thập thông tin tour: Tên tour, mô tả tóm tắt, giá trọn gói 2026, lịch trình phân mốc giờ hoặc theo ngày.
2. Tuyệt đối không dùng từ ngữ chèo kéo chợ búa, áp dụng chuẩn văn phong **Du lịch có GUU / Luxury Inbound**.

### Bước 2: Đóng Gói HTML & Kiểm Tra Cú Pháp
1. Điền nội dung vào khung HTML chuẩn 2 cột ở Mục 2.
2. Kiểm tra đóng mở toàn vẹn 100% các thẻ `<div>`, `<section>`, `<details>`, `<span>`.
3. Khi đưa vào file seed (`api/seed-all-tours.ts` hoặc script migration), **BẮT BUỘC** dùng `JSON.stringify(htmlContent)` để tránh lỗi escape chuỗi.

### Bước 3: Đồng Bộ Database Cloudflare D1
Chạy nạp dữ liệu vào cả Local Database và Production:
```bash
# 1. Nạp vào Local D1 (.wrangler)
curl -s http://localhost:4321/api/seed-all-tours

# 2. Deploy Worker & Nạp vào Remote D1 (Production)
npm run build && npx wrangler deploy
curl -s https://thericetour.com/api/seed-all-tours
```

### Bước 4: Kiểm Thử QA 5 Điểm Bắt Buộc (Pre-flight QA)
1. **HTTP Status:** Cả slug dài và short-slug đều trả về `200 OK`.
2. **Không khoảng trắng:** Kiểm tra đầu trang load ngay ảnh cover và 2 cột không bị vỡ.
3. **Tính năng tương tác:**
   - Bấm ảnh mở **GLightbox** phóng to.
   - Nút **SHOW/HIDE** bung mở đoạn giới thiệu mượt mà.
   - Slider xe/nơi ở và Slider gallery chuyển slide trơn tru.
   - Nút **Đăng ký tư vấn / Điền Form** mở popup Booking Modal.
   - Nút **Itinerary** trên Mobile Bottom App Bar cuộn mượt xuống đúng khối lịch trình.
4. **Khớp số liệu:** Giá trên Sticky Card, Bảng lịch khởi hành và Headline trùng khớp 100%.
5. **SEO & Schema:** Kiểm tra thẻ Google Structured Data JSON-LD (`Product` và `BreadcrumbList`).
