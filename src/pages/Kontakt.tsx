import { useState } from 'react'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const inquiryTypes = [
  'Wohnungssuche',
  'Renovation',
  'Gewerbefläche',
  'Sonstiges',
]

export default function Kontakt() {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    anliegen: '',
    nachricht: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Kontakt
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Sprechen wir miteinander.
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Persönlich, direkt, in Schlieren. Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Unsere Kontaktdaten</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary-dark" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Adresse</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Steinwiesenstrasse 3<br />
                    8952 Schlieren<br />
                    Schweiz
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary-dark" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Telefon</p>
                  <a
                    href="tel:+41447555353"
                    className="text-gray-600 text-sm mt-1 hover:text-primary transition-colors"
                  >
                    044 755 53 53
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary-dark" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">E-Mail</p>
                  <a
                    href="mailto:info@jfjost.ch"
                    className="text-gray-600 text-sm mt-1 hover:text-primary transition-colors"
                  >
                    info@jfjost.ch
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary-dark" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Öffnungszeiten</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Montag – Freitag<br />
                    08:00–12:00 und 13:30–17:00<br />
                    <span className="text-gray-400">Samstag / Sonntag: geschlossen</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-gray-100 rounded-sm h-48 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <MapPin className="w-8 h-8 mx-auto mb-2 opacity-40" />
                <p className="text-sm">Schlieren · Limmattal</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Nachricht senden</h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
                <p className="text-green-700 font-semibold text-lg mb-2">Vielen Dank!</p>
                <p className="text-green-600 text-sm">
                  Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Vorname
                    </label>
                    <input
                      type="text"
                      name="vorname"
                      value={formData.vorname}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nachname
                    </label>
                    <input
                      type="text"
                      name="nachname"
                      value={formData.nachname}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Anliegen</label>
                  <select
                    name="anliegen"
                    value={formData.anliegen}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                  >
                    <option value="">Bitte wählen…</option>
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nachricht</label>
                  <textarea
                    name="nachricht"
                    value={formData.nachricht}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full border border-gray-200 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Nachricht senden
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
