'use client'
import './Footer.sass'
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Footer() {
  const router = useRouter()

  // to add more social media handles of kucc, add them to the array below
  const socialHandles = [
    {
      icon: <FaYoutube color="red" />,
      link: 'https://www.youtube.com/channel/UChOg5n4TKmK-NHs8vM6Y7Rg',
    },
    {
      icon: <FaTwitter color="#0066FF" />,
      link: 'https://twitter.com/kucc1997',
    },
    {
      icon: <FaFacebook color="#0066FF" />,
      link: 'https://www.facebook.com/kucc1997',
    },
    {
      icon: <FaInstagram color="brown" />,
      link: 'https://www.instagram.com/kucc97/',
    },
    {
      icon: <FaLinkedin color="black" />,
      link: 'https://www.linkedin.com/school/kucc/',
    },
  ]
  // to add more section for redirect in footer, add in the array below
  const titles: {
    title: string
    links: { title: string; link?: string; target?: string }[]
  }[] = [
    {
      title: 'KUCC',
      links: [
        { title: 'Apply To Be a Member', link: 'https://forms.gle/Y5vHobrCDVx2fPMaA' },
        { title: 'Code of Conduct', link: '/code-of-conduct' },
        { title: 'KUCC Bidhan', link: '/docs/KUCC_bidhan.pdf', target: '_blank' },
      ],
    },
    {
      title: 'Contacts',
      links: [
        { title: '+977 9865599415' },
        { title: 'kucc@ku.edu.np', link: 'mailto:kucc@ku.edu.np' },
        { title: 'Dhulihel KU' },
      ],
    },
  ]
  // const joinUs = [
  //   { title: 'Careers', link: '/' },
  //   { title: 'Internship', link: '/' },
  // ]

  return (
    <div className="Footer">
      <div className="redirect">
        <div className="socialMedia">
          <Image src={'/kucc-logo.png'} alt="Logo" width={100} height={100} />
          <div className="socialHandles">
            {socialHandles.map((iteam, index) => {
              return (
                <div
                  className="border"
                  onClick={() => {
                    if (typeof window !== 'undefined') router.push(iteam.link)
                  }}
                  key={index}
                >
                  {iteam.icon}
                </div>
              )
            })}
          </div>
        </div>
        <div className="links">
          {titles.map((iteam, index) => {
            return (
              <div className="title" key={index}>
                <h3>{iteam.title}</h3>
                {iteam.links.map((link, index) => {
                  if (!link.link) {
                    return <p key={index}>{link.title}</p>
                  }

                  return link.link.startsWith('https://') ? (
                    <a href={link.link} target={link.target ? link.target : '_self'} key={index}>
                      <p>{link.title}</p>
                    </a>
                  ) : (
                    <Link href={link.link} target={link.target ? link.target : '_self'} key={index}>
                      <p>{link.title}</p>
                    </Link>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <div className="copyright">
        <p style={{ color: '#71717A' }}>
          © Copyright 2024, Kathmandu University Computer Club. All rights reserved.
        </p>
      </div>
    </div>
  )
}
