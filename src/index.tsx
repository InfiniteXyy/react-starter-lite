import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './index.css'
import clsx from 'clsx'
import { Main, About } from './pages'
import { useDark } from './logic'

function App() {
  const { toggleDarkMode, isDarkMode } = useDark()

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  return (
    <BrowserRouter>
      <div className="text-dark-500 dark:text-light-300 p-2">
        <header>
          <nav className="mb-2 flex gap-2 text-blue-500">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <button onClick={toggleDarkMode} type="button">
            <div className={clsx(isDarkMode ? 'i-carbon-sun' : 'i-carbon-moon', 'text-2xl')} />
          </button>
        </header>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<About />} path="/about" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

const target = document.getElementById('root')
if (!target) throw new Error('target not found')
createRoot(target).render(
  <StrictMode>
    <App />
  </StrictMode>
)
