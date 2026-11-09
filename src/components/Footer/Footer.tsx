import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const socialHandles = [
  { icon: <FaYoutube />, link: 'https://www.youtube.com/channel/UChOg5n4TKmK-NHs8vM6Y7Rg', label: 'YouTube' },
  { icon: <FaSquareXTwitter />, link: 'https://twitter.com/kucc1997', label: 'Twitter' },
  { icon: <FaFacebook />, link: 'https://www.facebook.com/kucc1997', label: 'Facebook' },
  { icon: <FaInstagram />, link: 'https://www.instagram.com/kucc97/', label: 'Instagram' },
  { icon: <FaLinkedin />, link: 'https://www.linkedin.com/school/kucc/', label: 'LinkedIn' },
]

const footerLinks = {
  kucc: [
    { title: 'Apply To Be a Member', link: 'https://forms.gle/Y5vHobrCDVx2fPMaA' },
    // { title: 'Code of Conduct', link: '/code-of-conduct' },
    { title: 'KUCC Bidhan', link: '/docs/KUCC_bidhan.pdf', target: '_blank' },
  ],
  quickLinks: [
    { title: 'Executive Committee', link: '/executive-committee' },
    { title: 'Advisory Board', link: '/advisory-board' },
    { title: 'Communities', link: '/communities' },
    { title: 'IT Express', link: '/it-express' },
  ],
}

const contactInfo = [
  { icon: <Mail size={16} />, text: 'kucc@ku.edu.np', link: 'mailto:kucc@ku.edu.np' },
  // { icon: <Phone size={16} />, text: '+977 9865599415' },
  { icon: <MapPin size={16} />, text: 'Dhulikhel, Nepal' },
]

// smaller text and tighter spacing on mobile, normal from md up
const linkCls = 'block py-0.5 md:py-1.5 text-sm md:text-[length:var(--fs-small)] text-muted-c hover-brand'

function Heading({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base md:text-[length:var(--fs-text)] text-brand mb-1.5 md:mb-3">{children}</h3>
}

export default function Footer() {
  return (
    <footer className="bg-page border-t border-line">
      <div className="px-4 sm:px-6 lg:px-8 py-6 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-10 lg:gap-12 mb-6 md:mb-12">
          {/* About */}
          <div className="col-span-2 lg:col-span-1 space-y-2 md:space-y-4">
            <div className="flex items-baseline gap-2">
              <Link href="/" className="inline-block text-brand font-semibold text-base md:text-[length:var(--fs-text)]" aria-label="KUCC home">
                <img width={50} src="/kucc-logo.svg" alt="ku logo" />
              </Link>
              
            </div>
            <p className="text-sm md:text-[length:var(--fs-small)] text-muted-c leading-snug">
              Pioneering technological innovation and excellence at Kathmandu University for over two decades.
            </p>
            <div className="flex flex-wrap -ml-2">
              {socialHandles.map((s) => (
                <a
                  key={s.label}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="p-1.5 md:p-2 text-lg md:text-xl text-muted-c hover-brand"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* KUCC */}
          <div>
            <Heading>KUCC</Heading>
            <ul>
              {footerLinks.kucc.map((l) => (
                <li key={l.title}>
                  {l.link.startsWith('https://') ? (
                    <a href={l.link} target={l.target || '_self'} rel="noopener noreferrer" className={linkCls}>
                      {l.title}
                    </a>
                  ) : (
                    <Link href={l.link} target={l.target || '_self'} className={linkCls}>
                      {l.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <Heading>Quick Links</Heading>
            <ul>
              {footerLinks.quickLinks.map((l) => (
                <li key={l.title}>
                  <Link href={l.link} className={linkCls}>
                    {l.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <Heading>Contact Us</Heading>
            <ul className="space-y-1.5 md:space-y-3">
              {contactInfo.map((c) => (
                <li key={c.text} className="flex items-start gap-2 md:gap-3 text-sm md:text-[length:var(--fs-small)]">
                  <span className="text-brand mt-0.5">{c.icon}</span>
                  {c.link ? (
                    <a href={c.link} className="text-muted-c hover-brand">
                      {c.text}
                    </a>
                  ) : (
                    <span className="text-muted-c">{c.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-4 md:pt-6 border-t border-line flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-xs md:text-[length:var(--fs-small)] text-muted-c">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Kathmandu University Computer Club. All rights reserved.
          </p>
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/code-of-conduct" className="hover-brand">Privacy</Link>
            <Link href="/code-of-conduct" className="hover-brand">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}