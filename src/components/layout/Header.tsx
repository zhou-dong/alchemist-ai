import { Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Logo from '../common/Logo';

const HeaderContainer = styled(Box)(({ }) => ({
  position: 'fixed',
  top: 36,
  left: 64,
  zIndex: 100,
}));

export const Header = () => (
  <HeaderContainer>
    <Stack direction="row" justifyContent="center" alignItems="center" gap={0.5} sx={{ cursor: 'pointer' }}>
      <Logo width={36} height={36} color="#6366f1" />
      <Typography
        color="primary"
        variant="h6"
        component="h1"
        sx={{ fontWeight: 400 }}
      >
        alchemist
      </Typography>
    </Stack>
  </HeaderContainer>
);

export default Header;
