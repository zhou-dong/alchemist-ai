// Gradient color configurations for consistent use throughout the app

export const gradients = {
  // Primary gradient (Indigo to Amber)
  primary: 'linear-gradient(135deg, #6366F1 0%, #F59E0B 100%)',
  primaryHover: 'linear-gradient(135deg, #F59E0B 0%, #6366F1 100%)',
  
  // Secondary gradient (Indigo to Amber)
  secondary: 'linear-gradient(135deg, #6366F1 0%, #F59E0B 100%)',
  secondaryHover: 'linear-gradient(135deg, #F59E0B 0%, #6366F1 100%)',
  
  // Text gradient
  text: 'linear-gradient(135deg, #6366F1 0%, #F59E0B 100%)',
  
  // Card gradient
  card: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
  
  // Background gradient
  background: 'linear-gradient(135deg, #F8FAFC 0%, #FFFBEB 100%)',
  
  // Glass morphism gradient
  glass: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
  
  // Google AI-inspired gradients
  gemini: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%)',
  geminiHover: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 50%, #6366F1 100%)',
  
  // Fancy AI gradients (like Google's logo colors)
  aiGradient1: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 25%, #EC4899 50%, #F59E0B 75%, #10B981 100%)',
  aiGradient2: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 25%, #F59E0B 50%, #10B981 75%, #6366F1 100%)',
  
  // Logo-style gradients
  logoGradient: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 20%, #EC4899 40%, #F59E0B 60%, #10B981 80%, #6366F1 100%)',
  logoHover: 'linear-gradient(135deg, #10B981 0%, #F59E0B 20%, #EC4899 40%, #8B5CF6 60%, #6366F1 80%, #10B981 100%)',
};

// Individual colors for use in sx props
export const colors = {
  indigo: '#6366F1',
  lightIndigo: '#818CF8',
  darkIndigo: '#4F46E5',
  amber: '#F59E0B',
  lightAmber: '#FBBF24',
  darkAmber: '#D97706',
  
  // Google AI colors
  purple: '#8B5CF6',
  lightPurple: '#A78BFA',
  darkPurple: '#7C3AED',
  pink: '#EC4899',
  lightPink: '#F472B6',
  darkPink: '#DB2777',
  emerald: '#10B981',
  lightEmerald: '#34D399',
  darkEmerald: '#059669',
};

// Shadow configurations with gradient colors
export const shadows = {
  primary: '0 4px 12px rgba(99, 102, 241, 0.25)',
  secondary: '0 4px 12px rgba(245, 158, 11, 0.25)',
  hover: '0 8px 25px rgba(99, 102, 241, 0.35)',
};

// Usage examples:
// sx={{ background: gradients.primary }}
// sx={{ background: gradients.text, backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
// sx={{ boxShadow: shadows.primary }} 