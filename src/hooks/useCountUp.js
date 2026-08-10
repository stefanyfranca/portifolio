import { useEffect, useRef } from 'react'

export default function useCountUp(target, { duration = 1400, decimals = 0, start = true } = {}) {
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (!start || started.current) return
    started.current = true

    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      el.textContent = target.toFixed(decimals)
      return
    }

    const t0 = performance.now()
    let raf

    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      el.textContent = (target * eased).toFixed(decimals)
      if (p < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, decimals, start])

  return ref
}
