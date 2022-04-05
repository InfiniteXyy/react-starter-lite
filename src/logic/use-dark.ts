import { useLocalStorage, useMedia } from 'react-use'

export function useDark() {
  const prefersDarkMode = useMedia('(prefers-color-scheme: dark)')

  const [setting, setSetting] = useLocalStorage<'auto' | 'dark' | 'light'>('color-scheme', 'auto')

  const isDarkMode = setting === 'auto' ? prefersDarkMode : setting === 'dark'

  const toggleDarkMode = useCallback(() => {
    setSetting(isDarkMode ? 'light' : 'dark')
  }, [isDarkMode, setSetting])

  return {
    isDarkMode,
    toggleDarkMode,
    setColorScheme: setSetting,
  }
}
