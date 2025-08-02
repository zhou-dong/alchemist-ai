import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import { gradients, colors } from '../../utils/gradients';

// Google AI-inspired styled components
const GeminiButton = styled(Button)(({ theme }) => ({
  background: gradients.gemini,
  borderRadius: 25,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: '0 3px 5px 2px rgba(139, 92, 246, 0.3)',
  '&:hover': {
    background: gradients.geminiHover,
    transform: 'scale(1.05)',
    transition: 'all 0.3s ease-in-out',
  },
}));

const AIGradientTypography = styled(Typography)(({ theme }) => ({
  background: gradients.aiGradient1,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'gradient 4s ease infinite',
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

const LogoGradientCard = styled(Card)(({ theme }) => ({
  background: gradients.logoGradient,
  borderRadius: 16,
  border: 'none',
  color: 'white',
  boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: gradients.logoHover,
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(139, 92, 246, 0.4)',
  },
}));

export const GoogleAIGradients = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Google AI-Inspired Gradients
      </Typography>
      
      <Typography variant="body1" paragraph sx={{ mb: 4, color: '#64748B' }}>
        These gradients are inspired by Google's AI branding, similar to what they use for Gemini.
      </Typography>

      {/* Gemini-style button */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Gemini-Style Button
        </Typography>
        <GeminiButton>
          AI-Powered Action
        </GeminiButton>
      </Box>

      {/* AI Gradient Typography */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          AI Gradient Typography
        </Typography>
        <AIGradientTypography variant="h3">
          Alchemist AI
        </AIGradientTypography>
      </Box>

      {/* Logo-style gradient card */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Logo-Style Gradient Card
        </Typography>
        <LogoGradientCard>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Advanced AI Features
            </Typography>
            <Typography variant="body2">
              Experience the power of AI with our sophisticated algorithms and cutting-edge technology.
            </Typography>
          </CardContent>
        </LogoGradientCard>
      </Box>

      {/* Color palette showcase */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Google AI Color Palette
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Box sx={{ 
            width: 60, 
            height: 60, 
            bgcolor: colors.indigo, 
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '0.75rem'
          }}>
            Indigo
          </Box>
          <Box sx={{ 
            width: 60, 
            height: 60, 
            bgcolor: colors.purple, 
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '0.75rem'
          }}>
            Purple
          </Box>
          <Box sx={{ 
            width: 60, 
            height: 60, 
            bgcolor: colors.pink, 
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '0.75rem'
          }}>
            Pink
          </Box>
          <Box sx={{ 
            width: 60, 
            height: 60, 
            bgcolor: colors.amber, 
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '0.75rem'
          }}>
            Amber
          </Box>
          <Box sx={{ 
            width: 60, 
            height: 60, 
            bgcolor: colors.emerald, 
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '0.75rem'
          }}>
            Emerald
          </Box>
        </Box>
      </Box>

      {/* Usage examples */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Usage Examples
        </Typography>
        <Typography variant="body2" paragraph>
          Use these gradients in your components:
        </Typography>
        <Box component="pre" sx={{ 
          bgcolor: '#1E293B', 
          color: '#E2E8F0', 
          p: 2, 
          borderRadius: 1,
          fontSize: '0.875rem',
          overflow: 'auto'
        }}>
{`// Gemini-style button
<Button sx={{ background: gradients.gemini }}>

// AI gradient text
<Typography sx={{ 
  background: gradients.aiGradient1,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}}>

// Logo-style card
<Card sx={{ background: gradients.logoGradient }}>`}
        </Box>
      </Box>
    </Box>
  );
};

export default GoogleAIGradients; 