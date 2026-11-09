'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Search } from 'lucide-react'
import { SUBMIT_URL, type Project } from '@/data/projects'
import { loadMyVotes, saveMyVotes, sendVote } from '@/lib/voteClient'
import ProjectCard from './ProjectCard'
import { EXAMPLE_NOTE, EXAMPLE_PROJECT, PAGE_SIZE, SHOW_REAL_PROJECTS } from '@/data/projects-config'

type Sort = 'relevance' | 'top' | 'new' | 'trending'
type Range = 'all' | 'day' | 'week' | 'month' | 'year'

// settings (SHOW_REAL_PROJECTS, PAGE_SIZE, the example card and its note) live in
// src/data/projects-config.ts so they are easy to edit

const DAY = 86_400_000
const RANGE_MS: Record<Range, number> = { all: Infinity, day: DAY, week: 7 * DAY, month: 30 * DAY, year: 365 * DAY }
const RANGE_LABEL: Record<Range, string> = { all: 'All time', day: 'Today', week: 'This week', month: 'This month', year: 'This year' }
const SORT_LABEL: Record<Sort, string> = { relevance: 'Relevance', top: 'Top', new: 'New', trending: 'Trending' }

const sel = 'border-line bg-page text-body border px-3 py-2 text-sm outline-none focus:border-[color:var(--color-primary)]'

// 1 2 3 ... 9 10 style page list
function pageList(current: number, total: number): (number | '…')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const set = new Set([1, total, current - 1, current, current + 1])
  const nums = Array.from(set).filter((n) => n >= 1 && n <= total).sort((a, b) => a - b)
  const out: (number | '…')[] = []
  nums.forEach((n, i) => {
    if (i > 0 && n - nums[i - 1] > 1) out.push('…')
    out.push(n)
  })
  return out
}

