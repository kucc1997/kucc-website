import React, { useEffect, useRef, useState } from 'react'
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

  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <div className="flex w-full p-4 h-16 md:p-10 justify-between items-center bg-slate-200">
      {/* logo */}
      <div>
        <Link to="/" className="cursor-pointer">
          <img
            src={'kucc-logo.png'}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 object-cover"
            alt="logo"
          />
        </Link>
      </div>

      {/* mobile view */}
      <div className="flex items-center lg:hidden" ref={sidebarRef}>
        {/* hambuger menu */}
        <button
          className="flex z-50 justify-center relative cursor-pointer items-center p-2 flex-col space-y-1 aspect-square hover:bg-[#0002] rounded transition-all"
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

        <div
          className={`flex space-y-8 transition origin-right z-40 h-screen bg-white fixed top-0 right-0 w-2/3 sm:w-1/3 md:w-2/4 shadow-xl ${open ? 'scale-x-100' : 'scale-x-0'}`}
        >
          <div className="flex-col mt-28 px-8 space-y-8 font-sans list-none">
            <li className="text-teal-600 font-semibold transition cursor-pointer border-b-2 items-center">
              <Link to="/" className="flex gap-4">
                <Home />
                HOME
              </Link>
            </li>
            {/* our team dropdown */}
            <li>
              <div className="text-teal-600 font-semibold transition-all cursor-pointer relative md:group border-b-2 flex gap-4">
                <Users />
                OUR TEAM{' '}
                <button className="flex rounded-full" onClick={() => setOurTeam(!ourTeam)}>
                  {!ourTeam ? (
                    <ChevronDown className="bg-teal-100 rounded-md" />
                  ) : (
                    <ChevronUp className="bg-teal-100 rounded-md" />
                  )}
                </button>
              </div>
              {ourTeam && (
                <ul className="w-full space-y-2 z-10 p-[20px] list-none">
                  <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-800">
                    <Link to="executive-committee">EXECUTIVE COMMITTEE</Link>
                  </li>
                  <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-800">
                    <Link to="advisory-board">ADVISORY BOARD</Link>
                  </li>
                  <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-800">
                    <Link to="community-coordinators">COMMUNITY COORDINATORS</Link>
                  </li>
                  <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-800">
                    <Link to="documentation-teams">DOCUMENTATION TEAM</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* publications dropdown */}
            <li>
              <div className="text-teal-600 font-semibold transition cursor-pointer relative md:group border-b-2 flex gap-4">
                <NotebookPen />
                PUBLICATIONS{' '}
                <button className="flex rounded-full" onClick={() => setOurPub(!ourPub)}>
                  {!ourPub ? (
                    <ChevronDown className="bg-teal-100 rounded-md" />
                  ) : (
                    <ChevronUp className="bg-teal-100 rounded-md" />
                  )}
                </button>
              </div>
              <ul
                className={`space-y-2 z-10 p-[20px] origin-top list-none ${ourPub ? 'scale-y-100 static' : 'scale-y-0 absolute'}`}
              >
                <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-800">
                  <Link to="it-express">IT EXPRESS</Link>
                </li>
                <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-800">
                  <Link to="blogs">STUDENT BLOGS</Link>
                </li>
              </ul>
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
      </div>

      {/* desktop view */}
      <div className="hidden lg:flex items-center text-sm xl:text-lg space-x-3 xl:space-x-4 list-none">
        <li className="text-teal-600 font-semibold transition cursor-pointer hover:text-slate-400">
          <Link to="/">HOME</Link>
        </li>

        {/* our team dropdown */}
        <li className="text-teal-600 font-semibold transition-all cursor-pointer relative group hover:text-slate-400">
          <div className="flex items-center gap-2">
            OUR TEAM <ChevronDown className="bg-teal-100 rounded-md" />
          </div>
          <ul className="hidden space-y-3 w-56 absolute z-10 p-[20px] list-none bg-[rgb(44,43,43)] text-[#fff] group-hover:block transform duration-700">
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

        {/* publications dropdown */}
        <li className="text-teal-600 font-semibold transition cursor-pointer relative group hover:text-slate-400">
          <div className="flex items-center gap-2">
            PUBLICATIONS <ChevronDown className="bg-teal-100 rounded-md" />
          </div>
          <ul className="hidden space-y-3 w-56 absolute z-10 p-[20px] list-none bg-[rgb(44,43,43)] text-[#fff] group-hover:block">
            <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-200">
              <Link to="it-express">IT EXPRESS</Link>
            </li>
            <li className="cursor-pointer border-b border-gray-500 text-base hover:text-teal-200">
              <Link to="blogs">STUDENT BLOGS</Link>
            </li>
          </ul>
        </li>
        <li className="text-teal-600 font-semibold hover:text-slate-400">
          <Link to="news-and-notices">NEWS AND NOTICES</Link>
        </li>
        <li className="text-teal-600 font-semibold hover:text-slate-400">
          <Link to="events">EVENTS</Link>
        </li>
        <li className="text-teal-600 font-semibold hover:text-slate-400">
          <Link to="code-of-conduct">CODE OF CONDUCT</Link>
        </li>
        <li className="text-teal-600 font-semibold hover:text-slate-400">
          <Link to="contact">CONTACT</Link>
        </li>
        <li className="text-teal-600 font-semibold hover:text-slate-400">
          <Link to="register">APPLY TO BE A MEMBER</Link>
        </li>
      </div>
    </div>
  )
}

export default NavBar
