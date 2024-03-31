import React from 'react'
import Slider from '../../components/Slider/Slider'
import KuccDescription from './KuccDescription'
import CommunitiesActive from './CommunitiesActive'
import Activities from './Activities'
import PresidentSection from './PresidentSection'
import Articles from './Articles'
import CounterUp from './CounterUp'
function HomePage() {
  return (
    <div className="w-100vw overflow-hidden">
      <Slider />
      <KuccDescription />
      <CommunitiesActive />
      <Activities />
      <CounterUp />
      <PresidentSection />
      <Articles />
    </div>
  )
}
export default HomePage
