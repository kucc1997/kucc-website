'use client'
import Image from 'next/image'
import { useState, useEffect, useSyncExternalStore } from 'react'
import { Minus, Square, X, Eye } from 'lucide-react'

export type PreviewLink = {
  label: string
  href: string
  external?: boolean
  disabled?: boolean
  preview?: string
  embed?: boolean
}

type Kind = 'image' | 'pdf' | 'page' | null

/* ============ EDIT THE FRAME HERE ============ */
const W = 270 // window width (outer)
const H = 270 // content height under the title bar
const BAR = 28 // title bar height
const BORDER = 2 // must match border-2 in FRAME_CLASS
const OFFSET = 24 // distance from the cursor
const FRAME_CLASS =
  'pointer-events-none fixed left-0 top-0 z-50 hidden overflow-hidden border-2 border-frame bg-page shadow-lg lg:block'
const SCALE = 0.5 // inner iframe renders at IW/SCALE x H/SCALE, then shrinks
const TITLE_PREFIX = 'kucc-preview'

/* ============ AUTO SCROLL ============ */
const SPEED = 1.2 // page scroll speed (px per frame) for same-origin pages
const PDF_PAGES = 4 // how many frame-heights of the PDF to slide through
const PAGE_PAGES = 3 // same, for external websites (they can't be scrolled from JS, so we slide them)
const SLIDE_SECONDS = 12 // duration of the PDF slide and image pan

/* ============ PRELOAD ============ */
const PRELOAD_GAP_MS = 250 // delay between mounting each preview
// false = external websites are only loaded while hovered (same as your old version).
// true  = they are preloaded in the background too (faster, but can misbehave).
const PRELOAD_EXTERNAL_PAGES = false
/* =============================================== */

const IW = W - BORDER * 2 // inner content width
const TOTAL_H = H + BAR + BORDER * 2 // full window height

const LOADING_PHRASES = [
  'Establishing secure link...',
  'Rendering preview window...',
  'Fetching pixels...',
  'Almost ready...',
]

