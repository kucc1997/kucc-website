'use client'

import { useEffect, useMemo, useState, type ReactNode } from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

// deterministic shuffle so the layout is stable between renders (no hydration mismatch)
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
function shuffle<T>(arr: T[], rand: () => number) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const ROWS = 4
const DIRECTIONS = ['left', 'right', 'left', 'right'] as const
const SPEEDS = [30, 40, 35, 45]

export default function PeopleGridClient({
  photos,
  children, // the KUCC logo: stays fixed in the center, above the rows
}: {
  photos: string[]
  children?: ReactNode
}) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const rows = useMemo(() => {
    const list = shuffle(photos, mulberry32(1997))
    const out: string[][] = Array.from({ length: ROWS }, () => [])
    list.forEach((src, i) => out[i % ROWS].push(src))
    return out
  }, [photos])

  return (
    <section
      aria-hidden="true"
      className="bg-page relative flex h-[100dvh] w-full flex-col justify-center overflow-hidden"
      style={
        {
          '--tile': 'clamp(80px, 20dvh, 240px)',
          '--gap': 'clamp(2px, 0.5dvh, 6px)',
        } as React.CSSProperties
      }
    >
      {/* all 4 rows stacked tight, centered */}
      <div className="flex flex-col gap-[var(--gap)]">
        {rows.map((row, idx) => (
          <Marquee
            key={idx}
            autoFill
            direction={DIRECTIONS[idx]}
            speed={SPEEDS[idx]}
            play={!reduceMotion}
          >
            {row.map((src) => (
              <div key={src} className="pr-[var(--gap)]">
                <div className="bg-secondary relative aspect-square h-[var(--tile)] overflow-hidden">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="240px"
                    quality={50}
                    loading="lazy"
                    className="object-cover object-top grayscale transition duration-200 hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        ))}
      </div>

      {/* vignette: sits above the rows but below the logo */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{ background: 'radial-gradient(circle farthest-corner, transparent 40%, var(--color-bg) 95%)' }}
      />

      {/* static logo, centered over everything, full color, in a circle */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <div className="bg-page flex aspect-square h-[calc(var(--tile)*2)] items-center justify-center rounded-full shadow-xl">
          {children}
        </div>
      </div>
    </section>
  )
}