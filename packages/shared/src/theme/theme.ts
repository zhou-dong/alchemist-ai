import { type PaletteMode, type PaletteOptions, type ThemeOptions, type Components } from '@mui/material';
import { neoGlassColors, glassEffects, glowEffects, animations, spacing, typography } from './themes/neo-glass/neoGlassTokens';

// =============================================================================
// NEO-GLASS MUI COMPONENT OVERRIDES
// =============================================================================

const createNeoGlassComponents = (mode: PaletteMode): Components => {
  const isDark = mode === 'dark';
  const glass = isDark ? glassEffects.dark : glassEffects.light;
  const border = isDark ? glassEffects.border.dark : glassEffects.border.light;

  return {
    // =========================================================================
    // BUTTON
    // =========================================================================
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: false,
      },
      styleOverrides: {
        root: {
          borderRadius: spacing.borderRadius.lg,
          fontWeight: 500,
          letterSpacing: typography.letterSpacing.wide,
          transition: animations.transition.normal,
          textTransform: 'none',
        },
        // Contained = Glow Button style
        contained: {
          boxShadow: glowEffects.teal.medium,
          '&:hover': {
            boxShadow: glowEffects.teal.strong,
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: glowEffects.teal.subtle,
          },
        },
        containedPrimary: {
          background: neoGlassColors.teal.main,
          '&:hover': {
            background: neoGlassColors.teal.dark,
          },
        },
        containedSecondary: {
          background: neoGlassColors.violet.main,
          boxShadow: glowEffects.violet.medium,
          '&:hover': {
            background: neoGlassColors.violet.dark,
            boxShadow: glowEffects.violet.strong,
          },
        },
        // Outlined = Ghost Button style
        outlined: {
          borderColor: border.accent('teal', 0.4),
          color: neoGlassColors.teal.main,
          backdropFilter: glassEffects.blur.sm,
          '&:hover': {
            background: glassEffects.tinted.teal(0.1),
            borderColor: neoGlassColors.teal.main,
            boxShadow: glowEffects.teal.subtle,
          },
        },
        outlinedSecondary: {
          borderColor: border.accent('violet', 0.4),
          color: neoGlassColors.violet.main,
          '&:hover': {
            background: glassEffects.tinted.violet(0.1),
            borderColor: neoGlassColors.violet.main,
            boxShadow: glowEffects.violet.subtle,
          },
        },
        // Text = Minimal style
        text: {
          color: neoGlassColors.teal.main,
          '&:hover': {
            background: glassEffects.tinted.teal(0.08),
          },
        },
        // Size variants
        sizeLarge: {
          padding: '14px 36px',
          fontSize: '1rem',
          borderRadius: spacing.borderRadius.full,
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

    // =========================================================================
    // ICON BUTTON
    // =========================================================================
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: animations.transition.normal,
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
        // Default size with glass styling
        sizeMedium: {
          width: 48,
          height: 48,
        },
        sizeLarge: {
          width: 56,
          height: 56,
        },
        sizeSmall: {
          width: 36,
          height: 36,
        },
        // Color variants
        colorPrimary: {
          background: glassEffects.tinted.teal(0.08),
          backdropFilter: glassEffects.blur.md,
          border: `1px solid ${border.accent('teal', 0.3)}`,
          color: neoGlassColors.teal.main,
          '&:hover': {
            background: glassEffects.tinted.teal(0.15),
            borderColor: border.accent('teal', 0.5),
          },
        },
        colorSecondary: {
          background: glassEffects.tinted.violet(0.08),
          backdropFilter: glassEffects.blur.md,
          border: `1px solid ${border.accent('violet', 0.3)}`,
          color: neoGlassColors.violet.main,
          '&:hover': {
            background: glassEffects.tinted.violet(0.15),
            borderColor: border.accent('violet', 0.5),
          },
        },
      },
    },

    // =========================================================================
    // CARD
    // =========================================================================
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          background: glass.medium,
          backdropFilter: glassEffects.blur.md,
          border: `1px solid ${border.light}`,
          borderRadius: spacing.borderRadius.lg,
          transition: animations.transition.normal,
          '&:hover': {
            borderColor: border.medium,
          },
        },
      },
    },

    // =========================================================================
    // PAPER
    // =========================================================================
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none', // Remove default gradient
        },
        elevation0: {
          background: glass.subtle,
          backdropFilter: glassEffects.blur.sm,
        },
        elevation1: {
          background: glass.light,
          backdropFilter: glassEffects.blur.md,
          border: `1px solid ${border.subtle}`,
        },
        elevation2: {
          background: glass.medium,
          backdropFilter: glassEffects.blur.md,
          border: `1px solid ${border.light}`,
        },
        elevation3: {
          background: glass.strong,
          backdropFilter: glassEffects.blur.lg,
          border: `1px solid ${border.medium}`,
        },
        rounded: {
          borderRadius: spacing.borderRadius.lg,
        },
      },
    },

    // =========================================================================
    // DIALOG
    // =========================================================================
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: isDark ? neoGlassColors.background.darkElevated : neoGlassColors.background.lightElevated,
          backdropFilter: glassEffects.blur.xl,
          border: `1px solid ${border.light}`,
          borderRadius: spacing.borderRadius.xl,
          boxShadow: glowEffects.neutral.xl,
        },
      },
    },

    // =========================================================================
    // TOOLTIP
    // =========================================================================
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          background: isDark ? neoGlassColors.neutral[800] : neoGlassColors.neutral[700],
          backdropFilter: glassEffects.blur.md,
          borderRadius: spacing.borderRadius.md,
          fontSize: '0.8rem',
          fontWeight: 500,
          padding: '8px 12px',
        },
        arrow: {
          color: isDark ? neoGlassColors.neutral[800] : neoGlassColors.neutral[700],
        },
      },
    },

    // =========================================================================
    // CHIP
    // =========================================================================
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: spacing.borderRadius.full,
          fontWeight: 500,
          transition: animations.transition.fast,
        },
        filled: {
          background: glass.medium,
          backdropFilter: glassEffects.blur.sm,
          '&:hover': {
            background: glass.strong,
          },
        },
        filledPrimary: {
          background: glassEffects.tinted.teal(0.15),
          color: neoGlassColors.teal.main,
          '&:hover': {
            background: glassEffects.tinted.teal(0.25),
          },
        },
        outlined: {
          borderColor: border.light,
          '&:hover': {
            background: glass.subtle,
          },
        },
        outlinedPrimary: {
          borderColor: border.accent('teal', 0.4),
          color: neoGlassColors.teal.main,
          '&:hover': {
            background: glassEffects.tinted.teal(0.1),
          },
        },
      },
    },

    // =========================================================================
    // TEXT FIELD / INPUT
    // =========================================================================
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: spacing.borderRadius.md,
          background: glass.subtle,
          backdropFilter: glassEffects.blur.sm,
          transition: animations.transition.fast,
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: border.accent('teal', 0.4),
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: neoGlassColors.teal.main,
            borderWidth: 1,
          },
        },
        notchedOutline: {
          borderColor: border.light,
          transition: animations.transition.fast,
        },
      },
    },

    // =========================================================================
    // SLIDER
    // =========================================================================
    MuiSlider: {
      styleOverrides: {
        root: {
          color: neoGlassColors.teal.main,
        },
        thumb: {
          boxShadow: glowEffects.teal.subtle,
          '&:hover, &.Mui-focusVisible': {
            boxShadow: glowEffects.teal.medium,
          },
        },
        track: {
          background: neoGlassColors.teal.main,
        },
        rail: {
          background: border.medium,
        },
      },
    },

    // =========================================================================
    // SWITCH
    // =========================================================================
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 8,
        },
        switchBase: {
          '&.Mui-checked': {
            color: neoGlassColors.teal.main,
            '& + .MuiSwitch-track': {
              background: glassEffects.tinted.teal(0.5),
              opacity: 1,
            },
          },
        },
        thumb: {
          boxShadow: glowEffects.neutral.sm,
        },
        track: {
          borderRadius: spacing.borderRadius.full,
          background: border.medium,
          opacity: 1,
        },
      },
    },

    // =========================================================================
    // DIVIDER
    // =========================================================================
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: border.subtle,
        },
      },
    },

    // =========================================================================
    // SKELETON
    // =========================================================================
    MuiSkeleton: {
      styleOverrides: {
        root: {
          background: `linear-gradient(90deg, ${glass.subtle} 0%, ${glass.medium} 50%, ${glass.subtle} 100%)`,
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s ease-in-out infinite',
        },
      },
    },

    // =========================================================================
    // TABS
    // =========================================================================
    MuiTabs: {
      styleOverrides: {
        indicator: {
          background: neoGlassColors.teal.main,
          boxShadow: glowEffects.teal.subtle,
          borderRadius: 2,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          transition: animations.transition.fast,
          '&.Mui-selected': {
            color: neoGlassColors.teal.main,
          },
        },
      },
    },

    // =========================================================================
    // ALERT
    // =========================================================================
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: spacing.borderRadius.md,
          backdropFilter: glassEffects.blur.sm,
        },
        standardSuccess: {
          background: `rgba(16, 185, 129, 0.1)`,
          border: `1px solid rgba(16, 185, 129, 0.3)`,
        },
        standardError: {
          background: `rgba(239, 68, 68, 0.1)`,
          border: `1px solid rgba(239, 68, 68, 0.3)`,
        },
        standardWarning: {
          background: `rgba(245, 158, 11, 0.1)`,
          border: `1px solid rgba(245, 158, 11, 0.3)`,
        },
        standardInfo: {
          background: glassEffects.tinted.teal(0.1),
          border: `1px solid ${border.accent('teal', 0.3)}`,
        },
      },
    },

    // =========================================================================
    // CSS BASELINE (Global styles)
    // =========================================================================
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: `${neoGlassColors.neutral[600]} transparent`,
          '&::-webkit-scrollbar': {
            width: 8,
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: neoGlassColors.neutral[600],
            borderRadius: 4,
            '&:hover': {
              background: neoGlassColors.neutral[500],
            },
          },
        },
      },
    },
  };
};

