import AdvisoryCard from '@/app/advisory-board/components/AdvisoryCard'
import { Metadata } from 'next'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Advisory Board - Kathmandu University Computer Club',
  description:
    'Advisory Board of Kathmandu University consists of Associate Professor Bal Krishna Bal, Head of Department of DoCSE and Assistant Professor Pankaj Raj Dawadi, DoCSE',
}

const advisorsList = [
  {
    name: 'Asst. Prof. Pankaj Raj Dawadi, PhD',
    position: 'Acting Head of Department, DoCSE',
    image: '/people/Pankaj_Raj_Dawadi.webp',
    linkedin: 'https://www.linkedin.com/in/pankaj-dawadi-83467b7a/',
    mail: 'pdawadi@ku.edu.np',
  },
  {
    name: 'Sanjog Sigdel',
    position: 'Lecturer, DoCSE',
    image: '/people/Sanjog_Sigdel1.jpg',
    linkedin: 'https://www.linkedin.com/in/sigdelsanjog ',
    mail: 'sanjog.sigdel@ku.edu.np'
  }
]

export default function AdvBoard() {
  return (
    <div className="min-h-screen bg-baseBackground tech-grid py-16 px-5">
      <div className="max-w-screen-xl mx-auto">
        <Card className="relative w-full border border-gray-800/50 shadow-2xl bg-gray-900/90 backdrop-blur-xl px-4 rounded-3xl">
          <CardHeader className="flex items-center relative z-10">
            <CardDescription className="text-gray-400 text-lg mb-2 tech-text">KUCC Board 2025</CardDescription>
            <CardTitle className="text-accentBlueLight text-3xl md:text-4xl font-bold tech-text highlight-text">
              Advisors
            </CardTitle>
            <div className="w-32 h-1 bg-accentBlue rounded-full mt-4"></div>
          </CardHeader>
          
          <CardContent className="flex flex-col space-y-5 lg:hidden justify-center items-center rounded-xl mt-8 relative z-10">
            {advisorsList.map((advisor) => (
              <div key={advisor.mail}>
                <AdvisoryCard {...advisor} />
              </div>
            ))}
          </CardContent>
          
          <CardContent className="hidden lg:flex lg:space-y-0 space-x-10 xl:space-x-12 justify-around rounded-xl mt-8 relative z-10">
            {advisorsList.map((advisor) => (
              <div key={advisor.mail}>
                <AdvisoryCard {...advisor} />
              </div>
            ))}
          </CardContent>
          
          <CardFooter className="flex justify-center items-center mt-8 relative z-10">
            <h1 className="text-gray-400 text-[10px] sm:text-base md:text-xl font-medium">
              Department of Computer Science and Engineering
            </h1>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
