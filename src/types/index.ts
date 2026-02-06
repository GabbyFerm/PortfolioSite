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
  imageFit?: 'cover' | 'contain'; // For mobile app screenshots
  tags: string[];
  features?: string[];
  github?: string;
  demo?: string;
  category: 'coding' | 'design';
  modalImages?: string[]; // For projects with multiple screenshots (like Dojo)
}

// Logo types
export interface Logo {
  id: string;
  name: string;
  image: string;
  alt: string;
}
