import { Box, Typography } from '@mui/material';

const SimpleFunctions = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h2">Simple Functions</Typography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>The simplest function: if...else - Coming soon</Typography>
    </Box>
  );
};

export default SimpleFunctions;

