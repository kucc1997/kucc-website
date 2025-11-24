import React from 'react'
import Image from 'next/image'
import { Metadata } from 'next'
import { Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'KUCC President',
  description: 'Current President of Kathmandu University Computer Club (KUCC)',
}

export default function PresidentSection() {
  return (
    <section className="relative py-20 md:py-28 bg-baseBackground overflow-hidden border-y border-accentBlue/20 tech-grid-animated">
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <div className="absolute inset-0 circuit-pattern opacity-20 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accentBlue/20 border border-accentBlue/30 rounded-full mb-4 backdrop-blur-sm">
            <Quote size={32} className="text-accentBlueLight" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-titleColor mb-4">
            Message from <span className="highlight-glow tech-text text-accentBlueLight">Our President</span>
          </h2>
          <div className="w-24 h-1 bg-accentBlue mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-5 text-lg leading-relaxed bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
              <p className="text-gray-300">
                As President of KUCC, I am honored to lead this vibrant community of technology enthusiasts, 
                innovators, and learners. KUCC has always been a place where passion meets purpose, and I am 
                committed to fostering an environment where every member can explore, create, and excel.
              </p>

              <p className="text-gray-300">
                This year, we focus on building stronger communities, driving impactful projects, and creating 
                opportunities for growth through workshops, events, and collaborative initiatives. Together, 
                we will continue to push boundaries and inspire innovation.
              </p>

              <p className="text-gray-300">
                Let&apos;s embrace challenges, celebrate achievements, and make KUCC a platform where ideas 
                flourish and dreams turn into reality. Excited for what we&apos;ll accomplish together!
              </p>
            </div>

            {/* President Info */}
            <div className="pt-6 border-t border-accentBlue/20">
              <h3 className="text-2xl font-bold text-titleColor mb-1">
                Sakshi KC
              </h3>
              <p className="text-accentBlueLight font-medium text-lg tech-text">
                President, KUCC Board 25/26
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Image container */}
              <div className="relative bg-gray-900 p-2 rounded-2xl shadow-2xl shadow-accentBlue/20 border border-gray-700">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/people/Sakshi_KC.jpg"
                    className="w-full h-auto object-cover"
                    alt="Sakshi KC, KUCC President"
                    width={500}
                    height={500}
                    priority
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-accentBlue/20" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-accentBlue rounded-xl shadow-xl shadow-accentBlue/30 p-4 border border-accentBlue/30 backdrop-blur-sm">
                <div className="text-white font-bold text-2xl tech-number">25/26</div>
                <div className="text-white/90 text-sm font-medium tech-text">President</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
