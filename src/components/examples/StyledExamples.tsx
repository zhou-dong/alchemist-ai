import { Button, Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components examples
const GradientButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #6366F1 30%, #F59E0B 90%)',
  borderRadius: 25,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(99, 102, 241, 0.3)',
  '&:hover': {
    background: 'linear-gradient(45deg, #F59E0B 30%, #6366F1 90%)',
    transform: 'scale(1.05)',
    transition: 'all 0.3s ease-in-out',
  },
}));

const GlassCard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.25)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  borderRadius: 16,
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.45)',
    transition: 'all 0.3s ease-in-out',
  },
}));

const AnimatedTypography = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #6366F1 30%, #F59E0B 90%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'gradient 3s ease infinite',
  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
}));

const NeonBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  border: '2px solid #00ff88',
  borderRadius: 8,
  boxShadow: '0 0 10px #00ff88, inset 0 0 10px rgba(0, 255, 136, 0.1)',
  background: 'rgba(0, 255, 136, 0.05)',
  color: '#00ff88',
  '&:hover': {
    boxShadow: '0 0 20px #00ff88, inset 0 0 20px rgba(0, 255, 136, 0.2)',
    transform: 'scale(1.02)',
    transition: 'all 0.3s ease-in-out',
  },
}));

export const StyledExamples = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Styled Components Examples
      </Typography>
      
      {/* Gradient Button */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Gradient Button
        </Typography>
        <GradientButton>
          Styled Gradient Button
        </GradientButton>
      </Box>

      {/* Glass Card */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Glass Morphism Card
        </Typography>
        <GlassCard>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Glass Effect
            </Typography>
            <Typography variant="body2">
              This card uses glass morphism with backdrop blur and transparency.
            </Typography>
          </CardContent>
        </GlassCard>
      </Box>

      {/* Animated Typography */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Animated Gradient Text
        </Typography>
        <AnimatedTypography variant="h4">
          Animated Gradient Text
        </AnimatedTypography>
      </Box>

      {/* Neon Box */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Neon Effect Box
        </Typography>
        <NeonBox>
          <Typography variant="h6">
            Neon Glow Effect
          </Typography>
          <Typography variant="body2">
            This box has a neon glow effect with hover animation.
          </Typography>
        </NeonBox>
      </Box>
    </Box>
  );
};

export default StyledExamples; 