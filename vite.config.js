import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true
  }
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8000',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //     '/sanctum': {
  //       target: 'http://localhost:8000',
  //       changeOrigin: true,
  //       secure: false,
  //     },
  //     '/csrf-token': {
  //       target: 'http://localhost:8000',
  //       changeOrigin: true,
  //       secure: false,
  //     }
  //   }
  // }
})