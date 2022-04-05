import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Main, About } from './pages'
import 'virtual:windi.css'

function App() {
  return (
    <BrowserRouter>
      <div className="p-2">
        <header>
          <nav className="mb-2 flex gap-2">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
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
createRoot(target).render(<App />)
