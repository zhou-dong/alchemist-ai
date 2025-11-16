import type { StepStatus } from './types';

// Helper function to blend two colors
export const blendColors = (color1: string, color2: string, ratio: number): string => {
  const hex1 = color1.replace('#', '');
  const hex2 = color2.replace('#', '');

  const r1 = parseInt(hex1.substring(0, 2), 16);
  const g1 = parseInt(hex1.substring(2, 4), 16);
  const b1 = parseInt(hex1.substring(4, 6), 16);

  const r2 = parseInt(hex2.substring(0, 2), 16);
  const g2 = parseInt(hex2.substring(2, 4), 16);
  const b2 = parseInt(hex2.substring(4, 6), 16);

  const r = Math.round(r1 * (1 - ratio) + r2 * ratio);
  const g = Math.round(g1 * (1 - ratio) + g2 * ratio);
  const b = Math.round(b1 * (1 - ratio) + b2 * ratio);

  return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
};

// Real planet colors (based on actual appearance from space)
const REAL_PLANET_COLORS = {
  Mercury: '#B8A082', // Lighter gray-brown (rocky surface) - lightened for better visibility
  Venus: '#FFC649',   // Yellowish-white (thick cloud cover)
  Earth: '#7BB3FF',   // Light blue (oceans from space)
  Mars: '#C1440E',    // Reddish-orange (rust/iron oxide surface)
  Jupiter: '#C88A65', // Orange-brown (gas giant with storm bands)
  Saturn: '#FAD5A5',  // Pale yellow-gold (gas giant with rings)
  Uranus: '#4FD0E7',  // Cyan (methane atmosphere)
  Neptune: '#4166F5', // Deep blue (methane atmosphere)
};

// Theme gradient colors: #6366F1 (Indigo), #8B5CF6 (Purple), #F59E0B (Amber), #10B981 (Green)
const THEME_COLORS = {
  Indigo: '#6366F1',
  Purple: '#8B5CF6',
  Amber: '#F59E0B',
  Green: '#10B981',
};

// Get planet colors - blend real planet colors with modern AI theme colors
const getPlanetColors = (_isDarkMode: boolean) => {
  const themeBlendRatio = 0.1; // 10% theme color, 90% real color

  // Base blended colors
  // Mercury uses higher theme blend ratio for better visibility
  const baseColors = {
    Mercury: blendColors(REAL_PLANET_COLORS.Mercury, THEME_COLORS.Amber, themeBlendRatio),
    Venus: blendColors(REAL_PLANET_COLORS.Venus, THEME_COLORS.Amber, themeBlendRatio),
    Earth: blendColors(REAL_PLANET_COLORS.Earth, THEME_COLORS.Indigo, themeBlendRatio),
    Mars: blendColors(REAL_PLANET_COLORS.Mars, THEME_COLORS.Amber, themeBlendRatio),
    Jupiter: blendColors(REAL_PLANET_COLORS.Jupiter, THEME_COLORS.Amber, themeBlendRatio),
    Saturn: blendColors(REAL_PLANET_COLORS.Saturn, THEME_COLORS.Amber, themeBlendRatio),
    Uranus: blendColors(REAL_PLANET_COLORS.Uranus, THEME_COLORS.Green, themeBlendRatio),
    Neptune: blendColors(REAL_PLANET_COLORS.Neptune, THEME_COLORS.Green, themeBlendRatio),
  };

  // Return real planet colors without lightening
  return baseColors;
};

// Planet data type
export type PlanetData = {
  name: string;
  color: string;
  textColor: string;
  emojiColor: string;
  size: number;
  distance: number;
  speed: number;
  emoji: string;
};

