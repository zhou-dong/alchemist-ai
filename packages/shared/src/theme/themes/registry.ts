/**
 * Theme Registry
 * Central registry for all available themes
 */

import type { SketchThemeDefinition, ThemeMetadata } from './types';
import { neoGlassTheme } from './neo-glass/neoGlassTheme';
import { cyberTheme } from './cyber';
import { minimalTheme } from './minimal';
import { oceanTheme } from './ocean';
import { cosmicGradientTheme } from './cosmic-gradient';

// =============================================================================
// THEME REGISTRY
// =============================================================================

export const themeRegistry: Record<string, SketchThemeDefinition> = {
  'neo-glass': neoGlassTheme,
  'cyber': cyberTheme,
  'minimal': minimalTheme,
  'ocean': oceanTheme,
  'cosmic-gradient': cosmicGradientTheme,
};

// =============================================================================
// AVAILABLE THEME IDS
// =============================================================================

export type ThemeId = keyof typeof themeRegistry;

export const availableThemeIds = Object.keys(themeRegistry) as ThemeId[];

// =============================================================================
// THEME METADATA (for UI pickers)
// =============================================================================

export const getThemeMetadata = (): ThemeMetadata[] => {
  return Object.values(themeRegistry).map((theme) => ({
    id: theme.id,
    name: theme.name,
    description: theme.description,
    category: theme.category,
    previewColors: [
      theme.colors.primary.main,
      theme.colors.secondary.main,
      theme.colors.background.dark,
    ] as [string, string, string],
  }));
};

// =============================================================================
// THEME GETTERS
// =============================================================================

export const getTheme = (themeId: string): SketchThemeDefinition => {
  const theme = themeRegistry[themeId];
  if (!theme) {
    console.warn(`Theme "${themeId}" not found, falling back to neo-glass`);
    return themeRegistry['neo-glass'];
  }
  return theme;
};

export const getThemeOrDefault = (themeId: string | null | undefined): SketchThemeDefinition => {
  if (!themeId) return themeRegistry['neo-glass'];
  return getTheme(themeId);
};

// =============================================================================
// DEFAULT THEME
// =============================================================================

export const DEFAULT_THEME_ID: ThemeId = 'neo-glass';

