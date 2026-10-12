import view0 from '@/assets/litebeam-official-0.png.asset.json'
import view1 from '@/assets/litebeam-official-1.png.asset.json'
import view2 from '@/assets/litebeam-official-2.png.asset.json'
import view3 from '@/assets/litebeam-official-3.png.asset.json'
import view4 from '@/assets/litebeam-official-4.png.asset.json'
import view5 from '@/assets/litebeam-official-5.png.asset.json'
import view6 from '@/assets/litebeam-official-6.png.asset.json'
import view7 from '@/assets/litebeam-official-7.png.asset.json'

export const litebeamViews = [
  { src: view0.url, label: 'Trois-quarts avant' },
  { src: view1.url, label: 'Face avant' },
  { src: view2.url, label: 'Profil' },
  { src: view3.url, label: 'Trois-quarts arrière' },
  { src: view4.url, label: 'Face arrière' },
  { src: view5.url, label: 'Fixation arrière' },
  { src: view6.url, label: 'Vue du dessus' },
  { src: view7.url, label: 'Perspective avant' },
]

export function nextViewIndex(current: number, direction: number, count: number) {
  if (count <= 0) return 0
  return ((current + direction) % count + count) % count
}