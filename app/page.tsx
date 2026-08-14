import {getPageData} from '@/lib/get-page-data'
import {Header} from '@/components/Header'
import {Hero} from '@/components/Hero'
import {MusicGrid} from '@/components/MusicGrid'
import {About} from '@/components/About'
import {Socials} from '@/components/Socials'
import {Live} from '@/components/Live'
import {Collaboration} from '@/components/Collaboration'
import {Footer} from '@/components/Footer'

export default async function HomePage() {
  const {siteSettings, hero, releases, about, socials, live, collaboration} =
    await getPageData()

  return (
    <>
      <Header settings={siteSettings} />

      <main>
        <Hero hero={hero} />
        <MusicGrid releases={releases} />
        <About about={about} />
        <Socials socials={socials} />

        <section className="mx-auto grid max-w-[1400px] gap-4 px-5 py-6 sm:px-8 md:grid-cols-2 lg:px-12">
          <div id="live">
            <Live live={live} />
          </div>
          <div id="collaboration">
            <Collaboration collaboration={collaboration} />
          </div>
        </section>
      </main>

      <Footer settings={siteSettings} />
    </>
  )
}
