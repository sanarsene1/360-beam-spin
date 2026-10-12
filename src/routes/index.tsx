import { createFileRoute } from '@tanstack/react-router'
import rotationVideo from '@/assets/litebeam-turntable.mp4.asset.json'
import webmVideo from '@/assets/litebeam-turntable.webm.asset.json'
import poster from '@/assets/litebeam-official-0.png.asset.json'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'LiteBeam 5AC — Rotation infinie' },
      { name: 'description', content: 'Animation originale du LiteBeam 5AC en boucle infinie, sans tige ajoutée.' },
      { property: 'og:title', content: 'LiteBeam 5AC — Rotation infinie' },
      { property: 'og:description', content: 'Le LiteBeam original en mouvement sur fond blanc, en boucle infinie.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Index,
})

function Index() {
  return (
    <main className="rotation-stage" aria-label="Rotation infinie du LiteBeam 5AC">
      <video className="rotation-video" poster={poster.url} autoPlay muted loop playsInline preload="auto" aria-label="LiteBeam original en boucle infinie">
        <source src={webmVideo.url} type="video/webm" />
        <source src={rotationVideo.url} type="video/mp4" />
      </video>
    </main>
  )
}
