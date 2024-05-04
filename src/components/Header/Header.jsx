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

  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <Home />,
    },
    {
      name: 'Our Team',
      icon: <Users />,
      open: ourTeam,
      setOpen: setOurTeam,
      subItems: [
        {
          name: 'Executive Committee',
          link: '/executive-committee',
        },
        {
          name: 'Advisory Board',
          link: '/advisory-board',
        },
        // {
        //   name: 'Community Coordinators',
        //   link: '/community-coordinators',
        // },
        // {
        //   name: 'Documentation Team',
        //   link: '/documentation-teams',
        // },
      ],
    },
    {
      name: 'Publications',
      open: ourPub,
      setOpen: setOurPub,
      icon: <NotebookPen />,
      subItems: [
        {
          name: 'IT Express',
          link: '/it-express',
        },
        // {
        //   name: 'Student Blogs',
        //   link: '/blogs',
        // },
      ],
    },
    // {
    //   name: 'News and Notices',
    //   icon: <Newspaper />,
    //   link: '/news-and-notices',
    // },
    // {
    //   name: 'Events',
    //   icon: <CalendarSearch />,
    //   link: '/events',
    // },
    {
      name: 'Contact',
      icon: <Contact />,
      link: '/contact',
    },
    {
      name: 'Apply to be a Member',
      icon: <BadgeCheck />,
      link: 'https://forms.gle/Y5vHobrCDVx2fPMaA',
      useExternal: true,
    },
  ]

  return (
    <div className="flex w-full p-4 h-16 md:p-10 justify-between items-center bg-baseBackground z-50">
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
          className="flex z-50 justify-center relative cursor-pointer items-center p-2 flex-col space-y-1 aspect-square hover:bg-hoverBgColor rounded transition-all"
          onClick={() => setOpen(!open)}
        >
          <div
            className={`w-6 h-[2px] text-titleColor rounded block transition-all ease-out duration-300 ${
              open ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'
            }`}
          ></div>
          <div
            className={`w-6 h-[2px] text-titleColor rounded block transition-all ease-out duration-300 ${
              open ? 'hidden' : 'flex'
            }`}
          ></div>
          <div
            className={`w-6 h-[2px] text-titleColor rounded block transition-all ease-out duration-300 ${
              open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}
          ></div>
        </button>

        <div
          className={`flex space-y-8 transition origin-right z-40 h-screen bg-white fixed top-0 right-0 w-2/3 sm:w-1/3 md:w-2/4 shadow-xl ${
            open ? 'scale-x-100' : 'scale-x-0'
          }`}
        >
          <div className="flex-col mt-28 px-8 space-y-8 font-sans list-none">
            {navItems.map((item, index) => {
              return (
                <div key={index}>
                  {item.subItems ? (
                    // if item has subItems
                    <li>
                      <div className="text-titleColor font-semibold transition-all cursor-pointer relative md:group border-b-2 flex gap-4 hover:text-hoverTextColor">
                        {item.icon}
                        {item.name}
                        <button
                          className="flex rounded-full"
                          onClick={() => item.setOpen(!item.open)}
                        >
                          {!item.open ? (
                            <ChevronDown className="bg-secondBackground rounded-md" />
                          ) : (
                            <ChevronUp className="bg-secondBackground rounded-md" />
                          )}
                        </button>
                      </div>
                      <ul
                        className={`space-y-2 z-10 origin-top list-none transition ${
                          item.open ? 'scale-y-100 p-[20px]' : 'scale-y-0 h-0 p-0 duration-0'
                        }`}
                      >
                        {item.subItems.map((subItem, index) => {
                          return (
                            <li
                              key={index}
                              className="cursor-pointer border-b border-navSubitemBorder text-base hover:text-counterBackground"
                            >
                              <Link to={subItem.link} onClick={() => setOpen(false)}>
                                {subItem.name}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </li>
                  ) : (
                    <li className="text-titleColor font-semibold transition cursor-pointer border-b-2 items-center hover:text-hoverTextColor">
                      {/* if item has no subItems */}
                      {item.useExternal ? (
                        <a href={item.link} target="_blank" rel="noreferrer" className="flex gap-4">
                          {item.icon}
                          {item.name}
                        </a>
                      ) : (
                        <Link to={item.link} className="flex gap-4" onClick={() => setOpen(false)}>
                          {item.icon}
                          {item.name}
                        </Link>
                      )}
                    </li>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* desktop view */}
      <div className="hidden lg:flex items-center text-sm xl:text-lg space-x-3 lg:space-x-10 list-none">
        {navItems.map((item, index) => {
          return (
            <>
              {item.subItems ? (
                <li
                  className="text-titleColor font-semibold transition-all cursor-pointer relative group hover:text-hoverTextColor"
                  key={index}
                >
                  <div className="flex items-center gap-2">
                    {item.name} <ChevronDown className="bg-secondBackground rounded-md" />
                  </div>
                  <ul className="hidden space-y-3 w-56 absolute z-10 p-[20px] list-none bg-navSubitemsBg text-textOnDarkBg group-hover:block transform duration-700">
                    {item.subItems.map((subItem, index) => {
                      return (
                        <li
                          className="cursor-pointer border-b border-navSubitemBorder text-base hover:text-counterBackground"
                          key={index}
                        >
                          <Link to={subItem.link}>{subItem.name}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </li>
              ) : (
                <li
                  key={index}
                  className="text-titleColor font-semibold transition cursor-pointer hover:text-hoverTextColor"
                >
                  {item.useExternal ? (
                    <a href={item.link} target="_blank" rel="noreferrer" className="flex gap-2">
                      {item.name}
                    </a>
                  ) : (
                    <Link to={item.link} className="flex gap-2" onClick={() => setOpen(false)}>
                      {item.name}
                    </Link>
                  )}
                </li>
              )}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default NavBar
