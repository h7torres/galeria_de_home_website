import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Videos from './pages/Videos'
import Magazine from './pages/Magazine'
import Shop from './pages/Shop'
import About from './pages/About'
import Galleria from './pages/Galleria'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/videos" element={<Videos />} />
        <Route path="/magazine" element={<Magazine />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/galleria" element={<Galleria />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<p className="py-20 text-center font-label">PAGE NOT FOUND</p>} />
      </Route>
    </Routes>
  )
}