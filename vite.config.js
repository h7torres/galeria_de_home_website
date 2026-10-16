import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this site from /galeria_de_home_website/.
// If you later use a custom domain for it, change base to '/'.
export default defineConfig({
  base: ' /',
  plugins: [react(), tailwindcss()],
})