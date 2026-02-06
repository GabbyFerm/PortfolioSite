// ============================================
// TYPE DEFINITIONS
// ============================================

/**
 * Theme type - defines the available themes
 */
export type Theme = 'light' | 'dark';

/**
 * Theme Context type - defines what the ThemeContext provides
 * This includes the current theme and a function to toggle it
 */
export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

/**
 * Project type - defines the structure of a portfolio project
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  details?: ProjectDetails;
}

/**
 * Detailed project information for modal display
 */
export interface ProjectDetails {
  subtitle: string;
  duration: string;
  overview: string;
  contributions: string[];
  technologies: string[];
  challenges: string;
  images: string[];
}
