'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Lock } from 'lucide-react'
import HoverPreview from './HoverPreview'

export type HeroLink = {
  label: string
  href: string
  external?: boolean
  disabled?: boolean
  blurb?: string
  preview?: string
  embed?: boolean
  title?: string
}

type Props = {
  leftTitle?: string
  links: HeroLink[]
  blurb: string
  emblem?: string
  rightTitle?: string
  compact?: boolean
  showPreview?: boolean // hover screenshot/iframe frame (turn off on the home page)
  showExternalIcon?: boolean // the small ↗ arrow on external links; set false to hide it on a specific page
}

export default function PageHero({
  leftTitle,
  links,
  blurb,
  emblem = '/kucc-logo.svg',
  compact = false,
  showPreview = true,
  showExternalIcon = true,
}: Props) {
  const [active, setActive] = useState<HeroLink | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <section
      className={`bg-page flex items-center py-10 ${
        compact
          ? 'lg:py-16 lg:min-h-[calc(100vh-var(--nav-h)-8rem)]'
          : 'lg:py-0 min-h-[calc(100vh-var(--nav-h))]'
      }`}
    >
      <div className="wrap w-full grid lg:grid-cols-[1fr_auto_1fr] items-center gap-8 lg:gap-[calc(var(--space)*2)]">
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={emblem}
            className="object-contain w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64"
            alt="Kathmandu University Computer Club"
            height={400}
            width={400}
            priority
          />
        </div>

        <div className="w-full lg:max-w-sm justify-self-start order-2 lg:order-1">
          <div className="rule-primary pb-1">
            <h2 className="fs-text text-brand px-3">{leftTitle}</h2>
          </div>
          {links.map((l) => {
            const hover = {
              onMouseEnter: () => setActive(l),
              onMouseLeave: () => setActive(null),
              onMouseMove: (e: React.MouseEvent) => setPos({ x: e.clientX, y: e.clientY }),
              onFocus: (e: React.FocusEvent<HTMLElement>) => {
                const r = e.currentTarget.getBoundingClientRect()
                setPos({ x: r.right - 40, y: r.top + r.height / 2 })
                setActive(l)
              },
              onBlur: () => setActive(null),
            }
            if (l.disabled) {
              return (
                <div key={l.href + l.label} aria-disabled="true" tabIndex={0} className="btn-secondary" {...hover}>
                  <span className="truncate">{l.label}</span>
                  <Lock size={18} className="shrink-0" />
                </div>
              )
            }

            // external if flagged, or if it's a full http(s) URL; anchors/paths stay in the same tab
            const isExternal = l.external ?? /^https?:\/\//i.test(l.href)

            return (
              <Link
                key={l.href + l.label}
                href={l.href}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="btn-secondary"
                {...hover}
              >
                <span className="truncate">{l.label}</span>
                {isExternal && showExternalIcon && <ArrowUpRight size={20} className="shrink-0" />}
              </Link>
            )
          })}
        </div>

        <div className="w-full lg:max-w-xs justify-self-end lg:text-right order-3">
          <p className="fs-small text-muted-c leading-snug">{active?.blurb ?? blurb}</p>
        </div>
      </div>

      {showPreview && active && (
        <HoverPreview key={active.href + active.label} link={active} x={pos.x} y={pos.y} />
      )}
    </section>
  )
}