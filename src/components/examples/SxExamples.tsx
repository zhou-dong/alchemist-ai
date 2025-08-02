import { Box, Button, Typography, Card, CardContent } from '@mui/material';

export const SxExamples = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        SX Prop Examples
      </Typography>
      
      {/* Basic sx usage */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Basic SX Styling
        </Typography>
        <Button 
          variant="contained" 
          sx={{ 
            background: 'linear-gradient(45deg, #6366F1 30%, #F59E0B 90%)',
            borderRadius: 25,
            color: 'white',
            '&:hover': {
              background: 'linear-gradient(45deg, #F59E0B 30%, #6366F1 90%)',
            }
          }}
        >
          Gradient Button
        </Button>
      </Box>

      {/* Responsive sx */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Responsive SX
        </Typography>
        <Box 
          sx={{ 
            width: { xs: '100%', sm: '50%', md: '25%' },
            height: { xs: 100, sm: 150, md: 200 },
            bgcolor: 'primary.main',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}
        >
          Responsive Box
        </Box>
      </Box>

      {/* Theme-based sx */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Theme-Based SX
        </Typography>
        <Card 
          sx={{ 
            background: (theme) => theme.palette.grey[50],
            border: (theme) => `2px solid ${theme.palette.primary.main}`,
            '&:hover': {
              transform: 'scale(1.02)',
              transition: 'transform 0.2s ease-in-out'
            }
          }}
        >
          <CardContent>
            <Typography>Theme-based styling</Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Complex sx with pseudo-selectors */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Complex SX with Pseudo-selectors
        </Typography>
        <Button 
          variant="outlined"
          sx={{
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transition: 'left 0.5s',
            },
            '&:hover::before': {
              left: '100%',
            },
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }
          }}
        >
          Shimmer Effect
        </Button>
      </Box>
    </Box>
  );
};

export default SxExamples; 