'use client'

import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent } from 'react'
import {
  ArrowUpRight,
  BookMarked,
  Brain,
  Cloud,
  Minus,
  Paintbrush,
  PanelTop,
  Smartphone,
  Square,
  SquareTerminal,
  X,
  type LucideIcon,
} from 'lucide-react'

type Community = {
  name: string
  icon: LucideIcon // used in the tab list
  blurb: string // short description
  tags: string[]
  href?: string // join link; falls back to JOIN_FALLBACK
}

// Set to false when joining opens up.
const JOINING_DISABLED = true

// Where "Join community" goes when a community has no href of its own.
const JOIN_FALLBACK = '#contact'

// Time each community stays on screen before moving to the next (ms).
const AUTO_ADVANCE_MS = 2000

// After the user clicks a tab or uses the keyboard, auto-rotation stays off
// until this much time passes with no further interaction (ms).
const RESUME_AFTER_MS = 10000

const COMMUNITIES: Community[] = [
  {
    name: 'Documentation Community',
    icon: BookMarked,
    blurb:
      'Enhance your documentation skills through workshops, research paper writing, and collaborative projects to streamline processes and impact.',
    tags: ['writing', 'research', 'docs'],
  },
  {
    name: 'Machine Learning Community',
    icon: Brain,
    blurb:
      'Advance your skills in machine learning and data science with dynamic workshops, collaborative projects, and career opportunities.',
    tags: ['ai', 'data', 'python'],
  },
  {
    name: 'Web Development Community',
    icon: PanelTop,
    blurb:
      'Master modern web technologies through hands-on workshops, collaborative projects, and mentorship. Build responsive and dynamic web applications.',
    tags: ['web', 'react', 'frontend'],
  },
  {
    name: 'Design Community',
    icon: Paintbrush,
    blurb:
      'Explore creative design through workshops, hands-on activities, and networking with design professionals. All skill levels welcome!',
    tags: ['design', 'ui', 'ux'],
  },
  {
    name: 'Cloud Community',
    icon: Cloud,
    blurb:
      'Dive into cloud computing with AWS, Azure, and GCP. Learn infrastructure, deployment, and cloud-native technologies through practical workshops.',
    tags: ['cloud', 'aws', 'devops'],
  },
  {
    name: 'Mobile App Development Community',
    icon: Smartphone,
    blurb:
      'Build cross-platform mobile applications with Flutter, React Native, and native technologies. Engage in workshops and collaborative projects.',
    tags: ['mobile', 'flutter', 'react-native'],
  },
  {
    name: 'Cybersecurity & Networking Community',
    icon: SquareTerminal,
    blurb:
      'Gain practical insights into networking and cybersecurity through workshops and interactive sessions.',
    tags: ['security', 'networking', 'ctf'],
  },
]

