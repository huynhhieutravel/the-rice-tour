# Migration SOP — WordPress → Astro

Chi tiết đầy đủ xem: [KI: sop_step_by_step](https://github.com/huynhhieutravel/dulichcoguu-astro-cms)

## 6 Bước

1. **Setup** — Astro + @astrojs/cloudflare, D1 bindings
2. **Media** — Tải 4,834 ảnh → R2, lưu metadata → D1
3. **Categories/Tags** — FK constraints, phải import trước Posts
4. **Posts** — Content HTML replace (WP URLs → R2 URLs), **strip HTML metadata**
5. **Admin CMS** — TipTap editor, Media picker, CRUD API
6. **QA Audit** — 15 câu SQL kiểm tra toàn bộ data integrity

## Bài Học Xương Máu

> [!CAUTION]
> **PHẢI strip HTML** từ: `Post.excerpt`, `Media.caption`, `Media.description`
> WordPress trả về HTML rendered. Nếu lưu thẳng → SEO meta, social preview, lightbox caption đều lỗi.

## Bug Chain Analysis

Xem chi tiết: [`bug-chain-analysis.md`](bug-chain-analysis.md)

---
*Cập nhật: 2026-05-10*

## Guard Rails (Astro Migration)

> [!IMPORTANT]
> **GUARD RAIL #1**: Bắt buộc sử dụng shortcode `{{TOUR_FEATURED_IMAGE}}` thay cho đường dẫn ảnh tĩnh tĩnh khi thiết lập ảnh đại diện (featured image) của các trang Landing Page Tour. Việc này đảm bảo tính toàn vẹn khi đồng bộ giữa CMS và Cloudflare D1.
