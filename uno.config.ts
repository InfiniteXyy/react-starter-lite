import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [presetUno({ dark: 'class' }), presetAttributify(), presetIcons({ warn: true })],
  theme: {
    // Desktop first settings https://windicss.org/utilities/general/variants.html#desktop-first
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
})
