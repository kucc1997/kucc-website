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

interface AdvisoryCardProps {
  name: string;
  position: string;
  linkedin: string;
  image: string;
  mail: string;
}

export default function AdvisoryCard({
  name,
  position,
  linkedin,
  image,
  mail,
}: AdvisoryCardProps) {
  return (
    <Card className='w-[290px] sm:w-[400px] md:w-[420px] border border-gray-800/50 shadow-2xl shadow-accentBlue/10 rounded-3xl p-5 bg-gradient-to-br from-gray-900 to-gray-800 backdrop-blur-lg hover:scale-105 hover:shadow-accentBlue/20 transition-all duration-300'>
      <CardHeader className="flex justify-center items-center relative">
        <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br from-accentBlue/20 to-purple-500/20 flex items-center justify-center backdrop-blur-sm border border-gray-700/50">
          <Image 
            src="/kucc-logo.png"
            width={32}
            height={32}
            alt="logo kucc"
          />
        </div>
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accentBlue/30 via-purple-500/20 to-pink-500/20 blur-2xl"></div>
          <Image
            className="relative rounded-full object-cover w-[150px] h-[150px] sm:w-[240px] sm:h-[240px] md:w-[260px] md:h-[260px] border-4 border-gray-700/50 p-[6px] bg-gradient-to-br from-gray-800 to-gray-900"
            src={image}
            alt={name}
            width={260}
            height={260}
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col bg-gradient-to-br from-gray-950/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 space-y-2 border border-gray-800/30">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">{name}</h1>
        <h2 className="text-sm sm:text-base md:text-lg text-center font-medium text-gray-400">{position.toUpperCase()}</h2>
      </CardContent>
      <CardFooter className="flex justify-center space-x-4 p-2 mt-4">
        <Link href={linkedin} target="_blank" className="transition-all hover:translate-y-[-2px] hover:scale-110 duration-300">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600/20 to-blue-400/20 flex items-center justify-center border border-blue-500/30 hover:border-blue-400/50">
              <FaLinkedin width={24} height={24} className="text-3xl text-blue-400"/>
            </div>
        </Link>
        <Link href={`mailto:${mail}`} target="_blank" className="transition-all hover:translate-y-[-2px] hover:scale-110 duration-300">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600/20 to-red-400/20 flex items-center justify-center border border-red-500/30 hover:border-red-400/50">
              <MdEmail width={24} height={24} className="text-3xl text-red-400"/>
            </div>
        </Link>
      </CardFooter>
    </Card>
  )
}

