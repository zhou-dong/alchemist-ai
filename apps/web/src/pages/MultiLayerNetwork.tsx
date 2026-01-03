import { Box, Typography } from '@mui/material';
import { GradientTypography } from '@alchemist/shared';

const MultiLayerNetwork = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <GradientTypography variant="h2">Multi-Layer Network</GradientTypography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>Stacking layers for complex patterns - Coming soon</Typography>
    </Box>
  );
};

export default MultiLayerNetwork;

