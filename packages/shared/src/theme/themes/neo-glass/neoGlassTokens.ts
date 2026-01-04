/**
 * Neo-Glass Design Tokens
 * 
 * Design tokens (colors, effects, animations, presets) for the Neo-Glass aesthetic.
 * These are the raw building blocks used by:
 * - neoGlassTheme.ts (MUI theme definition)
 * - Custom components that need Neo-Glass styling
 * 
 * Inspired by Linear, Vercel, Apple Vision Pro
 */

// =============================================================================
// COLOR TOKENS
// =============================================================================

export const neoGlassColors = {
  // Primary accent - Teal (main brand color)
  teal: {
    main: '#00BFA5',
    light: '#4DD0B8',
    dark: '#00A896',
    muted: '#00BFA5',
  },

  // Secondary accent - Electric Violet
  violet: {
    main: '#8B5CF6',
    light: '#A78BFA',
    dark: '#7C3AED',
    muted: '#8B5CF6',
  },

  // Tertiary accent - Coral (for warnings, highlights)
  coral: {
    main: '#FF6B6B',
    light: '#FF8A8A',
    dark: '#E55555',
    muted: '#FF6B6B',
  },

  // Neutral palette
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

  // Semantic colors
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Background colors
  background: {
    dark: '#0A0A0B',
    darkElevated: '#121214',
    darkSurface: '#1A1A1D',
    light: '#FAFAFA',
    lightElevated: '#FFFFFF',
    lightSurface: '#F4F4F5',
  },
} as const;

// =============================================================================
// GLASS EFFECT TOKENS
// =============================================================================

export const glassEffects = {
  // Backdrop blur levels
  blur: {
    sm: 'blur(8px)',
    md: 'blur(12px)',
    lg: 'blur(16px)',
    xl: 'blur(24px)',
  },

  // Glass backgrounds (for dark mode)
  dark: {
    subtle: 'rgba(255, 255, 255, 0.03)',
    light: 'rgba(255, 255, 255, 0.05)',
    medium: 'rgba(255, 255, 255, 0.08)',
    strong: 'rgba(255, 255, 255, 0.12)',
  },

  // Glass backgrounds (for light mode)
  light: {
    subtle: 'rgba(0, 0, 0, 0.02)',
    light: 'rgba(0, 0, 0, 0.04)',
    medium: 'rgba(0, 0, 0, 0.06)',
    strong: 'rgba(0, 0, 0, 0.08)',
  },

  // Tinted glass (accent colored)
  tinted: {
    teal: (opacity: number = 0.08) => `rgba(0, 191, 165, ${opacity})`,
    violet: (opacity: number = 0.08) => `rgba(139, 92, 246, ${opacity})`,
    coral: (opacity: number = 0.08) => `rgba(255, 107, 107, ${opacity})`,
  },

  // Border colors
  border: {
    dark: {
      subtle: 'rgba(255, 255, 255, 0.06)',
      light: 'rgba(255, 255, 255, 0.1)',
      medium: 'rgba(255, 255, 255, 0.15)',
      accent: (color: string, opacity: number = 0.3) => {
        const colorMap: Record<string, string> = {
          teal: `rgba(0, 191, 165, ${opacity})`,
          violet: `rgba(139, 92, 246, ${opacity})`,
          coral: `rgba(255, 107, 107, ${opacity})`,
        };
        return colorMap[color] || colorMap.teal;
      },
    },
    light: {
      subtle: 'rgba(0, 0, 0, 0.04)',
      light: 'rgba(0, 0, 0, 0.08)',
      medium: 'rgba(0, 0, 0, 0.12)',
      accent: (color: string, opacity: number = 0.2) => {
        const colorMap: Record<string, string> = {
          teal: `rgba(0, 191, 165, ${opacity})`,
          violet: `rgba(139, 92, 246, ${opacity})`,
          coral: `rgba(255, 107, 107, ${opacity})`,
        };
        return colorMap[color] || colorMap.teal;
      },
    },
  },
} as const;

// =============================================================================
// GLOW & SHADOW TOKENS
// =============================================================================

