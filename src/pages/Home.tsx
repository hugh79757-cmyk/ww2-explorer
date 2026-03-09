import { useNavigate } from 'react-router-dom'

const sections = [
  { path: '/britain', icon: '✈️', title: '不列颠空战', subtitle: 'Battle of Britain, 1940', desc: '英国皇家空军 vs 纳粹德国空军——决定二战命运的空中决战', color: '#2563eb' },
  { path: '/pacific', icon: '⚓', title: '太平洋战争', subtitle: 'Pacific War, 1941-1945', desc: '从珍珠港到中途岛——航空母舰时代的海上争霸', color: '#dc2626' },
  { path: '/weapons', icon: '⚔️', title: '兵器对比', subtitle: 'Weapons Comparison', desc: '战斗机、轰炸机、航空母舰、战列舰——详细性能对比', color: '#d4a017' },
  { path: '/quiz', icon: '❓', title: '历史问答', subtitle: 'History Quiz', desc: '测试你对二战历史的了解！', color: '#16a34a' },
]

export default function Home() {
  const navigate = useNavigate()
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', padding: '40px 0 30px' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>🔥 二战风云</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>World War II Storm — 探索改变世界的战争</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {sections.map(s => (
          <div key={s.path} onClick={() => navigate(s.path)} style={{
            background: 'var(--bg-card)', border: '1px solid var(--border-color)',
            borderRadius: '12px', padding: '20px', cursor: 'pointer',
            borderLeft: `4px solid ${s.color}`, transition: 'transform 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontSize: '28px' }}>{s.icon}</span>
              <div>
                <h2 style={{ fontSize: '18px' }}>{s.title}</h2>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{s.subtitle}</span>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
