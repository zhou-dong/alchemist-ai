import {
  Box,
  Fade,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientTypography, GradientButton } from '../../theme/theme';
import { FloatingParticles, generateParticles, type Particle } from './FloatingParticles';

export const Home = () => {
  const [particles, setParticles] = useState<Array<Particle>>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setParticles(generateParticles());
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
      <FloatingParticles particles={particles} />
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
            <GradientTypography
              variant="h1"
              sx={{
                mb: 3,
                position: 'relative',
                zIndex: 3
              }}
            >
              NEURAL QUEST
            </GradientTypography>
          </Box>
        </Fade>

        {/* Main CTA Button - Elegant Style */}
        <Fade in={isLoaded} timeout={800}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <GradientButton
              onClick={() => navigate('/alchemist-ai/roadmap?step=0')}
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
              }}
            >
              START
            </GradientButton>
          </Box>
        </Fade>
      </Box>

    </Box>
  );
};

export default Home;
