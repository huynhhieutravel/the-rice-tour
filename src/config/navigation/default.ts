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
    id: 'tailor-made',
    label: 'Tailor-Made Trip',
    href: '/tailor-made',
    featured: true
  },
  {
    id: 'destinations',
    label: 'Destinations',
    href: '/#destinations',
    megaMenuType: 'links',
    megaMenuColumns: [
      [
        {
          title: 'Top Vietnam Regions',
          links: [
            { label: 'Hanoi Capital', href: '/tours?country=mien-bac' },
            { label: 'Ha Long & Lan Ha Bays', href: '/tours?country=mien-bac' },
            { label: 'Sapa & Tonkinese Alps', href: '/tours?country=mien-bac' },
            { label: 'Hoi An Ancient Town', href: '/tours?country=mien-trung' },
            { label: 'Mekong Delta Waterways', href: '/tours?country=mien-nam' }
          ]
        }
      ]
    ]
  },
  {
    id: 'about',
    label: 'About Us',
    href: '/about-us'
  },
  {
    id: 'blog',
    label: 'Travel Guides',
    href: '/blog',
    megaMenuType: 'links',
    megaMenuColumns: [
      [
        {
          title: 'Travel Essentials',
          links: [
            { label: 'Vietnam Visa Guide 2026', href: '/blog/vietnam-visa-guide-2026' },
            { label: 'Best Time to Visit Vietnam', href: '/blog/best-time-to-visit-vietnam' },
            { label: 'Hanoi Culinary Food Guide', href: '/blog' },
            { label: 'All Travel Articles →', href: '/blog', isHighlight: true }
          ]
        }
      ]
    ]
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact'
  }
];
