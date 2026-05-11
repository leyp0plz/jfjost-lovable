import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { to: '/immobilien', label: 'Immobilien' },
  { to: '/renovationen', label: 'Renovationen' },
  { to: '/ueber-uns', label: 'Über uns' },
  { to: '/engagement', label: 'Engagement' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <FooterLogo />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Seit Generationen bauen, vermieten und pflegen wir Liegenschaften im Limmattal — mit handwerklicher Sorgfalt und Schweizer Präzision.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Steinwiesenstrasse 3<br />8952 Schlieren</span>
              </li>
              <li>
                <a
                  href="tel:+41447555353"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  044 755 53 53
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jfjost.ch"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  info@jfjost.ch
                </a>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-500">Schlieren · Limmattal · Zürich</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} J.F. Jost & Co. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterLogo() {
  return (
    <svg width="100" height="30" viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" fill="#F5C518" />
      <text x="6" y="24" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#1a1a1a">JF</text>
      <text x="44" y="16" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="white">J.F. JOST</text>
      <text x="44" y="28" fontFamily="Inter, sans-serif" fontSize="8" fontWeight="400" fill="#9ca3af">&amp; Co.</text>
    </svg>
  )
}
