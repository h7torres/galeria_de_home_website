import { Link } from 'react-router-dom'
import { hero } from '../data/site'

export default function Hero() {
  return (
    <section className="flex justify-center px-4 pt-6">
      <Link to="/">
        <img
          src={hero.image}
          alt={hero.alt}
          width="3840"
          height="2170"
          className="block h-[79px] w-auto"
          fetchPriority="high"
        />
      </Link>
    </section>
  )
}