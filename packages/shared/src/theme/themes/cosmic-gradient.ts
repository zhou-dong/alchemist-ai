/**
 * Cosmic Gradient Theme
 * Animated multi-color gradients with indigo, violet, amber, and emerald
 * Vibrant, energetic, and modern with flowing color transitions
 */

import type { ThemeOptions, PaletteMode, Components } from '@mui/material';
import type { SketchThemeDefinition } from './types';

// =============================================================================
// GRADIENT COLORS
// =============================================================================

const colors = {
  primary: {
    main: '#6366F1', // Indigo
    light: '#818CF8',
    dark: '#4F46E5',
    muted: '#A5B4FC',
  },
  secondary: {
    main: '#8B5CF6', // Violet
    light: '#A78BFA',
    dark: '#7C3AED',
    muted: '#C4B5FD',
  },
  tertiary: {
    main: '#F59E0B', // Amber
    light: '#FBBF24',
    dark: '#D97706',
    muted: '#FCD34D',
  },
  quaternary: {
    main: '#10B981', // Emerald
    light: '#34D399',
    dark: '#059669',
    muted: '#6EE7B7',
  },
  neutral: {
    50: '#FAFAFA',
    100: '#F4F4F5',
    200: '#E4E4E7',
    300: '#D4D4D8',
    400: '#A1A1AA',
    500: '#71717A',
    600: '#52525B',
    700: '#3F3F46',
    800: '#27272A',
    900: '#18181B',
    950: '#09090B',
  },
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#6366F1',
  background: {
    dark: '#0C0A1A',
    darkElevated: '#14122A',
    darkSurface: '#1C1938',
    light: '#FAFAFF',
    lightElevated: '#FFFFFF',
    lightSurface: '#F0F0FF',
  },
};

// =============================================================================
// GRADIENT DEFINITIONS
// =============================================================================

const gradients = {
  // Main cosmic gradient (all 4 colors)
  cosmic: `linear-gradient(135deg, ${colors.primary.main}, ${colors.secondary.main}, ${colors.tertiary.main}, ${colors.quaternary.main})`,
  cosmicReverse: `linear-gradient(315deg, ${colors.primary.main}, ${colors.secondary.main}, ${colors.tertiary.main}, ${colors.quaternary.main})`,
  
  // Primary-focused gradients
  primaryToSecondary: `linear-gradient(135deg, ${colors.primary.main}, ${colors.secondary.main})`,
  secondaryToTertiary: `linear-gradient(135deg, ${colors.secondary.main}, ${colors.tertiary.main})`,
  
  // Accent gradients
  warm: `linear-gradient(135deg, ${colors.tertiary.main}, ${colors.quaternary.main})`,
  cool: `linear-gradient(135deg, ${colors.primary.main}, ${colors.quaternary.main})`,
  
  // Text gradients
  text: `linear-gradient(135deg, ${colors.primary.main}, ${colors.secondary.main}, ${colors.tertiary.main}, ${colors.quaternary.main})`,
};

// =============================================================================
// GLOW EFFECTS
// =============================================================================

const glow = {
  primary: {
    subtle: '0 0 15px rgba(99, 102, 241, 0.25)',
    medium: '0 0 25px rgba(99, 102, 241, 0.35), 0 0 50px rgba(139, 92, 246, 0.2)',
    strong: '0 0 35px rgba(99, 102, 241, 0.45), 0 0 70px rgba(139, 92, 246, 0.3)',
    intense: '0 0 45px rgba(99, 102, 241, 0.55), 0 0 90px rgba(139, 92, 246, 0.4)',
  },
  secondary: {
    subtle: '0 0 15px rgba(139, 92, 246, 0.25)',
    medium: '0 0 25px rgba(139, 92, 246, 0.35), 0 0 50px rgba(245, 158, 11, 0.2)',
    strong: '0 0 35px rgba(139, 92, 246, 0.45), 0 0 70px rgba(245, 158, 11, 0.3)',
    intense: '0 0 45px rgba(139, 92, 246, 0.55), 0 0 90px rgba(245, 158, 11, 0.4)',
  },
  cosmic: {
    subtle: '0 0 20px rgba(99, 102, 241, 0.2), 0 0 40px rgba(139, 92, 246, 0.15), 0 0 60px rgba(245, 158, 11, 0.1)',
    medium: '0 0 30px rgba(99, 102, 241, 0.3), 0 0 60px rgba(139, 92, 246, 0.2), 0 0 90px rgba(16, 185, 129, 0.15)',
    strong: '0 0 40px rgba(99, 102, 241, 0.4), 0 0 80px rgba(139, 92, 246, 0.3), 0 0 120px rgba(245, 158, 11, 0.2)',
  },
  neutral: {
    sm: '0 2px 10px rgba(0, 0, 0, 0.15)',
    md: '0 4px 20px rgba(0, 0, 0, 0.2)',
    lg: '0 8px 40px rgba(0, 0, 0, 0.25)',
    xl: '0 16px 60px rgba(0, 0, 0, 0.3)',
  },
};

