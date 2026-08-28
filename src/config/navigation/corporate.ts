// src/config/navigation/corporate.ts
import type { NavItem } from './default';

export const corporateNavItems: NavItem[] = [
  { 
    id: 'corporate-home', 
    label: 'Tour doanh nghiệp', 
    href: '/tour-doanh-nghiep/'
  },
  { 
    id: 'corporate-services', 
    label: 'Dịch vụ', 
    href: '#',
    megaMenuType: 'cards',
    megaMenuCards: [
      { 
        title: 'Incentive Travel', 
        image: 'https://media.fittour.vn/uploads/2026/03/fit-tour-elite-operations-executive-program-briefing-bosch-nha-trang.webp', 
        href: '/tour-incentive-travel-doanh-nghiep/' 
      },
      { 
        title: 'Corporate Retreat', 
        image: 'https://media.fittour.vn/uploads/duoc-pham-nhat-nhat-team-building-15-nam-but-pha-cam-ranh.webp', 
        href: '/corporate-retreat/' 
      },
      { 
        title: 'Company Trip', 
        image: 'https://media.fittour.vn/uploads/team-building-hop-luc-vuon-xa-vuot-qua-thu-thach-cam-ranh.webp', 
        href: '/company-trip/' 
      },
      { 
        title: 'MICE & Events', 
        image: 'https://media.fittour.vn/uploads/gala-dinner-ky-niem-15-nam-duoc-pham-nhat-nhat.webp', 
        href: '/to-chuc-su-kien-cong-ty-cho-doanh-nghiep/' 
      }
    ]
  },
  { 
    id: 'corporate-venues', 
    label: 'Địa điểm tổ chức', 
    href: '/dia-diem-to-chuc/' 
  },
  { 
    id: 'corporate-journey', 
    label: 'Hành trình doanh nghiệp', 
    href: '/hanh-trinh-doanh-nghiep/' 
  },
  { 
    id: 'corporate-portfolio', 
    label: 'Portfolio', 
    href: '/portfolio/' 
  }
];
