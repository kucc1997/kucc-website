'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SiJavascript, SiRust, SiGnubash, SiPython, SiDart } from 'react-icons/si'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { HiPaintBrush } from 'react-icons/hi2'
import { PiLineSegments } from 'react-icons/pi'
import { LuBrainCircuit } from 'react-icons/lu'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Slide = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="grid place-content-center place-items-center space-y-2 rounded w-full shadow-md p-8 h-[200px]">
      {icon}
      <h1 className="text-lg font-semibold text-center p-4">{title}</h1>
    </div>
  )
}

function CommunitiesActive() {
  const [slidesPerView, setSlidesPerView] = useState(() => {
    let numOfSlides

    if (typeof window === 'undefined') return 0
    if (window.innerWidth < 600) numOfSlides = 1
    if (window.innerWidth < 1000 && window.innerWidth > 600) numOfSlides = 2
    else if (window.innerWidth >= 1000 && window.innerWidth <= 1400) numOfSlides = 3
    else if (window.innerWidth > 1400) numOfSlides = 4

    return numOfSlides
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const listener = () => {
      if (window.innerWidth < 600) setSlidesPerView(1)
      if (window.innerWidth < 1000 && window.innerWidth > 600) setSlidesPerView(2)
      else if (window.innerWidth >= 1000 && window.innerWidth <= 1400) setSlidesPerView(3)
      else if (window.innerWidth > 1400) setSlidesPerView(4)
    }
    window.addEventListener('resize', listener)

    return () => window.removeEventListener('resize', listener)
  })

  const slides = [
    {
      id: 1,
      title: 'JavaScript Community',
      icon: <SiJavascript size={80} color="#666" />,
    },
    {
      id: 2,
      title: 'Design Community',
      icon: <HiPaintBrush size={80} color="#666" />,
    },
    {
      id: 3,
      title: 'Python Community',
      icon: <SiPython size={80} color="#666" />,
    },
    {
      id: 4,
      title: 'Cybersecurity Community',
      icon: <SiGnubash size={80} color="#666" />,
    },
    {
      id: 5,
      title: 'Entreprenuership and Outreach Community',
      icon: <PiLineSegments size={80} color="#666" />,
    },
    {
      id: 6,
      title: 'Health Informatics Community',
      icon: <MdOutlineHealthAndSafety size={80} color="#666" />,
    },
    {
      id: 7,
      title: 'Dart Community',
      icon: <SiDart size={80} color="#666" />,
    },
    {
      id: 8,
      title: 'Rust Community',
      icon: <SiRust size={80} color="#666" />,
    },
    {
      id: 9,
      title: 'Machine Learning and Data Science Community',
      icon: <LuBrainCircuit size={80} color="#666" />,
    },
  ]

  return (
    <div className="flex-col space-y-8 p-6 h-full">
      <div className="flex-col">
        <h1 className="text-titleColor text-lg sm:text-2xl md:text-3xl font-bold text-center">
          Communities Active at KUCC
        </h1>
        <div className="py-8">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={12}
            slidesPerView={slidesPerView}
            navigation={false}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={1000}
            loop={true}
            pagination={{ clickable: true }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="mb-16 bg-baseBackground">
                <Slide icon={slide.icon} title={slide.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}
export default CommunitiesActive
