import { Box, styled } from '@mui/material';
import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import { ThemeToggleFab } from '../../theme/ThemeToggleFab';

const HeaderContainer = styled(Box)(({ }) => ({
  position: 'fixed',
  top: 30,
  left: 36,
  zIndex: 100,
}));

const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: -1,
  ...(theme.palette.mode === 'dark' && {
    background: `linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%)`,
  }),
}));

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  delay: number;
}

const generateParticle = (): Particle => {
  return {
    id: Math.random(),
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    opacity: Math.random() * 0.6 + 0.3,
    vx: (Math.random() - 0.5) * 0.1,
    vy: (Math.random() - 0.5) * 0.1,
    delay: Math.random() * 5
  };
};

const generateParticles = (): Array<Particle> => {
  const newParticles: Array<Particle> = [];
  for (let i = 0; i < 60; i++) {
    newParticles.push(generateParticle());
  }
  return newParticles;
};

const FloatingParticle = ({ particle }: { particle: Particle }) => (
  <Box
    key={particle.id}
    sx={{
      position: 'fixed',
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: particle.size,
      height: particle.size,
      borderRadius: '50%',
      background: `radial-gradient(circle, 
        rgba(99, 102, 241, ${particle.opacity}) 0%, 
        rgba(139, 92, 246, ${particle.opacity * 0.7}) 50%, 
        transparent 100%
      )`,
      boxShadow: `0 0 ${particle.size * 4}px rgba(99, 102, 241, ${particle.opacity * 0.8})`,
      pointerEvents: 'none',
      zIndex: -1,
      animation: `particleFloat ${15 + particle.id % 10}s ease-in-out infinite`,
      animationDelay: `${particle.delay}s`
    }}
  />
);

const FloatingParticles = ({ particles }: { particles: Array<Particle> }) => (
  <>
    {particles.map((particle) => (
      <FloatingParticle key={particle.id} particle={particle} />
    ))}

    <style dangerouslySetInnerHTML={{
      __html: `
        @keyframes particleFloat {
          0%, 100% { 
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          25% { 
            transform: translate(20px, -30px) scale(1.2);
            opacity: 0.9;
          }
          50% { 
            transform: translate(-15px, -20px) scale(0.8);
            opacity: 0.7;
          }
          75% { 
            transform: translate(10px, 25px) scale(1.1);
            opacity: 0.8;
          }
        }
      `}} />
  </>
);

export const Layout = ({ children }: { children: ReactNode }) => {
  const [particles, setParticles] = useState<Array<Particle>>([]);

  useEffect(() => {
    setParticles(generateParticles());
  }, []);

  return (
    <>
      <BackgroundContainer />
      <FloatingParticles particles={particles} />
      <HeaderContainer>
        {/* <Header /> */}
      </HeaderContainer>
      {children}
      <ThemeToggleFab />
    </>
  );
};

export default Layout;
