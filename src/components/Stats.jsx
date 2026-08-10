import { useRef } from 'react'
import { STATS } from '../data/content.js'
import useCountUp from '../hooks/useCountUp.js'

function StatItem({ stat, start }) {
  const ref = useCountUp(stat.value, { decimals: stat.decimals, start })

  return (
    <div className="card flex flex-col items-center justify-center gap-1 p-6 text-center">
      <div className="font-display text-4xl font-bold text-white">
        <span ref={ref}>0</span>
        <span className="text-gradient">{stat.suffix}</span>
      </div>
      <p className="text-xs text-muted sm:text-sm">{stat.label}</p>
    </div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="estatisticas" ref={ref} className="relative py-14" aria-label="Estatísticas">
      <div className="container-site">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <StatItem key={i} stat={stat} start={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
