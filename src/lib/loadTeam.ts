import fs from 'node:fs'
import path from 'node:path'
import type { Group, Member } from '@/data/team'

const ROOT = path.join(process.cwd(), 'public', 'team')
const EXT = ['jpg', 'jpeg', 'png', 'webp', 'avif']

type Raw = { name: string; position: string; photo?: string; linkedin?: string; mail?: string }
type YearFile = { executive?: Raw[]; advisory?: Raw[] }

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

function findPhoto(year: string, base: string): string {
  for (const ext of EXT) {
    if (fs.existsSync(path.join(ROOT, year, `${base}.${ext}`))) return `/team/${year}/${base}.${ext}`
  }
  return ''
}

function resolve(year: string, board: Group, people: Raw[]): Member[] {
  // executive: slug of the position. advisory: advisor-1, advisor-2 ...
  const bases = people.map((p) => (board === 'advisory' ? 'advisor' : slug(p.position)))
  const seen: Record<string, number> = {}

  return people.map((p, i) => {
    const b = bases[i]
    seen[b] = (seen[b] ?? 0) + 1
    const repeated = bases.filter((x) => x === b).length > 1
    const base = board === 'advisory' || repeated ? `${b}-${seen[b]}` : b

    let image: string
    if (p.photo && (p.photo.startsWith('/') || p.photo.startsWith('http'))) image = p.photo
    else if (p.photo) image = `/team/${year}/${p.photo}`
    else image = findPhoto(year, base)

    return { name: p.name, position: p.position, image, linkedin: p.linkedin?.trim(), mail: p.mail }
  })
}

export function loadTeam(): Record<Group, Record<string, Member[]>> {
  const out: Record<Group, Record<string, Member[]>> = { executive: {}, advisory: {} }
  if (!fs.existsSync(ROOT)) return out

  const years = fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((d) => d.isDirectory() && fs.existsSync(path.join(ROOT, d.name, 'team.json')))
    .map((d) => d.name)
    .sort((a, b) => b.localeCompare(a)) // newest first

  for (const year of years) {
    let file: YearFile
    try {
      file = JSON.parse(fs.readFileSync(path.join(ROOT, year, 'team.json'), 'utf8')) as YearFile
    } catch {
      console.warn(`team.json in ${year} is not valid JSON, skipped`)
      continue
    }
    for (const board of ['executive', 'advisory'] as Group[]) {
      const people = file[board] ?? []
      if (people.length) out[board][year] = resolve(year, board, people)
    }
  }
  return out
}