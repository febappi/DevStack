import logo from '../assets/logo-text.png'

function Footer() {
  return (
    <footer className="border-t border-slate-100 pt-16 pb-12">
      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-2 pr-4">
          <img src={logo} alt="Dev Stack" className="h-8" />
          <p className="mt-2 max-w-sm text-xs leading-relaxed text-slate-500">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-6 flex gap-4 text-xs font-semibold text-slate-600">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#db2777]">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#db2777]">
              Twitter
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#db2777]">
              LinkedIn
            </a>
          </div>
        </div>

        <div>
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

        <div>
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

        <div>
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

      <div className="mt-14 flex items-center justify-between border-t border-slate-100 pt-8 text-xs text-slate-400">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="cursor-pointer hover:text-slate-600">Privacy</a>
          <a className="cursor-pointer hover:text-slate-600">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
