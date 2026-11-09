import fs from 'node:fs'
import path from 'node:path'

const ROOT = path.join(process.cwd(), 'public', 'events')
const IMG = /\.(jpe?g|png|webp|avif|gif)$/i

export type EventData = {
  id: string
  title: string
  date: string
  place: string
  summary: string
  photos: { src: string }[]
}

export type EventGroup = {
  slug: string
  title: string
  description: string
  events: EventData[]
  photoCount: number
  cover?: string
}

const titleize = (s: string) =>
  s
    .replace(/^\d{4}-\d{2}-\d{2}[-_ ]?/, '')
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())

const dirs = (p: string) =>
  fs.existsSync(p) ? fs.readdirSync(p, { withFileTypes: true }).filter((d) => d.isDirectory()) : []

function readJson(file: string): any {
  try {
    return fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf8')) : {}
  } catch {
    return {}
  }
}

function readEvent(group: string, id: string): EventData {
  const dir = path.join(ROOT, group, id)
  const meta = readJson(path.join(dir, 'event.json'))
  const photos = fs
    .readdirSync(dir)
    .filter((f) => IMG.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((f) => ({
      src: `/events/${encodeURIComponent(group)}/${encodeURIComponent(id)}/${encodeURIComponent(f)}`,
    }))

  return {
    id,
    title: meta.title ?? titleize(id),
    date: meta.date ?? id.match(/^(\d{4}-\d{2}-\d{2})/)?.[1] ?? '',
    place: meta.place ?? '',
    summary: meta.summary ?? '',
    photos,
  }
}

export function loadGroups(): EventGroup[] {
  return dirs(ROOT)
    .map((g) => {
      const slug = g.name
      const meta = readJson(path.join(ROOT, slug, 'group.json'))
      const events = dirs(path.join(ROOT, slug))
        .map((e) => readEvent(slug, e.name))
        .sort((a, b) => (b.date || '').localeCompare(a.date || '') || a.title.localeCompare(b.title))

      return {
        slug,
        title: meta.title ?? titleize(slug),
        description: meta.description ?? '',
        events,
        photoCount: events.reduce((n, e) => n + e.photos.length, 0),
        cover: events.find((e) => e.photos[0])?.photos[0].src,
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title))
}

export const loadGroup = (slug: string) => loadGroups().find((g) => g.slug === slug)