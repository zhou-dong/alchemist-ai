import { Box, Typography, Card, CardContent, Button } from '@mui/material';

export const Home = () => {
  return (
    <Box>
      <Typography variant="h1" gutterBottom sx={{ mb: 3 }}>
        Welcome to Alchemist AI
      </Typography>
      
      <Typography variant="h4" color="text.secondary" paragraph sx={{ mb: 4, fontWeight: 400 }}>
        Your intelligent companion for creative and productive tasks.
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3, mt: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Feature 1
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description of your first amazing feature.
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Learn More
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Feature 2
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description of your second amazing feature.
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Learn More
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Feature 3
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description of your third amazing feature.
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Learn More
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Home; 