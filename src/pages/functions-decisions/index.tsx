import {
  Box,
  Typography,
  Fade,
  useTheme,
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
import SimplestFunction from './SimplestFunction';
import { useStepStatusContext } from '../../contexts/StepStatusContext';
import { Starfield } from '../../components/common/Starfield';

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
    EXAMPLES_TITLE: 2,
    EXAMPLES: 3,
    SUBTITLE2: 4,
    SIMPLEST_FUNCTION: 5,
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
            {/* Clip path for Mercury background - matches the curved horizon line */}
            {/* Using objectBoundingBox: 0,0 is top-left, 1,1 is bottom-right */}
            {/* Curve: starts at (0, 0.67), peaks at (0.5, ~0.52), ends at (1, 0.67) - positioned at 1/3 from bottom */}
            <clipPath id="mercuryHorizonClip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0.67 Q 0.25 0.52, 0.5 0.52 T 1 0.67 L 1 1 L 0 1 Z" />
            </clipPath>
            {/* Inverse clip path for Starfield - shows only above the curved horizon */}
            <clipPath id="starfieldHorizonClip" clipPathUnits="objectBoundingBox">
              <path d="M 0 0 L 1 0 L 1 0.67 Q 0.75 0.52, 0.5 0.52 T 0 0.67 Z" />
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
            top: { xs: 40, md: 60 },
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
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: '700px',
                width: '90%',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                p: { xs: 3, md: 4 },
                borderRadius: '24px',
                background: isDarkMode
                  ? `linear-gradient(135deg, rgba(155, 126, 222, 0.15), rgba(107, 163, 216, 0.1))`
                  : `linear-gradient(135deg, rgba(171, 142, 238, 0.2), rgba(123, 179, 232, 0.15))`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isDarkMode ? 'rgba(155, 126, 222, 0.3)' : 'rgba(171, 142, 238, 0.4)'}`,
                boxShadow: `0 8px 32px ${isDarkMode ? 'rgba(155, 126, 222, 0.2)' : 'rgba(171, 142, 238, 0.25)'}`,
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, ${aiColors.warmPurple}, ${aiColors.softBlue}, ${aiColors.softTeal})`,
                  backgroundSize: '200% 100%',
                  animation: 'gradientShift 3s ease infinite',
                },
              }}
            >
              {currentSection === SECTIONS.SUBTITLE1 && (
                <Typography
                  sx={{
                    fontWeight: 400,
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
            </Box>
          </Fade>

          <Fade in={currentSection === SECTIONS.SUBTITLE2} timeout={1000}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: '700px',
                width: '90%',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                p: { xs: 3, md: 4 },
                borderRadius: '24px',
                background: isDarkMode
                  ? `linear-gradient(135deg, rgba(78, 205, 196, 0.15), rgba(107, 207, 127, 0.1))`
                  : `linear-gradient(135deg, rgba(94, 221, 214, 0.2), rgba(123, 223, 143, 0.15))`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isDarkMode ? 'rgba(78, 205, 196, 0.3)' : 'rgba(94, 221, 214, 0.4)'}`,
                boxShadow: `0 8px 32px ${isDarkMode ? 'rgba(78, 205, 196, 0.2)' : 'rgba(94, 221, 214, 0.25)'}`,
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, ${aiColors.softTeal}, ${aiColors.softGreen}, ${aiColors.softCyan})`,
                  backgroundSize: '200% 100%',
                  animation: 'gradientShift 3s ease infinite',
                },
              }}
            >
              {currentSection === SECTIONS.SUBTITLE2 && (
                <Typography
                  sx={{
                    fontWeight: 400,
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
            </Box>
          </Fade>

          <Fade in={currentSection === SECTIONS.EXAMPLES_TITLE} timeout={1000}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                maxWidth: '700px',
                width: '90%',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                p: { xs: 3, md: 4 },
                borderRadius: '24px',
                background: isDarkMode
                  ? `linear-gradient(135deg, rgba(78, 205, 196, 0.15), rgba(107, 207, 127, 0.1))`
                  : `linear-gradient(135deg, rgba(94, 221, 214, 0.2), rgba(123, 223, 143, 0.15))`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isDarkMode ? 'rgba(78, 205, 196, 0.3)' : 'rgba(94, 221, 214, 0.4)'}`,
                boxShadow: `0 8px 32px ${isDarkMode ? 'rgba(78, 205, 196, 0.2)' : 'rgba(94, 221, 214, 0.25)'}`,
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: `linear-gradient(90deg, ${aiColors.softTeal}, ${aiColors.softGreen}, ${aiColors.softCyan})`,
                  backgroundSize: '200% 100%',
                  animation: 'gradientShift 3s ease infinite',
                },
              }}
            >
              {currentSection === SECTIONS.EXAMPLES_TITLE && (
                <Typography
                  sx={{
                    fontWeight: 400,
                    letterSpacing: '0.02em',
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                  }}
                >
                  <TypingText
                    text="Here are some examples of functions:"
                    speed={1.1}
                  />
                </Typography>
              )}
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

          <SimplestFunction
            isVisible={currentSection === SECTIONS.SIMPLEST_FUNCTION}
            isDarkMode={isDarkMode}
          />

          {
            (currentSection === totalSections - 1) &&
            <Box sx={{
              position: 'fixed',
              top: '50%',
              right: { xs: 16, md: 32 },
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}>
              <GradientButton
                size="medium"
                onClick={() => {
                  navigate('/alchemist-ai/roadmap?step=1')
                }}
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: 3,
                  py: 1.2,
                  fontSize: '1.2rem',
                }}
              >
                Roadmap
              </GradientButton>
            </Box>
          }

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
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 3,
                py: 1.5,
                borderRadius: '8px',
                background: `linear-gradient(135deg, ${aiColors.warmPurple}10, ${aiColors.softBlue}5)`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${aiColors.warmPurple}40`,
                color: aiColors.text,
                fontSize: '1rem',
                fontWeight: 300,
                letterSpacing: '0.05em',
                boxShadow: `0 4px 20px ${aiColors.warmPurple}20`,
              }}
            >
              <Box
                component="span"
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: '1.2rem',
                  animation: 'pulse 2s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 0.8 },
                    '50%': { opacity: 1 },
                  },
                }}
              >
                {'●'}
              </Box>
              <Box
                component="span"
                sx={{
                  color: theme.palette.text.primary,
                  fontSize: '1.2rem',
                  fontWeight: 300,
                  letterSpacing: '0.05em',
                }}
              >
                {currentSection + 1} / {totalSections}
              </Box>
            </Box>
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
