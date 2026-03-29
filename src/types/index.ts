// Theme types
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// ─── Shared base ────────────────────────────────────────────────────────────
// Fields that both coding and design projects always have in common.
// By putting them here we avoid repeating ourselves in the two specific types.
export interface BaseProject {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  imageFit?: 'cover' | 'contain';
  tags: string[]; // tools / tech used
  modalImages?: string[]; // optional gallery in the modal
}

// ─── Coding project ──────────────────────────────────────────────────────────
// Extends the base with dev-specific fields.
// category is locked to 'coding' — TypeScript will enforce this.
export interface CodingProject extends BaseProject {
  category: 'coding';
  shortDescription: string;
  fullDescription: string;
  features?: string[];
  github?: string;
  demo?: string;
  report?: string;
}

// ─── Design project ──────────────────────────────────────────────────────────
// Extends the base with design-case-study fields.
// No github/demo/report here — they don't belong in a design project.
export interface DesignProject extends BaseProject {
  category: 'design';
  shortDescription: string; // shown on the card
  designIntro: string; // opening paragraph in the modal
  designGoals: string[]; // bullet list of goals
  designProcess: string; // how you approached the work
  designReflection: string; // what you learned / would do differently
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
