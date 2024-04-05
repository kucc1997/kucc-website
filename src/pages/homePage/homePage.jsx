import React from 'react'
// import Slider from '../../components/Slider/Slider'

import KuccDescription from './components/KuccDescription'
import KUOSC from './components/KUOSC'
import CommunitiesActive from './components/CommunitiesActive'
import Activities from './components/Activities'
import CounterUp from './components/CounterUp'
import PresidentSection from './components/PresidentSection'
// import Articles from './components/Articles'
import { Helmet } from 'react-helmet'

export default function HomePage() {
	return (
		<>
			<Helmet>
				<title>Kathmandu University Computer Club (KUCC)</title>
			</Helmet>
			<div className="flex-col space-y-10 w-100vw">
				{/* <Slider /> */}
				<KuccDescription />
				<KUOSC />
				<CommunitiesActive />
				<Activities />
				<CounterUp />
				<PresidentSection />
				{/* <Articles /> */}
			</div>
		</>
	)
}
