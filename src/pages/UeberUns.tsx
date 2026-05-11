import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const timeline = [
  {
    year: '1923',
    title: 'Gründung',
    description: 'Johann F. Jost gründet das Bauunternehmen in Schlieren.',
  },
  {
    year: '1958',
    title: 'Wachstum',
    description: 'Erweiterung um die Liegenschaftsverwaltung im Limmattal.',
  },
  {
    year: '1992',
    title: 'Lilie',
    description: 'Eröffnung des Shoppingpoint Lilie mit 25 Geschäften.',
  },
  {
    year: '2010',
    title: 'Bäch',
    description: 'Reiheneinfamilienhäuser direkt am Zürichsee.',
  },
  {
    year: 'Heute',
    title: 'Vierte Generation',
    description: 'Persönlich geführt, langfristig gedacht.',
  },
]

const values = [
  {
    title: 'Persönlich',
    description: 'Direkter Draht zur Eigentümerfamilie. Keine Hotline, keine Tickets.',
  },
  {
    title: 'Verwurzelt',
    description: 'Wir leben und arbeiten dort, wo unsere Liegenschaften stehen.',
  },
  {
    title: 'Langfristig',
    description: 'Wir denken in Jahrzehnten. Unterhalt vor Verkauf.',
  },
]

export default function UeberUns() {
  return (
    <>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Über uns
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Vier Generationen.<br />Ein Versprechen.
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed">
            Wir sind eine Schweizer Familienunternehmung mit Wurzeln in Schlieren — seit über hundert Jahren.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Unsere Geschichte</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              1923 gründete Johann F. Jost das Bauunternehmen in Schlieren. Was als kleiner Handwerksbetrieb begann, entwickelte sich zur einer der ältesten privaten Liegenschaftsverwaltungen im Limmattal.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Über vier Generationen hinweg haben wir Liegenschaften nicht nur verwaltet, sondern geprägt. Der Shoppingpoint Lilie, die Seeliegenschaften in Bäch und unsere Wohnsiedlungen im ganzen Limmattal stehen für dieses Erbe.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Heute führt die vierte Generation das Unternehmen — mit denselben Werten: Persönlichkeit, Bodenständigkeit und der Überzeugung, dass gute Liegenschaften Generationen überdauern.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/30" />
            <div className="space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left-10 top-1 w-4 h-4 bg-primary rounded-full border-2 border-white shadow" />
                  <p className="text-primary font-bold text-sm">{item.year}</p>
                  <h3 className="text-gray-900 font-semibold mt-0.5">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-primary py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Unsere Werte</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white/80 backdrop-blur rounded-sm p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Werden Sie Teil unserer Geschichte.
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Ob als Mieter, Gewerbetreibender oder Geschäftspartner — wir freuen uns auf den persönlichen Kontakt.
        </p>
        <Link to="/kontakt" className="btn-primary inline-flex">
          Kontakt aufnehmen <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  )
}
