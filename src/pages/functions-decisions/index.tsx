import {
  Box,
  Typography,
  Fade,
  Slide,
  useTheme,
  Avatar,
} from '@mui/material';
import { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientButton, GradientTypography } from '../../theme/theme';
import { MercuryBackground } from './MercuryBackground';
import { FunctionFlowDiagram } from './FunctionFlowDiagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';

// "Her" style typing effect - smooth, warm, conversational
// speed: higher value = faster typing (1.0 = default speed, 2.0 = 2x faster, 0.5 = 2x slower)
const TypingText = ({ text, speed = 1.0, onComplete, shouldStart = true }: { text: string; speed?: number; onComplete?: () => void; shouldStart?: boolean }) => {
  const [displayedText, setDisplayedText] = useState('');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const onCompleteRef = useRef(onComplete);
  const currentIndexRef = useRef(0);

  // Update ref when onComplete changes
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Base delay in milliseconds
  // speed 1.0 = 30ms (default), speed 2.0 = 15ms (2x faster), speed 0.5 = 60ms (2x slower)
  const baseDelay = 30;
  const delay = useMemo(() => {
    const calculatedDelay = baseDelay / (speed || 1.0);
    return Math.max(5, Math.min(100, Math.round(calculatedDelay)));
  }, [speed]);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (!shouldStart || !text) {
      setDisplayedText('');
      currentIndexRef.current = 0;
      return;
    }

    // Reset when text changes
    setDisplayedText('');
    currentIndexRef.current = 0;

    const typeNextChar = () => {
      if (currentIndexRef.current < text.length) {
        currentIndexRef.current += 1;
        setDisplayedText(text.slice(0, currentIndexRef.current));
        timeoutRef.current = setTimeout(typeNextChar, delay);
      } else {
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }
    };

    // Start typing
    timeoutRef.current = setTimeout(typeNextChar, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [text, delay, shouldStart]);

  if (!shouldStart) return null;

  return (
    <span>
      {displayedText}
      {displayedText.length < text.length && (
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            width: '3px',
            height: '1.2em',
            bgcolor: 'currentColor',
            ml: 0.5,
            borderRadius: '2px',
            animation: 'softBlink 1.2s ease-in-out infinite',
            '@keyframes softBlink': {
              '0%, 50%': { opacity: 0.8 },
              '51%, 100%': { opacity: 0.3 },
            },
          }}
        />
      )}
    </span>
  );
};

