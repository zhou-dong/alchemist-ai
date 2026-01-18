/**
 * Neo-Glass Theme Definition
 * 
 * MUI theme definition for the Neo-Glass aesthetic.
 * Implements SketchThemeDefinition for the multi-theme system.
 * 
 * Uses design tokens from neoGlassTokens.ts
 */

import type { ThemeOptions, PaletteMode, Components } from '@mui/material';
import type { SketchThemeDefinition } from '../types';
import { 
  neoGlassColors, 
  glassEffects, 
  glowEffects, 
  typography as neoTypography,
  spacing as neoSpacing,
  animations as neoAnimations,
} from './neoGlassTokens';

// =============================================================================
// DERIVED VALUES (for theme compatibility)
// =============================================================================

const colors = {
  primary: neoGlassColors.teal,
  secondary: neoGlassColors.violet,
  tertiary: neoGlassColors.coral,
  neutral: neoGlassColors.neutral,
  success: neoGlassColors.success,
  warning: neoGlassColors.warning,
  error: neoGlassColors.error,
  info: neoGlassColors.info,
  background: neoGlassColors.background,
};

const glass = {
  blur: glassEffects.blur,
  background: glassEffects.dark,
  border: {
    subtle: glassEffects.border.dark.subtle,
    light: glassEffects.border.dark.light,
    medium: glassEffects.border.dark.medium,
  },
  tinted: (color: string, opacity: number = 0.08) => {
    const colorMap: Record<string, (op: number) => string> = {
      primary: glassEffects.tinted.teal,
      secondary: glassEffects.tinted.violet,
      tertiary: glassEffects.tinted.coral,
    };
    const fn = colorMap[color] || colorMap.primary;
    return fn(opacity);
  },
};

const glow = {
  primary: glowEffects.teal,
  secondary: glowEffects.violet,
  neutral: glowEffects.neutral,
};

// =============================================================================
// MUI COMPONENT OVERRIDES
// =============================================================================

