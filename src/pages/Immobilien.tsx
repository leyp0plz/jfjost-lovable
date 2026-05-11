import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'

const properties = [
  {
    title: 'Shoppingpoint Lilie',
    location: 'Schlieren',
    category: 'Gewerbe',
    description: '25 Geschäfte unter einem Dach — der lebendige Treffpunkt mitten in Schlieren. Vielseitige Gewerbeflächen im Herzen der Stadt.',
    color: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    title: 'Reihenhäuser am See',
    location: 'Bäch',
    category: 'Eigentum',
    description: 'Exklusive Reihen-Einfamilienhäuser in bester Seelage direkt am Zürichsee. Einzigartiges Wohnen mit Seeblick.',
    color: 'bg-blue-50',
    border: 'border-blue-100',
  },
  {
    title: 'Sonnige Wohnungen',
    location: 'Dietikon',
    category: 'Mietwohnung',
    description: 'Grosszügige, helle Wohnungen mit grossen Balkonen. Ideal für Paare und kleine Familien.',
    color: 'bg-yellow-50',
    border: 'border-yellow-100',
  },
  {
    title: 'Familienwohnungen',
    location: 'Adlikon b. Regensdorf',
    category: 'Mietwohnung',
    description: 'Familienfreundlich und ruhig gelegen, mit Garten und Spielplatz. Viel Platz für die ganze Familie.',
    color: 'bg-green-50',
    border: 'border-green-100',
  },
  {
    title: 'Renovierte Wohnungen',
    location: 'Schlieren',
    category: 'Mietwohnung',
    description: 'Idyllisch gelegene, frisch renovierte Wohnungen mit Charakter. Moderner Komfort in historischem Ambiente.',
    color: 'bg-rose-50',
    border: 'border-rose-100',
  },
]

const categories = ['Alle', 'Mietwohnung', 'Eigentum', 'Gewerbe']

export default function Immobilien() {
  return (
    <>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Liegenschaften
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Liegenschaften mit Charakter
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed">
            Bauen, vermieten und pflegen wir Liegenschaften im Limmattal — mit handwerklicher Sorgfalt und Schweizer Präzision.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 text-sm font-medium border border-gray-200 rounded-full hover:bg-primary hover:border-primary transition-colors duration-200"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {properties.map((prop) => (
            <div
              key={prop.title}
              className={`${prop.color} ${prop.border} border rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="bg-gray-200 h-52 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-gray-400" />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-semibold bg-primary/20 text-gray-700 px-2 py-0.5 rounded-full mb-3">
                  {prop.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900">{prop.title}</h2>
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1 mb-3">
                  <MapPin className="w-3.5 h-3.5" /> {prop.location}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">{prop.description}</p>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-primary mt-4 transition-colors"
                >
                  Anfrage stellen <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Suchen Sie etwas Bestimmtes?
          </h2>
          <p className="text-gray-700 mb-8">
            Kontaktieren Sie uns direkt — wir beraten Sie persönlich.
          </p>
          <Link to="/kontakt" className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-sm hover:bg-gray-800 transition-colors">
            Kontakt aufnehmen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
