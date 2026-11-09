'use client'
import { useEffect, useState } from 'react'
import { ArrowUpRight, CheckCircle2, Circle, FileText, Mail, Upload, X } from 'lucide-react'

const DEPARTMENTS = ['CE', 'CS', 'BIT']
const BATCH_COUNT = 5
const MAX_BYTES = 10 * 1024 * 1024
const PROOF_ACCEPT = '.pdf,.doc,.docx,.xls,.xlsx,.csv,image/*'

// latest N years, newest first, based on the current year (same source the footer uses)
const makeBatches = () => {
  const year = new Date().getFullYear()
  return Array.from({ length: BATCH_COUNT }, (_, i) => String(year - i))
}

const inputCls =
  'fs-small h-10 w-full border border-line bg-page px-3 text-body placeholder:text-muted-c outline-none transition-colors hover:border-[color:var(--color-primary)] focus:border-[color:var(--color-primary)]'

function usePreview(file: File | null) {
  const [url, setUrl] = useState<string | null>(null)
  useEffect(() => {
    if (!file) {
      setUrl(null)
      return undefined
    }
    const u = URL.createObjectURL(file)
    setUrl(u)
    return () => URL.revokeObjectURL(u)
  }, [file])
  return url
}

const formatSize = (b: number) =>
  b < 1024 * 1024 ? `${Math.max(1, Math.round(b / 1024))} KB` : `${(b / 1024 / 1024).toFixed(1)} MB`

/* ---------- form building blocks ---------- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="rule-primary mb-3 pb-1">
        <h2 className="fs-small text-brand px-3">{title}</h2>
      </div>
      <div className="space-y-3">{children}</div>
    </section>
  )
}

function Field({
  label, htmlFor, required, children,
}: { label: string; htmlFor?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="min-w-0 space-y-1.5">
      <label htmlFor={htmlFor} className="fs-small text-muted-c block leading-none">
        {label}
        {required && <span className="text-brand"> *</span>}
      </label>
      {children}
    </div>
  )
}

function Choice({
  label, options, value, onChange,
}: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-wrap gap-1.5">
      {options.map((o) => {
        const on = value === o
        return (
          <button
            key={o}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => onChange(o)}
            className={`fs-small h-10 min-w-14 border px-3 tabular-nums outline-none transition-colors ${
              on
                ? 'border-brand bg-brand text-onbrand'
                : 'border-line text-muted-c hover:border-brand hover:text-[color:var(--color-primary)] focus-visible:border-brand'
            }`}
          >
            {o}
          </button>
        )
      })}
    </div>
  )
}

function Dropzone({
  id, accept, prompt, hint, file, error, onFile, onClear,
}: {
  id: string; accept: string; prompt: string; hint: string
  file: File | null; error?: string
  onFile: (f: File) => void; onClear: () => void
}) {
  const [drag, setDrag] = useState(false)
  return (
    <div className="space-y-1">
      <div className="relative">
        <input
          id={id}
          type="file"
          accept={accept}
          className="peer sr-only"
          onChange={(e) => {
            const f = e.target.files?.[0]
            if (f) onFile(f)
            e.target.value = ''
          }}
        />
        <label
          htmlFor={id}
          onDragOver={(e) => { e.preventDefault(); setDrag(true) }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => {
            e.preventDefault()
            setDrag(false)
            const f = e.dataTransfer.files?.[0]
            if (f) onFile(f)
          }}
          className={`flex cursor-pointer items-center gap-3 border py-3 pl-3 pr-9 transition-colors peer-focus-visible:border-[color:var(--color-primary)] ${
            file ? 'border-line' : 'border-dashed'
          } ${drag ? 'border-brand bg-[var(--color-hover-bg)] text-[var(--color-hover-text)]' : 'border-line hover:border-brand'}`}
        >
          {file ? <FileText size={20} className="text-brand shrink-0" /> : <Upload size={20} className="text-muted-c shrink-0" />}
          <div className="min-w-0">
            <p className="fs-small text-body truncate leading-tight">{file ? file.name : prompt}</p>
            <p className="text-muted-c mt-0.5 truncate text-[11px]">
              {file ? `${formatSize(file.size)}. Click to replace.` : hint}
            </p>
          </div>
        </label>
        {file && (
          <button
            type="button"
            onClick={onClear}
            aria-label="Remove file"
            className="text-muted-c hover-brand absolute right-2 top-1/2 -translate-y-1/2 p-1"
          >
            <X size={16} />
          </button>
        )}
      </div>
      {error && <p className="text-[13px] text-red-500">{error}</p>}
    </div>
  )
}

/* ---------- page ---------- */

