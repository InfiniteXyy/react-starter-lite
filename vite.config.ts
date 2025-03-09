import react from '@vitejs/plugin-react'

import autoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import pages from 'vite-plugin-pages'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
    pages({ dirs: 'src/pages' }),
    autoImport({
      dts: './src/auto-import.d.ts',
      imports: ['react', 'react-router-dom'],
    }),
  ],
})
