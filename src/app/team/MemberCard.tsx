'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'
import type { Member } from '@/data/team'

const STRIPES = 'repeating-linear-gradient(45deg, var(--color-line) 0 1px, transparent 1px 10px)'

const initials = (n: string) =>
  n.replace(/\b(Asst|Prof|Dr)\.?\s/gi, '').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase()

const ICON_BTN =
  'text-muted-c flex flex-1 items-center justify-center transition-colors duration-150 hover:bg-[var(--color-hover-bg)] hover:text-[var(--color-hover-text)] focus-visible:bg-[var(--color-hover-bg)] focus-visible:text-[var(--color-hover-text)] focus-visible:outline-none'

export function MemberCard({ m, priority = false }: { m: Member; priority?: boolean }) {
  const imgRef = useRef<HTMLImageElement>(null)

  // catch images that already failed before React attached onError
  useEffect(() => {
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth === 0) img.style.display = 'none'
  }, [])

  return (
    <article className="border-line bg-page text-body flex h-24 overflow-hidden border sm:h-28">
      {/* photo: fixed square, same size on every card */}
      <div className="border-line relative aspect-square h-full shrink-0 overflow-hidden border-r">
        <div
          className="text-brand absolute inset-0 flex items-center justify-center text-2xl font-semibold"
          style={{ backgroundImage: STRIPES }}
        >
          {initials(m.name)}
        </div>
        <Image
          ref={imgRef}
          src={m.image}
          alt=""
          fill
          sizes="(min-width: 640px) 112px, 96px"
          priority={priority}
          onError={(e) => (e.currentTarget.style.display = 'none')}
          className="object-cover object-top"
        />
      </div>

      {/* details */}
      <div className="flex min-w-0 flex-1 flex-col justify-center p-3 sm:p-4">
        <p className="text-brand truncate text-[11px] font-semibold uppercase tracking-[0.14em]">
          {m.position}
        </p>
        <h3 className="mt-1 line-clamp-2 text-lg font-semibold leading-tight">{m.name}</h3>
      </div>

      {/* actions: stacked, hugging the right edge */}
      <div className="border-line flex w-12 shrink-0 flex-col self-stretch border-l sm:w-14">
        {m.linkedin && (
          <a
            href={m.linkedin.trim()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${m.name} on LinkedIn`}
            title="LinkedIn"
            className={`${ICON_BTN} border-line border-b`}
          >
            <FaLinkedin size={18} />
          </a>
        )}
        <a
          href={`mailto:${m.mail}`}
          aria-label={`Email ${m.name}`}
          title={m.mail}
          className={ICON_BTN}
        >
          <Mail size={18} />
        </a>
      </div>
    </article>
  )
}