import { Box, Typography, Button, Fade } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatingParticles } from '../../../../../packages/shared/src/components/common/FloatingParticles';
import { useStepStatusContext } from '../../contexts/StepStatusContext';
import { isLocked } from '../../data/types';

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
    <>
      <FloatingParticles particleCount={60} />
      <Box sx={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        overflow: 'hidden',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
      }}>
        <Fade in={isLoaded} timeout={800}>
          <Typography
            variant="h1"
            sx={{
              mb: 10,
              fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            SKETCH ATLAS
          </Typography>
        </Fade>

        <Fade in={isLoaded} timeout={800}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => navigate('/alchemist-sketches/roadmap?step=0')}
            sx={{
              fontSize: '1.5rem',
              letterSpacing: '0.1em',
            }}
          >
            START
          </Button>
        </Fade>
      </Box>
    </>
  );
};

export default Home;

