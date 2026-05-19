export type ProgramType = 'O/L Residential Fast Track' | 'A/L Residential Fast Track';

export interface Program {
  key: string;
  title: ProgramType;
  summary: string;
  duration: string;
  highlights: string[];
}

export interface Testimonial {
  key: string;
  name: string;
  role: string;
  quote: string;
}

export interface GalleryItem {
  key: string;
  title: string;
  category: string;
  image: string;
}

