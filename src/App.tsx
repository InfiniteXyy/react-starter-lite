import { Suspense } from 'react'
import { AiOutlineMoon, AiOutlineSun } from 'react-icons/ai'
import routes from '~react-pages'
import { useDark } from './logic'
import './index.css'

export function App() {
  const { toggleDarkMode, isDarkMode } = useDark()

  return (
    <div className="mx-auto w-full max-w-[800px] p-2 text-neutral-700 dark:text-neutral-200 md:p-10">
      <header className="flex items-center space-x-2">
        <nav className="inline-block space-x-2 text-blue-500">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="https://github.com/InfiniteXyy/react-starter-lite">Github</a>
        </nav>
        <button onClick={toggleDarkMode} type="button">
          {isDarkMode ? <AiOutlineSun className="text-2xl" /> : <AiOutlineMoon className="text-2xl" />}
        </button>
      </header>
      <Suspense fallback={null}>{useRoutes(routes)}</Suspense>
    </div>
  )
}
