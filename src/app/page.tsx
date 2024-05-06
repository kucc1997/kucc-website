import KuccDescription from './KuccDescription'
import KUOSC from './Kuosc'
import CommunitiesActive from './CommunitiesActive'
import Activities from './Activities'
import CounterUp from './CounterUp'
import PresidentSection from './PresidentSection'
// import Articles from './articles'

export default function HomePage() {
  return (
    <>
      {/* <Slider /> */}
      <KuccDescription />
      <KUOSC />
      <CommunitiesActive />
      <Activities />
      <CounterUp />
      <PresidentSection />
      {/* <Articles /> */}
    </>
  )
}
