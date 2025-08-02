// Common types used throughout the application

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ThemeMode {
  mode: 'light' | 'dark';
}

export interface UserPreferences {
  theme: ThemeMode;
  language: string;
  notifications: boolean;
}

// Component prop types
export interface LayoutProps {
  children: React.ReactNode;
}

export interface ButtonProps {
  variant?: 'contained' | 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
} 