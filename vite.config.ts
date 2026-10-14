import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        // Separate long-lived vendor chunks so they cache across deploys and download in parallel
        manualChunks: {
          react: ['react', 'react-dom'],
          motion: ['framer-motion'],
          vendor: ['lenis', 'tailwind-merge', 'lucide-react'],
        },
      },
    },
  },
})
