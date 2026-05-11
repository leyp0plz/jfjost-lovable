import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

const kitchenFeatures = [
  'Individuelle Planung',
  'Schweizer Markenpartnerschaften',
  'Termingerechte Umsetzung',
  'Fairer Fixpreis',
]

export default function Renovationen() {
  return (
    <>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Renovationen
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Bestand bewahren.<br />Schöner machen.
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed">
            Wir renovieren mit Respekt für das Bestehende — und dem Mut zur Erneuerung. Von einzelnen Bädern bis zur Gesamtsanierung.
          </p>
        </div>
      </section>

      {/* Küchen */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="bg-gray-100 rounded-sm h-80 flex items-center justify-center order-2 md:order-1">
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-2">🍳</div>
              <p className="text-sm">Küche nach der Renovation</p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Küchen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Küchen — Schöner kochen
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Eine neue Küche ist mehr als Schränke und Geräte. Wir planen gemeinsam mit regionalen Handwerkern und setzen auf Materialien und Licht, die das Kochen zum Erlebnis machen.
            </p>
            <ul className="mt-6 space-y-3">
              {kitchenFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bäder */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Bäder
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Bäder — Eine Dusche wie ein Sommerregen
              </h2>
              <p className="text-gray-600 mt-4 leading-relaxed">
                Grossformatige Platten, ebenerdige Duschen und warme Materialien verwandeln Ihr Bad in einen Wellnessraum — auch im bestehenden Grundriss.
              </p>
              <Link to="/kontakt" className="btn-primary mt-8 inline-flex">
                Renovation anfragen <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gray-200 rounded-sm h-80 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-6xl mb-2">🚿</div>
                <p className="text-sm">Bad nach der Renovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900">Unser Vorgehen</h2>
          <p className="text-gray-600 mt-3">Einfach, transparent, zuverlässig.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Beratung', desc: 'Persönliches Gespräch vor Ort.' },
            { step: '02', title: 'Planung', desc: 'Detaillierte Planung mit Fixpreisofferte.' },
            { step: '03', title: 'Umsetzung', desc: 'Termingerechte Ausführung durch regionale Handwerker.' },
            { step: '04', title: 'Übergabe', desc: 'Abnahme und Nachbetreuung inklusive.' },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-gray-900 font-bold">
                {item.step}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
