import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

    resolve: {
    alias: {
        '@assets': path.resolve(__dirname, './src/assets'),
        '@services': path.resolve(__dirname, './src/services'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@common': path.resolve(__dirname, './src/common'),
        '@constants': path.resolve(__dirname, './src/constants'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@components': path.resolve(__dirname, './src/components'),
        '@svg': path.resolve(__dirname, './src/components/svg'),
    },
  },
  
  server: {
    host: true,
    port: 3000,
  },
})
