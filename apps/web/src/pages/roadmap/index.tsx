import {
  Avatar,
  Box,
  Fade,
  Slide,
  Stack,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { PlayArrow, Pause, CenterFocusStrong, Lock, LockOpen, CheckCircle, ArrowForward } from '@mui/icons-material';
import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useColorMode, Starfield } from '@alchemist/shared';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { isLocked, isFinished, isAccessible } from '../../data/types';
import type { StepStatus } from '../../data/types';
import { TOTAL_STEPS, blendColors, type LearningPathItem } from '../../data/planets';
import { useStepStatusContext } from '../../contexts/StepStatusContext';

const totalSteps = TOTAL_STEPS;
const CENTER_SPHERE_RADIUS = 3;
const BASE_ORBIT_RADIUS = CENTER_SPHERE_RADIUS + 3;
const BASE_SPHERE_RADIUS = 0.9;

function OrbitRing({ radius, color, opacity, isDarkMode }: { radius: number; color: string; opacity: number; isDarkMode: boolean }) {
  const innerRadius = radius - 0.02;
  const outerRadius = radius + 0.02;
  const themeAdjustedOpacity = isDarkMode ? opacity : opacity * 2.5;

  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[innerRadius, outerRadius, 64]} />
      <meshBasicMaterial color={color} transparent opacity={themeAdjustedOpacity} side={THREE.DoubleSide} />
    </mesh>
  );
}

const createGradientTexture = (baseColor: string, planetName: string, emoji: string, textColor: string, emojiColor: string) => {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
  gradient.addColorStop(0, baseColor);
  gradient.addColorStop(0.4, blendColors(baseColor, '#8B5CF6', 0.3));
  gradient.addColorStop(0.7, blendColors(baseColor, '#F59E0B', 0.2));
  gradient.addColorStop(1, baseColor);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 512, 512);

  ctx.font = '48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.8)';
  ctx.lineWidth = 8;
  ctx.strokeText(emoji, 256, 20);
  ctx.fillStyle = emojiColor;
  ctx.fillText(emoji, 256, 20);

  ctx.font = 'bold 48px Arial';
  ctx.strokeText(planetName, 256, 80);
  ctx.fillStyle = textColor;
  ctx.fillText(planetName, 256, 80);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
};

function PlanetSphere({ radius, color, opacity, name, emoji, textColor, emojiColor, status, onPointerEnter, onPointerLeave, onClick }: any) {
  const gradientTexture = useMemo(() => createGradientTexture(color, name, emoji, textColor, emojiColor), [color, name, emoji, textColor, emojiColor]);
  const pointerDownRef = useRef<any>(null);
  const hasMovedRef = useRef(false);

  const handlePointerDown = (e: any) => {
    const point = e.point || { x: 0, y: 0, z: 0 };
    pointerDownRef.current = { x: point.x, y: point.y, time: Date.now() };
    hasMovedRef.current = false;
  };

  const handlePointerUp = () => {
    if (pointerDownRef.current && onClick && !hasMovedRef.current) {
      const timeHeld = Date.now() - pointerDownRef.current.time;
      if (timeHeld < 500) onClick();
    }
    pointerDownRef.current = null;
    hasMovedRef.current = false;
  };

  let finalColor: THREE.Color;
  let materialProps: any;

  if (isLocked(status)) {
    const baseColor = new THREE.Color(color);
    const gray = baseColor.r * 0.299 + baseColor.g * 0.587 + baseColor.b * 0.114;
    finalColor = new THREE.Color(gray * 0.25, gray * 0.25, gray * 0.25);
    materialProps = { metalness: 0.05, roughness: 0.8, emissive: '#000000', emissiveIntensity: 0 };
  } else if (isFinished(status)) {
    finalColor = new THREE.Color(color);
    materialProps = { metalness: 0.5, roughness: 0.1, emissive: color, emissiveIntensity: 0.2 };
  } else {
    finalColor = new THREE.Color(color);
    materialProps = { metalness: 0.4, roughness: 0.2, emissive: '#000000', emissiveIntensity: 0 };
  }

  return (
    <mesh onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} onPointerDown={handlePointerDown} onPointerUp={handlePointerUp}>
      <sphereGeometry args={[radius, 64, 64]} />
      <meshStandardMaterial color={finalColor} map={isLocked(status) ? undefined : gradientTexture} transparent opacity={opacity} {...materialProps} side={THREE.DoubleSide} flatShading={false} />
    </mesh>
  );
}

