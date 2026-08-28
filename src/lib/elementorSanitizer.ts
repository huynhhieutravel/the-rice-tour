/**
 * Elementor HTML Sanitizer Pipeline
 * 
 * Xử lý raw HTML từ WordPress Elementor TRƯỚC KHI render trên Astro.
 * Chạy server-side (render time), KHÔNG sửa DB → an toàn, reversible.
 * 
 * Pipeline:
 *   1. Strip duplicate H1 (template đã render H1 từ post.title)
 *   2. Strip duplicate featured image (template đã render từ post.featuredImage)
 *   3. Fix broken data-settings JSON attributes  
 *   4. Fix empty class attributes (<div class> → <div>)
 *   5. Strip Elementor noise data-* attributes
 *   6. Clean up empty wrapper divs
 * 
 * @usage
 *   import { sanitizeElementorHtml } from '@/lib/elementorSanitizer';
 *   const clean = sanitizeElementorHtml(rawHtml, post.featuredImage);
 */

/**
 * Main sanitizer function — apply all steps in sequence.
 */
export function sanitizeElementorHtml(html: string, featuredImage?: string, stripH1: boolean = true): string {
  if (!html) return '';

  let result = html;

  // Step 1: Strip ALL <h1> tags (template already renders H1 from post.title)
  if (stripH1) {
    result = stripDuplicateH1(result);
  }

  // Step 2: Strip first occurrence of featured image in content body
  if (featuredImage) {
    result = stripDuplicateFeaturedImage(result, featuredImage);
  }

  // Step 3: Fix broken data-settings with unescaped JSON
  result = fixBrokenDataSettings(result);

  // Step 4: Fix empty class attributes
  result = fixEmptyClassAttributes(result);

  // Step 5: Strip Elementor-specific data attributes (reduce HTML noise)
  result = stripElementorDataAttributes(result);

  // Step 6: Fix legacy WordPress image size suffixes causing 404s
  result = fixImageResolution(result);

  return result;
}

/**
 * Step 6: Fix legacy WordPress image size suffixes.
 * WordPress adds -768x432.jpg suffixes to images. In our new setup, these sizes might not exist on media.fittour.vn.
 * We strip them to load the original canonical image.
 */
function fixImageResolution(html: string): string {
  // Matches URLs ending with -[width]x[height].[ext] before quotes or within srcset
  // e.g. -768x432.jpg -> .jpg
  return html.replace(/-\d+x\d+(\.(?:jpg|jpeg|png|webp|gif|avif))/gi, '$1');
}

/**
 * Step 1: Remove all H1 tags from content body.
 * The Astro template (BlogLayout.astro) already renders H1 from post.title.
 */
function stripDuplicateH1(html: string): string {
  return html.replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, '');
}

/**
 * Step 2: Remove the first <img> whose src contains the same filename as featuredImage.
 * Only removes the FIRST match (hero section), not subsequent uses deeper in content.
 */
function stripDuplicateFeaturedImage(html: string, featuredImage: string): string {
  const filename = featuredImage.split('/').pop();
  if (!filename) return html;

  const escapedFilename = filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Use [/"] before the filename to ensure we match the exact filename, not a substring like 'infographic-name.webp'
  const imgRegex = new RegExp(`<img[^>]*src=["'][^"']*?/${escapedFilename}["'][^>]*/?>`, 'i');
  
  // Only replace the first occurrence
  return html.replace(imgRegex, '');
}

/**
 * Step 3: Fix broken data-settings attributes.
 * Elementor exports: data-settings="{"key":"value"}" 
 * This breaks HTML because " inside " is invalid.
 * Fix: Replace the attribute value delimiter to single quotes.
 */
function fixBrokenDataSettings(html: string): string {
  // Match data-settings="..." where the value contains { (indicating JSON)
  // Strategy: Find data-settings= followed by " and containing {
  // Replace the outer quotes with single quotes
  return html.replace(
    /data-settings="(\{[^"]*?"[^"]*?\})"/gi,
    (match) => {
      // Extract the JSON-like content and wrap in single quotes
      const jsonContent = match.slice('data-settings="'.length, -1);
      return `data-settings='${jsonContent}'`;
    }
  );
}

/**
 * Step 4: Fix empty class attributes.
 * <div class> (no value) → <div>
 * <div class=""> → <div>
 */
function fixEmptyClassAttributes(html: string): string {
  // <div class> or <article class> (attribute without value, no = sign)
  // Handles both first-attr (<div class>) and non-first-attr (<div id="x" class>)
  html = html.replace(/(<\w+(?:\s[^>]*)?) class(?=[\s>])/gi, '$1');
  // <div class=""> or <div class=''> (empty string value)  
  html = html.replace(/(<\w+(?:\s[^>]*)?) class=["']["']/gi, '$1');
  return html;
}

/**
 * Step 5: Strip Elementor-specific data attributes.
 * These are meaningless without Elementor's JS runtime.
 * Removes: data-id, data-element_type, data-widget_type, data-settings, data-e-*
 */
function stripElementorDataAttributes(html: string): string {
  // Remove specific Elementor data attributes
  const attrsToStrip = [
    'data-id',
    'data-element_type', 
    'data-widget_type',
    'data-settings',
    'data-core-v316-plus',
  ];
  
  for (const attr of attrsToStrip) {
    // Match attr="value" or attr='value' or attr (no value)
    const regex = new RegExp(`\\s${attr}(?:=(?:"[^"]*"|'[^']*'))?`, 'gi');
    html = html.replace(regex, '');
  }

  // Also strip data-e-* attributes (Elementor internal)
  html = html.replace(/\sdata-e-[a-z-]+=(?:"[^"]*"|'[^']*')/gi, '');
  
  return html;
}
