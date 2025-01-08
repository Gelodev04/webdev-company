import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // Allows external access
    port: 5173, // Default port for Vite (or change as needed)
  },
  plugins: [react()],
  base: '/webdev-company/'
})
