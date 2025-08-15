// Application constants
export const APP_NAME = 'Alchemist AI';
export const APP_VERSION = '1.0.0';

// API endpoints
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Local storage keys
export const STORAGE_KEYS = {
  USER_PREFERENCES: 'user_preferences',
  AUTH_TOKEN: 'auth_token',
  THEME: 'theme',
} as const;

// Route paths
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SETTINGS: '/settings',
} as const;

// Theme constants
export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const; 