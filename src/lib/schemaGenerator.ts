// Core utility to clean up undefined, null, or empty string values from schema objects
export function cleanSchema(obj: any): any {
  if (obj === null || obj === undefined || obj === '') {
    return undefined;
  }
  if (Array.isArray(obj)) {
    const cleaned = obj.map(cleanSchema).filter(item => item !== undefined);
    return cleaned.length > 0 ? cleaned : undefined;
  }
  if (typeof obj === 'object') {
    const cleaned: any = {};
    for (const key in obj) {
      const val = cleanSchema(obj[key]);
      if (val !== undefined) {
        cleaned[key] = val;
      }
    }
    return Object.keys(cleaned).length > 0 ? cleaned : undefined;
  }
  return obj;
}

// Fallback Organization Schema (used when Global Schema is unavailable)
// This ensures the @graph is never broken even without the global SiteSetting.
export const organizationFallback = {
  "@type": "Organization",
  "@id": "https://thericetour.com/#organization",
  "name": "FIT TOUR",
  "url": "https://thericetour.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://media.thericetour.com/uploads/logo-the-rice.webp",
    "width": 512,
    "height": 512
  }
};

// Keep backward compat alias
export const organizationSchema = organizationFallback;

/**
 * Defensive publisher node:
 * - If Global Schema exists (rendered in <head> via BaseLayout) → use @id reference only
 * - If not (e.g., DB miss, cold start) → fallback to full Organization node
 * This prevents broken @graph in BlogPosting schemas.
 */
export function getPublisherNode(globalSchemaExists: boolean) {
  if (globalSchemaExists) {
    return { "@id": "https://thericetour.com/#organization" };
  }
  return organizationFallback;
}

export interface BlogSchemaProps {
  title: string;
  description?: string;
  canonicalUrl: string;
  image?: string;
  datePublished?: string;  // ISO 8601 preferred, human-readable string also accepted
  dateModified?: string;   // ISO 8601 preferred
  authorName?: string;
  authorUrl?: string;
  category?: { name: string; slug?: string; };
  tags?: any[];
  faqQuestions?: { question: string; answer: string; }[];
  /** Pass true when BaseLayout already renders Global Schema in <head> */
  globalSchemaExists?: boolean;
}

/**
 * Normalize any date string to ISO 8601 for schema use.
 * Handles:
 *   - '2026-06-06 11:55:16'  (SQLite format) → '2026-06-06T11:55:16+07:00'
 *   - '2026-06-06T11:55:16Z' (ISO) → kept as-is
 *   - '28 tháng 4, 2025'     (human) → fallback: today's ISO string
 */
function toIso(dateStr: string | undefined): string | undefined {
  if (!dateStr) return undefined;
  // Already ISO with T separator
  if (dateStr.includes('T') || dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
    try {
      const d = new Date(dateStr);
      if (!isNaN(d.getTime())) return d.toISOString().replace('Z', '+07:00');
    } catch {}
  }
  // SQLite space-separated: '2026-06-06 11:55:16'
  if (dateStr.match(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}/)) {
    try {
      const d = new Date(dateStr.replace(' ', 'T'));
      if (!isNaN(d.getTime())) return d.toISOString().replace('Z', '+07:00');
    } catch {}
  }
  // Human-readable (e.g. '28 tháng 4, 2025') — cannot reliably parse, skip
  return undefined;
}

export function generateBlogSchema(props: BlogSchemaProps) {
  const { title, description, canonicalUrl, image, datePublished, dateModified, authorName, authorUrl, category, tags, faqQuestions, globalSchemaExists = true } = props;

  // ── Fix #1: Normalize dates to ISO 8601 ──────────────────────────────────
  const isoPublished = toIso(datePublished);
  const isoModified = toIso(dateModified) || isoPublished;

  // ── Fix #3: Author object with worksFor for EEAT ─────────────────────────
  let authorObj: any;
  if (authorName && (authorName.toLowerCase() === 'admin' || authorName.toLowerCase() === 'fit tour' || authorName.toLowerCase() === 'huynh hieu travel')) {
    authorObj = {
      "@type": "Organization",
      "@id": "https://thericetour.com/#organization",
      "name": "FIT TOUR",
      ...(authorUrl && { "url": authorUrl })
    };
  } else {
    authorObj = {
      "@type": "Person",
      "name": authorName || "FIT TOUR",
      ...(authorUrl && { "url": authorUrl }),
      "worksFor": { "@id": "https://thericetour.com/#organization" }
    };
  }

  // Keywords formatting
  const keywordArray = [];
  if (category && category.name) keywordArray.push(category.name);
  if (tags && tags.length > 0) {
    keywordArray.push(...tags.map(t => t.name));
  }
  const keywordsStr = keywordArray.length > 0 ? keywordArray.join(", ") : undefined;

  // ── Fix #2: Upgrade image to ImageObject for Rich Results ────────────────
  const imageObj = image
    ? [{
        "@type": "ImageObject",
        "url": image,
        "contentUrl": image
      }]
    : undefined;

  // 1. BlogPosting Schema
  const blogPosting = {
    "@type": "BlogPosting",
    "@id": `${canonicalUrl}#article`,
    "mainEntityOfPage": canonicalUrl,
    "url": canonicalUrl,
    "headline": title,
    "description": description || title,
    "inLanguage": "vi-VN",
    "image": imageObj,
    "datePublished": isoPublished,
    "dateModified": isoModified,
    "author": authorObj,
    "publisher": getPublisherNode(globalSchemaExists),
    "keywords": keywordsStr
  };

  // 2. BreadcrumbList Schema
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Trang chủ",
      "item": "https://thericetour.com"
    }
  ];

  if (category && category.name) {
    // We assume categories might be at /chuyen-muc/slug or /slug depending on routing. 
    // Usually they are absolute so we format them.
    const catUrl = category.slug ? `https://thericetour.com/${category.slug}` : undefined;
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": category.name,
      ...(catUrl && { "item": catUrl })
    });
    
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 3,
      "name": title,
      "item": canonicalUrl
    });
  } else {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": title,
      "item": canonicalUrl
    });
  }

  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    "itemListElement": breadcrumbItems
  };

  // 3. Assemble Graph — Organization included defensively if Global Schema might be absent
  const graphNodes: any[] = [ getPublisherNode(globalSchemaExists), blogPosting, breadcrumbList ];

  // 4. FAQPage Override (if faq questions exist)
  if (faqQuestions && faqQuestions.length > 0) {
    const faqSchema = {
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      "mainEntity": faqQuestions.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    };
    graphNodes.push(faqSchema);
  }

  // Final structured graph
  const finalGraph = {
    "@context": "https://schema.org",
    "@graph": graphNodes
  };

  return cleanSchema(finalGraph);
}
