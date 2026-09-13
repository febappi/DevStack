import { useState } from 'react'
import logo from '../assets/logo-text.png'
import hamburgerIcon from '../assets/hamburger.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = (
    <>
      <li>
        <a className="cursor-pointer font-semibold text-[#db2777]">Home</a>
      </li>
      <li>
        <a className="cursor-pointer transition-colors hover:text-[#db2777]">Technologies</a>
      </li>
      <li>
        <a className="cursor-pointer transition-colors hover:text-[#db2777]">Projects</a>
      </li>
      <li>
        <a className="cursor-pointer transition-colors hover:text-[#db2777]">About</a>
      </li>
      <li>
        <a className="cursor-pointer transition-colors hover:text-[#db2777]">Contact</a>
      </li>
    </>
  )

  let mobileMenu = null

  if (menuOpen) {
    mobileMenu = (
      <ul
        onClick={() => setMenuOpen(false)}
        className="menu absolute top-full left-0 z-50 mt-2 w-44 rounded-box bg-white p-2 text-sm font-medium text-slate-600 shadow-lg lg:hidden"
      >
        {links}
      </ul>
    )
  }

  return (
    <header className="sticky top-0 z-50 -mx-4 border-b border-slate-100 bg-white px-4 lg:mx-0 lg:px-0">
      <nav className="relative grid h-10 grid-cols-[1fr_auto_1fr] items-center md:h-16 lg:flex lg:h-20 lg:justify-between">
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="cursor-pointer justify-self-start p-1 lg:hidden"
        >
          <img src={hamburgerIcon} alt="" className="h-4 w-5" />
        </button>

        <img src={logo} alt="Dev Stack" className="h-6 justify-self-center md:h-8 lg:h-9" />
        <ul className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">{links}</ul>

        <div className="flex items-center gap-2 justify-self-end pr-3 md:gap-1 md:pr-0">
          <button
            type="button"
            className="btn btn-ghost h-6 rounded-full px-2 font-inter text-[9px] font-bold text-gray-600 hover:text-slate-900 md:h-10 md:px-4 md:font-sans md:text-sm md:font-medium md:text-slate-700"
          >
            Sign In
          </button>
          <button
            type="button"
            className="btn h-5 rounded-full border-0 bg-[#d91b7e] px-2.5 text-[9px] font-semibold text-white shadow-xs shadow-pink-200 hover:bg-[#c2166f] md:h-10 md:px-5 md:text-sm"
          >
            Sign Up
          </button>
        </div>

        {mobileMenu}
      </nav>
    </header>
  )
}

export default Navbar
