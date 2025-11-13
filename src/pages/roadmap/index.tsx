import {
  Box,
  Fade,
} from '@mui/material';
import { PlayArrow, Pause, CenterFocusStrong } from '@mui/icons-material';
import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientTitle, GlassIconButton } from '../../theme/theme';
import { useColorMode } from '../../theme/ColorModeContext';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { Starfield } from './Starfield';

// 3D Spherical Roadmap Style using Three.js
// Steps arranged on a sphere in 3D space
// Creates an immersive 3D learning journey

const totalSteps = 8;

// Center sphere radius (the main roadmap globe - represents the Sun)
const CENTER_SPHERE_RADIUS = 3; // Three.js units (scaled from 300px)

// Base orbit radius (minimum distance from sun)
const BASE_ORBIT_RADIUS = CENTER_SPHERE_RADIUS + 3; // Closest planet starts here (increased from +2)

// Step sphere size (base size, will be scaled by planet)
const BASE_SPHERE_RADIUS = 0.9; // Scaled from 90px

// Helper function to blend two colors
const blendColors = (color1: string, color2: string, ratio: number): string => {
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
  Mercury: '#8C7853', // Gray-brown (rocky surface)
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
// 70% real color + 30% theme color for elegant hybrid
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

// Planet data - mapping each step to a planet in the solar system
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
const getPlanetData = (isDarkMode: boolean) => {
  const colors = getPlanetColors(isDarkMode);
  return [
    {
      name: 'Mercury',
      color: colors.Mercury,
      textColor: '#00D4FF', // Bright cyan - contrasts with gray-brown
      emojiColor: '#FFD700', // Gold - contrasts with gray-brown
      size: 0.38, // Smallest planet (0.38 × Earth)
      distance: 1.0, // Closest to sun (normalized)
      speed: 4.15, // Fastest (orbital period 87.97 days)
      emoji: '☿️'
    },
    {
      name: 'Venus',
      color: colors.Venus,
      textColor: '#8B00FF', // Purple - contrasts with yellowish-white
      emojiColor: '#00FF88', // Green - contrasts with yellowish-white
      size: 0.95, // Nearly Earth-sized (0.95 × Earth)
      distance: 1.2, // Second closest
      speed: 1.63, // Second fastest (orbital period 224.7 days)
      emoji: '♀️'
    },
    {
      name: 'Earth',
      color: colors.Earth,
      textColor: '#FF6B35', // Orange-red - contrasts with blue
      emojiColor: '#FFD93D', // Yellow - contrasts with blue
      size: 1.0, // Baseline size (1.0 × Earth)
      distance: 1.4, // Third
      speed: 1.0, // Baseline speed (orbital period 365.26 days)
      emoji: '🌍'
    },
    {
      name: 'Mars',
      color: colors.Mars,
      textColor: '#00E5FF', // Cyan - contrasts with red
      emojiColor: '#90EE90', // Light green - contrasts with red
      size: 0.53, // Smaller than Earth (0.53 × Earth)
      distance: 1.7, // Fourth
      speed: 0.532, // Slower (orbital period 686.98 days)
      emoji: '♂️'
    },
    {
      name: 'Jupiter',
      color: colors.Jupiter,
      textColor: '#4169E1', // Royal blue - contrasts with orange-brown
      emojiColor: '#FF1493', // Deep pink - contrasts with orange-brown
      size: 2.5, // Largest planet (11.19 × Earth, scaled to 2.5 for visualization)
      distance: 2.5, // Much farther out
      speed: 0.0844, // Much slower (orbital period 11.86 years)
      emoji: '♃'
    },
    {
      name: 'Saturn',
      color: colors.Saturn,
      textColor: '#9370DB', // Medium purple - contrasts with yellow-gold
      emojiColor: '#00CED1', // Dark turquoise - contrasts with yellow-gold
      size: 2.2, // Second largest (9.40 × Earth, scaled to 2.2 for visualization)
      distance: 3.2, // Even farther
      speed: 0.0340, // Very slow (orbital period 29.46 years)
      emoji: '♄'
    },
    {
      name: 'Uranus',
      color: colors.Uranus,
      textColor: '#FF4500', // Orange-red - contrasts with cyan
      emojiColor: '#FFD700', // Gold - contrasts with cyan
      size: 1.5, // Large (4.04 × Earth, scaled to 1.5 for visualization)
      distance: 4.0, // Outer planet
      speed: 0.0119, // Very slow (orbital period 84.01 years)
      emoji: '♅'
    },
    {
      name: 'Neptune',
      color: colors.Neptune,
      textColor: '#FFA500', // Orange - contrasts with deep blue
      emojiColor: '#FF69B4', // Hot pink - contrasts with deep blue
      size: 1.4, // Large (3.88 × Earth, scaled to 1.4 for visualization)
      distance: 4.8, // Farthest planet
      speed: 0.00607, // Slowest (orbital period 164.79 years)
      emoji: '♆'
    },
  ];
};

type LearningPathItem = {
  title: string;
  description: string;
  path: string;
  unlocked: boolean;
  planet: ReturnType<typeof getPlanetData>[0];
};

const getLearningPathData = (isDarkMode: boolean): LearningPathItem[] => {
  const planetData = getPlanetData(isDarkMode);
  return [
    {
      title: 'Functions as Decisions',
      description: 'Every decision is a function',
      path: '/alchemist-ai/functions-decisions',
      unlocked: true,
      planet: planetData[0] // Mercury
    },
    {
      title: 'Simple Functions',
      description: 'Build the simplest function: if...else',
      path: '/alchemist-ai/simple-functions',
      unlocked: false,
      planet: planetData[1] // Venus
    },
    {
      title: 'Multi-Input Functions',
      description: 'Multiple inputs, one output function',
      path: '/alchemist-ai/multi-input-functions',
      unlocked: false,
      planet: planetData[2] // Earth
    },
    {
      title: 'Math to Neurons',
      description: 'From mathematical functions to neural networks',
      path: '/alchemist-ai/math-to-neurons',
      unlocked: false,
      planet: planetData[3] // Mars
    },
    {
      title: 'Logistic Regression',
      description: 'Understanding binary classification',
      path: '/alchemist-ai/logistic-regression',
      unlocked: false,
      planet: planetData[4] // Jupiter
    },
    {
      title: 'Multi-Layer Network',
      description: 'Stacking layers for complex patterns',
      path: '/alchemist-ai/multi-layer-network',
      unlocked: false,
      planet: planetData[5] // Saturn
    },
    {
      title: 'Backpropagation',
      description: 'The algorithm that enables deep learning',
      path: '/alchemist-ai/backpropagation',
      unlocked: false,
      planet: planetData[6] // Uranus
    },
    {
      title: 'Neural Networks',
      description: 'Master the complete neural network architecture',
      path: '/alchemist-ai/neural-networks',
      unlocked: false,
      planet: planetData[7] // Neptune
    },
  ];
};

// Orbit ring component - draws a circular orbit path for each planet
function OrbitRing({
  radius,
  color,
  opacity,
  isDarkMode
}: {
  radius: number;
  color: string;
  opacity: number;
  isDarkMode: boolean;
}) {
  // Use ring geometry with very thin thickness to create orbit line
  const innerRadius = radius - 0.02;
  const outerRadius = radius + 0.02;

  // Adjust opacity based on theme - higher for light mode, lower for dark mode
  const themeAdjustedOpacity = isDarkMode ? opacity : opacity * 2.5;

  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}> {/* Rotate to lie flat in X-Z plane */}
      <ringGeometry args={[innerRadius, outerRadius, 64]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={themeAdjustedOpacity}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Create elegant gradient texture with planet name and emoji mapped directly on sphere surface
const createGradientTexture = (baseColor: string, planetName: string, emoji: string, textColor: string, emojiColor: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  if (!ctx) return null;

  // Create subtle radial gradient from center to edge
  const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);

  // Elegant gradient using theme colors with subtle blending
  // Start with base color, blend through theme colors, return to base
  gradient.addColorStop(0, baseColor); // Center: planet color
  gradient.addColorStop(0.4, blendColors(baseColor, '#8B5CF6', 0.3)); // Subtle purple blend
  gradient.addColorStop(0.7, blendColors(baseColor, '#F59E0B', 0.2)); // Subtle amber blend
  gradient.addColorStop(1, baseColor); // Edge: planet color

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);

  // Draw emoji on the texture at the very top of sphere
  ctx.font = '48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';

  // Draw emoji with outline for better visibility
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
  ctx.lineWidth = 8;
  ctx.strokeText(emoji, 256, 20); // Very top of texture = very top of sphere
  // Use brightened planet color for emoji
  ctx.fillStyle = emojiColor;
  ctx.fillText(emoji, 256, 20);

  // Draw planet name on the texture below emoji, at very top of sphere
  ctx.font = 'bold 48px Arial';
  ctx.textBaseline = 'top';

  // Draw text with outline for better visibility
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.9)';
  ctx.lineWidth = 8;
  ctx.strokeText(planetName, 256, 80); // Very top of texture = very top of sphere
  // Use planet color (slightly brightened) for text
  ctx.fillStyle = textColor;
  ctx.fillText(planetName, 256, 80);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
};

