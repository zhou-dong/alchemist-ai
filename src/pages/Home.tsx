import {
  Box,
  Fade,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientTitle, GradientButton } from '../theme/theme';

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
            <GradientTitle
              variant="h1"
              size="large"
              sx={{
                mb: 3,
                position: 'relative',
                zIndex: 3
              }}
            >
              NEURAL QUEST
            </GradientTitle>
          </Box>
        </Fade>

        {/* Main CTA Button - Elegant Style */}
        <Fade in={isLoaded} timeout={800}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <GradientButton
              variant="outlined"
              size="large"
              onClick={() => navigate('/alchemist-ai/roadmap')}
              sx={{
                py: 2.5,
                px: 6,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                letterSpacing: { xs: '0.05em', md: '0.1em' },
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
