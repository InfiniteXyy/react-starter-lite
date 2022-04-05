import clsx from 'clsx'
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import routes from '~react-pages'
import { DarkModeProvider, useDark } from './logic'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './index.css'

function App() {
  const { toggleDarkMode, isDarkMode } = useDark()
  return (
    <div className="text-dark-500 dark:text-light-300 max-w-200 mx-auto w-full p-2 md:p-10">
      <header className="children:pr-2 flex items-center">
        <nav className="children:pr-2 inline-block text-blue-500">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <button onClick={toggleDarkMode} type="button">
          <div className={clsx(isDarkMode ? 'i-carbon-sun' : 'i-carbon-moon', 'text-2xl')} />
        </button>
      </header>
      <Suspense fallback={null}>{useRoutes(routes)}</Suspense>
    </div>
  )
}

const target = document.getElementById('root')
if (!target) throw new Error('target not found')

createRoot(target).render(
  <StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </BrowserRouter>
  </StrictMode>
)
