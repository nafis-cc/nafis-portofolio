import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

// Ambil path absolut dari direktori saat ini
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'), // alias ~/ → ./src
    },
  },
  // server: {
  //   host: '0.0.0.0',  // Memungkinkan akses global dari IP lokal
  //   port: 3000,       
  //   strictPort: true, 
  // },
  base: '/',
  build: {
    outDir: 'dist',       // folder output build (default Vite)
    emptyOutDir: true,    // bersihkan dist sebelum build
  },
})