import type { PreviewLink } from '@/components/HoverPreview'

export const ALL_PREVIEW_LINKS: PreviewLink[] = [
  { label: 'IT Express 2023', href: '/docs/IT-EXPRESS-2023.pdf' },
  { label: 'IT Express 2022', href: '/docs/IT-EXPRESS-2022.pdf' },
  { label: 'IT Express 2021', href: '/docs/IT-EXPRESS-2021.pdf' },
  { label: 'IT Express 2020', href: '/docs/IT-EXPRESS-2020.pdf' },
  { label: 'IT Express 2019', href: '/docs/IT-EXPRESS-2019.pdf' },
  { label: 'IT Express 2018', href: '/docs/IT-EXPRESS-2018.pdf' },
  { label: 'KUCC Bidhan', href: '/docs/KUCC_bidhan.pdf' },

  // program websites (href must match Programs.tsx exactly, including the trailing slash)
  { label: 'NCCI', href: 'https://conf.kucc.ku.edu.np', external: true, embed: true },
  { label: 'KUOSC', href: 'https://kuosc.org.np', external: true, embed: true },
  { label: 'IT Meet', href: 'https://itmeet.kucc.ku.edu.np/', external: true, embed: true },
  { label: 'KURCH', href: 'https://kurch.netlify.app', external: true, embed: true },
]