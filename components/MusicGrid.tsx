import Link from 'next/link'
import {ReleaseCard} from './ReleaseCard'
import {Reveal} from './Reveal'
import {Sparkle} from './icons/Sparkle'
import type {Release} from '@/lib/types'

export function MusicGrid({releases}: {releases: Release[]}) {
  return (
    <section id="music" className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <Reveal className="mb-6 flex items-end justify-between gap-4 sm:mb-8">
        <h2 className="flex items-center gap-3 font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
          <Sparkle className="h-4 w-4 text-pink-deep" />
          Моя музыка
        </h2>
        <Link
          href="#music"
          className="hidden shrink-0 items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wide text-ink/70 transition-colors hover:text-ink sm:flex"
        >
          Смотреть все релизы →
        </Link>
      </Reveal>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:auto-rows-[190px] lg:grid-cols-5 lg:[grid-auto-flow:dense]">
        {releases.map((release, index) => (
          <div
            key={release._id}
            className={
              release.featured
                ? 'col-span-2 row-span-2 lg:col-span-1 lg:row-span-2'
                : 'lg:col-span-1 lg:row-span-1'
            }
          >
            <ReleaseCard release={release} index={index} />
          </div>
        ))}
      </div>

      <Link
        href="#music"
        className="mt-6 flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wide text-ink/70 sm:hidden"
      >
        Смотреть все релизы →
      </Link>
    </section>
  )
}
