# 🔥 Bug Chain Analysis

Phân tích chuỗi lỗi dây chuyền. Nếu biết trước, chỉ cần fix 1 lần từ gốc.

---

## Chain 1: GLightbox "Click không lên"

| Bước | Vấn đề | Fix |
|---|---|---|
| 1 | Lightbox không mở | Thêm MutationObserver Web Component |
| 2 | Script bị Astro bundle, không re-run với ClientRouter | Đổi sang `is:inline` + dynamic CDN |
| 3 | Click vẫn không lên — `.feature-overlay` chặn pointer events | Thêm `pointer-events: none` |

**Fix 1 lần từ gốc:**
- Dùng `is:inline` + dynamic CDN load
- Check CSS overlay (`pointer-events`, `z-index`) TRƯỚC khi debug JS
- Quy tắc: Click không fire → kiểm tra CSS trước, JS sau

---

## Chain 2: HTML Contamination (8,191 records)

| Bước | Vấn đề | Fix |
|---|---|---|
| 1 | Migration script lưu raw HTML từ WordPress | Strip HTML 8,191 records (batch SQL) |
| 2 | Lightbox caption ngắn cũn (dùng alt text ngắn) | Sync alt text từ Media.caption vào Post.content |

**Fix 1 lần từ gốc:**
```python
# Trong migration script, TRƯỚC KHI lưu:
post['excerpt'] = strip_html(wp_data['excerpt']['rendered'])
media['caption'] = strip_html(wp_data['caption']['rendered'])
media['description'] = strip_html(wp_data['description']['rendered'])
```

---

## Chain 3: Mood Text Layout

| Bước | Vấn đề | Fix |
|---|---|---|
| 1 | Dùng `column-span: all` → cắt đôi gallery | Đổi sang feature-box card |

**Fix 1 lần từ gốc:**
- Content trong masonry grid PHẢI dùng cùng container class (`.feature-box`)

---

## Chain 4: CSS Masonry Auto-Alignment & Regex DOM Breakage

| Bước | Vấn đề | Fix |
|---|---|---|
| 1 | `columns: 3` đẩy 3 mood text nằm chung 1 hàng ngang (vì chèn cách đều nhau: vị trí 4, 11, 18) | Đổi vị trí so le (Staggered Placement): chèn ở đầu Cột 1, cuối Cột 2, giữa Cột 3. |
| 2 | Dùng Regex `[\s\S]*?<\/div>` để bóc tách `.feature-box` | Regex dừng ở `</div>` **bên trong** (của `.feature-overlay`), làm mất tag đóng của `.feature-box` gốc. |
| 3 | Toàn bộ 25 ảnh mất thẻ đóng `</div>`, layout Grid bị thủng, ảnh cuối bị tràn ra full-width | Viết script NodeJS cắt chuỗi chính xác bằng `split('<div class="feature-box">')` và nối lại cẩn thận. |

**Fix 1 lần từ gốc:**
- **UI:** Khi chèn nội dung đan xen vào CSS Masonry, KHÔNG BAO GIỜ chèn cách đều đặn. Phải chèn so le (staggered).
- **Backend/Data:** KHÔNG BAO GIỜ dùng Regex thuần để parse hoặc modify HTML lồng nhau (nested HTML). Dùng DOM Parser (`jsdom`, `cheerio`) hoặc cắt chuỗi tĩnh (`split`) rất cẩn thận và phải luôn kiểm tra thẻ đóng.

---

## 12 Quy Tắc Phòng Ngừa

| # | Quy tắc |
|---|---|
| 1 | Strip HTML trước khi lưu DB (trừ field content chính) |
| 2 | Dùng `is:inline` cho DOM scripts trong Astro SSR |
| 3 | Check CSS overlay trước khi debug JS click events |
| 4 | Inline style cho DB content styling |
| 5 | Test lightbox bằng browser console trước |
| 6 | Content card trong grid = cùng container class |
| 7 | Audit toàn diện sau migration (15 câu SQL) |
| 8 | 1 file SQL ≤ 1MB cho D1 |
| 9 | Backup content trước khi UPDATE |
| 10 | Dynamic load CDN, không đặt trong `<head>` |
| 11 | **Staggered Placement:** Chèn text đan xen vào Masonry phải lệch vị trí. |
| 12 | **No Regex for HTML:** Không dùng regex xử lý HTML lồng nhau, dùng DOM Parser. |

---
*Cập nhật: 2026-04-27*
