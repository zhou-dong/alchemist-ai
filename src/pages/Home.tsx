import { Box, Typography } from '@mui/material';

export const Home = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        fontWeight={700}
        color="primary"
        gutterBottom
      >
        Welcome to Alchemist
      </Typography>

      <Typography variant="h5" sx={{ mb: 4, color: 'text.secondary' }}>
        Your intelligent companion for creative and productive tasks.
      </Typography>
    </Box>
  );
};

export default Home; 