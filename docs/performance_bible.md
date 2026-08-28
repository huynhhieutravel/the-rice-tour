# Sổ tay Tối ưu Hiệu suất Cao (Core Web Vitals SOP)

Tài liệu chuẩn hóa quy trình đạt 100/100 PageSpeed (LCP, CLS, INP) + Accessibility. Được đúc kết từ dự án `Dulichcoguu Astro`. Áp dụng cho **MỌI website tương lai**.

---

## 0. QUY TẮC VÀNG: HỆ THỐNG MÀU SẮC & CONTRAST

> ⚠️ **ĐÂY LÀ BÀI HỌC XƯƠNG MÁU NHẤT** — đã mất nhiều giờ debug.

### Quy tắc #1: KHÔNG BAO GIỜ hardcode màu
```css
/* ❌ SAI: Hardcode hex trong component */
<footer class="bg-gray-900 text-gray-500">

/* ✅ ĐÚNG: Dùng CSS Variable (Token) */
<footer style="background:var(--footer-bg); color:var(--footer-text)">
```
Lý do: Khi cần sửa contrast, chỉ sửa 1 dòng trong `:root` = đồng bộ toàn bộ hệ thống.

### Quy tắc #2: Mọi cặp text/bg phải đạt WCAG AA (≥ 4.5:1)
- Trước khi dùng cặp màu nào, **PHẢI check** tại: https://webaim.org/resources/contrastchecker/
- Ghi tỷ lệ contrast vào comment CSS:
```css
--footer-text: #9ca3af; /* text-gray-400: 5.9:1 trên --footer-bg ✅ */
```

### Quy tắc #3: TRÁNH xung đột tên biến Tailwind v4
Trong Tailwind v4, class `text-primary` → `color: var(--color-primary)`. Giá trị **runtime** lấy từ `:root`, KHÔNG phải `@theme`.

```css
/* ❌ SAI: --color-primary = cam → text-primary = chữ cam! */
:root { --color-primary: #f97316; }

/* ✅ ĐÚNG: --color-primary = chữ đen → text-primary = chữ đen */
:root { --color-primary: #111827; }
/* Màu cam chỉ truy cập qua: text-brand-500, text-brand-600... */
```

### Component Tokens mẫu (sửa 1 nơi = đồng bộ)
```css
:root {
  /* Badge */
  --badge-text: var(--color-brand-800);  /* 7.2:1 trên bg-brand-50 ✅ */
  --badge-bg: var(--color-brand-50);

  /* Footer */
  --footer-bg: #111827;
  --footer-text: #9ca3af;               /* 5.9:1 ✅ */
  --footer-heading: #ffffff;            /* 16.75:1 ✅ */

  /* Focus Ring (Accessibility) */
  --focus-ring: var(--color-brand-500);
}
```

---

## 1. Tối ưu LCP (Largest Contentful Paint)

### A. Hạ tầng & Mạng lưới (Network & CDN)
1. **Preconnect đúng cách:**
   - `<link rel="preconnect" href="https://your-cdn.com" />`
   - ⚠️ **KHÔNG** thêm `crossorigin` khi tải ảnh — chỉ dùng cho Fonts hoặc API.
2. **CDN & Cache:**
   - KHÔNG dùng URL Public mặc định R2 (`r2.dev`) — không hỗ trợ Cache.
   - Setup Custom Domain → Cache Rule: `Cache-Control: public, max-age=31536000, immutable`.
   - Bật Cloudflare Polish (WebP/AVIF).

### B. Ưu tiên tài nguyên
1. **Hero Image:**
   - `<link rel="preload" as="image" href={hero_img} fetchpriority="high" />`
   - `<img fetchpriority="high" loading="eager" decoding="async">`

---

## 2. Tối ưu CLS (Cumulative Layout Shift)

1. **Khóa khung hình:** Mọi ảnh phải có `aspect-ratio` hoặc `width`/`height`.
2. **Font:** Dùng System Fonts: `font-family: 'Inter', system-ui, -apple-system, sans-serif`.

---

## 3. Tối ưu INP (Interaction to Next Paint)

### A. Layout Thrashing
| ❌ Gây Thrashing | ✅ Giải pháp |
|---|---|
| `window.innerWidth` trong JS | CSS Media Queries |
| `img.naturalWidth` trong vòng lặp | `img.getAttribute('src')` + rAF |
| Đọc DOM → Ghi DOM liên tục | Tách thành Phase READ → Phase WRITE |

### B. Render-blocking CSS
- CSS thư viện bổ trợ (GLightbox, Slider) **KHÔNG** gắn vào `<head>`.
- Dùng `requestIdleCallback` để load hoàn toàn sau khi page idle.

### C. Astro Islands
- KHÔNG dùng `client:load` ở trang Public.
- Ưu tiên `client:visible` hoặc `client:idle`.

---

## 4. Checklist Trước Khi Deploy

- [ ] Chạy `npm run build` thành công
- [ ] Mọi cặp text/bg đạt WCAG AA (≥ 4.5:1)
- [ ] Hero image có `fetchpriority="high"`
- [ ] Không có CSS thư viện trong `<head>` (trừ global.css)
- [ ] Không có JS đọc `offsetWidth`, `innerWidth`, `naturalWidth` trong DOMContentLoaded
- [ ] Mọi `<button>` có `aria-label`
- [ ] Mọi `<img>` có `alt` và `width`/`height` hoặc `aspect-ratio`

---
*Cập nhật lần cuối: 28/04/2026. Áp dụng cho toàn bộ hệ thống FIT Tour & Dulichcoguu.*
