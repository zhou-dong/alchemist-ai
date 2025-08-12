import { Box, Container } from '@mui/material';
import type { ReactNode } from 'react';
import Header from './Header';
import ThemeToggleFab from '../../theme/ThemeToggleFab';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Container component="main" sx={{ flex: 1, py: 3 }}>
        {children}
      </Container>
      <ThemeToggleFab />
    </Box>
  );
};

export default Layout;