const createComponents = (mode: PaletteMode): Components => {
  const isDark = mode === 'dark';
  
  // Apple-style glass: more transparent backgrounds with stronger blur
  const appleGlassBg = {
    subtle: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.4)',
    light: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(255, 255, 255, 0.5)',
    medium: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.6)',
    strong: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.7)',
  };
  
  const appleGlassBorder = {
    subtle: isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)',
    light: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
    medium: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)',
  };
  
  // Light blur for subtle frosted effect
  const appleBlur = 'blur(1px)';
  const appleBlurStrong = 'blur(3px)';

  // Mode-aware glow effects
  const buttonGlow = isDark ? glow.primary : {
    subtle: '0 2px 8px rgba(0, 0, 0, 0.08)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.12)',
    strong: '0 6px 20px rgba(0, 0, 0, 0.16)',
    intense: '0 8px 28px rgba(0, 0, 0, 0.2)',
  };

  const secondaryButtonGlow = isDark ? glow.secondary : {
    subtle: '0 2px 8px rgba(0, 0, 0, 0.08)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.12)',
    strong: '0 6px 20px rgba(0, 0, 0, 0.16)',
    intense: '0 8px 28px rgba(0, 0, 0, 0.2)',
  };

  // Mode-aware icon button styles
  const iconButtonBg = isDark 
    ? glassEffects.tinted.teal(0.08) 
    : 'rgba(0, 191, 165, 0.1)';
  const iconButtonHoverBg = isDark 
    ? glassEffects.tinted.teal(0.15) 
    : 'rgba(0, 191, 165, 0.18)';
  const iconButtonBorder = isDark 
    ? 'rgba(0, 191, 165, 0.3)' 
    : 'rgba(0, 191, 165, 0.4)';
  const iconButtonHoverBorder = isDark 
    ? 'rgba(0, 191, 165, 0.5)' 
    : 'rgba(0, 191, 165, 0.6)';

  return {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: neoSpacing.borderRadius.lg,
          fontWeight: 500,
          letterSpacing: neoTypography.letterSpacing.wide,
          transition: neoAnimations.transition.normal,
          textTransform: 'none',
        },
        contained: {
          boxShadow: buttonGlow.medium,
          '&:hover': {
            boxShadow: buttonGlow.strong,
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          background: isDark ? colors.primary.main : colors.primary.dark,
          color: '#FFFFFF',
          '&:hover': { 
            background: isDark ? colors.primary.dark : colors.primary.main,
          },
        },
        containedSecondary: {
          background: isDark ? colors.secondary.main : colors.secondary.dark,
          boxShadow: secondaryButtonGlow.medium,
          '&:hover': {
            background: isDark ? colors.secondary.dark : colors.secondary.main,
            boxShadow: secondaryButtonGlow.strong,
          },
        },
        outlined: {
          borderColor: isDark ? 'rgba(0, 191, 165, 0.4)' : 'rgba(0, 191, 165, 0.5)',
          color: isDark ? colors.primary.main : colors.primary.dark,
          backdropFilter: glassEffects.blur.sm,
          background: isDark ? 'transparent' : 'rgba(255, 255, 255, 0.6)',
          '&:hover': {
            background: isDark ? glassEffects.tinted.teal(0.1) : 'rgba(0, 191, 165, 0.08)',
            borderColor: colors.primary.main,
            boxShadow: isDark ? glowEffects.teal.subtle : '0 2px 8px rgba(0, 191, 165, 0.15)',
          },
        },
        text: {
          color: isDark ? colors.primary.main : colors.primary.dark,
          '&:hover': {
            background: isDark ? glassEffects.tinted.teal(0.08) : 'rgba(0, 191, 165, 0.08)',
          },
        },
        sizeLarge: {
          padding: '14px 36px',
          fontSize: '1rem',
          borderRadius: neoSpacing.borderRadius.full,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: neoAnimations.transition.normal,
          '&:hover': { transform: 'scale(1.05)' },
        },
        colorPrimary: {
          background: iconButtonBg,
          backdropFilter: glassEffects.blur.md,
          border: `1px solid ${iconButtonBorder}`,
          color: isDark ? colors.primary.main : colors.primary.dark,
          '&:hover': {
            background: iconButtonHoverBg,
            borderColor: iconButtonHoverBorder,
            boxShadow: isDark ? glowEffects.teal.subtle : '0 2px 12px rgba(0, 191, 165, 0.2)',
          },
        },
        colorSecondary: {
          background: isDark ? glassEffects.tinted.violet(0.08) : 'rgba(139, 92, 246, 0.1)',
          backdropFilter: glassEffects.blur.md,
          border: `1px solid ${isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.4)'}`,
          color: isDark ? colors.secondary.main : colors.secondary.dark,
          '&:hover': {
            background: isDark ? glassEffects.tinted.violet(0.15) : 'rgba(139, 92, 246, 0.18)',
            borderColor: isDark ? 'rgba(139, 92, 246, 0.5)' : 'rgba(139, 92, 246, 0.6)',
          },
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          // background: appleGlassBg.medium,
          background: 'transparent',
          backdropFilter: appleBlur,
          WebkitBackdropFilter: appleBlur, // Safari support
          border: `1px solid ${appleGlassBorder.light}`,
          borderRadius: neoSpacing.borderRadius.lg,
          transition: neoAnimations.transition.normal,
          boxShadow: isDark 
            ? '0 4px 24px rgba(0, 0, 0, 0.2)' 
            : '0 4px 24px rgba(0, 0, 0, 0.08)',
        },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { backgroundImage: 'none' },
        elevation1: {
          background: appleGlassBg.light,
          backdropFilter: appleBlur,
          WebkitBackdropFilter: appleBlur,
          border: `1px solid ${appleGlassBorder.subtle}`,
        },
        elevation2: {
          background: appleGlassBg.medium,
          backdropFilter: appleBlur,
          WebkitBackdropFilter: appleBlur,
          border: `1px solid ${appleGlassBorder.light}`,
        },
        elevation3: {
          background: appleGlassBg.strong,
          backdropFilter: appleBlurStrong,
          WebkitBackdropFilter: appleBlurStrong,
          border: `1px solid ${appleGlassBorder.medium}`,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: isDark 
            ? 'rgba(24, 24, 27, 0.85)' 
            : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: appleBlur,
          WebkitBackdropFilter: appleBlur,
          borderRadius: neoSpacing.borderRadius.md,
          border: `1px solid ${appleGlassBorder.subtle}`,
          color: isDark ? colors.neutral[100] : colors.neutral[900],
          boxShadow: isDark 
            ? '0 4px 16px rgba(0, 0, 0, 0.3)' 
            : '0 4px 16px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: neoSpacing.borderRadius.full, fontWeight: 500 },
        filledPrimary: {
          background: glassEffects.tinted.teal(0.15),
          color: colors.primary.main,
        },
      },
    },
  };
};

