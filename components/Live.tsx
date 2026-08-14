import {Reveal} from './Reveal'
import {Sparkle} from './icons/Sparkle'
import type {Live as LiveType} from '@/lib/types'

export function Live({live}: {live: LiveType}) {
  return (
    <Reveal
      as="section"
      className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-lilac/15 p-8 sm:p-10"
    >
      <div className="flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wide text-ink/60">
        <Sparkle className="h-3 w-3 text-pink-deep" />
        {live.title ?? 'Live'}
      </div>

      <div>
        <h3 className="font-display text-3xl font-bold leading-[1.05] sm:text-4xl">
          {live.heading}
        </h3>
        <p className="mt-3 max-w-xs font-body text-sm text-ink/70">{live.description}</p>
      </div>

      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 text-pink/40 animate-[spin_18s_linear_infinite]"
        aria-hidden="true"
      >
        <path
          d="M50 5 L58 42 L95 50 L58 58 L50 95 L42 58 L5 50 L42 42 Z"
          stroke="currentColor"
          strokeWidth="1.4"
          fill="none"
        />
      </svg>
    </Reveal>
  )
}
