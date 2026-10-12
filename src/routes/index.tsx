import { createFileRoute } from "@tanstack/react-router";
import rotationVideo from '@/assets/litebeam-continuous.mp4.asset.json';
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: 'LiteBeam 5AC — Rotation continue' },
    { name: 'description', content: 'Le LiteBeam original en rotation continue, sans attente initiale.' },
    { property: 'og:title', content: 'LiteBeam 5AC — Rotation continue' },
    { property: 'og:description', content: 'Animation du LiteBeam original avec un raccord adouci.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Index() {
  return (
    <main className="rotation-stage" aria-label="Rotation continue du LiteBeam 5AC">
      <video className="rotation-video" src={rotationVideo.url} autoPlay muted loop playsInline preload="auto" aria-label="LiteBeam original en rotation continue" />
    </main>
  );
}
