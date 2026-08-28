/**
 * TypeScript interfaces cho các Tracking Events
 * Chuẩn hóa theo GA4 recommended events
 */
export interface TrackEvent {
  event: string;
  [key: string]: unknown;
}

/**
 * Danh sách tên Event chuẩn hóa cho toàn hệ thống FIT TOUR
 * Quy tắc: Dùng tên event chuẩn GA4 khi có thể (page_view, generate_lead, scroll)
 */
export const EVENTS = {
  PAGE_VIEW: 'page_view',
  VIEW_ITEM: 'view_item',
  GENERATE_LEAD: 'generate_lead',
  SCROLL: 'scroll',
  CLICK_ZALO: 'click_zalo',
  CLICK_PHONE: 'click_phone',
  CLICK_EMAIL: 'click_email',
  CLICK_CONSULTATION: 'click_consultation',
  SEARCH: 'search',
  FILTER_TOUR: 'filter_tour',
  DOWNLOAD_ITINERARY: 'download_itinerary',
} as const;
