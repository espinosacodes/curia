import Hero from './components/Hero.jsx'
import Metrics from './components/Metrics.jsx'
import Features from './components/Features.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <Hero />
      <Metrics />
      <Features />
      <CTA />
      <Footer />
    </main>
  )
}
