import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlinePaperAirplane,
  HiCheck,
} from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { CONTACT } from '../data/content.js'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contato do portfólio — ${form.nome || 'Visitante'}`)
    const body = encodeURIComponent(`${form.mensagem}\n\n— ${form.nome} (${form.email})`)
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const social = [
    { icon: FaGithub, href: CONTACT.github, label: 'GitHub' },
    { icon: FaLinkedin, href: CONTACT.linkedin, label: 'LinkedIn' },
  ]

  const infos = [
    { icon: HiOutlineMail, text: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: HiOutlinePhone, text: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/[^0-9+]/g, '')}` },
    { icon: HiOutlineLocationMarker, text: CONTACT.location, href: null },
  ]

  return (
    <footer id="contato" className="relative overflow-hidden border-t border-line bg-surface/30">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

      <div className="container-site grid gap-12 py-20 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow"
          >
            07_contato
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="section-title"
          >
            Vamos conversar sobre <span className="text-gradient">dados</span>, pesquisa ou oportunidades?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-4 max-w-md leading-relaxed text-muted"
          >
            Estou aberta a projetos, colaborações científicas e posições em Data Science e
            Inteligência Artificial. Respondo normalmente em até 48 horas.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-8 space-y-4"
          >
            {infos.map((info, i) => (
              <li key={i}>
                {info.href ? (
                  <a
                    href={info.href}
                    className="link-underline group flex items-center gap-3 text-white transition-colors hover:text-primary"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-2/60 text-primary transition-all group-hover:border-primary/50 group-hover:shadow-glow">
                      <info.icon />
                    </span>
                    {info.text}
                  </a>
                ) : (
                  <span className="flex items-center gap-3 text-white">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-surface-2/60 text-primary">
                      <info.icon />
                    </span>
                    {info.text}
                  </span>
                )}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex items-center gap-3"
          >
            {social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-xl text-muted transition-all hover:border-primary/60 hover:text-primary hover:shadow-glow"
              >
                <s.icon />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="nome" className="mb-2 block text-xs font-mono text-muted">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                required
                value={form.nome}
                onChange={update('nome')}
                placeholder="Seu nome"
                className="w-full rounded-xl border border-line bg-surface-2/60 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-mono text-muted">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={update('email')}
                placeholder="seu@email.com"
                className="w-full rounded-xl border border-line bg-surface-2/60 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="mensagem" className="mb-2 block text-xs font-mono text-muted">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              required
              rows="5"
              value={form.mensagem}
              onChange={update('mensagem')}
              placeholder="Conte sobre seu projeto ou oportunidade..."
              className="w-full resize-none rounded-xl border border-line bg-surface-2/60 px-4 py-3 text-sm text-white placeholder:text-muted focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40"
            />
          </div>

          <button
            type="submit"
            disabled={sent}
            className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
              sent
                ? 'border border-accent/60 bg-accent/10 text-accent'
                : 'bg-gradient-to-r from-primary to-secondary text-base hover:shadow-glow hover:brightness-110'
            }`}
          >
            {sent ? (
              <>
                <HiCheck /> Abrindo seu e-mail...
              </>
            ) : (
              <>
                <HiOutlinePaperAirplane /> Enviar mensagem
              </>
            )}
          </button>

          <p className="mt-4 text-center text-xs text-muted">
            O envio abre seu aplicativo de e-mail padrão com a mensagem pronta.
          </p>
        </motion.form>
      </div>

      <div className="border-t border-line">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-center sm:flex-row">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Stefany França. Todos os direitos reservados.
          </p>
          <p className="font-mono text-xs text-muted">
            Feito com <span className="text-primary">React</span> + <span className="text-secondary">Tailwind</span> + <span className="text-accent">Vite</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
