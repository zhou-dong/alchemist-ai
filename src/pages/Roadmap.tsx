import {
  Box,
  Typography,
  Fade,
  IconButton,
} from '@mui/material';
import { PlayArrow, Pause, CenterFocusStrong } from '@mui/icons-material';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientTitle } from '../theme/theme';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

// 3D Spherical Roadmap Style using Three.js
// Steps arranged on a sphere in 3D space
// Creates an immersive 3D learning journey

const totalSteps = 8;

// Center sphere radius (the main roadmap globe - represents the Sun)
const CENTER_SPHERE_RADIUS = 3; // Three.js units (scaled from 300px)

// Base orbit radius (minimum distance from sun)
const BASE_ORBIT_RADIUS = CENTER_SPHERE_RADIUS + 2; // Closest planet starts here

// Step sphere size (base size, will be scaled by planet)
const BASE_SPHERE_RADIUS = 0.9; // Scaled from 90px

// Planet data - mapping each step to a planet in the solar system
// Distance is relative to real solar system distances (normalized for visualization)
// Real distances in AU: Mercury(0.39), Venus(0.72), Earth(1.0), Mars(1.52), 
// Jupiter(5.2), Saturn(9.5), Uranus(19.2), Neptune(30.1)
const PLANET_DATA = [
  {
    name: 'Mercury',
    color: '#8C7853', // Gray-brown
    size: 0.7, // Smallest planet
    distance: 1.0, // Closest to sun (normalized)
    emoji: '☿️'
  },
  {
    name: 'Venus',
    color: '#FFC649', // Yellowish-white
    size: 0.75,
    distance: 1.2, // Second closest
    emoji: '♀️'
  },
  {
    name: 'Earth',
    color: '#4A90E2', // Blue
    size: 0.8,
    distance: 1.4, // Third
    emoji: '🌍'
  },
  {
    name: 'Mars',
    color: '#CD5C5C', // Red
    size: 0.75,
    distance: 1.7, // Fourth
    emoji: '♂️'
  },
  {
    name: 'Jupiter',
    color: '#D8CA9D', // Orange-brown
    size: 1.3, // Largest planet
    distance: 2.5, // Much farther out
    emoji: '♃'
  },
  {
    name: 'Saturn',
    color: '#FAD5A5', // Yellow-gold
    size: 1.2, // Second largest
    distance: 3.2, // Even farther
    emoji: '♄'
  },
  {
    name: 'Uranus',
    color: '#4FD0E7', // Cyan
    size: 1.0,
    distance: 4.0, // Outer planet
    emoji: '♅'
  },
  {
    name: 'Neptune',
    color: '#4166F5', // Deep blue
    size: 1.0,
    distance: 4.8, // Farthest planet
    emoji: '♆'
  },
];

// Calculate positions around the center sphere in X-Z plane (Y=0, varying depth along Z-axis)
// Distance parameter determines how far from the sun (center) each planet is
const calculate3DPosition = (index: number, total: number, orbitDistance: number) => {
  const angle = ((index / total) * 2 * Math.PI) - (Math.PI / 2);
  // Calculate position at the specified distance from center
  const x = orbitDistance * Math.cos(angle); // Vary in X-Z plane
  const y = 0; // All at same Y level (Y=0)
  const z = orbitDistance * Math.sin(angle); // Vary depth along Z-axis
  
  return { x, y, z };
};

const learningPathData = [
  {
    title: 'Functions as Decisions',
    description: 'Every decision is a function',
    path: '/alchemist-ai/functions-decisions',
    unlocked: true,
    planet: PLANET_DATA[0] // Mercury
  },
  {
    title: 'Simple Functions',
    description: 'Build the simplest function: if...else',
    path: '/alchemist-ai/simple-functions',
    unlocked: false,
    planet: PLANET_DATA[1] // Venus
  },
  {
    title: 'Multi-Input Functions',
    description: 'Multiple inputs, one output function',
    path: '/alchemist-ai/multi-input-functions',
    unlocked: false,
    planet: PLANET_DATA[2] // Earth
  },
  {
    title: 'Math to Neurons',
    description: 'From mathematical functions to neural networks',
    path: '/alchemist-ai/math-to-neurons',
    unlocked: false,
    planet: PLANET_DATA[3] // Mars
  },
  {
    title: 'Logistic Regression',
    description: 'Understanding binary classification',
    path: '/alchemist-ai/logistic-regression',
    unlocked: false,
    planet: PLANET_DATA[4] // Jupiter
  },
  {
    title: 'Multi-Layer Network',
    description: 'Stacking layers for complex patterns',
    path: '/alchemist-ai/multi-layer-network',
    unlocked: false,
    planet: PLANET_DATA[5] // Saturn
  },
  {
    title: 'Backpropagation',
    description: 'The algorithm that enables deep learning',
    path: '/alchemist-ai/backpropagation',
    unlocked: false,
    planet: PLANET_DATA[6] // Uranus
  },
  {
    title: 'Neural Networks',
    description: 'Master the complete neural network architecture',
    path: '/alchemist-ai/neural-networks',
    unlocked: false,
    planet: PLANET_DATA[7] // Neptune
  },
];

