import { useState } from 'react'
import Lightbox from '../components/Lightbox'
import { gallery } from '../data/site'

export default function Galleria() {
  const [open, setOpen] = useState(null) // index of the photo that was clicked

  return (
    <>
      <div className="grid grid-cols-2 gap-1 pt-6 min-[750px]:grid-cols-4">
        {gallery.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpen(i)}
            className="relative block aspect-[3/4] cursor-zoom-in overflow-hidden bg-[#f4f4f4]"
          >
            <img src={src} alt="" loading="lazy" className="block h-full w-full object-cover hover:opacity-80" />
          </button>
        ))}
      </div>

      {open !== null && <Lightbox images={gallery} start={open} onClose={() => setOpen(null)} />}
    </>
  )
}