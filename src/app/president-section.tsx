import React from 'react'
import Image from 'next/image'
import { promises as fs } from 'fs'
import path from 'path'
import { Metadata } from 'next'
import { Quote } from 'lucide-react'

export const metadata: Metadata = {
  title: 'KUCC President',
  description: 'Current President of Kathmandu University Computer Club (KUCC)',
}

/* ---- Adjust these if your team.json uses different key names ---- */
const NAME_KEYS = ['name', 'fullName']
const ROLE_KEYS = ['role', 'position', 'title', 'designation']
const MESSAGE_KEYS = ['message', 'presidentMessage', 'quote', 'bio']
const IMAGE_KEYS = ['image', 'img', 'photo', 'href', 'src', 'avatar']

type Person = Record<string, unknown>

const pick = (o: Person, keys: string[]) => {
  for (const k of keys) if (o[k] != null && o[k] !== '') return o[k]
  return undefined
}

// Message: known keys -> any key that looks like one -> longest prose string on the person
function findMessage(o: Person): unknown {
  const known = pick(o, MESSAGE_KEYS)
  if (known) return known
  const loose = Object.entries(o).find(([k, v]) => /message|quote|note|words|speech|about|desc/i.test(k) && v)
  if (loose) return loose[1]
  const longest = Object.entries(o)
    .filter(([k, v]) => typeof v === 'string' && v.length > 60 && !IMAGE_KEYS.includes(k))
    .sort((a, b) => String(b[1]).length - String(a[1]).length)[0]
  return longest?.[1]
}

// Walk any JSON shape (array, {members: []}, {board: {...}}) and collect objects
function collect(node: unknown, out: Person[] = []): Person[] {
  if (Array.isArray(node)) node.forEach((n) => collect(n, out))
  else if (node && typeof node === 'object') {
    out.push(node as Person)
    Object.values(node).forEach((v) => collect(v, out))
  }
  return out
}

const TEAM_DIR = path.join(process.cwd(), 'public/team')

const exists = (p: string) =>
  fs.access(p).then(
    () => true,
    () => false
  )

// public/team/<year>/team.json: newest year first, so 2027 is picked up automatically
async function getLatestTeam() {
  const years = (await fs.readdir(TEAM_DIR, { withFileTypes: true }))
    .filter((d) => d.isDirectory() && /^\d{4}$/.test(d.name))
    .map((d) => d.name)
    .sort((a, b) => Number(b) - Number(a))

  for (const year of years) {
    const file = path.join(TEAM_DIR, year, 'team.json')
    if (await exists(file)) return { year, data: JSON.parse(await fs.readFile(file, 'utf-8')) }
  }
  return null
}

// Absolute / URL paths are used as-is. Relative ones are checked against
// public/ first, then against the year folder.
async function resolveImage(src: string, year: string) {
  if (!src) return ''
  if (/^(https?:)?\//.test(src)) return src
  const clean = src.replace(/^\.?\//, '')
  if (await exists(path.join(process.cwd(), 'public', clean))) return `/${clean}`
  return `/team/${year}/${clean}`
}

async function getPresident() {
  const team = await getLatestTeam()
  if (!team) return null

  const people = collect(team.data)

  const match =
    people.find((p) => {
      const role = String(pick(p, ROLE_KEYS) ?? '')
      return /president/i.test(role) && !/vice|vp/i.test(role)
    }) ?? people.find((p) => findMessage(p))

  if (!match) return null

  const msg = findMessage(match)
  const paragraphs = (Array.isArray(msg) ? msg : String(msg ?? '').split(/\n+/))
    .map((s) => String(s).trim())
    .filter(Boolean)

  return {
    name: String(pick(match, NAME_KEYS) ?? 'President'),
    role: `${String(pick(match, ROLE_KEYS) ?? 'President')}, KUCC Board ${team.year}`,
    year: team.year,
    image: await resolveImage(String(pick(match, IMAGE_KEYS) ?? ''), team.year),
    paragraphs,
  }
}

export default async function PresidentSection() {
  const president = await getPresident()
  if (!president) return null

  const [lead, ...rest] = president.paragraphs
  // A single long paragraph reads better as body text than as a giant lead
  const useLead = !!lead && (rest.length > 0 || lead.length < 220)
  const body = useLead ? rest : president.paragraphs

  return (
    <section id="president" className="section border-line border-t">
      <div className="wrap">
        <h2 className="text-brand mb-10 text-3xl font-semibold sm:text-4xl">Message from our President</h2>

        <article className="border-frame bg-page grid overflow-hidden border lg:grid-cols-[22rem_1fr] xl:grid-cols-[26rem_1fr]">
          {/* Portrait: hugs the left, always at least 4:5 tall, face kept in frame.
              No `priority`: this section is far below the fold, so it must not
              be preloaded ahead of the content at the top of the page. */}
          <div className="border-line relative aspect-[4/5] w-full border-b lg:aspect-auto lg:min-h-[30rem] lg:border-b-0 lg:border-r">
            {president.image && (
              <Image
                src={president.image}
                alt={`${president.name}, KUCC President`}
                fill
                sizes="(min-width: 1280px) 26rem, (min-width: 1024px) 22rem, 100vw"
                className="object-cover object-top"
              />
            )}
          </div>

          <div className="flex flex-col gap-6 p-[calc(var(--space)*3)] lg:p-[calc(var(--space)*4)]">
            <Quote size={40} className="text-brand shrink-0" aria-hidden />

            {useLead && (
              <p className="text-brand max-w-3xl text-2xl font-semibold leading-snug sm:text-3xl">{lead}</p>
            )}

            {body.length > 0 && (
              <div className="stack max-w-3xl">
                {body.map((t, i) => (
                  <p key={i} className="fs-text text-muted-c leading-relaxed">
                    {t}
                  </p>
                ))}
              </div>
            )}

            <footer className="border-line mt-auto flex flex-col gap-0.5 border-t pt-5">
              <p className="text-brand text-2xl font-semibold">{president.name}</p>
              <p className="fs-small text-muted-c">{president.role}</p>
            </footer>
          </div>
        </article>
      </div>
    </section>
  )
}