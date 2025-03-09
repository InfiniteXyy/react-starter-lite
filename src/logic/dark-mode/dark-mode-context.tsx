import { createContext } from 'react'

export const DarkModeContext = createContext<{
  isDarkMode: boolean
  toggleDarkMode: () => void
  setColorScheme: (value: 'auto' | 'dark' | 'light') => void
} | null>(null)
