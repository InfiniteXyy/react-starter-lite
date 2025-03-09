import { antfu } from '@antfu/eslint-config'
import prettier from 'eslint-plugin-prettier/recommended'
import tailwindcss from 'eslint-plugin-tailwindcss'

export default antfu(
  { ignores: ['*.md'], stylistic: false, react: true, isInEditor: false },
  prettier,
  tailwindcss.configs['flat/recommended'],
)
