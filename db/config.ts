import { defineDb, defineTable, column } from 'astro:db';

// ---------------------------------------------------------
// 1. BẢNG COUNTRY (ĐIỂM ĐẾN / QUỐC GIA)
// Thay thế cho custom post type "country" trên hệ thống cũ
// ---------------------------------------------------------
const Country = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(), // Tên quốc gia/vùng lãnh thổ (VD: Nhật Bản, Ladakh)
    slug: column.text({ unique: true }),
    continent: column.text(), // Châu lục (VD: Châu Á, Châu Âu, Himalayas)
    
    // Media & Nội dung
    featuredImage: column.text(),
    bannerImage: column.text({ optional: true }), // Ảnh cover ngang cho trang chi tiết quốc gia
    description: column.text(), // Bài viết giới thiệu điểm đến (Rich Text)
    
    // Thông tin cẩm nang du lịch (Bổ sung giá trị cho khách hàng)
    bestTimeToVisit: column.text({ optional: true }), // Mùa đẹp nhất
    visaRequirement: column.text({ optional: true }), // Yêu cầu Visa
    currency: column.text({ optional: true }), // Tiền tệ
    
    // SEO
    metaTitle: column.text({ optional: true }),
    metaDescription: column.text({ optional: true }),
  }
});

// ---------------------------------------------------------
// 2. BẢNG TOUR (HÀNH TRÌNH DU LỊCH)
// Khớp với custom post type "tour"
// ---------------------------------------------------------
const Tour = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    slug: column.text({ unique: true }),
    countryId: column.text({ references: () => Country.columns.id }), // Thuộc quốc gia nào
    
    // Cấu hình Bán hàng (Sales)
    price: column.number(), // Giá bán
    originalPrice: column.number({ optional: true }), // Giá gốc (để hiển thị gạch ngang/giảm giá)
    isFeatured: column.boolean({ default: false }), // Tour nổi bật (lên trang chủ)
    badge: column.text({ optional: true }), // Nhãn (VD: "Best Seller", "Mới")
    
    // Cấu hình Lịch trình cơ bản
    durationDays: column.number(), // Số ngày
    durationNights: column.number(), // Số đêm
    departureLocation: column.text(), // Điểm khởi hành (Hà Nội / HCM)
    transportation: column.text({ optional: true }), // Phương tiện (VD: Bay All Nippon Airways)
    
    // Media
    featuredImage: column.text(),
    gallery: column.json({ optional: true }), // Mảng các ảnh thư viện (Array of Strings)
    
    // Nội dung chi tiết (Rich Content)
    overview: column.text(), // Tổng quan hành trình (Rich Text)
    highlights: column.json({ optional: true }), // Các điểm nhấn (Array of Strings)
    
    // LỊCH TRÌNH TỪNG NGÀY (Cực kỳ quan trọng)
    // Lưu trữ dưới dạng JSON array: [{ day: 1, title: "HCM - Tokyo", content: "...", meals: "Sáng/Trưa", hotel: "..." }]
    itinerary: column.json(), 
    
    // Dịch vụ
    included: column.text(), // Bao gồm (Rich Text / HTML List)
    excluded: column.text(), // Không bao gồm
    terms: column.text({ optional: true }), // Điều khoản, lưu ý, chính sách hoàn hủy
    
    // Trạng thái & SEO
    status: column.text({ default: 'published' }), // 'draft' | 'published'
    metaTitle: column.text({ optional: true }),
    metaDescription: column.text({ optional: true }),
    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ optional: true }),
  }
});

// ---------------------------------------------------------
// 3. BẢNG BLOG / EMAGAZINE (BÀI VIẾT)
// Khớp với post type "post"
// ---------------------------------------------------------
const BlogCategory = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    slug: column.text({ unique: true }),
  }
});

const Post = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    slug: column.text({ unique: true }),
    categoryId: column.text({ references: () => BlogCategory.columns.id }),
    
    // Media & Content
    featuredImage: column.text(),
    excerpt: column.text(), // Mô tả ngắn
    content: column.text(), // Nội dung bài viết (Rich Text)
    
    // Trạng thái
    type: column.text({ default: 'blog' }), // Để phân loại hiển thị: 'blog' (bình thường) hoặc 'emagazine' (layout đặc biệt)
    status: column.text({ default: 'published' }),
    author: column.text({ default: 'Admin' }),
    
    // SEO
    metaTitle: column.text({ optional: true }),
    metaDescription: column.text({ optional: true }),
    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ optional: true }),
  }
});

// ---------------------------------------------------------
// 4. BẢNG VISA (DỊCH VỤ VISA)
// Khớp với custom post type "visa"
// ---------------------------------------------------------
const Visa = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(), // VD: Dịch vụ Visa Nhật Bản
    slug: column.text({ unique: true }),
    countryId: column.text({ references: () => Country.columns.id }),
    
    price: column.number({ optional: true }),
    featuredImage: column.text(),
    
    // Hồ sơ yêu cầu
    requiredDocuments: column.text(), // Hồ sơ cần chuẩn bị (Rich Text)
    processingTime: column.text(), // Thời gian xét duyệt (VD: 7-10 ngày làm việc)
    
    content: column.text(), // Bài viết chi tiết
    
    status: column.text({ default: 'published' }),
    metaTitle: column.text({ optional: true }),
    metaDescription: column.text({ optional: true }),
  }
});

