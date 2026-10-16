import { useEffect, useState } from 'react'
import { tagline } from '../data/site'

// Matches the Shopify block: 12-hour time with seconds, numeric date.
function formatTime(d) {
  const h = d.getHours() % 12 || 12
  const pad = (n) => String(n).padStart(2, '0')
  return `${h}:${pad(d.getMinutes())}:${pad(d.getSeconds())} ${d.getHours() >= 12 ? 'PM' : 'AM'}`
}

function formatDate(d) {
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
}

export default function LiveClock() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="flex flex-col items-center p-5 text-center text-black">
      <p className="font-label text-sm">{tagline}</p>
      <div className="font-mono text-base font-bold tabular-nums">{formatTime(now)}</div>
      <div className="font-mono text-[10px] font-bold">{formatDate(now)}</div>
    </section>
  )
}