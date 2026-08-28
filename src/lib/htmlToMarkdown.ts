import * as cheerio from 'cheerio';

/**
 * A robust, lightweight HTML to Markdown converter using Cheerio.
 * Safely handles headings, lists, links, images, and formatting.
 * Suitable for use in Edge endpoints where results are heavily cached.
 */
export function convertHtmlToMarkdown(html: string, options: { baseUrl?: string } = {}): string {
  if (!html) return '';
  
  const $ = cheerio.load(html);
  const body = $('body').length ? $('body') : $.root();
  
  // Remove unwanted elements
  body.find('script, style, iframe, noscript, nav, footer, aside, .elementor-hidden-desktop').remove();
  
  let markdown = '';
  
  function processNode(node: cheerio.Element | cheerio.Text, depth: number = 0) {
    if (node.type === 'text') {
      const text = $(node).text().replace(/\s+/g, ' ');
      // Only append if it's not just a single space between block elements
      if (text.trim() || text === ' ') {
        markdown += text;
      }
      return;
    }
    
    if (node.type !== 'tag') return;
    
    const el = node as cheerio.Element;
    const tagName = el.tagName.toLowerCase();
    
    // Handle specific tags
    switch (tagName) {
      case 'h1':
        markdown += `\n\n# ${$(el).text().trim()}\n\n`;
        return; // Don't process children, already got text
      case 'h2':
        markdown += `\n\n## ${$(el).text().trim()}\n\n`;
        return;
      case 'h3':
        markdown += `\n\n### ${$(el).text().trim()}\n\n`;
        return;
      case 'h4':
        markdown += `\n\n#### ${$(el).text().trim()}\n\n`;
        return;
      case 'p':
      case 'div':
        markdown += '\n\n';
        $(el).contents().each((_, child) => processNode(child, depth));
        markdown += '\n\n';
        return;
      case 'br':
        markdown += '\n';
        return;
      case 'ul':
        markdown += '\n';
        $(el).children('li').each((_, li) => {
          markdown += `${'  '.repeat(depth)}- ${$(li).text().trim().replace(/\s+/g, ' ')}\n`;
        });
        markdown += '\n';
        return;
      case 'ol':
        markdown += '\n';
        $(el).children('li').each((i, li) => {
          markdown += `${'  '.repeat(depth)}${i + 1}. ${$(li).text().trim().replace(/\s+/g, ' ')}\n`;
        });
        markdown += '\n';
        return;
      case 'a':
        const href = $(el).attr('href');
        const text = $(el).text().trim().replace(/\s+/g, ' ');
        if (href && text) {
          const absoluteHref = options.baseUrl && href.startsWith('/') ? `${options.baseUrl}${href}` : href;
          markdown += `[${text}](${absoluteHref})`;
        } else if (text) {
          markdown += text;
        }
        return; // Children handled
      case 'img':
        const src = $(el).attr('src') || $(el).attr('data-src');
        const alt = $(el).attr('alt') || '';
        if (src) {
          const absoluteSrc = options.baseUrl && src.startsWith('/') ? `${options.baseUrl}${src}` : src;
          markdown += `![${alt}](${absoluteSrc})`;
        }
        return;
      case 'strong':
      case 'b':
        markdown += `**${$(el).text().trim()}**`;
        return;
      case 'em':
      case 'i':
        markdown += `*${$(el).text().trim()}*`;
        return;
      case 'table':
        // Extremely simple table handling for AI
        markdown += '\n\n';
        $(el).find('tr').each((_, tr) => {
          let row = '|';
          $(tr).find('th, td').each((__, cell) => {
            row += ` ${$(cell).text().trim().replace(/\n/g, ' ')} |`;
          });
          markdown += `${row}\n`;
          // Add separator after header
          if ($(tr).find('th').length > 0) {
            let sep = '|';
            $(tr).find('th').each(() => { sep += ' --- |'; });
            markdown += `${sep}\n`;
          }
        });
        markdown += '\n\n';
        return; // Children handled
      default:
        // For span and other inline tags, just process children
        $(el).contents().each((_, child) => processNode(child, depth));
        return;
    }
  }
  
  // Start processing from top level elements
  body.contents().each((_, child) => processNode(child));
  
  // Cleanup multiple empty lines
  return markdown.replace(/\n{3,}/g, '\n\n').trim();
}
