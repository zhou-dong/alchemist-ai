import { Box, styled } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggleFab } from '../../theme/ThemeToggleFab';
import { GlassIconButton } from '../../theme/theme';

const HeaderContainer = styled(Box)(() => ({
  position: 'fixed',
  top: 20,
  left: 20,
  zIndex: 100,
}));

const LayoutHeader = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <GlassIconButton
        onClick={() => navigate('/')}
        aria-label="Go to home page"
      >
        <HomeIcon />
      </GlassIconButton>
    </HeaderContainer>
  );
};

const Background = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: -1,
  ...(theme.palette.mode === 'dark' && {
    background: `linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%)`,
  }),
}));

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Background />
      <LayoutHeader />
      {children}
      <ThemeToggleFab />
    </>
  );
};

export default Layout;

