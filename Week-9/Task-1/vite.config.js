import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['bootstrap']
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  server: {
    hmr: {
      overlay: true
    }
  }
})
