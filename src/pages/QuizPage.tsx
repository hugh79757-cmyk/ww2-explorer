import { useState } from 'react'
import { quizQuestions as questions } from '../data/quizData';

export default function QuizPage() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [finished, setFinished] = useState(false)

  const q = questions[current]

  const handleAnswer = (idx: number) => {
    if (selected !== null) return
    setSelected(idx)
    if (idx === q.answer) setScore(s => s + 1)
  }

  const next = () => {
    if (current + 1 >= questions.length) { setFinished(true); return }
    setCurrent(c => c + 1)
    setSelected(null)
  }

  const restart = () => { setCurrent(0); setScore(0); setSelected(null); setFinished(false) }

  const getRank = () => {
    const pct = score / questions.length
    if (pct >= 0.9) return { title: '军事天才', icon: '🎖️', msg: '你对二战历史的了解令人惊叹！' }
    if (pct >= 0.7) return { title: '高级将领', icon: '⭐', msg: '非常出色！你的军事知识很丰富！' }
    if (pct >= 0.5) return { title: '中级军官', icon: '🎯', msg: '不错的成绩！继续学习会更好！' }
    return { title: '新兵入伍', icon: '📖', msg: '继续探索二战历史，你会进步的！' }
  }

  if (finished) {
    const rank = getRank()
    return (
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', textAlign: 'center', paddingTop: '60px' }}>
        <div style={{ fontSize: '60px', marginBottom: '16px' }}>{rank.icon}</div>
        <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>{rank.title}</h1>
        <p style={{ fontSize: '32px', color: 'var(--accent-gold)', fontWeight: 'bold', marginBottom: '8px' }}>{score} / {questions.length}</p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>{rank.msg}</p>
        <button onClick={restart} style={{ padding: '12px 32px', borderRadius: '10px', background: 'var(--accent-gold)', color: '#000', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>再来一次 🔄</button>
      </div>
    )
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', padding: '30px 0 20px' }}>
        <h1 style={{ fontSize: '28px' }}>❓ 历史问答</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '13px', marginTop: '4px' }}>测试你的二战知识！</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '13px', color: 'var(--text-secondary)' }}>
        <span>第 {current + 1} / {questions.length} 题</span>
        <span>得分: {score}</span>
      </div>

      <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '20px', marginBottom: '16px' }}>
        <h2 style={{ fontSize: '16px', lineHeight: 1.6, marginBottom: '16px' }}>{q.question}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {q.options.map((opt, i) => {
            let bg = 'var(--bg-secondary)'
            let border = 'var(--border-color)'
            if (selected !== null) {
              if (i === q.answer) { bg = '#16a34a33'; border = '#16a34a' }
              else if (i === selected && i !== q.answer) { bg = '#dc262633'; border = '#dc2626' }
            }
            return (
              <button key={i} onClick={() => handleAnswer(i)} style={{
                padding: '12px 16px', borderRadius: '10px', background: bg,
                border: `1px solid ${border}`, color: 'var(--text-primary)',
                fontSize: '14px', textAlign: 'left', cursor: selected !== null ? 'default' : 'pointer',
                transition: 'all 0.2s'
              }}>
                {String.fromCharCode(65 + i)}. {opt}
              </button>
            )
          })}
        </div>
      </div>

      {selected !== null && (
        <div style={{ background: selected === q.answer ? '#16a34a22' : '#dc262622', border: `1px solid ${selected === q.answer ? '#16a34a' : '#dc2626'}`, borderRadius: '10px', padding: '14px', marginBottom: '16px' }}>
          <p style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '6px' }}>{selected === q.answer ? '✅ 回答正确！' : '❌ 回答错误'}</p>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{q.explanation}</p>
        </div>
      )}

      {selected !== null && (
        <button onClick={next} style={{ width: '100%', padding: '14px', borderRadius: '10px', background: 'var(--accent-gold)', color: '#000', border: 'none', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' }}>
          {current + 1 >= questions.length ? '查看结果 🏆' : '下一题 ▶'}
        </button>
      )}
    </div>
  )
}
