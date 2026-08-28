# Gallery Components

Hệ thống hiển thị ảnh dạng Masonry Grid cho bài viết du lịch.

## Cấu trúc HTML (trong Post.content)

```html
<div class="grid-fit-masonry">

  <!-- Photo card -->
  <div class="feature-box">
    <img class="feature-image" src="https://r2.dev/..." alt="Caption đầy đủ" />
    <div class="feature-overlay"></div>
  </div>

  <!-- Mood text card (nằm trong grid như 1 tấm ảnh) -->
  <div class="feature-box" style="display:flex;align-items:center;justify-content:center;
    background:linear-gradient(135deg,#fdf2f8,#faf5ff,#eff6ff);aspect-ratio:1/1;padding:2rem;">
    <p class="mood-text" style="column-span:unset;margin:0;">
      Có những mùa hoa không chỉ để ngắm, mà để nhớ…
    </p>
  </div>

  <!-- More photo cards... -->
</div>
```

## Class Reference

### `.grid-fit-masonry`
| Property | Mobile | SM (640px) | MD (768px+) |
|---|---|---|---|
| `columns` | 1 | 2 | 3 |
| `gap` | 1rem | 1.5rem | 1.5rem |

### `.feature-box`
```css
break-inside: avoid;          /* Không cho column cắt đôi card */
border-radius: 1rem;          /* Bo góc 16px */
overflow: hidden;
box-shadow: 0 1px 2px rgba(0,0,0,0.05);
transition: all 0.3s;
margin-bottom: 1.5rem;
cursor: pointer;
```
**Hover:** `box-shadow: 0 25px 50px rgba(0,0,0,0.25);`

### `.feature-image`
```css
width: 100%;
height: auto;
object-fit: cover;
transition: transform 0.5s;
```
**Hover (parent .feature-box:hover):** `transform: scale(1.05);`

### `.feature-overlay`
```css
position: absolute;
inset: 0;
background: rgba(0,0,0,0);
transition: background-color 0.3s;
pointer-events: none;           /* ⚠️ BẮT BUỘC — nếu thiếu, chặn lightbox click */
```

## Mood Text trong Gallery

Mood text PHẢI nằm trong `.feature-box` container (cùng kích thước 1 tấm ảnh):
- `aspect-ratio: 1/1` → Vuông
- `background: linear-gradient(135deg, #fdf2f8, #faf5ff, #eff6ff)` → Pastel hồng-tím-xanh
- Không dùng `column-span: all` (sẽ cắt đôi masonry flow)

> [!WARNING]
> **Lỗi xếp hàng ngang trên Laptop:** Vì `.grid-fit-masonry` dùng `columns: 3`, trình duyệt sẽ chia đều các item từ trên xuống dưới vào 3 cột. Nếu bạn chèn Mood Text ở các khoảng cách đều đặn (VD: sau mỗi 6 ảnh), chúng sẽ vô tình rơi vào cùng một vị trí tương đối ở 3 cột và **xếp thành 1 hàng ngang hoàn hảo** (rất xấu).
>
> **Cách khắc phục (Staggered Placement):** Phải đặt Mood Text ở các vị trí so le (không đều nhau) trong tổng số ảnh.
> - **Cột 1:** Đặt ở gần đầu (VD: sau ảnh thứ 2).
> - **Cột 2:** Đặt ở gần cuối (VD: sau ảnh thứ 12).
> - **Cột 3:** Đặt ở giữa (VD: sau ảnh thứ 18).
> Như vậy chúng sẽ xuất hiện ở các độ cao khác nhau, trông tự nhiên hơn rất nhiều.

## GLightbox Integration

Lightbox đọc `img.alt` làm caption. Vì vậy:
- `alt` attribute trong `<img>` PHẢI là caption đầy đủ (đồng bộ từ Media.caption)
- Không để `alt` ngắn cũn kiểu "Thiếu nữ áo dài"

Xem chi tiết: [`../architecture/rendering-pipeline.md`](../architecture/rendering-pipeline.md)

---
*Cập nhật: 2026-04-27*
