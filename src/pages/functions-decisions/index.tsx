import {
  Box,
  Typography,
  Fade,
  useTheme,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MercuryBackground } from '../../theme/mercury/MercuryBackground';
import { FunctionFlowDiagram } from './FunctionFlowDiagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TypingText } from '../../components/common/TypingText';
import { FunctionExamples } from './FunctionExamples';
import { useStepStatusContext } from '../../contexts/StepStatusContext';
import { Starfield } from '../../components/common/Starfield';
import { MercuryDialogBox, MercuryGradientButton, MercuryGradientTypography, mercuryPrimary, mercurySecondary, mercuryShadow, mercuryBorder, mercuryBoxShadow } from '../../theme/mercury/MercuryTheme';
import { Progress } from '../../components/common/Progress';

export const FunctionsDecisions = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const { updateMultipleStepStatuses } = useStepStatusContext();

  // Section indices
  const SECTIONS = {
    SUBTITLE1: 0,
    DIAGRAM: 1,
    EXAMPLES: 2,
    SUBTITLE2: 3,
  };

  const totalSections = Object.keys(SECTIONS).length;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {

    if (currentSection === totalSections - 2) {
      // Update both steps in a single state update to avoid React batching issues
      updateMultipleStepStatuses([
        { index: 0, status: 'finished' }, // Finish the first step
        { index: 1, status: 'unlocked' }, // Unlock the second step
      ]);
    }

    if (currentSection < totalSections - 1) {
      setCurrentSection(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      px: { xs: 2, md: 4 },
      overflowY: 'hidden',
      overflowX: 'hidden',
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
            {/* Clip path for Mercury background - covers bottom 1/4 (25%) of the page */}
            {/* Using objectBoundingBox: 0,0 is top-left, 1,1 is bottom-right */}
            {/* Split at 0.75 (75% from top = 25% from bottom) */}
            <clipPath id="mercuryHorizonClip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0.75 Q 0.25 0.62, 0.5 0.62 T 1 0.75 L 1 1 L 0 1 Z" />
            </clipPath>
            {/* Clip path for Starfield - covers top 3/4 (75%) of the page */}
            <clipPath id="starfieldHorizonClip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 L 1 0 L 1 0.75 Q 0.75 0.62, 0.5 0.62 T 0 0.75 Z" />
            </clipPath>
            {/* Mercury color gradient for horizon line */}
            <linearGradient id="mercuryHorizonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(184, 160, 130, 0.4)" />
              <stop offset="50%" stopColor="rgba(184, 160, 130, 0.5)" />
              <stop offset="100%" stopColor="rgba(184, 160, 130, 0.4)" />
            </linearGradient>
          </defs>
        </svg>
        {/* Visible horizon line in Mercury colors */}
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0.3,
            pointerEvents: 'none',
            overflow: 'hidden',
          }}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="none"
            style={{ position: 'absolute', top: 0, left: 0 }}
          >
            {/* Horizon line following the same curve as the clipPath */}
            <path
              d="M 0 810 Q 480 670, 960 670 T 1920 810"
              stroke="url(#mercuryHorizonGradient)"
              strokeWidth="2"
              fill="none"
              opacity={isDarkMode ? 0.6 : 0.5}
            />
          </svg>
        </Box>
      </Box>
      <Starfield clipPath="url(#starfieldHorizonClip)" />
      <MercuryBackground clipPath="url(#mercuryHorizonClip)" />

      <Fade in={isLoaded} timeout={800}>
        <Box sx={{
          width: '100%',
          height: '100vh',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 3,
          position: 'relative',
          zIndex: 1,
          border: 'none',
          outline: 'none',
        }}>

          <Box sx={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 3,
            textAlign: 'center',
          }}>
            <MercuryGradientTypography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem', lg: '3rem' },
                fontWeight: 900,
              }}
            >
              EVERY DECISION IS A FUNCTION
            </MercuryGradientTypography>
          </Box>

          <Fade in={currentSection === SECTIONS.SUBTITLE1} timeout={1000}>
            <MercuryDialogBox
              isDarkMode={isDarkMode}
              sx={{
                p: { xs: 3, md: 4 },
              }}
            >
              {currentSection === SECTIONS.SUBTITLE1 && (
                <Typography
                  sx={{
                    fontWeight: 300,
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    letterSpacing: '0.02em',
                    color: mercuryPrimary,
                  }}
                >
                  <TypingText
                    text="Every decision we make — whether by a person, an animal, or a computer — is a function: it takes inputs, applies rules, and produces an output (a decision)."
                    speed={0.9}
                  />
                </Typography>
              )}
            </MercuryDialogBox>
          </Fade>

          <Fade in={currentSection === SECTIONS.SUBTITLE2} timeout={1000}>
            <Box>
              <MercuryDialogBox
                isDarkMode={isDarkMode}
                sx={{
                  p: { xs: 3, md: 4 },
                }}
              >
                {currentSection === SECTIONS.SUBTITLE2 && (
                  <Typography
                    sx={{
                      fontWeight: 300,
                      letterSpacing: '0.02em',
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      color: mercuryPrimary,
                    }}
                  >
                    <TypingText
                      text="So let's start from the smallest building block — the function — and grow it step by step until we build a neural network."
                      speed={1.1}
                    />
                  </Typography>
                )}
              </MercuryDialogBox>

              <MercuryGradientButton
                size="medium"
                onClick={() => {
                  navigate('/alchemist-ai/roadmap?step=1')
                }}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  mt: 20,
                  px: 3,
                  py: 1.2,
                }}
              >
                NEXT
              </MercuryGradientButton>
            </Box>

          </Fade>

          {/* Flow Diagram */}
          <FunctionFlowDiagram
            isVisible={currentSection === SECTIONS.DIAGRAM}
            isDarkMode={isDarkMode}
          />

          <FunctionExamples
            isVisible={currentSection === SECTIONS.EXAMPLES}
            isDarkMode={isDarkMode}
          />

          {/* Progress Indicator - Upper Right Corner */}
          <Box sx={{
            position: 'fixed',
            top: { xs: 20, },
            right: { xs: 20, },
            zIndex: 1000,
          }}>
            <Progress
              isDarkMode={isDarkMode}
              currentSection={currentSection}
              totalSections={totalSections}
              colorPrimary={mercuryPrimary}
              colorSecondary={mercurySecondary}
              colorShadow={{ dark: mercuryShadow, light: mercuryShadow }}
              colorBorder={{ dark: mercuryBorder.dark, light: mercuryBorder.light }}
              colorBoxShadow={{ dark: mercuryBoxShadow.dark, light: mercuryBoxShadow.light }}
            />
          </Box>

          <Box sx={{
            position: 'fixed',
            bottom: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 2.5,
            zIndex: 1000,
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}>
            <MercuryGradientButton
              onClick={handlePrevious}
              disabled={currentSection === 0}
              sx={{
                fontSize: '1rem',
                letterSpacing: '0.05em',
                px: 4,
                py: 1.5,
              }}
              startIcon={<ArrowBackIcon />}
            >
              PREVIOUS
            </MercuryGradientButton>
            <MercuryGradientButton
              onClick={handleNext}
              disabled={currentSection >= totalSections - 1}
              sx={{
                fontSize: '1rem',
                letterSpacing: '0.05em',
                px: 4,
                py: 1.5,
              }}
              endIcon={<ArrowForwardIcon />}
            >
              NEXT
            </MercuryGradientButton>
          </Box>
        </Box>
      </Fade>

    </Box>
  );
};

export default FunctionsDecisions;
