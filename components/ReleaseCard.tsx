import Link from 'next/link'
import {CmsImage} from './CmsImage'
import type {Release} from '@/lib/types'

const surfaceByIndex = ['bg-card-1', 'bg-card-2', 'bg-card-3']

export function ReleaseCard({release, index}: {release: Release; index: number}) {
  const surface = surfaceByIndex[index % surfaceByIndex.length]

  return (
    <Link
      href={release.link ?? '#'}
      className={`group relative flex h-full min-h-[200px] flex-col justify-end overflow-hidden rounded-[1.75rem] p-5 text-cream ${surface}`}
    >
      {release.cover?.asset ? (
        <CmsImage
          image={release.cover}
          alt={`${release.title} — обложка релиза`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-violet/70 via-plum to-pink-deep/60 transition-transform duration-500 group-hover:scale-105" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />

      <div className="relative flex items-end justify-between gap-2">
        <div className="leading-snug">
          <div className="font-body text-[15px] font-bold sm:text-base">{release.title}</div>
          <div className="font-body text-[13px] text-cream/70">{release.year}</div>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream/15 text-cream transition-transform group-hover:translate-x-0.5 group-hover:scale-105">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
            <path d="M6 12h12M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  )
}
