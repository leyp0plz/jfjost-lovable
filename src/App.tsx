import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './pages/Index'
import Immobilien from './pages/Immobilien'
import Renovationen from './pages/Renovationen'
import UeberUns from './pages/UeberUns'
import Engagement from './pages/Engagement'
import Kontakt from './pages/Kontakt'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/immobilien" element={<Immobilien />} />
            <Route path="/renovationen" element={<Renovationen />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/engagement" element={<Engagement />} />
            <Route path="/kontakt" element={<Kontakt />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
