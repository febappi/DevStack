import logo from '../assets/logo-text.png'

function Footer() {
  return (
    <footer className="-mx-4 border-t border-slate-100 px-6 pt-8 pb-12 font-inter md:px-4 md:pt-12 md:font-sans lg:mx-0 lg:px-0 lg:pt-16">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-5">
        <div className="text-center md:col-span-3 md:text-left lg:col-span-2 lg:pr-4">
          <img src={logo} alt="Dev Stack" className="mx-auto h-8 md:mx-0" />
          <p className="mx-auto mt-3 max-w-sm text-xs leading-relaxed text-slate-500 md:mx-0 md:mt-2">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-xs font-normal text-slate-600 md:mt-6 md:justify-start md:font-semibold">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#db2777]">
              GitHub
            </a>
            <span className="md:hidden">•</span>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#db2777]">
              Twitter
            </a>
            <span className="md:hidden">•</span>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#db2777]">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">Product</h4>
          <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
            <li>
              <a className="cursor-pointer hover:text-[#db2777]">Home</a>
            </li>
            <li>
              <a className="cursor-pointer hover:text-[#db2777]">Technologies</a>
            </li>
            <li>
              <a className="cursor-pointer hover:text-[#db2777]">Projects</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">Company</h4>
          <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
            <li>
              <a className="cursor-pointer hover:text-[#db2777]">About</a>
            </li>
            <li>
              <a className="cursor-pointer hover:text-[#db2777]">Contact</a>
            </li>
            <li>
              <a className="cursor-pointer hover:text-[#db2777]">Careers</a>
            </li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">Legal</h4>
          <ul className="mt-4 space-y-2.5 text-xs text-slate-500">
            <li>
              <a className="cursor-pointer hover:text-[#db2777]">Privacy Policy</a>
            </li>
            <li>
              <a className="cursor-pointer hover:text-[#db2777]">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-[11px] text-slate-400 md:mt-14 md:pt-8 md:text-xs">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-2 md:gap-6">
          <a className="cursor-pointer hover:text-slate-600">Privacy</a>
          <a className="cursor-pointer hover:text-slate-600">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
