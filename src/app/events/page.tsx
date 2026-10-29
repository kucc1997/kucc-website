import Link from 'next/link'
import PageHero from '@/components/PageHero'
import { heroContent } from '@/data/hero'
import { loadGroups } from '@/lib/loadEvents'

export const metadata = { title: 'Events | KUCC' }

const STRIPES = 'repeating-linear-gradient(45deg, var(--color-line) 0 1px, transparent 1px 10px)'

export default function EventsPage() {
  const groups = loadGroups()

  return (
    <>
      <PageHero {...heroContent.events} />
      <div className="bg-page">
        <div className="wrap py-8">
          {groups.length === 0 ? (
            <p className="fs-small text-muted-c">
              Nothing yet. Add a folder to <code>public/events/</code>.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {groups.map((g) => (
                <Link key={g.slug} href={`/events/${g.slug}`} className="group border-line hover:border-brand flex flex-col border">
                  <div className="border-line aspect-[4/3] overflow-hidden border-b" style={{ backgroundImage: STRIPES }}>
                    {g.cover && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={g.cover} alt={g.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="fs-text text-brand font-semibold">{g.title}</h3>
                    <p className="fs-small text-muted-c mt-1">
                      {g.events.length} {g.events.length === 1 ? 'event' : 'events'} · {g.photoCount} photos
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}