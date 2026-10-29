import PageHero from '@/components/PageHero'
import { heroContent } from '@/data/hero'

export const metadata = { title: 'Publications | KUCC' }

export default function PublicationsPage() {
  return <PageHero {...heroContent.publications} showExternalIcon={true} />
}