import { defineConfig, presetUno, presetIcons, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [presetUno({ dark: 'class' }), presetAttributify(), presetIcons({ warn: true })],
  theme: {
    // Desktop first settings https://windicss.org/utilities/general/variants.html#desktop-first
    print: { raw: 'print' },
    sm: { max: '640px' },
    md: { max: '768px' },
    lg: { max: '1024px' },
    xl: { max: '1280px' },
    '2xl': { max: '1536px' },
  },
})
