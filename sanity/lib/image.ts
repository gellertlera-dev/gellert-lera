import {createImageUrlBuilder} from '@sanity/image-url'
import {dataset, projectId} from '../env'
import type {SanityImageSource} from '@/lib/types'

const imageBuilder = createImageUrlBuilder({projectId, dataset})

export function urlForImage(source?: SanityImageSource) {
  if (!source?.asset?._ref) {
    return undefined
  }
  return imageBuilder.image(source as never).auto('format').fit('max')
}
