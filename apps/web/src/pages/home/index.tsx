import { Box, Fade } from '@mui/material';
import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientTypography, GradientButton } from '@alchemist/shared';
import { FloatingParticles, generateParticles, type Particle } from './FloatingParticles';
import { useStepStatusContext } from '../../contexts/StepStatusContext';
import { isLocked } from '../../data/types';

const DisplayFloatingParticles = () => {
  const particleCount = 60;
  const particles: Array<Particle> = useMemo(() => generateParticles(particleCount), [particleCount]);
  return <FloatingParticles particles={particles} />;
};

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
      <DisplayFloatingParticles />
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
          <GradientTypography
            variant="h1"
            sx={{
              mb: 10,
              fontWeight: 900,
            }}
          >
            SKETCH ATLAS
          </GradientTypography>
        </Fade>

        <Fade in={isLoaded} timeout={800}>
          <GradientButton
            onClick={() => navigate('/alchemist-sketches/roadmap?step=0')}
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
        </Fade>
      </Box>
    </>
  );
};

export default Home;

