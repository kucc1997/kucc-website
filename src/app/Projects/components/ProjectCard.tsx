'use client'
import { useState } from 'react'
import { ArrowBigDown, ArrowBigUp, ArrowUpRight, Github, Users } from 'lucide-react'
import HoverPreview from '@/components/HoverPreview'
import type { HeroLink } from '@/components/PageHero'
import { projectUrl, type Project } from '@/data/projects'

function repoPath(url: string) {
  const m = url.match(/github\.com\/([^/\s]+)\/([^/\s#?]+)/i)
  return m ? `${m[1]}/${m[2].replace(/\.git$/, '')}` : null
}

const fmt = (d: string) => {
  const date = new Date(`${d.slice(0, 10)}T00:00:00`)
  return Number.isNaN(date.getTime())
    ? ''
    : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const STRIPES = 'repeating-linear-gradient(45deg, var(--color-line) 0 1px, transparent 1px 10px)'

const VISIT_BTN = 'btn-outline fs-small ml-auto shrink-0 gap-1.5 !px-3 !py-1.5'

export default function ProjectCard({
  project: p,
  score,
  myVote,
  onVote,
  onTag,
  example = false,
}: {
  project: Project
  score: number
  myVote: 0 | 1 | -1
  onVote: (v: 1 | -1) => void
  onTag: (t: string) => void
  /** placeholder card: shows an "Example" badge, voting and the visit link are disabled */
  example?: boolean
}) {
  const [imgOk, setImgOk] = useState(true)
  const [showPreview, setShowPreview] = useState(false)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const repo = repoPath(p.github ?? '')
  // an example has no real site, so don't build a project URL for it
  const href = example ? '#' : projectUrl(p)
  const date = fmt(p.createdAt)

  // same shape the page hero passes to HoverPreview
  const link: HeroLink = { label: p.name, href, embed: true }

  // hover handlers: only the Visit site button shows the live preview
  const hover = {
    onMouseEnter: () => setShowPreview(true),
    onMouseLeave: () => setShowPreview(false),
    onMouseMove: (e: React.MouseEvent) => setPos({ x: e.clientX, y: e.clientY }),
    onFocus: (e: React.FocusEvent<HTMLElement>) => {
      const r = e.currentTarget.getBoundingClientRect()
      setPos({ x: r.right - 40, y: r.top + r.height / 2 }) // keyboard focus: anchor to the element
      setShowPreview(true)
    },
    onBlur: () => setShowPreview(false),
  }

  return (
    <>
      <article className="border-line bg-page flex h-full flex-col overflow-hidden border transition-colors duration-150 hover:border-[var(--color-primary)]">
        {/* image only: not a link, no hover preview. 2:1 matches the GitHub card image */}
        <div
          className="border-line relative aspect-[2/1] w-full shrink-0 border-b"
          style={{ backgroundImage: STRIPES }}
        >
          {repo && imgOk && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`https://opengraph.githubassets.com/1/${repo}`}
              alt={`${repo} on GitHub`}
              loading="lazy"
              onError={() => setImgOk(false)}
              className="h-full w-full object-cover"
            />
          )}

          {example && (
            <span className="bg-page border-line text-brand absolute left-2 top-2 border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide">
              Example
            </span>
          )}
        </div>

        {/* info: grows to fit, nothing is clipped */}
        <div className="flex flex-1 flex-col gap-2 p-4">
          <h3 className="fs-text text-brand font-semibold leading-tight">{p.name}</h3>

          <p className="fs-small text-muted-c leading-snug">{p.description}</p>

          {/* one quiet line: members · date · repo */}
          <div className="text-muted-c flex flex-wrap items-center gap-x-2 gap-y-1 text-xs">
            <span className="inline-flex items-center gap-1" title={p.members.join(', ')}>
              <Users size={12} className="shrink-0" />
              {p.members.length} {p.members.length === 1 ? 'member' : 'members'}
            </span>
            {date && (
              <>
                <span aria-hidden="true">·</span>
                <span>{date}</span>
              </>
            )}
            {repo && (
              <>
                <span aria-hidden="true">·</span>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover-brand inline-flex min-w-0 items-center gap-1"
                >
                  <Github size={12} className="shrink-0" />
                  <span className="truncate">{repo}</span>
                </a>
              </>
            )}
          </div>

          {p.tags.length > 0 && (
            <ul className="mt-1 flex flex-wrap gap-1">
              {p.tags.map((t) => (
                <li key={t}>
                  <button
                    type="button"
                    onClick={() => onTag(t)}
                    disabled={example}
                    className="border-line text-muted-c hover:border-brand hover:text-[color:var(--color-primary)] border px-1.5 py-0.5 text-[11px] disabled:pointer-events-none"
                  >
                    #{t}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* votes + visit button */}
        <div className="border-line flex items-center gap-1 border-t px-3 py-2">
          <button
            type="button"
            aria-label="Upvote"
            aria-pressed={myVote === 1}
            disabled={example}
            onClick={() => onVote(1)}
            className={`${myVote === 1 ? 'text-brand' : 'text-muted-c hover-brand'} disabled:pointer-events-none disabled:opacity-50`}
          >
            <ArrowBigUp size={24} fill={myVote === 1 ? 'currentColor' : 'none'} />
          </button>
          <span className={`min-w-8 text-center text-sm font-semibold tabular-nums ${myVote ? 'text-brand' : 'text-body'}`}>
            {score}
          </span>
          <button
            type="button"
            aria-label="Downvote"
            aria-pressed={myVote === -1}
            disabled={example}
            onClick={() => onVote(-1)}
            className={`${myVote === -1 ? 'text-brand' : 'text-muted-c hover-brand'} disabled:pointer-events-none disabled:opacity-50`}
          >
            <ArrowBigDown size={24} fill={myVote === -1 ? 'currentColor' : 'none'} />
          </button>

          {example ? (
            <span aria-disabled="true" className={`${VISIT_BTN} opacity-50`}>
              Visit site
              <ArrowUpRight size={16} className="shrink-0" />
            </span>
          ) : (
            <a href={href} aria-label={`Visit ${p.name}`} className={VISIT_BTN} {...hover}>
              Visit site
              <ArrowUpRight size={16} className="shrink-0" />
            </a>
          )}
        </div>
      </article>

      {/* rendered outside the card so overflow-hidden can't clip it */}
      {!example && showPreview && <HoverPreview key={href} link={link} x={pos.x} y={pos.y} />}
    </>
  )
}