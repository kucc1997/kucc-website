import KUOSC from './kuosc'
// import Activities from './activities-ku'
import PresidentSection from './president-section'
import KuccDescription from './kucc-description'
import Communities from './Communities'
import Programs from './Programs'
import PeopleGrid from '@/components/PeopleGrid'



export default function HomePage() {
  return (
    <>
      <KuccDescription />
      <PeopleGrid />
      <section id="programs">
        <Programs />
      </section>

      <section id="communities">
        <Communities />
      </section>
      <section id="president" className="scroll-mt-20">
        <PresidentSection />
      </section>
    </>
  )
}