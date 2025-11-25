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
    <div className="flex flex-col p-6 py-14">
      <div className="space-y-6 md:space-y-0 md:space-x-6 lg:space-x-10 xl:space-x-14 md:flex md:items-center mx-auto max-w-screen-xl">
        <div className="flex justify-center md:hidden">
          <Image
            src="/people/Abhiyan_Dhakal.webp"
            className="rounded-2xl object-contain"
            alt="Sakshi K.C., KUCC President"
            width={600}
            height={600}
          />
        </div>
        <div className="flex-col space-y-3 md:hidden">
          <div>
            <h1 className="text-titleColor text-xl font-semibold tracking-wide text-center">
              KUCC President
            </h1>
            <h2 className="text-subTitleColor text-lg font-medium tracking-wide text-center">
              Sakshi K.C.
            </h2>
          </div>
          <div className="text-justify sm:text-xl">
            <p>
              KUCC is more than just a club, it’s a space to try new things, work together, and support each other along the way. 

            </p>

            <p>
              It’s about learning from one another, celebrating small wins, and turning curiosity into action.
Every effort counts, and every contribution makes a difference.

            </p>

            <p>
              This year, I hope to make KUCC even more welcoming and vibrant. Let’s keep inspiring each other, building meaningful projects, and creating a community where ideas don’t just stay on paper.

            </p>
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

          <div className="text-justify sm:text-xl grid gap-4">
            <p>
                         KUCC is more than just a club, it’s a space to try new things, work together, and support each other along the way. 

            </p>

            <p>
               It’s about learning from one another, celebrating small wins, and turning curiosity into action.
Every effort counts, and every contribution makes a difference.
            </p>

            <p>
            This year, I hope to make KUCC even more welcoming and vibrant. Let’s keep inspiring each other, building meaningful projects, and creating a community where ideas don’t just stay on paper.

            </p>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col md:space-y-4">
          <div className="md:w-[350px] lg:w-[450px] xl:w-[500px]">
            <Image
              src="/people/sakshi-kc.jpg"
              className="rounded-2xl object-contain"
              alt="Sakshi K.C., KUCC President"
              height={600}
              width={600}
            />
          </div>
          <div>
            <h1 className="text-titleColor text-xl lg:text-2xl font-semibold tracking-wide text-center">
              KUCC President
            </h1>
            <h2 className="text-subTitleColor text-lg lg:text-xl font-medium tracking-wide text-center">
              Sakshi K.C.
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
