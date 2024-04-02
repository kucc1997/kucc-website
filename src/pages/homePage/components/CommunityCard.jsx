import React from 'react'
import { FaUsers } from 'react-icons/fa'

function Card(props) {
  return (
    <div className="flex flex-col space-y-2 justify-center items-center cursor-pointer hover:translate-y-1 hover:delay-100">
      <div className='w-20 h-20 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 '>
        <img src={props.img} className='object-contain'/>
      </div>
      <div className='flex flex-col justify-center items-center space-y-1'>
        <FaUsers className="text-[#00baa3] w-7 h-7" />
        <h1 className='text-center font-medium text-sm sm:text-base md:text-lg '>{props.title}</h1>
      </div>
    </div>
  )
}
export default Card
