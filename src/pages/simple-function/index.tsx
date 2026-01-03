import {
  Box,
  Fade,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VenusBackground } from '../../theme/venus/VenusBackground';
import { Starfield } from '../../components/common/Starfield';
import { venusThemeProps } from '../../theme/venus';
import { buildRgba, PlanetThemeBuilder } from '../../theme/PlanetTheme';

const venusThemeBuilder = new PlanetThemeBuilder(venusThemeProps);
const GradientTypography = venusThemeBuilder.GradientTypography;
// RgbaColor objects for components that need them
const venusPrimaryColor = venusThemeProps.primary;
const venusSecondaryColor = venusThemeProps.secondary;
// String version for sx props
const venusPrimary = buildRgba(venusPrimaryColor);
const venusSecondary = buildRgba(venusSecondaryColor);


export const SimpleFunctions = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{
      width: '100vw',
      minHeight: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      px: { xs: 2, md: 4 }
    }}>
      {/* SVG definitions for clip-path and gradients */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          zIndex: -1,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <svg width="0" height="0">
          <defs>
            {/* Clip path for Venus background - covers bottom 1/4 (25%) of the page */}
            {/* Using objectBoundingBox: 0,0 is top-left, 1,1 is bottom-right */}
            {/* Split at 0.75 (75% from top = 25% from bottom) */}
            <clipPath id="venusHorizonClip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0.75 Q 0.25 0.62, 0.5 0.62 T 1 0.75 L 1 1 L 0 1 Z" />
            </clipPath>
            {/* Clip path for Starfield - covers top 3/4 (75%) of the page */}
            <clipPath id="starfieldHorizonClip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 L 1 0 L 1 0.75 Q 0.75 0.62, 0.5 0.62 T 0 0.75 Z" />
            </clipPath>
          </defs>
        </svg>
      </Box>
      <Starfield clipPath="url(#starfieldHorizonClip)" />
      <VenusBackground clipPath="url(#venusHorizonClip)" />

      {/* Horizon line - decorative line at the boundary */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        <svg
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          viewBox="0 0 1920 1080"
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          <path
            d="M 0 810 Q 480 669, 960 669 T 1920 810"
            stroke="rgba(139, 69, 19, 0.4)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </Box>

      <Fade in={isLoaded} timeout={800}>
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            textAlign: 'center',
          }}
        >
          <GradientTypography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem', lg: '3rem' },
              fontWeight: 900,
            }}
          >
            SIMPLE FUNCTIONS
          </GradientTypography>
        </Box>
      </Fade>

      <Fade in={isLoaded} timeout={800}>
        <Box sx={{
          maxWidth: '900px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
          position: 'relative',
          zIndex: 1,
        }}>
          {/* <VenusGradientTypography
            variant="h5"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              color: 'text.secondary',
              maxWidth: '700px',
              lineHeight: 1.8,
              opacity: 0.9
            }}
          >
            The simplest function: if...else. Learn how conditional logic forms
            the foundation of decision-making in both programming and neural networks.
            Every neural activation is essentially an if...else decision.
          </VenusGradientTypography> */}
          {/* 
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <VenusGradientButton
              onClick={() => navigate('/alchemist-sketches/roadmap')}
              sx={{
                px: 4,
                py: 1.5,
              }}
              startIcon={<ArrowBack />}
            >
              BACK TO ROADMAP
            </VenusGradientButton>
            <VenusGradientButton
              onClick={() => navigate('/alchemist-sketches/multi-input-functions')}
              sx={{
                px: 4,
                py: 1.5,
              }}
              endIcon={<ArrowForward />}
            >
              NEXT
            </VenusGradientButton>
          </Box> */}
        </Box>
      </Fade>

    </Box>
  );
};

export default SimpleFunctions;

