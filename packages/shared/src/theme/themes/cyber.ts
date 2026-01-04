/**
 * Cyber Theme
 * Cyberpunk-inspired neon aesthetic with hot pink and electric blue
 * High contrast, bold, futuristic
 */

import type { ThemeOptions, PaletteMode, Components } from '@mui/material';
import type { SketchThemeDefinition } from './types';

// =============================================================================
// COLORS
// =============================================================================

const colors = {
  primary: {
    main: '#FF00FF', // Magenta/Hot Pink
    light: '#FF66FF',
    dark: '#CC00CC',
    muted: '#FF00FF',
  },
  secondary: {
    main: '#00FFFF', // Cyan
    light: '#66FFFF',
    dark: '#00CCCC',
    muted: '#00FFFF',
  },
  tertiary: {
    main: '#FFFF00', // Yellow
    light: '#FFFF66',
    dark: '#CCCC00',
    muted: '#FFFF00',
  },
  neutral: {
    50: '#F8F8F8',
    100: '#E8E8E8',
    200: '#D0D0D0',
    300: '#B0B0B0',
    400: '#888888',
    500: '#666666',
    600: '#444444',
    700: '#2A2A2A',
    800: '#1A1A1A',
    900: '#0D0D0D',
    950: '#050505',
  },
  success: '#00FF00',
  warning: '#FFFF00',
  error: '#FF0040',
  info: '#00FFFF',
  background: {
    dark: '#0A0A0F',
    darkElevated: '#12121A',
    darkSurface: '#1A1A25',
    light: '#F0F0F5',
    lightElevated: '#FFFFFF',
    lightSurface: '#E8E8F0',
  },
};

// =============================================================================
// GLOW EFFECTS (stronger for cyber aesthetic)
// =============================================================================

