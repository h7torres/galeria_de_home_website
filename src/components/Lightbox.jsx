import { useCallback, useEffect, useRef, useState } from 'react'

// Full-screen viewer for any list of image URLs.
// "images" is the list, "start" is the one that was clicked.
export default function Lightbox({ images, start, onClose }) {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(start)

  // Jumps straight to an image, no sliding animation.
  const goTo = useCallback(
    (i) => {
      const track = trackRef.current
      if (!track) return
      const next = Math.max(0, Math.min(images.length - 1, i))
      track.scrollTo({ left: next * track.clientWidth, behavior: 'auto' })
      setIndex(next)
    },
    [images.length],
  )

  // Open on the image that was clicked, and stop the page behind from scrolling.
  useEffect(() => {
    goTo(start)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [start, goTo])

  // Keyboard: arrows move, Esc closes.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goTo(index + 1)
      if (e.key === 'ArrowLeft') goTo(index - 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, goTo, onClose])

  // Mouse wheel scrolls sideways.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        track.scrollBy({ left: e.deltaY, behavior: 'auto' })
      }
    }
    track.addEventListener('wheel', onWheel, { passive: false })
    return () => track.removeEventListener('wheel', onWheel)
  }, [])

  // Keep the counter in sync when swiping.
  const onScroll = () => {
    const track = trackRef.current
    if (track) setIndex(Math.round(track.scrollLeft / track.clientWidth))
  }

  const arrow =
    'absolute top-1/2 -translate-y-1/2 p-3 text-2xl leading-none text-black hover:opacity-60 disabled:invisible'

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
    >
      {/* Top bar: counter and close */}
      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 text-sm text-black">
        <span>
          {index + 1} / {images.length}
        </span>
        <button type="button" onClick={onClose} className="hover:opacity-60">
          CLOSE
        </button>
      </div>

      {/* Fixed-size frame: every image fits inside it, so the arrows never move */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative h-[75vh] w-[calc(100vw-6rem)] max-w-5xl md:h-[80vh]"
      >
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex h-full w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden [scroll-behavior:auto] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {images.map((src, i) => (
            <div key={`${src}-${i}`} className="flex h-full w-full shrink-0 snap-center items-center justify-center">
              <img
                src={src.replace(/width=\d+/, 'width=2000')}
                alt=""
                loading="lazy"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Previous"
          disabled={index === 0}
          onClick={() => goTo(index - 1)}
          className={`${arrow} -left-12`}
        >
          &lt;
        </button>
        <button
          type="button"
          aria-label="Next"
          disabled={index === images.length - 1}
          onClick={() => goTo(index + 1)}
          className={`${arrow} -right-12`}
        >
          &gt;
        </button>
      </div>
    </div>
  )
}