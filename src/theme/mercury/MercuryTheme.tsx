import { Box, styled } from '@mui/material';
import { GradientButton, GradientTypography } from '../theme';

// Mercury's characteristic gray-brown colors
export const mercuryBaseColor = { r: 184, g: 160, b: 130 };
export const mercuryPrimary = `rgba(${mercuryBaseColor.r}, ${mercuryBaseColor.g}, ${mercuryBaseColor.b}, 1)`;
export const mercurySecondary = `rgba(${mercuryBaseColor.r - 20}, ${mercuryBaseColor.g - 20}, ${mercuryBaseColor.b - 20}, 1)`;
export const mercuryAccent = `rgba(${mercuryBaseColor.r + 15}, ${mercuryBaseColor.g + 15}, ${mercuryBaseColor.b + 15}, 1)`;
export const mercuryHighlight = `rgba(${mercuryBaseColor.r + 25}, ${mercuryBaseColor.g + 25}, ${mercuryBaseColor.b + 25}, 1)`;
export const mercuryShadow = `rgba(${mercuryBaseColor.r}, ${mercuryBaseColor.g}, ${mercuryBaseColor.b}, 0.4)`;

// Mercury border and shadow colors
export const mercuryBorder = {
    dark: `rgba(${mercuryBaseColor.r}, ${mercuryBaseColor.g}, ${mercuryBaseColor.b}, 0.3)`,
    light: `rgba(${mercuryBaseColor.r + 16}, ${mercuryBaseColor.g + 20}, ${mercuryBaseColor.b + 20}, 0.4)`,
};
export const mercuryBoxShadow = {
    dark: `rgba(${mercuryBaseColor.r - 40}, ${mercuryBaseColor.g - 40}, ${mercuryBaseColor.b - 40}, 0.2)`,
    light: `rgba(${mercuryBaseColor.r - 24}, ${mercuryBaseColor.g - 20}, ${mercuryBaseColor.b - 10}, 0.25)`,
};

export const MercuryDialogBox = styled(Box)<{ isDarkMode: boolean }>(({ isDarkMode }) => ({
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '24px',
    lineHeight: 1.8,
    p: { xs: 3, md: 4 },
    textAlign: 'left',
    backdropFilter: 'blur(2px)',
    border: `1px solid ${isDarkMode ? mercuryBorder.dark : mercuryBorder.light}`,
    boxShadow: `0 8px 32px ${isDarkMode ? mercuryBoxShadow.dark : mercuryBoxShadow.light}`,
}));

export const MercuryGradientButton = styled(GradientButton)({
    fontSize: '1.2rem',
    backgroundImage: `linear-gradient(135deg, ${mercuryPrimary}, ${mercurySecondary}, ${mercuryAccent}, ${mercuryHighlight})`,
    '&::before': {
        background: `linear-gradient(135deg, ${mercuryPrimary}, ${mercurySecondary}, ${mercuryAccent}, ${mercuryHighlight})`,
    },
    '&:hover': {
        backgroundImage: `linear-gradient(135deg, ${mercuryPrimary}, ${mercurySecondary}, ${mercuryAccent}, ${mercuryHighlight})`,
    },
    '& .MuiButton-endIcon': {
        color: mercuryPrimary,
    },
    '& .MuiButton-startIcon': {
        color: mercuryPrimary,
    },
    '&:disabled': {
        backgroundImage: `linear-gradient(135deg, ${mercuryPrimary}, ${mercurySecondary}, ${mercuryAccent}, ${mercuryHighlight})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        opacity: 0.5,
        '& .MuiButton-startIcon': {
            color: mercuryPrimary,
            opacity: 0.5,
        },
    },
    '&:disabled:hover': {
        backgroundImage: `linear-gradient(135deg, ${mercuryPrimary}, ${mercurySecondary}, ${mercuryAccent}, ${mercuryHighlight})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
});

export const MercuryGradientTypography = styled(GradientTypography)({
    textAlign: 'center',
    background: `linear-gradient(135deg, ${mercuryPrimary}, ${mercurySecondary}, ${mercuryAccent}, ${mercuryHighlight})`,
    backgroundSize: '200% 200%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: `drop-shadow(0 0 20px ${mercuryShadow})`,
});

