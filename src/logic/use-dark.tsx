import React, { createContext } from 'react'
import { useLocalStorage, useMedia } from 'react-use'

const noop = () => void 0

const darkModeContext = createContext<{
  isDarkMode: boolean
  toggleDarkMode: () => void
  setColorScheme: (value: 'auto' | 'dark' | 'light') => void
}>({ isDarkMode: false, toggleDarkMode: noop, setColorScheme: noop })

export function DarkModeProvider(props: { children: React.ReactElement }) {
  const prefersDarkMode = useMedia('(prefers-color-scheme: dark)')

  const [colorScheme, setColorScheme] = useLocalStorage<'auto' | 'dark' | 'light'>('color-scheme', 'auto')

  const isDarkMode = colorScheme === 'auto' ? prefersDarkMode : colorScheme === 'dark'

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const toggleDarkMode = useCallback(() => {
    setColorScheme(isDarkMode ? 'light' : 'dark')
  }, [isDarkMode, setColorScheme])

  return (
    <darkModeContext.Provider value={{ isDarkMode, toggleDarkMode, setColorScheme }}>
      {props.children}
    </darkModeContext.Provider>
  )
}

export function useDark() {
  const result = useContext(darkModeContext)
  if (result.setColorScheme === noop) throw new Error('useDark must be used within DarkModeProvider')
  return result
}
