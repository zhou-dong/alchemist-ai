import { Box, Typography } from '@mui/material';
import { GradientTypography } from '@alchemist/shared';

const Perceptron = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <GradientTypography variant="h2">Perceptron</GradientTypography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>Perceptron visualization - Coming soon</Typography>
    </Box>
  );
};

export default Perceptron;

