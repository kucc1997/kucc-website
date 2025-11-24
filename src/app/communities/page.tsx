import React from 'react'
import { HiPaintBrush } from 'react-icons/hi2'
import { LuBrainCircuit } from 'react-icons/lu'
import { SiGnubash } from 'react-icons/si'
import { Community } from '../../../types'
import { BsJournalBookmarkFill } from 'react-icons/bs'
import { FaCloud, FaMobileAlt } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import Link from 'next/link'

const Communities = () => {
  const communities: Community[] = [
    {
      id: 1,
      title: 'Documentation Community',
      Icon: BsJournalBookmarkFill,
      description:
        'Enhance your documentation skills through workshops, research paper writing, and collaborative projects to streamline processes and impact.',
    },
    {
      id: 2,
      title: 'Machine Learning Community',
      Icon: LuBrainCircuit,
      description:
        'Advance your skills in machine learning and data science with dynamic workshops, collaborative projects, and career opportunities.',
    },
    {
      id: 3,
      title: 'Web Development Community',
      Icon: MdWeb,
      description:
        'Master modern web technologies through hands-on workshops, collaborative projects, and mentorship. Build responsive and dynamic web applications.',
    },
    {
      id: 4,
      title: 'Design Community',
      Icon: HiPaintBrush,
      description:
        'Explore creative design through workshops, hands-on activities, and networking with design professionals. All skill levels welcome!',
    },
    {
      id: 5,
      title: 'Cloud Community',
      Icon: FaCloud,
      description:
        'Dive into cloud computing with AWS, Azure, and GCP. Learn infrastructure, deployment, and cloud-native technologies through practical workshops.',
    },
    {
      id: 6,
      title: 'Mobile App Development Community',
      Icon: FaMobileAlt,
      description:
        'Build cross-platform mobile applications with Flutter, React Native, and native technologies. Engage in workshops and collaborative projects.',
    },
    {
      id: 7,
      title: 'Cybersecurity & Networking Community',
      Icon: SiGnubash,
      description:
        'Gain practical insights into networking and cybersecurity through workshops and interactive sessions. Ideal for all skill levels.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-baseBackground via-gray-900 to-gray-950 py-16 px-5">
      {/* Gradient decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accentBlue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue via-purple-400 to-pink-400 text-4xl md:text-5xl font-bold mb-4">
            Communities Under KUCC
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-accentBlue via-purple-400 to-pink-400 rounded-full mx-auto"></div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {communities.map((community) => (
            <Link
              href={community.path || '/communities'}
              key={community.id}
              className="group"
            >
              <div className="relative flex items-center space-x-6 p-8 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-accentBlue/10 hover:shadow-accentBlue/20">
                {/* Gradient glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accentBlue/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon container */}
                <div className="relative z-10 flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-gray-950/50 to-gray-900/50 backdrop-blur-sm border border-gray-800/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <community.Icon className="text-gray-400 group-hover:text-accentBlue transition-colors duration-300 text-5xl md:text-6xl" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex-1">
                  <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-accentBlue group-hover:to-purple-400 transition-all duration-300 mb-2">
                    {community.title}
                  </h2>
                  <p className="text-sm text-gray-400 leading-relaxed">{community.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Communities
