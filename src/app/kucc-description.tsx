import React from 'react'
import PageHero from '@/components/PageHero'
import LogoMarquee from '@/components/LogoMarquee'

const LOGOS = [
  '/assets/logos/ncci-icon.svg',
  '/assets/logos/kuosc.webp',
  '/assets/logos/we-shield-cyber.webp',
  '/assets/logos/hackfest.webp',
  '/assets/logos/ai-treasure-hunt.webp',
  '/assets/logos/empower-her.webp',
  '/assets/logos/it-meet.webp',
]

export default function KuccDescription() {
  return (
    <>
      <PageHero
        compact
        showPreview={false}
        showExternalIcon={false}
        leftTitle="About Us"
        links={[
          {
            label: 'Programs',
            href: '#programs',
            blurb: 'Flagship programs we run, like Hackfest, AI Treasure Hunt and Empower Her.',
          },
          {
            label: 'Communities',
            href: '#communities',
            blurb: 'The groups under KUCC where members learn, build and share, from open source to cybersecurity.',
          },
          // {
          //   label: 'Activities & Announcements',
          //   href: '#activities',
          //   blurb: 'Workshops, events and the latest news from the club.',
          // },
          {
            label: 'Message from President',
            href: '#president',
            blurb: 'A few words from the current president on where KUCC is headed.',
          },
        ]}
        rightTitle="Since 1997"
        blurb="KUCC is a non-profit, independent club formed by students of the Department of Computer Science and Engineering in the year 1997. Being registered as the first club of Kathmandu University with the registration number 001/1997, KUCC has worked in the field of ICT for over twenty years, engaging and empowering more than 1000 members through technology, research, and innovation."
      />
      <LogoMarquee logos={LOGOS} />
    </>
  )
}