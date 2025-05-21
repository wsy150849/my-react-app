import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        'assets': resolve(__dirname, './src/assets'),
        'components': resolve(__dirname, './src/components'),
        'views': resolve(__dirname, './src/views'),
        'utils': resolve(__dirname, './src/utils'),
      },
    },
    plugins: [
      react(),
      nodePolyfills({
        globals: {
          crypto: true,
          global: true,
          process: true,
        }
      })
    ],
  }
})
