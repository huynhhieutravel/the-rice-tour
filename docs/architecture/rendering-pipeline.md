# Rendering Pipeline

Bài viết trong D1 có 2 format content, xử lý khác nhau.

## 1. JSON Block Content (bài viết mới, tạo từ TipTap)

**Flag:** `isElementor = 0` hoặc NULL

```
D1: Post.content = '{"type":"doc","content":[...]}'
                        │
                        ▼
            BlockRenderer.astro
                        │
                        ▼
         Semantic HTML (headings, paragraphs, images, etc.)
```

### Supported Block Types

| Type | Component | Output |
|---|---|---|
| `paragraph` | Inline | `<p>...</p>` |
| `heading` | Inline | `<h2>` – `<h6>` (auto TOC) |
| `image` | Inline | `<figure><img/><figcaption/></figure>` |
| `blockquote` | Inline | `<blockquote>...</blockquote>` |
| `horizontalRule` | Inline | `<hr/>` |
| `customTourGallery` | `<div class="grid-fit-masonry">` | Masonry photo grid |
| `customTourItinerary` | Custom HTML | Day-by-day itinerary |
| Unknown | `UnknownBlock.astro` | Debug output (dev only) |

## 2. Elementor HTML Content (bài viết cũ từ WordPress)

**Flag:** `isElementor = 1`

```
D1: Post.content = '<div class="elementor-element..." data-widget_type="gallery.default">...'
                        │
                        ▼
         [slug].astro: set:html (raw inject)
                        │
                        ▼
         Client-side restoration script (cuối [slug].astro)
                        │
                        ▼
         Gallery images, headings, paragraphs restored
```

### Client-side Restoration Logic

Script cuối `[slug].astro` xử lý:

1. **Gallery images:** `e-gallery-image[data-thumbnail]` → `<img class="feature-image">`
2. **Gallery grid:** `[data-widget_type="gallery.default"]` → CSS Grid 3 columns
3. **Clean up:** Remove empty Elementor wrapper divs

> [!CAUTION]
> Elementor content chứa các CSS class đặc thù (`.feature-box`, `.feature-image`, `.feature-overlay`). Các class này được định nghĩa trong `global.css`. **KHÔNG ĐƯỢC đổi tên** vì chúng hard-coded trong 615+ bài viết trong DB.

## 3. GLightbox (cả 2 mode)

GLightbox init nằm trong `BlogLayout.astro` (script `is:inline`), chạy sau khi content render xong:

```
Page load
    │
    ▼
is:inline script
    │
    ├─ Check typeof GLightbox
    │   ├─ Đã load → init ngay
    │   └─ Chưa load → createElement('script') → CDN → onload → init
    │
    ▼
initGalleryLightbox()
    │
    ├─ Find container: blog-content | .elementor-raw-content | .custom-blog-prose
    ├─ Collect all <img> tags
    ├─ Build elements[] array (href + description from alt)
    ├─ Create GLightbox instance
    └─ Attach click handlers → lightbox.openAt(index)
```

> [!WARNING]
> `.feature-overlay` phải có `pointer-events: none` — nếu không, overlay chặn click vào ảnh.

---
*Cập nhật: 2026-04-27*
