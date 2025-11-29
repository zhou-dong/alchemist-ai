import { Box, styled } from '@mui/material';
import { GradientButton, GradientTypography } from '../theme';

// Venus's characteristic reddish-brown colors
export const venusBaseColor = { r: 139, g: 69, b: 19 };
export const venusPrimary = `rgba(${venusBaseColor.r}, ${venusBaseColor.g}, ${venusBaseColor.b}, 1)`;
export const venusSecondary = `rgba(${venusBaseColor.r + 21}, ${venusBaseColor.g + 13}, ${venusBaseColor.b + 26}, 1)`; // RGB(160, 82, 45)
export const venusAccent = `rgba(${venusBaseColor.r - 38}, ${venusBaseColor.g - 19}, ${venusBaseColor.b - 5}, 1)`; // RGB(101, 50, 14)
export const venusHighlight = `rgba(${venusBaseColor.r + 41}, ${venusBaseColor.g + 31}, ${venusBaseColor.b + 31}, 1)`; // RGB(180, 100, 50)
export const venusShadow = `rgba(${venusBaseColor.r}, ${venusBaseColor.g}, ${venusBaseColor.b}, 0.4)`;

// Venus border and shadow colors
export const venusBorder = {
    dark: `rgba(${venusBaseColor.r}, ${venusBaseColor.g}, ${venusBaseColor.b}, 0.3)`,
    light: `rgba(${venusBaseColor.r + 21}, ${venusBaseColor.g + 13}, ${venusBaseColor.b + 26}, 0.4)`,
};
export const venusBoxShadow = {
    dark: `rgba(${venusBaseColor.r - 59}, ${venusBaseColor.g - 29}, ${venusBaseColor.b - 9}, 0.2)`, // RGB(80, 40, 10)
    light: `rgba(${venusBaseColor.r - 38}, ${venusBaseColor.g - 19}, ${venusBaseColor.b - 5}, 0.25)`, // RGB(101, 50, 14)
};

export const VenusDialogBox = styled(Box)<{ isDarkMode: boolean }>(({ isDarkMode }) => ({
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '24px',
    lineHeight: 1.8,
    p: { xs: 3, md: 4 },
    textAlign: 'left',
    backdropFilter: 'blur(2px)',
    border: `1px solid ${isDarkMode ? venusBorder.dark : venusBorder.light}`,
    boxShadow: `0 8px 32px ${isDarkMode ? venusBoxShadow.dark : venusBoxShadow.light}`,
}));

export const VenusGradientButton = styled(GradientButton)({
    fontSize: '1.2rem',
    backgroundImage: `linear-gradient(135deg, ${venusPrimary}, ${venusSecondary}, ${venusAccent}, ${venusHighlight})`,
    '&::before': {
        background: `linear-gradient(135deg, ${venusPrimary}, ${venusSecondary}, ${venusAccent}, ${venusHighlight})`,
    },
    '&:hover': {
        backgroundImage: `linear-gradient(135deg, ${venusPrimary}, ${venusSecondary}, ${venusAccent}, ${venusHighlight})`,
    },
    '& .MuiButton-endIcon': {
        color: venusPrimary,
    },
    '& .MuiButton-startIcon': {
        color: venusPrimary,
    },
    '&:disabled': {
        backgroundImage: `linear-gradient(135deg, ${venusPrimary}, ${venusSecondary}, ${venusAccent}, ${venusHighlight})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        opacity: 0.5,
        '& .MuiButton-startIcon': {
            color: venusPrimary,
            opacity: 0.5,
        },
    },
    '&:disabled:hover': {
        backgroundImage: `linear-gradient(135deg, ${venusPrimary}, ${venusSecondary}, ${venusAccent}, ${venusHighlight})`,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
});

export const VenusGradientTypography = styled(GradientTypography)({
    textAlign: 'center',
    background: `linear-gradient(135deg, ${venusPrimary}, ${venusSecondary}, ${venusAccent}, ${venusHighlight})`,
    backgroundSize: '200% 200%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    filter: `drop-shadow(0 0 20px ${venusShadow})`,
});

