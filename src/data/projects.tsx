export type Project = {
  id: string
  slug?: string
  /** where "Visit site" goes. If empty, it links to the KUOSC docs page for this project. */
  url?: string
  name: string
  description: string
  github: string
  members: string[]
  tags: string[]
  submittedBy: string
  createdAt: string // ISO date
  votes: number
}

// KUOSC docs section for student projects. This section does NOT exist yet on kuosc.org.np,
// so until it is created, give each project its own `url` (live site or GitHub repo).
export const DOCS_BASE = 'https://www.kuosc.org.np/docs/student-project'

// TODO: replace with the real KUOSC submission page
export const SUBMIT_URL = 'https://www.kuosc.org.np/docs/intro'

export const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

export const projectUrl = (p: Pick<Project, 'name' | 'slug' | 'url'>) =>
  p.url || `${DOCS_BASE}/${p.slug || slugify(p.name)}`

/* ============ ADD STUDENT PROJECTS HERE ============
   Empty = the board shows its "Example" card.
   Copy the entry below, remove the comment markers and fill it in:

  {
    id: 'p1',
    name: 'Project Name',
    description: 'One or two sentences about the project.',
    github: 'https://github.com/owner/repo',
    url: 'https://github.com/owner/repo', // optional: where "Visit site" goes
    members: ['Member One', 'Member Two'],
    tags: ['web', 'react'],
    submittedBy: 'Member One',
    createdAt: '2026-10-29',
    votes: 0,
  },
=================================================== */
export const projects: Project[] = []