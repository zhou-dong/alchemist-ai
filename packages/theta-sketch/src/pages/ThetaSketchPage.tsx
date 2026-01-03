import { Box, Typography, Fade } from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GradientTypography, GradientButton, Starfield } from '@alchemist/shared';
import { ThetaSketchDemo } from '../components/ThetaSketchDemo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

/**
 * ThetaSketchPage - Main page for the Theta Sketch module
 * 
 * This page provides an educational introduction to Theta Sketches,
 * a probabilistic data structure for cardinality estimation.
 */
export const ThetaSketchPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'auto',
        pb: 4,
      }}
    >
      {/* Starfield Background */}
      <Starfield />

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          pt: 12,
          px: { xs: 2, md: 4 },
        }}
      >
        <Fade in={isLoaded} timeout={800}>
          <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
            {/* Header */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <GradientTypography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', md: '3rem', lg: '4rem' },
                  fontWeight: 900,
                  mb: 2,
                }}
              >
                THETA SKETCH
              </GradientTypography>
              <Typography
                variant="h5"
                sx={{
                  color: 'text.secondary',
                  maxWidth: 800,
                  mx: 'auto',
                  lineHeight: 1.6,
                }}
              >
                A probabilistic data structure for estimating the number of distinct elements
                in a dataset with bounded memory and set operations support.
              </Typography>
            </Box>

            {/* Introduction */}
            <Box
              sx={{
                background: 'rgba(99, 102, 241, 0.05)',
                borderRadius: 3,
                p: 4,
                mb: 4,
                border: '1px solid rgba(99, 102, 241, 0.2)',
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                What is a Theta Sketch?
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
                A <strong>Theta Sketch</strong> (also known as KMV - K Minimum Values) is a 
                probabilistic data structure designed to estimate the cardinality (number of 
                distinct elements) of a dataset. Unlike exact counting methods, Theta Sketches 
                use a sampling approach that provides accurate estimates with bounded memory.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2 }}>
                The key insight is that hash values are uniformly distributed between 0 and 1. 
                By keeping only elements whose hash values fall below a threshold θ (theta), 
                we can estimate the total cardinality as: <code>n ≈ k / θ</code>, where k is 
                the number of elements in the sketch.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                <strong>Key properties:</strong>
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                <li>Bounded memory (O(k) where k is the maximum sketch size)</li>
                <li>Supports set operations (union, intersection, difference)</li>
                <li>Mergeable across distributed systems</li>
                <li>Relative error decreases as θ decreases</li>
              </Box>
            </Box>

            {/* Interactive Demo */}
            <Box
              sx={{
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: 3,
                p: 2,
                mb: 4,
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <ThetaSketchDemo />
            </Box>

            {/* Navigation */}
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <GradientButton
                onClick={() => navigate('/alchemist-sketches/roadmap')}
                startIcon={<ArrowBackIcon />}
                sx={{ px: 4, py: 1.5 }}
              >
                Back to Roadmap
              </GradientButton>
            </Box>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default ThetaSketchPage;

