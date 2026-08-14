import Link from 'next/link'
import {Reveal} from './Reveal'
import {Sparkle} from './icons/Sparkle'
import {SocialIcon} from './icons/SocialIcons'
import type {Social} from '@/lib/types'

const cardTint = [
  'bg-pink/25',
  'bg-lilac/30',
  'bg-violet/20',
  'bg-pink/20',
  'bg-lilac/25',
  'bg-pink-deep/15',
  'bg-violet/15',
]

export function Socials({socials}: {socials: Social[]}) {
  return (
    <section id="socials" className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <Reveal className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
        <h2 className="flex items-center gap-3 font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
          <Sparkle className="h-4 w-4 text-pink-deep" />
          Найди меня
        </h2>
        <span className="hidden font-body text-xs font-semibold uppercase tracking-wide text-ink/70 sm:inline">
          Все соцсети →
        </span>
      </Reveal>

      <div className="-mx-5 flex snap-x gap-3 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-4 xl:grid-cols-7">
        {socials.map((social, i) => (
          <Link
            key={social._id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex w-[150px] shrink-0 snap-start flex-col gap-6 rounded-[1.5rem] p-5 transition-transform hover:-translate-y-1 sm:w-auto ${
              cardTint[i % cardTint.length]
            }`}
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream text-ink transition-transform group-hover:scale-105">
              <SocialIcon platform={social.platform} />
            </span>
            <span>
              <span className="block font-display text-sm font-bold uppercase tracking-wide">
                {social.label}
              </span>
              <span className="mt-1 flex items-center gap-1 font-body text-[11px] font-semibold uppercase tracking-wide text-ink/60">
                Смотреть →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
