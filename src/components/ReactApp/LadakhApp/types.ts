export type ReadingTheme = 'glacial-ice' | 'cabin-glow' | 'midnight-spruce';

export interface AlaskaArticleSection {
  id: string;
  order: number;
  title: string;
  subtitle?: string;
  paragraphs: string[];
  keyInsight?: string;
  highlightText?: string;
  illustrativeFact?: {
    label: string;
    value: string;
    description: string;
  };
}

export interface GeographicHighlight {
  id: string;
  name: string;
  vietnameseName: string;
  coords: { x: number; y: number }; // Percentage coords on relative 100x100 map
  feature: string; // Glacier, Mountain, National Park, Bay, City
  altitude?: string;
  description: string;
  image: string;
  quote?: string;
  heritageStory?: string;
}

export interface SurvivalGearItem {
  id: string;
  name: string;
  vietnameseName: string;
  category: 'clothing' | 'equipment' | 'navigation' | 'emergency';
  necessity: 'critical' | 'recommended' | 'optional';
  description: string;
  iconName: string;
}

export interface HistoricalEvent {
  year: string;
  title: string;
  vietnameseTitle: string;
  description: string;
  economicValue?: string;
  funFact?: string;
}

export interface ArticleConfig {
  seriesTitle: string;
  heroSubtitle: string;
  heroChapter: string;
  heroQuote: string;
  sections: AlaskaArticleSection[];
  partNumber: number;
}
