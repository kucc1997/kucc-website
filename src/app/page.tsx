import KUOSC from './kuosc'
import CommunitiesActive from './communities-active'
import Activities from './activities-ku'
import CounterUp from './counter-up'
import PresidentSection from './president-section'
import KuccDescription from './kucc-description'
import ConferencePopover from './conf-popover'

export default function HomePage() {
  return (
    <>
      <KuccDescription />
      <KUOSC />
      <CommunitiesActive />
      <Activities />
      <CounterUp />
      <PresidentSection />
      <ConferencePopover />
    </>
  )
}
