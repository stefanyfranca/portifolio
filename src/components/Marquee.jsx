import { MARQUEE_ITEMS } from '../data/content.js'

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <section className="relative overflow-hidden border-y border-line bg-surface/40 py-6" aria-label="Tecnologias">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent" aria-hidden="true" />

      <div className="flex w-max animate-marquee items-center gap-10">
        {items.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap font-mono text-sm text-muted">
            <span className="transition-colors hover:text-primary">{item}</span>
            <span className="text-primary/50" aria-hidden="true">
              ◆
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
