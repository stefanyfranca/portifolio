import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiOutlineStar, HiOutlineCode, HiOutlineExternalLink } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import { GITHUB_USER } from '../data/content.js'

const CACHE_KEY = 'sf-portfolio-gh'
const CACHE_TTL = 10 * 60 * 1000

function getLanguages(color) {
  return {
    Python: '#3572A5',
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Java: '#b07219',
    C: '#555555',
    'C++': '#f34b7d',
    Jupyter: '#DA5B0B',
    R: '#198CE7',
    SQL: '#e38c00',
    Shell: '#89e051',
  }[color] || '#8b98b8'
}

async function fetchRepos() {
  const cached = localStorage.getItem(CACHE_KEY)
  if (cached) {
    const { data, ts } = JSON.parse(cached)
    if (Date.now() - ts < CACHE_TTL) return data
  }

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100&type=public`,
  )
  if (!res.ok) {
    if (res.status === 403 && cached) {
      const { data } = JSON.parse(cached)
      return data
    }
    throw new Error(`GitHub API: ${res.status}`)
  }

  const data = await res.json()
  localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }))
  return data
}

function SkeletonCard() {
  return (
    <div className="card p-6">
      <div className="h-5 w-3/5 animate-pulse rounded bg-line" />
      <div className="mt-3 h-3 w-full animate-pulse rounded bg-line" />
      <div className="mt-2 h-3 w-4/5 animate-pulse rounded bg-line" />
      <div className="mt-5 flex gap-3">
        <div className="h-6 w-16 animate-pulse rounded-full bg-line" />
        <div className="h-6 w-16 animate-pulse rounded-full bg-line" />
      </div>
    </div>
  )
}

export default function Projects() {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState('loading')
  const [query, setQuery] = useState('')
  const [lang, setLang] = useState('Todos')

  useEffect(() => {
    let mounted = true
    fetchRepos()
      .then((data) => {
        if (!mounted) return
        setRepos(data)
        setStatus('ready')
      })
      .catch(() => mounted && setStatus('error'))
    return () => {
      mounted = false
    }
  }, [])

  const languages = useMemo(() => {
    const set = new Set(repos.map((r) => r.language).filter(Boolean))
    return ['Todos', ...Array.from(set).sort()]
  }, [repos])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return repos.filter((r) => {
      const matchQ = !q || r.name.toLowerCase().includes(q) || (r.description || '').toLowerCase().includes(q)
      const matchL = lang === 'Todos' || r.language === lang
      return matchQ && matchL
    })
  }, [repos, query, lang])

  return (
    <section id="projetos" className="container-site relative py-20">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="eyebrow"
      >
        05_projetos
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="section-title"
      >
        Projetos no GitHub
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="mt-3 max-w-2xl text-sm leading-relaxed text-muted"
      >
        Repositórios públicos carregados em tempo real da API do{' '}
        <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" className="link-underline text-primary">
          github.com/{GITHUB_USER}
        </a>
        .
      </motion.p>

      {status === 'ready' && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="relative max-w-xs flex-1">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar repositório..."
              aria-label="Buscar repositório"
              className="w-full rounded-full border border-line bg-surface/60 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-muted focus:border-primary/60 focus:outline-none focus:ring-1 focus:ring-primary/40"
            />
            <HiOutlineCode className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" />
          </div>

          <div className="flex flex-wrap gap-2">
            {languages.map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                className={`rounded-full border px-3 py-1.5 text-xs transition-all ${
                  lang === l
                    ? 'border-primary/60 bg-primary/10 text-primary'
                    : 'border-line text-muted hover:text-white'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </motion.div>
      )}

      <div className="mt-8">
        {status === 'loading' && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {status === 'error' && (
          <div className="card p-10 text-center">
            <FaGithub className="mx-auto mb-4 text-4xl text-muted" />
            <p className="text-white">
              Não foi possível carregar os repositórios da API do GitHub agora.
            </p>
            <p className="mt-2 text-sm text-muted">
              Visite{' '}
              <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" className="link-underline text-primary">
                github.com/{GITHUB_USER}
              </a>{' '}
              para ver todos os meus projetos.
            </p>
          </div>
        )}

        {status === 'ready' && (
          <>
            {filtered.length === 0 ? (
              <p className="py-10 text-center text-muted">Nenhum repositório encontrado para essa busca.</p>
            ) : (
              <motion.ul layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {filtered.map((repo) => (
                    <motion.li
                      key={repo.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card group block h-full p-6"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-display font-semibold text-white transition-colors group-hover:text-primary">
                            {repo.name}
                          </h3>
                          <HiOutlineExternalLink className="mt-0.5 shrink-0 text-muted transition-colors group-hover:text-primary" />
                        </div>

                        <p className="mt-2 line-clamp-3 min-h-[3.75rem] text-sm leading-relaxed text-muted">
                          {repo.description || 'Sem descrição disponível.'}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted">
                          {repo.language && (
                            <span className="flex items-center gap-1.5">
                              <span
                                className="h-2.5 w-2.5 rounded-full"
                                style={{ backgroundColor: getLanguages(repo.language) }}
                              />
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <HiOutlineStar /> {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaGithub /> {repo.forks_count}
                          </span>
                          <span className="ml-auto font-mono text-muted/70">
                            {new Date(repo.updated_at).toLocaleDateString('pt-BR', {
                              month: 'short',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      </a>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </motion.ul>
            )}

            <div className="mt-10 text-center">
              <a
                href={`https://github.com/${GITHUB_USER}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-white transition-all hover:border-primary/60 hover:bg-primary/5"
              >
                <FaGithub /> Ver todos no GitHub
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
