import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KUCC Description',
  description: 'KUCC description tells what KUCC exactly is.',
}

export default function KuccDescription() {
  return (
    <div className="flex flex-col p-5 justify-center items-center max-w-screen-xl min-h-[80vh] md:min-h-[85vh] mx-auto">
      <div className="lg:flex space-y-8">
        <div className="flex justify-center">
          <Image
            src="/kucc-logo.png"
            className="object-contain max-w-[200px] md:max-w-[300px] lg:max-w-[400px]"
            alt="Kathmandu University Computer Club"
            height={400}
            width={400}
          />
        </div>

        <div className="flex-col">
          <div className="space-y-6 md:space-y-8 max-w-[80ch] mx-auto">
            <h2 className="text-subTitleColor font-semibold text-base sm:text-lg md:text-xl text-center lg:text-start">
              {' '}
              Since 1997, The oldest student club
            </h2>
            <h1 className="text-titleColor text-lg sm:text-2xl md:text-3xl  font-bold text-center lg:text-start">
              {' '}
              Kathmandu University Computer Club
            </h1>
            <p className="text-justify">
              KUCC is a non-profit, independent club formed by students of the Department of
              Computer Science and Engineering in the year 1997. Being registered as the first club
              of Kathmandu University with the registration number 001/1997 in the Student Welfare,
              KUCC has worked in the field of ICT for twenty years. KUCC has more than 1000 members
              from Department of Computer Science and Engineering. Kathmandu University Computer
              Club (KUCC) is a student wing of the Department of Computer Science and Engineering
              which was established with a goal to engage and aware students in the technological
              research and development, most prominently in the ICT field and at the same time
              provides a common platform for young and aspiring individuals to exhibit their ideas.
              Every year KUCC cooperates and organizes numerous competitive as well as
              non-competitive events like seminars, exhibitions, hackathon, skill development
              program and tutorial sessions to name a few, with an unwavering intention to promote,
              develop and encourage emerging technological advancement.
            </p>
            <Link href={'contact'} className="flex justify-center lg:justify-normal">
              <Button className="bg-titleColor">CONTACT US</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
