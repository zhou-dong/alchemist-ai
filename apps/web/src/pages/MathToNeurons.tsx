import { Box, Typography } from '@mui/material';

const MathToNeurons = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h2">Math to Neurons</Typography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>From mathematical functions to neural networks - Coming soon</Typography>
    </Box>
  );
};

export default MathToNeurons;

