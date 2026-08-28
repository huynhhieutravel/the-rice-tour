# Dây Chuyền Sản Xuất Nội Dung FIT Tour (Content Pipeline)

Thư mục này quản lý vòng đời của các bài viết qua từng trạm xử lý độc lập:

```text
content-pipeline/
├── 01-raw/                 # [Trạm 1] Nơi thả các bài viết thô cần xử lý
├── 02-vietnamese-guu/      # [Trạm 1 xuất ra] Bài đã được viết lại giọng văn FIT Tour
├── 03-qa-passed/           # [Trạm 2 xuất ra] Bài đã được thẩm định QA & SEO đạt chuẩn
├── 04-english/             # [Trạm 3 xuất ra] Bản dịch tiếng Anh phong cách National Geographic
└── 05-ready-to-publish/    # [Trạm 4 xuất ra] File hoàn chỉnh đã gắn Astro layout & Media
```

## Hướng Dẫn Kích Hoạt Từng Agent Cho 1 Lô Bài:

- **Trạm 1 (Biên tập Tiếng Việt):**
  > *"Gọi @1-fittour-tone-rewriter xử lý toàn bộ bài trong 01-raw/"*

- **Trạm 2 (Thẩm định QA):**
  > *"Gọi @2-content-qa-auditor quét và duyệt các bài trong 02-vietnamese-guu/"*

- **Trạm 3 (Biên dịch Tiếng Anh):**
  > *"Gọi @3-editorial-translator dịch các bài trong 03-qa-passed/"*

- **Trạm 4 (Đóng gói Astro & Xuất bản):**
  > *"Gọi @4-astro-publisher đóng gói cặp bài VI-EN vào template Astro"*
