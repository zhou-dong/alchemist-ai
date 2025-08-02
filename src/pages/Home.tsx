import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { Button } from '../components/common/Button';

export const Home = () => {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        Welcome to Alchemist AI
      </Typography>
      
      <Typography variant="body1" color="text.secondary" paragraph>
        Your intelligent companion for creative and productive tasks.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
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
        </Grid>

        <Grid item xs={12} md={4}>
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
        </Grid>

        <Grid item xs={12} md={4}>
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
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home; 