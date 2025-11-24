import ActivityCard from '@/components/ActivityCard'
import Image from 'next/image'
import React from 'react'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import HICounter from '../communities/components/HICounter'

interface Achievement {
  title: string
  description: string
}

const Achievements: Achievement[] = [
  {
    title: 'Bahmni localization Bootcamp',
    description: `The Kathmandu University Open Source Community (KUOSC) and the Health Informatics community of KUCC intiatiated localization sprint to translate Bahmni, an open-source HMIS, into Nepali to improve healthcare in rural areas. This effort aims to eliminate language barriers, making Bahmni more accessible for local healthcare workers and enhancing rural healthcare services.`,
  },
  {
    title: 'Digitization Initiative in Charikot',
    description: `A team from Kathmandu University Open Source Community (KUOSC) and the health informatics community visited Charikot, Dolakha District, to enhance healthcare accessibility. With support from the NEEM Project, they assessed local needs and set up a system to improve services. This collaboration is a crucial step towards digitizing healthcare in remote areas, making quality care more accessible.`,
  },
  {
    title: 'Python Bootcamp for Health Informatics Students:',
    description: `Equipped Master's students with essential Python programming skills for effective healthcare data management and analysis. Covered basics of Python, including data structures and libraries like Pandas, enabling students to handle real-world datasets and perform basic analyses.`,
  },
]

const HealthInformaticsCommunity = () => {
  return (
    <div className="min-h-screen bg-baseBackground tech-grid py-16 px-5">
      <div className="max-w-screen-xl mx-auto space-y-16 relative z-10">
        <section className="flex items-center gap-12">
          <div className="space-y-6 max-w-[60%]">
            <h1 className="text-4xl md:text-5xl font-bold text-accentBlueLight">
              Health Informatics Community
            </h1>
            <div className="w-32 h-1 bg-accentBlue rounded-full"></div>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              The Health Informatics (HI) community at Kathmandu University Computer Club (KUCC) is
              dedicated to promoting healthcare innovation through technology and data. We foster
              collaboration between healthcare professionals, IT experts, and researchers to address
              Nepal&apos;s healthcare challenges and improve patient outcomes.
            </p>
          </div>
          <div className="grid place-items-center w-full">
            <div className="w-48 h-48 rounded-3xl bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 flex items-center justify-center">
              <MdOutlineHealthAndSafety className="text-[8rem] text-accentBlue" />
            </div>
          </div>
        </section>
        <HealthInformaticsAchievements />
        <HICommunityCoordinator />
        <HICounter />
        <HIPlannedActivities />
      </div>
    </div>
  )
}

const HealthInformaticsAchievements = () => {
  return (
    <div className="flex flex-col space-y-8 p-5 justify-center items-center">
      <div className="text-center">
        <h1 className="text-accentBlueLight text-2xl md:text-3xl font-bold mb-4">
          Achievements of HI Community
        </h1>
        <div className="w-32 h-1 bg-accentBlue rounded-full mx-auto"></div>
      </div>
      <div className="flex-col p-2 w-full">
        <div className="space-y-5 grid sm:grid-cols-2 md:grid-cols-3 md:space-y-0 md:gap-6 max-w-screen-xl mx-auto">
          {Achievements.map((achievement, index) => (
            <ActivityCard
              key={index}
              title={achievement.title}
              description={achievement.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const Coordinator = ({ imgSrc, name, quote }: { imgSrc: string; name: string; quote: string }) => {
  return (
    <div className="flex items-center gap-4 bg-gray-900 border border-gray-800/50 p-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl shadow-accentBlue/10">
      <div className="relative">
        <Image
          src={imgSrc}
          alt={name}
          height={200}
          width={200}
          className="relative h-24 w-24 rounded-full border-2 border-gray-700/50 bg-gray-800"
        />
      </div>
      <div className="space-y-2">
        <p className="text-base text-gray-300 italic">{quote}</p>
        <p className="text-gray-500 font-medium">- {name}</p>
      </div>
    </div>
  )
}
const HICommunityCoordinator = () => {
  const coordinators = [
    {
      imgSrc: '/people/Dipen_Khatri.webp',
      name: 'Dipen Khatri',
      quote:
        '"Health Informatics is the future of healthcare. Join us to revolutionize healthcare in Nepal."',
    },
    {
      imgSrc: '/people/Sushan_Adhikari.webp',
      name: 'Sushan Adhikari',
      quote:
        '"Health Informatics is the future of healthcare. Join us to revolutionize healthcare in Nepal."',
    },
  ]
  return (
    <div className="grid place-items-center space-y-8">
      <div className="text-center">
        <h1 className="text-accentBlueLight text-3xl font-bold mb-4">
          Community Coordinators
        </h1>
        <div className="w-32 h-1 bg-accentBlue rounded-full mx-auto"></div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {coordinators.map((coordinator, index) => (
          <Coordinator
            key={index}
            imgSrc={coordinator.imgSrc}
            name={coordinator.name}
            quote={coordinator.quote}
          />
        ))}
      </div>
    </div>
  )
}


const PlannedActivity = ({
  imgSrc,
  title,
  description,
}: {
  imgSrc: string
  title: string
  description: string
}) => {
  return (
    <div className="bg-gray-900 border border-gray-800/50 flex rounded-2xl gap-6 max-w-[80%] mx-auto p-6 hover:scale-105 transition-all duration-300 shadow-xl shadow-accentBlue/10">
      <div className="relative flex-shrink-0">
        <Image src={imgSrc} height={200} width={400} alt={title} className="relative h-40 w-40 rounded-xl object-cover border border-gray-700/50" />
      </div>
      <div className="space-y-3 flex-1">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

const HIPlannedActivities = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-accentBlueLight text-2xl md:text-3xl font-bold mb-4">
          Upcoming Events by HI Community
        </h1>
        <div className="w-32 h-1 bg-accentBlue rounded-full mx-auto"></div>
      </div>
      <PlannedActivity
        imgSrc="/assets/images/communities/hi/dhis.png"
        title="DHIS 2 Implementation"
        description="Our upcoming plans for DHIS 2 implementation focus on expanding its national usage and enhancing its functionality to better serve the healthcare system. We aim to ensure that DHIS 2 is adopted by every municipality as the primary digital Health Management Information System (HMIS) data platform, solidifying its role as the national database for electronic health data management. Efforts will continue to localize the DHIS 2 software in Nepali to make it more accessible for local users. Furthermore, we plan to develop comprehensive training modules, conduct capacity-building workshops, and implement strategies to enhance data usage, thereby making DHIS 2 an even more powerful tool for managing health information across the country."
      />
    </div>
  )
}

export default HealthInformaticsCommunity
