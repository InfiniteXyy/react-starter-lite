import { use } from 'react'
import { DarkModeContext } from './dark-mode-context'

export function useDark() {
  const result = use(DarkModeContext)
  if (!result) throw new Error('useDark must be used within DarkModeProvider')
  return result
}
