import PageHeader from '../components/PageHeader.jsx'
import { Section, Button } from '../components/ui.jsx'
import { ROUTES } from '../config/site.js'

export default function NotFound() {
  return (
    <>
      <PageHeader
        title="Page not found"
        lead="The page you’re looking for doesn’t exist or may have moved."
      />
      <Section className="pt-2 md:pt-4">
        <div className="flex flex-wrap items-center gap-3">
          <Button to={ROUTES.home}>Back to home</Button>
          <Button to={ROUTES.documentation} variant="outline">
            Read the docs
          </Button>
        </div>
      </Section>
    </>
  )
}
