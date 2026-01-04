/**
 * Theme Type Definitions
 * Defines the structure for custom themes
 */

import type { ThemeOptions, PaletteMode } from '@mui/material';

// =============================================================================
// COLOR DEFINITIONS
// =============================================================================

export interface ThemeColorSet {
  main: string;
  light: string;
  dark: string;
  muted?: string;
}

export interface ThemeColors {
  // Primary accent color
  primary: ThemeColorSet;
  // Secondary accent color
  secondary: ThemeColorSet;
  // Tertiary accent (optional)
  tertiary?: ThemeColorSet;
  // Neutral grays
  neutral: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
    950: string;
  };
  // Semantic colors
  success: string;
  warning: string;
  error: string;
  info: string;
  // Backgrounds
  background: {
    dark: string;
    darkElevated: string;
    darkSurface: string;
    light: string;
    lightElevated: string;
    lightSurface: string;
  };
}

// =============================================================================
// GLASS EFFECTS
// =============================================================================

export interface ThemeGlassEffects {
  blur: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  background: {
    subtle: string;
    light: string;
    medium: string;
    strong: string;
  };
  border: {
    subtle: string;
    light: string;
    medium: string;
  };
  tinted: (color: string, opacity?: number) => string;
}

// =============================================================================
// GLOW EFFECTS
// =============================================================================

export interface ThemeGlowLevel {
  subtle: string;
  medium: string;
  strong: string;
  intense: string;
}

export interface ThemeGlowEffects {
  primary: ThemeGlowLevel;
  secondary: ThemeGlowLevel;
  neutral: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

// =============================================================================
// ORB CONFIGURATION (Background effects)
// =============================================================================

export interface OrbPreset {
  color: 'primary' | 'secondary' | 'tertiary';
  position: { top?: string; right?: string; bottom?: string; left?: string };
  size: number;
  opacity: number;
  blur: number;
  animationDuration: number;
  animationDelay?: number;
}

// =============================================================================
// MAIN THEME DEFINITION
// =============================================================================

export interface SketchThemeDefinition {
  // Unique identifier
  id: string;
  // Display name
  name: string;
  // Description
  description: string;
  // Theme category
  category: 'glass' | 'solid' | 'gradient' | 'minimal';
  
  // Colors
  colors: ThemeColors;
  
  // Glass effects (for glass category themes)
  glass?: ThemeGlassEffects;
  
  // Glow effects
  glow: ThemeGlowEffects;
  
  // Typography
  typography: {
    fontFamily: {
      primary: string;
      display: string;
      mono: string;
    };
    letterSpacing: {
      tight: string;
      normal: string;
      wide: string;
      wider: string;
    };
  };
  
  // Spacing/Shape
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  
  // Animation timing
  animations: {
    fast: string;
    normal: string;
    slow: string;
    easing: string;
  };
  
  // Background orb presets
  orbPresets: {
    default: OrbPreset[];
    minimal: OrbPreset[];
    vibrant: OrbPreset[];
  };
  
  // Generate MUI ThemeOptions for a given mode
  getMuiTheme: (mode: PaletteMode) => ThemeOptions;
}

// =============================================================================
// THEME METADATA (for UI)
// =============================================================================

export interface ThemeMetadata {
  id: string;
  name: string;
  description: string;
  category: SketchThemeDefinition['category'];
  previewColors: [string, string, string]; // Primary, Secondary, Background
}

