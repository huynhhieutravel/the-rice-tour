/**
 * Xác định content_type dựa trên URL pathname
 * Dùng làm fallback khi không truyền contentType qua props
 */
export function inferContentType(pathname?: string): string {
  const path = pathname || (typeof window !== 'undefined' ? window.location.pathname : '/');

  // Corporate pages
  if (
    path.includes('-doanh-nghiep') ||
    path.includes('/corporate') ||
    path.includes('/company-trip') ||
    path.includes('/tour-doanh-nghiep') ||
    path.includes('/to-chuc-su-kien')
  ) return 'corporate';

  // Tour detail pages
  if (path.startsWith('/tour/')) return 'tour';

  // Blog / News
  if (path.startsWith('/blog/') || path.startsWith('/tin-tuc/')) return 'blog';

  // Country / Destination
  if (path.startsWith('/country/')) return 'destination';

  // Visa
  if (path.startsWith('/visa/')) return 'visa';

  return 'general';
}
