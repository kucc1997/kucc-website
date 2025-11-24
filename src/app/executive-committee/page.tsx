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
    'Executive Committee of Kathmandu University Computer Club (KUCC) 2025/26 comprises of Sakshi K.C. (President), Kiran Dahal (Vice President), Saksham Gyawali (General Secretary), Innima Karki (Treasurer), Lawan Poudyal (Club Secretary), Shriharsh Sharma Acharya (KUOSC Coordinator), Mimansh Pokharel (Executive Member), Abhyudaya Pokhrel (Executive Member), Dalton Khatri (Executive Member), Niraj Kumar Ram (Executive Member), Sahaj Wagle (Executive Member).',
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
    name: 'Sakshi K.C.',
    mail: 'kcsakshi92@gmail.com',
    position: 'President',
    image: '/people/sakshi-kc.jpg',
    linkedin: 'https://www.linkedin.com/in/sakshi-kc-732162280/'
  },
  {
    name: 'Kiran Dahal',
    mail: 'dahalkiran926@gmail.com',
    position: 'Vice-President',
    image: '/people/kiran-dahal.jpeg',
    linkedin: 'https://www.linkedin.com/in/kiran-dahal-b0a4371a9/'
  },
   {
    name: 'Saksham Gyawali',
    mail: 'saksamgyawali12@gmail.com',
    position: 'General Secretary',
    image: '/people/saksham-gyawali.jpg',
    linkedin: 'https://www.linkedin.com/in/saksham-gyawali-0a3aa2228/'
  },
   {
    name: 'Innima Karki',
    mail: 'innimakarki07@gmail.com',
    position: 'Treasurer',
    image: '/people/innima-karki.jpeg',
    linkedin: 'https://www.linkedin.com/in/innima-karki-77a8b2292/'
  },
 {
    name: 'Lawan Poudyal',
    position: 'Club Secretary',
    image: '/people/Lawan_Poudyal.jpg',
    linkedin: 'https://www.linkedin.com/in/lawan-poudyal',
    mail: 'poudyallawan@gmail.com',
  },
   {
    name: 'Shriharsh Sharma Acharya',
    mail: 'happy.irhs@gmail.com',
    position: 'KUOSC Coordinator',
    image: '/people/shriharsh-sharma.jpg',
    linkedin: 'https://www.linkedin.com/in/shriharsh-acharya-ab8642257/'
  },
  {
    name: 'Mimansh Pokharel',
    mail: 'neu.mimansh@gmail.com',
    position: 'Executive Member',
    image: '/people/mimansh-pokharel.jpeg',
    linkedin: 'https://www.linkedin.com/in/mimansh-neupane/'
  },
  
 
  
  {
    name: 'Abhyudaya Pokhrel',
    mail: 'abhyudayapokhrel23@gmail.com',
    position: 'Executive Member',
    image: '/people/abhyudaya-pokhrel.jpg',
    linkedin: 'https://www.linkedin.com/in/abhyudaya-pokhrel/'
  },
  {
    name: 'Dalton Khatri',
    mail: 'khatridalton1235@gmail.com',
    position: 'Executive Member',
    image: '/people/dalton-khatri.jpg',
    linkedin: 'Dalton Khatri'
  },
 
   {
    name: 'Niraj Kumar Ram',
    mail: 'nirajkumarram194@gmail.com',
    position: 'Executive Member',
    image: '/people/niraj-ram.png',
    linkedin: 'https://www.linkedin.com/in/nirajram/'
  },{
    name: 'Sahaj Wagle',
    mail: 'sahajwagle567@gmail.com',
    position: 'Executive Member',
    image: '',
    linkedin: ''
  },
  
]

export default function ExCommunity() {
  return (
    <div className="flex flex-col p-5 justify-center items-center max-w-screen-xl mx-auto">
      <Card className="w-full border-2 shadow-lg bg-baseBackground px-4">
        <CardHeader className="flex items-center">
          <CardDescription className="text-gray-500 text-lg">KUCC Board 2025/26</CardDescription>
          <CardTitle className="text-titleColor text-2xl md:text-3xl">
            Executive Committee
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-5 sm:hidden justify-center items-center rounded-xl mt-2">
          {executivesList.map((executive) => (
            <div key={executive.mail}>
              <ExecutiveCard {...executive} />
            </div>
          ))}
        </CardContent>
        <CardContent className="hidden sm:flex flex-wrap justify-around rounded-lg mt-4 gap-5">
          {executivesList.map((executive) => (
            <div key={executive.mail}>
              <ExecutiveCard {...executive} />
            </div>
          ))}
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <h1 className="text-titleColor text-[10px] sm:text-base md:text-xl md:mt-4">
            Department of Computer Science and Engineering
          </h1>
        </CardFooter>
      </Card>
    </div>
  )
}