// Planet sphere component - solid sphere with planet color and gradient surface
function PlanetSphere({
  radius,
  color,
  opacity,
  name,
  emoji,
  textColor,
  emojiColor,
  onPointerEnter,
  onPointerLeave,
  onClick
}: {
  radius: number;
  color: string;
  opacity: number;
  name: string;
  emoji: string;
  textColor: string;
  emojiColor: string;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
  onClick?: () => void;
}) {
  const gradientTexture = useMemo(() => createGradientTexture(color, name, emoji, textColor, emojiColor), [color, name, emoji, textColor, emojiColor]);

  return (
    <mesh
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onClick={onClick}
    >
      <sphereGeometry args={[radius, 64, 64]} />
      <meshStandardMaterial
        color={color}
        map={gradientTexture || undefined}
        transparent
        opacity={opacity}
        metalness={0.2}
        roughness={0.3}
        side={THREE.DoubleSide}
        flatShading={false}
      />
    </mesh>
  );
}


// Step sphere component
function StepSphere({
  item,
  initialAngle,
  orbitDistance,
  isActive,
  isUnlocked,
  isHovered,
  onHover,
  onClick,
  isRotationEnabled,
}: {
  item: LearningPathItem;
  initialAngle: number;
  orbitDistance: number;
  isActive: boolean;
  isUnlocked: boolean;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
  isRotationEnabled: boolean;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const groupRef = useRef<THREE.Group>(null);
  const planet = item.planet;
  const planetRadius = BASE_SPHERE_RADIUS * planet.size;
  const angleRef = useRef(initialAngle);
  const baseSpeed = 0.005; // Base rotation speed multiplier

  // Update planet position based on orbital speed
  useFrame(() => {
    if (isRotationEnabled && groupRef.current) {
      // Update angle based on planet's speed
      angleRef.current += baseSpeed * planet.speed;

      // Calculate new position based on current angle
      const x = orbitDistance * Math.cos(angleRef.current);
      const z = orbitDistance * Math.sin(angleRef.current);
      groupRef.current.position.set(x, 0, z);
    }

    if (meshRef.current) {
      const scale = isHovered && isUnlocked ? 1.15 : (isActive ? 1.1 : 1); // Slightly larger if active
      meshRef.current.scale.setScalar(scale);
    }
  });

  const planetColor = planet.color;
  const planetOpacity = isUnlocked ? 1.0 : 0.75;

  // Initial position based on initial angle
  const initialX = orbitDistance * Math.cos(initialAngle);
  const initialZ = orbitDistance * Math.sin(initialAngle);

  return (
    <group ref={groupRef} position={[initialX, 0, initialZ]}>
      <group ref={meshRef}>
        {/* Planet sphere with enhanced 3D appearance */}
        <PlanetSphere
          radius={planetRadius}
          color={planetColor}
          opacity={planetOpacity}
          name={planet.name}
          emoji={planet.emoji}
          textColor={planet.textColor}
          emojiColor={planet.emojiColor}
          onPointerEnter={() => onHover(true)}
          onPointerLeave={() => onHover(false)}
          onClick={onClick}
        />
      </group>
    </group>
  );
}

// Sun component - simple glowing sun
function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[CENTER_SPHERE_RADIUS, 64, 64]} />
      <meshStandardMaterial
        color="#FFD700"
        emissive="#FFA500"
        emissiveIntensity={1.5}
        metalness={0.1}
        roughness={0.3}
      />
    </mesh>
  );
}

