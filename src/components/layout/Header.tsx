import { Typography, Stack, useTheme } from '@mui/material';
import Logo from '../common/Logo';

export const Header = () => {
  const theme = useTheme();

  const color = theme.palette.primary.main;

  return (

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
  );
};

export default Header;
