'use client'
import { FaPeopleGroup } from 'react-icons/fa6'
import { MdVolunteerActivism } from 'react-icons/md'
import { GrWorkshop } from 'react-icons/gr'
import { Network } from 'lucide-react'

export default function ActivityCard(props: { title: string; description: string; url?: string }) {
  const isSFD = props.title === 'Software Freedom Day'

  function Icon() {
    if (props.title === 'IT Meet') return <FaPeopleGroup className="text-brand w-10 h-10" />
    else if (isSFD) return <MdVolunteerActivism className="text-brand w-10 h-10" />
    else if (props.title === 'KURCH') return <Network className="text-brand w-10 h-10" />
    else return <GrWorkshop className="text-brand w-10 h-10" />
  }

  const handleClick = () => {
    if (props.url) window.open(props.url, '_blank')
  }

  return (
    <div onClick={handleClick} className="group pad border border-line hover:border-brand cursor-pointer stack">
      <div className="mb-4">
        <Icon />
      </div>
      <div className="stack">
        <h3 className="fs-text font-semibold text-muted-c group-hover:text-brand">{props.title}</h3>
        <p className="fs-small text-muted-c">{props.description}</p>
      </div>
      <div className="flex items-center text-brand opacity-0 group-hover:opacity-100">
        <span className="fs-small">Learn more</span>
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  )
}
