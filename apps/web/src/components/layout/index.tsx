import { Box, styled, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { ThemePicker } from './ThemePicker';
import { FloatingParticles, GlowOrbs } from '@alchemist/shared';

const placementStyles = {
    'bottom-right': { bottom: 20, right: 20 },
    'bottom-left': { bottom: 20, left: 20 },
    'top-right': { top: 20, right: 20 },
    'top-left': { top: 20, left: 20 },
};

interface ButtonContainerProps {
    placement: keyof typeof placementStyles;
}

const ButtonContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== 'placement',
})<ButtonContainerProps>(({ placement }) => ({
    position: 'fixed',
    ...placementStyles[placement],
    zIndex: 100,
}));

const Header = () => {
    const navigate = useNavigate();
    return (
        <IconButton
            onClick={() => navigate('/')}
            aria-label="Go to home page"
            color="primary"
            size="large"
        >
            <HomeIcon />
        </IconButton>
    );
};

const Background = () => (
    <>
        <GlowOrbs preset="vibrant" />
        <FloatingParticles particleCount={100} />
    </>
);

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Background />

            <ButtonContainer placement="top-left">
                <Header />
            </ButtonContainer>

            <ButtonContainer placement="top-right">
                <ThemePicker />
            </ButtonContainer>

            <ButtonContainer placement="bottom-right">
                <ThemeToggle />
            </ButtonContainer>

            {children}
        </>
    );
};

export default Layout;