// =============================================================================
// THEME DEFINITION
// =============================================================================

export const neoGlassTheme: SketchThemeDefinition = {
  id: 'neo-glass',
  name: 'Neo Glass',
  description: 'Modern glassmorphism with teal and violet accents',
  category: 'glass',
  
  colors,
  glass,
  glow,
  
  typography: {
    fontFamily: neoTypography.fontFamily,
    letterSpacing: neoTypography.letterSpacing,
  },
  
  borderRadius: neoSpacing.borderRadius,
  
  animations: {
    fast: neoAnimations.duration.fast,
    normal: neoAnimations.duration.normal,
    slow: neoAnimations.duration.slow,
    easing: neoAnimations.easing.smooth,
  },
  
  orbPresets: {
    default: [
      { color: 'primary', position: { top: '10%', right: '5%' }, size: 400, opacity: 0.15, blur: 60, animationDuration: 8 },
      { color: 'secondary', position: { bottom: '20%', left: '10%' }, size: 300, opacity: 0.1, blur: 50, animationDuration: 10, animationDelay: 3 },
    ],
    minimal: [
      { color: 'primary', position: { top: '10%', right: '5%' }, size: 350, opacity: 0.1, blur: 60, animationDuration: 10 },
    ],
    vibrant: [
      { color: 'primary', position: { top: '10%', right: '5%' }, size: 450, opacity: 0.2, blur: 60, animationDuration: 7 },
      { color: 'secondary', position: { bottom: '20%', left: '10%' }, size: 350, opacity: 0.15, blur: 50, animationDuration: 9, animationDelay: 2 },
      { color: 'tertiary', position: { top: '60%', right: '20%' }, size: 250, opacity: 0.1, blur: 40, animationDuration: 11, animationDelay: 4 },
    ],
  },
  
  getMuiTheme: (mode: PaletteMode): ThemeOptions => ({
    palette: {
      mode,
      primary: {
        main: colors.primary.main,
        light: colors.primary.light,
        dark: colors.primary.dark,
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: colors.secondary.main,
        light: colors.secondary.light,
        dark: colors.secondary.dark,
        contrastText: '#FFFFFF',
      },
      error: { main: colors.error },
      warning: { main: colors.warning },
      success: { main: colors.success },
      info: { main: colors.info },
      text: {
        primary: mode === 'dark' ? colors.neutral[100] : colors.neutral[900],
        secondary: mode === 'dark' ? colors.neutral[400] : colors.neutral[600],
      },
      background: {
        default: mode === 'dark' ? colors.background.dark : colors.background.light,
        paper: mode === 'dark' ? colors.background.darkElevated : colors.background.lightElevated,
      },
      divider: mode === 'dark' ? colors.neutral[800] : colors.neutral[200],
    },
    typography: {
      fontFamily: neoTypography.fontFamily.primary,
      button: { textTransform: 'none', fontWeight: 500 },
      h1: { fontFamily: neoTypography.fontFamily.display, fontWeight: 700 },
      h2: { fontFamily: neoTypography.fontFamily.display, fontWeight: 700 },
      h3: { fontFamily: neoTypography.fontFamily.display, fontWeight: 600 },
    },
    shape: { borderRadius: 8 },
    components: createComponents(mode),
  }),
};

