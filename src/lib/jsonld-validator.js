/**
 * 3-Tier JSON-LD Validator
 * Dùng trong: Edit Page, Edit Post, Admin Schema Editor
 *
 * Level 1 — JSON Syntax    → BLOCK save on fail
 * Level 2 — JSON-LD Struct → BLOCK save on fail (@context, @type required)
 * Level 3 — Google Fields  → WARNING only, allow save
 */

// Google required fields per @type (Level 3)
const GOOGLE_REQUIRED_FIELDS = {
  Article:       ['headline', 'image', 'datePublished', 'author'],
  BlogPosting:   ['headline', 'image', 'datePublished', 'author'],
  NewsArticle:   ['headline', 'image', 'datePublished', 'author'],
  FAQPage:       ['mainEntity'],
  BreadcrumbList:['itemListElement'],
  Organization:  ['name', 'url'],
  TravelAgency:  ['name', 'url'],
  WebSite:       ['name', 'url'],
  Product:       ['name', 'image', 'description'],
  Event:         ['name', 'startDate', 'location'],
  Person:        ['name'],
  AboutPage:     ['name'],
  WebPage:       ['name'],
};

/**
 * @returns { valid: boolean, level: 1|2|3|null, errors: string[], warnings: string[] }
 */
function validateJsonLd(raw) {
  const result = { valid: false, level: null, errors: [], warnings: [] };

  // ── Level 1: JSON Syntax ──────────────────────────────────────────────────
  let parsed;
  try {
    parsed = JSON.parse(raw.trim());
    result.level = 1;
  } catch (e) {
    result.errors.push('❌ Level 1 — JSON không hợp lệ: ' + e.message.replace(/at position \d+/, '').trim());
    return result;
  }

  // Handle @graph wrapper
  const nodes = Array.isArray(parsed['@graph'])
    ? parsed['@graph']
    : [parsed];

  // ── Level 2: JSON-LD Structure ────────────────────────────────────────────
  const rootContext = parsed['@context'];
  if (!rootContext) {
    result.errors.push('❌ Level 2 — Thiếu "@context". Google sẽ bỏ qua Schema này hoàn toàn.');
    result.errors.push('   → Thêm: "@context": "https://schema.org"');
    return result;
  }

  const hasType = nodes.some(n => n['@type']);
  if (!hasType) {
    result.errors.push('❌ Level 2 — Thiếu "@type". Không xác định được loại thực thể.');
    result.errors.push('   → Ví dụ: "@type": "Organization"');
    return result;
  }

  result.level = 2;

  // ── Level 3: Google Required Fields (warnings only) ───────────────────────
  for (const node of nodes) {
    const type = node['@type'];
    if (!type) continue;
    const required = GOOGLE_REQUIRED_FIELDS[type];
    if (!required) continue;
    for (const field of required) {
      if (!node[field]) {
        result.warnings.push(`⚠️ Level 3 — "${type}" thiếu field "${field}" (Google khuyến nghị). Rich Results có thể không hiển thị.`);
      }
    }
  }

  result.level = 3;
  result.valid = true;
  return result;
}

/**
 * Render validation result into a UI container element.
 * @param {HTMLElement} container - Element to show result in
 * @param {string} rawJson - The raw JSON string to validate
 * @returns {boolean} - true if safe to save (level 1 & 2 passed)
 */
function renderValidationResult(container, rawJson) {
  if (!container) return true;

  if (!rawJson || rawJson.trim() === '') {
    container.innerHTML = '<span style="color:#64748b;font-size:12px;">Chưa có Schema — để trống là bình thường.</span>';
    return true;
  }

  const result = validateJsonLd(rawJson);
  const lines = [];

  if (result.errors.length > 0) {
    lines.push(...result.errors.map(e => `<div style="color:#dc2626;font-size:12px;margin:2px 0;">${e}</div>`));
  }
  if (result.warnings.length > 0) {
    lines.push(...result.warnings.map(w => `<div style="color:#d97706;font-size:12px;margin:2px 0;">${w}</div>`));
  }
  if (result.valid && result.warnings.length === 0) {
    lines.push('<div style="color:#16a34a;font-size:12px;">✅ JSON-LD hợp lệ — Sẵn sàng cho Google</div>');
  } else if (result.valid && result.warnings.length > 0) {
    lines.push('<div style="color:#16a34a;font-size:12px;">✅ JSON-LD hợp lệ — Có warning ở trên (không bắt buộc fix)</div>');
  }

  container.innerHTML = lines.join('');
  return result.valid; // only block on level 1 & 2 fail
}
