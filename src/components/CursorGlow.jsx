import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)
  const dotRef = useRef(null)
  const target = useRef({ x: -100, y: -100 })
  const pos = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return

    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`
      }
    }

    let raf
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.12
      pos.current.y += (target.current.y - pos.current.y) * 0.12
      if (ref.current) {
        ref.current.style.transform = `translate(${pos.current.x - 160}px, ${pos.current.y - 160}px)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-1.5 w-1.5 rounded-full bg-primary lg:block"
        aria-hidden="true"
      />
      <div
        ref={ref}
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-80 w-80 rounded-full opacity-20 blur-3xl lg:block"
        style={{
          background:
            'radial-gradient(circle, rgba(34,211,238,0.35), rgba(167,139,250,0.15) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />
    </>
  )
}
