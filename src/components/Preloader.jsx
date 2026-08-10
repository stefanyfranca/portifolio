import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-base"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex items-center gap-2 font-mono text-sm text-muted">
            <span className="text-primary">&gt;</span>
            <span>
              inicializando_dados<span className="animate-pulse">_</span>
            </span>
          </div>

          <div className="relative h-1 w-56 overflow-hidden rounded-full bg-line">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-secondary"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
            />
          </div>

          <motion.div
            className="font-display text-2xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <span className="text-white">S.</span>
            <span className="text-gradient">FRANÇA</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
