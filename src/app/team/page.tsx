import TeamTabs from './TeamTabs'
import { loadTeam } from '@/lib/loadTeam'

export const metadata = { title: 'Team | KUCC' }

export default function TeamPage() {
  return <TeamTabs data={loadTeam()} />
}