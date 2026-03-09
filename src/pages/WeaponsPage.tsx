import { useState } from 'react'
import { planes } from '../data/britainData'
import { ships } from '../data/pacificData'

const allWeapons = [...planes.map(p => ({ ...p, from: 'britain' })), ...ships.map(s => ({ ...s, from: 'pacific' }))]

export default function WeaponsPage() {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(2)

  const w1 = allWeapons[left]
  const w2 = allWeapons[right]
  const s1 = w1.stats as Record<string, number>
  const s2 = w2.stats as Record<string, number>
  const statLabels: Record<string, string> = { speed: '速度', agility: '机动', firepower: '火力', durability: '耐久', attack: '攻击', defense: '防御', aircraft: '载机' }

  const allKeys = [...new Set([...Object.keys(s1), ...Object.keys(s2)])]
  const total1 = allKeys.reduce((sum, k) => sum + (s1[k] || 0), 0)
  const total2 = allKeys.reduce((sum, k) => sum + (s2[k] || 0), 0)

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', padding: '30px 0 20px' }}>
        <h1 style={{ fontSize: '28px' }}>⚔️ 兵器对比</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '4px' }}>选择两种兵器进行对比</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
        <select value={left} onChange={e => setLeft(Number(e.target.value))} style={{ padding: '10px', borderRadius: '8px', background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', fontSize: '13px' }}>
          {allWeapons.map((w, i) => <option key={i} value={i}>{w.name}</option>)}
        </select>
        <select value={right} onChange={e => setRight(Number(e.target.value))} style={{ padding: '10px', borderRadius: '8px', background: 'var(--bg-card)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', fontSize: '13px' }}>
          {allWeapons.map((w, i) => <option key={i} value={i}>{w.name}</option>)}
        </select>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 40px 1fr', gap: '4px', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '15px', marginBottom: '4px' }}>{w1.name}</h3>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{w1.country}</span>
        </div>
        <div style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold', color: 'var(--accent-gold)' }}>VS</div>
        <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '14px', textAlign: 'center' }}>
          <h3 style={{ fontSize: '15px', marginBottom: '4px' }}>{w2.name}</h3>
          <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{w2.country}</span>
        </div>
      </div>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '16px', marginBottom: '20px' }}>
        {allKeys.map(key => {
          const v1 = s1[key] || 0, v2 = s2[key] || 0
          return (
            <div key={key} style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                <span style={{ color: v1 > v2 ? 'var(--accent-blue)' : 'var(--text-secondary)', fontWeight: v1 > v2 ? 'bold' : 'normal' }}>{v1}</span>
                <span style={{ color: 'var(--text-secondary)' }}>{statLabels[key] || key}</span>
                <span style={{ color: v2 > v1 ? 'var(--accent-red)' : 'var(--text-secondary)', fontWeight: v2 > v1 ? 'bold' : 'normal' }}>{v2}</span>
              </div>
              <div style={{ display: 'flex', gap: '4px', height: '8px' }}>
                <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                  <div style={{ width: `${v1 * 10}%`, height: '100%', background: v1 >= v2 ? '#2563eb' : '#2563eb66', borderRadius: '4px', transition: 'width 0.5s' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ width: `${v2 * 10}%`, height: '100%', background: v2 >= v1 ? '#dc2626' : '#dc262666', borderRadius: '4px', transition: 'width 0.5s' }} />
                </div>
              </div>
            </div>
          )
        })}
        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '12px', fontSize: '14px', fontWeight: 'bold' }}>
          <span style={{ color: total1 >= total2 ? 'var(--accent-blue)' : 'var(--text-secondary)' }}>总分: {total1}</span>
          <span style={{ color: total2 >= total1 ? 'var(--accent-red)' : 'var(--text-secondary)' }}>总分: {total2}</span>
        </div>
      </div>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '16px' }}>
        <h3 style={{ fontSize: '14px', marginBottom: '8px' }}>📋 简介</h3>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '10px' }}><strong style={{ color: 'var(--accent-blue)' }}>{w1.name}:</strong> {w1.desc}</p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.7 }}><strong style={{ color: 'var(--accent-red)' }}>{w2.name}:</strong> {w2.desc}</p>
      </div>
    </div>
  )
}