// =============================================================================
// PALETTE CONFIGURATIONS
// =============================================================================

const lightMode: PaletteOptions = {
  primary: {
    main: neoGlassColors.teal.main,
    light: neoGlassColors.teal.light,
    dark: neoGlassColors.teal.dark,
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: neoGlassColors.violet.main,
    light: neoGlassColors.violet.light,
    dark: neoGlassColors.violet.dark,
    contrastText: '#FFFFFF',
  },
  error: {
    main: neoGlassColors.error,
  },
  warning: {
    main: neoGlassColors.warning,
  },
  success: {
    main: neoGlassColors.success,
  },
  info: {
    main: neoGlassColors.info,
  },
  text: {
    primary: neoGlassColors.neutral[900],
    secondary: neoGlassColors.neutral[600],
  },
  background: {
    default: neoGlassColors.background.light,
    paper: neoGlassColors.background.lightElevated,
  },
  divider: neoGlassColors.neutral[200],
};

const darkMode: PaletteOptions = {
  primary: {
    main: neoGlassColors.teal.main,
    light: neoGlassColors.teal.light,
    dark: neoGlassColors.teal.dark,
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: neoGlassColors.violet.main,
    light: neoGlassColors.violet.light,
    dark: neoGlassColors.violet.dark,
    contrastText: '#FFFFFF',
  },
  error: {
    main: neoGlassColors.error,
  },
  warning: {
    main: neoGlassColors.warning,
  },
  success: {
    main: neoGlassColors.success,
  },
  info: {
    main: neoGlassColors.info,
  },
  text: {
    primary: neoGlassColors.neutral[100],
    secondary: neoGlassColors.neutral[400],
  },
  background: {
    default: neoGlassColors.background.dark,
    paper: neoGlassColors.background.darkElevated,
  },
  divider: neoGlassColors.neutral[800],
};

// =============================================================================
// MAIN THEME GENERATOR
// =============================================================================

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light' ? lightMode : darkMode),
  },
  typography: {
    fontFamily: typography.fontFamily.primary,
    button: {
      textTransform: 'none',
      fontWeight: 500,
    },
    h1: {
      fontFamily: typography.fontFamily.display,
      fontWeight: 700,
      letterSpacing: typography.letterSpacing.tight,
    },
    h2: {
      fontFamily: typography.fontFamily.display,
      fontWeight: 700,
      letterSpacing: typography.letterSpacing.tight,
    },
    h3: {
      fontFamily: typography.fontFamily.display,
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.7,
    },
    body2: {
      lineHeight: 1.6,
    },
    caption: {
      letterSpacing: typography.letterSpacing.wide,
    },
    overline: {
      letterSpacing: typography.letterSpacing.wider,
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8, // Base border radius
  },
  components: createNeoGlassComponents(mode),
});

