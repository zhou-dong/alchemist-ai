/**
 * GlowOrbs - Ambient background glow effects
 * Creates the floating, breathing orb backgrounds that define the Neo-Glass aesthetic
 */

import { Box } from '@mui/material';
import { neoGlassTokens } from '../../theme/themes/neo-glass/neoGlassTokens';
import { breathe } from './NeoGlassComponents';

const { colors } = neoGlassTokens;

// =============================================================================
// TYPES
// =============================================================================

export type OrbColor = 'teal' | 'violet' | 'coral';
export type OrbPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'custom';

export interface OrbConfig {
  color: OrbColor;
  position: OrbPosition;
  size?: number;
  blur?: number;
  opacity?: number;
  animationDuration?: number;
  animationDelay?: number;
  customPosition?: { top?: string; right?: string; bottom?: string; left?: string };
}

export interface GlowOrbsProps {
  orbs?: OrbConfig[];
  preset?: 'default' | 'minimal' | 'vibrant' | 'teal-violet' | 'single-teal' | 'single-violet';
}

// =============================================================================
// POSITION MAPPING
// =============================================================================

const positionMap: Record<OrbPosition, { top?: string; right?: string; bottom?: string; left?: string }> = {
  'top-left': { top: '5%', left: '5%' },
  'top-right': { top: '10%', right: '5%' },
  'bottom-left': { bottom: '10%', left: '10%' },
  'bottom-right': { bottom: '5%', right: '10%' },
  'center': { top: '50%', left: '50%' },
  'custom': {},
};

// =============================================================================
// COLOR MAPPING
// =============================================================================

const colorMap: Record<OrbColor, string> = {
  teal: colors.teal.main,
  violet: colors.violet.main,
  coral: colors.coral.main,
};

// =============================================================================
// PRESET CONFIGURATIONS
// =============================================================================

const presets: Record<NonNullable<GlowOrbsProps['preset']>, OrbConfig[]> = {
  default: [
    { color: 'teal', position: 'top-right', size: 400, opacity: 0.15, animationDuration: 8 },
    { color: 'violet', position: 'bottom-left', size: 300, opacity: 0.1, animationDuration: 10, animationDelay: 3 },
  ],
  minimal: [
    { color: 'teal', position: 'top-right', size: 350, opacity: 0.1, animationDuration: 10 },
  ],
  vibrant: [
    { color: 'teal', position: 'top-right', size: 450, opacity: 0.2, animationDuration: 7 },
    { color: 'violet', position: 'bottom-left', size: 350, opacity: 0.15, animationDuration: 9, animationDelay: 2 },
    { color: 'coral', position: 'top-left', size: 250, opacity: 0.1, animationDuration: 11, animationDelay: 4 },
  ],
  'teal-violet': [
    { color: 'teal', position: 'top-right', size: 400, opacity: 0.15, animationDuration: 8 },
    { color: 'violet', position: 'bottom-left', size: 350, opacity: 0.12, animationDuration: 10, animationDelay: 2 },
  ],
  'single-teal': [
    { color: 'teal', position: 'top-right', size: 500, opacity: 0.15, animationDuration: 8 },
  ],
  'single-violet': [
    { color: 'violet', position: 'bottom-left', size: 450, opacity: 0.12, animationDuration: 9 },
  ],
};

// =============================================================================
// SINGLE ORB COMPONENT
// =============================================================================

interface SingleOrbProps {
  config: OrbConfig;
}

const SingleOrb = ({ config }: SingleOrbProps) => {
  const {
    color,
    position,
    size = 400,
    blur = 60,
    opacity = 0.15,
    animationDuration = 8,
    animationDelay = 0,
    customPosition,
  } = config;

  const positionStyles = position === 'custom' && customPosition
    ? customPosition
    : positionMap[position];

  const colorValue = colorMap[color];

  // Extract RGB values for rgba
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : { r: 0, g: 191, b: 165 };
  };

  const rgb = hexToRgb(colorValue);

  return (
    <Box
      sx={{
        position: 'absolute',
        ...positionStyles,
        width: size,
        height: size,
        borderRadius: '50%',
        background: `radial-gradient(circle, rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity}) 0%, transparent 70%)`,
        filter: `blur(${blur}px)`,
        animation: `${breathe} ${animationDuration}s ease-in-out infinite`,
        animationDelay: `${animationDelay}s`,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

// =============================================================================
// MAIN COMPONENT
// =============================================================================

export const GlowOrbs = ({ orbs, preset = 'default' }: GlowOrbsProps) => {
  // Use custom orbs if provided, otherwise use preset
  const orbConfigs = orbs || presets[preset];

  return (
    <>
      {orbConfigs.map((config, index) => (
        <SingleOrb key={`orb-${index}`} config={config} />
      ))}
    </>
  );
};

// =============================================================================
// CONVENIENCE EXPORTS
// =============================================================================

// Pre-configured orb components for quick use
export const TealOrb = (props: Partial<OrbConfig>) => (
  <SingleOrb config={{ color: 'teal', position: 'top-right', ...props }} />
);

export const VioletOrb = (props: Partial<OrbConfig>) => (
  <SingleOrb config={{ color: 'violet', position: 'bottom-left', ...props }} />
);

export const CoralOrb = (props: Partial<OrbConfig>) => (
  <SingleOrb config={{ color: 'coral', position: 'top-left', ...props }} />
);

export default GlowOrbs;