// Get planet data - mapping each step to a planet in the solar system
// Distance is relative to real solar system distances (normalized for visualization)
// Real distances in AU: Mercury(0.39), Venus(0.72), Earth(1.0), Mars(1.52), 
// Jupiter(5.2), Saturn(9.5), Uranus(19.2), Neptune(30.1)
// 
// Speed is relative orbital angular velocity (faster for inner planets, slower for outer planets)
// Calculated as: speed = Earth_orbital_period / planet_orbital_period
// Real orbital periods (sidereal):
//   Mercury: 87.97 days  → speed = 365.26/87.97  = 4.15
//   Venus:   224.7 days  → speed = 365.26/224.7  = 1.63
//   Earth:   365.26 days → speed = 1.0 (baseline)
//   Mars:    686.98 days → speed = 365.26/686.98 = 0.532
//   Jupiter: 11.86 years = 4,329 days → speed = 365.26/4329 = 0.0844
//   Saturn:  29.46 years = 10,753 days → speed = 365.26/10753 = 0.0340
//   Uranus:  84.01 years = 30,664 days → speed = 365.26/30664 = 0.0119
//   Neptune: 164.79 years = 60,148 days → speed = 365.26/60148 = 0.00607
//
// Size is relative diameter compared to Earth (Earth = 1.0)
// Real planet diameters (NASA data):
//   Mercury: 0.38 × Earth → size = 0.38
//   Venus:   0.95 × Earth → size = 0.95
//   Earth:   1.00 × Earth → size = 1.0 (baseline)
//   Mars:    0.53 × Earth → size = 0.53
//   Jupiter: 11.19 × Earth → size = 11.19 (scaled down to 2.5 for visualization)
//   Saturn:  9.40 × Earth → size = 9.40 (scaled down to 2.2 for visualization)
//   Uranus:  4.04 × Earth → size = 4.04 (scaled down to 1.5 for visualization)
//   Neptune: 3.88 × Earth → size = 3.88 (scaled down to 1.4 for visualization)
// Note: Gas giants are scaled down proportionally to maintain visibility
export const getPlanetData = (isDarkMode: boolean): PlanetData[] => {
  const colors = getPlanetColors(isDarkMode);
  return [
    {
      name: 'Mercury',
      color: colors.Mercury,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 0.38, // Smallest planet (0.38 × Earth)
      distance: 1.0, // Closest to sun (normalized)
      speed: 4.15, // Fastest (orbital period 87.97 days)
      emoji: '☿️'
    },
    {
      name: 'Venus',
      color: colors.Venus,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 0.95, // Nearly Earth-sized (0.95 × Earth)
      distance: 1.2, // Second closest
      speed: 1.63, // Second fastest (orbital period 224.7 days)
      emoji: '♀️'
    },
    {
      name: 'Earth',
      color: colors.Earth,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 1.0, // Baseline size (1.0 × Earth)
      distance: 1.4, // Third
      speed: 1.0, // Baseline speed (orbital period 365.26 days)
      emoji: '🌍'
    },
    {
      name: 'Mars',
      color: colors.Mars,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 0.53, // Smaller than Earth (0.53 × Earth)
      distance: 1.7, // Fourth
      speed: 0.532, // Slower (orbital period 686.98 days)
      emoji: '♂️'
    },
    {
      name: 'Jupiter',
      color: colors.Jupiter,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 2.5, // Largest planet (11.19 × Earth, scaled to 2.5 for visualization)
      distance: 2.5, // Much farther out
      speed: 0.0844, // Much slower (orbital period 11.86 years)
      emoji: '♃'
    },
    {
      name: 'Saturn',
      color: colors.Saturn,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 2.2, // Second largest (9.40 × Earth, scaled to 2.2 for visualization)
      distance: 3.2, // Even farther
      speed: 0.0340, // Very slow (orbital period 29.46 years)
      emoji: '♄'
    },
    {
      name: 'Uranus',
      color: colors.Uranus,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 1.5, // Large (4.04 × Earth, scaled to 1.5 for visualization)
      distance: 4.0, // Outer planet
      speed: 0.0119, // Very slow (orbital period 84.01 years)
      emoji: '♅'
    },
    {
      name: 'Neptune',
      color: colors.Neptune,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 1.4, // Large (3.88 × Earth, scaled to 1.4 for visualization)
      distance: 4.8, // Farthest planet
      speed: 0.00607, // Slowest (orbital period 164.79 years)
      emoji: '♆'
    },
  ];
};

// Learning path item type
export type LearningPathItem = {
  title: string;
  description: string;
  path: string;
  status: StepStatus;
  planet: PlanetData;
};

// Total number of steps
export const TOTAL_STEPS = 8;

// Get learning path data with default statuses
export const getLearningPathData = (isDarkMode: boolean): LearningPathItem[] => {
  const planetData = getPlanetData(isDarkMode);
  return [
    {
      title: 'Functions as Decisions',
      description: 'Every decision is a function',
      path: '/alchemist-ai/functions-decisions',
      status: 'unlocked', // First step unlocked for new users
      planet: planetData[0] // Mercury
    },
    {
      title: 'Simple Functions',
      description: 'Build the simplest function: if...else',
      path: '/alchemist-ai/simple-functions',
      status: 'locked', // All other steps locked for new users
      planet: planetData[1] // Venus
    },
    {
      title: 'Multi-Input Functions',
      description: 'Multiple inputs, one output function',
      path: '/alchemist-ai/multi-input-functions',
      status: 'locked',
      planet: planetData[2] // Earth
    },
    {
      title: 'Math to Neurons',
      description: 'From mathematical functions to neural networks',
      path: '/alchemist-ai/math-to-neurons',
      status: 'locked',
      planet: planetData[3] // Mars
    },
    {
      title: 'Logistic Regression',
      description: 'Understanding binary classification',
      path: '/alchemist-ai/logistic-regression',
      status: 'locked',
      planet: planetData[4] // Jupiter
    },
    {
      title: 'Multi-Layer Network',
      description: 'Stacking layers for complex patterns',
      path: '/alchemist-ai/multi-layer-network',
      status: 'locked',
      planet: planetData[5] // Saturn
    },
    {
      title: 'Backpropagation',
      description: 'The algorithm that enables deep learning',
      path: '/alchemist-ai/backpropagation',
      status: 'locked',
      planet: planetData[6] // Uranus
    },
    {
      title: 'Neural Networks',
      description: 'Master the complete neural network architecture',
      path: '/alchemist-ai/neural-networks',
      status: 'locked',
      planet: planetData[7] // Neptune
    },
  ];
};

