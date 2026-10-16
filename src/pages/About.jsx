import { about } from '../data/site'

export default function About() {
  const [first, ...rest] = about.paragraphs

  return (
    <article className="mx-auto max-w-[290px] space-y-4 pt-16 text-[13px] leading-snug text-black">
      <div>
        <p>{about.greeting}</p>
        <p>{first}</p>
      </div>
      {rest.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <p>{about.thanks}</p>
      <p>{about.closing}</p>
      <p>{about.author}</p>
      <p>{about.date}</p>
    </article>
  )
}