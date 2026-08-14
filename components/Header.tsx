import Link from 'next/link'
import {Sparkle} from './icons/Sparkle'
import {MobileMenu} from './MobileMenu'
import type {NavItem, SiteSettings} from '@/lib/types'

export function Header({settings}: {settings: SiteSettings}) {
  const nav: NavItem[] = settings.navigation ?? []

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <Link href="#top" className="flex items-start gap-1.5 leading-[0.95]">
          <span className="font-display text-[15px] font-semibold uppercase tracking-tight sm:text-base">
            {settings.logoLine1}
            <br />
            {settings.logoLine2}
          </span>
          <Sparkle className="mt-0.5 h-2.5 w-2.5 text-pink-deep" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
          {nav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-body text-[13px] font-semibold uppercase tracking-wide text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileMenu nav={nav} />
      </div>
    </header>
  )
}
