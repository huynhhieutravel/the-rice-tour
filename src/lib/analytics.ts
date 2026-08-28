/**
 * analytics.ts — NƠI DUY NHẤT trong toàn project được phép gọi dataLayer.push()
 *
 * Mọi file khác (Astro, React, v.v.) chỉ được import { track } từ đây.
 * Tự động bổ sung context: page_path, page_title, language, content_type, screen_width.
 *
 * Kiến trúc:
 *   Website (Astro/React) → track() → dataLayer.push() → GTM → GA4 / Ads / Pixel / Clarity
 */
import type { TrackEvent } from '../tracking/events';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/**
 * Nội bộ: content_type mặc định cho trang hiện tại
 * Được set bởi GtmEventTracker khi mount
 */
let _defaultContentType = 'general';

/**
 * Set content_type mặc định cho trang hiện tại
 * Gọi bởi GtmEventTracker.astro khi trang load
 */
export function setContentType(type: string) {
  _defaultContentType = type;
}

/**
 * Gửi event tracking lên Google Tag Manager dataLayer
 *
 * @example
 * track({ event: 'click_zalo' });
 *
 * // Tự động trở thành:
 * // {
 * //   event: 'click_zalo',
 * //   page_path: '/tour-incentive-travel-doanh-nghiep/',
 * //   page_title: 'Tour Incentive Travel...',
 * //   language: 'vi',
 * //   content_type: 'corporate',
 * //   screen_width: 1440
 * // }
 */
export function track(payload: TrackEvent) {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  const context: Record<string, unknown> = {
    page_path: window.location.pathname,
    page_title: document.title,
    language: document.documentElement.lang || 'vi',
    content_type: _defaultContentType,
    screen_width: window.innerWidth,
  };

  window.dataLayer.push({
    ...context,
    ...payload, // payload overrides context
  });
}
