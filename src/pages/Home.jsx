import Hero from '../components/Hero'
import LiveClock from '../components/LiveClock'
import Menus from '../components/Menus'

export default function Home() {
  return (
    <main id="MainContent">
      <Hero />
      <LiveClock />
      <Menus />
    </main>
  )
}