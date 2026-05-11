import { Link } from 'react-router-dom'
import { ArrowRight, Heart, Leaf, Users } from 'lucide-react'

const pillars = [
  {
    icon: Heart,
    title: 'Quartier',
    description:
      'Wir unterstützen lokale Vereine, Quartierfeste und Initiativen rund um Schlieren.',
  },
  {
    icon: Leaf,
    title: 'Nachhaltigkeit',
    description:
      'Sanfte Renovationen statt Abriss. Lokale Handwerker. Energie und Material mit Mass.',
  },
  {
    icon: Users,
    title: 'Gemeinschaft',
    description:
      'Wohnraum für Familien, Generationen und alle, die Schlieren ihr Zuhause nennen.',
  },
]

export default function Engagement() {
  return (
    <>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Engagement
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Mehr als Vermieten.
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed">
            Schlieren ist unser Zuhause — und unser Auftrag. Wir investieren nicht nur in Steine und Mörtel, sondern auch in das, was ein Quartier zur Heimat macht.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Schlieren ist unser Zuhause — und unser Auftrag
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Als verwurzelte Familienunternehmung tragen wir Verantwortung für das Quartier, die Umwelt und die Gemeinschaft — seit über hundert Jahren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="border border-gray-100 rounded-sm p-8 hover:border-primary transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                <pillar.icon className="w-7 h-7 text-primary-dark" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Wurzeln im Limmattal
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Seit 1923 sind wir Teil von Schlieren und dem Limmattal. Wir kennen die Strassen, die Vereine und die Menschen — und das ist kein Zufall.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Unsere Liegenschaften sind keine Investitionsobjekte auf dem Papier. Wir leben dort, wo sie stehen. Deshalb kümmern wir uns darum wie um unser eigenes Zuhause.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Nachhaltigkeit bedeutet für uns: sanft renovieren statt abreissen, lokale Handwerker beauftragen und Ressourcen mit Mass einsetzen.
              </p>
            </div>
            <div className="bg-primary/10 rounded-sm p-10 text-center">
              <p className="text-6xl font-bold text-primary-dark mb-2">100+</p>
              <p className="text-gray-700 font-semibold text-lg">Jahre im Limmattal</p>
              <p className="text-gray-500 text-sm mt-3">
                Vier Generationen. Eine Familie. Ein Versprechen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Gemeinsam gestalten.
          </h2>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto">
            Haben Sie eine Initiative oder ein Projekt, das zu uns passt? Wir freuen uns auf Ihre Nachricht.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 bg-gray-900 text-white font-semibold px-6 py-3 rounded-sm hover:bg-gray-800 transition-colors"
          >
            Kontakt aufnehmen <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
