'use client'

import {useEffect, useRef} from 'react'

/**
 * Attaches an IntersectionObserver that adds `.is-visible` to the element
 * once it scrolls into view, pairing with the `.reveal` CSS class for a
 * subtle fade/slide-in. Used instead of a JS animation library to keep
 * things light and respectful of prefers-reduced-motion (handled in CSS).
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      {threshold: 0.15, rootMargin: '0px 0px -60px 0px'}
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return ref
}
