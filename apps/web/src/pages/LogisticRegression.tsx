import { Box, Typography } from '@mui/material';
import { GradientTypography } from '@alchemist/shared';

const LogisticRegression = () => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <GradientTypography variant="h2">Logistic Regression</GradientTypography>
      <Typography sx={{ mt: 2, color: 'text.secondary' }}>Understanding binary classification - Coming soon</Typography>
    </Box>
  );
};

export default LogisticRegression;