export const glowEffects = {
  // Glow shadows for buttons/elements
  teal: {
    subtle: '0 4px 12px rgba(0, 191, 165, 0.15)',
    medium: '0 4px 20px rgba(0, 191, 165, 0.25)',
    strong: '0 6px 30px rgba(0, 191, 165, 0.35)',
    intense: '0 8px 40px rgba(0, 191, 165, 0.45)',
  },

  violet: {
    subtle: '0 4px 12px rgba(139, 92, 246, 0.15)',
    medium: '0 4px 20px rgba(139, 92, 246, 0.25)',
    strong: '0 6px 30px rgba(139, 92, 246, 0.35)',
    intense: '0 8px 40px rgba(139, 92, 246, 0.45)',
  },

  coral: {
    subtle: '0 4px 12px rgba(255, 107, 107, 0.15)',
    medium: '0 4px 20px rgba(255, 107, 107, 0.25)',
    strong: '0 6px 30px rgba(255, 107, 107, 0.35)',
    intense: '0 8px 40px rgba(255, 107, 107, 0.45)',
  },

  // Neutral shadows
  neutral: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.1)',
    md: '0 4px 16px rgba(0, 0, 0, 0.12)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.16)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.2)',
  },

  // Ambient orb shadows (for background effects)
  orb: {
    teal: 'radial-gradient(circle, rgba(0, 191, 165, 0.15) 0%, transparent 70%)',
    violet: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
    coral: 'radial-gradient(circle, rgba(255, 107, 107, 0.10) 0%, transparent 70%)',
  },
} as const;

// =============================================================================
// ANIMATION TOKENS
// =============================================================================

export const animations = {
  // Timing functions
  easing: {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    gentle: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  },

  // Duration tokens
  duration: {
    instant: '0.1s',
    fast: '0.2s',
    normal: '0.3s',
    slow: '0.4s',
    slower: '0.6s',
    leisurely: '0.8s',
  },

  // Common transition presets
  transition: {
    fast: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    normal: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },

  // Stagger delays for sequential animations
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
} as const;

// =============================================================================
// TYPOGRAPHY TOKENS
// =============================================================================

export const typography = {
  // Recommended modern font stacks
  fontFamily: {
    // Primary: Clean, modern sans-serif
    primary: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    // Mono: For code and technical content
    mono: "'JetBrains Mono', 'Fira Code', 'SF Mono', monospace",
    // Display: For large headings
    display: "'Outfit', 'Plus Jakarta Sans', sans-serif",
  },

  // Letter spacing for different contexts
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.05em',
    wider: '0.1em',
    widest: '0.15em',
  },
} as const;

// =============================================================================
// SPACING & LAYOUT TOKENS
// =============================================================================

export const spacing = {
  borderRadius: {
    none: '0',
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '9999px', // For pills
  },
} as const;

// =============================================================================
// PRESET STYLES (Ready-to-use sx objects)
// =============================================================================

export const neoGlassPresets = {
  // Glass card preset
  glassCard: {
    background: glassEffects.dark.medium,
    backdropFilter: glassEffects.blur.md,
    border: `1px solid ${glassEffects.border.dark.light}`,
    borderRadius: spacing.borderRadius.lg,
    transition: animations.transition.normal,
  },

  // Glass icon button preset
  glassIconButton: (accentColor: 'teal' | 'violet' | 'coral' = 'teal') => ({
    background: glassEffects.tinted[accentColor](0.08),
    backdropFilter: glassEffects.blur.md,
    border: `1px solid ${glassEffects.border.dark.accent(accentColor, 0.3)}`,
    color: neoGlassColors[accentColor].main,
    transition: animations.transition.slow,
    '&:hover': {
      background: glassEffects.tinted[accentColor](0.15),
      transform: 'scale(1.05)',
    },
  }),

  // Glow button preset (solid with glow)
  glowButton: (accentColor: 'teal' | 'violet' | 'coral' = 'teal') => ({
    background: neoGlassColors[accentColor].main,
    color: '#fff',
    borderRadius: spacing.borderRadius.full,
    fontWeight: 500,
    letterSpacing: typography.letterSpacing.wide,
    textTransform: 'uppercase' as const,
    boxShadow: glowEffects[accentColor].medium,
    transition: animations.transition.slow,
    '&:hover': {
      background: neoGlassColors[accentColor].dark,
      transform: 'translateY(-2px)',
      boxShadow: glowEffects[accentColor].strong,
    },
  }),

  // Breathing orb preset
  breathingOrb: (accentColor: 'teal' | 'violet' | 'coral' = 'teal', size: number = 400) => ({
    position: 'absolute' as const,
    width: size,
    height: size,
    borderRadius: '50%',
    background: glowEffects.orb[accentColor],
    filter: 'blur(60px)',
    pointerEvents: 'none' as const,
  }),
} as const;

// =============================================================================
// COMBINED EXPORT
// =============================================================================

export const neoGlassTokens = {
  colors: neoGlassColors,
  glass: glassEffects,
  glow: glowEffects,
  animations,
  typography,
  spacing,
  presets: neoGlassPresets,
} as const;

export default neoGlassTokens;

