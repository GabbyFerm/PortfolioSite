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

// ─── Print Design ─────────────────────────────────────────────────────────────
// One named section within a print project — e.g. "EU Edition" or "Merch".
// Flexible enough to handle CD booklets, branding packages, posters etc.
export interface PrintSection {
  title: string;
  description?: string; // optional — not every section needs explanatory text
  images: string[]; // auto-loaded from subfolder via glob
}

// One print project — appears as a card on the portfolio page
// and has its own dedicated page.
export interface PrintProject {
  id: string;
  title: string;
  cardImage: string; // thumbnail on the portfolio landing card
  imageAlt: string;
  shortDescription: string; // one-liner on the card
  intro: string; // opening paragraphs on the dedicated page
  sections: PrintSection[]; // flexible — 1 section or many
  year?: string; // e.g. "2010–2011"
}

// ─── Logo ─────────────────────────────────────────────────────────────────────
export interface Logo {
  id: string;
  name: string;
  image: string;
  alt: string;
}