function StepSphere({ item, initialAngle, orbitDistance, isActive, status, isHovered, onHover, onClick, isRotationEnabled }: any) {
  const meshRef = useRef<THREE.Group>(null);
  const groupRef = useRef<THREE.Group>(null);
  const planet = item.planet;
  const planetRadius = BASE_SPHERE_RADIUS * planet.size;
  const angleRef = useRef(initialAngle);
  const baseSpeed = 0.005;

  useFrame(() => {
    if (isRotationEnabled && groupRef.current) {
      angleRef.current += baseSpeed * planet.speed;
      const x = orbitDistance * Math.cos(angleRef.current);
      const z = orbitDistance * Math.sin(angleRef.current);
      groupRef.current.position.set(x, 0, z);
    }
    if (meshRef.current) {
      let scale = 1;
      if (isHovered) scale = 15 / planet.size;
      else if (isActive) scale = 1.1;
      meshRef.current.scale.setScalar(scale);
    }
  });

  const initialX = orbitDistance * Math.cos(initialAngle);
  const initialZ = orbitDistance * Math.sin(initialAngle);

  return (
    <group ref={groupRef} position={[initialX, 0, initialZ]}>
      <group ref={meshRef}>
        <PlanetSphere radius={planetRadius} color={planet.color} opacity={isLocked(status) ? 0.4 : 1.0} name={planet.name} emoji={planet.emoji} textColor={planet.textColor} emojiColor={planet.emojiColor} status={status} onPointerEnter={() => onHover(true)} onPointerLeave={() => onHover(false)} onClick={onClick} />
      </group>
    </group>
  );
}

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[CENTER_SPHERE_RADIUS, 64, 64]} />
      <meshStandardMaterial color="#FFD700" emissive="#FFA500" emissiveIntensity={1.5} metalness={0.1} roughness={0.3} />
    </mesh>
  );
}

function Scene({ activeStepIndex, hoveredIndex, setHoveredIndex, onStepClick, isRotationEnabled, isDarkMode, learningPathData }: any) {
  const initialAnglesRef = useRef<number[]>(Array.from({ length: totalSteps }, () => Math.random() * 2 * Math.PI));

  const learningPath = useMemo(() => {
    return learningPathData.map((item: any, index: number) => ({
      ...item,
      orbitDistance: BASE_ORBIT_RADIUS * item.planet.distance,
      initialAngle: initialAnglesRef.current[index],
    }));
  }, [learningPathData]);

  return (
    <>
      <Sun />
      <group>
        {learningPath.map((item: any, index: number) => (
          <OrbitRing key={`orbit-${index}`} radius={item.orbitDistance} color={item.planet.color} opacity={isLocked(item.status) ? 0.08 : isFinished(item.status) ? 0.2 : 0.15} isDarkMode={isDarkMode} />
        ))}
        {learningPath.map((item: any, index: number) => (
          <StepSphere key={index} item={item} initialAngle={item.initialAngle} orbitDistance={item.orbitDistance} isActive={index === activeStepIndex} status={item.status} isHovered={hoveredIndex === index} onHover={(hovered: boolean) => setHoveredIndex(hovered ? index : null)} onClick={() => onStepClick(index)} isRotationEnabled={isRotationEnabled} />
        ))}
      </group>
    </>
  );
}

