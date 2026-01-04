import { Box, Typography } from '@mui/material';

const Backpropagation = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h2">Backpropagation</Typography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>The algorithm that enables deep learning - Coming soon</Typography>
    </Box>
  );
};

export default Backpropagation;

