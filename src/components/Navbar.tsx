import { useLocation, useNavigate } from 'react-router-dom'

const tabs = [
  { path: '/', label: '首页', icon: '🏠' },
  { path: '/britain', label: '不列颠空战', icon: '✈️' },
  { path: '/pacific', label: '太平洋战争', icon: '⚓' },
  { path: '/weapons', label: '兵器对比', icon: '⚔️' },
  { path: '/quiz', label: '历史问答', icon: '❓' },
]

export default function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)',
      display: 'flex', justifyContent: 'space-around', padding: '8px 0', zIndex: 1000
    }}>
      {tabs.map(tab => (
        <button key={tab.path} onClick={() => navigate(tab.path)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px',
            color: location.pathname === tab.path ? 'var(--accent-gold)' : 'var(--text-secondary)',
            fontSize: '10px', transition: 'color 0.2s'
          }}>
          <span style={{ fontSize: '20px' }}>{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
