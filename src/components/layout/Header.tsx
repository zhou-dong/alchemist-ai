import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const Header = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
          <Typography variant="h6" component="h1">
            Alchemist AI
          </Typography>
          {/* Add navigation items here */}
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header; 