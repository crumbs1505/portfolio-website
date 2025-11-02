/**
 * @fileoverview This is the configuration file for Vite, the build tool used for this project.
 * It defines the project setup, including which plugins to use and server options.
 * In this case, it's configured to use the official Vue.js plugin (`@vitejs/plugin-vue`)
 * and sets the development server to run on port 3000 and open automatically.
 * @see https://vitejs.dev/config/
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true
  }
})
