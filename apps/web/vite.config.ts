import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@alchemist/shared': path.resolve(__dirname, '../../packages/shared/src'),
      '@alchemist/theta-sketch': path.resolve(__dirname, '../../packages/theta-sketch/src'),
    },
  },
})

