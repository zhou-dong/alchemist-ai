import { Box, Typography } from '@mui/material';
import { GradientTypography } from '@alchemist/shared';

const FunctionsDecisions = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <GradientTypography variant="h2">Functions & Decisions</GradientTypography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>Every decision is a function - Coming soon</Typography>
    </Box>
  );
};

export default FunctionsDecisions;

