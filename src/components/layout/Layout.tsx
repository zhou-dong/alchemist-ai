import { Box, styled } from '@mui/material';
import type { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const HeaderContainer = styled(Box)(({ }) => ({
  position: 'fixed',
  top: 30,
  left: 36,
  zIndex: 100,
}));

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      {children}
    </>
  );
};

export default Layout;
