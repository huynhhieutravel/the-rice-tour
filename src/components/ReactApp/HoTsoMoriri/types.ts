export interface Chapter {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  abstract: string;
  paragraphs: string[];
  quote?: string;
  locationName: string;
  imgUrl: string;
  imgCaption: string;
  imgUrl2?: string;
  imgCaption2?: string;
  imgUrl3?: string;
  imgCaption3?: string;
}

export interface Photo {
  id: string;
  url: string;
  caption: string;
  category: 'natural' | 'people' | 'spiritual' | 'moments';
  location: string;
  date: string;
}

export interface BackpackItem {
  id: string;
  name: string;
  vietnameseName: string;
  description: string;
  qty: string;
  category: 'essential' | 'health' | 'sentimental';
  importance: 'high' | 'medium' | 'low';
}

export interface LadakhLocation {
  id: string;
  name: string;
  elevation: string;
  temperature: string;
  coordinate: { x: number; y: number }; // Percentage position on the svg map
  diaryTitle: string;
  diaryEntry: string;
  soundEffectName: string;
}

export interface GuestbookMessage {
  id: string;
  name: string;
  message: string;
  createdAt: string;
  location?: string;
}
