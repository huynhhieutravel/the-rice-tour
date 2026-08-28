// src/types/cms.ts

export interface FeaturedImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Author {
  name: string;
  avatar: string;
}

export interface SEOData {
  metaTitle: string;
  metaDescription: string;
  focusKeyword: string;
}

export interface BlockMark {
  type: 'bold' | 'italic' | 'strike' | 'link';
  attrs?: Record<string, any>;
}

export interface BaseBlockNode {
  type: string;
  attrs?: Record<string, any>;
  content?: BlockNode[];
  marks?: BlockMark[];
  text?: string;
}

export interface TextBlock extends BaseBlockNode {
  type: 'text';
  text: string;
}

export interface ParagraphBlock extends BaseBlockNode {
  type: 'paragraph';
}

export interface HeadingBlock extends BaseBlockNode {
  type: 'heading';
  attrs: {
    level: 1 | 2 | 3 | 4 | 5 | 6;
  };
}

export interface ImageBlock extends BaseBlockNode {
  type: 'image';
  attrs: {
    src: string;
    alt?: string;
    title?: string;
  };
}

export interface BlockquoteBlock extends BaseBlockNode {
  type: 'blockquote';
}

export interface HorizontalRuleBlock extends BaseBlockNode {
  type: 'horizontalRule';
}

export interface CustomTourGalleryBlock extends BaseBlockNode {
  type: 'customTourGallery';
  attrs: {
    images: string[];
  };
}

export interface CustomTourItineraryBlock extends BaseBlockNode {
  type: 'customTourItinerary';
  attrs: {
    days: Record<string, any>[];
  };
}

export type BlockNode = 
  | TextBlock 
  | ParagraphBlock 
  | HeadingBlock 
  | ImageBlock 
  | BlockquoteBlock 
  | HorizontalRuleBlock 
  | CustomTourGalleryBlock
  | CustomTourItineraryBlock
  | BaseBlockNode; // Fallback for unknown blocks

export interface BlogPost {
  id: string;
  slug: string; // Unique, immutable
  title: string;
  excerpt: string;
  version: number; // Schema Version

  featuredImage: FeaturedImage;
  author: Author;
  category: string;
  tags: string[];
  seo: SEOData;

  status: 'draft' | 'published' | 'archived';
  publishDate: string; // ISO 8601
  updatedAt: string;   // For SEO Freshness & Cache Invalidation
  readingTime: number; // Auto calculate (minutes)

  content: {
    type: 'doc';
    content: BlockNode[];
  };
}

export interface GlobalSettings {
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  social: Record<string, string>;
  company: {
    name: string;
    tax: string;
  };
  tracking: {
    ga: string;
    pixel: string;
  };
}