// Center sphere component - represents the Sun
function CenterSphere() {
  return <Sun />;
}

// Scene component
function Scene({
  activeStepIndex,
  hoveredIndex,
  setHoveredIndex,
  onStepClick,
  isRotationEnabled,
  isDarkMode,
}: {
  activeStepIndex: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  onStepClick: (index: number) => void;
  isRotationEnabled: boolean;
  isDarkMode: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  // Generate random initial angles once and store them (don't regenerate on theme change)
  const initialAnglesRef = useRef<number[]>(
    Array.from({ length: totalSteps }, () => Math.random() * 2 * Math.PI)
  );

  // Get theme-aware learning path data
  const learningPathData = useMemo(() => getLearningPathData(isDarkMode), [isDarkMode]);

  // Calculate initial angles and orbit distances for each planet
  const learningPath = useMemo(() => {
    return learningPathData.map((item, index) => {
      const orbitDistance = BASE_ORBIT_RADIUS * item.planet.distance;
      // Use stored random initial angle (doesn't change on theme switch)
      const initialAngle = initialAnglesRef.current[index];
      return {
        ...item,
        orbitDistance,
        initialAngle,
      };
    });
  }, [learningPathData]); // Recalculate when theme changes (but keep same angles)

  return (
    <>
      {/* Sun - fixed in center, doesn't rotate */}
      <CenterSphere />

      {/* Planets and orbits - rotate together */}
      <group ref={groupRef}>
        {/* Draw orbit rings for each planet */}
        {learningPath.map((item, index) => (
          <OrbitRing
            key={`orbit-${index}`}
            radius={item.orbitDistance}
            color={item.planet.color}
            opacity={item.unlocked ? 0.15 : 0.08}
            isDarkMode={isDarkMode}
          />
        ))}
        {/* Draw planets */}
        {learningPath.map((item, index) => (
          <StepSphere
            key={index}
            item={item}
            initialAngle={item.initialAngle}
            orbitDistance={item.orbitDistance}
            isActive={index === activeStepIndex}
            isUnlocked={item.unlocked}
            isHovered={hoveredIndex === index}
            onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
            onClick={() => onStepClick(index)}
            isRotationEnabled={isRotationEnabled}
          />
        ))}
      </group>
    </>
  );
}

export const Roadmap = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isRotationEnabled, setIsRotationEnabled] = useState(false);
  const navigate = useNavigate();
  const controlsRef = useRef<any>(null);
  const { mode } = useColorMode();
  const isDarkMode = mode === 'dark';

  // Get theme-aware learning path data
  const learningPathData = useMemo(() => getLearningPathData(isDarkMode), [isDarkMode]);

  const activeStepIndex = learningPathData.findIndex(item => item.unlocked);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const toggleRotation = () => {
    setIsRotationEnabled(prev => !prev);
  };

  const centerActiveStep = () => {
    if (controlsRef.current && activeStepIndex >= 0) {
      const stepAngle = ((activeStepIndex / totalSteps) * 2 * Math.PI) - (Math.PI / 2);
      const targetRotation = -stepAngle;

      // Animate camera to center the active step
      const startRotation = controlsRef.current.getAzimuthalAngle();
      const startTime = Date.now();
      const duration = 800;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentRotation = startRotation + (targetRotation - startRotation) * easeOutCubic;

        controlsRef.current.setAzimuthalAngle(currentRotation);
        controlsRef.current.setPolarAngle(Math.PI / 2); // Reset to horizontal

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  };

  const handleStepClick = (index: number) => {
    const item = learningPathData[index];
    if (item.path && item.unlocked) {
      navigate(item.path);
    }
  };

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'hidden',
        background: 'transparent',
      }}
    >
      {/* Starfield Background */}
      <Starfield />

      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Main Title */}
        <Fade in={isLoaded} timeout={800}>
          <Box sx={{
            position: 'absolute',
            top: { xs: 40, md: 60 },
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3
          }}>
            <GradientTitle
              variant="h1"
              size="medium"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
                textAlign: 'center'
              }}
            >
              LEARNING PATH
            </GradientTitle>
          </Box>
        </Fade>

        {/* 3D Canvas - Full Page */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            cursor: 'grab',
            '&:active': {
              cursor: 'grabbing'
            }
          }}
        >
          <Canvas
            camera={{ position: [0, 25, 55], fov: 60 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.3} />
            {/* Sun light - positioned at the center where the sun is */}
            <pointLight
              position={[0, 0, 0]}
              intensity={4}
              color="#FFD700"
              // distance={200}
              decay={0.4}
            />

            <OrbitControls
              ref={controlsRef}
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minDistance={10}
              maxDistance={50}
              minPolarAngle={Math.PI / 6} // Allow viewing from above (30 degrees from top)
              maxPolarAngle={Math.PI / 2 + Math.PI / 6} // Allow 30 degrees below horizontal
              autoRotate={false}
              target={[0, 0, 0]} // Look at the center
            />

            <Scene
              activeStepIndex={activeStepIndex}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              onStepClick={handleStepClick}
              isRotationEnabled={isRotationEnabled}
              isDarkMode={isDarkMode}
            />
          </Canvas>

          {/* Control Buttons */}
          <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              left: 20,
              zIndex: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}
          >
            {/* Center Active Step Button */}
            <GlassIconButton
              onClick={centerActiveStep}
              aria-label="Center active step"
            >
              <CenterFocusStrong />
            </GlassIconButton>

            {/* Rotation Control Button */}
            <GlassIconButton
              onClick={toggleRotation}
              aria-label={isRotationEnabled ? 'Pause rotation' : 'Start rotation'}
            >
              {isRotationEnabled ? <Pause /> : <PlayArrow />}
            </GlassIconButton>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default Roadmap;

