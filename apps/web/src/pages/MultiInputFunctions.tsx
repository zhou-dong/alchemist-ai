import { Box, Typography } from '@mui/material';
import { GradientTypography } from '@alchemist/shared';

const MultiInputFunctions = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <GradientTypography variant="h2">Multi-Input Functions</GradientTypography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>Multiple inputs, one output - Coming soon</Typography>
    </Box>
  );
};

export default MultiInputFunctions;

