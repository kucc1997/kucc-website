import PageHero from '@/components/PageHero'
import ProjectBoard from './components/ProjectBoard'
import { getProjects } from '@/lib/kuosc'

export const metadata = { title: 'Projects | KUCC' }
export const revalidate = 60

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <>
      <section id="board" className="section border-t border-line">
        <div className="wrap">
          <ProjectBoard initial={projects} />
        </div>
      </section>
    </>
  )
}