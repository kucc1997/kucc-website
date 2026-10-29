import type { Metadata } from 'next'
// @ts-ignore Next.js provides CSS side-effect import declarations through its generated types
import './globals.css'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Navbar/Navbar'
import { PreviewHost } from '@/components/HoverPreview' // adjust path
import { ALL_PREVIEW_LINKS } from '@/data/preview-links' 

export const metadata: Metadata = {
  title: 'Kathmandu University Computer Club (KUCC)',
  description:
    'Kathmandu University Computer Club (KUCC) is a non-profit, independent club formed by students of the Department of Computer Science and Engineering in 1997, registered as the first club of Kathmandu University (001/1997).',
  icons: { icon: '/kucc-logo.svg' },
}

// runs before paint so there is no light/dark flash; default = dark
const themeScript = `try{var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.toggle('dark',t==='dark')}catch(e){document.documentElement.classList.add('dark')}`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen bg-page antialiased overflow-x-hidden">
        <NavBar />
        <main style={{ paddingTop: 'var(--nav-h)' }}>{children}</main>
          <PreviewHost links={ALL_PREVIEW_LINKS} />
        <Footer />
      </body>
    </html>
  )
}