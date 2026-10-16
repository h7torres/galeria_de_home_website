import { useEffect, useRef } from 'react'
import { videos } from '../data/site'
import PageTitle from '../components/PageTitle'

// Plays a video only while it's on screen, so ten videos don't all download at once.
function AutoVideo({ src, poster }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => {})
        else el.pause()
      },
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      controls
      preload="none"
      className="h-full w-full bg-black object-cover"
    />
  )
}

function VideoItem({ video }) {
  return (
    <article className="flex flex-col gap-4">
      <div className="w-full overflow-hidden bg-neutral-100" style={{ aspectRatio: video.ratio }}>
        {video.youtube ? (
          <iframe
            src={video.youtube}
            title={video.title || 'Video'}
            className="h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <AutoVideo src={video.src} poster={video.poster} />
        )}
      </div>
    {(video.title || video.date) && (
        <div className="w-fit max-w-prose text-ink">
          <p>{video.title}</p>
          {video.date && <p>{video.date}</p>}
        </div>
      )}
    </article>
  )
}

export default function Videos() {
  return (
    <>
      <PageTitle>VIDEOS</PageTitle>
      <div className="flex flex-col gap-12 md:gap-16">
        {videos.map((v, i) => (
          <VideoItem key={v.src || v.youtube || i} video={v} />
        ))}
      </div>
    </>
  )
}