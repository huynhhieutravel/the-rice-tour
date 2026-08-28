# CoguuGallery Component — Hướng Dẫn Sử Dụng

## Tổng Quan
Component Gallery tái sử dụng, hỗ trợ masonry layout với số cột linh hoạt và Mood Text xen kẽ.
Lightbox tự động hoạt động — không cần cấu hình thêm.

## Import
```astro
import CoguuGallery from '@/components/gallery/CoguuGallery.astro';
```

## Cách Dùng Cơ Bản

```astro
<CoguuGallery 
  columns={3}
  items={[
    { type: 'image', src: 'https://r2.dev/...photo1.jpg', alt: 'Mô tả ảnh 1' },
    { type: 'image', src: 'https://r2.dev/...photo2.jpg', alt: 'Mô tả ảnh 2' },
    { type: 'mood',  text: 'Có những mùa hoa không chỉ để ngắm, mà để nhớ…', bg: 'warm' },
    { type: 'image', src: 'https://r2.dev/...photo3.jpg', alt: 'Mô tả ảnh 3' },
  ]}
/>
```

## Props

| Prop | Type | Default | Mô tả |
|------|------|---------|-------|
| `columns` | `2 \| 3 \| 4 \| 5` | `3` | Số cột hiển thị trên desktop |
| `items` | `GalleryItem[]` | `[]` | Mảng các item (ảnh hoặc mood text) |

## Cấu Trúc Item

### Image Item
```json
{
  "type": "image",
  "src": "https://r2.dev/.../photo.jpg",
  "alt": "Mô tả hiển thị trong Lightbox caption"
}
```

### Mood Text Item
```json
{
  "type": "mood",
  "text": "Câu quote cảm xúc...",
  "color": "#c2410c",
  "bg": "warm"
}
```

**Các preset `bg` có sẵn:**
- `warm` — Gradient cam nhạt (mặc định)
- `cool` — Gradient xám xanh
- `brand` — Gradient cam đậm hơn

## Ví Dụ Theo Số Cột

### 2 cột (Cho bài viết blog hẹp)
```astro
<CoguuGallery columns={2} items={galleryItems} />
```

### 4 cột (Cho trang gallery rộng)
```astro
<CoguuGallery columns={4} items={galleryItems} />
```

### 5 cột (Cho trang portfolio)
```astro
<CoguuGallery columns={5} items={galleryItems} />
```

## Responsive Behavior
| Màn hình | 2 cột | 3 cột | 4 cột | 5 cột |
|----------|-------|-------|-------|-------|
| Mobile (<640px) | 1 cột | 1 cột | 1 cột | 1 cột |
| Tablet (640-1024px) | 2 cột | 2 cột | 2 cột | 2 cột |
| Desktop (1024px+) | 2 cột | 3 cột | 3→4 cột | 3→5 cột |

## CSS Classes (Tham Khảo)
- `.coguu-gallery` — Container chính (Lightbox tự nhận diện class này)
- `.grid-fit-masonry` — Base masonry layout
- `.coguu-gallery-cols-{n}` — Override số cột
- `.feature-box` — Wrapper cho từng item
- `.feature-image` — Ảnh bên trong (có hover zoom effect)
- `.feature-overlay` — Lớp overlay tối khi hover
- `.coguu-gallery-mood` — Mood text card
- `.mood-text` — Styling cho text cảm xúc

## Lưu Ý Quan Trọng
1. **Lightbox tự động:** Mọi ảnh `.feature-image` trong `.coguu-gallery` đều tự động được GLightbox gom nhóm
2. **Caption lấy từ `alt`:** Thuộc tính `alt` của ảnh sẽ hiển thị làm caption trong Lightbox
3. **Mood Text không vào Lightbox:** Các card mood text tự động bị bỏ qua bởi Lightbox vì không chứa `<img>`
4. **Image Optimization:** Ảnh tự động được optimize qua `getOptimizedImageUrl()` và tạo `srcset` responsive
