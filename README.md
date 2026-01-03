# Sketch Atlas

An interactive learning platform for probabilistic data structures and streaming algorithms (HyperLogLog, Theta Sketch, Count-Min Sketch, and more). Built with React, TypeScript, and Vite.

## Features

- React 19 with TypeScript
- Vite for fast development and building
- Material-UI components
- Dark/Light theme toggle
- Responsive design

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Prerequisites

1. Make sure your repository is public (or you have GitHub Pro for private repos)
2. Ensure you have push access to the repository

### Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages whenever you push to the main branch.

### Manual Deployment

If you prefer to deploy manually:

```bash
# Deploy to GitHub Pages
npm run deploy
```

### Configuration

- **Base URL**: The app is configured with base path `/alchemist-sketches/` for GitHub Pages
- **Homepage**: Update the `homepage` field in `package.json` with your actual GitHub username
- **Branch**: The site will be deployed from the `gh-pages` branch

### After Deployment

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Set the source to "Deploy from a branch"
4. Select the `gh-pages` branch and `/ (root)` folder
5. Click "Save"

Your site will be available at: `https://yourusername.github.io/alchemist-sketches`

## Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── services/      # API and external services
├── theme/         # Material-UI theme configuration
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
