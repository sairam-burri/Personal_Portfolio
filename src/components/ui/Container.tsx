import type { ReactNode } from 'react'
import clsx from 'clsx'

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={clsx('relative z-10 mx-auto max-w-7xl px-6 sm:px-8', className)}>
      {children}
    </div>
  )
}
