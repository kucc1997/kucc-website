'use client'
import { MdMonetizationOn, MdVolunteerActivism } from 'react-icons/md'
import { GrWorkshop } from 'react-icons/gr'

export default function ActivityCard(props: { title: string; description: string; url?: string }) {
  function Icon() {
    if (props.title === 'IT Meet') {
      return <MdMonetizationOn className="text-accentBlue w-12 h-12" />
    } else if (props.title === 'Software Freedom Day') {
      return <MdVolunteerActivism className="text-accentBlue w-12 h-12" />
    } else {
      return <GrWorkshop className="text-accentBlue w-12 h-12" />
    }
  }

  const handleClick = () => {
    if (props.url) {
      window.open(props.url, '_blank')
    }
  }
  
  return (
    <div onClick={handleClick} className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-accentBlue/10 hover:-translate-y-2 hover:border-accentBlue/30 transition-all duration-300 cursor-pointer">
      {/* Icon with gradient background */}
      <div className="w-20 h-20 bg-gradient-to-br from-accentBlue/20 to-purple-500/20 border border-accentBlue/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon />
      </div>
      
      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-titleColor font-bold text-xl group-hover:text-accentBlueLight transition-colors tech-text">
          {props.title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {props.description}
        </p>
      </div>
      
      {/* Hover indicator */}
      <div className="mt-6 flex items-center text-accentBlueLight opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-sm font-medium">Learn more</span>
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}
