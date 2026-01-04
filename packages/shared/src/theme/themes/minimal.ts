/**
 * Minimal Theme
 * Clean, understated, typography-focused
 * Inspired by Notion, Linear's simpler states
 */

import type { ThemeOptions, PaletteMode, Components } from '@mui/material';
import type { SketchThemeDefinition } from './types';

// =============================================================================
// COLORS
// =============================================================================

const colors = {
  primary: {
    main: '#171717', // Near black
    light: '#404040',
    dark: '#0A0A0A',
    muted: '#525252',
  },
  secondary: {
    main: '#2563EB', // Blue accent
    light: '#3B82F6',
    dark: '#1D4ED8',
    muted: '#60A5FA',
  },
  tertiary: {
    main: '#DC2626', // Red for emphasis
    light: '#EF4444',
    dark: '#B91C1C',
    muted: '#F87171',
  },
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },
  success: '#16A34A',
  warning: '#CA8A04',
  error: '#DC2626',
  info: '#2563EB',
  background: {
    dark: '#0A0A0A',
    darkElevated: '#171717',
    darkSurface: '#262626',
    light: '#FFFFFF',
    lightElevated: '#FFFFFF',
    lightSurface: '#FAFAFA',
  },
};

// =============================================================================
// GLOW EFFECTS (subtle for minimal)
// =============================================================================

const glow = {
  primary: {
    subtle: '0 1px 2px rgba(0, 0, 0, 0.05)',
    medium: '0 2px 4px rgba(0, 0, 0, 0.1)',
    strong: '0 4px 8px rgba(0, 0, 0, 0.15)',
    intense: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  secondary: {
    subtle: '0 1px 2px rgba(37, 99, 235, 0.1)',
    medium: '0 2px 4px rgba(37, 99, 235, 0.15)',
    strong: '0 4px 8px rgba(37, 99, 235, 0.2)',
    intense: '0 8px 16px rgba(37, 99, 235, 0.25)',
  },
  neutral: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.04)',
    md: '0 2px 4px rgba(0, 0, 0, 0.06)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.08)',
    xl: '0 8px 16px rgba(0, 0, 0, 0.1)',
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
          borderRadius: '6px',
          fontWeight: 500,
          letterSpacing: '0',
          transition: 'all 0.15s ease',
          textTransform: 'none',
        },
        contained: {
          boxShadow: glow.primary.subtle,
          '&:hover': {
            boxShadow: glow.primary.medium,
          },
        },
        containedPrimary: {
          background: isDark ? colors.neutral[100] : colors.neutral[900],
          color: isDark ? colors.neutral[900] : colors.neutral[100],
          '&:hover': {
            background: isDark ? colors.neutral[200] : colors.neutral[800],
          },
        },
        containedSecondary: {
          background: colors.secondary.main,
          '&:hover': {
            background: colors.secondary.dark,
          },
        },
        outlined: {
          borderColor: isDark ? colors.neutral[700] : colors.neutral[300],
          color: isDark ? colors.neutral[100] : colors.neutral[900],
          '&:hover': {
            background: isDark ? colors.neutral[800] : colors.neutral[100],
            borderColor: isDark ? colors.neutral[600] : colors.neutral[400],
          },
        },
        text: {
          color: isDark ? colors.neutral[300] : colors.neutral[600],
          '&:hover': {
            background: isDark ? colors.neutral[800] : colors.neutral[100],
          },
        },
        sizeLarge: {
          padding: '12px 24px',
          fontSize: '0.95rem',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.15s ease',
          '&:hover': { background: isDark ? colors.neutral[800] : colors.neutral[100] },
        },
        colorPrimary: {
          color: isDark ? colors.neutral[100] : colors.neutral[900],
          '&:hover': {
            background: isDark ? colors.neutral[800] : colors.neutral[200],
          },
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          background: isDark ? colors.background.darkElevated : colors.background.lightElevated,
          border: `1px solid ${isDark ? colors.neutral[800] : colors.neutral[200]}`,
          borderRadius: '8px',
          transition: 'all 0.15s ease',
        },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { backgroundImage: 'none' },
        elevation1: {
          background: isDark ? colors.background.darkElevated : colors.background.lightElevated,
          border: `1px solid ${isDark ? colors.neutral[800] : colors.neutral[200]}`,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: isDark ? colors.neutral[800] : colors.neutral[200],
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: '6px', fontWeight: 500 },
        filled: {
          background: isDark ? colors.neutral[800] : colors.neutral[200],
        },
      },
    },
  };
};

// =============================================================================
// THEME DEFINITION
// =============================================================================

export const minimalTheme: SketchThemeDefinition = {
  id: 'minimal',
  name: 'Minimal',
  description: 'Clean, typography-focused design with subtle accents',
  category: 'minimal',
  
  colors,
  glow,
  
  typography: {
    fontFamily: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      display: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      mono: "'SF Mono', 'Fira Code', monospace",
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.02em',
      wider: '0.04em',
    },
  },
  
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    full: '9999px',
  },
  
  animations: {
    fast: '0.1s',
    normal: '0.15s',
    slow: '0.2s',
    easing: 'ease',
  },
  
  orbPresets: {
    default: [], // No orbs for minimal theme
    minimal: [],
    vibrant: [
      { color: 'secondary', position: { top: '20%', right: '10%' }, size: 300, opacity: 0.03, blur: 100, animationDuration: 15 },
    ],
  },
  
  getMuiTheme: (mode: PaletteMode): ThemeOptions => ({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? colors.neutral[100] : colors.neutral[900],
        light: colors.neutral[400],
        dark: colors.neutral[950],
        contrastText: mode === 'dark' ? colors.neutral[900] : colors.neutral[100],
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
      fontFamily: minimalTheme.typography.fontFamily.primary,
      button: { textTransform: 'none', fontWeight: 500 },
      h1: { fontWeight: 600, letterSpacing: '-0.02em' },
      h2: { fontWeight: 600, letterSpacing: '-0.01em' },
      h3: { fontWeight: 600 },
      body1: { lineHeight: 1.6 },
      body2: { lineHeight: 1.5 },
    },
    shape: { borderRadius: 6 },
    components: createComponents(mode),
  }),
};

