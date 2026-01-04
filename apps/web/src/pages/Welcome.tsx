import { Box, Typography } from '@mui/material';

const Welcome = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h2">Welcome</Typography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>Welcome page - Coming soon</Typography>
    </Box>
  );
};

export default Welcome;

