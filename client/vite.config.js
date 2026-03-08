import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',      // Bind to all interfaces (required for tunnel)
    port: 5173,
    allowedHosts: true,   // Vite 7: use true (not 'all') to allow all hosts
    proxy: {
      // Forward all /api/* requests to the local Node backend
      // This means testers ONLY need the frontend tunnel URL - no localhost:3001 access needed
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})

