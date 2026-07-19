export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-hairline bg-surface px-3 py-1 text-xs font-medium text-ink-soft">
      {children}
    </span>
  )
}
