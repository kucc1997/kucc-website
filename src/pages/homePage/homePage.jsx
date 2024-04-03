import React from 'react'
// import Slider from '../../components/Slider/Slider'

import KuccDescription from './components/KuccDescription'
import CommunitiesActive from './components/CommunitiesActive'
import Activities from './components/Activities'
import CounterUp from './components/CounterUp'
import PresidentSection from './components/PresidentSection'
import Articles from './components/Articles'
export default function HomePage() {
  return (
    <div className="flex-col space-y-10 w-100vw">
      {/* <Slider /> */}
      <KuccDescription />
      <CommunitiesActive />
      <Activities />
      <CounterUp />
      <PresidentSection />
      {/* <Articles /> */}
    </div>
  )
}
