'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SiJavascript, SiRust, SiGnubash, SiPython, SiDart } from 'react-icons/si'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { HiPaintBrush } from 'react-icons/hi2'
import { PiLineSegments } from 'react-icons/pi'
import { LuBrainCircuit } from 'react-icons/lu'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { Users } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Slide = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 h-[240px] flex flex-col items-center justify-center space-y-4 hover:shadow-2xl hover:shadow-accentBlue/10 hover:border-accentBlue/50 transition-all duration-300">
      <div className="group-hover:scale-110 transition-transform text-accentBlueLight">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-center text-titleColor group-hover:text-accentBlueLight transition-colors px-2">
        {title}
      </h3>
    </div>
  )
}

function CommunitiesActive() {
  const [slidesPerView, setSlidesPerView] = useState(() => {
    let numOfSlides
    if (typeof window === 'undefined') return 1
    if (window.innerWidth < 600) numOfSlides = 1
    else if (window.innerWidth < 1000) numOfSlides = 2
    else if (window.innerWidth <= 1400) numOfSlides = 3
    else numOfSlides = 4
    return numOfSlides
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const listener = () => {
      if (window.innerWidth < 600) setSlidesPerView(1)
      else if (window.innerWidth < 1000) setSlidesPerView(2)
      else if (window.innerWidth <= 1400) setSlidesPerView(3)
      else setSlidesPerView(4)
    }
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [])

  const slides = [
    {
      id: 1,
      title: 'JavaScript Community',
      icon: <SiJavascript size={64} />,
    },
    {
      id: 2,
      title: 'Design Community',
      icon: <HiPaintBrush size={64} />,
    },
    {
      id: 3,
      title: 'Python Community',
      icon: <SiPython size={64} />,
    },
    {
      id: 4,
      title: 'Cybersecurity Community',
      icon: <SiGnubash size={64} />,
    },
    {
      id: 5,
      title: 'Entrepreneurship and Outreach Community',
      icon: <PiLineSegments size={64} />,
    },
    {
      id: 6,
      title: 'Health Informatics Community',
      icon: <MdOutlineHealthAndSafety size={64} />,
    },
    {
      id: 7,
      title: 'Dart Community',
      icon: <SiDart size={64} />,
    },
    {
      id: 8,
      title: 'Rust Community',
      icon: <SiRust size={64} />,
    },
    {
      id: 9,
      title: 'Machine Learning and Data Science Community',
      icon: <LuBrainCircuit size={64} />,
    },
  ]

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 to-baseBackground overflow-hidden border-y border-gray-800">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accentBlue/10 to-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accentBlue/20 to-purple-500/20 border border-accentBlue/30 rounded-full mb-4 backdrop-blur-sm">
            <Users size={32} className="text-accentBlueLight" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-titleColor mb-4">
            Communities Active at KUCC
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our diverse range of tech communities, each fostering innovation and collaboration
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accentBlue via-purple-400 to-pink-400 mx-auto rounded-full mt-6" />
        </div>

        {/* Communities Carousel */}
        <div className="pb-12">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={24}
            slidesPerView={slidesPerView}
            navigation={false}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            speed={800}
            loop={true}
            pagination={{ clickable: true }}
            className="communities-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="pb-12">
                <Slide icon={slide.icon} title={slide.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default CommunitiesActive
