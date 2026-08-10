import { motion } from 'framer-motion'
import { HiOutlineBriefcase, HiOutlineBeaker } from 'react-icons/hi'
import { EXPERIENCE, RESEARCH } from '../data/content.js'

const ICONS = {
  work: HiOutlineBriefcase,
  research: HiOutlineBeaker,
}

function TimelineItem({ exp, icon: Icon, index, id }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative pb-10 pl-8 sm:pl-12"
    >
      <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-base text-primary shadow-glow">
        <Icon />
      </span>

      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-display text-lg font-semibold text-white sm:text-xl">{exp.role}</h3>
        <span className="tag">{exp.period}</span>
      </div>
      <p className="mt-1 text-sm text-primary">{exp.company}</p>

      <ul className="mt-3 space-y-2">
        {exp.points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>

      {exp.stack && (
        <div className="mt-4 flex flex-wrap gap-2">
          {exp.stack.map((t) => (
            <span key={t} className="tag border-primary/25 text-primary/90">
              {t}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  )
}

function Block({ id, eyebrow, title, items, icon }) {
  return (
    <section id={id} className="container-site relative py-20">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="section-title mb-12"
      >
        {title}
      </motion.h2>

      <div className="relative border-l border-line pl-6 sm:pl-8">
        <div className="absolute -left-[3px] top-0 h-full w-1 rounded bg-gradient-to-b from-primary/60 to-secondary/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {items.map((exp, i) => (
          <TimelineItem key={i} exp={exp} icon={ICONS[icon]} index={i} id={id} />
        ))}
      </div>
    </section>
  )
}

export default function Experience() {
  return (
    <>
      <Block
        id="experiencia"
        eyebrow="02_experiencia"
        title="Experiência profissional"
        items={EXPERIENCE}
        icon="work"
      />
      <Block
        id="pesquisa"
        eyebrow="03_pesquisa"
        title="Consultoria & pesquisa"
        items={RESEARCH}
        icon="research"
      />
    </>
  )
}
