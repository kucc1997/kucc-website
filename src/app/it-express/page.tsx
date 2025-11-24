import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { HiDocumentText } from 'react-icons/hi'

export const metadata: Metadata = {
  title: 'IT Express - Kathmandu University Computer Club (KUCC)',
  description:
    'IT Express is a magazine published every year by the KUCC. It includes articles submitted by the students of DOCSE, research works, clubs information and messages from reputed personnel. Listed below is the archive of the e-copies of IT Express published since 2018.',
}

const ItExpressList = [
  {
    name: 'IT Express 2023',
    link: '/docs/IT-EXPRESS-2023.pdf',
  },
  {
    name: 'IT Express 2022',
    link: '/docs/IT-EXPRESS-2022.pdf',
  },
  {
    name: 'IT Express 2021',
    link: '/docs/IT-EXPRESS-2021.pdf',
  },
  {
    name: 'IT Express 2019',
    link: '/docs/IT-EXPRESS-2019.pdf',
  },
  {
    name: 'IT Express 2018',
    link: '/docs/IT-EXPRESS-2018.pdf',
  },
]

const ItExpressPage = () => {
  return (
    <div className="min-h-screen bg-baseBackground tech-grid py-16 px-5">
      {/* Decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accentBlue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accentBlue/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-accentBlueLight text-4xl md:text-5xl font-bold mb-6 tech-text highlight-text">
            IT Express
          </h1>
          <div className="w-32 h-1 bg-accentBlue rounded-full mx-auto mb-8"></div>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-6">
            IT Express is a magazine published every year by the KUCC. It includes articles
            submitted by the students of DOCSE, research works, clubs information and messages from
            reputed personnel. Listed below is the archive of the e-copies of IT Express published
            since 2018.
          </p>
          
          <p className="text-gray-500 text-sm italic">
            Note: Click on the PDF to download.
          </p>
        </div>

        <div className="space-y-4 py-4">
          {ItExpressList.map((itexp, index) => (
            <Link
              key={itexp.name}
              href={itexp.link}
              target="_blank"
              className="group block"
            >
              <div className="relative bg-gray-900 border border-gray-800/50 rounded-2xl p-6 hover:scale-105 transition-all duration-300 shadow-xl shadow-accentBlue/10 hover:shadow-accentBlue/20">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-accentBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex items-center gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accentBlue/20 flex items-center justify-center border border-gray-700/50 group-hover:scale-110 transition-transform duration-300">
                    <HiDocumentText className="text-3xl text-accentBlue" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-accentBlueLight transition-all duration-300 tech-text">
                      {itexp.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Click to view PDF</p>
                  </div>
                  
                  {/* Arrow indicator */}
                  <div className="flex-shrink-0 text-gray-500 group-hover:text-accentBlue group-hover:translate-x-2 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ItExpressPage
