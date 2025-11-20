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

export const FunctionsDecisions = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // Combined AI and Mercury-themed colors
  const aiColors = {
    // Modern AI gradient colors (Indigo, Purple, Amber, Emerald)
    indigo: '#6366F1',
    purple: '#8B5CF6',
    amber: '#F59E0B',
    emerald: '#10B981',
    // Mercury colors (browns, golds, beiges)
    mercuryGold: isDarkMode ? '#D4A574' : '#C8B89C',
    mercuryBrown: isDarkMode ? '#8B7A5F' : '#7A6A50',
    mercuryBeige: isDarkMode ? '#B8956A' : '#A09070',
    mercuryLight: isDarkMode ? '#E8B86D' : '#D4A574',
    // Lighter variants for better visibility
    lightIndigo: '#818CF8',
    lightPurple: '#A78BFA',
    lightAmber: '#FBBF24',
    lightEmerald: '#34D399',
    // Text colors - modern tech tones that work with Mercury background
    text: isDarkMode ? '#E0E7FF' : '#4F46E5', // Light indigo for dark mode, dark indigo for light
    textSecondary: isDarkMode ? '#C7D2FE' : '#6366F1', // Lighter indigo
    textLight: isDarkMode ? '#F3E8FF' : '#8B5CF6', // Light purple
    textAccent: isDarkMode ? '#FBBF24' : '#F59E0B', // Amber
    // Combined gradient colors - AI colors blended with Mercury colors
    gradientStart: isDarkMode ? '#6366F1' : '#4F46E5', // Indigo
    gradientMid: isDarkMode ? '#8B5CF6' : '#6366F1', // Purple
    gradientMercury: isDarkMode ? '#D4A574' : '#C8B89C', // Mercury gold
    gradientGold: isDarkMode ? '#F59E0B' : '#F59E0B', // Amber
    gradientEmerald: isDarkMode ? '#10B981' : '#10B981', // Emerald
    gradientBrown: isDarkMode ? '#8B7A5F' : '#7A6A50', // Mercury brown
  };

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
      px: { xs: 2, md: 4 },
    }}>
      <MercuryBackground />

      <Fade in={isLoaded} timeout={800}>
        <Box sx={{
          width: '100%',
          height: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          position: 'relative',
          zIndex: 1
        }}>

          <GradientTypography
            variant="h4"
            sx={{
              mb: 1,
              fontWeight: 900,
            }}
          >
            EVERY DECISION IS A FUNCTION
          </GradientTypography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: aiColors.text,
              maxWidth: '700px',
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            Every decision we make — whether by a person, an animal, or a computer — is a function:
            it takes inputs, applies rules, and produces an output (a decision).

            So let’s start from the smallest building block — the function —
            and grow it step by step until we build a neural network.
          </Typography>

          {/* Flow Diagram */}
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
              <Box
                sx={{
                  width: { xs: '90px', md: '100px' },
                  height: { xs: '90px', md: '100px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  // backgroundColor: isDarkMode ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)',
                  border: `1px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.3)' : 'rgba(99, 102, 241, 0.2)'}`,
                  textAlign: 'center',
                  position: 'relative',
                  px: 2,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.75rem', md: '0.85rem' },
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    color: aiColors.text,
                  }}
                >
                  Input
                </Typography>
              </Box>

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
                      <stop offset="0%" stopColor={aiColors.indigo} />
                      <stop offset="100%" stopColor={aiColors.purple} />
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
              <Box
                sx={{
                  width: { xs: '140px', md: '180px' },
                  height: { xs: '140px', md: '180px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  backgroundColor: isDarkMode ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)',
                  border: `1px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.3)' : 'rgba(99, 102, 241, 0.2)'}`,
                  textAlign: 'center',
                  position: 'relative',
                  px: 2,
                  // boxShadow: '0 0 20px rgba(99, 102, 241, 0.2)',
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.75rem', md: '0.85rem' },
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    color: aiColors.text,
                  }}
                >
                  Decision
                </Typography>
              </Box>

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
              <Box
                sx={{
                  width: { xs: '90px', md: '100px' },
                  height: { xs: '90px', md: '100px' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  backgroundColor: isDarkMode ? 'rgba(99, 102, 241, 0.1)' : 'rgba(99, 102, 241, 0.08)',
                  border: `1px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.3)' : 'rgba(99, 102, 241, 0.2)'}`,
                  textAlign: 'center',
                  position: 'relative',
                  px: 2,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '0.75rem', md: '0.85rem' },
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    color: aiColors.text,
                  }}
                >
                  Output
                </Typography>
              </Box>
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
                    color: aiColors.text,
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
                    color: aiColors.text,
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
                    color: aiColors.textSecondary,
                    fontFamily: 'monospace',
                    textAlign: 'center',
                  }}
                >
                  y
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* AI Goal Section */}
          <Box
            sx={{
              mt: 4,
              p: { xs: 3, md: 4 },
              borderRadius: '16px',
              backgroundColor: isDarkMode ? 'rgba(99, 102, 241, 0.08)' : 'rgba(99, 102, 241, 0.05)',
              border: `1px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.3)' : 'rgba(99, 102, 241, 0.25)'}`,
              maxWidth: '800px',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                fontWeight: 700,
                mb: 2,
                backgroundImage: `linear-gradient(135deg, ${aiColors.gradientStart}, ${aiColors.purple}, ${aiColors.gradientMercury}, ${aiColors.gradientGold}, ${aiColors.gradientEmerald}, ${aiColors.gradientBrown}, ${aiColors.gradientStart})`,
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 8s ease infinite',
              }}
            >
              Our Goal: Building Intelligent AI
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                color: aiColors.text,
                lineHeight: 1.8,
              }}
            >
              We want to build an AI system that can{' '}
              <Box component="span" sx={{ fontWeight: 600, color: aiColors.textAccent }}>
                accept any input
              </Box>
              ,{' '}
              <Box component="span" sx={{ fontWeight: 600, color: aiColors.textLight }}>
                process it intelligently
              </Box>
              , and{' '}
              <Box component="span" sx={{ fontWeight: 600, color: aiColors.textLight }}>
                produce meaningful output
              </Box>
              . Just like the decision-making function shown above, but at a scale that can handle complex, real-world problems.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                color: aiColors.text,
                lineHeight: 1.8,
                mt: 2,
              }}
            >
              So we can treat{' '}
              <Box component="span" sx={{ fontWeight: 700, fontStyle: 'italic', color: aiColors.text }}>
                AI as a function
              </Box>
              , just like the diagram above. This AI could be a{' '}
              <Box component="span" sx={{ fontWeight: 600, color: aiColors.textLight }}>
                simple function
              </Box>
              {' '}or it could be a{' '}
              <Box component="span" sx={{ fontWeight: 600, color: aiColors.textAccent }}>
                complex function
              </Box>
              , but they are all{' '}
              <Box component="span" sx={{ fontWeight: 700, backgroundImage: `linear-gradient(135deg, ${aiColors.gradientStart}, ${aiColors.purple}, ${aiColors.gradientMercury}, ${aiColors.gradientGold}, ${aiColors.gradientEmerald}, ${aiColors.gradientBrown})`, backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                functions
              </Box>
              {' '}—mapping inputs to outputs through intelligent processing.
            </Typography>
          </Box>

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
              }}
            >
              Next Step →
            </GradientButton>
          </Box>
        </Box>
      </Fade>

    </Box>
  );
};

export default FunctionsDecisions;

