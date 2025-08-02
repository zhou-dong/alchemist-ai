import { Box, Typography, Card, CardContent, Button, Chip, TextField } from '@mui/material';
import SxExamples from '../components/examples/SxExamples';
import StyledExamples from '../components/examples/StyledExamples';
import GoogleAIGradients from '../components/examples/GoogleAIGradients';

export const Examples = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1" gutterBottom>
        Styling Examples
      </Typography>
      
      <Typography variant="subtitle1" paragraph sx={{ mb: 4, color: '#64748B' }}>
        Different approaches to styling in MUI
      </Typography>

      {/* Theme-based styling examples */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          Theme-Based Styling
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          These components use the theme overrides we defined in the theme configuration.
        </Typography>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Default Button
              </Typography>
              <Button variant="contained" sx={{ mr: 1 }}>
                Contained
              </Button>
              <Button variant="outlined" sx={{ mr: 1 }}>
                Outlined
              </Button>
              <Button variant="text">
                Text
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Form Elements
              </Typography>
              <TextField 
                fullWidth 
                label="Email" 
                variant="outlined" 
                sx={{ mb: 2 }}
              />
              <Chip label="React" color="primary" sx={{ mr: 1 }} />
              <Chip label="MUI" color="primary" />
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Typography
              </Typography>
              <Typography variant="h6" gutterBottom>
                Heading 6
              </Typography>
              <Typography variant="body1" paragraph>
                Body text with custom colors and spacing.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Secondary text for supporting content.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* SX prop examples */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          SX Prop Examples
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          One-off customizations using the sx prop.
        </Typography>
        <SxExamples />
      </Box>

      {/* Styled components examples */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          Styled Components
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          Reusable styled components using the styled() function.
        </Typography>
        <StyledExamples />
      </Box>

      {/* Google AI gradients */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          Google AI-Inspired Gradients
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          Fancy gradients inspired by Google's AI branding, similar to Gemini.
        </Typography>
        <GoogleAIGradients />
      </Box>

      {/* Responsive design examples */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          Responsive Design
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          Responsive layouts using MUI's responsive breakpoints.
        </Typography>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Mobile First
              </Typography>
              <Typography variant="body2">
                This card adapts to different screen sizes.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Tablet
              </Typography>
              <Typography variant="body2">
                Optimized for tablet screens.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Desktop
              </Typography>
              <Typography variant="body2">
                Full desktop experience.
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Large Screen
              </Typography>
              <Typography variant="body2">
                Extra large displays.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Animation examples */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          Animations & Effects
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 3 }}>
          Hover effects, transitions, and animations.
        </Typography>
        
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
          <Card 
            sx={{ 
              cursor: 'pointer',
              '&:hover': {
                transform: 'scale(1.02) rotate(1deg)',
                transition: 'all 0.3s ease-in-out',
              }
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Hover Animation
              </Typography>
              <Typography variant="body2">
                Hover over this card to see the animation effect.
              </Typography>
            </CardContent>
          </Card>

          <Box 
            sx={{ 
              p: 3, 
              bgcolor: 'primary.main', 
              color: 'white',
              borderRadius: 2,
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%': { opacity: 1 },
                '50%': { opacity: 0.7 },
                '100%': { opacity: 1 },
              }
            }}
          >
            <Typography variant="h6" gutterBottom>
              Pulsing Animation
            </Typography>
            <Typography variant="body2">
              This box has a continuous pulsing animation.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Examples; 