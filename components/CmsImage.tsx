import Image from 'next/image'
import {urlForImage} from '@/sanity/lib/image'
import type {SanityImageSource} from '@/lib/types'

interface CmsImageProps {
  image?: SanityImageSource
  alt: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  className?: string
  priority?: boolean
}

/**
 * Renders a Sanity image when one is set in the CMS, or a tasteful
 * placeholder gradient block when it isn't yet — so editors always see
 * where a photo belongs before they've uploaded one (per brief §14).
 */
export function CmsImage({
  image,
  alt,
  fill,
  width,
  height,
  sizes,
  className = '',
  priority,
}: CmsImageProps) {
  const src = urlForImage(image)?.url()

  if (!src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-lilac/40 via-pink/30 to-violet/40 text-center text-xs font-body uppercase tracking-wide text-ink/50 ${
          fill ? 'absolute inset-0 h-full w-full' : ''
        } ${className}`}
        style={!fill ? {width, height} : undefined}
        aria-label={alt}
        role="img"
      >
        Фото ещё не загружено
      </div>
    )
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? '100vw'}
        className={className}
        priority={priority}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 800}
      sizes={sizes}
      className={className}
      priority={priority}
    />
  )
}
