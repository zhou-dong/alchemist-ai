import {
  Box,
  Typography,
  Button,
  Fade,
  alpha,
} from '@mui/material';
import {
  PlayArrow,
} from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    vx: number;
    vy: number;
    delay: number;
  }>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Generate floating particles
    const newParticles = [];
    for (let i = 0; i < 60; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.6 + 0.3,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        delay: Math.random() * 5
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      background: `linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%)`,
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }} />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <Box
          key={particle.id}
          sx={{
            position: 'absolute',
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
            zIndex: 1,
            animation: `particleFloat ${15 + particle.id % 10}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Hero Section */}
      <Box sx={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        height: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* Main Title with Animation */}
        <Fade in={isLoaded} timeout={1200}>
          <Box sx={{ mb: 6, position: 'relative' }}>
            <Typography
              variant="h1"
              component="h1"
              fontWeight={900}
              sx={{
                fontSize: { xs: '4rem', md: '6rem', lg: '8rem' },
                background: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
                textShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
                animation: 'glow 2s ease-in-out infinite alternate, gradientShift 8s ease infinite',
                letterSpacing: { xs: '0.05em', md: '0.1em' },
                position: 'relative',
                zIndex: 3
              }}
              >
                NEURAL QUEST
              </Typography>
            </Box>
        </Fade>

        {/* Main CTA Button - Game Style */}
        <Fade in={isLoaded} timeout={1200}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<PlayArrow sx={{ fontSize: '2rem' }} />}
              onClick={() => navigate('/alchemist-ai/welcome')}
              sx={{
                py: 3,
                px: 8,
                fontSize: { xs: '1.3rem', md: '1.6rem' },
                fontWeight: 700,
                background: `linear-gradient(135deg, #6366F1, #8B5CF6)`,
                borderRadius: 4,
                textTransform: 'none',
                boxShadow: '0 12px 48px rgba(99, 102, 241, 0.4)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(90deg, transparent, ${alpha('#FFFFFF', 0.3)}, transparent)`,
                  transition: 'left 0.5s'
                },
                '&:hover': {
                  background: `linear-gradient(135deg, #5B5BD6, #7C3AED)`,
                  transform: 'translateY(-4px) scale(1.05)',
                  boxShadow: '0 16px 64px rgba(99, 102, 241, 0.6)',
                  '&::before': {
                    left: '100%'
                  }
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                animation: 'buttonPulse 3s ease-in-out infinite'
              }}
            >
              START
            </Button>
          </Box>
        </Fade>
      </Box>

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
        
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
        
        @keyframes titleGlow {
          from { 
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          to { 
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }
        
        @keyframes glow {
          from { text-shadow: 0 0 30px rgba(99, 102, 241, 0.3); }
          to { text-shadow: 0 0 50px rgba(99, 102, 241, 0.6), 0 0 70px rgba(139, 92, 246, 0.3); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes buttonPulse {
          0%, 100% { 
            box-shadow: 0 12px 48px rgba(99, 102, 241, 0.4);
          }
          50% { 
            box-shadow: 0 12px 48px rgba(99, 102, 241, 0.4), 0 0 60px rgba(99, 102, 241, 0.6);
          }
        }
      `}} />
    </Box>
  );
};

export default Home;
