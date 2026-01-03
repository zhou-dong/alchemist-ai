import { Box, Typography } from '@mui/material';
import { GradientTypography } from '@alchemist/shared';

const Backpropagation = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <GradientTypography variant="h2">Backpropagation</GradientTypography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>The algorithm that enables deep learning - Coming soon</Typography>
    </Box>
  );
};

export default Backpropagation;

