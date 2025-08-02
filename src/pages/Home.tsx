import { Box, Typography, Card, CardContent, Button, Chip } from '@mui/material';
import { gradients, colors } from '../utils/gradients';

export const Home = () => {
  return (
    <Box>
      <Typography variant="h1" gutterBottom sx={{ mb: 3 }}>
        Welcome to Alchemist AI
      </Typography>
      
      <Typography variant="subtitle1" paragraph sx={{ mb: 4, fontWeight: 400 }}>
        Your intelligent companion for creative and productive tasks.
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Chip label="AI-Powered" color="primary" sx={{ mr: 1, mb: 1 }} />
        <Chip label="Creative" color="primary" sx={{ mr: 1, mb: 1 }} />
        <Chip label="Intelligent" color="primary" sx={{ mb: 1 }} />
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3, mt: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              AI-Powered Insights
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Get intelligent recommendations and insights powered by advanced machine learning algorithms.
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Explore Features
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Creative Automation
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Automate repetitive tasks and unleash your creativity with AI-driven workflows.
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              Get Started
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Smart Analytics
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Visualize your data with intelligent charts and predictive analytics.
            </Typography>
            <Button variant="contained" sx={{ mt: 2 }}>
              View Analytics
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Home; 