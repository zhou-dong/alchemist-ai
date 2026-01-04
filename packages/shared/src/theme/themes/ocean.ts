/**
 * Ocean Theme
 * Deep sea inspired with blues and teals
 * Calm, professional, trustworthy
 */

import type { ThemeOptions, PaletteMode, Components } from '@mui/material';
import type { SketchThemeDefinition } from './types';

// =============================================================================
// COLORS
// =============================================================================

const colors = {
  primary: {
    main: '#0EA5E9', // Sky blue
    light: '#38BDF8',
    dark: '#0284C7',
    muted: '#7DD3FC',
  },
  secondary: {
    main: '#06B6D4', // Cyan
    light: '#22D3EE',
    dark: '#0891B2',
    muted: '#67E8F9',
  },
  tertiary: {
    main: '#8B5CF6', // Violet accent
    light: '#A78BFA',
    dark: '#7C3AED',
    muted: '#C4B5FD',
  },
  neutral: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
    950: '#020617',
  },
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#0EA5E9',
  background: {
    dark: '#020617',
    darkElevated: '#0F172A',
    darkSurface: '#1E293B',
    light: '#F8FAFC',
    lightElevated: '#FFFFFF',
    lightSurface: '#F1F5F9',
  },
};

// =============================================================================
// GLASS EFFECTS
// =============================================================================

const glass = {
  blur: {
    sm: 'blur(8px)',
    md: 'blur(12px)',
    lg: 'blur(16px)',
    xl: 'blur(24px)',
  },
  background: {
    subtle: 'rgba(14, 165, 233, 0.03)',
    light: 'rgba(14, 165, 233, 0.05)',
    medium: 'rgba(14, 165, 233, 0.08)',
    strong: 'rgba(14, 165, 233, 0.12)',
  },
  border: {
    subtle: 'rgba(14, 165, 233, 0.1)',
    light: 'rgba(14, 165, 233, 0.15)',
    medium: 'rgba(14, 165, 233, 0.2)',
  },
  tinted: (color: string, opacity: number = 0.08) => {
    const colorMap: Record<string, [number, number, number]> = {
      primary: [14, 165, 233],
      secondary: [6, 182, 212],
      tertiary: [139, 92, 246],
    };
    const rgb = colorMap[color] || colorMap.primary;
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
  },
};

// =============================================================================
// GLOW EFFECTS
// =============================================================================

const glow = {
  primary: {
    subtle: '0 4px 12px rgba(14, 165, 233, 0.15)',
    medium: '0 4px 20px rgba(14, 165, 233, 0.25)',
    strong: '0 6px 30px rgba(14, 165, 233, 0.35)',
    intense: '0 8px 40px rgba(14, 165, 233, 0.45)',
  },
  secondary: {
    subtle: '0 4px 12px rgba(6, 182, 212, 0.15)',
    medium: '0 4px 20px rgba(6, 182, 212, 0.25)',
    strong: '0 6px 30px rgba(6, 182, 212, 0.35)',
    intense: '0 8px 40px rgba(6, 182, 212, 0.45)',
  },
  neutral: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.1)',
    md: '0 4px 16px rgba(0, 0, 0, 0.12)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.16)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.2)',
  },
};

// =============================================================================
// MUI COMPONENT OVERRIDES
// =============================================================================

