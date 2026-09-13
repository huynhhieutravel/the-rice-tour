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

// Fallback Organization Schema (used for entity resolution and publisher metadata)
// This ensures the @graph is always self-contained with rich Local SEO & GEO attributes.
export const organizationFallback = {
  "@type": "TravelAgency",
  "@id": "https://thericetour.com/#organization",
  "name": "The Rice Tour",
  "alternateName": "The Rice Tour Vietnam",
  "legalName": "The Rice Tour - Du Lịch Có Guu",
  "url": "https://thericetour.com",
  "logo": {
    "@type": "ImageObject",
    "url": "https://media.thericetour.com/uploads/logo-the-rice.webp",
    "width": 512,
    "height": 512
  },
  "image": "https://media.thericetour.com/uploads/logo-the-rice.webp",
  "description": "Boutique inbound travel operator in Ho Chi Minh City, Vietnam. Specializing in private cooking classes, Cu Chi Tunnels historical tours, Mekong Delta cultural excursions, and bespoke Vietnam itineraries.",
  "telephone": "+84962333621",
  "email": "hello@thericetour.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "195 De Tham Street, Pham Ngu Lao Ward, District 1",
    "addressLocality": "Ho Chi Minh City",
    "addressRegion": "Ho Chi Minh",
    "postalCode": "700000",
    "addressCountry": "VN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.7675,
    "longitude": 106.6931
  },
  "hasMap": "https://maps.app.goo.gl/f147oCPxWWumzxpW6",
  "areaServed": [
    { "@type": "Country", "name": "Vietnam" },
    { "@type": "City", "name": "Ho Chi Minh City" },
    { "@type": "AdministrativeArea", "name": "Mekong Delta" }
  ],
  "sameAs": [
    "https://www.facebook.com/thericetour",
    "https://www.instagram.com/thericetour"
  ]
};

// Keep backward compat alias
export const organizationSchema = organizationFallback;

/**
 * Defensive publisher node:
 * Returns the canonical @id reference for publisher linking.
 */
export function getPublisherNode(globalSchemaExists: boolean) {
  return { "@id": "https://thericetour.com/#organization" };
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
  language?: string;
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
  const { title, description, canonicalUrl, image, datePublished, dateModified, authorName, authorUrl, category, tags, faqQuestions, language, globalSchemaExists = true } = props;

  // ── Fix #1: Normalize dates to ISO 8601 ──────────────────────────────────
  const isoPublished = toIso(datePublished);
  const isoModified = toIso(dateModified) || isoPublished;

  // ── Dynamic Language Detection (vi-VN vs en-US) ─────────────────────────
  const hasVietnameseDiacritics = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(title);
  const isVietnameseSlug = /(-co-|-di-|-cho-|-gan-|-quanh-|-ve-|-nam-bo|-sai-gon|-tphcm|kinh-nghiem|am-thuc|lich-trinh|bai-gui-xe|doi-ngoai-te|canh-bao)/i.test(canonicalUrl);
  const isEnglish = (language === 'en' || language === 'en-US' || canonicalUrl.includes('/en/')) || 
    (!hasVietnameseDiacritics && !isVietnameseSlug);
  const langCode = isEnglish ? "en-US" : "vi-VN";

  // ── Fix #3: Author object with worksFor for EEAT ─────────────────────────
  let authorObj: any;
  const fallbackAuthorName = isEnglish ? "The Rice Tour Editorial Team" : "The Rice Tour";
  if (authorName && (authorName.toLowerCase() === 'admin' || authorName.toLowerCase() === 'fit tour' || authorName.toLowerCase() === 'huynh hieu travel' || authorName.toLowerCase() === 'the rice tour')) {
    authorObj = {
      "@type": "Organization",
      "@id": "https://thericetour.com/#organization",
      "name": "The Rice Tour",
      ...(authorUrl && { "url": authorUrl })
    };
  } else {
    authorObj = {
      "@type": "Person",
      "name": authorName || fallbackAuthorName,
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
    "inLanguage": langCode,
    "image": imageObj,
    "datePublished": isoPublished,
    "dateModified": isoModified,
    "author": authorObj,
    "publisher": { "@id": "https://thericetour.com/#organization" },
    "keywords": keywordsStr
  };

  // 2. BreadcrumbList Schema
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": isEnglish ? "Home" : "Trang chủ",
      "item": "https://thericetour.com"
    }
  ];

  if (category && category.name) {
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

  // 3. WebSite Node for Graph Completion
  const websiteNode = {
    "@type": "WebSite",
    "@id": "https://thericetour.com/#website",
    "url": "https://thericetour.com",
    "name": "The Rice Tour",
    "description": "Authentic Inbound Vietnam Travel Experiences & Guided Cultural Tours",
    "publisher": { "@id": "https://thericetour.com/#organization" },
    "inLanguage": ["en-US", "vi-VN"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://thericetour.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // 4. Assemble Graph — Fully self-contained entity resolution
  const graphNodes: any[] = [ organizationFallback, websiteNode, blogPosting, breadcrumbList ];

  // 5. FAQPage Override (if faq questions exist)
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
