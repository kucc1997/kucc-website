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
            alt="Abhiyan Dhakal, KUCC President"
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
              Abhiyan Dhakal
            </h2>
          </div>
          <div className="text-justify sm:text-xl">
            <p>
              As President of KUCC, I’m excited to lead us back to what really matters: technology,
              research, cool projects, and an awesome community. We’re all about getting hands-on,
              learning deeply, and having fun while we do it.
            </p>

            <p>
              This year, we’re kicking off something big. The National Conference on Computer
              Innovations, or NCCI, is a chance for all of us to show off our research, share ideas,
              and spark new innovations.
            </p>

            <p>
              Let’s dive in, build together, and make KUCC the place where ideas come alive. Ready
              to shape the future? Let’s go!
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
              As President of KUCC, I’m excited to lead us back to what really matters: technology,
              research, cool projects, and an awesome community. We’re all about getting hands-on,
              learning deeply, and having fun while we do it.
            </p>

            <p>
              This year, we’re kicking off something big. The National Conference on Computer
              Innovations, or NCCI, is a chance for all of us to show off our research, share ideas,
              and spark new innovations.
            </p>

            <p>
              Let’s dive in, build together, and make KUCC the place where ideas come alive. Ready
              to shape the future? Let’s go!
            </p>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col md:space-y-4">
          <div className="md:w-[350px] lg:w-[450px] xl:w-[500px]">
            <Image
              src="/people/Abhiyan_Dhakal.webp"
              className="rounded-2xl object-contain"
              alt="Abhiyan Dhakal, KUCC President"
              height={600}
              width={600}
            />
          </div>
          <div>
            <h1 className="text-titleColor text-xl lg:text-2xl font-semibold tracking-wide text-center">
              KUCC President
            </h1>
            <h2 className="text-subTitleColor text-lg lg:text-xl font-medium tracking-wide text-center">
              Abhiyan Dhakal
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
