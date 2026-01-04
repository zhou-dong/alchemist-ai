/**
 * Neo-Glass Styled Components
 * Reusable glassmorphism + glow components for the Sketch Atlas design system
 */

import { Box, Button, IconButton, Card, Typography, keyframes } from '@mui/material';
import { styled } from '@mui/material/styles';
import { neoGlassTokens } from '../../theme/themes/neo-glass/neoGlassTokens';

const { colors, glass, glow, animations, spacing, typography } = neoGlassTokens;

// =============================================================================
// KEYFRAME ANIMATIONS
// =============================================================================

export const breathe = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

export const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`;

export const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

// =============================================================================
// GLASS CARD
// =============================================================================

export interface GlassCardProps {
  intensity?: 'subtle' | 'light' | 'medium' | 'strong';
  accent?: 'teal' | 'violet' | 'coral' | 'none';
  glow?: boolean;
}

export const GlassCard = styled(Card, {
  shouldForwardProp: (prop) => !['intensity', 'accent', 'glow'].includes(prop as string),
})<GlassCardProps>(({ intensity = 'medium', accent = 'none', glow: hasGlow = false }) => ({
  background: glass.dark[intensity],
  backdropFilter: glass.blur.md,
  border: `1px solid ${accent !== 'none' 
    ? glass.border.dark.accent(accent, 0.2) 
    : glass.border.dark.light}`,
  borderRadius: spacing.borderRadius.lg,
  transition: animations.transition.normal,
  boxShadow: hasGlow && accent !== 'none' ? glow[accent].subtle : 'none',
  overflow: 'visible',
  '&:hover': hasGlow && accent !== 'none' ? {
    boxShadow: glow[accent].medium,
    borderColor: glass.border.dark.accent(accent, 0.35),
  } : {},
}));

// =============================================================================
// GLASS PANEL (No elevation, for subtle sections)
// =============================================================================

export const GlassPanel = styled(Box, {
  shouldForwardProp: (prop) => !['intensity'].includes(prop as string),
})<{ intensity?: 'subtle' | 'light' | 'medium' | 'strong' }>(({ intensity = 'light' }) => ({
  background: glass.dark[intensity],
  backdropFilter: glass.blur.sm,
  border: `1px solid ${glass.border.dark.subtle}`,
  borderRadius: spacing.borderRadius.md,
  transition: animations.transition.normal,
}));

// =============================================================================
// GLASS ICON BUTTON
// =============================================================================

export interface NeoGlassIconButtonProps {
  accent?: 'teal' | 'violet' | 'coral';
  size?: 'small' | 'medium' | 'large';
}

const sizeMap = {
  small: { width: 40, height: 40, iconSize: '1.1rem' },
  medium: { width: 48, height: 48, iconSize: '1.25rem' },
  large: { width: 56, height: 56, iconSize: '1.5rem' },
};

export const NeoGlassIconButton = styled(IconButton, {
  shouldForwardProp: (prop) => !['accent', 'size'].includes(prop as string),
})<NeoGlassIconButtonProps>(({ accent = 'teal', size = 'medium' }) => {
  const dimensions = sizeMap[size];
  return {
    width: dimensions.width,
    height: dimensions.height,
    background: glass.tinted[accent](0.08),
    backdropFilter: glass.blur.md,
    border: `1px solid ${glass.border.dark.accent(accent, 0.3)}`,
    color: colors[accent].main,
    transition: animations.transition.slow,
    '& svg': {
      fontSize: dimensions.iconSize,
    },
    '&:hover': {
      background: glass.tinted[accent](0.15),
      borderColor: glass.border.dark.accent(accent, 0.5),
      transform: 'scale(1.05)',
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
    '&:disabled': {
      opacity: 0.4,
      background: glass.dark.subtle,
      borderColor: glass.border.dark.subtle,
      color: colors.neutral[500],
    },
  };
});

// =============================================================================
// GLOW BUTTON (Solid pill with glow effect)
// =============================================================================

export interface GlowButtonProps {
  accent?: 'teal' | 'violet' | 'coral';
  glowIntensity?: 'subtle' | 'medium' | 'strong';
}

export const GlowButton = styled(Button, {
  shouldForwardProp: (prop) => !['accent', 'glowIntensity'].includes(prop as string),
})<GlowButtonProps>(({ accent = 'teal', glowIntensity = 'medium' }) => ({
  background: colors[accent].main,
  color: '#fff',
  borderRadius: spacing.borderRadius.full,
  padding: '12px 32px',
  fontWeight: 500,
  fontSize: '0.95rem',
  letterSpacing: typography.letterSpacing.wide,
  textTransform: 'uppercase',
  boxShadow: glow[accent][glowIntensity],
  transition: animations.transition.slow,
  border: 'none',
  '&:hover': {
    background: colors[accent].dark,
    transform: 'translateY(-2px)',
    boxShadow: glow[accent].strong,
  },
  '&:active': {
    transform: 'translateY(0)',
    boxShadow: glow[accent].subtle,
  },
  '&:disabled': {
    opacity: 0.5,
    background: colors.neutral[600],
    boxShadow: 'none',
    transform: 'none',
  },
}));

// =============================================================================
// GHOST BUTTON (Outline style with glow on hover)
// =============================================================================

export interface GhostButtonProps {
  accent?: 'teal' | 'violet' | 'coral';
}

export const GhostButton = styled(Button, {
  shouldForwardProp: (prop) => !['accent'].includes(prop as string),
})<GhostButtonProps>(({ accent = 'teal' }) => ({
  background: 'transparent',
  color: colors[accent].main,
  borderRadius: spacing.borderRadius.full,
  padding: '10px 28px',
  fontWeight: 500,
  fontSize: '0.9rem',
  letterSpacing: typography.letterSpacing.wide,
  textTransform: 'uppercase',
  border: `1px solid ${glass.border.dark.accent(accent, 0.4)}`,
  transition: animations.transition.slow,
  '&:hover': {
    background: glass.tinted[accent](0.1),
    borderColor: colors[accent].main,
    boxShadow: glow[accent].subtle,
  },
  '&:active': {
    background: glass.tinted[accent](0.15),
  },
  '&:disabled': {
    opacity: 0.4,
    borderColor: glass.border.dark.subtle,
    color: colors.neutral[500],
  },
}));

// =============================================================================
// GLOW TEXT (Text with subtle glow effect)
// =============================================================================

export interface GlowTextProps {
  accent?: 'teal' | 'violet' | 'coral';
}

export const GlowText = styled(Typography, {
  shouldForwardProp: (prop) => !['accent'].includes(prop as string),
})<GlowTextProps>(({ accent = 'teal' }) => ({
  color: colors[accent].main,
  textShadow: `0 0 20px ${colors[accent].main}40, 0 0 40px ${colors[accent].main}20`,
}));

// =============================================================================
// ANIMATED CONTAINER (For staggered entrance animations)
// =============================================================================

export interface AnimatedBoxProps {
  animation?: 'fadeIn' | 'slideUp' | 'slideDown' | 'scaleIn';
  delay?: number;
  duration?: number;
}

const animationMap = {
  fadeIn,
  slideUp,
  slideDown,
  scaleIn,
};

export const AnimatedBox = styled(Box, {
  shouldForwardProp: (prop) => !['animation', 'delay', 'duration'].includes(prop as string),
})<AnimatedBoxProps>(({ animation = 'fadeIn', delay = 0, duration = 0.6 }) => ({
  animation: `${animationMap[animation]} ${duration}s ${animations.easing.smooth} ${delay}s both`,
}));

// =============================================================================
// GRADIENT BORDER BOX
// =============================================================================

export interface GradientBorderBoxProps {
  borderWidth?: number;
  gradientColors?: string[];
}

export const GradientBorderBox = styled(Box, {
  shouldForwardProp: (prop) => !['borderWidth', 'gradientColors'].includes(prop as string),
})<GradientBorderBoxProps>(({ 
  borderWidth = 1, 
  gradientColors = [colors.teal.main, colors.violet.main] 
}) => ({
  position: 'relative',
  background: colors.background.darkElevated,
  borderRadius: spacing.borderRadius.lg,
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    padding: borderWidth,
    background: `linear-gradient(135deg, ${gradientColors.join(', ')})`,
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    pointerEvents: 'none',
  },
}));

// =============================================================================
// SHIMMER SKELETON (Loading placeholder)
// =============================================================================

export const ShimmerBox = styled(Box)(() => ({
  background: `linear-gradient(
    90deg, 
    ${glass.dark.subtle} 0%, 
    ${glass.dark.medium} 50%, 
    ${glass.dark.subtle} 100%
  )`,
  backgroundSize: '200% 100%',
  animation: `${shimmer} 1.5s ease-in-out infinite`,
  borderRadius: spacing.borderRadius.md,
}));

// =============================================================================
// EXPORTS
// =============================================================================

export const neoGlassAnimations = {
  breathe,
  fadeIn,
  slideUp,
  slideDown,
  scaleIn,
  pulse,
  shimmer,
};

