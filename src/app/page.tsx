import KUOSC from './kuosc/page'
import CommunitiesActive from './communities-active/page'
import Activities from './activities-ku/page'
import CounterUp from './counter-up/page'
import PresidentSection from './president-section/page'
import KuccDescription from './kucc-description/page'

export default function HomePage() {
  return (
    <>
      <KuccDescription />
      <KUOSC />
      <CommunitiesActive />
      <Activities />
      <CounterUp />
      <PresidentSection />
    </>
  )
}
