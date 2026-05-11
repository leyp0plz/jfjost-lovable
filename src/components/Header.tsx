import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { to: '/immobilien', label: 'Immobilien' },
  { to: '/renovationen', label: 'Renovationen' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/engagement', label: 'Engagement' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-gray-900 border-b-2 border-primary pb-0.5' : 'text-gray-600 hover:text-gray-900'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <Link to="/kontakt" className="btn-primary text-sm">
              Termin vereinbaren <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü öffnen"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2 text-sm font-medium ${isActive ? 'text-gray-900' : 'text-gray-600'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/kontakt"
            onClick={() => setMenuOpen(false)}
            className="btn-primary text-sm inline-flex mt-2"
          >
            Termin vereinbaren <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  )
}

function Logo() {
  return (
    <svg width="120" height="36" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" fill="#F5C518" />
      <text x="6" y="24" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#1a1a1a">JF</text>
      <text x="44" y="16" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#1a1a1a">J.F. JOST</text>
      <text x="44" y="28" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="400" fill="#666">&amp; Co.</text>
    </svg>
  )
}
