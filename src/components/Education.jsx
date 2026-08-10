import { motion } from 'framer-motion'
import { HiOutlineAcademicCap, HiOutlineCode, HiOutlineBookOpen } from 'react-icons/hi'
import { EDUCATION, COURSES } from '../data/content.js'

const ICONS = {
  graduation: HiOutlineAcademicCap,
  code: HiOutlineCode,
}

const TAG_STYLE = {
  'Idioma': 'border-accent/40 text-accent',
  'Dados': 'border-primary/40 text-primary',
  'BI': 'border-secondary/40 text-secondary',
}

export default function Education() {
  return (
    <section id="formacao" className="container-site relative py-20">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        06_formacao
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="section-title mb-12"
      >
        Formação & cursos
      </motion.h2>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-white">
            <HiOutlineAcademicCap className="text-primary" />
            Graduação
          </h3>
          <div className="space-y-4">
            {EDUCATION.map((edu, i) => {
              const Icon = ICONS[edu.icon] || HiOutlineBookOpen
              return (
                <motion.article
                  key={edu.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="card flex gap-4 p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-xl text-primary">
                    <Icon />
                  </span>
                  <div>
                    <span className="tag mb-2">{edu.period}</span>
                    <h4 className="font-display font-semibold text-white">{edu.title}</h4>
                    <p className="mt-1 text-sm text-muted">{edu.org}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-5 flex items-center gap-2 font-display text-lg font-semibold text-white">
            <HiOutlineBookOpen className="text-primary" />
            Cursos & qualificações
          </h3>
          <div className="space-y-4">
            {COURSES.map((course, i) => (
              <motion.article
                key={course.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="card flex items-center justify-between gap-4 p-6"
              >
                <div>
                  <h4 className="font-display font-semibold text-white">{course.title}</h4>
                  <p className="mt-1 text-sm text-muted">{course.org}</p>
                  <span className="tag mt-2">{course.period}</span>
                </div>
                <span
                  className={`shrink-0 rounded-full border px-3 py-1 font-mono text-[0.7rem] ${
                    TAG_STYLE[course.tag] || 'border-line text-muted'
                  }`}
                >
                  {course.tag}
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
