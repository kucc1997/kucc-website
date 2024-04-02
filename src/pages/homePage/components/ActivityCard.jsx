import React from 'react'
import { MdMonetizationOn } from 'react-icons/md'
import { MdVolunteerActivism } from 'react-icons/md'
import { GrWorkshop } from 'react-icons/gr'

export default function ActivityCard(props) {

  function Icon() {
    if (props.title === 'IT Meet') {
      return <MdMonetizationOn className="text-[#00baa3] w-10 h-10" />
    } else if (props.title === 'Software Freedom Day') {
      return <MdVolunteerActivism className="text-[#00baa3] w-10 h-10" />
    } else {
      return <GrWorkshop className="text-[#00baa3] w-10 h-10" />
    }
  }
  return (
    <div className="flex bg-[#00baa321] space-y-4 rounded-lg flex-col hover:cursor-pointer hover:transition hover:translate-y-1 hover:ease-in-out p-6 justify-center items-center shadow-lg">
      <div>
        <Icon />
      </div>
      <div className='space-y-3'>
        <h1 className="text-[#033b4a] font-semibold text-base sm:text-lg md:text-xl text-center">{props.title}</h1>
        <p className="flex text-justify text-[#7a8a9e]">{props.description}</p>
      </div>
    </div>
  )
}
