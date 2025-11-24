import React from 'react'
import Image from 'next/image'
import { Metadata } from 'next'

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
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex md:flex-col md:space-y-6 md:items-center">
          <h1 className=" text-titleColor text-3xl lg:text-4xl font-bold tracking-wider">
            OUR PRESIDENT
          </h1>

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
    </div>
  )
}
