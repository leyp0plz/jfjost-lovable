import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Wrench, ClipboardList } from 'lucide-react'

const stats = [
  { value: '100+', label: 'Jahre Erfahrung' },
  { value: '25', label: 'Geschäfte (Lilie)' },
  { value: '7', label: 'Standorte' },
  { value: '1923', label: 'Gegründet' },
]

const properties = [
  {
    title: 'Shoppingpoint Lilie',
    location: 'Schlieren',
    category: 'Gewerbe',
    description: '25 Geschäfte unter einem Dach — der lebendige Treffpunkt mitten in Schlieren.',
    color: 'bg-amber-50',
  },
  {
    title: 'Reihenhäuser am See',
    location: 'Bäch',
    category: 'Eigentum',
    description: 'Exklusive Reihen-Einfamilienhäuser in bester Seelage am Zürichsee.',
    color: 'bg-blue-50',
  },
  {
    title: 'Sonnige Wohnungen',
    location: 'Dietikon',
    category: 'Mietwohnung',
    description: 'Grosszügige, helle Wohnungen mit grossen Balkonen.',
    color: 'bg-yellow-50',
  },
  {
    title: 'Familienwohnungen',
    location: 'Adlikon b. Regensdorf',
    category: 'Mietwohnung',
    description: 'Familienfreundlich, ruhig gelegen, mit Garten und Spielplatz.',
    color: 'bg-green-50',
  },
  {
    title: 'Renovierte Wohnungen',
    location: 'Schlieren',
    category: 'Mietwohnung',
    description: 'Idyllisch gelegene, frisch renovierte Wohnungen mit Charakter.',
    color: 'bg-rose-50',
  },
  {
    title: 'Küchen & Bäder',
    location: 'Renovation',
    category: 'Service',
    description: 'Individuelle Renovationen mit regionalen Handwerkern und fairen Fixpreisen.',
    color: 'bg-gray-50',
  },
]

const services = [
  {
    icon: Building2,
    title: 'Vermietung',
    description: 'Persönliche Beratung und transparente Abläufe — direkt mit der Eigentümerfamilie.',
  },
  {
    icon: Wrench,
    title: 'Renovation',
    description: 'Küchen, Bäder und Fassaden — mit regionalen Handwerkern und Schweizer Qualität.',
  },
  {
    icon: ClipboardList,
    title: 'Bewirtschaftung',
    description: 'Unterhalt, Reinigung und Mieterbetreuung — zuverlässig und persönlich.',
  },
]

export default function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-44">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            Seit 1923 · Limmattal
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
            Liegenschaften<br />mit Charakter.
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed">
            Räume, in denen man leben will. Seit über hundert Jahren bauen, vermieten und pflegen wir Liegenschaften im Limmattal.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/immobilien" className="btn-primary">
              Unsere Liegenschaften <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/kontakt"
              className="inline-flex items-center gap-2 border border-gray-600 text-white font-semibold px-6 py-3 rounded-sm hover:border-gray-400 transition-colors duration-200"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm font-medium text-gray-700 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Über uns
            </p>
            <h2 className="section-heading">
              Vier Generationen.<br />Ein Versprechen.
            </h2>
            <p className="section-subheading">
              1923 gründete Johann F. Jost das Bauunternehmen in Schlieren. Was als kleiner Betrieb begann, ist heute eine der ältesten privaten Liegenschaftsverwaltungen im Limmattal.
            </p>
            <Link to="/ueber-uns" className="btn-primary mt-8 inline-flex">
              Unsere Geschichte <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-gray-100 rounded-sm h-80 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <Building2 className="w-16 h-16 mx-auto mb-3 opacity-30" />
              <p className="text-sm">Seit 1923 in Schlieren</p>
            </div>
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Liegenschaften
            </p>
            <h2 className="section-heading">Unsere Objekte</h2>
            <p className="section-subheading max-w-xl mx-auto">
              Von Gewerbeflächen bis Seeliegenschaften — wir verwalten Objekte mit Geschichte und Zukunft.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((prop) => (
              <div
                key={prop.title}
                className={`${prop.color} rounded-sm p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300`}
              >
                <span className="inline-block text-xs font-semibold bg-primary/20 text-gray-700 px-2 py-0.5 rounded-full mb-3">
                  {prop.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900">{prop.title}</h3>
                <p className="text-sm text-gray-500 mt-0.5 mb-2">{prop.location}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/immobilien" className="btn-primary inline-flex">
              Alle Liegenschaften <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Leistungen
          </p>
          <h2 className="section-heading">Was wir tun</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="text-center p-8 border border-gray-100 rounded-sm hover:border-primary transition-colors duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                <service.icon className="w-7 h-7 text-primary-dark" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sprechen wir miteinander.
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Persönlich, direkt, in Schlieren. Wir freuen uns auf Ihre Nachricht.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/kontakt" className="btn-primary">
              Termin vereinbaren <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+41447555353"
              className="inline-flex items-center justify-center gap-2 border border-gray-600 text-white font-semibold px-6 py-3 rounded-sm hover:border-gray-400 transition-colors"
            >
              044 755 53 53
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
