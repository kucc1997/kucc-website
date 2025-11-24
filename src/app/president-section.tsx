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
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden border-y border-gray-800">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accentBlue/20 to-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
            <Quote size={32} className="text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Message from Our President
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accentBlue via-purple-400 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6 text-white order-2 lg:order-1">
            <div className="space-y-5 text-lg leading-relaxed">
              <p className="text-white/90">
                As President of KUCC, I&apos;m excited to lead us back to what really matters: technology,
                research, cool projects, and an awesome community. We&apos;re all about getting hands-on,
                learning deeply, and having fun while we do it.
              </p>

              <p className="text-white/90">
                This year, we&apos;re kicking off something big. The National Conference on Computer
                Innovations, or NCCI, is a chance for all of us to show off our research, share ideas,
                and spark new innovations.
              </p>

              <p className="text-white/90">
                Let&apos;s dive in, build together, and make KUCC the place where ideas come alive. Ready
                to shape the future? Let&apos;s go!
              </p>
            </div>

            {/* President Info */}
            <div className="pt-6 border-t border-white/20">
              <h3 className="text-2xl font-bold text-white mb-1">
                Abhiyan Dhakal
              </h3>
              <p className="text-accentBlueLight font-medium text-lg">
                President, KUCC
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accentBlue/40 via-purple-500/40 to-pink-500/40 rounded-2xl blur-xl opacity-50" />
              
              {/* Image container */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-2 rounded-2xl shadow-2xl shadow-accentBlue/20 border border-gray-700">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/people/Abhiyan_Dhakal.webp"
                    className="w-full h-auto object-cover"
                    alt="Abhiyan Dhakal, KUCC President"
                    width={500}
                    height={500}
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accentBlue/30 via-purple-500/20 to-transparent" />
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-accentBlue to-purple-600 rounded-xl shadow-xl shadow-accentBlue/30 p-4 border border-accentBlue/30 backdrop-blur-sm">
                <div className="text-white font-bold text-2xl">2024</div>
                <div className="text-white/90 text-sm font-medium">President</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
