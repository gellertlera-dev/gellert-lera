import {client} from '@/sanity/lib/client'
import {pageDataQuery} from '@/sanity/lib/queries'
import {projectId} from '@/sanity/env'
import {placeholderData} from './placeholder-data'
import type {PageData} from './types'

const isSanityConfigured = Boolean(projectId)

/**
 * Fetches all page content from Sanity. Until NEXT_PUBLIC_SANITY_PROJECT_ID
 * is set (see README), this returns the placeholder content instead so the
 * site is fully functional out of the box, matching the design brief 1:1.
 * Individual fields still fall back to placeholder values via `??` at the
 * component level in case only *some* documents have been published.
 */
export async function getPageData(): Promise<PageData> {
  if (!isSanityConfigured) {
    return placeholderData
  }

  try {
    const data = await client.fetch<Partial<PageData>>(
      pageDataQuery,
      {},
      {next: {revalidate: 60, tags: ['page-data']}}
    )

    return {
      siteSettings: {...placeholderData.siteSettings, ...data.siteSettings},
      hero: {...placeholderData.hero, ...data.hero},
      releases: data.releases?.length ? data.releases : placeholderData.releases,
      about: {...placeholderData.about, ...data.about},
      socials: data.socials?.length ? data.socials : placeholderData.socials,
      live: {...placeholderData.live, ...data.live},
      collaboration: {...placeholderData.collaboration, ...data.collaboration},
    }
  } catch (error) {
    console.error('Failed to fetch content from Sanity, using placeholders:', error)
    return placeholderData
  }
}
