import { Box, Typography } from '@mui/material';
import { GradientTypography } from '@alchemist/shared';

const NeuralNetworks = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <GradientTypography variant="h2">Neural Networks</GradientTypography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>Master the complete neural network architecture - Coming soon</Typography>
    </Box>
  );
};

export default NeuralNetworks;