// =============================================================================
// ANIMATION KEYFRAMES (CSS-in-JS format)
// =============================================================================

const keyframes = {
  gradientShift: {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' },
  },
  glow: {
    '0%': { textShadow: '0 0 20px rgba(99, 102, 241, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)' },
    '100%': { textShadow: '0 0 30px rgba(99, 102, 241, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)' },
  },
  pulse: {
    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
    '50%': { opacity: 0.8, transform: 'scale(1.02)' },
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
          borderRadius: '8px',
          fontWeight: 600,
          letterSpacing: '0.05em',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          textTransform: 'none',
          position: 'relative',
          overflow: 'hidden',
        },
        // Contained = Gradient button
        contained: {
          background: gradients.cosmic,
          backgroundSize: '200% 200%',
          color: '#FFFFFF',
          boxShadow: glow.cosmic.subtle,
          animation: 'gradientShift 8s ease infinite',
          '&:hover': {
            backgroundSize: '200% 200%',
            boxShadow: glow.cosmic.medium,
            transform: 'translateY(-2px) scale(1.02)',
          },
          '&:active': {
            transform: 'translateY(0) scale(1)',
            boxShadow: glow.cosmic.subtle,
          },
          '@keyframes gradientShift': keyframes.gradientShift,
        },
        containedPrimary: {
          background: gradients.primaryToSecondary,
          backgroundSize: '200% 200%',
          '&:hover': {
            background: gradients.primaryToSecondary,
            backgroundSize: '200% 200%',
          },
        },
        containedSecondary: {
          background: gradients.warm,
          backgroundSize: '200% 200%',
          '&:hover': {
            background: gradients.warm,
            backgroundSize: '200% 200%',
          },
        },
        // Outlined = Ghost with gradient border
        outlined: {
          borderColor: 'transparent',
          color: colors.primary.main,
          background: isDark ? 'rgba(99, 102, 241, 0.05)' : 'rgba(99, 102, 241, 0.03)',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: '8px',
            padding: '2px',
            background: gradients.cosmic,
            backgroundSize: '200% 200%',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            opacity: 0.5,
            animation: 'gradientShift 8s ease infinite',
            zIndex: -1,
          },
          '&:hover': {
            background: isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)',
            '&::before': {
              opacity: 0.8,
            },
          },
          '@keyframes gradientShift': keyframes.gradientShift,
        },
        // Text = Gradient text
        text: {
          background: gradients.text,
          backgroundSize: '200% 200%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradientShift 8s ease infinite, glow 2s ease-in-out infinite alternate',
          '&:hover': {
            transform: 'scale(1.05)',
          },
          '@keyframes gradientShift': keyframes.gradientShift,
          '@keyframes glow': keyframes.glow,
        },
        sizeLarge: {
          padding: '14px 36px',
          fontSize: '1rem',
          borderRadius: '12px',
        },
        sizeMedium: {
          padding: '10px 24px',
          fontSize: '0.9rem',
        },
        sizeSmall: {
          padding: '6px 16px',
          fontSize: '0.8rem',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': { transform: 'scale(1.1)' },
        },
        colorPrimary: {
          background: isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)',
          border: `2px solid transparent`,
          color: colors.primary.main,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            padding: '2px',
            background: gradients.cosmic,
            backgroundSize: '200% 200%',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            opacity: 0.5,
            animation: 'gradientShift 8s ease infinite',
          },
          '&:hover': {
            background: isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.12)',
            boxShadow: glow.primary.subtle,
            '&::before': { opacity: 0.8 },
          },
          '@keyframes gradientShift': keyframes.gradientShift,
        },
        colorSecondary: {
          background: isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.08)',
          color: colors.secondary.main,
          border: `2px solid ${colors.secondary.main}40`,
          '&:hover': {
            background: isDark ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.12)',
            boxShadow: glow.secondary.subtle,
          },
        },
        sizeMedium: { width: 48, height: 48 },
        sizeLarge: { width: 56, height: 56 },
        sizeSmall: { width: 36, height: 36 },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          background: isDark ? 'rgba(20, 18, 42, 0.8)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          border: `1px solid transparent`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'visible',
          // Gradient border effect
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: -1,
            borderRadius: 'inherit',
            padding: 1,
            background: gradients.cosmic,
            backgroundSize: '200% 200%',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            opacity: 0.2,
            transition: 'opacity 0.3s ease',
            animation: 'gradientShift 8s ease infinite',
            zIndex: -1,
            '@keyframes gradientShift': keyframes.gradientShift,
          },
          '&:hover': {
            boxShadow: glow.cosmic.subtle,
            '&::before': {
              opacity: 0.5,
            },
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: { backgroundImage: 'none' },
        elevation1: {
          background: isDark ? 'rgba(20, 18, 42, 0.6)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(8px)',
          border: `1px solid ${isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)'}`,
        },
        elevation2: {
          background: isDark ? 'rgba(20, 18, 42, 0.8)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(12px)',
          border: `1px solid ${isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.1)'}`,
        },
        rounded: { borderRadius: '16px' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: '20px', fontWeight: 500 },
        filledPrimary: {
          background: gradients.primaryToSecondary,
          backgroundSize: '200% 200%',
          color: '#FFFFFF',
          animation: 'gradientShift 8s ease infinite',
          '@keyframes gradientShift': keyframes.gradientShift,
        },
        outlinedPrimary: {
          borderColor: colors.primary.main,
          color: colors.primary.main,
          '&:hover': {
            background: isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)',
          },
        },
      },
    },
    // Typography with gradient text for headings
    MuiTypography: {
      styleOverrides: {
        h1: {
          background: gradients.cosmic,
          backgroundSize: '200% 200%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradientShift 8s ease infinite, glow 2s ease-in-out infinite alternate',
          textShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
          '@keyframes gradientShift': keyframes.gradientShift,
          '@keyframes glow': keyframes.glow,
        },
        h2: {
          background: gradients.cosmic,
          backgroundSize: '200% 200%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradientShift 8s ease infinite, glow 2s ease-in-out infinite alternate',
          textShadow: '0 0 25px rgba(99, 102, 241, 0.25)',
          '@keyframes gradientShift': keyframes.gradientShift,
          '@keyframes glow': keyframes.glow,
        },
        h3: {
          background: gradients.primaryToSecondary,
          backgroundSize: '200% 200%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradientShift 8s ease infinite',
          '@keyframes gradientShift': keyframes.gradientShift,
        },
        h4: {
          background: gradients.primaryToSecondary,
          backgroundSize: '200% 200%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradientShift 8s ease infinite',
          '@keyframes gradientShift': keyframes.gradientShift,
        },
        h5: {
          background: gradients.primaryToSecondary,
          backgroundSize: '200% 200%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradientShift 8s ease infinite',
          '@keyframes gradientShift': keyframes.gradientShift,
        },
        h6: {
          background: gradients.primaryToSecondary,
          backgroundSize: '200% 200%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradientShift 8s ease infinite',
          '@keyframes gradientShift': keyframes.gradientShift,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: isDark ? colors.neutral[800] : colors.neutral[700],
          backdropFilter: 'blur(8px)',
          borderRadius: '8px',
          fontSize: '0.8rem',
          fontWeight: 500,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: { color: colors.primary.main },
        thumb: {
          background: gradients.primaryToSecondary,
          boxShadow: glow.primary.subtle,
          '&:hover, &.Mui-focusVisible': { boxShadow: glow.primary.medium },
        },
        track: { background: gradients.primaryToSecondary },
        rail: { background: isDark ? colors.neutral[700] : colors.neutral[300] },
      },
    },
    // Tabs with gradient indicator
    MuiTabs: {
      styleOverrides: {
        indicator: {
          background: gradients.cosmic,
          backgroundSize: '200% 200%',
          height: 3,
          borderRadius: 2,
          boxShadow: glow.primary.subtle,
          animation: 'gradientShift 8s ease infinite',
          '@keyframes gradientShift': keyframes.gradientShift,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&.Mui-selected': {
            background: gradients.cosmic,
            backgroundSize: '200% 200%',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'gradientShift 8s ease infinite',
            '@keyframes gradientShift': keyframes.gradientShift,
          },
        },
      },
    },
    // Switch with gradient track
    MuiSwitch: {
      styleOverrides: {
        root: { padding: 8 },
        switchBase: {
          '&.Mui-checked': {
            color: '#FFFFFF',
            '& + .MuiSwitch-track': {
              background: gradients.primaryToSecondary,
              backgroundSize: '200% 200%',
              opacity: 1,
              animation: 'gradientShift 8s ease infinite',
              '@keyframes gradientShift': keyframes.gradientShift,
            },
          },
        },
        thumb: {
          boxShadow: glow.neutral.sm,
        },
        track: {
          borderRadius: 20,
          background: isDark ? colors.neutral[700] : colors.neutral[300],
          opacity: 1,
        },
      },
    },
    // Checkbox with gradient when checked
    MuiCheckbox: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          '&.Mui-checked': {
            color: colors.primary.main,
            '& .MuiSvgIcon-root': {
              filter: `drop-shadow(0 0 4px ${colors.primary.main}60)`,
            },
          },
        },
      },
    },
    // Radio with gradient glow when checked
    MuiRadio: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          '&.Mui-checked': {
            color: colors.primary.main,
            '& .MuiSvgIcon-root': {
              filter: `drop-shadow(0 0 4px ${colors.primary.main}60)`,
            },
          },
        },
      },
    },
    // Linear Progress with gradient bar
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          background: isDark ? colors.neutral[800] : colors.neutral[200],
          height: 6,
        },
        bar: {
          borderRadius: 4,
          background: gradients.cosmic,
          backgroundSize: '200% 200%',
          animation: 'gradientShift 8s ease infinite',
          '@keyframes gradientShift': keyframes.gradientShift,
        },
      },
    },
    // Circular Progress with gradient
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: colors.primary.main,
        },
        circle: {
          strokeLinecap: 'round',
        },
      },
    },
    // FAB with gradient
    MuiFab: {
      styleOverrides: {
        root: {
          background: gradients.cosmic,
          backgroundSize: '200% 200%',
          color: '#FFFFFF',
          boxShadow: glow.cosmic.medium,
          animation: 'gradientShift 8s ease infinite',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: glow.cosmic.strong,
            transform: 'scale(1.05)',
          },
          '@keyframes gradientShift': keyframes.gradientShift,
        },
        primary: {
          background: gradients.primaryToSecondary,
          backgroundSize: '200% 200%',
        },
        secondary: {
          background: gradients.warm,
          backgroundSize: '200% 200%',
        },
      },
    },
    // TextField with gradient focus border
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: 'all 0.2s ease',
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.primary.light,
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: 2,
              borderImage: `${gradients.primaryToSecondary} 1`,
            },
          },
        },
        notchedOutline: {
          borderColor: isDark ? colors.neutral[700] : colors.neutral[300],
          transition: 'all 0.2s ease',
        },
      },
    },
    // Link with gradient text
    MuiLink: {
      styleOverrides: {
        root: {
          background: gradients.primaryToSecondary,
          backgroundSize: '200% 200%',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textDecoration: 'none',
          fontWeight: 500,
          transition: 'all 0.2s ease',
          animation: 'gradientShift 8s ease infinite',
          '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: colors.primary.main,
          },
          '@keyframes gradientShift': keyframes.gradientShift,
        },
      },
    },
    // Badge with gradient background
    MuiBadge: {
      styleOverrides: {
        colorPrimary: {
          background: gradients.primaryToSecondary,
          backgroundSize: '200% 200%',
          animation: 'gradientShift 8s ease infinite',
          boxShadow: glow.primary.subtle,
          '@keyframes gradientShift': keyframes.gradientShift,
        },
        colorSecondary: {
          background: gradients.warm,
          backgroundSize: '200% 200%',
          animation: 'gradientShift 8s ease infinite',
          '@keyframes gradientShift': keyframes.gradientShift,
        },
      },
    },
    // Avatar with gradient border
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: '2px solid transparent',
          backgroundClip: 'padding-box',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: -2,
            borderRadius: 'inherit',
            padding: 2,
            background: gradients.cosmic,
            backgroundSize: '200% 200%',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            animation: 'gradientShift 8s ease infinite',
            '@keyframes gradientShift': keyframes.gradientShift,
          },
        },
        colorDefault: {
          background: isDark ? colors.neutral[800] : colors.neutral[200],
          color: isDark ? colors.neutral[200] : colors.neutral[700],
        },
      },
    },
    // Alert with gradient accent
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backdropFilter: 'blur(8px)',
        },
        standardInfo: {
          background: isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)',
          borderLeft: `4px solid`,
          borderImage: `${gradients.primaryToSecondary} 1`,
        },
        standardSuccess: {
          background: isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.08)',
          borderLeft: `4px solid ${colors.success}`,
        },
        standardWarning: {
          background: isDark ? 'rgba(245, 158, 11, 0.1)' : 'rgba(245, 158, 11, 0.08)',
          borderLeft: `4px solid ${colors.warning}`,
        },
        standardError: {
          background: isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.08)',
          borderLeft: `4px solid ${colors.error}`,
        },
      },
    },
    // Divider with subtle gradient
    MuiDivider: {
      styleOverrides: {
        root: {
          background: gradients.primaryToSecondary,
          backgroundSize: '200% 200%',
          height: 1,
          border: 'none',
          opacity: 0.3,
          animation: 'gradientShift 8s ease infinite',
          '@keyframes gradientShift': keyframes.gradientShift,
        },
      },
    },
    // Dialog with gradient border accent
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: isDark ? colors.background.darkElevated : colors.background.lightElevated,
          backdropFilter: 'blur(20px)',
          borderRadius: 16,
          border: `1px solid ${isDark ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.15)'}`,
          boxShadow: glow.cosmic.medium,
        },
      },
    },
    // Stepper with gradient connector
    MuiStepConnector: {
      styleOverrides: {
        line: {
          background: gradients.primaryToSecondary,
          backgroundSize: '200% 200%',
          height: 2,
          border: 'none',
          animation: 'gradientShift 8s ease infinite',
          '@keyframes gradientShift': keyframes.gradientShift,
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-active': {
            color: colors.primary.main,
            filter: `drop-shadow(0 0 6px ${colors.primary.main}60)`,
          },
          '&.Mui-completed': {
            color: colors.quaternary.main,
            filter: `drop-shadow(0 0 6px ${colors.quaternary.main}60)`,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        // Global animation keyframes
        '@global': {
          '@keyframes gradientShift': keyframes.gradientShift,
          '@keyframes glow': keyframes.glow,
          '@keyframes pulse': keyframes.pulse,
        },
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: `${colors.neutral[600]} transparent`,
        },
      },
    },
  };
};

