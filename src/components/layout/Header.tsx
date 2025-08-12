import { Typography, Stack, Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import Logo from '../common/Logo';

const HeaderContainer = styled(Box)(({ }) => ({
  position: 'fixed',
  top: 36,
  left: 64,
  zIndex: 100,
}));

export const Header = () => {
  const theme = useTheme();

  const color = theme.palette.primary.main;

  return (
    <HeaderContainer>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={0.5}
        sx={{
          cursor: 'pointer',
        }}
      >
        <Logo width={36} height={36} color={color} />
        <Typography
          color={color}
          variant="h5"
          component="h1"
        >
          Alchemist
        </Typography>
      </Stack>
    </HeaderContainer>
  );
};

export default Header;
