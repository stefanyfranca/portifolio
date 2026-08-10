import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenuAlt3, HiX, HiDownload } from 'react-icons/hi'
import useScrollSpy from '../hooks/useScrollSpy.js'
import { NAV_LINKS, CONTACT } from '../data/content.js'

export default function Navbar() {
  const active = useScrollSpy()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-card' : 'bg-transparent'
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between" aria-label="Principal">
        <a
          href="#sobre"
          className="font-display text-lg font-bold tracking-tight text-white"
          onClick={() => setOpen(false)}
        >
          S.<span className="text-gradient">FRANÇA</span>
          <span className="text-primary animate-pulseSlow">_</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`text-sm transition-colors ${
                  active === link.id ? 'text-primary' : 'text-muted hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={CONTACT.cv}
              download
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-4 py-1.5 text-sm text-primary transition-all hover:bg-primary/10 hover:shadow-glow"
            >
              <HiDownload />
              Currículo
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-line text-xl text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass overflow-hidden border-t border-line lg:hidden"
          >
            <ul className="container-site flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                      active === link.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-muted hover:bg-surface-2 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 px-4">
                <a
                  href={CONTACT.cv}
                  download
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-5 py-2 text-sm text-primary"
                >
                  <HiDownload /> Baixar currículo
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
