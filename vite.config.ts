import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/test_gh_site/', // Replace with your actual repo name
  plugins: [react()],
})