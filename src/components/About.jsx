import { motion } from 'framer-motion'
import { ABOUT } from '../data/content.js'

const item = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function About() {
  return (
    <section id="sobre" className="container-site relative py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="relative overflow-hidden rounded-3xl border border-line bg-surface/40 p-8 backdrop-blur-xl sm:p-12"
      >
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" aria-hidden="true" />

        <motion.p variants={item} custom={0} className="eyebrow">
          Resumo profissional
        </motion.p>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
          <div className="space-y-4">
            {ABOUT.map((p, i) => (
              <motion.p key={i} variants={item} custom={i + 1} className="text-base leading-relaxed text-muted sm:text-lg">
                {p}
              </motion.p>
            ))}
          </div>

          <motion.div variants={item} custom={4} className="hidden items-start lg:flex">
            <div className="flex flex-col gap-3 font-mono text-xs text-muted">
              <span className="text-primary"># data_science</span>
              <span className="text-accent"># inteligencias_artificiais</span>
              <span className="text-secondary"># estatistica_aplicada</span>
              <span className="text-white/60"># business_intelligence</span>
              <span className="text-primary/70"># pesquisa_cientifica</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
