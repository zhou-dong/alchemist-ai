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
export const getPlanetData = (isDarkMode: boolean): PlanetData[] => {
  const colors = getPlanetColors(isDarkMode);
  return [
    {
      name: 'Mercury',
      color: colors.Mercury,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 0.38,
      distance: 1.0,
      speed: 4.15,
      emoji: '☿️'
    },
    {
      name: 'Venus',
      color: colors.Venus,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 0.95,
      distance: 1.2,
      speed: 1.63,
      emoji: '♀️'
    },
    {
      name: 'Earth',
      color: colors.Earth,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 1.0,
      distance: 1.4,
      speed: 1.0,
      emoji: '🌍'
    },
    {
      name: 'Mars',
      color: colors.Mars,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 0.53,
      distance: 1.7,
      speed: 0.532,
      emoji: '♂️'
    },
    {
      name: 'Jupiter',
      color: colors.Jupiter,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 2.5,
      distance: 2.5,
      speed: 0.0844,
      emoji: '♃'
    },
    {
      name: 'Saturn',
      color: colors.Saturn,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 2.2,
      distance: 3.2,
      speed: 0.0340,
      emoji: '♄'
    },
    {
      name: 'Uranus',
      color: colors.Uranus,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 1.5,
      distance: 4.0,
      speed: 0.0119,
      emoji: '♅'
    },
    {
      name: 'Neptune',
      color: colors.Neptune,
      textColor: '#FFFFFF',
      emojiColor: '#FFFFFF',
      size: 1.4,
      distance: 4.8,
      speed: 0.00607,
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
      path: '/alchemist-sketches/functions-decisions',
      status: 'unlocked',
      planet: planetData[0]
    },
    {
      title: 'Simple Functions',
      description: 'Build the simplest function: if...else',
      path: '/alchemist-sketches/simple-functions',
      status: 'locked',
      planet: planetData[1]
    },
    {
      title: 'Multi-Input Functions',
      description: 'Multiple inputs, one output function',
      path: '/alchemist-sketches/multi-input-functions',
      status: 'locked',
      planet: planetData[2]
    },
    {
      title: 'Math to Neurons',
      description: 'From mathematical functions to neural networks',
      path: '/alchemist-sketches/math-to-neurons',
      status: 'locked',
      planet: planetData[3]
    },
    {
      title: 'Logistic Regression',
      description: 'Understanding binary classification',
      path: '/alchemist-sketches/logistic-regression',
      status: 'locked',
      planet: planetData[4]
    },
    {
      title: 'Multi-Layer Network',
      description: 'Stacking layers for complex patterns',
      path: '/alchemist-sketches/multi-layer-network',
      status: 'locked',
      planet: planetData[5]
    },
    {
      title: 'Backpropagation',
      description: 'The algorithm that enables deep learning',
      path: '/alchemist-sketches/backpropagation',
      status: 'locked',
      planet: planetData[6]
    },
    {
      title: 'Neural Networks',
      description: 'Master the complete neural network architecture',
      path: '/alchemist-sketches/neural-networks',
      status: 'locked',
      planet: planetData[7]
    },
  ];
};

