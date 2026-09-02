// src/lib/imageOptimization.ts

const isResizingEnabled = import.meta.env.PUBLIC_ENABLE_IMAGE_RESIZING === 'true';
const CDN_BASE = import.meta.env.PUBLIC_CDN_BASE || 'https://media.thericetour.com';
const VERSION = import.meta.env.PUBLIC_IMAGE_VERSION || 'v1';

const ALLOWED_WIDTHS = [400, 800, 1200, 1600, 1920, 2400];
const INTERNAL_DOMAINS = ['media.thericetour.com', 'thericetour.com', 'localhost', '127.0.0.1'];

const R2_OLD_HOSTNAME = 'pub-fe90037727604a2586cc601e6a3c6575.r2.dev';

export const DEFAULT_BRAND_FALLBACK_IMAGE = 'https://media.thericetour.com/uploads/logo-the-rice.webp';
export const DEFAULT_TRAVEL_FALLBACK_IMAGE = 'https://media.thericetour.com/uploads/girls-taking-selfie-waving-on-rowing-boat-mekong-canal.webp';

/**
 * Check if an image URL is tainted with legacy/competitor agency watermarks or branding
 */
export function isTaintedImageUrl(url?: string | null): boolean {
  if (!url) return false;
  const lower = url.toLowerCase();
  return (
    lower.includes('nucuoimekong') ||
    lower.includes('nu-cuoi-me-kong') ||
    lower.includes('ncmk') ||
    lower.includes('mekong-smile') ||
    lower.includes('mekongsmile') ||
    lower.includes('doi-tac')
  );
}

/**
 * Map R2 dev URL → media.thericetour.com (safe, URL-parser based, not string replace)
 * Use this when you need the original image on the new domain without resizing (e.g. og:image)
 */
export function getCanonicalMediaUrl(input: string, fallbackUrl?: string): string {
  if (!input) return fallbackUrl || DEFAULT_TRAVEL_FALLBACK_IMAGE;
  
  if (isTaintedImageUrl(input)) {
    return fallbackUrl || DEFAULT_TRAVEL_FALLBACK_IMAGE;
  }
  
  if (!input.startsWith('http://') && !input.startsWith('https://')) {
    return input;
  }

  try {
    const url = new URL(input);
    if (url.hostname === R2_OLD_HOSTNAME) {
      // Use CDN_BASE hostname instead of hardcoding MEDIA_DOMAIN
      const cdnUrl = new URL(CDN_BASE);
      url.hostname = cdnUrl.hostname;
    }
    
    // Strip WordPress thumbnail suffixes (e.g. -768x432.jpg -> .jpg)
    // because the R2 bucket only contains original images.
    let finalUrlStr = url.toString();
    finalUrlStr = finalUrlStr.replace(/(-\d+x\d+)(\.[a-z]+)(\?.*)?$/i, '$2$3');
    
    return finalUrlStr;
  } catch {
    return input.replace(/(-\d+x\d+)(\.[a-z]+)(\?.*)?$/i, '$2$3');
  }
}

function getClosestWidth(width: number, allowedWidths: number[]): number {
  return allowedWidths.reduce((prev, curr) => {
    const prevDiff = Math.abs(prev - width);
    const currDiff = Math.abs(curr - width);
    if (currDiff === prevDiff) return curr > prev ? curr : prev;
    return currDiff < prevDiff ? curr : prev;
  });
}

function isInternalDomain(urlStr: string): boolean {
  if (!urlStr.startsWith('http')) return true;
  try {
    const url = new URL(urlStr);
    return INTERNAL_DOMAINS.some(d =>
      url.hostname === d || url.hostname.endsWith(`.${d}`)
    );
  } catch {
    return false;
  }
}

/**
 * Generates a Cloudflare Image Resizing URL with fallback and cache-busting.
 */
export function getOptimizedImageUrl(originalUrl: string, width: number, quality: number = 85): string {
  if (!originalUrl) return '';

  const baseUrl = getCanonicalMediaUrl(originalUrl);

  if (!isResizingEnabled || !isInternalDomain(baseUrl)) {
    return baseUrl;
  }

  const finalWidth = getClosestWidth(width, ALLOWED_WIDTHS);
  const finalQuality = Math.min(100, Math.max(30, quality));

  try {
    if (baseUrl.includes('/cdn-cgi/image')) return baseUrl;

    let path = baseUrl;

    if (baseUrl.startsWith('http')) {
      const urlObj = new URL(baseUrl);
      path = urlObj.pathname + urlObj.search;
    }

    const hasQuery = path.includes('?') ? '&' : '?';

    return `${CDN_BASE}/cdn-cgi/image/width=${finalWidth},quality=${finalQuality},fit=scale-down,format=auto${path}${hasQuery}v=${VERSION}`;
  } catch {
    return baseUrl;
  }
}

/**
 * Generates a responsive srcset string for an image using Cloudflare Resizing.
 */
export function generateSrcSet(originalUrl: string, widths: number[] = [400, 800, 1200, 1600, 1920], quality: number = 85): string {
  if (!originalUrl || widths.length === 0 || !isResizingEnabled) return '';
  
  return widths
    .map(w => `${getOptimizedImageUrl(originalUrl, w, quality)} ${w}w`)
    .join(', ');
}

/**
 * Placeholder generator for LQIP (Low Quality Image Placeholder).
 */
export function getLqip(originalUrl: string): string {
  return getOptimizedImageUrl(originalUrl, 10, 20);
}
