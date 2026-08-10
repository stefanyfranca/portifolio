import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiOutlineArrowUp } from 'react-icons/hi'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
          initial={{ opacity: 0, y: 16, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.8 }}
          whileHover={{ y: -3 }}
          className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-primary/50 bg-surface/80 text-lg text-primary shadow-glow backdrop-blur-xl transition-colors hover:bg-primary/10"
        >
          <HiOutlineArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
