import React from 'react'
import { HiPaintBrush } from 'react-icons/hi2'
import { LuBrainCircuit } from 'react-icons/lu'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { PiLineSegments } from 'react-icons/pi'
import { SiDart, SiGnubash, SiJavascript, SiPython, SiRust } from 'react-icons/si'
import { Community } from '../../../types'
import { FaGamepad, FaJava } from 'react-icons/fa'
import { BsJournalBookmarkFill } from 'react-icons/bs'
import Link from 'next/link'

const Communities = () => {
  const communities: Community[] = [
    {
      id: 1,
      title: 'JavaScript Community',
      Icon: SiJavascript,
      description:
        'Join us to enhance your JavaScript skills, participate in workshops, and collaborate on exciting projects with fellow developers.',
    },
    {
      id: 2,
      title: 'Design Community',
      Icon: HiPaintBrush,
      description:
        'Explore creative design through workshops, hands-on activities, and networking with design professionals. All skill levels welcome!',
    },
    {
      id: 3,
      title: 'Python Community',
      Icon: SiPython,
      description:
        'Dive into Python programming and data science with workshops, coding challenges, and collaborative projects for all levels.',
    },
    {
      id: 4,
      title: 'Cybersecurity Community',
      Icon: SiGnubash,
      description:
        'Gain practical insights into networking and cybersecurity through workshops and interactive sessions. Ideal for all skill levels.',
    },
    {
      id: 5,
      title: 'Entrepreneurship and Monetization Community',
      Icon: PiLineSegments,
      description:
        'Empower your tech ideas with practical guidance, workshops, and mentorship on entrepreneurship and monetization.',
    },
    {
      id: 6,
      title: 'Health Informatics Community',
      Icon: MdOutlineHealthAndSafety,
      description:
        'Explore technology in healthcare through workshops and collaborations, enhancing skills and contributing to innovative projects.',
      path: '/hi',
    },
    {
      id: 7,
      title: 'Dart Community',
      Icon: SiDart,
      description:
        'Master Dart and Flutter with workshops, server-side Dart exploration, and community projects. For all levels of experience.',
    },
    {
      id: 8,
      title: 'Rust Community',
      Icon: SiRust,
      description:
        'Connect with Rust enthusiasts, enhance your skills, and collaborate on projects in a supportive environment for all levels.',
    },
    {
      id: 9,
      title: 'Machine Learning and Data Science Community',
      Icon: LuBrainCircuit,
      description:
        'Advance your skills in machine learning and data science with dynamic workshops, collaborative projects, and career opportunities.',
    },
    {
      id: 10,
      title: 'Game Developmet Community',
      Icon: FaGamepad,
      description:
        'Explore game development through workshops, collaborative projects, and competitions. Perfect for all levels of enthusiasts and developers.',
    },
    {
      id: 11,
      title: 'Documentation Community',
      Icon: BsJournalBookmarkFill,
      description:
        'Enhance your documentation skills through workshops, research paper writing, and collaborative projects to streamline processes and impact.',
    },
    {
      id: 12,
      title: 'Java and Kotlin Community',
      Icon: FaJava,
      description:
        'Develop your Java expertise with workshops, collaborative projects, and career insights. Ideal for developers interested in backend and Android applications.',
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
