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
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#8B5CF6', // Google AI Purple
      secondary: '#F59E0B', // Amber
    },
    grey: {
      50: '#F8FAFC',
      100: '#F1F5F9',
      200: '#E2E8F0',
      300: '#CBD5E1',
      400: '#94A3B8',
      500: '#64748B',
      600: '#475569',
      700: '#334155',
      800: '#1E293B',
      900: '#0F172A',
    },
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
      color: '#6366F1', // Modern Indigo
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
      color: '#6366F1', // Modern Indigo
    },
    h3: {
      fontSize: '1.875rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
      color: '#6366F1', // Modern Indigo
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
      color: '#F59E0B', // Amber
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.5,
      color: '#F59E0B', // Amber
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.5,
      color: '#475569', // Keep some neutral for hierarchy
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#475569', // Neutral for readability
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.6,
      color: '#64748B', // Light neutral for secondary text
    },
    button: {
      fontWeight: 500,
      letterSpacing: '0.01em',
      color: '#FFFFFF',
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: '#F59E0B', // Amber
    },
    subtitle2: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: '#64748B', // Light neutral
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          '&:focus': {
            outline: 'none',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          letterSpacing: '0.025em',
          padding: '12px 20px',
          fontSize: '0.875rem',
          boxShadow: 'none',
          border: '1px solid transparent',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.25)',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
          },
          '&.MuiButton-contained': {
            background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
            '&:hover': {
              background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
            },
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid #E2E8F0',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
            transform: 'translateY(-2px)',
          },
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          background: 'linear-gradient(135deg, #6366F1 0%, #F59E0B 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        filled: {
          background: 'linear-gradient(135deg, #6366F1 0%, #F59E0B 100%)',
          color: 'white',
          '&:hover': {
            background: 'linear-gradient(135deg, #F59E0B 0%, #6366F1 100%)',
          },
        },
      },
    },
  },
});

export default theme; 