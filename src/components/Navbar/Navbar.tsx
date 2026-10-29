'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { socials } from '@/data/socials'

const navItems = [
  { name: 'Events', link: '/events' },
  { name: 'Projects', link: '/projects' },
  { name: 'Publications', link: '/publications' },
  { name: 'Team', link: '/team' },
  { name: 'Join KUCC', link: '/join' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (open && sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])

  const isHome = pathname === '/'
  const isActive = (l: string) => pathname.startsWith(l)
  const linkCls = (l: string) => `px-4 py-2 fs-nav hover-brand ${isActive(l) ? 'text-brand' : 'text-muted-c'}`
  // Invisible hit area: full nav height, ~px-4 wide. Looks like plain text, but the whole box is the link.
  const logoCls = `inline-flex h-full items-center px-4 fs-nav font-extrabold hover-brand outline-none focus-visible:text-[var(--color-primary)] ${
    isHome ? 'text-brand' : 'text-muted-c'
  }`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-page" style={{ height: 'var(--nav-h)' }}>
      <div className="wrap h-full grid grid-cols-[1fr_auto_1fr] items-center">
        <Link href="/" className={`-ml-4 justify-self-start ${logoCls}`} aria-label="KUCC home">
          KUCC
        </Link>

        {/* Center links */}
        <div className="hidden lg:flex items-center justify-center">
          {navItems.map((item) => (
            <Link key={item.link} href={item.link} className={linkCls(item.link)}>
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: social icons, theme toggle, mobile menu button */}
        <div className="col-start-3 flex items-center justify-self-end gap-1 sm:gap-2">
          <div className="hidden sm:flex items-center">
            {socials.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                title={name}
                className="p-2 text-muted-c hover-brand"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-brand" aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer (no animation) */}
      {open && (
        <>
          <div className="lg:hidden fixed inset-0 bg-black/40 -z-10" onClick={() => setOpen(false)} />
          <div ref={sidebarRef} className="lg:hidden fixed top-0 right-0 h-screen w-[80vw] max-w-xs bg-page z-50">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 h-16">
                <Link href="/" className={logoCls} aria-label="KUCC home">
                  KUCC
                </Link>
                <button onClick={() => setOpen(false)} className="p-2 text-brand" aria-label="Close menu">
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-4">
                {navItems.map((item) => (
                  <Link key={item.link} href={item.link} className={`block ${linkCls(item.link)} py-3`}>
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-1 px-4 pb-6">
                {socials.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="p-2 text-muted-c hover-brand"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}