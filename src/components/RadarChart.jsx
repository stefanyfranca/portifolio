import { useMemo } from 'react'

function polar(cx, cy, r, angle) {
  return [cx + r * Math.cos(angle - Math.PI / 2), cy + r * Math.sin(angle - Math.PI / 2)]
}

function polygonPoints(cx, cy, r, count, values = null) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i * 2 * Math.PI) / count
    const rr = values ? (r * values[i]) / 100 : r
    return polar(cx, cy, rr, angle).join(',')
  }).join(' ')
}

export default function RadarChart({ data, size = 320 }) {
  const cx = size / 2
  const cy = size / 2
  const r = size / 2 - 46
  const count = data.length

  const rings = useMemo(() => [0.25, 0.5, 0.75, 1], [])
  const axisPoints = useMemo(
    () => Array.from({ length: count }, (_, i) => polar(cx, cy, r, (i * 2 * Math.PI) / count)),
    [cx, cy, count, r],
  )

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="mx-auto w-full max-w-md"
      role="img"
      aria-label="Gráfico radar das habilidades principais"
    >
      {rings.map((ring) => (
        <polygon
          key={ring}
          points={polygonPoints(cx, cy, r * ring, count)}
          fill="none"
          stroke="#1c2740"
          strokeWidth="1"
        />
      ))}

      {axisPoints.map(([x, y], i) => (
        <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#1c2740" strokeWidth="1" />
      ))}

      <polygon
        points={polygonPoints(cx, cy, r, count, data.map((d) => d.value))}
        fill="rgba(34, 211, 238, 0.15)"
        stroke="#22d3ee"
        strokeWidth="2"
        strokeLinejoin="round"
        style={{ filter: 'drop-shadow(0 0 12px rgba(34,211,238,0.4))' }}
      />

      {data.map((d, i) => {
        const [x, y] = polar(cx, cy, r * (d.value / 100), (i * 2 * Math.PI) / count)
        const [lx, ly] = polar(cx, cy, r + 24, (i * 2 * Math.PI) / count)
        return (
          <g key={d.label}>
            <circle cx={x} cy={y} r="4" fill="#22d3ee" />
            <text
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-[#8b98b8]"
              style={{ fontSize: 12, fontFamily: 'JetBrains Mono, monospace' }}
            >
              {d.label} {d.value}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
