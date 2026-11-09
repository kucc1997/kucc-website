import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'node:crypto'
import { authHeaders } from '@/lib/kuosc'

// Per-instance limiter: a first filter only. KUOSC must enforce the real limits.
const hits = new Map<string, number[]>()
const limited = (key: string, max = 20, windowMs = 60_000) => {
  const now = Date.now()
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs)
  recent.push(now)
  hits.set(key, recent)
  return recent.length > max
}

const hash = (s: string) =>
  createHash('sha256').update(`${process.env.VOTE_SALT}:${s}`).digest('hex')

async function captchaOk(token?: string, ip?: string) {
  if (!process.env.TURNSTILE_SECRET) return true // not configured yet
  if (!token) return false
  const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET,
      response: token,
      ...(ip ? { remoteip: ip } : {}),
    }),
  })
  return (await r.json()).success === true
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  const body = await req.json().catch(() => null)
  const value = body?.value
  const device = String(body?.voterId ?? '')

  if (![1, -1, 0].includes(value) || device.length < 16)
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  if (limited(ip)) return NextResponse.json({ error: 'Too many votes. Slow down.' }, { status: 429 })
  if (!(await captchaOk(body?.token, ip)))
    return NextResponse.json({ error: 'Captcha failed' }, { status: 403 })

  try {
    const res = await fetch(
      `${process.env.KUOSC_API_URL}/student-projects/${encodeURIComponent(id)}/vote`,
      {
        method: 'POST',
        headers: authHeaders(),
        body: JSON.stringify({ value, deviceHash: hash(device), ipHash: hash(ip) }),
      },
    )
    if (!res.ok)
      return NextResponse.json({ error: 'Vote rejected' }, { status: res.status === 429 ? 429 : 502 })
    return NextResponse.json(await res.json().catch(() => ({ ok: true })))
  } catch {
    return NextResponse.json({ error: 'Vote service unavailable' }, { status: 502 })
  }
}