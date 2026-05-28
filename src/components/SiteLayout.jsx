import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

// Layout for all content pages (everything except the video-hero homepage):
// solid navbar on the light background, page content, shared footer.
export default function SiteLayout() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] flex flex-col">
      <Navbar variant="solid" />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