const createComponents = (mode: PaletteMode): Components => {
  const isDark = mode === 'dark';

  return {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: '10px',
          fontWeight: 600,
          letterSpacing: '0.02em',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          textTransform: 'none',
        },
        contained: {
          boxShadow: glow.primary.medium,
          '&:hover': {
            boxShadow: glow.primary.strong,
            transform: 'translateY(-2px)',
          },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${colors.primary.main}, ${colors.secondary.main})`,
          '&:hover': {
            background: `linear-gradient(135deg, ${colors.primary.light}, ${colors.secondary.light})`,
          },
        },
        containedSecondary: {
          background: colors.tertiary.main,
          boxShadow: '0 4px 20px rgba(139, 92, 246, 0.25)',
          '&:hover': {
            background: colors.tertiary.light,
            boxShadow: '0 6px 30px rgba(139, 92, 246, 0.35)',
          },
        },
        outlined: {
          borderColor: colors.primary.main,
          color: colors.primary.main,
          '&:hover': {
            background: glass.tinted('primary', 0.1),
            borderColor: colors.primary.light,
          },
        },
        sizeLarge: {
          padding: '14px 32px',
          fontSize: '1rem',
          borderRadius: '12px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': { transform: 'scale(1.05)' },
        },
        colorPrimary: {
          background: glass.tinted('primary', 0.1),
          backdropFilter: glass.blur.md,
          border: `1px solid ${glass.border.light}`,
          color: colors.primary.main,
          '&:hover': {
            background: glass.tinted('primary', 0.2),
            boxShadow: glow.primary.subtle,
          },
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          background: isDark 
            ? `linear-gradient(135deg, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.6))`
            : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: glass.blur.md,
          border: `1px solid ${isDark ? glass.border.subtle : 'rgba(14, 165, 233, 0.1)'}`,
          borderRadius: '12px',
          transition: 'all 0.3s ease',
          '&:hover': {
            borderColor: isDark ? glass.border.light : colors.primary.main,
            boxShadow: glow.primary.subtle,
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { backgroundImage: 'none' },
        elevation1: {
          background: isDark ? 'rgba(15, 23, 42, 0.6)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: glass.blur.sm,
          border: `1px solid ${glass.border.subtle}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: '8px', fontWeight: 500 },
        filledPrimary: {
          background: glass.tinted('primary', 0.2),
          color: colors.primary.main,
        },
      },
    },
  };
};

// =============================================================================
// THEME DEFINITION
// =============================================================================

export const oceanTheme: SketchThemeDefinition = {
  id: 'ocean',
  name: 'Ocean',
  description: 'Deep sea inspired with calming blues and gradients',
  category: 'glass',
  
  colors,
  glass,
  glow,
  
  typography: {
    fontFamily: {
      primary: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      display: "'Sora', 'DM Sans', sans-serif",
      mono: "'Fira Code', 'SF Mono', monospace",
    },
    letterSpacing: {
      tight: '-0.01em',
      normal: '0',
      wide: '0.02em',
      wider: '0.05em',
    },
  },
  
  borderRadius: {
    sm: '6px',
    md: '10px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
  
  animations: {
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.5s',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  
  orbPresets: {
    default: [
      { color: 'primary', position: { top: '0%', right: '0%' }, size: 500, opacity: 0.12, blur: 80, animationDuration: 10 },
      { color: 'secondary', position: { bottom: '10%', left: '5%' }, size: 400, opacity: 0.1, blur: 70, animationDuration: 12, animationDelay: 3 },
    ],
    minimal: [
      { color: 'primary', position: { top: '10%', right: '10%' }, size: 400, opacity: 0.08, blur: 100, animationDuration: 15 },
    ],
    vibrant: [
      { color: 'primary', position: { top: '0%', right: '0%' }, size: 600, opacity: 0.18, blur: 60, animationDuration: 8 },
      { color: 'secondary', position: { bottom: '0%', left: '0%' }, size: 500, opacity: 0.15, blur: 60, animationDuration: 10, animationDelay: 2 },
      { color: 'tertiary', position: { top: '40%', left: '20%' }, size: 300, opacity: 0.1, blur: 50, animationDuration: 12, animationDelay: 5 },
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
        secondary: mode === 'dark' ? colors.neutral[400] : colors.neutral[500],
      },
      background: {
        default: mode === 'dark' ? colors.background.dark : colors.background.light,
        paper: mode === 'dark' ? colors.background.darkElevated : colors.background.lightElevated,
      },
      divider: mode === 'dark' ? colors.neutral[800] : colors.neutral[200],
    },
    typography: {
      fontFamily: oceanTheme.typography.fontFamily.primary,
      button: { textTransform: 'none', fontWeight: 600 },
      h1: { fontFamily: oceanTheme.typography.fontFamily.display, fontWeight: 700 },
      h2: { fontFamily: oceanTheme.typography.fontFamily.display, fontWeight: 700 },
      h3: { fontFamily: oceanTheme.typography.fontFamily.display, fontWeight: 600 },
    },
    shape: { borderRadius: 10 },
    components: createComponents(mode),
  }),
};

