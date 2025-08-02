import { createTheme } from '@mui/material/styles';

// Extend the theme to include custom variants
declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    gradient: true;
  }
}

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    glass: true;
  }
}

// Advanced theme with comprehensive component overrides
export const advancedTheme = createTheme({
  palette: {
    primary: {
      main: '#6366F1',
      light: '#818CF8',
      dark: '#4F46E5',
    },
    secondary: {
      main: '#10B981',
      light: '#34D399',
      dark: '#059669',
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  components: {
    // Button overrides with multiple variants
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.2s ease-in-out',
        },
        contained: {
          background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
          boxShadow: '0 2px 4px rgba(99, 102, 241, 0.2)',
          '&:hover': {
            background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
            boxShadow: '0 4px 8px rgba(99, 102, 241, 0.3)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          border: '2px solid #6366F1',
          color: '#6366F1',
          '&:hover': {
            background: 'rgba(99, 102, 241, 0.1)',
            border: '2px solid #4F46E5',
            color: '#4F46E5',
          },
        },
        text: {
          color: '#6366F1',
          '&:hover': {
            background: 'rgba(99, 102, 241, 0.1)',
          },
        },
      },
      variants: [
        {
          props: { variant: 'gradient' },
          style: {
            background: 'linear-gradient(45deg, #6366F1 30%, #818CF8 90%)',
            color: 'white',
            borderRadius: 25,
            '&:hover': {
              background: 'linear-gradient(45deg, #4F46E5 30%, #6366F1 90%)',
              transform: 'scale(1.05)',
            },
          },
        },
      ],
    },

    // Card overrides with glass morphism
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
        },
      },
      variants: [
        {
          props: { variant: 'glass' },
          style: {
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          },
        },
      ],
    },

    // Typography overrides with gradient text
    MuiTypography: {
      styleOverrides: {
        h1: {
          background: 'linear-gradient(135deg, #1E293B 0%, #475569 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
        },
        h2: {
          color: '#1E293B',
          fontWeight: 600,
        },
        h3: {
          color: '#1E293B',
          fontWeight: 600,
        },
        body1: {
          color: '#475569',
          lineHeight: 1.6,
        },
        body2: {
          color: '#64748B',
          lineHeight: 1.6,
        },
      },
    },

    // TextField overrides with modern styling
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#6366F1',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#6366F1',
              borderWidth: 2,
            },
          },
        },
      },
    },

    // Chip overrides with gradient
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          fontWeight: 500,
        },
        filled: {
          background: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
          color: 'white',
          '&:hover': {
            background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)',
          },
        },
      },
    },

    // AppBar overrides
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #E2E8F0',
          boxShadow: 'none',
        },
      },
    },

    // Paper overrides
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
        elevation1: {
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        },
        elevation2: {
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        },
      },
    },
  },
});

export default advancedTheme; 