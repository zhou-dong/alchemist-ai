import { Box, Typography } from '@mui/material';
import { GradientTypography } from '@alchemist/shared';

const MathToNeurons = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <GradientTypography variant="h2">Math to Neurons</GradientTypography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>From mathematical functions to neural networks - Coming soon</Typography>
    </Box>
  );
};

export default MathToNeurons;

