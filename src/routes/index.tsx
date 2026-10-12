import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, ExternalLink, Info, Maximize, Minimize } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { litebeamViews, nextViewIndex } from '@/lib/litebeam-media'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'airMAX LiteBeam 5AC — Vues officielles Ubiquiti' },
      { name: 'description', content: 'Découvrez le LiteBeam 5AC Gen2 sous huit angles avec les images officielles Ubiquiti, sans antenne générée.' },
      { property: 'og:title', content: 'airMAX LiteBeam 5AC — Vues officielles Ubiquiti' },
      { property: 'og:description', content: 'Huit vues authentiques du LiteBeam 5AC Gen2 : face, profil et fixation arrière.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  }),
  component: Index,
})

function Index() {
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [fullscreenError, setFullscreenError] = useState(false)
  const viewer = useRef<HTMLDivElement>(null)
  const pointerStart = useRef<number | null>(null)
  const image = litebeamViews[index] ?? litebeamViews[0]
  useEffect(() => {
    const handleChange = () => setExpanded(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', handleChange)
    return () => document.removeEventListener('fullscreenchange', handleChange)
  }, [])
  const selectView = (value: number) => { setIndex(value); setImageError(false) }
  const step = (direction: number) => selectView(nextViewIndex(index, direction, litebeamViews.length))
  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen()
      else if (viewer.current) await viewer.current.requestFullscreen()
    } catch { setFullscreenError(true) }
  }

  if (!image) return <main className="studio-content">Aucune vue disponible.</main>

  return (
    <div className="studio-page">
      <header className="studio-header">
        <div className="studio-brand"><span className="studio-brand-mark" aria-hidden="true">U</span> Ubiquiti</div>
        <span className="studio-header-label">airMAX · LiteBeam</span>
      </header>
      <main className="studio-content">
        <div className="studio-breadcrumb"><span>UISP</span><ChevronRight size={12} /><span>Wireless</span><ChevronRight size={12} /><span>LiteBeam 5AC</span></div>
        <div className="studio-heading">
          <div><div className="studio-eyebrow">AIRMAX</div><h1 className="studio-title">LiteBeam 5AC</h1><p className="studio-model">LBE-5AC-Gen2</p></div>
          <div className="studio-source"><CheckCircle2 size={15} /> Images officielles Ubiquiti</div>
        </div>
        <div
          ref={viewer}
          className="studio-viewer"
          role="region"
          aria-label="Vues officielles du LiteBeam"
          tabIndex={0}
          onKeyDown={event => {
            if (event.key === 'ArrowRight') { event.preventDefault(); step(1) }
            if (event.key === 'ArrowLeft') { event.preventDefault(); step(-1) }
          }}
          onPointerDown={event => { pointerStart.current = event.clientX }}
          onPointerUp={event => {
            if (pointerStart.current !== null && Math.abs(event.clientX - pointerStart.current) > 40) step(event.clientX < pointerStart.current ? 1 : -1)
            pointerStart.current = null
          }}
          onPointerCancel={() => { pointerStart.current = null }}
        >
          <span className="studio-view-label" aria-live="polite">{image.label}</span>
          {imageError ? <p className="text-sm text-muted-foreground">L’image n’a pas pu être chargée.</p> : <img className="studio-product" src={image.src} alt={`Ubiquiti LiteBeam 5AC Gen2 — ${image.label}`} draggable={false} onError={() => setImageError(true)} />}
          <Button className="studio-expand" variant="ghost" size="icon" onClick={toggleFullscreen} aria-label={expanded ? 'Quitter le plein écran' : 'Plein écran'} title={expanded ? 'Quitter le plein écran' : 'Plein écran'}>{expanded ? <Minimize /> : <Maximize />}</Button>
        </div>
        <div className="studio-controls">
          <div className="studio-thumbnails" aria-label="Angles disponibles">
            {litebeamViews.map((view, position) => <Button key={view.src} variant="ghost" className="studio-thumbnail" aria-label={view.label} title={view.label} aria-pressed={index === position} onClick={() => selectView(position)}><img src={view.src} alt="" draggable={false} /></Button>)}
          </div>
          <div className="studio-arrows"><Button variant="ghost" size="icon" aria-label="Vue précédente" title="Vue précédente" onClick={() => step(-1)}><ArrowLeft /></Button><span className="studio-count">{index + 1} / {litebeamViews.length}</span><Button variant="ghost" size="icon" aria-label="Vue suivante" title="Vue suivante" onClick={() => step(1)}><ArrowRight /></Button></div>
        </div>
        {fullscreenError && <p role="alert" className="text-sm text-muted-foreground mt-3">Le plein écran n’est pas disponible dans cette fenêtre.</p>}
        <div className="studio-note"><Info size={17} /><p>Ces huit vues officielles ne constituent pas une rotation 360° continue. Aucune séquence complète ni aucun modèle 3D officiel n’a été trouvé pour ce LiteBeam ; aucun angle n’a été inventé.</p></div>
        <div className="studio-details"><span className="studio-details-title">airMAX LiteBeam 5AC Gen2</span><a className="studio-official-link" href="https://store.ui.com/us/en/products/litebeam-5ac" target="_blank" rel="noreferrer">Voir le produit chez Ubiquiti <ExternalLink size={14} /></a></div>
      </main>
    </div>
  )
}
