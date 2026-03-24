// Theme types
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Project types - Single source of truth
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
  tags: string[];
  features?: string[];
  github?: string;
  demo?: string;
  report?: string;
  category: 'coding' | 'design';
  modalImages?: string[];
}

// Logo types
export interface Logo {
  id: string;
  name: string;
  image: string;
  alt: string;
}
