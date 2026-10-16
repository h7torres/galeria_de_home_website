import { useState } from 'react'
import Lightbox from '../components/Lightbox'
import PageCarousel from '../components/PageCarousel'
import { magazine } from '../data/site'

export default function Magazine() {
  // Which issue and page is open in the viewer, or null when closed.
  const [open, setOpen] = useState(null)
  const [current, ...older] = magazine.issues

  return (
    <div className="pb-[400px]">
      <div className="h-28" />
      <PageCarousel pages={current} onOpen={(page) => setOpen({ issue: 0, page })} />

      <div className="mt-12 w-fit text-black">
        {magazine.intro.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      {older.map((pages, n) => (
        <div key={n}>
          <div className="h-[164px]" />
          <PageCarousel pages={pages} onOpen={(page) => setOpen({ issue: n + 1, page })} />
        </div>
      ))}

      {open && (
        <Lightbox images={magazine.issues[open.issue]} start={open.page} onClose={() => setOpen(null)} />
      )}
    </div>
  )
}