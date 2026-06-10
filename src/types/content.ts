export type ProgramType =
  | 'Secondary Education Program'
  | 'O/L Residential Fast Track Program'
  | 'A/L Residential Fast Track Program'
  | '60-Day Residential Examination Preparation Program';

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

export interface CoreAdvantage {
  title: string;
  description: string;
}
