import { useState } from 'react'
import Lightbox from '../components/Lightbox'
import PageCarousel from '../components/PageCarousel'
import { magazine } from '../data/site'

// Title and date shown under each issue, styled like the video captions.
function IssueCaption({ issue }) {
  if (!issue.title && !issue.date) return null
  return (
    <div className="mt-4 w-fit text-black">
      {issue.title && <p>{issue.title}</p>}
      {issue.date && <p>{issue.date}</p>}
    </div>
  )
}

export default function Magazine() {
  // Which issue and page is open in the viewer, or null when closed.
  const [open, setOpen] = useState(null)
  const [current, ...older] = magazine.issues

  return (
    <div className="pb-[400px]">
      <div className="h-28" />
      <PageCarousel pages={current.pages} onOpen={(page) => setOpen({ issue: 0, page })} />
      <IssueCaption issue={current} />

      <div className="mt-12 w-fit text-black">
        {magazine.intro.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      {older.map((issue, n) => (
        <div key={issue.title || n}>
          <div className="h-[164px]" />
          <PageCarousel pages={issue.pages} onOpen={(page) => setOpen({ issue: n + 1, page })} />
          <IssueCaption issue={issue} />
        </div>
      ))}

      {open && (
        <Lightbox images={magazine.issues[open.issue].pages} start={open.page} onClose={() => setOpen(null)} />
      )}
    </div>
  )
}