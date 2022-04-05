import { defineConfig } from 'vite'
import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': `${resolve(__dirname, './src')}/`,
    },
  },
  publicDir: 'public',
  plugins: [
    react(),
    Unocss(),
    Pages({ dirs: 'src/pages' }),
    AutoImport({
      dts: './src/auto-import.d.ts',
      imports: ['react', 'react-router-dom'],
    }),
  ],
})
