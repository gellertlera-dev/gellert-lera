import Link from 'next/link'
import {Reveal} from './Reveal'
import {Sparkle} from './icons/Sparkle'
import type {Collaboration as CollaborationType} from '@/lib/types'

export function Collaboration({collaboration}: {collaboration: CollaborationType}) {
  const email = collaboration.email
  const href = email ? `mailto:${email}` : '#'

  return (
    <Reveal
      as="section"
      className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-gradient-to-br from-pink via-pink-deep to-violet p-8 text-cream sm:p-10"
    >
      <h3 className="font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
        {collaboration.title ?? 'Сотрудничество'}
      </h3>

      <div>
        <p className="max-w-sm font-body text-sm leading-relaxed text-cream/90">
          {collaboration.description}
        </p>

        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3.5 font-body text-[13px] font-bold uppercase tracking-wide text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
        >
          {collaboration.buttonText ?? 'Написать мне'} ✉
        </Link>
      </div>

      <Sparkle className="pointer-events-none absolute -top-6 right-8 h-24 w-24 text-cream/25" />
    </Reveal>
  )
}
