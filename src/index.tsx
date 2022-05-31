import clsx from 'clsx';
import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import routes from '~react-pages';
import './index.css';
import { DarkModeProvider, useDark } from './logic';

function App() {
  const { toggleDarkMode, isDarkMode } = useDark();

  return (
    <div className="max-w-200 mx-auto w-full p-2 text-neutral-700 dark:text-neutral-200 md:p-10">
      <header className="flex items-center space-x-2">
        <nav className="inline-block space-x-2 text-blue-500">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="https://github.com/InfiniteXyy/react-starter-lite">Github</a>
        </nav>
        <button onClick={toggleDarkMode} type="button">
          <div className={clsx(isDarkMode ? 'i-[carbon-sun]' : 'i-[carbon-moon]', 'text-2xl')} />
        </button>
      </header>
      <Suspense fallback={null}>{useRoutes(routes)}</Suspense>
    </div>
  );
}

const target = document.getElementById('root');
if (!target) throw new Error('target not found');

createRoot(target).render(
  <StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </BrowserRouter>
  </StrictMode>
);
