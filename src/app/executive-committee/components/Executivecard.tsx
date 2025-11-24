import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";

interface ExecutiveCardProps {
  name: string;
  position: string;
  linkedin: string;
  image: string;
  mail: string;
}

export default function ExecutiveCard({
  name,
  position,
  linkedin,
  image,
  mail,
}: ExecutiveCardProps) {
  return (
    <Card className='w-[290px] md:w-[300px] border border-gray-800/50 shadow-2xl shadow-accentBlue/10 rounded-3xl p-5 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg hover:scale-105 hover:shadow-accentBlue/20 transition-all duration-300'>
      <CardHeader className="flex justify-center items-center relative">
        <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-br from-accentBlue/20 to-purple-500/20 flex items-center justify-center backdrop-blur-sm border border-gray-700/50">
          <Image 
            src="/kucc-logo.png"
            width={28}
            height={28}
            alt="logo kucc"
          />
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accentBlue/30 via-purple-500/20 to-pink-500/20 blur-xl"></div>
          <Image
            className="relative rounded-full object-cover w-[150px] h-[150px] sm:w-[160px] sm:h-[160px] border-4 border-gray-700/50 p-[6px] bg-gradient-to-br from-gray-800 to-gray-900"
            src={image}
            alt={name}
            width={200}
            height={200}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-col flex-wrap bg-gradient-to-br from-gray-950/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-5 sm:p-4 space-y-2 border border-gray-800/30">
        <h1 className="text-xl text-wrap text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">{name}</h1>
        <h2 className="text-sm text-wrap text-center font-medium text-gray-400 tech-text">{position.toUpperCase()}</h2>
      </CardContent>
      <CardFooter className="flex justify-center space-x-4 p-2 mt-2">
        <Link href={linkedin} target="_blank" className="transition-all hover:translate-y-[-2px] hover:scale-110 duration-300">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-400/20 flex items-center justify-center border border-blue-500/30 hover:border-blue-400/50">
              <FaLinkedin width={20} height={20} className="text-2xl text-blue-400"/>
            </div>
        </Link>
        <Link href={`mailto:${mail}`} target="_blank" className="transition-all hover:translate-y-[-2px] hover:scale-110 duration-300">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600/20 to-red-400/20 flex items-center justify-center border border-red-500/30 hover:border-red-400/50">
              <MdEmail width={20} height={20} className="text-2xl text-red-400"/>
            </div>
        </Link>
      </CardFooter>
    </Card>
  )
}

