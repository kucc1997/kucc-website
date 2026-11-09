import type { Project } from '@/data/projects'

/* ============ EDIT THE PROJECTS SECTION HERE ============ */

// false = always show the single "Example" card
// true  = show the projects that come from the API
//         (if the API returns none, or is unreachable, the example card is shown automatically)
export const SHOW_REAL_PROJECTS = true

// projects per page
export const PAGE_SIZE = 12

// line shown above the example card
export const EXAMPLE_NOTE = 'This is just an example. All the student projects will be showcased here.'

// the placeholder card
export const EXAMPLE_PROJECT: Project = {
  id: 'example',
  name: 'Your Project Name',
  description:
    'This is an example card showing how a project will look. Student projects will appear here once they are submitted.',
  github: '',
  members: ['Student One', 'Student Two'],
  tags: ['example', 'web'],
  submittedBy: 'Student One',
  createdAt: '2026-10-01',
  votes: 0,
}

/* ========================================================= */