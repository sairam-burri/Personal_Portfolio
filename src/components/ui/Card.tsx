import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={clsx(
        'rounded-2xl border border-hairline bg-card p-6 sm:p-8',
        'hover:border-cyan/30 transition-colors duration-200',
        className,
      )}
    >
      {children}
    </motion.div>
  )
}
