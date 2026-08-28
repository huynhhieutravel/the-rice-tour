# Blog Typography

Quy tắc typography cho bài viết (prose), quản lý trong `blog.css`.

## Container

```css
.custom-blog-prose {
  font-size: 1.125rem;      /* 18px — larger than body for readability */
  line-height: 1.8;          /* Generous line height for Vietnamese */
  color: #334155;             /* Slate 700 */
  max-width: 65ch;            /* Optimal reading width */
}
```

## Headings

| Element | Size | Weight | Margin-top | Ghi chú |
|---|---|---|---|---|
| `h1` | 2.25rem | 800 | — | Chỉ dùng cho post title (ngoài prose) |
| `h2` | 1.75rem | 700 | 2.5rem | Section heading — auto-generated TOC |
| `h3` | 1.35rem | 600 | 2rem | Sub-section |
| `h4` | 1.125rem | 600 | 1.5rem | Detail heading |

## Paragraphs & Links

```css
.custom-blog-prose p {
  margin-bottom: 1.25rem;
}
.custom-blog-prose a {
  color: #3b5bdb;               /* Primary indigo */
  text-decoration: underline;
  text-underline-offset: 2px;
}
.custom-blog-prose a:hover {
  color: #2b4acb;               /* Darker on hover */
}
```

## Images

```css
.custom-blog-prose img {
  border-radius: 0.75rem;       /* 12px — soft corners */
  margin: 1.5rem 0;
  max-width: 100%;
  height: auto;
}
```

## Blockquotes

```css
.custom-blog-prose blockquote {
  border-left: 4px solid #3b5bdb;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  background: #f8fafc;          /* Subtle background */
  font-style: italic;
  color: #475569;
}
```

## Lists

```css
.custom-blog-prose ul { list-style: disc; padding-left: 1.5rem; }
.custom-blog-prose ol { list-style: decimal; padding-left: 1.5rem; }
.custom-blog-prose li { margin-bottom: 0.5rem; }
```

## Mood Text

```css
.mood-text {
  text-align: center;
  font-style: italic;
  font-size: 1.25rem;
  color: #64748b;                    /* Slate 500 */
  font-family: ui-serif, Georgia, Cambria, serif;
  line-height: 1.8;
  max-width: 85%;
  margin: 3rem auto;
}
.mood-text::before {
  content: "❝";
  display: block;
  font-size: 2.5rem;
  color: #cbd5e1;
  margin-bottom: 0.5rem;
}
```

**Dùng khi:** Chèn câu thơ/quote giữa gallery ảnh du lịch. Phải nằm trong `.feature-box` container.

## Responsive

```css
@media (max-width: 768px) {
  .custom-blog-prose {
    font-size: 1rem;               /* Nhỏ hơn trên mobile */
    padding: 0 1rem;
  }
  .custom-blog-prose h2 { font-size: 1.5rem; }
  .custom-blog-prose h3 { font-size: 1.2rem; }
}
```

---
*Cập nhật: 2026-04-27*
