export function Sparkle({className = ''}: {className?: string}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2C12 8 16 12 22 12C16 12 12 16 12 22C12 16 8 12 2 12C8 12 12 8 12 2Z"
        fill="currentColor"
      />
    </svg>
  )
}
