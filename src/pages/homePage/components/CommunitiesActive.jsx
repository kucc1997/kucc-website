import React, {useState} from 'react'
import Card from "./CommunityCard"
import { FaCircleArrowLeft } from "react-icons/fa6";
import { FaCircleArrowRight } from "react-icons/fa6";


function CommunitiesActive() {
  const Slides = [
    {
      id: 1,
      img: './javsc.png',
      title: 'JavaScript Community',
    },
    {
      id: 2,
      img: './docm.png',
      title: 'Documentation Community',
    },
    {
      id: 3,
      img: './gaming.png',
      title: 'Game Community',
    },
    {
      id: 4,
      img: './cybersec.png',
      title: 'Cyber Community',
    },
  ]
  const [slideIndex, setSlideIndex] = useState(0)

  const onSlideClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : Slides.length - 1)
    } else {
      setSlideIndex(slideIndex < Slides.length - 1 ? slideIndex + 1 : 0)
    }
  }
  return (
    <div className='flex-col space-y-8 p-6 h-full bg-[#00baa321]'>
      <div className='flex-col space-y-2 md:space-y-3'>
      <h1 className='font-bold flex justify-center text-base md:text-xl text-[#00baa3]'> Kathmandu University Open Source Community</h1>
      <h2 className='flex justify-center font-semibold text-sm md:text-lg'> Communities Active At KUCC</h2>
      </div>
      <div className='flex justify-center items-center p-2 sm:p-4 space-x-8'>
        <div onClick={()=>onSlideClick('left')} className='cursor-pointer'>
          <FaCircleArrowLeft className='w-8 h-8 text-[#00baa3]'/>
        </div>
        <div className='overflow-hidden'>
        <div className='flex transition-transform duration-500 ease-in-out space-x-12 sm:space-x-16 md:space-x-12 lg:space-x-20' style={{ transform: `translateX(-${slideIndex * (200 / Slides.length)}%)` }}>
            {Slides.map((itemSlide) => {
              return (
                <>
                  <Card key={itemSlide.id} img={itemSlide.img} title={itemSlide.title} />
                </>
              )
            })}
          </div>
        </div>
        <div onClick={()=>onSlideClick('right')} className='cursor-pointer'>
          <FaCircleArrowRight className='w-8 h-8 text-[#00baa3]'/>
        </div>
      </div>
    </div>
  )
}
export default CommunitiesActive
