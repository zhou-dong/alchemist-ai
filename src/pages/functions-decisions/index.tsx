import {
  Box,
  Typography,
  Fade,
  Slide,
  Grow,
  useTheme,
} from '@mui/material';
import { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientButton, GradientTypography } from '../../theme/theme';
import { MercuryBackground } from './MercuryBackground';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
    HEADING: 0,
    SUBTITLE1: 1,
    SUBTITLE2: 2,
    DIAGRAM: 3,
    EXAMPLES: 4,
    GOAL: 5,
    BUTTONS: 6,
  };

  const totalSections = 7;

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
          maxWidth: '1200px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          position: 'relative',
          zIndex: 1,
          py: { xs: 4, md: 6 },
          pb: { xs: 8, md: 10 },
          border: 'none',
          outline: 'none',
        }}>

          <Slide direction="down" in={currentSection >= SECTIONS.HEADING} timeout={1000}>
            <Box sx={{ mb: 3, textAlign: 'center' }}>
              <GradientTypography
                variant="h3"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: '2rem', md: '3rem' },
                  letterSpacing: '0.05em',
                  lineHeight: 1.4,
                  // background: `linear-gradient(135deg, ${aiColors.warmPurple}, ${aiColors.softBlue}, ${aiColors.softTeal})`,
                  backgroundSize: '200% 200%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradientShift 8s ease infinite',
                  mb: 2,
                  filter: 'drop-shadow(0 0 20px rgba(155, 126, 222, 0.3))',
                }}
              >
                {currentSection >= SECTIONS.HEADING && (
                  <TypingText
                    text="EVERY DECISION IS A FUNCTION"
                    speed={0.4}
                    onComplete={() => setTypingComplete(prev => ({ ...prev, [SECTIONS.HEADING]: true }))}
                  />
                )}
              </GradientTypography>
            </Box>
          </Slide>

          <Fade in={currentSection >= SECTIONS.SUBTITLE1} timeout={1000}>
            <Box
              sx={{
                maxWidth: '700px',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                mb: 4,
                p: { xs: 3, md: 4 },
                borderRadius: '24px',
                background: isDarkMode
                  ? `linear-gradient(135deg, rgba(155, 126, 222, 0.15), rgba(107, 163, 216, 0.1))`
                  : `linear-gradient(135deg, rgba(171, 142, 238, 0.2), rgba(123, 179, 232, 0.15))`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isDarkMode ? 'rgba(155, 126, 222, 0.3)' : 'rgba(171, 142, 238, 0.4)'}`,
                boxShadow: `0 8px 32px ${isDarkMode ? 'rgba(155, 126, 222, 0.2)' : 'rgba(171, 142, 238, 0.25)'}`,
                position: 'relative',
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
              {currentSection >= SECTIONS.SUBTITLE1 && (
                <Typography
                  sx={{
                    fontWeight: 300,
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

          <Fade in={currentSection >= SECTIONS.SUBTITLE2} timeout={1000}>
            <Box
              sx={{
                maxWidth: '700px',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                lineHeight: 1.8,
                mb: 4,
                p: { xs: 3, md: 4 },
                borderRadius: '24px',
                background: isDarkMode
                  ? `linear-gradient(135deg, rgba(78, 205, 196, 0.15), rgba(107, 207, 127, 0.1))`
                  : `linear-gradient(135deg, rgba(94, 221, 214, 0.2), rgba(123, 223, 143, 0.15))`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${isDarkMode ? 'rgba(78, 205, 196, 0.3)' : 'rgba(94, 221, 214, 0.4)'}`,
                boxShadow: `0 8px 32px ${isDarkMode ? 'rgba(78, 205, 196, 0.2)' : 'rgba(94, 221, 214, 0.25)'}`,
                position: 'relative',
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
              {currentSection >= SECTIONS.SUBTITLE2 && (
                <Typography
                  sx={{
                    color: aiColors.text,
                    fontWeight: 300,
                    letterSpacing: '0.02em',
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
          <Fade in={currentSection >= SECTIONS.DIAGRAM} timeout={1000}>
            <Box
              sx={{
                width: '100%',
                maxWidth: '800px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                my: 2,
                px: { xs: 2, md: 4 },
              }}
            >
              {/* Top row: Circles and Arrows */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: { xs: 1, md: 2 },
                  flexWrap: { xs: 'wrap', sm: 'nowrap' }
                }}
              >
                {/* Input Circle */}
                <Grow in={currentSection >= SECTIONS.DIAGRAM} timeout={800} style={{ transitionDelay: '200ms' }}>
                  <Box
                    sx={{
                      width: { xs: '90px', md: '100px' },
                      height: { xs: '90px', md: '100px' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: `1px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.3)' : 'rgba(99, 102, 241, 0.2)'}`,
                      textAlign: 'center',
                      position: 'relative',
                      px: 2,
                      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'scale(1.15) rotate(5deg)',
                        border: `2px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.6)' : 'rgba(99, 102, 241, 0.5)'}`,
                        boxShadow: `0 0 20px ${isDarkMode ? 'rgba(139, 92, 246, 0.4)' : 'rgba(99, 102, 241, 0.3)'}`,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: -2,
                        borderRadius: '50%',
                        padding: '2px',
                        background: 'linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)',
                        backgroundSize: '200% 200%',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: -1,
                        animation: 'gradientShift 8s ease infinite',
                      },
                      '&:hover::before': {
                        opacity: 0.6,
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.75rem', md: '0.85rem' },
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Input
                    </Typography>
                  </Box>
                </Grow>

                {/* Arrow 1 */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexShrink: 0
                  }}
                >
                  <svg
                    width={60}
                    height={20}
                    viewBox="0 0 60 20"
                    style={{ overflow: 'visible' }}
                  >
                    <defs>
                      <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={aiColors.warmPurple} />
                        <stop offset="100%" stopColor={aiColors.softBlue} />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 10 L 50 10 M 45 5 L 50 10 L 45 15"
                      stroke="url(#arrowGradient)"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>

                {/* Function/Decision Circle */}
                <Grow in={currentSection >= SECTIONS.DIAGRAM} timeout={800} style={{ transitionDelay: '400ms' }}>
                  <Box
                    sx={{
                      width: { xs: '140px', md: '180px' },
                      height: { xs: '140px', md: '180px' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: `1px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.3)' : 'rgba(99, 102, 241, 0.2)'}`,
                      textAlign: 'center',
                      position: 'relative',
                      px: 2,
                      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'scale(1.2) rotate(-5deg)',
                        border: `2px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.6)' : 'rgba(99, 102, 241, 0.5)'}`,
                        boxShadow: `0 0 30px ${isDarkMode ? 'rgba(139, 92, 246, 0.5)' : 'rgba(99, 102, 241, 0.4)'}`,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: -2,
                        borderRadius: '50%',
                        padding: '2px',
                        background: 'linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)',
                        backgroundSize: '200% 200%',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: -1,
                        animation: 'gradientShift 8s ease infinite',
                      },
                      '&:hover::before': {
                        opacity: 0.8,
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.75rem', md: '0.85rem' },
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Decision
                    </Typography>
                  </Box>
                </Grow>

                {/* Arrow 2 */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexShrink: 0
                  }}
                >
                  <svg
                    width={60}
                    height={20}
                    viewBox="0 0 60 20"
                    style={{ overflow: 'visible' }}
                  >
                    <path
                      d="M 0 10 L 50 10 M 45 5 L 50 10 L 45 15"
                      stroke="url(#arrowGradient)"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Box>

                {/* Output Circle */}
                <Grow in={currentSection >= SECTIONS.DIAGRAM} timeout={800} style={{ transitionDelay: '600ms' }}>
                  <Box
                    sx={{
                      width: { xs: '90px', md: '100px' },
                      height: { xs: '90px', md: '100px' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: `1px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.3)' : 'rgba(99, 102, 241, 0.2)'}`,
                      textAlign: 'center',
                      position: 'relative',
                      px: 2,
                      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'scale(1.15) rotate(5deg)',
                        border: `2px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.6)' : 'rgba(99, 102, 241, 0.5)'}`,
                        boxShadow: `0 0 20px ${isDarkMode ? 'rgba(139, 92, 246, 0.4)' : 'rgba(99, 102, 241, 0.3)'}`,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: -2,
                        borderRadius: '50%',
                        padding: '2px',
                        background: 'linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)',
                        backgroundSize: '200% 200%',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: -1,
                        animation: 'gradientShift 8s ease infinite',
                      },
                      '&:hover::before': {
                        opacity: 0.6,
                      },
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: '0.75rem', md: '0.85rem' },
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px',
                      }}
                    >
                      Output
                    </Typography>
                  </Box>
                </Grow>
              </Box>

              {/* Bottom row: Example Text Labels */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  gap: { xs: 1, md: 2 },
                  flexWrap: { xs: 'wrap', sm: 'nowrap' },
                  mt: 1
                }}
              >
                <Box
                  sx={{
                    width: { xs: '90px', md: '100px' },
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '0.7rem', md: '0.8rem' },
                      fontFamily: 'monospace',
                      textAlign: 'center',
                    }}
                  >
                    x
                  </Typography>
                </Box>

                {/* Spacer for arrow */}
                <Box sx={{ width: { xs: '60px', md: '60px' }, flexShrink: 0 }} />

                <Box
                  sx={{
                    width: { xs: '140px', md: '180px' },
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '0.65rem', md: '0.75rem' },
                      fontStyle: 'italic',
                      textAlign: 'center',
                    }}
                  >
                    f(x)
                  </Typography>
                </Box>

                {/* Spacer for arrow */}
                <Box sx={{ width: { xs: '60px', md: '60px' }, flexShrink: 0 }} />

                <Box
                  sx={{
                    width: { xs: '90px', md: '100px' },
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: { xs: '0.7rem', md: '0.8rem' },
                      fontFamily: 'monospace',
                      textAlign: 'center',
                    }}
                  >
                    y
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Fade>

          {/* Function Examples Section */}
          <Box
            sx={{
              mt: 4,
              width: '100%',
              maxWidth: '800px',
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
            }}
          >
            <Fade in={currentSection >= SECTIONS.EXAMPLES} timeout={1000}>
              <Box
                sx={{
                  fontSize: { xs: '1.3rem', md: '1.6rem' },
                  fontWeight: 300,
                  textAlign: 'center',
                  color: aiColors.warmPurple,
                  mb: 3,
                  letterSpacing: '0.05em',
                }}
              >
                {currentSection >= SECTIONS.EXAMPLES && (
                  <TypingText
                    text="Examples"
                    speed={0.5}
                    onComplete={() => setTypingComplete(prev => ({ ...prev, [SECTIONS.EXAMPLES]: true }))}
                  />
                )}
              </Box>
            </Fade>

            {/* Example 1 */}
            <Slide direction="right" in={currentSection >= SECTIONS.EXAMPLES} timeout={800}>
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
                      color: aiColors.text,
                      mb: 2,
                    }}
                  >
                    {currentSection >= SECTIONS.EXAMPLES && typingComplete[SECTIONS.EXAMPLES] && (
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
                      background: `linear-gradient(135deg, ${aiColors.warmPurple}20, ${aiColors.softBlue}15)`,
                      border: `1px solid ${aiColors.warmPurple}40`,
                      boxShadow: `0 4px 20px ${aiColors.warmPurple}20`,
                      letterSpacing: '0.03em',
                    }}
                  >
                    <Box component="span" sx={{ color: aiColors.warmPurple, fontWeight: 400 }}>{'f('}</Box>
                    <Box component="span" sx={{ color: aiColors.softBlue, fontWeight: 400 }}>{'rain'}</Box>
                    <Box component="span" sx={{ color: aiColors.warmPurple, fontWeight: 400 }}>{') = '}</Box>
                    <Box component="span" sx={{ color: aiColors.warmAmber, fontWeight: 400 }}>{'umbrella'}</Box>
                  </Box>
                </Box>
              </Box>
            </Slide>

            {/* Example 2 */}
            <Slide direction="right" in={currentSection >= SECTIONS.EXAMPLES} timeout={800} style={{ transitionDelay: '300ms' }}>
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
                      color: aiColors.text,
                      mb: 2,
                    }}
                  >
                    {currentSection >= SECTIONS.EXAMPLES && typingComplete[SECTIONS.EXAMPLES] && (
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
                      background: `linear-gradient(135deg, ${aiColors.softTeal}20, ${aiColors.softGreen}15)`,
                      border: `1px solid ${aiColors.softTeal}40`,
                      boxShadow: `0 4px 20px ${aiColors.softTeal}20`,
                      letterSpacing: '0.03em',
                    }}
                  >
                    <Box component="span" sx={{ color: aiColors.softTeal, fontWeight: 400 }}>{'f('}</Box>
                    <Box component="span" sx={{ color: aiColors.softGreen, fontWeight: 400 }}>{'score'}</Box>
                    <Box component="span" sx={{ color: aiColors.softTeal, fontWeight: 400 }}>{') = '}</Box>
                    <Box component="span" sx={{ color: aiColors.warmAmber, fontWeight: 400 }}>{'pass or fail'}</Box>
                  </Box>
                </Box>
              </Box>
            </Slide>

            {/* Example 3 */}
            <Slide direction="right" in={currentSection >= SECTIONS.EXAMPLES} timeout={800} style={{ transitionDelay: '600ms' }}>
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
                      color: aiColors.text,
                      mb: 2,
                    }}
                  >
                    {currentSection >= SECTIONS.EXAMPLES && typingComplete[SECTIONS.EXAMPLES] && (
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
                      background: `linear-gradient(135deg, ${aiColors.warmOrange}20, ${aiColors.warmAmber}15)`,
                      border: `1px solid ${aiColors.warmOrange}40`,
                      boxShadow: `0 4px 20px ${aiColors.warmOrange}20`,
                      letterSpacing: '0.03em',
                    }}
                  >
                    <Box component="span" sx={{ color: aiColors.warmOrange, fontWeight: 400 }}>{'f('}</Box>
                    <Box component="span" sx={{ color: aiColors.warmAmber, fontWeight: 400 }}>{'distance'}</Box>
                    <Box component="span" sx={{ color: aiColors.warmOrange, fontWeight: 400 }}>{') = '}</Box>
                    <Box component="span" sx={{ color: aiColors.softCyan, fontWeight: 400 }}>{'action'}</Box>
                  </Box>
                </Box>
              </Box>
            </Slide>
          </Box>

          <Fade in={currentSection >= SECTIONS.BUTTONS} timeout={800}>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <GradientButton
                size="medium"
                onClick={() => navigate('/alchemist-ai/roadmap?step=0')}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
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
                }}
              >
                Back to Roadmap
              </GradientButton>
              <GradientButton
                size="medium"
                onClick={() => navigate('/alchemist-ai/simple-functions')}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
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
                }}
              >
                Next Step →
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

