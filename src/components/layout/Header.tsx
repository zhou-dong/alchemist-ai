import { Typography, Stack, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import Logo from '../common/Logo';

const HeaderContainer = styled(Box)(({ }) => ({
  position: 'fixed',
  top: 12,
  left: 20,
  zIndex: 100,
}));

export const Header = () => (
  <HeaderContainer>
    <Stack direction="row" justifyContent="center" alignItems="center" gap={0.2} sx={{ cursor: 'pointer' }}>
      <Logo width={16} height={16} color="#6366f1" />
      <Typography 
        color="primary" 
        variant="body2" 
        component="h1"
      >
        Alchemist
      </Typography>
    </Stack>
  </HeaderContainer>
);

export default Header;
