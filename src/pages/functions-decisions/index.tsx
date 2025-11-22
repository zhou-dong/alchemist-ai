import {
  Box,
  Typography,
  Fade,
  useTheme,
  styled,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientButton, GradientTypography } from '../../theme/theme';
import { MercuryBackground } from './MercuryBackground';
import { FunctionFlowDiagram } from './FunctionFlowDiagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TypingText } from './TypingText';
import { FunctionExamples } from './FunctionExamples';
import { useStepStatusContext } from '../../contexts/StepStatusContext';
import { Starfield } from '../../components/common/Starfield';

const DialogBox = styled(Box)<{ isDarkMode: boolean }>(({ isDarkMode }) => ({
  position: 'absolute',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '24px',
  lineHeight: 1.8,
  p: { xs: 3, md: 4 },
  textAlign: 'left',
  background: isDarkMode
    ? `linear-gradient(135deg, rgba(155, 126, 222, 0.08), rgba(107, 163, 216, 0.05))`
    : `linear-gradient(135deg, rgba(171, 142, 238, 0.12), rgba(123, 179, 232, 0.08))`,
  backdropFilter: 'blur(5px)',
  border: `1px solid ${isDarkMode ? 'rgba(155, 126, 222, 0.3)' : 'rgba(171, 142, 238, 0.4)'}`,
  boxShadow: `0 8px 32px ${isDarkMode ? 'rgba(155, 126, 222, 0.2)' : 'rgba(171, 142, 238, 0.25)'}`,
}));

export const FunctionsDecisions = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  const { updateMultipleStepStatuses } = useStepStatusContext();

  // Section indices
  const SECTIONS = {
    DIAGRAM: 0,
    SUBTITLE1: 1,
    EXAMPLES: 2,
    SUBTITLE2: 3,
  };

  const totalSections = Object.keys(SECTIONS).length;

  // Gender-neutral AI colors - warm, organic, human-like
  const aiColors = {
    // Warm, neutral colors - organic and inviting
    warmAmber: isDarkMode ? '#FFB84D' : '#FFC966',
    softTeal: isDarkMode ? '#4ECDC4' : '#5EDDD6',
    warmPurple: isDarkMode ? '#9B7EDE' : '#AB8EEE',
    softGreen: isDarkMode ? '#6BCF7F' : '#7BDF8F',
    warmOrange: isDarkMode ? '#FF8C42' : '#FF9C52',
    softBlue: isDarkMode ? '#6BA3D8' : '#7BB3E8',
    warmIndigo: isDarkMode ? '#7B8FD8' : '#8B9FE8',
    softCyan: isDarkMode ? '#5BC8D8' : '#6BD8E8',
    // Text colors - warm and readable
    text: isDarkMode ? '#F5F5F5' : '#2C2C2C',
    textSecondary: isDarkMode ? '#E0E0E0' : '#4A4A4A',
    textLight: isDarkMode ? '#E8F4F8' : '#6BA3D8',
    textAccent: isDarkMode ? '#FFB84D' : '#FF8C42',
    // Gradient colors - soft, warm, organic, neutral
    gradientStart: isDarkMode ? '#9B7EDE' : '#AB8EEE',
    gradientMid: isDarkMode ? '#6BA3D8' : '#7BB3E8',
    gradientEnd: isDarkMode ? '#4ECDC4' : '#5EDDD6',
    gradientSoft: isDarkMode ? '#FFB84D' : '#FFC966',
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
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
          </defs>
        </svg>
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
            <GradientTypography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem', lg: '3rem' },
                textAlign: 'center',
                fontWeight: 900,
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 8s ease infinite',
                filter: 'drop-shadow(0 0 20px rgba(155, 126, 222, 0.3))',
              }}
            >
              EVERY DECISION IS A FUNCTION
            </GradientTypography>
          </Box>

          <Fade in={currentSection === SECTIONS.SUBTITLE1} timeout={1000}>
            <DialogBox
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
                  }}
                >
                  <TypingText
                    text="Every decision we make — whether by a person, an animal, or a computer — is a function: it takes inputs, applies rules, and produces an output (a decision)."
                    speed={0.9}
                  />
                </Typography>
              )}
            </DialogBox>
          </Fade>

          <Fade in={currentSection === SECTIONS.SUBTITLE2} timeout={1000}>
            <Box>

              <DialogBox
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
                    }}
                  >
                    <TypingText
                      text="So let's start from the smallest building block — the function — and grow it step by step until we build a neural network."
                      speed={1.1}
                    />
                  </Typography>
                )}
              </DialogBox>

              <GradientButton
                size="medium"
                onClick={() => {
                  navigate('/alchemist-ai/roadmap?step=1')
                }}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  mt: 20,
                  px: 3,
                  py: 1.2,
                  fontSize: '1.2rem',
                }}
              >
                NEXT
              </GradientButton>
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                px: { xs: 2.5, },
                py: { xs: 1.5, },
                borderRadius: '16px',
                backdropFilter: 'blur(1px)',
                border: `1px solid ${isDarkMode ? 'rgba(155, 126, 222, 0.3)' : 'rgba(171, 142, 238, 0.4)'}`,
                boxShadow: `0 8px 32px ${isDarkMode ? 'rgba(155, 126, 222, 0.2)' : 'rgba(171, 142, 238, 0.25)'}`,

              }}
            >
              {/* Progress Text */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 1.5,
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: theme.palette.text.primary,
                    fontSize: { xs: '1rem', md: '1.125rem' },
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    fontFamily: 'monospace',
                  }}
                >
                  {currentSection + 1} / {totalSections}
                </Box>
              </Box>

              {/* Progress Bar */}
              <Box
                sx={{
                  width: '100%',
                  height: '4px',
                  borderRadius: '2px',
                  background: isDarkMode
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(0, 0, 0, 0.1)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: `${((currentSection + 1) / totalSections) * 100}%`,
                    background: `linear-gradient(90deg, ${aiColors.warmPurple}, ${aiColors.softBlue})`,
                    borderRadius: '2px',
                    transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: `0 0 8px ${aiColors.warmPurple}60`,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                      animation: 'shimmer 2s ease-in-out infinite',
                      '@keyframes shimmer': {
                        '0%': { transform: 'translateX(-100%)' },
                        '100%': { transform: 'translateX(100%)' },
                      },
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>

          {/* Navigation Controls - "Her" Style */}
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
            <GradientButton
              onClick={handlePrevious}
              disabled={currentSection === 0}
              sx={{
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                px: 4,
                py: 1.5,
              }}
              startIcon={<ArrowBackIcon />}
            >
              PREVIOUS
            </GradientButton>
            <GradientButton
              onClick={handleNext}
              disabled={currentSection >= totalSections - 1}
              sx={{
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                px: 4,
                py: 1.5,
              }}
              endIcon={<ArrowForwardIcon />}
            >
              NEXT
            </GradientButton>
          </Box>
        </Box>
      </Fade>

    </Box>
  );
};

export default FunctionsDecisions;
