import {
  Box,
  Typography,
  Fade,
  Button,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Backpropagation = () => {
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
      <Fade in={isLoaded} timeout={800}>
        <Box sx={{
          maxWidth: '900px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4
        }}>
          <Typography
            variant="h1"
            component="h1"
            fontWeight={900}
            sx={{
              fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
              background: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
              backgroundSize: '200% 200%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
              textShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
              animation: 'glow 2s ease-in-out infinite alternate, gradientShift 8s ease infinite',
              letterSpacing: { xs: '0.05em', md: '0.1em' }
            }}
          >
            BACKPROPAGATION
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.1rem', md: '1.5rem' },
              color: 'text.secondary',
              maxWidth: '700px',
              lineHeight: 1.8,
              opacity: 0.9
            }}
          >
            The algorithm that enables deep learning. Discover how errors propagate 
            backward through the network, allowing each layer to adjust its weights 
            and improve predictions. This is the engine that makes neural networks learn.
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <Button
              variant="text"
              onClick={() => navigate('/alchemist-ai/roadmap')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                backgroundImage: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 8s ease infinite',
                textTransform: 'none',
                border: '2px solid transparent',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 2,
                  padding: '2px',
                  background: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
                  backgroundSize: '200% 200%',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  opacity: 0.5,
                  animation: 'gradientShift 8s ease infinite'
                }
              }}
            >
              Back to Roadmap
            </Button>
            <Button
              variant="text"
              onClick={() => navigate('/alchemist-ai/neural-networks')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                backgroundImage: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
                backgroundSize: '200% 200%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradientShift 8s ease infinite',
                textTransform: 'none',
                border: '2px solid transparent',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 2,
                  padding: '2px',
                  background: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
                  backgroundSize: '200% 200%',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  opacity: 0.5,
                  animation: 'gradientShift 8s ease infinite'
                }
              }}
            >
              Next Step →
            </Button>
          </Box>
        </Box>
      </Fade>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes glow {
          from { text-shadow: 0 0 30px rgba(99, 102, 241, 0.3); }
          to { text-shadow: 0 0 50px rgba(99, 102, 241, 0.6), 0 0 70px rgba(139, 92, 246, 0.3); }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />
    </Box>
  );
};

export default Backpropagation;

