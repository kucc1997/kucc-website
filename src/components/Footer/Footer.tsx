'use client'
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6";
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
      icon: <FaSquareXTwitter color="black" />,
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
        { title: 'kucc@ku.edu.np', link: 'mailto:kucc@ku.edu.np', target: "_blank" },
        { title: '+977 9865599415' },
        { title: 'Dhulikhel, Nepal' },
      ],
    },
  ]
  // const joinUs = [
  //   { title: 'Careers', link: '/' },
  //   { title: 'Internship', link: '/' },
  // ]

  return (
    <div className="flex flex-col w-full h-full p-6 lg:px-16 xl:px-20 bg-baseBackground z-50 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
      <div className='flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-10'>
        <div className="flex items-center space-x-8 sm:space-x-12 md:space-x-20 lg:space-x-28 xl:space-x-40">
          <Image src={'/kucc-logo.png'} alt="Logo" width={100} height={100} className='cursor-pointer transition-all hover:translate-y-0.5'/>
          <div className="flex gap-2 sm:gap-6 md:gap-8 lg:gap-14 text-3xl lg:text-4xl">
            {socialHandles.map((iteam, index) => {
              return (
                <div
                  className='cursor-pointer transition-all hover:translate-y-0.5'
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
        <div className="flex-col items-center space-y-6 sm:space-y-8 md:hidden">
          {titles.map((iteam, index) => {
            return (
              <div className="text-lg sm:text-xl text-center" key={index}>
                <h3 className='text-titleColor font-semibold text-2xl'>{iteam.title}</h3>
                {iteam.links.map((link, index) => {
                  if (!link.link) {
                    return <p key={index} className='mt-2 sm:mt-3'>{link.title}</p>
                  }

                  return link.link.startsWith('https://') ? (
                    <a href={link.link} target={link.target ? link.target : '_self'} key={index}>
                      <p className='mt-2 sm:mt-3 cursor-pointer hover:text-gray-500'>{link.title}</p>
                    </a>
                  ) : (
                    <Link href={link.link} target={link.target ? link.target : '_self'} key={index}>
                      <p className='mt-2 sm:mt-3'>{link.title}</p>
                    </Link>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className="hidden items-center md:flex space-x-24 lg:space-x-48 xl:space-x-64">
          {titles.map((iteam, index) => {
            return (
              <div className="text-xl text-center" key={index}>
                <h3 className='text-titleColor font-semibold text-2xl lg:text-3xl'>{iteam.title}</h3>
                {iteam.links.map((link, index) => {
                  if (!link.link) {
                    return <p key={index} className='mt-5 lg:mt-6'>{link.title}</p>
                  }

                  return link.link.startsWith('https://') ? (
                    <a href={link.link} target={link.target ? link.target : '_self'} key={index}>
                      <p className='mt-5 lg:mt-6 cursor-pointer hover:text-gray-500'>{link.title}</p>
                    </a>
                  ) : (
                    <Link href={link.link} target={link.target ? link.target : '_self'} key={index}>
                      <p className='mt-5 lg:mt-6 hover:text-gray-500'>{link.title}</p>
                    </Link>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex-col space-y-3 md:space-y-4'>
        <div className='w-full border border-gray-300'></div>
        <p className='text-[#71717A] text-sm md:text-base lg:text-lg text-center'>
          © Copyright 2024, Kathmandu University Computer Club. All rights reserved.
        </p>
      </div>
    </div>
  )
}
