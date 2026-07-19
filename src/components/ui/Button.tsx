import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

type CommonProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  icon?: ReactNode
  className?: string
}

type ButtonAsLink = CommonProps & {
  href: string
  download?: string | boolean
  target?: string
  rel?: string
  onClick?: never
  type?: never
}

type ButtonAsButton = CommonProps & {
  href?: never
  download?: never
  target?: never
  rel?: never
  onClick?: () => void
  type?: 'button' | 'submit'
}

type ButtonProps = ButtonAsLink | ButtonAsButton

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-200'

const variantClasses = {
  primary: 'bg-cyan text-canvas shadow-[0_4px_24px_rgba(0,217,255,0.35)] hover:shadow-[0_6px_30px_rgba(0,217,255,0.5)] hover:-translate-y-0.5',
  secondary:
    'border border-hairline bg-card text-ink hover:border-cyan/50 hover:bg-cyan/5 hover:-translate-y-0.5',
}

export function Button(props: ButtonProps) {
  const { children, variant = 'primary', icon, className } = props
  const classes = clsx(baseClasses, variantClasses[variant], className)

  if ('href' in props && props.href) {
    return (
      <motion.a
        href={props.href}
        download={props.download}
        target={props.target}
        rel={props.rel}
        className={classes}
        whileTap={{ scale: 0.97 }}
      >
        {icon}
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={(props as ButtonAsButton).type ?? 'button'}
      onClick={(props as ButtonAsButton).onClick}
      className={classes}
      whileTap={{ scale: 0.97 }}
    >
      {icon}
      {children}
    </motion.button>
  )
}
