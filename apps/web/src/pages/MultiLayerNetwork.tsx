import { Box, Typography } from '@mui/material';

const MultiLayerNetwork = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h2">Multi-Layer Network</Typography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>Stacking layers for complex patterns - Coming soon</Typography>
    </Box>
  );
};

export default MultiLayerNetwork;

