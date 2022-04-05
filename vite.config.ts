import { defineConfig } from 'vite'
import { resolve } from 'path'

import react from '@vitejs/plugin-react'
import WindiCSS from 'vite-plugin-windicss'
import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'

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
    WindiCSS(),
    Icons({ compiler: 'jsx', jsx: 'react' }),
    AutoImport({ dts: './src/auto-import.d.ts', imports: ['react', 'react-router-dom'] }),
  ],
})