export default function ProjectBoard({ initial }: { initial: Project[] }) {
  // show the example card when real projects are switched off OR the API returned none
  const exampleMode = !SHOW_REAL_PROJECTS || initial.length === 0
  const projects = useMemo(() => (exampleMode ? [] : initial), [exampleMode, initial])

  const [votes, setVotes] = useState<Record<string, 1 | -1>>({}) // this device's votes
  const initialVotes = useRef<Record<string, 1 | -1>>({}) // votes already counted in the API totals
  const topRef = useRef<HTMLDivElement>(null)
  const firstRender = useRef(true)
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState<Sort>('top')
  const [range, setRange] = useState<Range>('all')
  const [tag, setTag] = useState('')
  const [page, setPage] = useState(1)
  const [notice, setNotice] = useState('')
  const [now, setNow] = useState(0) // set after mount to avoid hydration mismatch

  useEffect(() => {
    const mine = loadMyVotes()
    initialVotes.current = mine
    setVotes(mine)
    setNow(Date.now())
  }, [])

  // go back to page 1 whenever the filters change
  useEffect(() => setPage(1), [query, sort, range, tag])

  // API totals already include earlier votes, so only add the change since page load
  const scoreOf = (p: Project) => p.votes - (initialVotes.current[p.id] ?? 0) + (votes[p.id] ?? 0)
  const age = (p: Project) => Math.max(0, now - new Date(p.createdAt).getTime())

  const vote = async (id: string, v: 1 | -1) => {
    const before = votes
    const next = { ...votes }
    if (next[id] === v) delete next[id]
    else next[id] = v
    setVotes(next) // optimistic
    saveMyVotes(next)
    setNotice('')
    try {
      await sendVote(id, next[id] ?? 0)
    } catch (e) {
      setVotes(before) // roll back
      saveMyVotes(before)
      setNotice(e instanceof Error ? e.message : 'Vote failed')
    }
  }

  const allTags = useMemo(() => [...new Set(projects.flatMap((p) => p.tags))].sort(), [projects])

  const relevance = (p: Project, q: string) => {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean)
    if (!terms.length) return 0
    let score = 0
    for (const t of terms) {
      if (p.name.toLowerCase().includes(t)) score += 5
      if (p.tags.some((x) => x.toLowerCase().includes(t))) score += 3
      if (p.members.some((m) => m.toLowerCase().includes(t))) score += 2
      if (p.description.toLowerCase().includes(t)) score += 1
    }
    return score
  }

  const list = useMemo(() => {
    const q = query.trim()
    const filtered = projects.filter((p) => {
      if (tag && !p.tags.includes(tag)) return false
      if (range !== 'all' && now && age(p) > RANGE_MS[range]) return false
      return !q || relevance(p, q) > 0
    })

    const trending = (p: Project) => scoreOf(p) / Math.pow(age(p) / DAY + 2, 1.5)

    return [...filtered].sort((a, b) => {
      switch (sort) {
        case 'relevance':
          return relevance(b, q) - relevance(a, q) || scoreOf(b) - scoreOf(a)
        case 'new':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case 'trending':
          return trending(b) - trending(a)
        default:
          return scoreOf(b) - scoreOf(a)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects, votes, query, sort, range, tag, now])

  const totalPages = Math.max(1, Math.ceil(list.length / PAGE_SIZE))
  const current = Math.min(page, totalPages)
  const start = (current - 1) * PAGE_SIZE
  const visible = list.slice(start, start + PAGE_SIZE)

  // scroll to the top of the list when the page changes (not on first load)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [current])

  const onSearch = (v: string) => {
    setQuery(v)
    if (v && sort !== 'relevance') setSort('relevance')
    if (!v && sort === 'relevance') setSort('top')
  }

  const pageBtn = 'border-line text-muted-c hover:border-brand hover:text-[color:var(--color-primary)] min-w-9 border px-3 py-1.5 text-sm disabled:pointer-events-none disabled:opacity-40'

  return (
    <div ref={topRef} className="scroll-mt-20">
      {/* header: title left, submit button pinned right */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        <h2 className="text-brand text-3xl font-semibold sm:text-4xl">Projects</h2>
        <a
          href={SUBMIT_URL}
          target="_blank"
          rel="noreferrer"
          className="border-brand text-brand inline-flex shrink-0 items-center gap-2 border px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] sm:px-4 sm:text-sm"
        >
          Submit your project <ExternalLink size={14} />
        </a>
      </div>

      {exampleMode ? (
        /* example mode: one placeholder card, clearly labelled */
        <>
          <p className="fs-small text-muted-c mb-3 leading-snug">
            {EXAMPLE_NOTE}
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <ProjectCard
              project={EXAMPLE_PROJECT}
              score={0}
              myVote={0}
              onVote={() => {}}
              onTag={() => {}}
              example
            />
          </div>
        </>
      ) : (
        <>
          {notice && <p className="fs-small text-brand mb-3">{notice}</p>}

          {/* controls */}
          <div className="border-line mb-4 grid gap-2 border p-3 md:grid-cols-[minmax(0,1fr)_auto_auto_auto]">
            <label className="border-line flex min-w-0 items-center gap-2 border px-3">
              <Search size={16} className="text-muted-c shrink-0" />
              <input
                value={query}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search name, tag, member or description"
                className="text-body w-full min-w-0 bg-transparent py-2 text-sm outline-none"
              />
            </label>
            <div className="grid grid-cols-3 gap-2 md:contents">
              <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className={sel} aria-label="Sort">
                {(Object.keys(SORT_LABEL) as Sort[]).map((s) => (
                  <option key={s} value={s}>{SORT_LABEL[s]}</option>
                ))}
              </select>
              <select value={range} onChange={(e) => setRange(e.target.value as Range)} className={sel} aria-label="Time range">
                {(Object.keys(RANGE_LABEL) as Range[]).map((r) => (
                  <option key={r} value={r}>{RANGE_LABEL[r]}</option>
                ))}
              </select>
              <select value={tag} onChange={(e) => setTag(e.target.value)} className={sel} aria-label="Tag">
                <option value="">All tags</option>
                {allTags.map((t) => (
                  <option key={t} value={t}>#{t}</option>
                ))}
              </select>
            </div>
          </div>

          <p className="fs-small text-muted-c mb-3">
            {list.length === 0
              ? '0 projects'
              : `Showing ${start + 1}-${start + visible.length} of ${list.length} ${list.length === 1 ? 'project' : 'projects'}`}
          </p>

          {list.length === 0 ? (
            <div className="border-line border border-dashed px-4 py-10 text-center">
              <p className="fs-small text-muted-c">No projects match. Try a different search or filter.</p>
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  score={scoreOf(p)}
                  myVote={votes[p.id] ?? 0}
                  onVote={(v) => vote(p.id, v)}
                  onTag={setTag}
                />
              ))}
            </div>
          )}

          {/* pagination */}
          {totalPages > 1 && (
            <nav aria-label="Pagination" className="mt-6 flex flex-wrap items-center justify-center gap-1.5">
              <button type="button" className={`${pageBtn} inline-flex items-center`} disabled={current === 1} onClick={() => setPage(current - 1)} aria-label="Previous page">
                <ChevronLeft size={16} />
              </button>
              {pageList(current, totalPages).map((n, i) =>
                n === '…' ? (
                  <span key={`gap-${i}`} className="text-muted-c px-1">…</span>
                ) : (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setPage(n)}
                    aria-current={n === current ? 'page' : undefined}
                    className={`${pageBtn} ${n === current ? '!border-[color:var(--color-primary)] !text-[color:var(--color-primary)] font-semibold' : ''}`}
                  >
                    {n}
                  </button>
                ),
              )}
              <button type="button" className={`${pageBtn} inline-flex items-center`} disabled={current === totalPages} onClick={() => setPage(current + 1)} aria-label="Next page">
                <ChevronRight size={16} />
              </button>
            </nav>
          )}
        </>
      )}
    </div>
  )
}