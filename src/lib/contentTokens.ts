// src/lib/contentTokens.ts
// Note: DOMPurify/isomorphic-dompurify is NOT compatible with Cloudflare Workers (no DOM/jsdom).
// Content is admin-controlled so we use a lightweight server-safe sanitizer.

function serverSanitize(html: string): string {
  // Block dangerous protocols in href/src attributes
  return html
    .replace(/\b(href|src)\s*=\s*["']javascript:/gi, '$1="')
    .replace(/\b(href|src)\s*=\s*["']data:/gi, '$1="')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/\bon\w+\s*=\s*["'][^"']*["']/gi, '');
}

/**
 * Lấy giá trị lồng nhau từ object. 
 * Ví dụ: getNestedValue({contact: {phone: "0909"}}, "contact.phone") -> "0909"
 */
function getNestedValue(obj: Record<string, any>, path: string): any {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

/**
 * Token Replacement Engine
 * Cú pháp hỗ trợ:
 * - {{phone}}
 * - {{contact.email}}
 * - {{contact.zalo | default:"Chưa có"}}
 * 
 * Đã gỡ bỏ Memory Cache do thay thế Regex rất nhẹ và giúp triệt tiêu rủi ro Memory Leak trên Worker (giới hạn 128MB).
 */
export function replaceTokens(content: string, settings: Record<string, any>): string {
  if (!content) return '';

  // Regex pattern matching {{ key }} or {{ key.nested | default:"value" }}
  const regex = /\{\{\s*([a-zA-Z0-9_.-]+)(?:\s*\|\s*default:\s*["']([^"']+)["'])?\s*\}\}/g;

  let replacedContent = content.replace(regex, (match, key, defaultValue) => {
    let value = getNestedValue(settings, key);
    if (value === undefined || value === null || value === '') {
      if (defaultValue !== undefined) {
        return defaultValue;
      }
      return match;
    }
    return String(value);
  });

  // Server-safe sanitization (blocks javascript:, data:, <script>, on* handlers)
  const safeHTML = serverSanitize(replacedContent);

  return safeHTML;
}
