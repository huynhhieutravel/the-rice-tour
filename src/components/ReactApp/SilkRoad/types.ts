export interface LocationPoint {
  id: string;
  name: string;
  vietnameseName: string;
  coords: { x: number; y: number }; // Percentage coords on a relative 100x100 container map
  days: string;
  title: string;
  description: string;
  image: string;
  gallery: string[];
  keyHighlight: string;
  activities: string[];
  altitude: string;
}

export interface CuisineItem {
  id: string;
  name: string;
  vietnameseName: string;
  type: 'food' | 'beverage';
  image: string;
  description: string;
  ingredients: string[];
  tradition: string;
}

export interface HeritageItem {
  id: string;
  title: string;
  vietnameseTitle: string;
  location: string;
  period: string;
  description: string;
  architecture: string;
  image: string;
}

export interface NomadicAspect {
  id: string;
  title: string;
  vietnameseTitle: string;
  description: string;
  image: string;
  interactiveAction: string;
  highlightText: string;
}

export interface EditorialMemory {
  id: string;
  title: string;
  vietnameseTitle: string;
  location: string;
  clothingTip: string;
  poseTip: string;
  image: string;
  quote: string;
}

export interface TravelerCustomization {
  passengerName: string;
  startYear: string;
  travelStyle: 'rugged' | 'balanced' | 'luxury';
  durationDays: number;
}
