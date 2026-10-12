import { createFileRoute } from '@tanstack/react-router'
import rotationVideo from '@/assets/litebeam-rear-support.mp4.asset.json'
import poster from '@/assets/litebeam-official-0.png.asset.json'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'LiteBeam 5AC — Support arrière' },
      { name: 'description', content: 'Animation originale du LiteBeam 5AC avec une tige de support arrière.' },
      { property: 'og:title', content: 'LiteBeam 5AC — Support arrière' },
      { property: 'og:description', content: 'Le LiteBeam en mouvement avec sa tige de fixation arrière, sur fond blanc.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Index,
})

function Index() {
  return (
    <main className="rotation-stage" aria-label="Animation du LiteBeam 5AC avec support arrière">
      <video className="rotation-video" poster={poster.url} autoPlay muted loop playsInline preload="auto" aria-label="LiteBeam avec tige de fixation arrière">
        <source src={rotationVideo.url} type="video/mp4" />
      </video>
    </main>
  )
}
