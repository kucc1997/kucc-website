'use client'
import { useEffect, useState } from 'react'
import { ChevronDown, Minus, Square } from 'lucide-react'
import { MemberCard } from './MemberCard'
import type { Group, Member } from '@/data/team'

const groups: { id: Group; label: string; hash: string }[] = [
  { id: 'executive', label: 'Executive Committee', hash: 'executive-committee' },
  { id: 'advisory', label: 'Advisory Board', hash: 'advisory-board' },
]

export default function TeamTabs({ data }: { data: Record<Group, Record<string, Member[]>> }) {
  const [group, setGroup] = useState<Group>('executive')

  // keys look like "executive:2025"
  const allKeys = (Object.keys(data) as Group[]).flatMap((g) =>
    Object.keys(data[g]).map((y) => `${g}:${y}`),
  )

  // everything except each group's newest year starts minimised
  const [minimised, setMinimised] = useState<Set<string>>(() => {
    const s = new Set<string>()
    ;(Object.keys(data) as Group[]).forEach((g) =>
      Object.keys(data[g])
        .sort((a, b) => b.localeCompare(a))
        .slice(1)
        .forEach((y) => s.add(`${g}:${y}`)),
    )
    return s
  })

  // years whose cards have been shown at least once. Collapsed years that were never
  // opened don't mount their cards, so their photos aren't downloaded up front.
  const [opened, setOpened] = useState<Set<string>>(new Set())

  useEffect(() => {
    setOpened((prev) => {
      let changed = false
      const next = new Set(prev)
      allKeys.forEach((k) => {
        if (!minimised.has(k) && !next.has(k)) {
          next.add(k)
          changed = true
        }
      })
      return changed ? next : prev
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [minimised])

  useEffect(() => {
    const sync = () => {
      const h = window.location.hash.slice(1)
      const g = groups.find((x) => x.hash === h)
      if (g) setGroup(g.id)
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const years = Object.keys(data[group]).sort((a, b) => b.localeCompare(a))
  const keyOf = (y: string) => `${group}:${y}`
  const allMin = years.every((y) => minimised.has(keyOf(y)))

  const toggle = (y: string, minimise?: boolean) =>
    setMinimised((prev) => {
      const next = new Set(prev)
      const k = keyOf(y)
      if (minimise ?? !next.has(k)) next.add(k)
      else next.delete(k)
      return next
    })

  const setAll = (min: boolean) =>
    setMinimised((prev) => {
      const next = new Set(prev)
      years.forEach((y) => (min ? next.add(keyOf(y)) : next.delete(keyOf(y))))
      return next
    })

  return (
    <section className="bg-page">
      {/* tabs */}
      <div className="border-line bg-page sticky top-[var(--nav-h)] z-20 border-b">
        <div className="wrap flex items-center justify-between gap-4">
          <div role="tablist" className="flex overflow-x-auto [scrollbar-width:none]">
            {groups.map((g) => {
              const on = group === g.id
              return (
                <button
                  key={g.id}
                  role="tab"
                  type="button"
                  aria-selected={on}
                  onClick={() => {
                    setGroup(g.id)
                    history.replaceState(null, '', `#${g.hash}`)
                  }}
                  className={`fs-text -mb-px whitespace-nowrap border-b-2 py-3 pr-6 ${
                    on ? 'border-brand text-brand' : 'text-muted-c hover-brand border-transparent'
                  }`}
                >
                  {g.label}
                </button>
              )
            })}
          </div>
          {years.length > 1 && (
            <button
              type="button"
              onClick={() => setAll(!allMin)}
              className="border-line text-muted-c hover:border-brand shrink-0 border px-3 py-1 text-sm hover:text-[color:var(--color-primary)]"
            >
              {allMin ? 'Maximise all' : 'Minimise all'}
            </button>
          )}
        </div>
      </div>

      {/* year windows */}
      <div className="wrap py-5 lg:py-6">
        <div key={group} className="animate-[tab-in_200ms_ease-out] space-y-3">
          {years.map((y) => {
            const isMin = minimised.has(keyOf(y))
            const members = data[group][y]
            const mount = !isMin || opened.has(keyOf(y))
            return (
              <article key={y} className="border-line border">
                <div
                  className={`bg-page text-body flex items-center gap-2 transition-colors duration-150 hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] focus-within:bg-[var(--color-primary)] focus-within:text-[var(--color-bg)] ${
                    isMin ? '' : 'border-line border-b'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(y)}
                    aria-expanded={!isMin}
                    className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2.5 text-left outline-none"
                  >
                    <ChevronDown size={16} className={`shrink-0 transition-transform ${isMin ? '-rotate-90' : ''}`} />
                    <span className="text-sm font-semibold tabular-nums sm:text-base">{y}</span>
                    <span className="ml-auto shrink-0 text-xs opacity-90">
                      {members.length} {members.length === 1 ? 'member' : 'members'}
                    </span>
                  </button>
                  <div className="flex shrink-0 items-center pr-1">
                    <button
                      type="button"
                      aria-label={`Minimise ${y}`}
                      disabled={isMin}
                      onClick={() => toggle(y, true)}
                      className="p-2 opacity-70 hover:opacity-100 disabled:opacity-25"
                    >
                      <Minus size={14} />
                    </button>
                    <button
                      type="button"
                      aria-label={`Maximise ${y}`}
                      disabled={!isMin}
                      onClick={() => toggle(y, false)}
                      className="p-2 opacity-70 hover:opacity-100 disabled:opacity-25"
                    >
                      <Square size={12} />
                    </button>
                  </div>
                </div>

                <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isMin ? 'grid-rows-[0fr]' : 'grid-rows-[1fr]'}`}>
                  <div className={`overflow-hidden ${isMin ? 'invisible' : ''}`}>
                    <ul className="grid gap-3 p-3 md:grid-cols-2 xl:grid-cols-3">
                      {mount &&
                        members.map((m, i) => (
                          <li key={m.mail + m.position}>
                            <MemberCard m={m} priority={!isMin && y === years[0] && i < 3} />
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <p className="text-muted-c mt-8 text-center text-sm">Department of Computer Science and Engineering</p>
      </div>
    </section>
  )
}