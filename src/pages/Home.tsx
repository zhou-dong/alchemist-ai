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
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden'
    }}>
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
        <Fade in={isLoaded} timeout={800}>
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
        <Fade in={isLoaded} timeout={800}>
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
