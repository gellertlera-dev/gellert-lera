import type {SocialPlatform} from '@/lib/types'

const common = 'w-6 h-6'

function YouTube() {
  return (
    <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true">
      <path d="M22 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.5a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.8 1.8c1.5.5 7.8.5 7.8.5s6.3 0 7.8-.5a2.5 2.5 0 0 0 1.8-1.8c.4-1.5.4-4.7.4-4.7zM10 15V9l5.2 3-5.2 3z" />
    </svg>
  )
}

function TikTok() {
  return (
    <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.8a4.3 4.3 0 0 1-3-3.8h-3v13.4a2.6 2.6 0 1 1-1.9-2.5V9.6a5.7 5.7 0 1 0 4.9 5.6V9.3a7.3 7.3 0 0 0 4 1.2V7.4a4.3 4.3 0 0 1-1-1.6z" />
    </svg>
  )
}

function Twitch() {
  return (
    <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true">
      <path d="M4 3 3 6v13h5v2h3l2-2h4l4-4V3H4zm16 9-3 3h-4l-2 2v-2H7V5h13v7z" />
      <path d="M15 8h2v4h-2zm-4 0h2v4h-2z" fill="var(--color-plum,#2c1b3d)" />
    </svg>
  )
}

function Instagram() {
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function Telegram() {
  return (
    <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true">
      <path d="M21.5 3 2.5 10.6c-1.2.5-1.2 1.2-.2 1.5l4.9 1.5 1.9 5.8c.2.6.4.9.9.9.4 0 .6-.2.9-.5l2.1-2 4.4 3.2c.8.5 1.4.2 1.6-.7l3-14.1c.3-1.2-.4-1.7-1.5-1.2zM8.5 13.4l9-5.6c.4-.3.8-.1.5.2l-7.5 6.8-.3 3.1-1.3-4.5z" />
    </svg>
  )
}

function VK() {
  return (
    <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true">
      <path d="M13.2 17.2c-5.6 0-8.8-3.8-9-10.2h2.8c.1 4.7 2.2 6.7 3.8 7.1V7h2.6v4c1.6-.2 3.3-2 3.9-4h2.6c-.5 2.5-2.3 4.3-3.6 5 1.3.6 3.4 2.2 4.2 5h-2.9c-.6-1.9-2.1-3.4-4.2-3.6v3.6h-.2z" />
    </svg>
  )
}

function VKPlay() {
  return (
    <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true">
      <path d="M3 12a9 9 0 1 1 9 9 9 9 0 0 1-9-9zm7.5-4v8l6-4-6-4z" />
    </svg>
  )
}

function Generic() {
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
    </svg>
  )
}

const icons: Record<SocialPlatform, () => React.ReactElement> = {
  youtube: YouTube,
  tiktok: TikTok,
  twitch: Twitch,
  instagram: Instagram,
  telegram: Telegram,
  vk: VK,
  vkplay: VKPlay,
  other: Generic,
}

export function SocialIcon({platform}: {platform: SocialPlatform}) {
  const IconComponent = icons[platform] ?? Generic
  return <IconComponent />
}
