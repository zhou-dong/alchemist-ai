// Color theory options for Indigo-based themes

export const indigoColorOptions = {
  // Option 1: Indigo + Amber (True Complementary)
  complementary: {
    primary: '#6366F1', // Indigo
    secondary: '#F59E0B', // Amber
    description: 'True complementary colors - maximum contrast and vibrancy',
    useCase: 'High-energy, bold designs'
  },

  // Option 2: Indigo + Orange (High Contrast)
  highContrast: {
    primary: '#6366F1', // Indigo
    secondary: '#F97316', // Orange
    description: 'High contrast complementary - modern and energetic',
    useCase: 'Tech, startup, innovative brands'
  },

  // Option 3: Indigo + Yellow (Classic Complementary)
  classic: {
    primary: '#6366F1', // Indigo
    secondary: '#EAB308', // Yellow
    description: 'Classic complementary - balanced and professional',
    useCase: 'Corporate, trustworthy applications'
  },

  // Option 4: Indigo + Emerald (Current - Analogous)
  current: {
    primary: '#6366F1', // Indigo
    secondary: '#10B981', // Emerald
    description: 'Analogous colors - harmonious but lower contrast',
    useCase: 'Calm, professional, nature-inspired'
  },

  // Option 5: Indigo + Teal (Split Complementary)
  splitComplementary: {
    primary: '#6366F1', // Indigo
    secondary: '#14B8A6', // Teal
    description: 'Split complementary - sophisticated and balanced',
    useCase: 'Premium, sophisticated applications'
  },

  // Option 6: Indigo + Purple (Monochromatic)
  monochromatic: {
    primary: '#6366F1', // Indigo
    secondary: '#8B5CF6', // Purple
    description: 'Monochromatic - elegant and cohesive',
    useCase: 'Luxury, elegant, unified branding'
  }
};

// Color wheel positions for reference
export const colorWheelPositions = {
  indigo: 275,      // Blue-violet
  emerald: 150,     // Green
  amber: 45,        // Yellow-orange
  orange: 30,       // Orange
  yellow: 60,       // Yellow
  teal: 180,        // Blue-green
  purple: 270       // Purple
};

// Recommendations based on use case
export const recommendations = {
  ai: 'complementary', // High energy, innovative
  corporate: 'classic', // Trustworthy, professional
  luxury: 'monochromatic', // Elegant, sophisticated
  startup: 'highContrast', // Modern, energetic
  nature: 'current', // Calm, harmonious
  tech: 'splitComplementary' // Premium, sophisticated
};

