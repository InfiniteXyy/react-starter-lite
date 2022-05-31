import { resolve } from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import Pages from 'vite-plugin-pages';

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
    Pages({ dirs: 'src/pages' }),
    AutoImport({
      dts: './src/auto-import.d.ts',
      imports: ['react', 'react-router-dom'],
    }),
  ],
});
