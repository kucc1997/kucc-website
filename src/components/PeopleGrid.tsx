import fs from 'node:fs'
import path from 'node:path'
import PeopleGridClient from './PeopleGridClient'
import Image from 'next/image'

const PUBLIC_DIR = path.join(process.cwd(), 'public')
const PEOPLE_DIR = 'people' // every image in public/people is used
const IMG_EXT = /\.(jpe?g|png|webp|avif)$/i

/** Resolve a public path to the real file on disk, ignoring filename case. Returns null if missing. */
function resolvePublic(src: string): string | null {
  const parts = src.split('/').filter(Boolean)
  let dir = PUBLIC_DIR
  const real: string[] = []
  for (const part of parts) {
    let entries: string[]
    try {
      entries = fs.readdirSync(dir)
    } catch {
      return null
    }
    const hit = entries.includes(part) ? part : entries.find((e) => e.toLowerCase() === part.toLowerCase())
    if (!hit) return null
    real.push(hit)
    dir = path.join(dir, hit)
  }
  return IMG_EXT.test(dir) && fs.existsSync(dir) ? '/' + real.join('/') : null
}

/** Collect every string anywhere in the JSON that looks like a local image path. */
function collectImages(node: unknown, out: string[]) {
  if (typeof node === 'string') {
    const s = node.trim()
    if (s.startsWith('/') && IMG_EXT.test(s)) out.push(s)
  } else if (Array.isArray(node)) {
    node.forEach((n) => collectImages(n, out))
  } else if (node && typeof node === 'object') {
    Object.values(node).forEach((n) => collectImages(n, out))
  }
}

/** Every unique, existing photo: all of public/people + every image path in public/team/<year>/*.json */
function getPhotos(): string[] {
  const seen = new Map<string, string>() // lowercase path -> real path
  const add = (src: string) => {
    const real = resolvePublic(src)
    if (real && !seen.has(real.toLowerCase())) seen.set(real.toLowerCase(), real)
  }

  // 1) all images in the people folder
  try {
    for (const f of fs.readdirSync(path.join(PUBLIC_DIR, PEOPLE_DIR))) {
      if (IMG_EXT.test(f)) add(`/${PEOPLE_DIR}/${f}`)
    }
  } catch {
    // no people folder: fine
  }

  // 2) every image path found anywhere in the team json files
  const teamDir = path.join(PUBLIC_DIR, 'team')
  let years: string[] = []
  try {
    years = fs.readdirSync(teamDir, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name)
  } catch {
    // no team folder: fine
  }

  for (const year of years) {
    let files: string[] = []
    try {
      files = fs.readdirSync(path.join(teamDir, year)).filter((f) => f.toLowerCase().endsWith('.json'))
    } catch {
      continue
    }
    for (const file of files) {
      try {
        const data = JSON.parse(fs.readFileSync(path.join(teamDir, year, file), 'utf8'))
        const found: string[] = []
        collectImages(data, found)
        found.forEach(add)
      } catch {
        // invalid json: skip it
      }
    }
  }

  return [...seen.values()].sort()
}

export default function PeopleGrid({ logo = '/kucc-logo.svg' }: { logo?: string }) {
  return (
    <PeopleGridClient photos={getPhotos()}>
      <Image src={logo} alt="" width={200} height={200} unoptimized className="h-auto w-[calc(var(--tile)*1.4)]" />
    </PeopleGridClient>
  )
}