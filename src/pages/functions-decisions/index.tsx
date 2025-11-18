import {
  Box,
  Typography,
  Fade,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientTypography, GradientButton } from '../../theme/theme';
import { MercuryBackground } from './MercuryBackground';

export const FunctionsDecisions = () => {
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
      px: { xs: 2, md: 4 },
    }}>
      <MercuryBackground />

      <Fade in={isLoaded} timeout={800}>
        <Box sx={{
          maxWidth: '900px',
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
            }}
          >
            Every decision is a function
          </GradientTypography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: 'text.secondary',
              maxWidth: '700px',
              lineHeight: 1.8,
              opacity: 0.9,
              mb: 3
            }}
          >
            In our brain or in computer science, every decision can be seen as a function:
            it takes inputs, processes them, and produces an output.
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
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
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
                    backgroundImage: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
                    backgroundSize: '200% 200%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradientShift 8s ease infinite',
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
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#8B5CF6" />
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
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
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
                    backgroundImage: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
                    backgroundSize: '200% 200%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradientShift 8s ease infinite',
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
                  backgroundColor: 'rgba(99, 102, 241, 0.1)',
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
                    backgroundImage: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
                    backgroundSize: '200% 200%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradientShift 8s ease infinite',
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
                    color: 'text.primary',
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
                    color: 'text.primary',
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
                    color: 'text.primary',
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
              backgroundColor: 'rgba(99, 102, 241, 0.05)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
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
                backgroundImage: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
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
                color: 'text.primary',
                lineHeight: 1.8,
                opacity: 0.9,
              }}
            >
              We want to build an AI system that can{' '}
              <Box component="span" sx={{ fontWeight: 600, color: 'primary.main' }}>
                accept any input
              </Box>
              ,{' '}
              <Box component="span" sx={{ fontWeight: 600, color: 'secondary.main' }}>
                process it intelligently
              </Box>
              , and{' '}
              <Box component="span" sx={{ fontWeight: 600, color: '#8B5CF6' }}>
                produce meaningful output
              </Box>
              . Just like the decision-making function shown above, but at a scale that can handle complex, real-world problems.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '0.95rem', md: '1.1rem' },
                color: 'text.primary',
                lineHeight: 1.8,
                opacity: 0.9,
                mt: 2,
              }}
            >
              So we can treat{' '}
              <Box component="span" sx={{ fontWeight: 700, fontStyle: 'italic' }}>
                AI as a function
              </Box>
              , just like the diagram above. This AI could be a{' '}
              <Box component="span" sx={{ fontWeight: 600, color: 'primary.light' }}>
                simple function
              </Box>
              {' '}or it could be a{' '}
              <Box component="span" sx={{ fontWeight: 600, color: '#8B5CF6' }}>
                complex function
              </Box>
              , but they are all{' '}
              <Box component="span" sx={{ fontWeight: 700, backgroundImage: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`, backgroundSize: '200% 200%', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
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

