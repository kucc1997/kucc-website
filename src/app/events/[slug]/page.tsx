import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { loadGroup, loadGroups } from '@/lib/loadEvents'
import EventGallery from '../components/EventGallery'

type Params = { slug: string }

const STRIPES = 'repeating-linear-gradient(45deg, var(--color-line) 0 1px, transparent 1px 10px)'

function fmtDate(d: string) {
  const date = new Date(`${d}T00:00:00`)
  return Number.isNaN(date.getTime())
    ? d
    : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function generateStaticParams() {
  return loadGroups().map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const g = loadGroup(slug)
  return { title: g ? `${g.title} | KUCC` : 'Events | KUCC' }
}

export default async function EventGroupPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const all = loadGroups()
  const idx = all.findIndex((g) => g.slug === slug)
  if (idx === -1) notFound()

  const g = all[idx]
  const next = all[(idx + 1) % all.length]
  const prev = all[(idx - 1 + all.length) % all.length]

  const galleryEvents = g.events.map((e) => ({ ...e, date: e.date ? fmtDate(e.date) : '' }))
  const latest = g.events.find((e) => e.date)?.date

  const stats = [
    { label: 'Events', value: String(g.events.length) },
    { label: 'Photos', value: String(g.photoCount) },
    { label: 'Latest', value: latest ? fmtDate(latest) : 'None yet' },
  ]

  return (
    <div className="bg-page">
      <div className="wrap py-6 lg:py-8">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb" className="fs-small text-muted-c mb-4 flex items-center gap-2">
          <Link href="/events" className="hover-brand inline-flex items-center gap-1.5">
            <ArrowLeft size={15} /> Events
          </Link>
          <span className="opacity-50">/</span>
          <span className="text-body truncate">{g.title}</span>
        </nav>

        {/* hero */}
        <section className="border-line grid border lg:grid-cols-[auto_1fr_auto]">
          {/* initial tile */}
          {/* <div
            className="border-line flex items-center justify-center border-b p-6 lg:border-b-0 lg:border-r lg:px-12"
            style={{ backgroundImage: STRIPES }}
          >
            <div className="border-brand bg-page text-brand flex h-20 w-20 items-center justify-center border-2 text-4xl font-semibold sm:h-24 sm:w-24 sm:text-5xl">
              {g.title.charAt(0).toUpperCase()}
            </div>
          </div> */}

          {/* title + description */}
          <div className="flex flex-col justify-center gap-3 p-5 sm:p-6 lg:p-8">
            <p className="text-brand text-xs font-semibold uppercase tracking-[0.16em]">KUCC Events</p>
            <h1 className="text-body text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{g.title}</h1>
            {g.description && (
              <p className="fs-text text-muted-c max-w-2xl leading-snug">{g.description}</p>
            )}
          </div>

          {/* stats */}
          <dl className="border-line grid grid-cols-3 divide-x divide-[color:var(--color-line)] border-t lg:grid-cols-1 lg:divide-x-0 lg:divide-y lg:border-l lg:border-t-0">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col justify-center px-5 py-4 lg:min-w-44 lg:py-5">
                <dd className="text-brand text-xl font-semibold leading-none tabular-nums sm:text-2xl">{s.value}</dd>
                <dt className="text-muted-c mt-1.5 text-xs uppercase tracking-wider">{s.label}</dt>
              </div>
            ))}
          </dl>
        </section>

        {/* gallery */}
        <section className="mt-6">
          {galleryEvents.length === 0 ? (
            <div className="border-line border border-dashed px-4 py-10 text-center">
              <p className="fs-small text-muted-c">
                No events yet. Add a folder of photos inside <code>public/events/{slug}/</code>.
              </p>
            </div>
          ) : (
            <EventGallery events={galleryEvents} />
          )}
        </section>

        {/* prev / next */}
        {all.length > 1 && (
          <nav className="border-line mt-12 grid border-t sm:grid-cols-2">
            <Link href={`/events/${prev.slug}`} className="btn-secondary !border-t-0 !py-4">
              <span className="flex items-center gap-2 truncate">
                <ArrowLeft size={18} />
                {prev.title}
              </span>
            </Link>
            <Link href={`/events/${next.slug}`} className="btn-secondary !border-t-0 !py-4">
              <span className="truncate">{next.title}</span>
              <ArrowRight size={18} />
            </Link>
          </nav>
        )}
      </div>
    </div>
  )
}