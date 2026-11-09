const DEVICE = 'kucc:device'
const MINE = 'kucc:myvotes'

export function deviceId() {
  try {
    let id = localStorage.getItem(DEVICE)
    if (!id) {
      id = crypto.randomUUID()
      localStorage.setItem(DEVICE, id)
    }
    return id
  } catch {
    return 'no-storage-' + Math.random().toString(36).slice(2)
  }
}

export const loadMyVotes = (): Record<string, 1 | -1> => {
  try {
    return JSON.parse(localStorage.getItem(MINE) ?? '{}')
  } catch {
    return {}
  }
}

export const saveMyVotes = (v: Record<string, 1 | -1>) => {
  try {
    localStorage.setItem(MINE, JSON.stringify(v))
  } catch {}
}

export async function sendVote(id: string, value: 1 | -1 | 0, token?: string) {
  const res = await fetch(`/api/projects/${encodeURIComponent(id)}/vote`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ value, voterId: deviceId(), token }),
  })
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error ?? 'Vote failed')
}