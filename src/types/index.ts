// ─── Theme ────────────────────────────────────────────────────────────────────
export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// ─── Design Phase ─────────────────────────────────────────────────────────────
// One named section of design work — e.g. "Wireframes" or "Final UI".
// Each phase has a title, a short description paragraph, and its images.
export interface DesignPhase {
  title: string;
  description: string;
  images: string[]; // auto-populated from folder glob in projectsData.ts
}

// ─── Unified Project ──────────────────────────────────────────────────────────
// One type covers all projects — coding, design, or both.
// Design-specific fields are optional so pure coding projects work fine.
export interface UnifiedProject {
  id: string;
  title: string;
  cardImage: string; // thumbnail shown on the portfolio card
  imageAlt: string;
  shortDescription: string; // one-liner shown on the card
  about: string; // full description shown on the project page
  tags: string[]; // tech stack and tools
  features?: string[]; // key features or contributions
  github?: string;
  demo?: string;
  demoLabel?: string; // optional label for the demo link (e.g. "Live Demo" or "Play Store")
  report?: string;
  // Design-specific — only present on projects with design work
  designGoals?: string[];
  designPhases?: DesignPhase[];
  screenshots?: string[]; // live product screenshots
  designReflection?: string;
}

// ─── Logo ─────────────────────────────────────────────────────────────────────
export interface Logo {
  id: string;
  name: string;
  image: string;
  alt: string;
}
