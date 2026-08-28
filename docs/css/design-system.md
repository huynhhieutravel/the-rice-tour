# CSS Design System

## File Structure

```
src/styles/
├── global.css                  # 344 lines — System layout, gallery, theme
└── blog.css                    # 392 lines — Prose typography, article

src/components/admin/
└── PostEditor.css              # 520 lines — TipTap editor styling
```

## Tailwind v4 Setup

Tailwind v4 dùng CSS-first config — **không có file `tailwind.config.js`**.

```css
/* global.css — dòng đầu */
@import "tailwindcss";
```

Tất cả custom utilities, components, và design tokens được khai báo trực tiếp trong CSS files.

---

## Design Tokens

### Colors

| Token | Value | Dùng cho |
|---|---|---|
| Primary | `#3b5bdb` (Indigo 600) | Header, CTA buttons, links |
| Primary Dark | `#2b4acb` | Button hover |
| Surface | `#f8fafc` (Slate 50) | Page background (light mode) |
| Card BG | `#ffffff` | Feature boxes, content cards |
| Text Primary | `#1e293b` (Slate 800) | Body text |
| Text Secondary | `#64748b` (Slate 500) | Captions, mood text, meta |
| Border | `#e2e8f0` (Slate 200) | Dividers, card borders |

### Typography

| Element | Font | Size | Weight |
|---|---|---|---|
| Body | System (Tailwind default) | 16px | 400 |
| H1 (Post title) | System | 2.25rem | 800 |
| H2 | System | 1.75rem | 700 |
| H3 | System | 1.35rem | 600 |
| Mood Text | `ui-serif, Georgia` | 1.25rem | 400 italic |
| Caption | System | 0.875rem | 400 |

### Spacing

| Token | Value | Dùng cho |
|---|---|---|
| Section gap | `2rem` (32px) | Giữa các section chính |
| Card gap | `1.5rem` (24px) | Giữa các feature-box trong grid |
| Content padding | `1rem` – `2rem` | Padding trong prose container |

### Border Radius

| Token | Value | Dùng cho |
|---|---|---|
| Card | `1rem` (16px) = `rounded-2xl` | Feature boxes |
| Button | `9999px` = `rounded-full` | CTA buttons |
| Image | `0.75rem` (12px) | Inline images |

---

## Critical Classes — KHÔNG ĐƯỢC ĐỔI TÊN

> [!CAUTION]
> Các class dưới đây được **hard-coded trong 615+ bài viết** lưu trong database (Post.content). Đổi tên = vỡ layout toàn bộ site.

### Gallery System (`global.css`)

```css
/* Masonry container */
.grid-fit-masonry {
  columns: 1;                    /* Mobile */
}
@media (min-width: 640px) {
  .grid-fit-masonry { columns: 2; }
}
@media (min-width: 768px) {
  .grid-fit-masonry { columns: 3; gap: 1.5rem; }
}

/* Photo card */
.feature-box {
  @apply break-inside-avoid rounded-2xl overflow-hidden
         shadow-sm hover:shadow-2xl cursor-pointer
         transition-all duration-300 mb-6;
}

/* Image inside card */
.feature-image {
  @apply w-full h-auto object-cover
         transition-transform duration-500;
}
.feature-box:hover .feature-image {
  @apply scale-105;
}

/* Hover overlay — BẮT BUỘC pointer-events-none */
.feature-overlay {
  @apply absolute inset-0 bg-black/0 transition-colors
         duration-300 pointer-events-none;
}
```

### Mood Text (`blog.css`)

```css
.mood-text {
  text-align: center;
  font-style: italic;
  font-size: 1.25rem;
  color: #64748b;
  margin: 3rem auto;
  max-width: 85%;
  line-height: 1.8;
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}
.mood-text::before {
  content: "❝";
  display: block;
  font-size: 2.5rem;
  color: #cbd5e1;
  margin-bottom: 0.5rem;
}
```

### Blog Prose (`blog.css`)

```css
.custom-blog-prose {
  /* Base typography */
  font-size: 1.125rem;
  line-height: 1.8;
  color: #334155;
}
.custom-blog-prose h2 { font-size: 1.75rem; font-weight: 700; margin-top: 2.5rem; }
.custom-blog-prose h3 { font-size: 1.35rem; font-weight: 600; margin-top: 2rem; }
.custom-blog-prose p { margin-bottom: 1.25rem; }
.custom-blog-prose img { border-radius: 0.75rem; margin: 1.5rem 0; }
.custom-blog-prose a { color: #3b5bdb; text-decoration: underline; }
```

---

## Thêm Class Mới — Quy Trình

1. Xác định class thuộc layer nào:
   - **Layout/Gallery** → `global.css`
   - **Article/Prose** → `blog.css`
   - **Admin Editor** → `PostEditor.css`
2. Đặt tên theo convention: `kebab-case`, prefix theo module
3. Nếu class sẽ được lưu vào DB content → **ghi chú rõ trong file CSS** bằng comment
4. Commit message: `css: add .class-name for [purpose]`

---
*Cập nhật: 2026-04-27*
