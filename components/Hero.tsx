import Link from 'next/link'
import {CmsImage} from './CmsImage'
import {Sparkle} from './icons/Sparkle'
import type {Hero as HeroType} from '@/lib/types'

export function Hero({hero}: {hero: HeroType}) {
  return (
    <section id="top" className="mx-auto max-w-[1400px] px-5 pb-16 pt-6 sm:px-8 lg:px-12 lg:pt-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div className="order-2 lg:order-1">
          <h1 className="font-display text-[18vw] font-bold uppercase leading-[0.86] tracking-tight sm:text-[11vw] lg:text-[6.2vw] xl:text-[88px]">
            {hero.titleLine1}
            <br />
            {hero.titleLine2}
          </h1>

          <div className="mt-6 flex items-start gap-2.5 font-body text-[13px] font-semibold uppercase tracking-wide text-ink/70 sm:text-sm">
            <Sparkle className="mt-1 h-2.5 w-2.5 shrink-0 text-pink-deep" />
            <div className="leading-relaxed">
              {hero.roles.map((role) => (
                <div key={role}>{role}</div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={hero.primaryButtonLink ?? '#music'}
              className="rounded-full bg-gradient-to-r from-pink to-pink-deep px-6 py-3.5 font-body text-[13px] font-bold uppercase tracking-wide text-ink shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              {hero.primaryButtonText} →
            </Link>
            <Link
              href={hero.secondaryButtonLink ?? '#collaboration'}
              className="rounded-full border border-ink/15 px-6 py-3.5 font-body text-[13px] font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink/5"
            >
              {hero.secondaryButtonText} ✳
            </Link>
          </div>
        </div>

        <div className="relative order-1 aspect-[4/5] w-full sm:aspect-[5/4] lg:order-2 lg:aspect-[9/11]">
          <div className="blob-hero relative h-full w-full overflow-hidden">
            <CmsImage
              image={hero.image}
              alt={`${hero.titleLine1} ${hero.titleLine2}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          {(hero.musicTitle || hero.musicArtist) && (
            <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-full bg-cream/95 py-2 pl-2 pr-4 shadow-lg backdrop-blur sm:bottom-6 sm:right-6">
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full sm:h-11 sm:w-11">
                <CmsImage
                  image={hero.musicCover}
                  alt={hero.musicTitle ?? 'Обложка трека'}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div className="leading-tight">
                <div className="font-body text-[13px] font-bold text-ink">{hero.musicTitle}</div>
                <div className="font-body text-[11px] text-ink/60">{hero.musicArtist}</div>
              </div>
              <Link
                href={hero.musicLink ?? '#music'}
                aria-label="Слушать"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet text-cream transition-transform hover:scale-105"
              >
                <svg viewBox="0 0 24 24" className="ml-0.5 h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M6 4l14 8-14 8V4z" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
