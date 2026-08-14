'use client'

import {useEffect, useState} from 'react'
import {createPortal} from 'react-dom'
import Link from 'next/link'
import type {NavItem} from '@/lib/types'

export function MobileMenu({nav}: {nav: NavItem[]}) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // eslint-disable-next-line react-hooks/set-state-in-effect -- standard SSR-safe portal mount flag
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const overlay = (
    <div
      className={`fixed inset-0 z-50 flex flex-col bg-plum text-cream transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        open ? 'translate-x-0' : 'translate-x-full pointer-events-none'
      }`}
      aria-hidden={!open}
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
        <span className="font-display text-[15px] font-semibold uppercase leading-[0.95]">
          GELLERT
          <br />
          LERA
        </span>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Закрыть меню"
          tabIndex={open ? 0 : -1}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-lilac text-ink transition-transform hover:scale-105 active:scale-95"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <nav className="flex flex-1 flex-col items-start justify-center gap-3 px-8 sm:px-12">
        {nav.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="font-display text-[7vw] font-semibold uppercase leading-[1.1] transition-colors hover:text-pink sm:text-6xl"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Открыть меню"
        aria-expanded={open}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-lilac transition-transform hover:scale-105 active:scale-95"
      >
        <span className="sr-only">Меню</span>
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink" fill="none" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {mounted ? createPortal(overlay, document.body) : null}
    </>
  )
}
