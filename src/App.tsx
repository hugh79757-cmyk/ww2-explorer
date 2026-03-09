import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import BritainPage from './pages/BritainPage'
import PacificPage from './pages/PacificPage'
import WeaponsPage from './pages/WeaponsPage'
import QuizPage from './pages/QuizPage'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('ww2-theme') || 'dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('ww2-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <HashRouter>
      <div style={{ position: 'fixed', top: 8, right: 12, zIndex: 9999, display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={toggleTheme} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', opacity: 0.6 }}>
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <span style={{ fontSize: '11px', color: 'var(--text-secondary)', opacity: 0.4 }}>성찬이를 위해, 아빠가 ❤️</span>
      </div>
      <Navbar />
      <div style={{ paddingBottom: '70px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/britain" element={<BritainPage />} />
          <Route path="/pacific" element={<PacificPage />} />
          <Route path="/weapons" element={<WeaponsPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
