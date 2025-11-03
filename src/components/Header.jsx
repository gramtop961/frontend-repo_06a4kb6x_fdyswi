import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#projects', label: 'Projects' },
    { href: '#add', label: 'Add Project' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur bg-black/30 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-full bg-gradient-to-tr from-red-600 to-rose-400 shadow-inner shadow-red-900/40" />
            <span className="font-semibold tracking-wider text-white uppercase">Edo Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            aria-label="Toggle Menu"
            className="md:hidden text-white"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-white/90">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
