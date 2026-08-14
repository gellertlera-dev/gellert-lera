export interface SanityImageSource {
  asset?: {_ref: string; _type: 'reference'}
  hotspot?: {x: number; y: number}
}

export interface NavItem {
  label: string
  href: string
}

export interface SiteSettings {
  logoLine1: string
  logoLine2: string
  email?: string
  navigation?: NavItem[]
  seoTitle?: string
  seoDescription?: string
  ogImage?: SanityImageSource
}

export interface Hero {
  titleLine1: string
  titleLine2: string
  roles: string[]
  primaryButtonText: string
  primaryButtonLink?: string
  secondaryButtonText: string
  secondaryButtonLink?: string
  image?: SanityImageSource
  musicTitle?: string
  musicArtist?: string
  musicCover?: SanityImageSource
  musicLink?: string
}

export interface Release {
  _id: string
  title: string
  year: string
  cover?: SanityImageSource
  link?: string
  order: number
  featured?: boolean
}

export interface About {
  eyebrow?: string
  titleLines?: string[]
  description?: string
  buttonText?: string
  buttonLink?: string
  image?: SanityImageSource
}

export type SocialPlatform =
  | 'youtube'
  | 'tiktok'
  | 'twitch'
  | 'instagram'
  | 'telegram'
  | 'vk'
  | 'vkplay'
  | 'other'

export interface Social {
  _id: string
  platform: SocialPlatform
  label?: string
  url: string
  order?: number
}

export interface Live {
  title?: string
  heading?: string
  description?: string
  image?: SanityImageSource
}

export interface Collaboration {
  title?: string
  description?: string
  email?: string
  buttonText?: string
  backgroundImage?: SanityImageSource
}

export interface PageData {
  siteSettings: SiteSettings
  hero: Hero
  releases: Release[]
  about: About
  socials: Social[]
  live: Live
  collaboration: Collaboration
}
