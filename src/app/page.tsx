import KUOSC from './kuosc'
import CommunitiesActive from './communities-active'
import Activities from './activities-ku'
import CounterUp from './counter-up'
import PresidentSection from './president-section'
import KuccDescription from './kucc-description'

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
