import { loadGroups } from '@/lib/loadEvents'
import type { HeroLink } from '@/components/PageHero'

type HeroContent = { rightTitle: string; blurb: string; links: HeroLink[] }

const groups = loadGroups()

export const heroContent = {
    events: {
    rightTitle: `${groups.length} ${groups.length === 1 ? 'Group' : 'Groups'}`,
    blurb: 'Photos and highlights from KUCC events. Hover a group to learn more.',
    links: groups.map((g) => ({
      label: g.title,
      href: `/events/${g.slug}`,
      title: g.title,
      blurb: g.description || `${g.events.length} events · ${g.photoCount} photos`,
    })),
  },

  publications: {
    rightTitle: 'IT Express',
    blurb: "KUCC's annual tech magazine. Hover a year to see what's inside, click to open the PDF.",
    links: [
      { label: 'IT Express 2023', href: '/docs/IT-EXPRESS-2023.pdf', title: 'IT Express 2023', blurb: 'The 2023 It express publication.', external: true, },
      { label: 'IT Express 2022', href: '/docs/IT-EXPRESS-2022.pdf', title: 'IT Express 2022', blurb: 'The 2022 It express publication.', external: true, },
      { label: 'IT Express 2021', href: '/docs/IT-EXPRESS-2021.pdf', title: 'IT Express 2021', blurb: 'The 2021 It express publication.', external: true, },
      { label: 'IT Express 2019', href: '/docs/IT-EXPRESS-2019.pdf', title: 'IT Express 2019', blurb: 'The 2019 It express publication.', external: true, },
      { label: 'IT Express 2018', href: '/docs/IT-EXPRESS-2018.pdf', title: 'IT Express 2018', blurb: 'The 2018 It express publication.', external: true, },
    ],
  },
} satisfies Record<string, HeroContent>

// Single event page links (optional, if you use them anywhere)
export const eventPageLinks: HeroLink[] = [
  { label: 'All Events', href: '/events', title: 'All Events', blurb: 'Browse every KUCC event.' },
  { label: 'Join KUCC', href: '/join', title: 'Join KUCC', blurb: 'Become a member and take part in our events.' },
]