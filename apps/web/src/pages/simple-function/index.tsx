import { Box, Typography } from '@mui/material';
import { GradientTypography } from '@alchemist/shared';

const SimpleFunctions = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <GradientTypography variant="h2">Simple Functions</GradientTypography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>The simplest function: if...else - Coming soon</Typography>
    </Box>
  );
};

export default SimpleFunctions;

