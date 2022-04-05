import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import './index.css'
import { Main, About } from './pages'

function Header() {
  return (
    <header>
      <nav className="children:underline mb-2 flex gap-2">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  )
}
function App() {
  return (
    <BrowserRouter>
      <div className="p-2">
        <Header />
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
