import { Box, Typography } from '@mui/material';
import { GradientTypography } from '@alchemist/shared';

const Welcome = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <GradientTypography variant="h2">Welcome</GradientTypography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>Welcome page - Coming soon</Typography>
    </Box>
  );
};

export default Welcome;

