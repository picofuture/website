import { Button } from '@/components/Button'
import { PageHeader } from '@/components/PageHeader'

export default function NotFound() {
  return (
    <PageHeader
      title="This sheet isn’t in the set."
      intro="The page you’re looking for doesn’t exist, or it moved. The articles are the best place to pick the thread back up."
    >
      <div className="rise mt-8 flex gap-3" style={{ '--delay': '160ms' }}>
        <Button variant="primary" href="/articles">
          Browse articles
        </Button>
        <Button href="/">Home</Button>
      </div>
    </PageHeader>
  )
}