export const FunctionsDecisions = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [typingComplete, setTypingComplete] = useState<{ [key: number]: boolean }>({});
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Section indices
  const SECTIONS = {
    DIAGRAM: 0,
    SUBTITLE1: 1,
    EXAMPLES: 2,
    SUBTITLE2: 3,
    GOAL: 4,
    BUTTONS: 5,
  };

  const totalSections = Object.keys(SECTIONS).length + 1;

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
      <MercuryBackground />

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
                fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
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
                    onComplete={() => setTypingComplete(prev => ({ ...prev, [SECTIONS.SUBTITLE1]: true }))}
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
                    onComplete={() => setTypingComplete(prev => ({ ...prev, [SECTIONS.SUBTITLE2]: true }))}
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

          {/* Function Examples Section */}
          {currentSection === SECTIONS.EXAMPLES && (
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: '800px',
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <Fade in={currentSection === SECTIONS.EXAMPLES} timeout={1000}>
                <Box
                  sx={{
                    fontSize: { xs: '1.3rem', md: '1.6rem' },
                    fontWeight: 300,
                    textAlign: 'center',
                    mb: 3,
                    letterSpacing: '0.05em',
                  }}
                >
                  {currentSection === SECTIONS.EXAMPLES && (
                    <TypingText
                      text="Here are some examples of functions:"
                      speed={0.5}
                      onComplete={() => setTypingComplete(prev => ({ ...prev, [SECTIONS.EXAMPLES]: true }))}
                    />
                  )}
                </Box>
              </Fade>

              {/* Example 1 */}
              <Slide direction="right" in={currentSection === SECTIONS.EXAMPLES} timeout={800}>
                <Box
                  sx={{
                    p: { xs: 2, md: 3 },
                    borderRadius: '12px',
                    backgroundColor: isDarkMode ? 'rgba(99, 102, 241, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        lineHeight: 1.8,
                        fontWeight: 300,
                        mb: 2,
                      }}
                    >
                      {currentSection === SECTIONS.EXAMPLES && typingComplete[SECTIONS.EXAMPLES] && (
                        <TypingText
                          text="If it's raining (input), I take an umbrella (output)."
                          speed={1.0}
                        />
                      )}
                    </Typography>
                    <Box
                      sx={{
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        fontWeight: 300,
                        textAlign: 'center',
                        p: 2.5,
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, ${aiColors.warmOrange}20, ${aiColors.warmAmber}15)`,
                        border: `1px solid ${aiColors.warmOrange}40`,
                        boxShadow: `0 4px 20px ${aiColors.warmOrange}20`,
                        letterSpacing: '0.03em',
                      }}
                    >
                      <Box component="span" sx={{ color: aiColors.warmOrange, fontWeight: 400 }}>{'f('}</Box>
                      <Box component="span" sx={{ color: aiColors.warmAmber, fontWeight: 400 }}>{'rain'}</Box>
                      <Box component="span" sx={{ color: aiColors.warmOrange, fontWeight: 400 }}>{') = '}</Box>
                      <Box component="span" sx={{ color: aiColors.softCyan, fontWeight: 400 }}>{'umbrella or not'}</Box>
                    </Box>
                  </Box>
                </Box>
              </Slide>

              {/* Example 2 */}
              <Slide direction="right" in={currentSection === SECTIONS.EXAMPLES} timeout={800} style={{ transitionDelay: '300ms' }}>
                <Box
                  sx={{
                    p: { xs: 2, md: 3 },
                    borderRadius: '12px',
                    backgroundColor: isDarkMode ? 'rgba(99, 102, 241, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        lineHeight: 1.8,
                        fontWeight: 300,
                        mb: 2,
                      }}
                    >
                      {currentSection === SECTIONS.EXAMPLES && typingComplete[SECTIONS.EXAMPLES] && (
                        <TypingText
                          text="If score > 60, pass, else fail."
                          speed={1.0}
                        />
                      )}
                    </Typography>
                    <Box
                      sx={{
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        fontWeight: 300,
                        textAlign: 'center',
                        p: 2.5,
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, ${aiColors.warmPurple}35, ${aiColors.softBlue}28)`,
                        border: `2px solid ${aiColors.warmPurple}70`,
                        boxShadow: `0 4px 20px ${aiColors.warmPurple}35`,
                        letterSpacing: '0.03em',
                      }}
                    >
                      <Box component="span" sx={{ color: isDarkMode ? '#7B5FCF' : '#6B4FBF', fontWeight: 600 }}>{'f('}</Box>
                      <Box component="span" sx={{ color: aiColors.softBlue, fontWeight: 600 }}>{'score'}</Box>
                      <Box component="span" sx={{ color: isDarkMode ? '#7B5FCF' : '#6B4FBF', fontWeight: 600 }}>{') = '}</Box>
                      <Box component="span" sx={{ color: isDarkMode ? '#E89D2D' : '#D88D1D', fontWeight: 600 }}>{'pass or fail'}</Box>
                    </Box>
                  </Box>
                </Box>
              </Slide>

              {/* Example 3 */}
              <Slide direction="right" in={currentSection === SECTIONS.EXAMPLES} timeout={800} style={{ transitionDelay: '600ms' }}>
                <Box
                  sx={{
                    p: { xs: 2, md: 3 },
                    borderRadius: '12px',
                    backgroundColor: isDarkMode ? 'rgba(99, 102, 241, 0.05)' : 'rgba(99, 102, 241, 0.03)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { xs: '1rem', md: '1.2rem' },
                        lineHeight: 1.8,
                        fontWeight: 300,
                        mb: 2,
                      }}
                    >
                      {currentSection === SECTIONS.EXAMPLES && typingComplete[SECTIONS.EXAMPLES] && (
                        <TypingText
                          text="In sports: if distance < 3 meters, shoot; else pass."
                          speed={1.0}
                        />
                      )}
                    </Typography>
                    <Box
                      sx={{
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        fontWeight: 300,
                        textAlign: 'center',
                        p: 2.5,
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, ${aiColors.softTeal}20, ${aiColors.softGreen}15)`,
                        border: `1px solid ${aiColors.softTeal}40`,
                        boxShadow: `0 4px 20px ${aiColors.softTeal}20`,
                        letterSpacing: '0.03em',
                      }}
                    >
                      <Box component="span" sx={{ color: aiColors.softTeal, fontWeight: 400 }}>{'f('}</Box>
                      <Box component="span" sx={{ color: aiColors.softGreen, fontWeight: 400 }}>{'distance'}</Box>
                      <Box component="span" sx={{ color: aiColors.softTeal, fontWeight: 400 }}>{') = '}</Box>
                      <Box component="span" sx={{ color: aiColors.warmAmber, fontWeight: 400 }}>{'action'}</Box>
                    </Box>
                  </Box>
                </Box>
              </Slide>
            </Box>
          )}

          {/* Back to Roadmap Button - Always visible on left middle */}
          <Box sx={{
            position: 'fixed',
            top: '50%',
            left: { xs: 16, md: 32 },
            transform: 'translateY(-50%)',
            zIndex: 10,
          }}>
            <GradientButton
              size="medium"
              onClick={() => navigate('/alchemist-ai/roadmap?step=0')}
              startIcon={<ArrowBackIcon />}
              sx={{
                px: 3,
                py: 1.2,
                fontSize: '1.2rem',

              }}
            >
              Roadmap
            </GradientButton>
          </Box>

          <Fade in={currentSection === SECTIONS.BUTTONS} timeout={800}>
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}>
              <GradientButton
                size="medium"
                onClick={() => navigate('/alchemist-ai/simple-functions')}
                sx={{
                  py: 1.2,
                  px: 3,
                  fontSize: '1.2rem',
                  '& .MuiButton-startIcon': {
                    WebkitTextFillColor: 'initial',
                    color: 'initial',
                  },
                }}
                startIcon={
                  <Avatar
                    sx={{
                      backgroundColor: 'transparent',
                      width: 32,
                      height: 32
                    }}>
                    <Box component="span" sx={{ fontSize: '1.5rem', lineHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {'♀️'}
                    </Box>
                  </Avatar>}
                endIcon={<ArrowForward sx={{ fontSize: '1.2rem', ml: 1 }} />}
              >
                Venus
              </GradientButton>
            </Box>
          </Fade>

          {/* Navigation Controls - "Her" Style */}
          <Box sx={{
            position: 'fixed',
            bottom: 32,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 2,
            zIndex: 1000,
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
          }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                px: 3,
                py: 1.5,
                borderRadius: '20px',
                background: `linear-gradient(135deg, ${aiColors.warmPurple}20, ${aiColors.softBlue}15)`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${aiColors.warmPurple}40`,
                color: aiColors.text,
                fontSize: '0.9rem',
                fontWeight: 300,
                letterSpacing: '0.05em',
                boxShadow: `0 4px 20px ${aiColors.warmPurple}20`,
              }}
            >
              <Box
                component="span"
                sx={{
                  color: aiColors.softTeal,
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
              <Box component="span">{currentSection + 1} / {totalSections}</Box>
            </Box>
            <GradientButton
              onClick={handlePrevious}
              disabled={currentSection === 0}
              sx={{
                minWidth: '140px',
                opacity: currentSection === 0 ? 0.4 : 1,
                cursor: currentSection === 0 ? 'not-allowed' : 'pointer',
                fontWeight: 300,
                letterSpacing: '0.05em',
                borderRadius: '20px',
                px: 3,
                py: 1.5,
                background: isDarkMode
                  ? 'rgba(155, 126, 222, 0.15)'
                  : 'rgba(155, 126, 222, 0.1)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isDarkMode ? 'rgba(155, 126, 222, 0.3)' : 'rgba(155, 126, 222, 0.2)'}`,
                backgroundClip: 'border-box',
                WebkitBackgroundClip: 'border-box',
                color: theme.palette.text.primary,
                WebkitTextFillColor: theme.palette.text.primary,
                '&:hover': {
                  background: isDarkMode
                    ? 'rgba(155, 126, 222, 0.25)'
                    : 'rgba(155, 126, 222, 0.15)',
                  backgroundClip: 'border-box',
                  WebkitBackgroundClip: 'border-box',
                  color: theme.palette.text.primary,
                  WebkitTextFillColor: theme.palette.text.primary,
                },
                '&:disabled': {
                  background: isDarkMode
                    ? 'rgba(155, 126, 222, 0.05)'
                    : 'rgba(155, 126, 222, 0.05)',
                  border: `1px solid ${isDarkMode ? 'rgba(155, 126, 222, 0.1)' : 'rgba(155, 126, 222, 0.1)'}`,
                  backgroundClip: 'border-box',
                  WebkitBackgroundClip: 'border-box',
                  color: theme.palette.text.primary,
                  WebkitTextFillColor: theme.palette.text.primary,
                },
              }}
              startIcon={<ArrowBackIcon />}
            >
              Previous
            </GradientButton>
            <GradientButton
              onClick={handleNext}
              disabled={currentSection >= totalSections - 1}
              sx={{
                minWidth: '140px',
                opacity: currentSection >= totalSections - 1 ? 0.4 : 1,
                cursor: currentSection >= totalSections - 1 ? 'not-allowed' : 'pointer',
                fontWeight: 300,
                letterSpacing: '0.05em',
                borderRadius: '20px',
                px: 3,
                py: 1.5,
                background: isDarkMode
                  ? 'rgba(155, 126, 222, 0.15)'
                  : 'rgba(155, 126, 222, 0.1)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isDarkMode ? 'rgba(155, 126, 222, 0.3)' : 'rgba(155, 126, 222, 0.2)'}`,
                backgroundClip: 'border-box',
                WebkitBackgroundClip: 'border-box',
                color: theme.palette.text.primary,
                WebkitTextFillColor: theme.palette.text.primary,
                '&:hover': {
                  background: isDarkMode
                    ? 'rgba(155, 126, 222, 0.25)'
                    : 'rgba(155, 126, 222, 0.15)',
                  backgroundClip: 'border-box',
                  WebkitBackgroundClip: 'border-box',
                  color: theme.palette.text.primary,
                  WebkitTextFillColor: theme.palette.text.primary,
                },
                '&:disabled': {
                  background: isDarkMode
                    ? 'rgba(155, 126, 222, 0.05)'
                    : 'rgba(155, 126, 222, 0.05)',
                  border: `1px solid ${isDarkMode ? 'rgba(155, 126, 222, 0.1)' : 'rgba(155, 126, 222, 0.1)'}`,
                  backgroundClip: 'border-box',
                  WebkitBackgroundClip: 'border-box',
                  color: theme.palette.text.primary,
                  WebkitTextFillColor: theme.palette.text.primary,
                },
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Next
            </GradientButton>
          </Box>
        </Box>
      </Fade>

    </Box>
  );
};

export default FunctionsDecisions;