export default function JoinForm() {
  const [v, setV] = useState({ email: '', first: '', middle: '', last: '', department: '', batch: '' })
  const [photo, setPhoto] = useState<File | null>(null)
  const [proof, setProof] = useState<File | null>(null)
  const [err, setErr] = useState<{ photo?: string; proof?: string }>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')
  const photoUrl = usePreview(photo)
  const batches = makeBatches()

  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setV((p) => ({ ...p, [k]: e.target.value }))

  const fullName = [v.first, v.middle, v.last].map((s) => s.trim()).filter(Boolean).join(' ')
  const initials = ((v.first.trim()[0] ?? '') + (v.last.trim()[0] ?? '')).toUpperCase()

  const items = [
    { label: 'Email', ok: /\S+@\S+\.\S+/.test(v.email) },
    { label: 'First name', ok: !!v.first.trim() },
    { label: 'Last name', ok: !!v.last.trim() },
    { label: 'Department', ok: !!v.department },
    { label: 'Batch', ok: !!v.batch },
    { label: 'Photo', ok: !!photo },
    { label: 'Proof of payment', ok: !!proof },
  ]
  const done = items.filter((i) => i.ok).length
  const complete = done === items.length

  function pick(kind: 'photo' | 'proof', f: File) {
    if (f.size > MAX_BYTES) return setErr((p) => ({ ...p, [kind]: 'File is larger than 10 MB.' }))
    if (kind === 'photo' && !f.type.startsWith('image/'))
      return setErr((p) => ({ ...p, photo: 'Photo must be an image.' }))
    setErr((p) => ({ ...p, [kind]: undefined }))
    if (kind === 'photo') setPhoto(f)
    else setProof(f)
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!complete || !photo || !proof) return
    setStatus('sending')
    try {
      const fd = new FormData()
      Object.entries(v).forEach(([k, val]) => fd.append(k, val))
      fd.append('photo', photo)
      fd.append('proof', proof)
      // TODO: point this at your real intake endpoint
      const res = await fetch('/api/join', { method: 'POST', body: fd })
      if (!res.ok) throw new Error()
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  const dim = 'opacity-40'
  // opposite of the page: the frame colour is the contrast colour, the page background is the text on it
  const cardStyle = { background: 'var(--color-frame)', color: 'var(--color-bg)' }
  const soft = 'color-mix(in srgb, currentColor 30%, transparent)'

  return (
    <div className="bg-page">
      <div className="wrap py-10 lg:py-16">
        {/* page heading, same rule + title as the other sections */}
        <div className="rule-primary mb-6 flex flex-wrap items-end justify-between gap-x-8 gap-y-2 pb-1">
          <h1 className="fs-text text-brand px-3">Join KUCC</h1>
          <p className="fs-small text-muted-c px-3 leading-snug lg:max-w-md lg:text-right">
            Apply for membership. Your card updates as you type.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)]">
          {/* ============ FORM (left) ============ */}
          <form
            id="join-form"
            onSubmit={onSubmit}
            className="border-line bg-page order-2 border lg:order-1 lg:row-span-2"
          >
            <div className="border-line flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b px-4 py-3">
              <h2 className="fs-text text-brand font-semibold">Application</h2>
              <span className="fs-small text-muted-c">
                Fields marked <span className="text-brand">*</span> are required
              </span>
            </div>

            <div className="space-y-6 p-4 sm:p-5">
              <Section title="Personal details">
                <Field label="Email" htmlFor="email" required>
                  <input id="email" type="email" required placeholder="you@example.com" value={v.email} onChange={set('email')} className={inputCls} />
                </Field>
                <div className="grid gap-3 sm:grid-cols-3">
                  <Field label="First name" htmlFor="first" required>
                    <input id="first" required value={v.first} onChange={set('first')} className={inputCls} />
                  </Field>
                  <Field label="Middle name" htmlFor="middle">
                    <input id="middle" value={v.middle} onChange={set('middle')} className={inputCls} />
                  </Field>
                  <Field label="Last name" htmlFor="last" required>
                    <input id="last" required value={v.last} onChange={set('last')} className={inputCls} />
                  </Field>
                </div>
              </Section>

              <Section title="Academic details">
                <div className="grid gap-3 sm:grid-cols-[auto_1fr] sm:gap-8">
                  <Field label="Department" required>
                    <Choice label="Department" options={DEPARTMENTS} value={v.department} onChange={(d) => setV((p) => ({ ...p, department: d }))} />
                  </Field>
                  <Field label="Batch" required>
                    <Choice label="Batch" options={batches} value={v.batch} onChange={(b) => setV((p) => ({ ...p, batch: b }))} />
                  </Field>
                </div>
              </Section>

              <Section title="Documents (up to 10 MB each)">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field label="Photo" required>
                    <Dropzone
                      id="photo" accept="image/*" prompt="Upload a photo" hint="Drag and drop or click. Images only."
                      file={photo} error={err.photo} onFile={(f) => pick('photo', f)} onClear={() => setPhoto(null)}
                    />
                  </Field>
                  <Field label="Proof of payment" required>
                    <Dropzone
                      id="proof" accept={PROOF_ACCEPT} prompt="Upload proof of payment" hint="PDF, document, image or sheet."
                      file={proof} error={err.proof} onFile={(f) => pick('proof', f)} onClear={() => setProof(null)}
                    />
                  </Field>
                </div>
              </Section>
            </div>
          </form>

          {/* ============ BUSINESS CARD (top right) ============ */}
          <aside className="order-1 lg:order-2">
            <div
              className="relative flex aspect-[7/4] w-full flex-col justify-between overflow-hidden border border-frame p-4"
              style={cardStyle}
              aria-label="Live preview of your membership card"
            >
              {/* top: name + photo */}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] opacity-70">
                    KUCC Member Applicant
                  </p>
                  <h3 className={`mt-1.5 line-clamp-2 break-words text-xl font-semibold leading-tight sm:text-2xl ${fullName ? '' : dim}`}>
                    {fullName || 'Your Name'}
                  </h3>
                  <p className="mt-1 text-[11px] leading-snug opacity-70">Kathmandu University Computer Club</p>
                </div>
                <div
                  className="flex h-[4.5rem] w-14 shrink-0 items-center justify-center overflow-hidden border sm:h-20 sm:w-16"
                  style={{ borderColor: soft, background: photoUrl ? undefined : 'color-mix(in srgb, currentColor 10%, transparent)' }}
                >
                  {photoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={photoUrl} alt="Your photo" className="h-full w-full object-cover" />
                  ) : (
                    <span className="text-xl font-semibold opacity-70">{initials || '?'}</span>
                  )}
                </div>
              </div>

              {/* bottom: details */}
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2">
                  <Mail size={13} className="shrink-0 opacity-70" />
                  <span className={`break-all ${v.email ? '' : dim}`}>{v.email || 'you@example.com'}</span>
                </div>
                <div className="flex items-center justify-between gap-3 border-t pt-1.5" style={{ borderColor: soft }}>
                  <span className={v.department || v.batch ? '' : dim}>
                    {[v.department, v.batch && `Batch ${v.batch}`].filter(Boolean).join(' · ') || 'Department · Batch'}
                  </span>
                  {proof ? (
                    <span className="inline-flex min-w-0 max-w-[55%] items-center gap-1 border px-1.5 py-0.5 text-[10px]" style={{ borderColor: soft }}>
                      <CheckCircle2 size={11} className="shrink-0" />
                      <span className="truncate">{proof.name}</span>
                    </span>
                  ) : (
                    <span className="border px-1.5 py-0.5 text-[10px] opacity-70" style={{ borderColor: soft }}>
                      Payment pending
                    </span>
                  )}
                </div>
              </div>
            </div>
          </aside>

          {/* ============ CHECKLIST + SUBMIT (under the card) ============ */}
          <div className="border-line bg-page order-3 flex flex-col gap-4 border p-4 sm:p-5 lg:self-start">
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <h2 className="fs-small text-brand">Checklist</h2>
                <span className="fs-small text-muted-c tabular-nums">{done} of {items.length}</span>
              </div>
              <div className="h-1 w-full bg-[var(--color-line)]">
                <div className="bg-brand h-full transition-[width] duration-300" style={{ width: `${(done / items.length) * 100}%` }} />
              </div>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
                {items.map((i) => (
                  <li key={i.label} className={`fs-small flex items-center gap-2 ${i.ok ? 'text-body' : 'text-muted-c'}`}>
                    {i.ok ? <CheckCircle2 size={16} className="text-brand shrink-0" /> : <Circle size={16} className="shrink-0 opacity-50" />}
                    <span className="truncate">{i.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="fs-small text-muted-c leading-snug" aria-live="polite">
                {status === 'error' && <span className="text-red-500">Something went wrong. Please try again.</span>}
                {status === 'done' && 'Thanks. We will review your application.'}
                {status === 'idle' && (complete ? 'Everything looks good.' : 'Complete all required fields to submit.')}
                {status === 'sending' && 'Sending your application…'}
              </p>
              {/* same button as Sub-Programs, Communities and Projects */}
              <button
                type="submit"
                form="join-form"
                disabled={!complete || status === 'sending' || status === 'done'}
                className="btn-outline fs-small w-full !justify-center gap-1.5 !px-3 !py-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[color:var(--color-primary)]"
              >
                {status === 'sending' ? 'Submitting…' : status === 'done' ? 'Submitted' : 'Submit application'}
                <ArrowUpRight size={16} className="shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}