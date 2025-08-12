import { type PaletteMode, type PaletteOptions, type ThemeOptions } from '@mui/material';

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
