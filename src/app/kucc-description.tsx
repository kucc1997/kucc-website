import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import { ArrowRight, Calendar, Users, Trophy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'KUCC Description',
  description: 'KUCC description tells what KUCC exactly is.',
}

export default function KuccDescription() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-baseBackground via-gray-900 to-baseBackground">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accentBlue/20 to-purple-500/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-techAccent/20 to-pink-500/20 rounded-full blur-3xl -z-0" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accentBlue/20 to-purple-500/20 border border-accentBlue/30 text-accentBlueLight rounded-full text-sm font-medium backdrop-blur-sm">
              <Calendar size={16} />
              <span>Since 1997, The First Student Club</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-titleColor leading-tight">
                Kathmandu University
                <span className="block bg-gradient-to-r from-accentBlue via-purple-400 to-techAccent bg-clip-text text-transparent">Computer Club</span>
              </h1>
              <p className="text-lg sm:text-xl text-subTitleColor leading-relaxed">
                Pioneering technological innovation and excellence at KU for over two decades
              </p>
            </div>

            {/* Description */}
            <p className="text-base text-gray-400 leading-relaxed max-w-2xl">
              KUCC is a non-profit, independent club formed by students of the Department of
              Computer Science and Engineering in the year 1997. Being registered as the first club
              of Kathmandu University with the registration number 001/1997, KUCC has worked in the
              field of ICT for over twenty years, engaging and empowering more than 1000 members through
              technology, research, and innovation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              <div className="space-y-1 p-4 rounded-xl bg-gradient-to-br from-accentBlue/10 to-transparent border border-accentBlue/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-accentBlueLight">
                  <Calendar size={20} />
                  <span className="text-2xl font-bold text-titleColor">27+</span>
                </div>
                <p className="text-sm text-gray-400">Years Active</p>
              </div>
              <div className="space-y-1 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-purple-400">
                  <Users size={20} />
                  <span className="text-2xl font-bold text-titleColor">1000+</span>
                </div>
                <p className="text-sm text-gray-400">Members</p>
              </div>
              <div className="space-y-1 p-4 rounded-xl bg-gradient-to-br from-techAccent/10 to-transparent border border-techAccent/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-techAccent">
                  <Trophy size={20} />
                  <span className="text-2xl font-bold text-titleColor">100+</span>
                </div>
                <p className="text-sm text-gray-400">Events</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/contact">
                <Button className="bg-gradient-to-r from-accentBlue to-purple-600 hover:from-accentBlueDark hover:to-purple-700 text-white px-6 py-6 text-base font-semibold rounded-lg shadow-lg shadow-accentBlue/25 hover:shadow-xl hover:shadow-accentBlue/40 transition-all group">
                  Contact Us
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/executive-committee">
                <Button variant="outline" className="border-2 border-accentBlue/50 text-accentBlueLight hover:bg-accentBlue/10 hover:border-accentBlue px-6 py-6 text-base font-semibold rounded-lg transition-all backdrop-blur-sm">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - Logo with decorative elements */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 bg-gradient-to-br from-accentBlue/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -inset-4 border-2 border-accentBlue/30 rounded-full" />
              <div className="absolute -inset-8 border-2 border-purple-500/20 rounded-full" />
              
              {/* Logo */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-full p-8 shadow-2xl shadow-accentBlue/20 border border-gray-700/50">
                <Image
                  src="/kucc-logo.png"
                  className="object-contain w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
                  alt="Kathmandu University Computer Club"
                  height={400}
                  width={400}
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="hidden lg:block absolute -left-8 top-1/4 bg-gradient-to-br from-gray-900 to-gray-800 border border-accentBlue/30 rounded-xl shadow-xl shadow-accentBlue/20 p-4 animate-bounce backdrop-blur-sm" style={{animationDuration: '3s'}}>
                <div className="text-accentBlueLight font-bold text-lg">Reg. No.</div>
                <div className="text-titleColor font-semibold">001/1997</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
