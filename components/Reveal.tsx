'use client'

import type {ReactNode} from 'react'
import {useReveal} from '@/lib/use-reveal'

export function Reveal({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
}) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <Tag ref={ref as never} className={`reveal ${className}`}>
      {children}
    </Tag>
  )
}
