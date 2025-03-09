import { useLocalStorage } from 'react-use'
import useMedia from 'react-use/lib/useMedia'
import { DarkModeContext } from './dark-mode-context'

export function DarkModeProvider({ children }: { children: React.ReactElement }) {
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
    <DarkModeContext
      value={useMemo(
        () => ({ isDarkMode, toggleDarkMode, setColorScheme }),
        [isDarkMode, setColorScheme, toggleDarkMode],
      )}
    >
      {children}
    </DarkModeContext>
  )
}
