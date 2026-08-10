import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/content.js'

export default function useScrollSpy() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id)
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -55% 0px' },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return active
}
