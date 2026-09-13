import logo from '../assets/logo-text.png'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <nav className="flex h-20 items-center justify-between">
        
        <img src={logo} alt="Dev Stack" className="h-9" />

        <ul className="flex items-center gap-7 text-sm font-medium text-slate-600">
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
        </ul>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="btn btn-ghost rounded-full px-4 text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Sign In
          </button>
          <button
            type="button"
            className="btn rounded-full border-0 bg-[#d91b7e] px-5 text-sm font-semibold text-white shadow-xs shadow-pink-200 hover:bg-[#c2166f]"
          >
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
