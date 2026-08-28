// src/config/schemaRegistry.ts
// Nguồn sự thật duy nhất cho toàn bộ hệ thống Schema.
// Khi cần thêm Person, Event, Product — chỉ thêm 1 entry vào mảng này.

export interface SchemaRegistryEntry {
  key: string;
  label: string;
  types: string[];
  source: string;
  sourceUrl?: string;
  editable: boolean;
  priority: number;
  scope: 'all-pages' | 'blog-posts' | 'per-page' | 'per-post';
  description: string;
  required: boolean;
}

export const schemaRegistry: SchemaRegistryEntry[] = [
  {
    key: "global_organization",
    label: "Global Organization",
    types: ["Organization", "TravelAgency", "WebSite"],
    source: "SiteSetting.schema (DB)",
    sourceUrl: "/admin/schema",
    editable: true,
    priority: 1,
    scope: "all-pages",
    description: "Schema tổ chức toàn cục, xuất hiện trên mọi trang website trong thẻ <head>",
    required: true,
  },
  {
    key: "auto_blog",
    label: "Auto Blog Schema",
    types: ["BlogPosting", "BreadcrumbList", "FAQPage"],
    source: "src/lib/schemaGenerator.ts",
    sourceUrl: undefined,
    editable: false,
    priority: 2,
    scope: "blog-posts",
    description: "Tự sinh từ metadata bài viết (tiêu đề, tác giả, ảnh, ngày đăng). FAQPage được thêm nếu bài có khối FAQ.",
    required: false,
  },
  {
    key: "custom_page",
    label: "Custom Page Schema",
    types: ["Bất kỳ (JSON-LD)"],
    source: "Page.customSchema (DB)",
    sourceUrl: "/admin/pages",
    editable: true,
    priority: 3,
    scope: "per-page",
    description: "Schema tuỳ chỉnh cho từng Page tĩnh (Our Team, Portfolio...). Override Auto Blog Schema nếu có.",
    required: false,
  },
  {
    key: "custom_post",
    label: "Custom Post Schema",
    types: ["Bất kỳ (JSON-LD)"],
    source: "Post.customSchema (DB)",
    sourceUrl: "/admin/posts",
    editable: true,
    priority: 4,
    scope: "per-post",
    description: "Schema tuỳ chỉnh ghi đè Auto Blog Schema cho từng bài viết cụ thể.",
    required: false,
  },
];

// Luật render: P1 luôn song song với mọi lớp. P3/P4 override P2.
export const RENDER_PRIORITY_RULES = [
  { priority: 1, label: "Global Schema", note: "Luôn render, mọi trang, không thể bị override" },
  { priority: 2, label: "Auto Generator", note: "Chỉ Blog, bị thay thế nếu có Custom Schema" },
  { priority: 3, label: "Custom Page Schema", note: "Override P2 hoàn toàn" },
  { priority: 4, label: "Custom Post Schema", note: "Override P2 hoàn toàn" },
];
