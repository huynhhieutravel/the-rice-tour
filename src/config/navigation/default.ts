// src/config/navigation/default.ts

export type MegaMenuSection = {
  title?: string;
  links: { label: string; href: string; isHighlight?: boolean }[];
};

export type MegaMenuCard = {
  title: string;
  image: string;
  href: string;
};

export type MegaMenuLogo = {
  name: string;
  logo: string;
  description: string;
  href: string;
};

export type NavItem = {
  id: string;
  label: string;
  href?: string;
  children?: NavItem[];
  megaMenuType?: 'none' | 'links' | 'cards' | 'logos' | 'guu' | 'doanh-nghiep';
  megaMenuColumns?: MegaMenuSection[][];
  megaMenuCards?: MegaMenuCard[];
  megaMenuLogos?: MegaMenuLogo[];
  megaMenuStories?: MegaMenuCard[];
  featured?: boolean;
  external?: boolean;
  mobileOnly?: boolean;
};

export const defaultNavItems: NavItem[] = [
  {
    id: 'tours',
    label: 'Tours',
    href: '/tours'
  },
  {
    id: 'destinations',
    label: 'Destinations',
    href: '/destinations',
    megaMenuType: 'links',
    megaMenuColumns: [
      [
        {
          title: 'Top Vietnam Regions',
          links: [
            { label: 'South Vietnam (Saigon & Mekong)', href: '/destination/south-vietnam' },
            { label: 'Mekong Delta Waterways', href: '/destination/mekong-delta' },
            { label: 'All Destinations Guide →', href: '/destinations', isHighlight: true }
          ]
        }
      ]
    ]
  },
  {
    id: 'tailor-made',
    label: 'Tailor-Made Trip',
    href: '/tailor-made',
    featured: true
  },
  {
    id: 'about',
    label: 'About Us',
    href: '/about-us'
  },
  {
    id: 'blog',
    label: 'Travel Guides',
    href: '/blog'
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact'
  }
];
