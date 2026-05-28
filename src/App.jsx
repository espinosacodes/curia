import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import SiteLayout from './components/SiteLayout.jsx'
import { ROUTES } from './config/site.js'

import Home from './pages/Home.jsx'
import Platform from './pages/Platform.jsx'
import Access from './pages/Access.jsx'
import Developers from './pages/Developers.jsx'
import Governance from './pages/Governance.jsx'
import Security from './pages/Security.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Blog from './pages/Blog.jsx'
import BlogPost from './pages/BlogPost.jsx'
import NotFound from './pages/NotFound.jsx'

import VirtualOffice from './pages/product/VirtualOffice.jsx'
import RoleBasedAgents from './pages/product/RoleBasedAgents.jsx'
import AccessControl from './pages/product/AccessControl.jsx'
import SelfHosting from './pages/product/SelfHosting.jsx'

import Documentation from './pages/developers/Documentation.jsx'
import ApiReference from './pages/developers/ApiReference.jsx'
import Deployment from './pages/developers/Deployment.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />

        {/* All content pages share the solid-navbar + footer layout */}
        <Route element={<SiteLayout />}>
          <Route path={ROUTES.platform} element={<Platform />} />
          <Route path={ROUTES.access} element={<Access />} />
          <Route path={ROUTES.developers} element={<Developers />} />
          <Route path={ROUTES.governance} element={<Governance />} />
          <Route path={ROUTES.security} element={<Security />} />
          <Route path={ROUTES.privacy} element={<Privacy />} />
          <Route path={ROUTES.terms} element={<Terms />} />
          <Route path={ROUTES.blog} element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />

          <Route path={ROUTES.virtualOffice} element={<VirtualOffice />} />
          <Route path={ROUTES.roleBasedAgents} element={<RoleBasedAgents />} />
          <Route path={ROUTES.accessControl} element={<AccessControl />} />
          <Route path={ROUTES.selfHosting} element={<SelfHosting />} />

          <Route path={ROUTES.documentation} element={<Documentation />} />
          <Route path={ROUTES.apiReference} element={<ApiReference />} />
          <Route path={ROUTES.deployment} element={<Deployment />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
