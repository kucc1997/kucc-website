'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Home, UsersRound, Users, NotebookPen, Contact, BadgeCheck, ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [ourTeam, setOurTeam] = useState(false)
  const [ourPub, setOurPub] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      icon: <Home size={18} />,
    },
    {
      name: 'Our Team',
      icon: <Users size={18} />,
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
      ],
    },
    {
      name: 'Communities',
      link: '/communities',
      icon: <UsersRound size={18} />,
    },
    {
      name: 'Publications',
      open: ourPub,
      setOpen: setOurPub,
      icon: <NotebookPen size={18} />,
      subItems: [
        {
          name: 'IT Express',
          link: '/it-express',
        },
      ],
    },
    {
      name: 'Contact',
      icon: <Contact size={18} />,
      link: '/contact',
    },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg shadow-accentBlue/5 border-b border-gray-800' 
          : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src={'/kucc-logo.png'}
                className="w-12 h-12 md:w-14 md:h-14 object-contain transition-transform group-hover:scale-105"
                alt="KUCC Logo"
                height={56}
                width={56}
                priority
              />
            </div>
            <span className="hidden sm:block bg-gradient-to-r from-accentBlue to-purple-400 bg-clip-text text-transparent font-bold text-lg md:text-xl">
              KUCC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.subItems ? (
                  <div>
                    <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-300 rounded-lg hover:text-accentBlueLight hover:bg-gray-800 transition-all">
                      {item.name}
                      <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-gray-800 rounded-lg shadow-xl shadow-accentBlue/10 border border-gray-700 overflow-hidden backdrop-blur-md">
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.link}
                            className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-700 hover:text-accentBlueLight transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  item.useExternal ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-300 rounded-lg hover:text-accentBlueLight hover:bg-gray-800 transition-all"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      href={item.link}
                      className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-gray-300 rounded-lg hover:text-accentBlueLight hover:bg-gray-800 transition-all"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <a
              href="https://forms.gle/Y5vHobrCDVx2fPMaA"
              target="_blank"
              rel="noreferrer"
              className="ml-4 flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-accentBlue to-purple-600 rounded-lg hover:from-accentBlueDark hover:to-purple-700 transition-all shadow-lg shadow-accentBlue/25 hover:shadow-xl hover:shadow-accentBlue/40"
            >
              <BadgeCheck size={18} />
              Join KUCC
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-all"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={sidebarRef}
        className={`lg:hidden fixed top-0 right-0 h-screen w-80 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl shadow-accentBlue/10 border-l border-gray-700 transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <Image
                src={'/kucc-logo.png'}
                className="w-10 h-10 object-contain"
                alt="KUCC Logo"
                height={40}
                width={40}
              />
              <span className="bg-gradient-to-r from-accentBlue to-purple-400 bg-clip-text text-transparent font-bold text-lg">KUCC</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-all"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto py-6 px-4">
            <nav className="space-y-1">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.subItems ? (
                    <div>
                      <button
                        onClick={() => item.setOpen(!item.open)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-300 font-medium rounded-lg hover:bg-gray-800 transition-all"
                      >
                        <span className="flex items-center gap-3">
                          {item.icon}
                          {item.name}
                        </span>
                        <ChevronDown 
                          size={18} 
                          className={`transition-transform ${item.open ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-200 ${
                          item.open ? 'max-h-96 mt-1' : 'max-h-0'
                        }`}
                      >
                        <div className="ml-4 pl-4 border-l-2 border-gray-700 space-y-1">
                          {item.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.link}
                              onClick={() => setOpen(false)}
                              className="block px-4 py-2 text-sm text-gray-400 hover:text-accentBlueLight hover:bg-gray-800 rounded-lg transition-all"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    item.useExternal ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 font-medium rounded-lg hover:bg-gray-800 transition-all"
                      >
                        {item.icon}
                        {item.name}
                      </a>
                    ) : (
                      <Link
                        href={item.link}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 text-gray-300 font-medium rounded-lg hover:bg-gray-800 transition-all"
                      >
                        {item.icon}
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Footer - CTA */}
          <div className="p-6 border-t border-gray-700">
            <a
              href="https://forms.gle/Y5vHobrCDVx2fPMaA"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-accentBlue to-purple-600 rounded-lg hover:from-accentBlueDark hover:to-purple-700 transition-all shadow-lg shadow-accentBlue/25"
            >
              <BadgeCheck size={18} />
              Join KUCC
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  )
}
