// Layout components
export { Header } from './layout/Header';

// Common components
export { Logo } from './common/Logo';
export { Progress } from './common/Progress';
export { Starfield } from './common/Starfield';
export { FloatingParticles } from './common/FloatingParticles';
export { TypingText } from './common/TypingText';
export { VoiceNarration } from './common/VoiceNarration';
export type { VoiceNarrationProps } from './common/VoiceNarration';

// Neo-Glass Components
export {
  // Styled Components
  GlassCard,
  GlassPanel,
  NeoGlassIconButton,
  GlowButton,
  GhostButton,
  GlowText,
  AnimatedBox,
  GradientBorderBox,
  ShimmerBox,
  // Keyframe animations (for MUI sx prop)
  breathe,
  fadeIn,
  slideUp,
  slideDown,
  scaleIn,
  pulse,
  shimmer,
  neoGlassAnimations,
} from './common/NeoGlassComponents';
export type {
  GlassCardProps,
  NeoGlassIconButtonProps,
  GlowButtonProps,
  GhostButtonProps,
  GlowTextProps,
  AnimatedBoxProps,
  GradientBorderBoxProps,
} from './common/NeoGlassComponents';

// Glow Orbs (Background effects)
export {
  GlowOrbs,
  TealOrb,
  VioletOrb,
  CoralOrb,
} from './common/GlowOrbs';
export type { GlowOrbsProps, OrbConfig, OrbColor, OrbPosition } from './common/GlowOrbs';
