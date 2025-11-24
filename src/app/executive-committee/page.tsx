import type { Metadata } from 'next'
import ExecutiveCard from './components/Executivecard'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Executive Committee - Kathmandu University Computer Club (KUCC)',
  description:
    'Executive Committee of Kathmandu University Computer Club (KUCC) 2024/25 comprises of Abhiyan Dhakal (President), Saroj Sigdel (Vice President), Mukul Aryal (General Secretary), Suyog Ghimire (Treasurer), Sakshi KC (Club Secretary), Ashwini Subedi (KUOSC Coordinator), Aakriti Pandey (Executive Member), Aatmiyata Pokhrel (Executive Member), Abhinav Bhatt (Executive Member), Bishist Bikram Pant (Executive Member), Kiran Dahal (Executive Member), Lawan Poudyal (Executive Member), Nischal Subedi (Executive Member).',
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
    name: 'Abhiyan Dhakal',
    position: 'President',
    image: '/people/Abhiyan_Dhakal.webp',
    linkedin: 'https://www.linkedin.com/in/abhiyan-dhakal/',
    mail: 'itsabhiyandhakal@gmail.com',
  },
  {
    name: 'Saroj Sigdel',
    position: 'Vice President',
    image: '/people/Saroj_Sigdel.jpg',
    linkedin: 'https://www.linkedin.com/in/saroj-sigdel-52565a303/',
    mail: 'sarojsigdel883@gmail.com',
  },
  {
    name: 'Mukul Aryal',
    position: 'General Secretary',
    image: '/people/Mukul_Aryal.jpg',
    linkedin: 'https://www.linkedin.com/in/aryalmukul ',
    mail: 'mukul.development@gmail.com',
  },
  {
    name: 'Suyog Ghimire',
    position: 'Treasurer',
    image: '/people/Suyog_Ghimire.jpg',
    linkedin: 'https://www.linkedin.com/in/suyog-ghimire-5646621a0 ',
    mail: 'ghimiresuyog9@gmail.com',
  },
  {
    name: 'Sakshi KC',
    position: 'Club Secretary',
    image: '/people/Sakshi_KC.jpg',
    linkedin: 'https://www.linkedin.com/in/sakshi-kc-732162280 ',
    mail: 'kcsakshi92@gmail.com',
  },
  {
    name: 'Ashwini Subedi',
    position: 'KUOSC Coordinator',
    image: '/people/Ashwini_Subedi.jpg',
    linkedin: 'https://www.linkedin.com/in/notashwinii ',
    mail: 'ashwinii.subedi@gmail.com',
  },
  {
    name: 'Aakriti Pandey',
    position: 'Executive Member',
    image: '/people/Aakriti_Pandey.jpg',
    linkedin: 'https://www.linkedin.com/in/pandeyaakriti ',
    mail: 'aakriti.pandeyyy@gmail.com',
  },
  {
    name: 'Aatmiyata Pokhrel',
    position: 'Executive Member',
    image: '/people/Aatmiyata_Pokhrel.jpg',
    linkedin: 'https://www.linkedin.com/in/aatmiyata-pokhrel-891256368',
    mail: 'aatmiyatap@gmail.com',
  },
  {
    name: 'Abhinav Bhatt',
    position: 'Executive Member',
    image: '/people/Abhinav_Bhatt.jpg',
    linkedin: 'https://www.linkedin.com/in/abhinav-bhatt-9a9349318',
    mail: 'abhi.navbhatt.ab1@gmail.com',
  },
  {
    name: 'Bishist Bikram Pant',
    position: 'Executive Member',
    image: '/people/Bishist_B_Pant.jpg',
    linkedin: 'https://www.linkedin.com/in/bishist-pant-336087286',
    mail: 'bishist.b.pant@gmail.com',
  },
  {
    name: 'Kiran Dahal',
    position: 'Executive Member',
    image: '/people/Kiran_Dahal.jpg',
    linkedin: 'https://www.linkedin.com/in/kiran-dahal-b0a4371a9',
    mail: 'dahalkiran926@gmail.com',
  },
  {
    name: 'Lawan Poudyal',
    position: 'Executive Member',
    image: '/people/Lawan_Poudyal.jpg',
    linkedin: 'https://www.linkedin.com/in/lawan-poudyal',
    mail: 'poudyallawan@gmail.com',
  },
  {
    name: 'Nischal Subedi',
    position: 'Executive Member',
    image: '/people/Nischal_Subedi.jpg',
    linkedin: 'https://www.linkedin.com/in/nischal0x01',
    mail: 'nischal1337@gmail.com',
  },
]

export default function ExCommunity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-baseBackground via-gray-900 to-gray-950 tech-grid py-16 px-5">
      <div className="max-w-screen-xl mx-auto">
        {/* Gradient decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-accentBlue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 circuit-pattern opacity-10"></div>
        </div>

        <Card className="relative w-full border border-gray-800/50 shadow-2xl bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl px-4 rounded-3xl">
          <CardHeader className="flex items-center relative z-10">
            <CardDescription className="text-gray-400 text-lg mb-2 tech-text">KUCC Board 2025</CardDescription>
            <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue via-purple-400 to-pink-400 text-3xl md:text-4xl font-bold tech-text holographic highlight-text">
              Executive Committee
            </CardTitle>
            <div className="w-32 h-1 bg-gradient-to-r from-accentBlue via-purple-400 to-pink-400 rounded-full mt-4"></div>
          </CardHeader>
          
          <CardContent className="flex flex-col space-y-5 sm:hidden justify-center items-center rounded-xl mt-2 relative z-10">
            {executivesList.map((executive) => (
              <div key={executive.mail}>
                <ExecutiveCard {...executive} />
              </div>
            ))}
          </CardContent>
          
          <CardContent className="hidden sm:flex flex-wrap justify-around rounded-lg mt-4 gap-5 relative z-10">
            {executivesList.map((executive) => (
              <div key={executive.mail}>
                <ExecutiveCard {...executive} />
              </div>
            ))}
          </CardContent>
          
          <CardFooter className="flex justify-center items-center mt-8 relative z-10">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 text-[10px] sm:text-base md:text-xl font-medium">
              Department of Computer Science and Engineering
            </h1>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
