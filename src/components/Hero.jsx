import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiDownload } from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { CONTACT, ROLES } from '../data/content.js'

function useTypewriter(words, { typing = 70, deletingSpeed = 40, pause = 1600 } = {}) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let t

    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      t = setTimeout(() => {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }, deleting ? deletingSpeed : typing)
    }

    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, deleting, index, words])

  return text
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const typed = useTypewriter(ROLES)

  const contacts = [
    { icon: HiOutlineLocationMarker, text: CONTACT.location, href: null },
    { icon: HiOutlinePhone, text: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/[^0-9+]/g, '')}` },
    { icon: HiOutlineMail, text: CONTACT.email, href: `mailto:${CONTACT.email}` },
  ]

  return (
    <section id="sobre" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />

      <div className="container-site relative grid items-center gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.p
            {...fade(0)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-mono text-xs text-primary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Disponível para oportunidades
          </motion.p>

          <motion.h1 {...fade(0.1)} className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Stefany <span className="text-gradient">França</span>
          </motion.h1>

          <motion.p {...fade(0.2)} className="mt-4 font-mono text-lg text-primary sm:text-xl">
            &lt;{typed}
            <span className="animate-pulse">|</span>
            /&gt;
          </motion.p>

          <motion.p {...fade(0.3)} className="mt-5 max-w-xl leading-relaxed text-muted">
            Cientista de dados e pesquisadora em IA — transformando dados brutos em decisões
            estratégicas com pipelines, modelagem estatística e Business Intelligence.
          </motion.p>

          <motion.div {...fade(0.4)} className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={CONTACT.cv}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-base transition-all hover:shadow-glow hover:brightness-110"
            >
              <HiDownload />
              Baixar currículo
            </a>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-white transition-all hover:border-primary/60 hover:bg-primary/5"
            >
              Ver projetos
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <div className="flex items-center gap-2">
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-xl text-muted transition-all hover:border-primary/60 hover:text-primary hover:shadow-glow"
              >
                <FaGithub />
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-xl text-muted transition-all hover:border-primary/60 hover:text-primary hover:shadow-glow"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.ul {...fade(0.5)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
            {contacts.map((c, i) =>
              c.href ? (
                <li key={i}>
                  <a
                    href={c.href}
                    className="link-underline flex items-center gap-2 text-sm text-muted hover:text-white"
                  >
                    <c.icon className="text-primary" />
                    {c.text}
                  </a>
                </li>
              ) : (
                <li key={i} className="flex items-center gap-2 text-sm text-muted">
                  <c.icon className="text-primary" />
                  {c.text}
                </li>
              ),
            )}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
          <div className="animate-float">
            <div className="relative rounded-full p-1.5">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-70 blur-[2px]" aria-hidden="true" />
              <img
                src="images/stefany.png"
                alt="Foto de perfil de Stefany França"
                className="relative h-56 w-56 rounded-full border-4 border-base object-cover sm:h-72 sm:w-72"
                loading="eager"
              />
              <div className="glass absolute -bottom-2 -right-2 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-mono text-white">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Data Science
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#estatisticas"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-primary"
      >
        <svg className="h-8 w-8 animate-bounce" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 5v14m0 0 5-5m-5 5-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </section>
  )
}
