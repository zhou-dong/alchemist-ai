import { type PaletteMode, type PaletteOptions, type ThemeOptions, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

interface GradientTitleProps {
    size?: 'large' | 'medium' | 'small';
}

// Styled component for gradient buttons
export const GradientButton = styled(Button)(({ theme }) => ({
    py: 2.5,
    px: 6,
    fontSize: '1.2rem',
    fontWeight: 700,
    background: 'transparent',
    borderRadius: "8px",
    textTransform: 'none',
    position: 'relative',
    backgroundImage: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
    backgroundSize: '200% 200%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '0.05em',
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
        letterSpacing: '0.1em',
    },
    animation: 'glow 2s ease-in-out infinite alternate, gradientShift 8s ease infinite',
    border: '2px solid transparent',
    '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: "8px",
        padding: '2px',
        background: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
        backgroundSize: '200% 200%',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        opacity: 0.5,
        animation: 'gradientShift 8s ease infinite',
        zIndex: -1
    },
    '&:hover': {
        backgroundImage: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
        backgroundSize: '200% 200%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        transform: 'scale(1.05)',
        '&::before': {
            opacity: 0.8
        }
    },
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
}));

// Styled component for gradient titles
export const GradientTitle = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'size',
})<GradientTitleProps>(({ theme, size = 'medium' }) => {
    const sizeStyles: Record<'large' | 'medium' | 'small', any> = {
        large: {
            fontSize: '4rem',
            letterSpacing: '0.05em',
            [theme.breakpoints.up('md')]: {
                fontSize: '6rem',
                letterSpacing: '0.1em',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '8rem',
            },
        },
        medium: {
            fontSize: '3rem',
            letterSpacing: '0.05em',
            [theme.breakpoints.up('md')]: {
                fontSize: '5rem',
                letterSpacing: '0.1em',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '6rem',
            },
        },
        small: {
            fontSize: '2rem',
            letterSpacing: '0.05em',
            [theme.breakpoints.up('md')]: {
                fontSize: '3rem',
                letterSpacing: '0.08em',
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: '3.5rem',
            },
        },
    };

    return {
        fontWeight: 900,
        background: `linear-gradient(135deg, #6366F1, #8B5CF6, #F59E0B, #10B981)`,
        backgroundSize: '200% 200%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 0 30px rgba(99, 102, 241, 0.3)',
        animation: 'glow 2s ease-in-out infinite alternate, gradientShift 8s ease infinite',
        ...sizeStyles[size],
    };
});

const lightMode: PaletteOptions = {
    primary: {
        main: '#6366F1', // Google Gemini Indigo
        light: '#818CF8', // Light Indigo
        dark: '#4F46E5', // Dark Indigo
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#F59E0B', // Amber (true complementary to indigo)
        light: '#FBBF24', // Light Amber
        dark: '#D97706', // Dark Amber
        contrastText: '#FFFFFF',
    },
    text: {
        primary: '#8B5CF6', // Google AI Purple
        secondary: '#F59E0B', // Amber
    },
    background: {
        default: '#f4f6f8',
        paper: '#ffffff',
    },
};

const darkMode: PaletteOptions = {
    primary: {
        main: '#00BFA5',
        light: '#00DFA5',
        dark: '#00BFA5',
        contrastText: '#FFFFFF',
    },
    secondary: {
        main: '#F59E0B',
        light: '#FBBF24',
        dark: '#D97706',
        contrastText: '#FFFFFF',
    },
    text: {
        primary: '#8B5CF6', // Google AI Purple
        secondary: '#F59E0B', // Amber
    },
    background: {
        default: '#121212',
        paper: '#1E1E1E',
    },
};

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
    palette: {
        mode,
        ...(mode === 'light' ? lightMode : darkMode),
    },
    typography: {
        fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
        button: {
            textTransform: 'none',
        },
    },
});
