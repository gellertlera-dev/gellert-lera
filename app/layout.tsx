import type {Metadata} from 'next'
import {getPageData} from '@/lib/get-page-data'
import {urlForImage} from '@/sanity/lib/image'
import '@fontsource/unbounded/500.css'
import '@fontsource/unbounded/600.css'
import '@fontsource/unbounded/700.css'
import '@fontsource/unbounded/800.css'
import '@fontsource/unbounded/cyrillic-500.css'
import '@fontsource/unbounded/cyrillic-600.css'
import '@fontsource/unbounded/cyrillic-700.css'
import '@fontsource/unbounded/cyrillic-800.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import '@fontsource/manrope/800.css'
import '@fontsource/manrope/cyrillic-400.css'
import '@fontsource/manrope/cyrillic-500.css'
import '@fontsource/manrope/cyrillic-600.css'
import '@fontsource/manrope/cyrillic-700.css'
import '@fontsource/manrope/cyrillic-800.css'
import './globals.css'

export async function generateMetadata(): Promise<Metadata> {
  const {siteSettings} = await getPageData()
  const ogImage = urlForImage(siteSettings.ogImage)?.width(1200).height(630).url()

  return {
    title: siteSettings.seoTitle ?? 'Gellert Lera — Singer, Songwriter, Streamer',
    description: siteSettings.seoDescription,
    icons: {icon: '/favicon.ico'},
    openGraph: {
      title: siteSettings.seoTitle ?? 'Gellert Lera',
      description: siteSettings.seoDescription,
      images: ogImage ? [{url: ogImage, width: 1200, height: 630}] : undefined,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteSettings.seoTitle ?? 'Gellert Lera',
      description: siteSettings.seoDescription,
    },
  }
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ru" className="h-full">
      <body className="min-h-full bg-cream font-body text-ink antialiased">{children}</body>
    </html>
  )
}
