'use client'
import React from 'react'
import CountUp from 'react-countup'
import { TrendingUp, Users, Calendar, Award } from 'lucide-react'

export default function CounterUp() {
  const stats = [
    {
      icon: <Calendar size={32} />,
      end: 120,
      label: 'Events',
      suffix: '+'
    },
    {
      icon: <Award size={32} />,
      end: 10,
      label: 'Communities',
      suffix: '+'
    },
    {
      icon: <TrendingUp size={32} />,
      end: 500,
      label: 'Workshops',
      suffix: '+'
    },
    {
      icon: <Users size={32} />,
      end: 1000,
      label: 'Members',
      suffix: '+'
    }
  ]

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-r from-gray-950 via-gray-900 to-gray-950 overflow-hidden border-y border-gray-800">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-accentBlue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accentBlue/20 to-purple-500/20 border border-accentBlue/30 rounded-2xl flex items-center justify-center text-accentBlueLight backdrop-blur-sm">
                  {stat.icon}
                </div>
              </div>
              
              {/* Counter */}
              <div className="space-y-1">
                <CountUp
                  suffix={stat.suffix}
                  start={0}
                  end={stat.end}
                  duration={2}
                  delay={0}
                  enableScrollSpy
                  scrollSpyOnce
                  className="block text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                />
                <div className="text-lg md:text-xl font-medium text-white/90 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
