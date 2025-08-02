# React + MUI Project Structure

This document outlines the recommended project structure for React applications using Material-UI (MUI).

## Directory Structure

```
src/
├── components/           # Reusable UI components
│   ├── common/          # Shared components used across features
│   │   └── Button.tsx
│   ├── layout/          # Layout-related components
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   └── index.ts         # Barrel exports for cleaner imports
├── pages/               # Page-level components
│   └── Home.tsx
├── hooks/               # Custom React hooks
│   ├── useLocalStorage.ts
│   └── index.ts
├── services/            # API services and external integrations
│   └── api.ts
├── theme/               # MUI theme configuration
│   └── index.ts
├── types/               # TypeScript type definitions
│   └── index.ts
├── utils/               # Utility functions and constants
│   └── constants.ts
├── assets/              # Static assets (images, icons, etc.)
├── App.tsx              # Main application component
└── main.tsx            # Application entry point
```

## Key Principles

### 1. Feature-Based Organization
- Group related components, hooks, and utilities together
- Each feature should be self-contained when possible
- Use clear, descriptive folder names

### 2. Separation of Concerns
- **Components**: UI components only
- **Hooks**: Business logic and state management
- **Services**: API calls and external integrations
- **Types**: TypeScript interfaces and types
- **Utils**: Pure utility functions

### 3. Scalability
- Start with a simple structure and evolve as needed
- Use barrel exports (index.ts files) for cleaner imports
- Keep components small and focused

### 4. Reusability
- Create shared components in `components/common/`
- Extract reusable logic into custom hooks
- Use consistent naming conventions

## Best Practices

### Component Organization
- **Common Components**: Reusable across the entire app
- **Layout Components**: Header, Footer, Sidebar, etc.
- **Feature Components**: Specific to a particular feature
- **Page Components**: Top-level route components

### Naming Conventions
- Use PascalCase for components: `Button.tsx`
- Use camelCase for utilities: `useLocalStorage.ts`
- Use kebab-case for folders: `feature-name/`

### Import Organization
```typescript
// 1. External libraries
import React from 'react';
import { Box, Typography } from '@mui/material';

// 2. Internal components
import { Button } from '../components/common';

// 3. Hooks
import { useLocalStorage } from '../hooks';

// 4. Types
import { User } from '../types';

// 5. Utils
import { API_BASE_URL } from '../utils/constants';
```

### Theme Configuration
- Keep theme configuration in `src/theme/`
- Use theme tokens for consistent styling
- Override MUI component defaults in theme

### Type Safety
- Define interfaces in `src/types/`
- Use TypeScript for all components
- Export types from a central location

## Adding New Features

When adding a new feature:

1. Create a feature folder: `src/features/feature-name/`
2. Include components, hooks, and types specific to that feature
3. Export from the feature's index file
4. Import in pages or other components as needed

## Example Feature Structure
```
src/features/auth/
├── components/
│   ├── LoginForm.tsx
│   └── SignupForm.tsx
├── hooks/
│   └── useAuth.ts
├── types/
│   └── auth.ts
└── index.ts
```

This structure promotes maintainability, scalability, and developer experience while following React and MUI best practices. 