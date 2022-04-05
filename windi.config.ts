import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'class',
  theme: {
    // Desktop first settings https://windicss.org/utilities/general/variants.html#desktop-first
    screens: {
      print: { raw: 'print' },
      sm: { max: '640px' },
      md: { max: '768px' },
      lg: { max: '1024px' },
      xl: { max: '1280px' },
      '2xl': { max: '1536px' },
    },
  },
})
