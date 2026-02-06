import { createContext } from 'react';
import type { ThemeContextType } from '../types';

/**
 * ThemeContext - Provides theme state to all components
 */
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