// Wireframe sphere component using Three.js built-in sphere geometry
function WireframeSphere({ radius, color, opacity }: { radius: number; color: string; opacity: number }) {
  return (
    <mesh>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshBasicMaterial 
        color={color} 
        transparent 
        opacity={opacity} 
        wireframe 
        side={THREE.DoubleSide} 
      />
    </mesh>
  );
}

// Planet sphere component - solid sphere with planet color
function PlanetSphere({ 
  radius, 
  color, 
  opacity,
  onPointerEnter,
  onPointerLeave,
  onClick
}: { 
  radius: number; 
  color: string; 
  opacity: number;
  onPointerEnter?: () => void;
  onPointerLeave?: () => void;
  onClick?: () => void;
}) {
  return (
    <mesh
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onClick={onClick}
    >
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={opacity}
        metalness={0.1}
        roughness={0.8}
        side={THREE.DoubleSide} 
      />
    </mesh>
  );
}

// Step sphere component
function StepSphere({
  item,
  position,
  isActive,
  isUnlocked,
  isHovered,
  onHover,
  onClick,
}: {
  item: typeof learningPathData[0];
  position: { x: number; y: number; z: number };
  isActive: boolean;
  isUnlocked: boolean;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  onClick: () => void;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const planet = item.planet;
  const planetRadius = BASE_SPHERE_RADIUS * planet.size;

  useFrame(() => {
    if (meshRef.current) {
      const scale = isHovered && isUnlocked ? 1.15 : (isActive ? 1.1 : 1); // Slightly larger if active
      meshRef.current.scale.setScalar(scale);
    }
  });

  const planetColor = planet.color;
  const planetOpacity = isUnlocked ? 0.9 : 0.5;
  const wireframeOpacity = isUnlocked ? 0.3 : 0.15;
  const textGroupRef = useRef<THREE.Group>(null);

  // Make text always face camera (billboard effect)
  useFrame(({ camera }) => {
    if (textGroupRef.current) {
      textGroupRef.current.lookAt(camera.position);
    }
  });

  // Position text on sphere surface (at radius distance from center)
  const textOffset = planetRadius + 0.3; // Slightly above the surface
  
  // All spheres at the same distance from center (no offset)
  return (
    <group position={[position.x, position.y, position.z]}>
      <group ref={meshRef}>
        {/* Solid planet sphere */}
        <PlanetSphere 
          radius={planetRadius} 
          color={planetColor} 
          opacity={planetOpacity}
          onPointerEnter={() => onHover(true)}
          onPointerLeave={() => onHover(false)}
          onClick={onClick}
        />
        {/* Wireframe overlay for visual interest */}
        <WireframeSphere radius={planetRadius * 1.01} color={planetColor} opacity={wireframeOpacity} />
      </group>
      
      {/* Text label on sphere surface - always facing camera */}
      <group ref={textGroupRef} position={[0, 0, textOffset]}>
        {/* Planet name - centered at top */}
        <Text
          position={[0, 0.3, 0]}
          fontSize={0.12}
          color={planetColor}
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          textAlign="center"
          outlineWidth={0.02}
          outlineColor="#000000"
          lineHeight={1.2}
        >
          {planet.emoji} {planet.name}
        </Text>
        
        {/* Title - centered */}
        <Text
          position={[0, 0.1, 0]}
          fontSize={0.13}
          color={isUnlocked ? '#FFFFFF' : '#AAAAAA'}
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          textAlign="center"
          outlineWidth={0.02}
          outlineColor="#000000"
          lineHeight={1.2}
        >
          {item.title}
        </Text>
        
        {/* Description - centered below title */}
        <Text
          position={[0, -0.1, 0]}
          fontSize={0.09}
          color={isUnlocked ? '#CCCCCC' : '#888888'}
          anchorX="center"
          anchorY="middle"
          maxWidth={2.5}
          textAlign="center"
          outlineWidth={0.015}
          outlineColor="#000000"
          lineHeight={1.2}
        >
          {isUnlocked ? item.description : 'Complete previous steps to unlock'}
        </Text>
      </group>
    </group>
  );
}

// Center sphere component - represents the Sun
function CenterSphere() {
  return (
    <group>
      {/* Sun - glowing center */}
      <PlanetSphere radius={CENTER_SPHERE_RADIUS} color="#FFD700" opacity={0.3} />
      <WireframeSphere radius={CENTER_SPHERE_RADIUS} color="#FFA500" opacity={0.2} />
    </group>
  );
}

// Scene component
function Scene({
  activeStepIndex,
  hoveredIndex,
  setHoveredIndex,
  onStepClick,
  isRotationEnabled,
}: {
  activeStepIndex: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
  onStepClick: (index: number) => void;
  isRotationEnabled: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);

  // Auto-rotation
  useFrame(() => {
    if (groupRef.current && isRotationEnabled) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const learningPath = learningPathData.map((item, index) => {
    // Calculate orbit distance based on planet's relative distance from sun
    const orbitDistance = BASE_ORBIT_RADIUS * item.planet.distance;
    return {
      ...item,
      position: calculate3DPosition(index, totalSteps, orbitDistance),
    };
  });

  return (
    <group ref={groupRef}>
      <CenterSphere />
      {learningPath.map((item, index) => (
        <StepSphere
          key={index}
          item={item}
          position={item.position}
          isActive={index === activeStepIndex}
          isUnlocked={item.unlocked}
          isHovered={hoveredIndex === index}
          onHover={(hovered) => setHoveredIndex(hovered ? index : null)}
          onClick={() => onStepClick(index)}
        />
      ))}
    </group>
  );
}

export const Roadmap = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showHint, setShowHint] = useState(true);
  const [isRotationEnabled, setIsRotationEnabled] = useState(false);
  const navigate = useNavigate();
  const controlsRef = useRef<any>(null);

  const activeStepIndex = learningPathData.findIndex(item => item.unlocked);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
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
            camera={{ position: [0, 0, 15], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            
            <OrbitControls
              ref={controlsRef}
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minDistance={10}
              maxDistance={25}
              minPolarAngle={Math.PI / 6} // Allow viewing from above (30 degrees from top)
              maxPolarAngle={Math.PI / 2 + Math.PI / 18} // Keep 10 degree limit below horizontal
              autoRotate={false}
              target={[0, 0, 0]} // Look at the center
            />
            
            <Scene
              activeStepIndex={activeStepIndex}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              onStepClick={handleStepClick}
              isRotationEnabled={isRotationEnabled}
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
            <IconButton
              onClick={centerActiveStep}
              sx={{
                background: 'rgba(99, 102, 241, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: 'primary.main',
                '&:hover': {
                  background: 'rgba(99, 102, 241, 0.2)',
                  border: '1px solid rgba(99, 102, 241, 0.5)',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.3s ease',
                width: 48,
                height: 48
              }}
              aria-label="Center active step"
            >
              <CenterFocusStrong />
            </IconButton>
            
            {/* Rotation Control Button */}
            <IconButton
              onClick={toggleRotation}
              sx={{
                background: 'rgba(99, 102, 241, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: 'primary.main',
                '&:hover': {
                  background: 'rgba(99, 102, 241, 0.2)',
                  border: '1px solid rgba(99, 102, 241, 0.5)',
                  transform: 'scale(1.1)'
                },
                transition: 'all 0.3s ease',
                width: 48,
                height: 48
              }}
              aria-label={isRotationEnabled ? 'Pause rotation' : 'Start rotation'}
            >
              {isRotationEnabled ? <Pause /> : <PlayArrow />}
            </IconButton>
          </Box>

          {/* Hint Text */}
          {showHint && (
            <Fade in={showHint} timeout={1000}>
              <Typography
                variant="body2"
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: 'text.secondary',
                  fontSize: { xs: '0.75rem', md: '0.85rem' },
                  textAlign: 'center',
                  px: 2,
                  py: 1,
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  pointerEvents: 'none',
                  zIndex: 10
                }}
              >
                Drag to rotate • Scroll to zoom • Click to explore
              </Typography>
            </Fade>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Roadmap;
