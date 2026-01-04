/**
 * Theme Context
 * Provides theme switching functionality for the entire application
 * Supports multiple design themes + light/dark mode
 */

import React, { createContext, useContext, useMemo, useCallback } from 'react';
import { ThemeProvider, createTheme, type PaletteMode } from '@mui/material';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { 
  themeRegistry, 
  getThemeOrDefault, 
  DEFAULT_THEME_ID, 
  getThemeMetadata,
  type ThemeId,
  availableThemeIds,
} from './themes/registry';
import type { SketchThemeDefinition, ThemeMetadata } from './themes/types';

// =============================================================================
// CONTEXT TYPES
// =============================================================================

interface ThemeContextType {
  // Current theme ID
  themeId: ThemeId;
  // Current color mode (light/dark)
  mode: PaletteMode;
  // Current theme definition (full theme object)
  currentTheme: SketchThemeDefinition;
  // Available themes metadata
  availableThemes: ThemeMetadata[];
  // Available theme IDs
  themeIds: ThemeId[];
  
  // Actions
  setTheme: (themeId: ThemeId) => void;
  setMode: (mode: PaletteMode) => void;
  toggleMode: () => void;
  
  // Legacy compatibility
  toggleColorMode: () => void;
}

// =============================================================================
// CONTEXT
// =============================================================================

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// =============================================================================
// HOOK
// =============================================================================

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
};

// Legacy compatibility
export const useColorMode = useTheme;

// =============================================================================
// PROVIDER PROPS
// =============================================================================

interface ThemeContextProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeId;
  defaultMode?: PaletteMode;
}

// =============================================================================
// PROVIDER
// =============================================================================

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ 
  children,
  defaultTheme = DEFAULT_THEME_ID,
  defaultMode = 'dark',
}) => {
  // Persisted state
  const [themeId, setThemeId] = useLocalStorage<ThemeId>('sketch-theme', defaultTheme);
  const [mode, setMode] = useLocalStorage<PaletteMode>('sketch-color-mode', defaultMode);

  // Get the current theme definition
  const currentTheme = useMemo(() => getThemeOrDefault(themeId), [themeId]);

  // Available themes for UI pickers
  const availableThemes = useMemo(() => getThemeMetadata(), []);

  // Toggle mode
  const toggleMode = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, [setMode]);

  // Create MUI theme
  const muiTheme = useMemo(() => {
    const themeOptions = currentTheme.getMuiTheme(mode);
    return createTheme(themeOptions);
  }, [currentTheme, mode]);

  // Context value
  const contextValue = useMemo<ThemeContextType>(() => ({
    themeId: themeId as ThemeId,
    mode,
    currentTheme,
    availableThemes,
    themeIds: availableThemeIds,
    setTheme: setThemeId,
    setMode,
    toggleMode,
    toggleColorMode: toggleMode, // Legacy compatibility
  }), [themeId, mode, currentTheme, availableThemes, setThemeId, setMode, toggleMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={muiTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

// =============================================================================
// LEGACY COMPATIBILITY
// =============================================================================

// Alias for backwards compatibility with ColorModeProvider
export const ColorModeProvider = ThemeContextProvider;

// =============================================================================
// UTILITIES
// =============================================================================

/**
 * Get theme colors for the current theme (useful outside of React components)
 */
export const getThemeColors = (themeId: ThemeId = DEFAULT_THEME_ID) => {
  const theme = themeRegistry[themeId] || themeRegistry[DEFAULT_THEME_ID];
  return theme.colors;
};

/**
 * Get orb presets for the current theme
 */
export const getOrbPresets = (themeId: ThemeId = DEFAULT_THEME_ID) => {
  const theme = themeRegistry[themeId] || themeRegistry[DEFAULT_THEME_ID];
  return theme.orbPresets;
};

