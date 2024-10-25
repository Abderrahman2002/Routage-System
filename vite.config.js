import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Routage-System/', // Remplacez par le nom de votre dépôt GitHub

  plugins: [react()],
})