// =============================================================================
// THEME DEFINITION
// =============================================================================

export const cosmicGradientTheme: SketchThemeDefinition = {
  id: 'cosmic-gradient',
  name: 'Cosmic Gradient',
  description: 'Animated multi-color gradients with flowing color transitions',
  category: 'gradient',
  
  colors,
  glow,
  
  typography: {
    fontFamily: {
      primary: "'Space Grotesk', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      display: "'Syne', 'Space Grotesk', sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', monospace",
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.05em',
      wider: '0.1em',
    },
  },
  
  borderRadius: {
    sm: '6px',
    md: '8px',
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
      { color: 'primary', position: { top: '10%', right: '15%' }, size: 350, opacity: 0.15, blur: 100, animationDuration: 8 },
      { color: 'secondary', position: { bottom: '15%', left: '10%' }, size: 400, opacity: 0.12, blur: 100, animationDuration: 10, animationDelay: 2 },
      { color: 'tertiary', position: { top: '60%', right: '30%' }, size: 250, opacity: 0.1, blur: 80, animationDuration: 12, animationDelay: 4 },
    ],
    minimal: [
      { color: 'primary', position: { top: '20%', right: '20%' }, size: 300, opacity: 0.1, blur: 120, animationDuration: 10 },
      { color: 'secondary', position: { bottom: '20%', left: '20%' }, size: 280, opacity: 0.08, blur: 120, animationDuration: 12, animationDelay: 3 },
    ],
    vibrant: [
      { color: 'primary', position: { top: '5%', right: '10%' }, size: 450, opacity: 0.2, blur: 80, animationDuration: 6 },
      { color: 'secondary', position: { bottom: '10%', left: '5%' }, size: 500, opacity: 0.18, blur: 80, animationDuration: 8, animationDelay: 1 },
      { color: 'tertiary', position: { top: '40%', left: '40%' }, size: 300, opacity: 0.15, blur: 60, animationDuration: 10, animationDelay: 3 },
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
        primary: mode === 'dark' ? '#FFFFFF' : colors.neutral[900],
        secondary: mode === 'dark' ? colors.neutral[400] : colors.neutral[600],
      },
      background: {
        default: mode === 'dark' ? colors.background.dark : colors.background.light,
        paper: mode === 'dark' ? colors.background.darkElevated : colors.background.lightElevated,
      },
    },
    typography: {
      fontFamily: cosmicGradientTheme.typography.fontFamily.primary,
      button: { textTransform: 'none', fontWeight: 600, letterSpacing: '0.05em' },
      h1: { fontFamily: cosmicGradientTheme.typography.fontFamily.display, fontWeight: 700, letterSpacing: '-0.02em' },
      h2: { fontFamily: cosmicGradientTheme.typography.fontFamily.display, fontWeight: 700, letterSpacing: '-0.02em' },
      h3: { fontFamily: cosmicGradientTheme.typography.fontFamily.display, fontWeight: 600 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      body1: { lineHeight: 1.7 },
      body2: { lineHeight: 1.6 },
    },
    shape: { borderRadius: 8 },
    components: createComponents(mode),
  }),
};

