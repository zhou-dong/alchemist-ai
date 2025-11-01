import { Box, styled } from '@mui/material';
import type { ReactNode } from 'react';
import { ThemeToggleFab } from '../../theme/ThemeToggleFab';

interface LayoutProps {
  children: ReactNode;
}

const HeaderContainer = styled(Box)(({ }) => ({
  position: 'fixed',
  top: 30,
  left: 36,
  zIndex: 100,
}));

const BackgroundContainer = styled(Box)(({ theme }) => ({
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

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <BackgroundContainer />
      <HeaderContainer>
        {/* <Header /> */}
      </HeaderContainer>
      {children}
      <ThemeToggleFab />
    </>
  );
};

export default Layout;
