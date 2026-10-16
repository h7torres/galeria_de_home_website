import { Link } from 'react-router-dom'
import { menu } from '../data/site'

export default function Menus() {
  return (
    <nav aria-label="Main" className="flex flex-col items-center gap-8 px-4 pb-16 pt-6 md:gap-10">
      {menu.map((item) => (
        <Link
          key={item.label}
          to={item.to}
          className="font-label text-[20.7px] text-black no-underline transition-colors duration-200 hover:text-hover md:text-[23px]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}