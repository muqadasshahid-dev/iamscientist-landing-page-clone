import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Sections from './components/Sections/Sections'
import Footer from './components/Footer/Footer'
import { MessageCircle } from 'lucide-react'

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#22003d] text-white">
      <Navbar />
      <Hero />
      <Sections />
      <Footer />
      <a
        href="https://wa.me/923310001900"
        aria-label="WhatsApp"
        className="fixed bottom-8 right-7 z-50 grid h-[84px] w-[84px] place-items-center rounded-full bg-[#18cf54] text-white shadow-[0_8px_22px_rgba(0,0,0,.25)] ring-[16px] ring-white/10 transition duration-300 hover:scale-105 max-md:h-16 max-md:w-16 max-md:ring-8"
      >
        <MessageCircle size={44} strokeWidth={3} />
      </a>
    </main>
  )
}

export default App
