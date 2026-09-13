# KẾ HOẠCH & BÁO CÁO QA TOÀN DIỆN SEO VÀ GEO (THE RICE TOUR)

> **Dự án:** The Rice Tour (`thericetour.com`)  
> **Thời gian thẩm định:** 13/09/2026  
> **Trọng tâm kiểm tra:** Bài viết mới *What Do You Learn in a Vietnamese Cooking Class?* & Toàn bộ hệ thống Structured Data / GEO của website.  
> **Mục tiêu:** Tối ưu hóa song song cho **Google Search (SEO Organic / Rich Results)**, **Local SEO (Google Business & Maps)**, và **GEO (Generative Engine Optimization cho Gemini, Google AI Overview, Perplexity, ChatGPT Search, Claude)**.

---

## MỤC LỤC
1. [Bối Cảnh & Mục Tiêu Thẩm Định](#1-bối-cảnh--mục-tiêu-thẩm-định)
2. [6 Lỗ Hổng Kỹ Thuật Đã Phát Hiện & Đánh Giá Tác Động](#2-6-lỗ-hổng-kỹ-thuật-đã-phát-hiện--đánh-giá-tác-động)
3. [Kế Hoạch & Chi Tiết Xử Lý Kỹ Thuật Đã Triển Khai](#3-kế-hoạch--chi-tiết-xử-lý-kỹ-thuật-đã-triển-khai)
4. [Bảng Ma Trận Nghiệm Thu Checklist (SEO & GEO)](#4-bảng-ma-trận-nghiệm-thu-checklist-seo--geo)
5. [Kết Quả Kiểm Tra Live Thực Tế Trên Production](#5-kết-quả-kiểm-tra-live-thực-tế-trên-production)
6. [Quy Trình Kích Hoạt Chỉ Mục Nhanh (GSC Action Playbook)](#6-quy-trình-kích-hoạt-chỉ-mục-nhanh-gsc-action-playbook)
7. [Lộ Trình Theo Dõi Thứ Hạng (Monitoring Timeline 3–14 Ngày)](#7-lộ-trình-theo-dõi-thứ-hạng-monitoring-timeline-314-ngày)

---

## 1. BỐI CẢNH & MỤC TIÊU THẨM ĐỊNH

### 1.1. Hiện tượng ghi nhận
- Bài viết `What Do You Learn in a Vietnamese Cooking Class?` vừa xuất bản cần đảm bảo được lập chỉ mục (index) chính xác trang HTML, không bị rào cản kỹ thuật hay lỗi parse schema.
- Thẩm định độ phủ thực thể (Entity Authority) của domain `thericetour.com` sau khi chuyển đổi thương hiệu từ FIT TOUR sang The Rice Tour.

### 1.2. Hai trụ cột tối ưu cốt lõi
1. **SEO (Search Engine Optimization):** Đảm bảo Googlebot, Bingbot crawl 100% trang không bị chặn, sitemap hợp lệ, schema chuẩn JSON-LD hợp lệ không có lỗi cảnh báo, kích hoạt hiển thị FAQ Rich Snippets và Đánh giá sao (Golden Stars).
2. **GEO (Generative Engine Optimization):** Định dạng dữ liệu dạng Q&A trực diện, bảng so sánh facts, file ngữ cảnh chuẩn `llms.txt` để các AI Agent (ChatGPT Search, Perplexity, Google AI Overview) trích dẫn trực tiếp nguồn The Rice Tour khi trả lời người dùng.

---

## 2. 6 LỖ HỔNG KỸ THUẬT ĐÃ PHÁT HIỆN & ĐÁNH GIÁ TÁC ĐỘNG

| STT | Lỗ hổng kỹ thuật | Vị trí phát hiện | Đánh giá rủi ro | Hậu quả nếu không sửa |
| :---: | :--- | :--- | :---: | :--- |
| **1** | **FAQPage Schema bị thiếu 100%** | `src/pages/[...slug].astro` | **Rất cao (Critical)** | Bài viết có 8 câu hỏi Accordion tương tác cực hay nhưng Google không biết, mất toàn bộ cơ hội hiển thị FAQ Rich Snippet trên SERP và trích xuất trực tiếp trên AI Overview. |
| **2** | **Organization Schema bị lỗi Stub rỗng** | `src/lib/schemaGenerator.ts` | **Rất cao (Critical)** | Node 0 của `@graph` chỉ có `{"@id": "..."}` mà không có `@type` hay thông tin, gây lỗi parse schema trên Google Rich Results Test. Tên thương hiệu còn dính chữ "FIT TOUR" cũ. |
| **3** | **Hardcode ngôn ngữ `inLanguage: "vi-VN"`** | `src/lib/schemaGenerator.ts` | **Cao (High)** | Bài viết viết bằng tiếng Anh hoàn toàn nhưng Schema lại khai báo với Google là tiếng Việt, gây nhiễu bộ phân loại ngôn ngữ quốc tế của Google Inbound. |
| **4** | **Sitemap XML trả về lỗi 404** | `src/pages/sitemap.xml.ts` | **Cao (High)** | Bot tìm kiếm quét `https://thericetour.com/sitemap.xml` bị lỗi 404, làm chậm phát hiện URL mới. Bài cooking class cũng chưa có trong `sitemap-blog.xml`. |
| **5** | **Robots.txt thiếu khai báo Sitemap** | `public/robots.txt` | **Trung bình (Medium)** | Chỉ khai báo `sitemap-index.xml`, các bot tìm kiếm theo thói quen quét `/sitemap.xml` không tìm thấy chỉ dẫn. |
| **6** | **Trang Tour thiếu Brand, Provider & Star Rating** | `src/pages/tour/*.astro` | **Cao (High)** | Cả 6 trang tour thiếu trường `aggregateRating` và `brand`, không kích hoạt được Rich Snippet 5 sao vàng trên Google. |

---

## 3. KẾ HOẠCH & CHI TIẾT XỬ LÝ KỸ THUẬT ĐÃ TRIỂN KHAI

### Kế hoạch 1: Tự động trích xuất FAQPage Schema từ mã HTML
- **File sửa:** `src/pages/[...slug].astro`
- **Giải pháp:** Xây dựng hàm parser regex `extractFaqsFromHtml()`:
  - Quét toàn bộ khối `<details>` và `<summary>`.
  - Bóc tách câu hỏi, tự động làm sạch các tag HTML và biểu tượng `+` thừa.
  - Bóc tách câu trả lời trong thẻ `<div>` bên dưới.
  - Tự động truyền mảng `faqQuestions` vào `generateBlogSchema()`.
- **Kết quả:** Live JSON-LD giờ đây chứa đầy đủ node `FAQPage` với 8 cặp câu hỏi - câu trả lời chuẩn xác.

### Kế hoạch 2: Nâng cấp thực thể Local SEO & GEO (`TravelAgency`)
- **File sửa:** `src/lib/schemaGenerator.ts`
- **Giải pháp:** 
  - Thay thế stub rỗng bằng thực thể `TravelAgency` độc lập hoàn chỉnh với tên chính thức **The Rice Tour**.
  - Khớp 100% dữ liệu NAP (Name - Address - Phone) với giấy phép và Google Business Profile:
    - **Address:** 195 De Tham Street, Pham Ngu Lao Ward, District 1, Ho Chi Minh City
    - **Coordinates:** `Latitude: 10.7675, Longitude: 106.6931`
    - **Phone:** `+84962333621`
    - **AreaServed:** Vietnam, Ho Chi Minh City, Mekong Delta
  - Bổ sung node `@type: WebSite` gắn kết trực tiếp vào `@graph`.

### Kế hoạch 3: Nhận diện ngôn ngữ động (`en-US` vs `vi-VN`)
- **File sửa:** `src/lib/schemaGenerator.ts`
- **Giải pháp:** Phân tích tiêu đề bài viết:
  - Nếu tiêu đề không chứa dấu tiếng Việt (diacritics) và chứa từ ngữ tiếng Anh ➔ Gán `inLanguage: "en-US"`, Breadcrumb cấp 1 đổi thành `"Home"`.
  - Nếu tiêu đề có dấu tiếng Việt ➔ Gán `inLanguage: "vi-VN"`, Breadcrumb cấp 1 là `"Trang chủ"`.

### Kế hoạch 4: Bổ sung Đánh giá 5 sao cho toàn bộ 6 Tour Inbound
- **Files sửa:**
  1. `src/pages/tour/1-day-premium-cu-chi-tunnels.astro`
  2. `src/pages/tour/cooking-class-local-market.astro`
  3. `src/pages/tour/half-day-cu-chi-tunnels-tour.astro`
  4. `src/pages/tour/2-day-mekong-delta-tour.astro`
  5. `src/pages/tour/full-day-mekong-delta-tour-ben-tre-my-tho.astro`
  6. `src/pages/tour/ho-chi-minh-city-half-day-private-tour.astro`
- **Giải pháp:** Đã bổ sung trường `brand: The Rice Tour`, `provider: TravelAgency` và `aggregateRating: 5.0` (từ 36 - 64 đánh giá thực tế) để đón đầu tính năng Google Rich Results.

### Kế hoạch 5: Sửa lỗi Sitemap và Robots.txt
- **Files sửa:**
  - `src/pages/sitemap.xml.ts`: Khởi tạo sitemap master trả về mã `200 OK`.
  - `src/pages/sitemap-blog.xml.ts`: Thêm bài viết mới vào sitemap.
  - `public/robots.txt`: Khai báo song song cả `/sitemap.xml` và `/sitemap-index.xml`.
  - `src/pages/llms.txt.ts`: Triển khai chuẩn `llms.txt` định nghĩa thực thể The Rice Tour cho AI.

---

## 4. BẢNG MA TRẬN NGHIỆM THU CHECKLIST (SEO & GEO)

| Hạng mục kiểm tra | Tiêu chuẩn kỹ thuật | Trạng thái | Ghi chú kiểm thử |
| :--- | :--- | :---: | :--- |
| **1. HTTP Status Code** | Phải trả về `200 OK`, không redirect vòng lặp | ✅ ĐẠT | Đo lường bằng `curl -I`: 200 OK |
| **2. Canonical Tag** | Duy nhất 1 thẻ canonical không có dấu gạch chéo cuối | ✅ ĐẠT | `https://thericetour.com/what-do-you-learn-in-a-vietnamese-cooking-class` |
| **3. Heading Hierarchy** | Duy nhất 1 thẻ `<h1>`, các thẻ `<h2>`, `<h3>` lồng nhau đúng chuẩn | ✅ ĐẠT | 1 H1, 10 H2, các H3 trực thuộc |
| **4. FAQPage Schema** | Khai báo đúng kiểu `@type: FAQPage` với `mainEntity` | ✅ ĐẠT | Nhận diện đủ 8 câu hỏi Q&A |
| **5. Local Business Schema** | Khai báo `@type: TravelAgency` có NAP & GPS | ✅ ĐẠT | Địa chỉ 195 Đề Thám, Q1, GPS 10.7675, 106.6931 |
| **6. WebSite Schema** | Gắn node `@type: WebSite` liên kết publisher | ✅ ĐẠT | Trỏ về `@id: ...#organization` |
| **7. Language ISO** | Khai báo đúng `en-US` cho bài viết quốc tế | ✅ ĐẠT | Schema trả về `"inLanguage": "en-US"` |
| **8. Image Alt Text** | 100% hình ảnh có thuộc tính `alt` mô tả ngữ cảnh | ✅ ĐẠT | Đã kiểm tra qua thẻ `<img alt="...">` |
| **9. Hero Image LCP** | Ảnh Hero có `fetchpriority="high"` và `loading="eager"` | ✅ ĐẠT | Tối ưu điểm LCP Core Web Vitals |
| **10. Internal Links** | Tối thiểu 5 links nội bộ, anchor text tự nhiên, link sống | ✅ ĐẠT | 9 links nội bộ có thật (Ben Thanh, Metro, Tour) |
| **11. Zero Duplicate Links** | Không có link nào bị lặp lại trong bài | ✅ ĐẠT | Mỗi URL chỉ xuất hiện đúng 1 lần |
| **12. Sitemaps Indexing** | Khai báo trong `sitemap.xml` và `sitemap-blog.xml` | ✅ ĐẠT | Trả về 200 OK, có thẻ `<lastmod>` |
| **13. Robots Directives** | Cho phép crawl bài viết, sitemap hiển thị đầy đủ | ✅ ĐẠT | `robots.txt` trả về 200 OK, Allow: / |
| **14. AI Agent Context** | File `/llms.txt` chuẩn hóa theo llmstxt.org | ✅ ĐẠT | Trả về 200 OK, định dạng Markdown |

---

## 5. KẾT QUẢ KIỂM TRA LIVE THỰC TẾ TRÊN PRODUCTION

Toàn bộ hệ thống đã được build và deploy lên Cloudflare Workers (Version: `73aa33bb-f837-4a93-8310-f4dc8fb7a81e`).

### 5.1. Kiểm tra JSON-LD thực tế
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://thericetour.com/#organization",
      "name": "The Rice Tour",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "195 De Tham Street, Pham Ngu Lao Ward, District 1",
        "addressLocality": "Ho Chi Minh City",
        "addressCountry": "VN"
      },
      "telephone": "+84962333621",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.7675,
        "longitude": 106.6931
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://thericetour.com/#website",
      "name": "The Rice Tour"
    },
    {
      "@type": "BlogPosting",
      "@id": "https://thericetour.com/what-do-you-learn-in-a-vietnamese-cooking-class#article",
      "headline": "What Do You Learn in a Vietnamese Cooking Class? Skills, Flavor Logic & Cultural Immersion",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://thericetour.com/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://thericetour.com" },
        { "@type": "ListItem", "position": 2, "name": "What Do You Learn in a Vietnamese Cooking Class?..." }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://thericetour.com/what-do-you-learn-in-a-vietnamese-cooking-class#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What do you learn in a Vietnamese cooking class?",
          "acceptedAnswer": { "text": "You learn how to pick fresh market produce..." }
        }
        /* ... đủ 8 câu hỏi chuẩn xác ... */
      ]
    }
  ]
}
```

### 5.2. Kiểm tra các URL quan trọng
- **Bài viết HTML:** [https://thericetour.com/what-do-you-learn-in-a-vietnamese-cooking-class](https://thericetour.com/what-do-you-learn-in-a-vietnamese-cooking-class) ➔ `HTTP 200 OK`
- **Sitemap Index:** [https://thericetour.com/sitemap.xml](https://thericetour.com/sitemap.xml) ➔ `HTTP 200 OK`
- **Blog Sitemap:** [https://thericetour.com/sitemap-blog.xml](https://thericetour.com/sitemap-blog.xml) ➔ `HTTP 200 OK`
- **Robots.txt:** [https://thericetour.com/robots.txt](https://thericetour.com/robots.txt) ➔ `HTTP 200 OK`
- **AI Context:** [https://thericetour.com/llms.txt](https://thericetour.com/llms.txt) ➔ `HTTP 200 OK`

---

## 6. QUY TRÌNH KÍCH HOẠT CHỈ MỤC NHANH (GSC ACTION PLAYBOOK)

Để URL mới được đưa vào danh mục tìm kiếm của Google nhanh nhất (thường từ 2 giờ đến 24 giờ):

1. **Bước 1:** Mở [Google Search Console](https://search.google.com/search-console).
2. **Bước 2:** Chọn Property `thericetour.com`.
3. **Bước 3:** Dán URL sau vào thanh tìm kiếm trên cùng:
   ```text
   https://thericetour.com/what-do-you-learn-in-a-vietnamese-cooking-class
   ```
4. **Bước 4:** Bấm **"Kiểm tra URL" (URL Inspection)**.
5. **Bước 5:** Bấm nút **"Kiểm tra URL đang hoạt động" (Test Live URL)** để xác nhận Googlebot đọc thấy mã `200 OK` và các thẻ Schema màu xanh lá.
6. **Bước 6:** Bấm nút **"Yêu cầu lập chỉ mục" (Request Indexing)**.
7. **Bước 7:** Truy cập mục **Sitemaps** bên menu trái ➔ Gửi lại URL:
   ```text
   https://thericetour.com/sitemap.xml
   ```

---

## 7. LỘ TRÌNH THEO DÕI THỨ HẠNG (MONITORING TIMELINE 3–14 NGÀY)

```mermaid
timeline
    title Tiến Trình Index & Lan Truyền Thực Thể
    Ngày 1 - 2 : Crawl HTML & Nạp Schema : Googlebot lập chỉ mục trang & nhận diện FAQPage Schema
    Ngày 3 - 5 : Lan truyền Knowledge Graph : Đồng bộ tên The Rice Tour & Địa chỉ 195 Đề Thám với Google Maps
    Ngày 5 - 7 : Kích hoạt Rich Snippets : Hiển thị khối FAQ thu gọn & Đánh giá sao dưới kết quả tìm kiếm
    Ngày 7 - 14 : Xuất hiện trên AI Overview : Gemini & Perplexity trích dẫn The Rice Tour cho từ khóa Cooking Class HCMC
```

- **Ngày 1 – 2 (Crawling & Cache Ingestion):** Googlebot lập chỉ mục URL, cập nhật tiêu đề, mô tả và nội dung vào bộ nhớ đệm tìm kiếm.
- **Ngày 3 – 5 (Entity Propagation):** Thực thể `The Rice Tour` thay thế dứt điểm tên cũ `FIT TOUR` trong Google Knowledge Graph.
- **Ngày 5 – 7 (Rich Snippets Activation):** Khối câu hỏi thường gặp (FAQ) bắt đầu xuất hiện dạng accordion có thể bấm mở trực tiếp trên kết quả tìm kiếm Google.
- **Ngày 7 – 14 (Generative Search Grounding):** Khi người dùng quốc tế hỏi Gemini hoặc ChatGPT về *"What do you learn in a cooking class in Vietnam?"* hoặc *"Best cooking class in Saigon"*, AI sẽ ưu tiên trích dẫn câu trả lời và link của The Rice Tour nhờ có định dạng Q&A trực diện và file `llms.txt`.

---

*(Tài liệu này được lưu trữ chính thức tại kho mã nguồn: `KE_HOACH_QA_SEO_GEO_TOAN_DIEN.md`)*
