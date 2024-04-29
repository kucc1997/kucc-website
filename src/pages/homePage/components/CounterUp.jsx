import React from 'react'
import CountUp from 'react-countup'
import { useState } from 'react'
import ScrollTrigger from 'react-scroll-trigger'

export default function CounterUp() {
  const [on, setOn] = useState(false)

  return (
    <ScrollTrigger
      onEnter={() => {
        setOn(true)
      }}
      onExit={() => {
        setOn(true)
      }}
    >
      <div className="flex justify-around items-center h-[30vh] bg-sky-800 text-white">
        {/* mobile view upto sm */}
        <div className="space-y-10 justify-center md:hidden">
          <div className="flex-col font-bold tracking-wider font-sans">
            {on && (
              <CountUp
                suffix="+"
                start={0}
                end={120}
                duration={1.8}
                delay={0}
                className="flex text-3xl sm:text-4xl justify-center"
              />
            )}
            <div className="flex text-xl sm:text-2xl justify-center">
              {' '}
              EVENTS
            </div>
          </div>
          <div className="flex-col font-bold tracking-wider font-sans">
            {on && (
              <CountUp
                suffix="+"
                start={0}
                end={10}
                duration={1.8}
                delay={0}
                className="flex text-3xl sm:text-4xl justify-center"
              />
            )}
            <div className="flex text-xl sm:text-2xl justify-center">
              {' '}
              COMMUNITIES
            </div>
          </div>
        </div>
        <div className="space-y-10 justify-center md:hidden">
          <div className="flex-col font-bold tracking-wider font-sans">
            {on && (
              <CountUp
                suffix="+"
                start={0}
                end={500}
                duration={1.8}
                delay={0}
                className="flex text-3xl sm:text-4xl justify-center"
              />
            )}
            <div className="flex text-xl sm:text-2xl justify-center">
              {' '}
              WORKSHOPS
            </div>
          </div>
          <div className="flex-col font-bold tracking-wider font-sans">
            {on && (
              <CountUp
                suffix="+"
                start={0}
                end={1000}
                duration={1.8}
                delay={0}
                className="flex text-3xl sm:text-4xl justify-center"
              />
            )}
            <div className="flex text-xl sm:text-2xl justify-center">
              {' '}
              MEMBERS
            </div>
          </div>
        </div>

        {/* medium view upto large */}
          <div className=" hidden md:flex flex-col font-bold tracking-wider font-sans">
            {on && (
              <CountUp
                suffix="+"
                start={0}
                end={120}
                duration={1.8}
                delay={0}
                className="flex md:text-4xl lg:text-5xl justify-center"
              />
            )}
            <div className="flex md:text-2xl lg:text-3xl justify-center">
              {' '}
              EVENTS
            </div>
          </div>
          <div className="hidden md:flex flex-col font-bold tracking-wider font-sans">
            {on && (
              <CountUp
                suffix="+"
                start={0}
                end={10}
                duration={1.8}
                delay={0}
                className="flex md:text-4xl lg:text-5xl justify-center"
              />
            )}
            <div className="flex md:text-2xl lg:text-3xl justify-center">
              {' '}
              COMMUNITIES
            </div>
          </div>
        <div className="hidden md:flex flex-col font-bold tracking-wider font-sans">
          {on && (
            <CountUp
              suffix="+"
              start={0}
              end={500}
              duration={1.8}
              delay={0}
              className="flex md:text-4xl lg:text-5xl justify-center"
            />
          )}
          <div className="flex md:text-2xl lg:text-3xl justify-center">
            {' '}
            WORKSHOPS
          </div>
        </div>
        <div className="hidden md:flex flex-col font-bold tracking-wider font-sans">
          {on && (
            <CountUp
              suffix="+"
              start={0}
              end={1000}
              duration={1.8}
              delay={0}
              className="flex md:text-4xl lg:text-5xl justify-center"
            />
          )}
          <div className="flex md:text-2xl lg:text-3xl justify-center">
            {' '}
            MEMBERS
          </div>
        </div>
    </div>
    </ScrollTrigger>
  )
}