function previewKind(l: PreviewLink): Kind {
  if (l.disabled) return null
  if (l.preview) return 'image'
  if (/\.pdf($|[?#])/i.test(l.href)) return 'pdf'
  if (!l.external || l.embed) return 'page'
  return null
}

function fileName(l: PreviewLink) {
  if (/\.pdf($|[?#])/i.test(l.href)) {
    const last = l.href.split(/[?#]/)[0].split('/').pop() || l.label
    try {
      return decodeURIComponent(last)
    } catch {
      return last
    }
  }
  return l.label.toLowerCase().trim().replace(/\s+/g, '-')
}

function isSameOrigin(href: string) {
  try {
    return new URL(href, window.location.href).origin === window.location.origin
  } catch {
    return false
  }
}

/* ============ tiny store: hover -> host ============ */
type Hover = { link: PreviewLink; x: number; y: number } | null
let hover: Hover = null
const listeners = new Set<() => void>()
function setHover(h: Hover) {
  hover = h
  listeners.forEach((fn) => fn())
}
function subscribe(fn: () => void) {
  listeners.add(fn)
  return () => {
    listeners.delete(fn)
  }
}
const getSnapshot = () => hover
const getServerSnapshot = () => null

/**
 * Keep using it exactly as before: <HoverPreview link={...} x={...} y={...} />
 * It no longer renders anything itself; it just tells the host what to show.
 */
export default function HoverPreview({ link, x, y }: { link: PreviewLink; x: number; y: number }) {
  useEffect(() => {
    setHover({ link, x, y })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [link.href, link.preview, x, y])

  useEffect(() => () => setHover(null), [])
  return null
}

/* ============ one window ============ */
function Win({
  link,
  kind,
  active,
  left,
  top,
}: {
  link: PreviewLink
  kind: Exclude<Kind, null>
  active: boolean
  left: number
  top: number
}) {
  // loaded state lives here, so a window that is unmounted and mounted again
  // (hover-only items) shows the loading screen again instead of a blank frame
  const [loaded, setLoaded] = useState(false)
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [frameEl, setFrameEl] = useState<HTMLIFrameElement | null>(null)
  const sameOrigin = kind === 'page' && isSameOrigin(link.href)

  // rotating text only while this window is visible and still loading
  useEffect(() => {
    if (!active || loaded) return
    const t = setInterval(() => setPhraseIdx((p) => (p + 1) % LOADING_PHRASES.length), 1200)
    return () => clearInterval(t)
  }, [active, loaded])

  // JS auto-scroll only while visible, and only for same-origin pages
  // (cross-origin pages can't be scrolled from JS, they just show their top)
  useEffect(() => {
    if (!active || !loaded || !sameOrigin || !frameEl) return
    let y = 0
    let raf = 0
    const tick = () => {
      try {
        const doc = frameEl.contentDocument!
        const max =
          Math.max(doc.documentElement.scrollHeight, doc.body ? doc.body.scrollHeight : 0) -
          frameEl.clientHeight
        y += SPEED
        if (y > max + 80) y = 0
        frameEl.contentWindow!.scrollTo(0, Math.min(y, Math.max(0, max)))
      } catch {
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [active, loaded, sameOrigin, frameEl])

  const iframeClass = 'pointer-events-none absolute left-0 top-0 origin-top-left'

  return (
    <div
      className={FRAME_CLASS}
      aria-hidden="true"
      style={{
        width: W,
        height: TOTAL_H,
        transform: `translate3d(${left}px, ${top}px, 0)`,
        opacity: active ? 1 : 0,
        contain: 'layout paint',
      }}
    >
      {/* ---------- title bar ---------- */}
      <div
        className="flex items-center justify-between gap-2 px-2 bg-brand text-onbrand"
        style={{ height: BAR }}
      >
        <p className="min-w-0 truncate text-xs font-semibold">
          {TITLE_PREFIX}: {fileName(link)}
        </p>
        <div className="flex shrink-0 items-center gap-2.5 opacity-90">
          <Minus size={12} />
          <Square size={10} />
          <X size={13} />
        </div>
      </div>

      {/* ---------- content ---------- */}
      <div className="relative overflow-hidden bg-page" style={{ height: H }}>
        {!loaded && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-brand p-4 text-center text-onbrand shadow-inner">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-onbrand/40 animate-pulse" />
            <div className="relative flex items-center justify-center">
              <div className="absolute h-10 w-10 rounded-full border border-onbrand/20 animate-ping" />
              <div className="bg-onbrand/10 p-2.5 rounded-full backdrop-blur-xs">
                <Eye className="h-5 w-5 animate-bounce" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold tracking-wide uppercase opacity-90">Loading Preview</p>
              <p className="text-[11px] font-medium opacity-75">{LOADING_PHRASES[phraseIdx]}</p>
            </div>
          </div>
        )}

        {kind === 'image' && (
          <Image
            src={link.preview!}
            alt=""
            fill
            sizes={`${IW}px`}
            loading="eager"
            className="object-cover"
            onLoad={() => setLoaded(true)}
            style={{
              // only animate while visible, so it restarts from 0 on every hover
              animation: active
                ? `preview-pan ${SLIDE_SECONDS}s ease-in-out infinite alternate`
                : 'none',
            }}
          />
        )}

        {kind === 'pdf' && (
          <div
            className="absolute left-0 top-0"
            style={
              {
                width: IW,
                height: H * PDF_PAGES,
                '--slide': `${-H * (PDF_PAGES - 1)}px`,
                // only animate while visible and loaded, so it starts when you hover
                animation:
                  active && loaded
                    ? `preview-slide ${SLIDE_SECONDS}s ease-in-out infinite alternate`
                    : 'none',
              } as React.CSSProperties
            }
          >
            <iframe
              src={`${link.href}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              title={`${link.label} preview`}
              tabIndex={-1}
              onLoad={() => setLoaded(true)}
              className={iframeClass}
              style={{
                width: IW / SCALE,
                height: (H * PDF_PAGES) / SCALE,
                transform: `scale(${SCALE})`,
              }}
            />
          </div>
        )}

        {/* same-origin pages: normal iframe, scrolled by JS */}
        {kind === 'page' && sameOrigin && (
          <iframe
            ref={setFrameEl}
            src={link.href}
            title={`${link.label} preview`}
            tabIndex={-1}
            onLoad={() => setLoaded(true)}
            className={iframeClass}
            style={{ width: IW / SCALE, height: H / SCALE, transform: `scale(${SCALE})` }}
          />
        )}

        {/* external websites: JS can't scroll a cross-origin iframe, so make the iframe tall
            and slide it with CSS (starts only when hovered and loaded) */}
        {kind === 'page' && !sameOrigin && (
          <div
            className="absolute left-0 top-0"
            style={
              {
                width: IW,
                height: H * PAGE_PAGES,
                '--slide': `${-H * (PAGE_PAGES - 1)}px`,
                animation:
                  active && loaded
                    ? `preview-slide ${SLIDE_SECONDS}s ease-in-out infinite alternate`
                    : 'none',
              } as React.CSSProperties
            }
          >
            <iframe
              src={link.href}
              title={`${link.label} preview`}
              tabIndex={-1}
              onLoad={() => setLoaded(true)}
              className={iframeClass}
              style={{
                width: IW / SCALE,
                height: (H * PAGE_PAGES) / SCALE,
                transform: `scale(${SCALE})`,
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

/* ============ the host: mount ONCE (layout) ============ */
export function PreviewHost({ links }: { links: PreviewLink[] }) {
  const h = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  const [count, setCount] = useState(0)

  // unique, previewable items
  const baseItems = (() => {
    const seen = new Set<string>()
    const out: { link: PreviewLink; kind: Exclude<Kind, null>; key: string }[] = []
    for (const l of links) {
      const kind = previewKind(l)
      if (!kind) continue
      const key = kind === 'image' ? l.preview! : l.href
      if (seen.has(key)) continue
      seen.add(key)
      out.push({ link: l, kind, key })
    }
    return out
  })()

  // the hovered link, even if it is NOT in the `links` list (e.g. missing from ALL_PREVIEW_LINKS)
  const activeKind = h ? previewKind(h.link) : null
  const activeKey = !h || !activeKind ? null : activeKind === 'image' ? h.link.preview! : h.link.href

  // fallback: if the hovered link isn't in the list, add it so it still shows (hover-only, not preloaded)
  const items =
    h && activeKind && activeKey && !baseItems.some((it) => it.key === activeKey)
      ? [...baseItems, { link: h.link, kind: activeKind, key: activeKey }]
      : baseItems

  // preload: after window load + idle, desktop only, one item at a time
  useEffect(() => {
    if (!window.matchMedia('(min-width: 1024px)').matches) return
    let timer: ReturnType<typeof setTimeout>
    let cancelled = false

    const step = (n: number) => {
      if (cancelled) return
      setCount(n)
      if (n < baseItems.length) timer = setTimeout(() => step(n + 1), PRELOAD_GAP_MS)
    }
    const start = () => {
      const ric = (window as any).requestIdleCallback as undefined | ((cb: () => void) => void)
      if (ric) ric(() => step(1))
      else timer = setTimeout(() => step(1), 1500)
    }

    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start, { once: true })

    return () => {
      cancelled = true
      clearTimeout(timer)
      window.removeEventListener('load', start)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseItems.length])

  let left = 0
  let top = 0
  if (h && typeof window !== 'undefined') {
    left = h.x + OFFSET + W > window.innerWidth ? h.x - OFFSET - W : h.x + OFFSET
    top = Math.min(Math.max(8, h.y - TOTAL_H / 2), window.innerHeight - TOTAL_H - 8)
  }

  return (
    <>
      {items.map((it, i) => {
        const active = it.key === activeKey

        // preloaded = reached by the preload loop (and allowed to preload)
        const preloaded =
          i < count &&
          (PRELOAD_EXTERNAL_PAGES || it.kind !== 'page' || isSameOrigin(it.link.href))

        // mount if preloaded, or if the user hovers it (hover-only items mount on hover)
        if (!preloaded && !active) return null

        return (
          <Win
            key={it.key}
            link={it.link}
            kind={it.kind}
            active={active}
            left={active ? left : 0}
            top={active ? top : 0}
          />
        )
      })}
    </>
  )
}