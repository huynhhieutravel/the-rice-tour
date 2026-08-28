import { SHORTCODE_SCHEMA } from './schema';

export type ASTNode = 
  | { type: 'html'; content: string }
  | { type: 'shortcode'; name: string; props: Record<string, string>; children?: ASTNode[] };

/**
 * Removes dangerous attributes from HTML string (Simple Sanitize)
 * Keeps structure but removes scripts and on* events
 */
export function sanitizeHTML(html: string): string {
  // Very basic sanitization, remove script tags and on* attributes, javascript:
  let safeHtml = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  safeHtml = safeHtml.replace(/\s+(on[a-z]+)="[^"]*"/gi, '');
  safeHtml = safeHtml.replace(/\s+(on[a-z]+)='[^']*'/gi, '');
  safeHtml = safeHtml.replace(/href="javascript:[^"]*"/gi, 'href="#"');
  return safeHtml;
}

/**
 * Parse raw string into AST Chunks
 */
export function parseShortcodes(content: string, skipSanitize = true): ASTNode[] {
  if (!content) return [];
  
  const nodes: ASTNode[] = [];
  // Matches [shortcode_name key="val"]
  const regex = /\[([a-zA-Z0-9_-]+)(?:\s+([^\]]+))?\]/g;
  let lastIndex = 0;
  let match;

  try {
    while ((match = regex.exec(content)) !== null) {
      const name = match[1];
      const propsStr = match[2] || '';
      
      // Strict Whitelist validation
      if (!(name in SHORTCODE_SCHEMA)) {
        console.warn(`[Shortcode] Unknown: ${name}`);
        continue;
      }

      // Add preceding HTML
      if (match.index > lastIndex) {
        let htmlChunk = content.slice(lastIndex, match.index);
        nodes.push({
          type: 'html',
          content: skipSanitize ? htmlChunk : sanitizeHTML(htmlChunk)
        });
      }

      // Parse props
      const props: Record<string, string> = {};
      const propRegex = /([a-zA-Z0-9_-]+)=(?:\\?"(.*?)\\?"|\\?'(.*?)\\?')/g;
      let propMatch;
      while ((propMatch = propRegex.exec(propsStr)) !== null) {
        props[propMatch[1]] = propMatch[2] !== undefined ? propMatch[2] : propMatch[3];
      }

      // Validate Props against schema (optional strict mode)
      // We can just pass them down, and Component will ignore invalid ones

      nodes.push({
        type: 'shortcode',
        name,
        props
      });

      lastIndex = regex.lastIndex;
    }

    // Add remaining HTML
    if (lastIndex < content.length) {
      let htmlChunk = content.slice(lastIndex);
      nodes.push({
        type: 'html',
        content: skipSanitize ? htmlChunk : sanitizeHTML(htmlChunk)
      });
    }

    return nodes;
  } catch (error) {
    console.error('[Shortcode Parser Error]', error);
    // Error Tolerance: Fallback to raw HTML
    return [{ type: 'html', content: skipSanitize ? content : sanitizeHTML(content) }];
  }
}
