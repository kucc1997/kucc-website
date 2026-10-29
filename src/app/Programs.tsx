'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import HoverPreview, { type PreviewLink } from '@/components/HoverPreview'

type Program = {
  name: string
  logo: string
  logoBg?: string // panel color behind the logo (for white / transparent logos)
  tag: string
  blurb: string
  href?: string
  preview?: string // optional screenshot; use it for sites that refuse to be framed
  facts?: { label: string; value: string }[]
}

const PROGRAMS: Program[] = [
  {
    name: 'NCCI',
    logo: '/assets/logos/ncci-icon.svg',
    tag: 'Program',
    blurb:
      'A national platform hosted by KUCC & DoCSE, Kathmandu University, bringing together students, researchers & professionals to share innovative ideas',
    href: 'https://conf.kucc.ku.edu.np',
    facts: [{ label: 'Type', value: 'Program' }],
  },
  {
    name: 'KUOSC',
    logo: '/assets/logos/kuosc.webp',
    tag: 'Open Source Wing',
    blurb:
      'KUOSC is the Open Source related wing of KUCC. It is a vibrant historic community from Kathmandu University which provides a common platform for all FOSS enthusiasts to discuss, share, and learn about free and open source softwares.',
    href: 'https://kuosc.org.np',
    facts: [
      { label: 'Type', value: 'Community' },
      { label: 'Focus', value: 'FOSS' },
    ],
  },
  {
    name: 'IT Meet',
    logo: '/assets/logos/it-meet.webp',
    logoBg: '#394078',
    tag: 'Event',
    blurb:
      'An annual, national-level event organized by Kathmandu University Computer Club (KUCC), celebrating recent achievements in information and technology.',
    href: 'https://itmeet.kucc.ku.edu.np/',
    facts: [
      { label: 'Type', value: 'Event' },
      { label: 'Format', value: 'Meetup' },
    ],
  },
  {
    name: 'KURCH',
    logo: '/assets/logos/kurch.webp',
    tag: 'Event',
    blurb:
      'The Kathmandu University Research and Collaboration Hub (KURCH) is a platform designed to facilitate research, innovation, and collaboration among students, faculty, and research labs.',
    href: 'https://kurch.netlify.app',
    facts: [
      { label: 'Type', value: 'Event' },
      { label: 'Format', value: 'Meetup' },
    ],
  },
]

const isExternal = (href?: string) => !!href && /^https?:\/\//i.test(href)

// href must match the entry in preview-links.ts exactly (same string) so the host reuses its window
function toPreview(p: Program): PreviewLink {
  return {
    label: p.name,
    href: p.href ?? '#',
    external: isExternal(p.href),
    preview: p.preview,
    embed: true,
  }
}

type HoverHandlers = {
  onHover: (p: Program, x: number, y: number) => void
  onMove: (x: number, y: number) => void
  onLeave: () => void
}

const BTN = 'btn-outline fs-small ml-auto shrink-0 gap-1.5 !px-3 !py-1.5'

function VisitButton({ program, onHover, onMove, onLeave }: { program: Program } & HoverHandlers) {
  if (!program.href) {
    return (
      <span aria-disabled="true" className={BTN}>
        Visit site
        <ArrowUpRight size={16} className="shrink-0" />
      </span>
    )
  }

  const ext = isExternal(program.href)
  return (
    <a
      href={program.href}
      {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      onMouseEnter={(e) => onHover(program, e.clientX, e.clientY)}
      onMouseMove={(e) => onMove(e.clientX, e.clientY)}
      onMouseLeave={onLeave}
      onFocus={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        onHover(program, r.left + r.width / 2, r.top + r.height / 2)
      }}
      onBlur={onLeave}
      className={BTN}
    >
      {/* Accessible name starts with the visible text ("Visit site"), then adds context */}
      Visit site
      <span className="sr-only">
        {' '}
        for {program.name}
        {ext ? ' (opens in a new tab)' : ''}
      </span>
      <ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
    </a>
  )
}

function ProgramCard({ program, ...hover }: { program: Program } & HoverHandlers) {
  const isSvg = program.logo.toLowerCase().endsWith('.svg')

  return (
    <article className="border-line bg-page flex h-full flex-col overflow-hidden border hover:border-[var(--color-primary)]">
      {/* logo panel: fixed 2:1 box. The image is absolutely positioned (fill) so its own size
          can never stretch the panel. */}
      <div
        className="border-line relative aspect-[2/1] w-full shrink-0 overflow-hidden border-b"
        style={{ backgroundColor: program.logoBg ?? '#FBFCFD' }}
      >
        <Image
          src={program.logo}
          alt={`${program.name} logo`}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
          // SVGs are already vector, so skip the optimizer; raster logos get resized
          unoptimized={isSvg}
          className="object-contain p-6"
        />
      </div>

      {/* info: grows to fit, nothing is clipped */}
      <div className="flex flex-1 flex-col gap-2 p-4">
        <h3 className="fs-text text-brand font-semibold leading-tight">{program.name}</h3>

        <p className="fs-small text-muted-c leading-snug">{program.blurb}</p>

        {program.facts && (
          <ul className="mt-1 flex flex-wrap gap-1">
            {program.facts.map((f) => (
              <li
                key={f.label}
                title={f.label}
                className="border-line text-muted-c border px-1.5 py-0.5 text-[11px]"
              >
                #{f.value.toLowerCase()}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* footer bar: category left, visit button right */}
      <div className="border-line flex items-center justify-between gap-3 border-t px-3 py-2">
        <span className="text-muted-c min-w-0 truncate text-xs">{program.tag}</span>
        <VisitButton program={program} {...hover} />
      </div>
    </article>
  )
}

export default function Programs() {
  const [active, setActive] = useState<Program | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const hover: HoverHandlers = {
    onHover: (prog, x, y) => {
      setPos({ x, y })
      setActive(prog)
    },
    onMove: (x, y) => setPos({ x, y }),
    onLeave: () => setActive(null),
  }

  return (
    <div className="wrap py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-x-8 gap-y-2 pb-1">
        <h2 className="text-brand text-3xl font-semibold sm:text-4xl">Programs</h2>
        <p className="fs-small text-muted-c px-3 leading-snug lg:max-w-md lg:text-right">
          Programs we conduct
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {PROGRAMS.map((p) => (
          <ProgramCard key={p.name} program={p} {...hover} />
        ))}
      </div>

      {active && <HoverPreview key={active.name} link={toPreview(active)} x={pos.x} y={pos.y} />}
    </div>
  )
}