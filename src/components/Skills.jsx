import { motion } from 'framer-motion'
import RadarChart from './RadarChart.jsx'
import { SKILL_GROUPS, RADAR_SKILLS } from '../data/content.js'

function SkillBar({ skill, index }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="text-white/90">{skill.name}</span>
        <span className="font-mono text-xs text-primary">{skill.level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-line">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: index * 0.08, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary shadow-glow"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="habilidades" className="container-site relative py-20">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        04_habilidades
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="section-title mb-12"
      >
        Habilidades & ferramentas
      </motion.h2>

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="card p-6 sm:p-8">
          <RadarChart data={RADAR_SKILLS} />
        </div>

        <div className="space-y-10">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: gi * 0.1, duration: 0.6 }}
            >
              <h3 className="mb-5 font-display text-lg font-semibold text-white">
                <span className="mr-2 font-mono text-sm text-primary">0{gi + 1}.</span>
                {group.title}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
