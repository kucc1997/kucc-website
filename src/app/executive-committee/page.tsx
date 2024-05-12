import type { Metadata } from 'next'
import ExecutiveCard from './components/Executivecard'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: 'Executive Committee - Kathmandu University Computer Club (KUCC)',
  description:
    'Executive Committee of Kathmandu University Computer Club (KUCC) 2024/25 comprises of Nirjal Bhurtel (President), Abhiyan Dhakal (Vice President), Jenisha Khulal Magar (General Secretary), Sadikshya Pokharel (Treasurer), Darshan Lamichhane (Club Secretary), Santosh Yadav (Executive Member), Shashinoor Ghimire (Executive Member), Phiroj Kumar Shah (Executive Member), Aagaman Bhandari (Executive Member), Diwas Parajuli (Executive Member), Sanjay Pahari (Executive Member), James Bhattarai (Executive Member), Royas Shakya (Executive Member), Ranjita Dhakal (Executive Member)',
}

/**
 * @type {Array<{name: string, position: string, image: string, linkedin: string, mail: string}>}
 */
const executivesList: {
  name: string
  position: string
  image: string
  linkedin: string
  mail: string
}[] = [
  {
    name: 'Nirjal Bhurtel',
    position: 'President',
    image: '/people/Nirjal_Bhurtel.webp',
    linkedin: 'https://www.linkedin.com/in/nirjal-bhurtel-163510149/',
    mail: 'sunnynirjal@gmail.com',
  },
  {
    name: 'Abhiyan Dhakal',
    position: 'Vice President',
    image: '/people/Abhiyan_Dhakal.webp',
    linkedin: 'https://www.linkedin.com/in/abhiyan-dhakal-9b0b01223/',
    mail: 'itsabhiyandhakal@gmail.com',
  },
  {
    name: 'Jenisha Khulal Magar',
    position: 'General Secretary',
    image: '/people/Jenisha_Khulal_Magar.webp',
    linkedin: 'https://www.linkedin.com/in/jenisha-khulal-a70268274/',
    mail: 'jenishakhulal@gmail.com',
  },
  {
    name: 'Sadikshya Pokharel',
    position: 'Treasurer',
    image: '/people/Sadikshya_Pokharel.webp',
    linkedin: 'https://www.linkedin.com/in/sadikshya-pokharel-637680298/',
    mail: 'psaishya@gmail.com',
  },
  {
    name: 'Darshan Lamichhane',
    position: 'Club Secretary',
    image: '/people/Darshan_Lamichhane.webp',
    linkedin: 'https://www.linkedin.com/in/darshan-lamichhane-2a4bb0205/',
    mail: 'darshanlamichhane012@gmail.com',
  },
  {
    name: 'Sugat Sujakhu',
    position: 'KUOSC Coordinator',
    image: '/people/Sugat_Sujakhu.webp',
    linkedin: 'https://www.linkedin.com/in/notsugat/',
    mail: 'sugatsujakhu@gmail.com',
  },
  {
    name: 'Santosh Yadav',
    position: 'Executive Member',
    image: '/people/Santosh_Yadav.webp',
    linkedin: 'https://www.linkedin.com/in/santosh-yadav-903a62250/',
    mail: 'ymanoutube@gmail.com',
  },
  {
    name: 'Shashinoor Ghimire',
    position: 'Executive Member',
    image: '/people/Shashinoor_Ghimire.webp',
    linkedin: 'https://www.linkedin.com/in/shashinoor/',
    mail: 'mail@shashinoor.com.np',
  },
  {
    name: 'Phiroj Kumar Shah',
    position: 'Executive Member',
    image: '/people/Phiroj_Kumar_Shah.webp',
    linkedin: 'https://www.linkedin.com/in/phiroj-shah-226563233/',
    mail: 'phirojshah20@gmail.com',
  },
  {
    name: 'Aagaman Bhandari',
    position: 'Executive Member',
    image: '/people/Aagaman_Bhandari.webp',
    linkedin: 'https://www.linkedin.com/in/aagaman-bhandari-074b30261/',
    mail: 'aagamanbhandari123@gmail.com',
  },
  {
    name: 'Diwas Parajuli',
    position: 'Executive Member',
    image: '/people/Diwas_Parajuli.webp',
    linkedin: 'https://www.linkedin.com/in/diwas-p-a53981227/',
    mail: 'parajuli.diwas101@gmail.com',
  },
  {
    name: 'Sanjay Pahari',
    position: 'Executive Member',
    image: '/people/Sanjay_Pahari.webp',
    linkedin: 'https://www.linkedin.com/in/sanjaypahari/',
    mail: 'paharisanjay10@gmail.com',
  },
  {
    name: 'James Bhattarai',
    position: 'Executive Member',
    image: '/people/James_Bhattarai.webp',
    linkedin: 'https://www.linkedin.com/in/jamesbhattarai/',
    mail: 'jamesbhattarai14@gmail.com',
  },
  {
    name: 'Royas Shakya',
    position: 'Executive Member',
    image: '/people/Royas_Shakya.webp',
    linkedin: 'https://www.linkedin.com/in/royas-shakya/',
    mail: 'shkroyas@gmail.com',
  },
  {
    name: 'Ranjita Dhakal',
    position: 'Executive Member',
    image: '/people/Ranjita_Dhakal.webp',
    linkedin: 'https://www.linkedin.com/in/ranjita-dhakal-rd44/',
    mail: 'dhranjita044@gmail.com',
  },
]

export default function ExCommunity() {
  return (
    <div className='flex flex-col p-5 justify-center items-center max-w-screen-xl mx-auto'>
      <Card className='w-full border-2 shadow-lg bg-baseBackground px-4'>
        <CardHeader className='flex items-center'>
        <CardDescription className='text-gray-500 text-lg'>KUCC Board 2024-25</CardDescription>
          <CardTitle className='text-titleColor text-3xl'>Executive Committee</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-5 sm:hidden justify-center items-center rounded-xl mt-2">
          {executivesList.map((executive) => (
            <div key={executive.mail}>
              <ExecutiveCard {...executive} />
            </div>
          ))}
        </CardContent>
        <CardContent className="hidden sm:flex flex-wrap justify-around rounded-lg mt-4 gap-4">
          {executivesList.map((executive) => (
            <div key={executive.mail}>
              <ExecutiveCard {...executive} />
            </div>
          ))}
        </CardContent>
        <CardFooter className='flex justify-center items-center'>
          <h1 className='text-titleColor text-sm sm:text-base md:text-xl md:mt-4'>Department of Computer Science and Engineering</h1>
        </CardFooter>
      </Card>
    </div>
  )
}