# 📖 Documentation Index

Tài liệu kỹ thuật dự án Dulichcoguu CMS, tổ chức theo module.

## Cấu trúc

```
docs/
├── README.md                       ← Bạn đang ở đây
├── architecture/
│   ├── overview.md                 # Kiến trúc tổng quan & data flow
│   └── rendering-pipeline.md       # Post rendering: JSON Block vs Elementor
├── css/
│   ├── design-system.md            # CSS design tokens, class reference
│   ├── gallery-components.md       # .feature-box, .feature-image, masonry grid
│   └── blog-typography.md          # Prose styling, headings, mood text
├── modules/
│   ├── post-management.md          # Post list, editor, preview
│   ├── media-library.md            # Media grid, upload, metadata
│   ├── categories-tags.md          # Taxonomy management
│   └── seo-system.md               # HeadMeta, Schema, Sitemap
├── api/
│   └── endpoints.md                # Full REST API reference
├── migration/
│   ├── sop.md                      # WordPress → Astro migration SOP (6 steps)
│   └── bug-chain-analysis.md       # Cascading bug patterns & prevention
└── operations/
    ├── deploy.md                   # Build & deploy workflow
    └── qa-checklist.md             # Post-migration & pre-deploy QA
```

## Quy ước viết docs

- Dùng **Markdown** chuẩn (GitHub Flavored)
- Mỗi file có 1 mục đích rõ ràng
- Dùng `> [!WARNING]`, `> [!CAUTION]`, `> [!NOTE]` cho thông tin quan trọng
- Link file bằng relative path: `[text](../css/design-system.md)`
- Cập nhật ngày cuối ở footer mỗi file
