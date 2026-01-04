import { Box, Typography, Button, Fade } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatingParticles } from '../../../../packages/shared/src/components/common/FloatingParticles';
import { useStepStatusContext } from '../contexts/StepStatusContext';
import { isLocked } from '../data/types';

export const Home = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const { learningPathData, updateStepStatus } = useStepStatusContext();

  useEffect(() => {
    if (isLocked(learningPathData[0].status)) {
      updateStepStatus(0, 'unlocked'); // Unlock the first step for new users
    }

    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <FloatingParticles particleCount={60} />

      {/* Main content */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10,
        }}
      >
        {/* Subtitle */}
        <Fade in={isLoaded} timeout={600}>
          <Typography
            variant="overline"
            sx={{
              mb: 2,
              fontSize: { xs: '0.75rem', md: '0.9rem' },
              letterSpacing: '0.3em',
              opacity: 0.7,
            }}
          >
            EXPLORE PROBABILISTIC DATA STRUCTURES
          </Typography>
        </Fade>

        {/* Main title */}
        <Fade in={isLoaded} timeout={800}>
          <Typography
            variant="h1"
            sx={{
              mb: 4,
              fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
              fontWeight: 800,
              letterSpacing: '0.08em',
              lineHeight: 1.1,
            }}
          >
            SKETCH ATLAS
          </Typography>
        </Fade>

        {/* Description */}
        <Fade in={isLoaded} timeout={1000}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 6,
              maxWidth: 500,
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.7,
              px: 3,
            }}
          >
            Master HyperLogLog, Theta Sketch, Bloom Filters, and more through
            interactive visualizations and guided learning.
          </Typography>
        </Fade>

        {/* CTA Button */}
        <Fade in={isLoaded} timeout={1200}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/alchemist-sketches/roadmap?step=0')}
            endIcon={<EastIcon />}
            sx={{
              fontSize: '1.2rem',
            }}
          >
            BEGIN JOURNEY
          </Button>
        </Fade>
      </Box>
    </Box>
  );
};

export default Home;

