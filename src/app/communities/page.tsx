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
    <div className="max-w-screen-xl mx-auto mb-24">
      <h1 className="text-4xl text-titleColor font-semibold text-center py-12">
        Communities Under KUCC
      </h1>

      <section className="grid grid-cols-2 gap-4">
        {communities.map((community) => (
          <Link
            href={community.path || '/communities'}
            key={community.id}
            className="flex items-center space-x-6 px-12 hover:cursor-pointer group border rounded-sm border-secondBackground "
          >
            <community.Icon className="text-[#333] group-hover:text-titleColor ease-in-out transition duration-200 text-[12rem]" />
            <div>
              <h2 className="text-xl font-semibold group-hover:text-titleColor ease-in-out transition duration-200 ">
                {community.title}
              </h2>
              <p>{community.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Communities
