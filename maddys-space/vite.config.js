import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: "/mlc/",
  plugins: [
    vue(),
    vueDevTools(),
    react(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
