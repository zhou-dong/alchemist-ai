import { Box, Typography } from '@mui/material';

export const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h2" color="primary" gutterBottom sx={{ mb: 3 }}>
        Welcome to Alchemist
      </Typography>
      
      <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
        Your intelligent companion for creative and productive tasks.
      </Typography>
      
      <Typography variant="body1" color="secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
        We're here to help you explore the possibilities of AI-powered creativity and productivity.
      </Typography>
    </Box>
  );
};

export default Home; 