export default function Communities() {
  const [index, setIndex] = useState(0)
  const [hoveringTabs, setHoveringTabs] = useState(false) // mouse is over the tab buttons
  const [stopped, setStopped] = useState(false) // user interacted recently
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const resumeTimer = useRef<number | null>(null)
  const active = COMMUNITIES[index]
  const joinHref = active.href ?? JOIN_FALLBACK
  const external = /^https?:\/\//i.test(joinHref)
  const paused = hoveringTabs || stopped

  // Auto-advance to the next community, looping back to the first.
  useEffect(() => {
    if (paused) return
    const id = window.setTimeout(() => {
      setIndex((i) => (i + 1) % COMMUNITIES.length)
    }, AUTO_ADVANCE_MS)
    return () => window.clearTimeout(id)
  }, [index, paused])

  // Clean up the resume timer on unmount.
  useEffect(() => {
    return () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current)
    }
  }, [])

  // Called on any click / key press: stop rotation, then resume after a quiet period.
  const markInteraction = () => {
    setStopped(true)
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current)
    resumeTimer.current = window.setTimeout(() => setStopped(false), RESUME_AFTER_MS)
  }

  const pick = (i: number) => {
    setIndex(i)
    markInteraction()
  }

  const select = (i: number) => {
    pick(i)
    tabs.current[i]?.focus()
  }

  const onKeyDown = (e: KeyboardEvent) => {
    const last = COMMUNITIES.length - 1
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault()
      select(index === last ? 0 : index + 1)
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault()
      select(index === 0 ? last : index - 1)
    } else if (e.key === 'Home') {
      e.preventDefault()
      select(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      select(last)
    }
  }

  return (
    <div className="wrap py-16">
      {/* section heading */}
      <div className=" pb-1 mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
        <h2 className="text-brand text-3xl font-semibold sm:text-4xl">Communities</h2>
        <p className="fs-small text-muted-c px-3 leading-snug lg:max-w-md lg:text-right">
          Join our communities
        </p>
      </div>

      {/* the window */}
      <div className="border border-frame bg-page">
        <div className="grid lg:grid-cols-[19rem_1fr]">
          {/* left column: title bar sits above the tabs only */}
          <div className="border-line flex min-w-0 flex-col border-b lg:border-r lg:border-b-0">
            {/* title bar */}
            <div className="bg-brand text-onbrand flex items-center justify-between gap-4 px-3 py-2">
              <span className="fs-small truncate font-semibold">{active.name}</span>
              <div className="flex shrink-0 items-center gap-3" aria-hidden="true">
                <Minus size={16} />
                <Square size={13} />
                <X size={16} />
              </div>
            </div>

            {/* tabs: vertical list on desktop, horizontal scroller on mobile.
                Hovering here pauses rotation; clicking stops it for a while. */}
            <div
              role="tablist"
              aria-label="Communities"
              aria-orientation="vertical"
              onKeyDown={onKeyDown}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setHoveringTabs(true)}
              onPointerLeave={(e) => e.pointerType === 'mouse' && setHoveringTabs(false)}
              className="flex overflow-x-auto lg:flex-col lg:overflow-visible"
            >
              {COMMUNITIES.map((c, i) => {
                const on = i === index
                const TabIcon = c.icon
                return (
                  <button
                    key={c.name}
                    ref={(el) => {
                      tabs.current[i] = el
                    }}
                    role="tab"
                    id={`community-tab-${i}`}
                    aria-selected={on}
                    aria-controls="community-panel"
                    aria-label={c.name}
                    title={c.name}
                    tabIndex={on ? 0 : -1}
                    onClick={() => pick(i)}
                    className={`border-line fs-small flex flex-1 items-center justify-center gap-3 px-3 py-3 outline-none lg:w-full lg:flex-none lg:justify-start lg:border-b lg:py-2 ${
                      on
                        ? 'bg-brand text-onbrand'
                        : 'text-muted-c hover:bg-[var(--color-hover-bg)] hover:text-[var(--color-hover-text)] focus-visible:bg-[var(--color-hover-bg)] focus-visible:text-[var(--color-hover-text)]'
                    }`}
                  >
                    <TabIcon size={20} className="shrink-0 opacity-80 lg:size-4" aria-hidden="true" />
                    <span className="hidden truncate lg:inline">{c.name}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* panel */}
          <div
            key={active.name}
            role="tabpanel"
            id="community-panel"
            aria-labelledby={`community-tab-${index}`}
            className="flex min-w-0 flex-col sm:flex-row"
            style={{ animation: 'tab-in .25s ease-out both' }}
          >
            {/* description, tags, join button on the right */}
            <div className="flex min-w-0 flex-1 flex-col gap-3 p-[calc(var(--space)*2)]">
              <h3 className="text-brand text-3xl font-semibold sm:text-4xl">{active.name}</h3>
              <p className="fs-small text-muted-c leading-snug">{active.blurb}</p>

              <ul className="flex flex-wrap gap-1">
                {active.tags.map((t) => (
                  <li key={t} className="border-line text-muted-c border px-1.5 py-0.5 text-[11px]">
                    #{t}
                  </li>
                ))}
              </ul>

              <a
                {...(JOINING_DISABLED
                  ? { 'aria-disabled': 'true' as const, role: 'link', tabIndex: -1, onClick: (e: MouseEvent) => e.preventDefault() }
                  : {
                      href: joinHref,
                      ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
                    })}
                className="btn-outline fs-small mt-auto ml-auto shrink-0 gap-1.5 !px-3 !py-1.5"
              >
                Join community
                <ArrowUpRight size={16} className="shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}