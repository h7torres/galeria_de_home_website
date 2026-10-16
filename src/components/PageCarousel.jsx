import { useCallback, useEffect, useRef, useState } from 'react'

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" width="50%" height="50%" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M15 18l-6-6 6-6" />
  </svg>
)
const ChevronRight = () => (
  <svg viewBox="0 0 24 24" width="50%" height="50%" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M9 18l6-6-6-6" />
  </svg>
)

const SPEED = 12 // pixels per frame while an arrow is held; raise to scroll faster

// A row of magazine pages that scrolls freely.
// Phones: swipe. Desktop: trackpad, click-and-drag, or hold an arrow.
// Click a page to open it big.
export default function PageCarousel({ pages, onOpen }) {
  const trackRef = useRef(null)
  const holdFrame = useRef(null)
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false })
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  // Track whether we're at either end, to hide the arrow on that side.
  const updateEnds = useCallback(() => {
    const t = trackRef.current
    if (!t) return
    setAtStart(t.scrollLeft <= 1)
    setAtEnd(t.scrollLeft + t.clientWidth >= t.scrollWidth - 1)
  }, [])

  useEffect(() => {
    updateEnds()
    window.addEventListener('resize', updateEnds)
    return () => {
      window.removeEventListener('resize', updateEnds)
      cancelAnimationFrame(holdFrame.current)
    }
  }, [updateEnds])

  // Holding an arrow: keep scrolling every frame until released.
  const startHold = (direction) => (e) => {
    e.preventDefault()
    cancelAnimationFrame(holdFrame.current)
    const step = () => {
      const t = trackRef.current
      if (!t) return
      t.scrollLeft += direction * SPEED
      holdFrame.current = requestAnimationFrame(step)
    }
    step()
  }

  const stopHold = () => cancelAnimationFrame(holdFrame.current)

  // Mouse drag to scroll (touch and trackpads already scroll natively).
  const onPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return
    drag.current = { active: true, startX: e.clientX, startScroll: trackRef.current.scrollLeft, moved: false }
  }

  const onPointerMove = (e) => {
    const d = drag.current
    if (!d.active) return
    const dx = e.clientX - d.startX
    if (Math.abs(dx) > 5) d.moved = true
    trackRef.current.scrollLeft = d.startScroll - dx
  }

  const endDrag = () => {
    drag.current.active = false
  }

  // A drag shouldn't count as a click that opens the page.
  const onPageClick = (i) => {
    if (drag.current.moved) {
      drag.current.moved = false
      return
    }
    onOpen(i)
  }

  const nav =
    'absolute top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 select-none items-center justify-center rounded-full bg-white text-black shadow-md hover:opacity-80 min-[750px]:flex'

  return (
    <div className="relative w-full">
      <div
        ref={trackRef}
        onScroll={updateEnds}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className="flex cursor-grab gap-4 overflow-x-auto select-none active:cursor-grabbing [scroll-behavior:auto] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {pages.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            onClick={() => onPageClick(i)}
            className="block shrink-0 basis-[90%] min-[750px]:basis-[30%]"
          >
            <div className="aspect-[8.5/11] w-full overflow-hidden rounded-lg bg-[#f4f4f4]">
              <img
                src={src}
                alt={`Page ${i + 1}`}
                loading="lazy"
                draggable="false"
                className="pointer-events-none block h-full w-full object-cover"
              />
            </div>
          </button>
        ))}
      </div>

      {!atStart && (
        <button
          type="button"
          aria-label="Scroll back"
          onPointerDown={startHold(-1)}
          onPointerUp={stopHold}
          onPointerLeave={stopHold}
          onPointerCancel={stopHold}
          onContextMenu={(e) => e.preventDefault()}
          className={`${nav} left-4`}
        >
          <ChevronLeft />
        </button>
      )}
      {!atEnd && (
        <button
          type="button"
          aria-label="Scroll forward"
          onPointerDown={startHold(1)}
          onPointerUp={stopHold}
          onPointerLeave={stopHold}
          onPointerCancel={stopHold}
          onContextMenu={(e) => e.preventDefault()}
          className={`${nav} right-4`}
        >
          <ChevronRight />
        </button>
      )}
    </div>
  )
}