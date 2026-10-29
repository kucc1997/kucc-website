import { projects as fallback, type Project } from '@/data/projects'

const base = process.env.KUOSC_API_URL

export const authHeaders = () => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${process.env.KUOSC_API_KEY}`,
})

// Adjust field names here once you see the real KUOSC response.
const toProject = (r: any): Project => ({
  id: String(r.id),
  slug: r.slug,
  name: r.name,
  description: r.description ?? '',
  github: r.github ?? r.githubUrl ?? '',
  members: r.members ?? [],
  tags: r.tags ?? [],
  submittedBy: r.submittedBy ?? r.members?.[0] ?? '',
  createdAt: r.createdAt,
  votes: Number(r.votes ?? 0),
})

export async function getProjects(): Promise<Project[]> {
  if (!base) return fallback
  try {
    const res = await fetch(`${base}/student-projects`, {
      headers: authHeaders(),
      next: { revalidate: 60 },
    })
    if (!res.ok) throw new Error(String(res.status))
    const data = await res.json()
    return (Array.isArray(data) ? data : data.items ?? []).map(toProject)
  } catch {
    return fallback
  }
}