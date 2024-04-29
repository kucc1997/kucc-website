import React from 'react'

export default function PresidentSection() {
  return (
    <div className="flex flex-col p-6 py-14 bg-blue-50">
      <div className="space-y-6 md:space-y-0 md:space-x-6 lg:space-x-10 xl:space-x-14 md:flex md:items-center mx-auto max-w-screen-xl">
        <div className="flex justify-center md:hidden">
          <img
            src="./nirjal_president.jpg"
            className="rounded-2xl object-contain"
            alt="Nirjal Bhurtel, KUCC President"
          />
        </div>
        <div className="flex-col space-y-3 md:hidden">
          <div>
            <h1 className="text-blue-900 text-xl font-semibold tracking-wide text-center">
              KUCC President
            </h1>
            <h2 className="text-gray-700 text-lg font-medium tracking-wide text-center">
              Nirjal Bhurtel
            </h2>
          </div>
          <p className="text-justify sm:text-xl">
            Welcome to Kathmandu University Computer Club. Our heartfelt goal is to provide a
            platform for students to advance their technical and soft skills, grow their confidence,
            and bridge the gap between academia and industry. KUCC fulfills its mission by
            conducting several events, talk shows, hackathons, workshops, and much more bringing
            together everyone under the same roof. We are proud to have a community of talented
            students, alumni, faculty, staff, and friends who care about this club like no other.
            This is what makes our community diverse and inclusive. Let’s all strive to live up to
            our motto “KUCC for all since 1997”.
          </p>
        </div>
        <div className="hidden md:flex md:flex-col md:space-y-6 md:items-center">
          <h1 className=" text-blue-900 text-3xl lg:text-4xl font-bold tracking-wider">
            OUR PRESIDENT
          </h1>
          <p className="text-justify md:text-xl lg:text-2xl">
            Welcome to Kathmandu University Computer Club. Our heartfelt goal is to provide a
            platform for students to advance their technical and soft skills, grow their confidence,
            and bridge the gap between academia and industry. KUCC fulfills its mission by
            conducting several events, talk shows, hackathons, workshops, and much more bringing
            together everyone under the same roof. We are proud to have a community of talented
            students, alumni, faculty, staff, and friends who care about this club like no other.
            This is what makes our community diverse and inclusive. Let’s all strive to live up to
            our motto “KUCC for all since 1997”.
          </p>
        </div>
        <div className="hidden md:flex md:flex-col md:space-y-4">
          <div className="md:w-[350px] lg:w-[450px] xl:w-[500px]">
            <img
              src="./nirjal_president.jpg"
              className="rounded-2xl object-contain"
              alt="Nirjal Bhurtel, KUCC President"
            />
          </div>
          <div>
            <h1 className="text-blue-900 text-xl lg:text-2xl font-semibold tracking-wide text-center">
              KUCC President
            </h1>
            <h2 className="text-gray-700 text-lg lg:text-xl font-medium tracking-wide text-center">
              Nirjal Bhurtel
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
