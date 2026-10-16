import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { accountHref, cartHref, hero, searchHref } from '../data/site'

const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const SearchIcon = () => (
  <svg {...iconProps}>
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-4-4" />
  </svg>
)

const AccountIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
  </svg>
)

const BagIcon = () => (
  <svg {...iconProps}>
    <path d="M5 8h14l-1 13H6L5 8z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
)

// Header used on every page except the homepage: search | logo | account + cart.
export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen">
      <header className="grid grid-cols-[1fr_auto_1fr] items-center px-5 py-2 text-black">
        <a href={searchHref} aria-label="Search" className="justify-self-start p-1 hover:opacity-60">
          <SearchIcon />
        </a>
        <Link to="/" aria-label="Galeria De HOMÈ home">
          <img src={hero.image} alt={hero.alt} className="block h-[70px] w-auto" />
        </Link>
        <div className="flex items-center gap-4 justify-self-end">
          <a href={accountHref} aria-label="Account" className="p-1 hover:opacity-60">
            <AccountIcon />
          </a>
          <a href={cartHref} aria-label="Cart" className="p-1 hover:opacity-60">
            <BagIcon />
          </a>
        </div>
      </header>
      <main id="MainContent" className="w-full px-5 pb-16">
        <Outlet />
      </main>
    </div>
  )
}