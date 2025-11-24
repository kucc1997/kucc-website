'use client'
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6"
import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Footer() {
  const router = useRouter()

  const socialHandles = [
    {
      icon: <FaYoutube />,
      link: 'https://www.youtube.com/channel/UChOg5n4TKmK-NHs8vM6Y7Rg',
      label: 'YouTube',
      color: 'hover:text-red-500'
    },
    {
      icon: <FaSquareXTwitter />,
      link: 'https://twitter.com/kucc1997',
      label: 'Twitter',
      color: 'hover:text-gray-900'
    },
    {
      icon: <FaFacebook />,
      link: 'https://www.facebook.com/kucc1997',
      label: 'Facebook',
      color: 'hover:text-blue-600'
    },
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/kucc97/',
      label: 'Instagram',
      color: 'hover:text-pink-600'
    },
    {
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/school/kucc/',
      label: 'LinkedIn',
      color: 'hover:text-blue-700'
    },
  ]

  const footerLinks = {
    kucc: [
      { title: 'Apply To Be a Member', link: 'https://forms.gle/Y5vHobrCDVx2fPMaA' },
      { title: 'Code of Conduct', link: '/code-of-conduct' },
      { title: 'KUCC Bidhan', link: '/docs/KUCC_bidhan.pdf', target: '_blank' },
    ],
    quickLinks: [
      { title: 'Executive Committee', link: '/executive-committee' },
      { title: 'Advisory Board', link: '/advisory-board' },
      { title: 'Communities', link: '/communities' },
      { title: 'IT Express', link: '/it-express' },
    ]
  }

  const contactInfo = [
    { icon: <Mail size={18} />, text: 'kucc@ku.edu.np', link: 'mailto:kucc@ku.edu.np' },
    { icon: <Phone size={18} />, text: '+977 9865599415' },
    { icon: <MapPin size={18} />, text: 'Dhulikhel, Nepal' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white border-t border-accentBlue/20 tech-grid overflow-hidden">
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 circuit-pattern opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* About Section */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="inline-block group">
              <div className="flex items-center space-x-3">
                <Image 
                  src="/kucc-logo.png" 
                  alt="KUCC Logo" 
                  width={60} 
                  height={60} 
                  className="group-hover:scale-105 transition-transform"
                />
                <div>
                  <div className="text-2xl font-bold">KUCC</div>
                  <div className="text-xs text-gray-400">Since 1997</div>
                </div>
              </div>
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed">
              Pioneering technological innovation and excellence at Kathmandu University for over two decades.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialHandles.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (typeof window !== 'undefined') router.push(item.link)
                  }}
                  className={`p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all ${item.color} text-xl`}
                  aria-label={item.label}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>

          {/* KUCC Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-accentBlue to-purple-400 bg-clip-text text-transparent">KUCC</h3>
            <ul className="space-y-3">
              {footerLinks.kucc.map((link, index) => (
                <li key={index}>
                  {link.link.startsWith('https://') ? (
                    <a
                      href={link.link}
                      target={link.target || '_self'}
                      className="text-sm text-gray-400 hover:text-accentBlueLight transition-colors inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.title}</span>
                    </a>
                  ) : (
                    <Link
                      href={link.link}
                      target={link.target || '_self'}
                      className="text-sm text-gray-400 hover:text-accentBlueLight transition-colors inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.title}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-accentBlue to-purple-400 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.link}
                    className="text-sm text-gray-400 hover:text-accentBlueLight transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-accentBlue to-purple-400 bg-clip-text text-transparent">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accentBlueLight mt-0.5">{info.icon}</span>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-400 hover:text-accentBlueLight transition-colors"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-400">{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Kathmandu University Computer Club. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/code-of-conduct" className="hover:text-accentBlueLight transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/code-of-conduct" className="hover:text-accentBlueLight transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
