import Link from 'next/link'
import {CmsImage} from './CmsImage'
import {Reveal} from './Reveal'
import {Sparkle} from './icons/Sparkle'
import type {About as AboutType} from '@/lib/types'

export function About({about}: {about: AboutType}) {
  const paragraphs = (about.description ?? '').split('\n\n').filter(Boolean)

  return (
    <section id="about" className="mx-auto max-w-[1400px] px-5 py-6 sm:px-8 lg:px-12">
      <Reveal
        as="section"
        className="grid overflow-hidden rounded-[2.5rem] bg-lilac/20 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          <div className="mb-4 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wide text-ink/60">
            <Sparkle className="h-3 w-3 text-pink-deep" />
            {about.eyebrow ?? 'Обо мне'}
          </div>

          <h2 className="font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            {about.titleLines?.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>

          <div className="mt-6 space-y-4 font-body text-sm leading-relaxed text-ink/75 sm:text-base">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {about.buttonText && (
            <Link
              href={about.buttonLink ?? '#'}
              className="mt-8 inline-flex w-fit items-center gap-1.5 font-body text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:text-violet"
            >
              {about.buttonText} →
            </Link>
          )}
        </div>

        <div className="blob-about relative min-h-[320px] w-full overflow-hidden sm:min-h-[420px] lg:min-h-full">
          <CmsImage
            image={about.image}
            alt="Фотография Леры"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </Reveal>
    </section>
  )
}
