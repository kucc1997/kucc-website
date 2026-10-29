'use client'
import { useEffect, useMemo, useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, Minus, Square, X } from 'lucide-react'

export type GalleryEvent = {
  id: string
  title: string
  date: string // already formatted, or ''
  place: string
  summary: string
  photos: { src?: string }[]
}

type Item = { src?: string; file: string; eventTitle: string; n: number }

const STRIPES = 'repeating-linear-gradient(45deg, var(--color-line) 0 1px, transparent 1px 10px)'

function Picture({ item, className = '' }: { item: Item; className?: string }) {
  if (item.src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={item.src} alt={item.eventTitle} loading="lazy" className={`h-full w-full object-cover ${className}`} />
  }
  return (
    <div className={`flex h-full w-full items-center justify-center ${className}`} style={{ backgroundImage: STRIPES }}>
      <span className="text-brand text-4xl font-semibold">{String(item.n).padStart(2, '0')}</span>
    </div>
  )
}

export default function CommunityGallery({ events }: { events: GalleryEvent[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const [minimised, setMinimised] = useState<Set<string>>(new Set())

  const toggle = (id: string, minimise?: boolean) =>
    setMinimised((prev) => {
      const next = new Set(prev)
      const shouldMin = minimise ?? !next.has(id)
      if (shouldMin) next.add(id)
      else next.delete(id)
      return next
    })

  const allMinimised = events.length > 0 && minimised.size === events.length

  const { items, starts } = useMemo(() => {
    const items: Item[] = []
    const starts: number[] = []
    events.forEach((e) => {
      starts.push(items.length)
      e.photos.forEach((p, i) => {
        let fileName = `${String(i + 1).padStart(2, '0')}.jpg`
        if (p.src) {
          const last = p.src.split('/').pop() ?? fileName
          try {
            fileName = decodeURIComponent(last)
          } catch {
            fileName = last
          }
        }
        items.push({ src: p.src, file: `${e.id}/${fileName}`, eventTitle: e.title, n: i + 1 })
      })
    })
    return { items, starts }
  }, [events])

  const shown = open !== null ? items[open] : null

  useEffect(() => {
    if (open === null) return undefined
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen((i) => (i === null ? i : (i + 1) % items.length))
      if (e.key === 'ArrowLeft') setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length))
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, items.length])

  return (
    <div>
      {/* toolbar */}
      <div className="border-line mb-3 flex items-center justify-between border-b pb-2">
        <h2 className="fs-text text-brand">
          Events <span className="text-muted-c text-sm">({events.length})</span>
        </h2>
        {events.length > 1 && (
          <button
            type="button"
            onClick={() => setMinimised(allMinimised ? new Set() : new Set(events.map((e) => e.id)))}
            className="border-line text-muted-c hover:border-brand hover:text-[color:var(--color-primary)] border px-3 py-1 text-sm"
          >
            {allMinimised ? 'Maximise all' : 'Minimise all'}
          </button>
        )}
      </div>

      <div className="space-y-3">
        {events.map((e, ei) => {
          const isMin = minimised.has(e.id)
          return (
            <article key={e.id} className="border-line border">
              {/* title bar: neutral by default, primary on hover */}
              <div
                className={`flex items-center gap-2 bg-page text-body transition-colors duration-150 hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] focus-within:bg-[var(--color-primary)] focus-within:text-[var(--color-bg)] ${
                  isMin ? '' : 'border-line border-b'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(e.id)}
                  aria-expanded={!isMin}
                  className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2.5 text-left outline-none"
                >
                  <ChevronDown size={16} className={`shrink-0 transition-transform ${isMin ? '-rotate-90' : ''}`} />
                  <span className="min-w-0 truncate text-sm font-semibold sm:text-base">{e.title}</span>
                  <span className="ml-auto hidden shrink-0 text-xs opacity-70 sm:block">
                    {e.date && `${e.date} · `}
                    {e.photos.length} {e.photos.length === 1 ? 'photo' : 'photos'}
                  </span>
                </button>
                <div className="flex shrink-0 items-center pr-1">
                  <button
                    type="button"
                    aria-label={`Minimise ${e.title}`}
                    disabled={isMin}
                    onClick={() => toggle(e.id, true)}
                    className="p-2 opacity-70 hover:opacity-100 disabled:opacity-25"
                  >
                    <Minus size={14} />
                  </button>
                  <button
                    type="button"
                    aria-label={`Maximise ${e.title}`}
                    disabled={!isMin}
                    onClick={() => toggle(e.id, false)}
                    className="p-2 opacity-70 hover:opacity-100 disabled:opacity-25"
                  >
                    <Square size={12} />
                  </button>
                </div>
              </div>

              {/* collapsible body */}
              <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isMin ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'}`}>
                <div className={`overflow-hidden ${isMin ? 'invisible' : ''}`}>
                  <div className="p-3">
                    {(e.place || e.summary) && (
                      <p className="fs-small text-muted-c mb-3 leading-snug">
                        {e.place && <span>{e.place}. </span>}
                        {e.summary}
                      </p>
                    )}
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                      {e.photos.map((_, pi) => {
                        const idx = starts[ei] + pi
                        return (
                          <button
                            key={pi}
                            type="button"
                            onClick={() => setOpen(idx)}
                            className="group border-line relative aspect-[4/3] overflow-hidden border text-left hover:border-[color:var(--color-primary)]"
                            aria-label={`Open photo ${pi + 1} from ${e.title}`}
                          >
                            <Picture item={items[idx]} className="transition-transform duration-500 group-hover:scale-105" />
                          </button>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* ---------- lightbox ---------- */}
      {shown && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6" onClick={() => setOpen(null)}>
          <div className="border-frame bg-page w-full max-w-3xl border-2 shadow-lg" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between gap-2 px-3 py-1.5 text-xs font-semibold" style={{ background: 'var(--color-frame)', color: 'var(--color-bg)' }}>
              <span className="truncate">kucc-preview: {shown.file}</span>
              <button type="button" aria-label="Close" onClick={() => setOpen(null)}><X size={15} /></button>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
              <Picture item={shown} />
              <button type="button" aria-label="Previous" onClick={() => setOpen((open! - 1 + items.length) % items.length)}
                className="border-line bg-page text-body absolute left-2 top-1/2 -translate-y-1/2 border p-1.5"><ChevronLeft size={18} /></button>
              <button type="button" aria-label="Next" onClick={() => setOpen((open! + 1) % items.length)}
                className="border-line bg-page text-body absolute right-2 top-1/2 -translate-y-1/2 border p-1.5"><ChevronRight size={18} /></button>
            </div>

            <div className="border-line flex items-center justify-between gap-4 border-t px-3 py-2">
              <p className="fs-small text-body">{shown.eventTitle}</p>
              <p className="text-muted-c shrink-0 text-xs">{open! + 1}/{items.length}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}