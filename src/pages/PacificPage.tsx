import { useState } from 'react'
import { timeline, ships, didYouKnow } from '../data/pacificData'

const phaseColors: Record<string, string> = {
  '日本进攻': '#dc2626', '转折开始': '#d4a017', '转折点': '#16a34a', '反攻开始': '#2563eb', '美军优势': '#2563eb', '决定性胜利': '#16a34a', '逼近日本': '#7c3aed', '战争结束': '#16a34a'
}

export default function PacificPage() {
  const [selectedShip, setSelectedShip] = useState<number | null>(null)
  const [factIndex, setFactIndex] = useState(0)

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', padding: '30px 0 20px' }}>
        <h1 style={{ fontSize: '28px' }}>⚓ 太平洋战争</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '4px' }}>Pacific War · 1941年—1945年</p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '8px', lineHeight: 1.6 }}>
          从珍珠港的硝烟到密苏里号上的签字——航空母舰时代的海上史诗
        </p>
      </div>

      <h2 style={{ fontSize: '18px', marginBottom: '16px', borderBottom: '2px solid var(--accent-red)', paddingBottom: '8px' }}>📅 战役时间线</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
        {timeline.map((event, i) => (
          <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '16px', borderLeft: `4px solid ${phaseColors[event.phase] || '#666'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ fontSize: '12px', color: 'var(--accent-gold)' }}>{event.date}</span>
              <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '10px', background: phaseColors[event.phase] || '#666', color: '#fff' }}>{event.phase}</span>
            </div>
            <h3 style={{ fontSize: '15px', marginBottom: '6px' }}>{event.title}</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{event.desc}</p>
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '18px', marginBottom: '16px', borderBottom: '2px solid var(--accent-red)', paddingBottom: '8px' }}>🚢 参战舰艇与飞机</h2>
      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '12px' }}>点击卡片查看详情</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
        {ships.map((ship, i) => (
          <div key={i} onClick={() => setSelectedShip(selectedShip === i ? null : i)}
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '14px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '15px' }}>{ship.name}</h3>
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{ship.nameEn} · {ship.country}</span>
              </div>
              <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '8px', background: ship.country.includes('美国') ? '#2563eb33' : '#dc262633', color: ship.country.includes('美国') ? '#60a5fa' : '#f87171' }}>{ship.type}</span>
            </div>
            {selectedShip === i && (
              <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border-color)' }}>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '12px' }}>{ship.desc}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '12px', marginBottom: '12px' }}>
                  {Object.entries(ship.specs).map(([key, val]) => (
                    <span key={key}>📌 {key === 'displacement' ? '排水量' : key === 'speed' ? '最大速度' : key === 'aircraft' ? '载机数' : key === 'crew' ? '船员' : key === 'ceiling' ? '升限' : key === 'range' ? '航程' : key === 'armament' ? '武装' : key === 'mainGuns' ? '主炮' : key}: {val}</span>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {Object.entries(ship.stats).map(([key, val]) => (
                    <div key={key} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                        {key === 'attack' ? '攻击' : key === 'defense' ? '防御' : key === 'speed' ? '速度' : '载机'}
                      </div>
                      <div style={{ height: '6px', background: 'var(--border-color)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${val * 10}%`, background: 'var(--accent-red)', borderRadius: '3px' }} />
                      </div>
                      <div style={{ fontSize: '11px', marginTop: '2px' }}>{val}/10</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <h2 style={{ fontSize: '18px', marginBottom: '16px', borderBottom: '2px solid var(--accent-red)', paddingBottom: '8px' }}>💡 你知道吗？</h2>
      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
        <p style={{ fontSize: '14px', lineHeight: 1.7 }}>{didYouKnow[factIndex]}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px' }}>
          <button onClick={() => setFactIndex(i => (i - 1 + didYouKnow.length) % didYouKnow.length)} style={{ background: 'none', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '6px 16px', color: 'var(--text-primary)', cursor: 'pointer' }}>◀ 上一条</button>
          <span style={{ fontSize: '12px', color: 'var(--text-secondary)', alignSelf: 'center' }}>{factIndex + 1}/{didYouKnow.length}</span>
          <button onClick={() => setFactIndex(i => (i + 1) % didYouKnow.length)} style={{ background: 'none', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '6px 16px', color: 'var(--text-primary)', cursor: 'pointer' }}>下一条 ▶</button>
        </div>
      </div>
    </div>
  )
}
