import { createFileRoute } from '@tanstack/react-router'
import rotationVideo from '@/assets/litebeam-turntable.mp4.asset.json'
import webmVideo from '@/assets/litebeam-turntable.webm.asset.json'
import poster from '@/assets/litebeam-official-0.png.asset.json'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'LiteBeam 5AC — Animation du produit' },
      { name: 'description', content: 'Une courte animation du LiteBeam 5AC Gen2 réalisée à partir des images officielles Ubiquiti.' },
      { property: 'og:title', content: 'LiteBeam 5AC — Animation du produit' },
      { property: 'og:description', content: 'Le LiteBeam en mouvement sur fond blanc, sans texte ni galerie.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Index,
})

function Index() {
  return (
    <main className="rotation-stage" aria-label="Animation du LiteBeam 5AC">
      <video className="rotation-video" poster={poster.url} autoPlay muted loop playsInline preload="auto" aria-label="LiteBeam animé à partir des vues officielles">
        <source src={webmVideo.url} type="video/webm" />
        <source src={rotationVideo.url} type="video/mp4" />
      </video>
    </main>
  )
}
