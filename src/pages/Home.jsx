import Hero from '../components/Hero.jsx'
import Metrics from '../components/Metrics.jsx'
import Features from '../components/Features.jsx'
import CTA from '../components/CTA.jsx'
import Footer from '../components/Footer.jsx'

// The homepage keeps its video-hero layout, so it renders the overlay navbar
// (inside Hero) and the footer directly rather than using SiteLayout.
export default function Home() {
  return (
    <div className="min-h-screen bg-[#f0f0f0]">
      <Hero />
      <Metrics />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}
