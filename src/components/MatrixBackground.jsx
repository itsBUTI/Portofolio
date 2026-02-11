import { useMemo } from 'react'

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

export function MatrixBackground({ columns = 80, gap = 24 }) {
  const items = useMemo(() => {
    const safeColumns = clamp(Number(columns) || 0, 10, 180)
    const safeGap = clamp(Number(gap) || 0, 14, 40)

    return Array.from({ length: safeColumns }, (_, idx) => {
      const x = idx * safeGap
      const duration = (2.6 + Math.random() * 2.6).toFixed(2)
      const delay = (-Math.random() * 4.5).toFixed(2)
      const opacity = (0.45 + Math.random() * 0.55).toFixed(2)

      return {
        key: idx,
        style: {
          '--x': `${x}px`,
          '--dur': `${duration}s`,
          '--delay': `${delay}s`,
          '--op': opacity,
        },
      }
    })
  }, [columns, gap])

  return (
    <div className="matrixBg" aria-hidden="true">
      <div className="matrixContainer">
        {items.map((it) => (
          <div key={it.key} className="matrixColumn" style={it.style} />
        ))}
      </div>
    </div>
  )
}
