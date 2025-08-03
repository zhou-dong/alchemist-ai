import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
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
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
