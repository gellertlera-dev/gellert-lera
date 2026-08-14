import Link from 'next/link'
import {Sparkle} from './icons/Sparkle'
import type {SiteSettings} from '@/lib/types'

export function Footer({settings}: {settings: SiteSettings}) {
  const nav = settings.navigation ?? []
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8 lg:px-12">
      <div className="flex flex-col items-start gap-6 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <span className="font-display text-base font-semibold uppercase tracking-tight">
          {settings.logoLine1} {settings.logoLine2} ♡
        </span>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Навигация в подвале">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-body text-[12px] font-semibold uppercase tracking-wide text-ink/70 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <span className="flex items-center gap-1.5 font-body text-[12px] font-semibold uppercase tracking-wide text-ink/60">
          © {year} {settings.logoLine1} {settings.logoLine2}
          <Sparkle className="h-2.5 w-2.5 text-pink-deep" />
        </span>
      </div>
    </footer>
  )
}
