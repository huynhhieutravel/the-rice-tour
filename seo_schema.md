# Cấu trúc SEO Schema (JSON-LD) cho Tour Du Lịch Sikkim

Dưới đây là 2 Schema chuẩn SEO Google Search Console dành riêng cho trang **Tour du lịch Sikkim** (`https://fittour.vn/tour/tour-du-lich-sikkim-2`).

---

## 1. Schema Product (Sản phẩm Tour du lịch)
* **Loại Schema:** `Product`
* **Google Rich Results Support:** Giá vé, tình trạng nhận chỗ (InStock), hình ảnh tour, thương hiệu FIT TOUR.

```json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Tour du lịch Sikkim - The last Shangrila in Himalaya",
  "image": [
    "https://media.fittour.vn/uploads/2023/01/tour-du-lich-sikkim.webp",
    "https://media.fittour.vn/wp-content/uploads/2023/02/du-lich-Darjeeling.jpg",
    "https://media.fittour.vn/wp-content/uploads/2023/01/dinh-nui-Kangchenjunga.jpg",
    "https://media.fittour.vn/wp-content/uploads/2023/02/tu-vien-pemayangtse.jpg",
    "https://media.fittour.vn/wp-content/uploads/2023/02/ho-Khecheopalri.jpg",
    "https://media.fittour.vn/wp-content/uploads/2023/01/thi-tran-gangtok.jpg",
    "https://media.fittour.vn/wp-content/uploads/2023/02/tu-vien-rumtek.jpg",
    "https://media.fittour.vn/wp-content/uploads/2023/01/ho-Tsomgo-sikkim.jpg",
    "https://media.fittour.vn/wp-content/uploads/2023/02/dia-diem-tham-quan-o-sikkim.jpg"
  ],
  "description": "Tour du lịch Sikkim đưa bạn ngắm nhìn những cảnh quan tráng lệ, đến thăm các tu viện cổ xưa, quan sát văn hóa truyền thống của người Tạng.",
  "sku": "tour-du-lich-sikkim-2",
  "category": "Tour Sikkim",
  "brand": {
    "@type": "Brand",
    "name": "FIT TOUR"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://fittour.vn/tour/tour-du-lich-sikkim-2",
    "priceCurrency": "VND",
    "price": 64450000,
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition",
    "seller": {
      "@type": "Organization",
      "name": "FIT TOUR"
    }
  }
}
```

---

## 2. Schema BreadcrumbList (Đường dẫn phân cấp)
* **Loại Schema:** `BreadcrumbList`

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Trang chủ",
      "item": "https://fittour.vn/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tour",
      "item": "https://fittour.vn/tour"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Tour du lịch Sikkim - The last Shangrila in Himalaya",
      "item": "https://fittour.vn/tour/tour-du-lich-sikkim-2"
    }
  ]
}
```
