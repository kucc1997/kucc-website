'use client'
import { FaPeopleGroup } from 'react-icons/fa6'
import { MdVolunteerActivism } from 'react-icons/md'
import { GrWorkshop } from 'react-icons/gr'
import { CalendarDays } from 'lucide-react'

export default function ActivityCard(props: { title: string; description: string; url?: string }) {
  const isSFD = props.title === 'Software Freedom Day'
  
  function Icon() {
    if (props.title === 'IT Meet') {
      return <FaPeopleGroup className="text-titleColor w-10 h-10" />
    } else if (isSFD) {
      return <MdVolunteerActivism className="text-titleColor w-10 h-10" />
    } else {
      return <GrWorkshop className="text-accentBlue w-12 h-12" />
    }
  }

  const handleClick = () => {
    if (props.url) {
      window.open(props.url, '_blank')
    }
  }
  
  const cardClasses = "group bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-accentBlue/10 hover:-translate-y-2 hover:border-accentBlue/30 transition-all duration-300 cursor-pointer"
  
  const iconBgClasses = "w-20 h-20 bg-accentBlue/20 border border-accentBlue/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
  
  const titleHoverClasses = "text-titleColor font-bold text-xl group-hover:text-accentBlueLight transition-colors tech-text"
  
  const learnMoreClasses = "mt-6 flex items-center text-accentBlueLight opacity-0 group-hover:opacity-100 transition-opacity"
  
  return (
    <div onClick={handleClick} className={cardClasses}>
      {/* Icon with gradient background */}
      <div className={iconBgClasses}>
        <Icon />
      </div>
      
      {/* Content */}
      <div className="space-y-3">
        <h3 className={titleHoverClasses}>
          {props.title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {props.description}
        </p>
      </div>
      
      {/* Hover indicator */}
      <div className={learnMoreClasses}>
        <span className="text-sm font-medium">Learn more</span>
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}