const glow = {
  primary: {
    subtle: '0 0 10px rgba(255, 0, 255, 0.3), 0 0 20px rgba(255, 0, 255, 0.2)',
    medium: '0 0 15px rgba(255, 0, 255, 0.4), 0 0 30px rgba(255, 0, 255, 0.3)',
    strong: '0 0 20px rgba(255, 0, 255, 0.5), 0 0 40px rgba(255, 0, 255, 0.4)',
    intense: '0 0 30px rgba(255, 0, 255, 0.6), 0 0 60px rgba(255, 0, 255, 0.5)',
  },
  secondary: {
    subtle: '0 0 10px rgba(0, 255, 255, 0.3), 0 0 20px rgba(0, 255, 255, 0.2)',
    medium: '0 0 15px rgba(0, 255, 255, 0.4), 0 0 30px rgba(0, 255, 255, 0.3)',
    strong: '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.4)',
    intense: '0 0 30px rgba(0, 255, 255, 0.6), 0 0 60px rgba(0, 255, 255, 0.5)',
  },
  neutral: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.3)',
    md: '0 4px 16px rgba(0, 0, 0, 0.4)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.5)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.6)',
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
          borderRadius: '4px',
          fontWeight: 700,
          letterSpacing: '0.1em',
          transition: 'all 0.2s ease',
          textTransform: 'uppercase',
          border: '1px solid transparent',
        },
        contained: {
          boxShadow: glow.primary.medium,
          '&:hover': {
            boxShadow: glow.primary.intense,
            transform: 'scale(1.02)',
          },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${colors.primary.main}, ${colors.primary.dark})`,
          border: `1px solid ${colors.primary.main}`,
          '&:hover': {
            background: `linear-gradient(135deg, ${colors.primary.light}, ${colors.primary.main})`,
          },
        },
        containedSecondary: {
          background: `linear-gradient(135deg, ${colors.secondary.main}, ${colors.secondary.dark})`,
          border: `1px solid ${colors.secondary.main}`,
          boxShadow: glow.secondary.medium,
          color: colors.neutral[900],
          '&:hover': {
            background: `linear-gradient(135deg, ${colors.secondary.light}, ${colors.secondary.main})`,
            boxShadow: glow.secondary.intense,
          },
        },
        outlined: {
          borderColor: colors.primary.main,
          color: colors.primary.main,
          boxShadow: glow.primary.subtle,
          '&:hover': {
            background: `rgba(255, 0, 255, 0.1)`,
            boxShadow: glow.primary.medium,
          },
        },
        sizeLarge: {
          padding: '16px 40px',
          fontSize: '1rem',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          '&:hover': { transform: 'scale(1.1)' },
        },
        colorPrimary: {
          background: 'rgba(255, 0, 255, 0.1)',
          border: `1px solid ${colors.primary.main}`,
          color: colors.primary.main,
          boxShadow: glow.primary.subtle,
          '&:hover': {
            background: 'rgba(255, 0, 255, 0.2)',
            boxShadow: glow.primary.medium,
          },
        },
        colorSecondary: {
          background: 'rgba(0, 255, 255, 0.1)',
          border: `1px solid ${colors.secondary.main}`,
          color: colors.secondary.main,
          boxShadow: glow.secondary.subtle,
          '&:hover': {
            background: 'rgba(0, 255, 255, 0.2)',
            boxShadow: glow.secondary.medium,
          },
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          background: isDark ? 'rgba(20, 20, 30, 0.8)' : 'rgba(255, 255, 255, 0.9)',
          border: `1px solid ${isDark ? 'rgba(255, 0, 255, 0.2)' : 'rgba(255, 0, 255, 0.3)'}`,
          borderRadius: '4px',
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: colors.primary.main,
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
          background: isDark ? 'rgba(20, 20, 30, 0.6)' : 'rgba(255, 255, 255, 0.8)',
          border: `1px solid rgba(255, 0, 255, 0.1)`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: '4px', fontWeight: 600 },
        filledPrimary: {
          background: 'rgba(255, 0, 255, 0.2)',
          color: colors.primary.main,
          border: `1px solid ${colors.primary.main}`,
        },
      },
    },
  };
};

// =============================================================================
// THEME DEFINITION
// =============================================================================

export const cyberTheme: SketchThemeDefinition = {
  id: 'cyber',
  name: 'Cyber',
  description: 'Cyberpunk neon aesthetic with hot pink and cyan',
  category: 'gradient',
  
  colors,
  glow,
  
  typography: {
    fontFamily: {
      primary: "'Share Tech Mono', 'JetBrains Mono', monospace",
      display: "'Orbitron', 'Share Tech Mono', sans-serif",
      mono: "'Share Tech Mono', 'JetBrains Mono', monospace",
    },
    letterSpacing: {
      tight: '0',
      normal: '0.05em',
      wide: '0.1em',
      wider: '0.15em',
    },
  },
  
  borderRadius: {
    sm: '2px',
    md: '4px',
    lg: '6px',
    xl: '8px',
    full: '9999px',
  },
  
  animations: {
    fast: '0.15s',
    normal: '0.2s',
    slow: '0.3s',
    easing: 'ease',
  },
  
  orbPresets: {
    default: [
      { color: 'primary', position: { top: '5%', right: '10%' }, size: 300, opacity: 0.15, blur: 80, animationDuration: 6 },
      { color: 'secondary', position: { bottom: '10%', left: '5%' }, size: 350, opacity: 0.12, blur: 80, animationDuration: 8, animationDelay: 2 },
    ],
    minimal: [
      { color: 'primary', position: { top: '20%', right: '15%' }, size: 250, opacity: 0.1, blur: 100, animationDuration: 8 },
    ],
    vibrant: [
      { color: 'primary', position: { top: '5%', right: '10%' }, size: 400, opacity: 0.25, blur: 60, animationDuration: 5 },
      { color: 'secondary', position: { bottom: '10%', left: '5%' }, size: 450, opacity: 0.2, blur: 60, animationDuration: 7, animationDelay: 1 },
      { color: 'tertiary', position: { top: '50%', left: '30%' }, size: 200, opacity: 0.15, blur: 50, animationDuration: 9, animationDelay: 3 },
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
        contrastText: '#000000',
      },
      error: { main: colors.error },
      warning: { main: colors.warning },
      success: { main: colors.success },
      info: { main: colors.info },
      text: {
        primary: mode === 'dark' ? '#FFFFFF' : colors.neutral[900],
        secondary: mode === 'dark' ? colors.neutral[400] : colors.neutral[600],
      },
      background: {
        default: mode === 'dark' ? colors.background.dark : colors.background.light,
        paper: mode === 'dark' ? colors.background.darkElevated : colors.background.lightElevated,
      },
    },
    typography: {
      fontFamily: cyberTheme.typography.fontFamily.primary,
      button: { textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em' },
      h1: { fontFamily: cyberTheme.typography.fontFamily.display, fontWeight: 700, letterSpacing: '0.05em' },
      h2: { fontFamily: cyberTheme.typography.fontFamily.display, fontWeight: 700 },
      h3: { fontFamily: cyberTheme.typography.fontFamily.display, fontWeight: 600 },
    },
    shape: { borderRadius: 4 },
    components: createComponents(mode),
  }),
};

