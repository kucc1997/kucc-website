import React from 'react'
import { Link } from 'react-router-dom'

export default function KuccDescription() {
  return (
    <div className="flex-col p-5 items-center">
      <div className="lg:flex space-y-4">
        <div className="flex justify-center">
          <img src="/kucc-logo.png" className="object-contain" />
        </div>

        <div className="flex-col space-y-6">
          <div className='space-y-4'>
          <h2 className="text-[#033b4a] font-semibold text-base sm:text-lg md:text-xl"> Since 1997, The oldest student club</h2>
          <h1 className="text-[#00baa3] text-lg sm:text-2xl md:text-3xl  font-bold"> Kathmandu University Computer Club</h1>
          <p className="text-justify">
            KUCC is a non-profit, independent club formed by students of the Department of Computer
            Science and Engineering in the year 1997. Being registered as the first club of
            Kathmandu University with the registration number 001/1997 in the Student Welfare, KUCC
            has worked in the field of ICT for twenty years. KUCC has more than 1000 members from
            Department of Computer Science and Engineering. Kathmandu University Computer Club
            (KUCC) is a student wing of the Department of Computer Science and Engineering which was
            established with a goal to engage and aware students in the technological research and
            development, most prominently in the ICT field and at the same time provides a common
            platform for young and aspiring individuals to exhibit their ideas. Every year KUCC
            cooperates and organizes numerous competitive as well as non-competitive events like
            seminars, exhibitions, hackathon, skill development program and tutorial sessions to
            name a few, with an unwavering intention to promote, develop and encourage emerging
            technological advancement.
          </p>
          </div>
          <div>
            <Link to={'contact'}>
              <button className="p-4 bg-[#00baa3] text-white rounded-xl hover:bg-transparent hover:text-black hover:border hover:border-violet-950 hover:delay-100">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
