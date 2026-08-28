export interface ShortcodeDefinition {
  type?: string;
  description?: string;
  props: Record<string, string[]>;
}

export const SHORTCODE_SCHEMA: Record<string, ShortcodeDefinition> = {
  testimonial: {
    props: {
      category: ['general', 'trung-quoc', 'han-quoc', 'ladakh']
    }
  },
  cta: {
    props: {
      variant: ['premium', 'split', 'compact', 'banner']
    }
  },
  snippet: {
    props: {
      name: [] // name can be anything (dynamic from DB)
    }
  },
  'author-card': {
    props: {
      user: [] // slug of the author user
    }
  },
  youtube: {
    props: {
      id: []
    }
  },
  lich_khoi_hanh: {
    props: {
      product_code: []
    }
  },
  'emagazine-related': {
    props: {}
  },
  'blog-related': {
    props: {}
  },
  'ladakh-co-may-portrait': {
    props: {}
  },
  'ladakh-carousel-script': {
    props: {}
  },
  'kailash-pillar-guide': {
    type: 'static',
    description: 'Pillar guide for Kailash',
    props: {}
  },
  'pakistan-portrait-centerpiece': {
    type: 'static',
    description: 'Vogue editorial portrait centerpiece for Pakistan',
    props: {}
  },
  'pakistan-discovery-grid': {
    type: 'static',
    description: 'Discovery hero and 4 grid cards for Pakistan',
    props: {}
  },
  'pakistan-stories': {
    type: 'static',
    description: 'Blog articles grid for Pakistan',
    props: {}
  },
  'pakistan-cta': {
    type: 'static',
    description: 'CTA banner for Pakistan',
    props: {}
  },
  'corporate-form': {
    props: {}
  },
  'corporate-trips': {
    props: {
      location: []
    }
  },
  data_post: {
    props: {
      source: [],
      slug: [],
      limit: [],
      layout: [],
      title: [],
      exclude_current: []
    }
  },
  data_tour: {
    props: {
      country: [],
      tour_type: [],
      limit: [],
      layout: [],
      title: []
    }
  },
  data_country: {
    props: {
      region: [],
      limit: [],
      layout: [],
      title: []
    }
  }
};