export const Roadmap = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isRotationEnabled, setIsRotationEnabled] = useState(true);
  const navigate = useNavigate();
  const controlsRef = useRef<any>(null);
  const { mode } = useColorMode();
  const isDarkMode = mode === 'dark';
  const { learningPathData, updateStepStatus } = useStepStatusContext();
  const [searchParams] = useSearchParams();

  const urlStepIndex: number | null = useMemo(() => {
    const stepParam = searchParams.get('step');
    if (stepParam !== null) {
      const stepIndex = parseInt(stepParam, 10);
      if (!isNaN(stepIndex) && stepIndex >= 0 && stepIndex < TOTAL_STEPS) return stepIndex;
    }
    return null;
  }, [searchParams]);

  const targetStepIndex: number = urlStepIndex ?? -1;

  const handleNextStep = () => {
    if (targetStepIndex >= 0 && targetStepIndex < learningPathData.length) {
      const targetItem = learningPathData[targetStepIndex];
      if (targetItem.path) navigate(targetItem.path);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleStepClick = (index: number) => {
    const item = learningPathData[index];
    if (isAccessible(item.status)) {
      if (item.path) navigate(item.path);
    } else if (isLocked(item.status)) {
      updateStepStatus(index, 'unlocked');
    }
  };

  return (
    <Box sx={{ width: '100vw', minHeight: '100vh', position: 'fixed', top: 0, left: 0, overflow: 'hidden', background: 'transparent' }}>
      <Starfield />
      <Box sx={{ position: 'relative', zIndex: 2, width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Fade in={isLoaded} timeout={800}>
          <Box sx={{ position: 'absolute', top: "10%", left: '50%', transform: 'translateX(-50%)', zIndex: 3 }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' }, textAlign: 'center', fontWeight: 900 }}>
              LEARNING PATH
            </Typography>
          </Box>
        </Fade>

        <Box sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: hoveredIndex !== null ? 'pointer' : 'grab' }}>
          <Canvas camera={{ position: [0, 25, 45], fov: 60 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[0, 0, 0]} intensity={4} color="#FFD700" decay={0.4} />
            <OrbitControls ref={controlsRef} enablePan={false} enableZoom={true} enableRotate={true} minDistance={30} maxDistance={60} minPolarAngle={Math.PI / 6} maxPolarAngle={Math.PI / 2 + Math.PI / 6} autoRotate={false} target={[0, 0, 0]} />
            <Scene activeStepIndex={targetStepIndex} hoveredIndex={hoveredIndex} setHoveredIndex={setHoveredIndex} onStepClick={handleStepClick} isRotationEnabled={isRotationEnabled} isDarkMode={isDarkMode} learningPathData={learningPathData} />
          </Canvas>

          {hoveredIndex !== null && (() => {
            const item = learningPathData[hoveredIndex];
            return (
              <Box sx={{ position: 'absolute', left: { xs: 20, md: 40 }, top: '50%', transform: 'translateY(-50%)', zIndex: 1000 }}>
                <Slide direction="right" in={true} timeout={400}>
                  <Fade in={true} timeout={400}>
                    <Box onClick={() => handleStepClick(hoveredIndex)} sx={{ borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', padding: 3, cursor: isAccessible(item.status) ? 'pointer' : 'default', background: 'transparent' }}>
                      <Stack direction="column" spacing={2} alignItems="flex-start">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
                          <Typography variant="h4" sx={{ fontSize: '1.5rem' }}>{item.planet.emoji}</Typography>
                          <Typography variant="h6" sx={{ fontSize: '1.1rem', fontWeight: 600 }}>{item.planet.name}</Typography>
                        </Box>
                        <Typography variant="h5" sx={{ fontSize: '1.5rem', fontWeight: 700 }}>{item.title}</Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                        <Box sx={{ mt: 1 }}>
                          {isLocked(item.status) ? <Lock sx={{ fontSize: '1.5rem', color: 'text.disabled' }} /> : isFinished(item.status) ? <CheckCircle sx={{ fontSize: '1.5rem', color: 'success.main' }} /> : <LockOpen sx={{ fontSize: '1.5rem', color: 'primary.main' }} />}
                        </Box>
                      </Stack>
                    </Box>
                  </Fade>
                </Slide>
              </Box>
            );
          })()}

          <Box sx={{ position: 'absolute', bottom: 20, left: 20, zIndex: 20, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <IconButton onClick={() => setIsRotationEnabled(prev => !prev)} aria-label="Toggle rotation">
              {isRotationEnabled ? <Pause /> : <PlayArrow />}
            </IconButton>
          </Box>

          {targetStepIndex >= 0 && (
            <Box sx={{ position: 'absolute', top: '50%', right: 20, transform: 'translateY(-50%)', zIndex: 20 }}>
              <Button onClick={handleNextStep} disabled={targetStepIndex < 0 || isLocked(learningPathData[targetStepIndex]?.status)} startIcon={<Avatar sx={{ backgroundColor: learningPathData[targetStepIndex]?.planet.color, width: 32, height: 32 }}><Box component="span" sx={{ fontSize: '1.5rem' }}>{learningPathData[targetStepIndex]?.planet.emoji}</Box></Avatar>} endIcon={<ArrowForward />} sx={{ py: 1.2, px: 3, fontSize: '1.2rem' }}>
                {learningPathData[targetStepIndex]?.planet.name}
              </Button>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Roadmap;

