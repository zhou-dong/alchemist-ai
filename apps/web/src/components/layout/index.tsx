import { Box, styled, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeToggleFab } from '@alchemist/shared/theme/ThemeToggleFab';
import { ThemePicker } from '@alchemist/shared/components/common/ThemePicker';
import { FloatingParticles, GlowOrbs } from '@alchemist/shared';

const HeaderContainer = styled(Box)(() => ({
    position: 'fixed',
    top: 20,
    left: 20,
    zIndex: 100,
}));

const ThemePickerContainer = styled(Box)(() => ({
    position: 'fixed',
    top: 20,
    right: 20,
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

            <HeaderContainer>
                <Header />
            </HeaderContainer>

            <ThemePickerContainer>
                <ThemePicker />
            </ThemePickerContainer>

            <ThemeToggleFab />

            {children}
        </>
    );
};

export default Layout;