// ---------------------------------------------------------
// 5. BẢNG MEDIA (THƯ VIỆN HÌNH ẢNH / TÀI LIỆU)
// ---------------------------------------------------------
const Media = defineTable({
  columns: {
    id: column.number({ primaryKey: true }), // ID từ WordPress
    filename: column.text(), // Tên file (vd: image.jpg)
    url: column.text(), // Đường dẫn R2 Public URL
    altText: column.text({ optional: true }), // Thẻ Alt SEO
    title: column.text({ optional: true }), // Tiêu đề ảnh
    caption: column.text({ optional: true }), // Chú thích dưới ảnh
    description: column.text({ optional: true }), // Mô tả dài
    mimeType: column.text(), // Định dạng (vd: image/jpeg)
    sizeBytes: column.number({ optional: true }), // Dung lượng file
    width: column.number({ optional: true }),
    height: column.number({ optional: true }),
    createdAt: column.date({ default: new Date() })
  }
});

// ---------------------------------------------------------
// 6. BẢNG SITE SETTINGS (CẤU HÌNH HỆ THỐNG GLOBAL)
// ---------------------------------------------------------
const SiteSetting = defineTable({
  columns: {
    key: column.text({ primaryKey: true }), // Định danh group (vd: 'contact', 'social', 'seo')
    value: column.json(), // Chứa cục data JSON (vd: {"phone": "0909...", "email": "abc@..."})
    version: column.number({ default: 1 }), // Track version cache
    updatedAt: column.date({ default: new Date() })
  }
});

// ---------------------------------------------------------
// 7. BẢNG LINK MANAGER (QUẢN LÝ CHUYỂN HƯỚNG URL)
// ---------------------------------------------------------
const Link = defineTable({
  columns: {
    slug: column.text({ primaryKey: true }), // vd: 'facebook'
    label: column.text(), // Tên hiển thị CMS
    url: column.text(), // Đích đến (vd: 'https://facebook.com/...')
    statusCode: column.number({ default: 301 }), // 301 hoặc 302
    target: column.text({ default: '_blank' }),
    rel: column.text({ default: 'nofollow sponsored' }),
    isActive: column.boolean({ default: true }),
    createdAt: column.date({ default: new Date() })
  }
});

// ---------------------------------------------------------
// 8. BẢNG SHORT TOPIC (CHỦ ĐỀ VIDEO NGẮN)
// ---------------------------------------------------------
const ShortTopic = defineTable({
  columns: {
    id: column.text({ primaryKey: true }), // UUID
    title: column.text(), // Tên chủ đề (vd: Kinh nghiệm du lịch Ladakh)
    slug: column.text({ unique: true }), // ladakh
    description: column.text({ optional: true }), // Mô tả ngắn
    thumbnailUrl: column.text({ optional: true }), // Ảnh cover cho chủ đề
    viewOrder: column.number({ default: 0 }),
    createdAt: column.date({ default: new Date() }),
  }
});

// ---------------------------------------------------------
// 9. BẢNG SHORT VIDEO (VNE GO / TIKTOK CLONE ENGINE)
// ---------------------------------------------------------
const ShortVideo = defineTable({
  columns: {
    id: column.text({ primaryKey: true }), // UUID
    platform: column.text({ default: 'tiktok' }), // 'tiktok', 'youtube', 'instagram', 'local'
    videoUrl: column.text(), // Link gốc
    videoId: column.text(), // ID trích xuất
    title: column.text({ optional: true }),
    description: column.text({ optional: true }),
    topicSlug: column.text({ optional: true }), // Liên kết với ShortTopic.slug
    tourSlug: column.text({ optional: true }), // Slug của tour để hiện CTA Overlay
    thumbnailUrl: column.text({ optional: true }), // Ảnh placeholder lúc chưa load iframe
    viewOrder: column.number({ default: 0 }), // Thứ tự hiển thị
    status: column.text({ default: 'draft' }), // 'published' | 'draft'
    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ optional: true }),
  }
});
// ---------------------------------------------------------
// 10. BẢNG TRIP (LANDING PAGE CHO CHUYẾN ĐI TỪ CRM)
// ---------------------------------------------------------
const Trip = defineTable({
  columns: {
    id: column.text({ primaryKey: true }), // slug
    title: column.text(),
    slug: column.text({ unique: true }),
    departureCode: column.text(), // Liên kết với CRM (Ví dụ: ALASKA-001)
    layout: column.text({ default: 'default' }), // Giao diện (default, alaska_special)
    featuredImage: column.text({ optional: true }),
    content: column.text(), // Giới thiệu chung
    faqs: column.json({ optional: true }),
    status: column.text({ default: 'published' }),
    createdAt: column.date({ default: new Date() }),
    updatedAt: column.date({ optional: true }),
  }
});


export default defineDb({
  tables: {
    Country,
    Tour,
    BlogCategory,
    Post,
    Visa,
    Media,
    SiteSetting,
    Link,
    ShortTopic,
    ShortVideo,
    Trip
  }
});
