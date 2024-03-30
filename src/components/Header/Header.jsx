import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { Users } from 'lucide-react'
import { NotebookPen } from 'lucide-react'
import { Newspaper } from 'lucide-react'
import { CalendarSearch } from 'lucide-react'
import { BookKey } from 'lucide-react'
import { Contact } from 'lucide-react'
import { BadgeCheck } from 'lucide-react'
import { ChevronDown } from 'lucide-react'
import { ChevronUp } from 'lucide-react'

const NavBar = () => {
  const [open, setOpen] = useState('')
  const [ourTeam, setOurTeam] = useState('')
  const [ourPub, setOurPub] = useState('')
  return (
    <div className="flex w-full p-4 h-16 md:p-10 justify-between items-center bg-slate-200">
      <div>
        <Link to="/" className="cursor-pointer">
          <img src={'kucc-logo.png'} className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 object-cover" alt="logo" />
        </Link>
      </div>
      <div className="flex items-center lg:hidden">
        <button
          className="flex z-50 justify-center relative cursor-pointer items-center flex-col space-y-1"
          onClick={() => setOpen(!open)}
        >
          <div
            className={`w-6 h-[2px] bg-teal-600 rounded block transition-all ease-out duration-300 ${
              open ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'
            }`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-teal-600 rounded block transition-all ease-out duration-300 ${
              open ? 'hidden' : 'flex'
            }`}
          ></div>
          <div
            className={`w-6 h-[2px] bg-teal-600 rounded block transition-all ease-out duration-300 ${
              open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}
          ></div>
        </button>
        {open && (
          <div className="flex space-y-8 z-40 h-screen bg-white absolute top-0 right-0 w-2/3 sm:w-1/3 md:w-2/4 shadow-xl">
            <div className="flex-col mt-28 px-8 space-y-8 font-sans list-none">
              <li className="text-teal-600 font-semibold transition cursor-pointer border-b-2 items-center">
                <Link to="/" className="flex gap-4">
                  <Home />
                  HOME
                </Link>
              </li>
              <li className="text-teal-600 font-semibold transition-all cursor-pointer relative md:group border-b-2 flex gap-4">
                <Users />
                OUR TEAM{' '}
                <button className="flex rounded-full" onClick={() => setOurTeam(!ourTeam)}>
                  {!ourTeam ? (
                    <ChevronDown className="bg-teal-100 rounded-md" />
                  ) : (
                    <ChevronUp className="bg-teal-100 rounded-md" />
                  )}
                </button>
                {ourTeam && (
                  <ul className="mt-8 w-full space-y-2 absolute z-10 p-[20px] list-none bg-[rgb(44,43,43)] text-[#fff]">
                    <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-200">
                      <Link to="executive-committee">EXECUTIVE COMMITTEE</Link>
                    </li>
                    <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-200">
                      <Link to="advisory-board">ADVISORY BOARD</Link>
                    </li>
                    <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-200">
                      <Link to="community-coordinators">COMMUNITY COORDINATORS</Link>
                    </li>
                    <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-200">
                      <Link to="documentation-teams">DOCUMENTATION TEAM</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="text-teal-600 font-semibold transition cursor-pointer relative md:group border-b-2 flex gap-4">
                <NotebookPen />
                PUBLICATIONS{' '}
                <button className="flex rounded-full" onClick={() => setOurPub(!ourPub)}>
                  {!ourPub ? (
                    <ChevronDown className="bg-teal-100 rounded-md" />
                  ) : (
                    <ChevronUp className="bg-teal-100 rounded-md" />
                  )}
                </button>
                {ourPub &&(
                           <ul className="space-y-2 w-full mt-8 absolute z-10 p-[20px] list-none bg-[rgb(44,43,43)] text-[#fff]">
                           <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-200">
                             <Link to="it-express">IT EXPRESS</Link>
                           </li>
                           <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-200">
                             <Link to="blogs">STUDENT BLOGS</Link>
                           </li>
                         </ul>
                )}
              </li>
              <li className="text-teal-600 font-semibold border-b-2">
                <Link to="news-and-notices" className="flex gap-4">
                  <Newspaper />
                  NEWS AND NOTICES
                </Link>
              </li>
              <li className="text-teal-600 font-semibold border-b-2">
                <Link to="events" className="flex gap-4">
                  <CalendarSearch />
                  EVENTS
                </Link>
              </li>
              <li className="text-teal-600 font-semibold border-b-2">
                <Link to="code-of-conduct" className="flex gap-4">
                  <BookKey />
                  CODE OF CONDUCT
                </Link>
              </li>
              <li className="text-teal-600 font-semibold border-b-2">
                <Link to="contact" className="flex gap-4">
                  <Contact />
                  CONTACT
                </Link>
              </li>
              <li className="text-teal-600 font-semibold border-b-2">
                <Link to="register" className="flex gap-4">
                  <BadgeCheck />
                  APPLY TO BE A MEMBER
                </Link>
              </li>
            </div>
          </div>
        )}
      </div>
      <div className="hidden lg:flex items-center text-sm xl:text-lg space-x-3 xl:space-x-4 list-none">
        <li className="text-teal-600 font-semibold transition cursor-pointer hover:text-gray-500">
          <Link to="/">HOME</Link>
        </li>
        <li className="text-teal-600 font-semibold transition-all cursor-pointer relative group hover:text-gray-500">
          <div className='flex items-center gap-2'>OUR TEAM <ChevronDown className="bg-teal-100 rounded-md"/></div>
          <ul className="hidden mt-1 space-y-3 w-56 absolute z-10 p-[20px] list-none bg-[rgb(44,43,43)] text-[#fff] group-hover:block transform duration-700">
            <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-200">
              <Link to="executive-committee">EXECUTIVE COMMITTEE</Link>
            </li>
            <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-200">
              <Link to="advisory-board">ADVISORY BOARD</Link>
            </li>
            <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-200">
              <Link to="community-coordinators">COMMUNITY COORDINATORS</Link>
            </li>
            <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-200">
              <Link to="documentation-teams">DOCUMENTATION TEAM</Link>
            </li>
          </ul>
        </li>
        <li className="text-teal-600 font-semibold transition cursor-pointer relative group hover:text-gray-500">
        <div className='flex items-center gap-2'>PUBLICATIONS <ChevronDown className="bg-teal-100 rounded-md"/></div>
          <ul className="hidden space-y-3 w-56 absolute z-10 p-[20px] list-none bg-[rgb(44,43,43)] text-[#fff] group-hover:block">
            <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-200">
              <Link to="it-express">IT EXPRESS</Link>
            </li>
            <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-200">
              <Link to="blogs">STUDENT BLOGS</Link>
            </li>
          </ul>
        </li>
        <li className="text-teal-600 font-semibold hover:text-gray-500">
          <Link to="news-and-notices">NEWS AND NOTICES</Link>
        </li>
        <li className="text-teal-600 font-semibold hover:text-gray-500">
          <Link to="events">EVENTS</Link>
        </li>
        <li className="text-teal-600 font-semibold hover:text-gray-500">
          <Link to="code-of-conduct">CODE OF CONDUCT</Link>
        </li>
        <li className="text-teal-600 font-semibold hover:text-gray-500">
          <Link to="contact">CONTACT</Link>
        </li>
        <li className="text-teal-600 font-semibold hover:text-gray-500">
          <Link to="register">APPLY TO BE A MEMBER</Link>
        </li>
      </div>
    </div>
  )
}

export default NavBar
