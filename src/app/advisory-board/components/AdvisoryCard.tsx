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
    <Card className='w-full border-2 shadow-2xl rounded-3xl p-5 bg-slate-50'>
      <CardHeader className="flex justify-center items-center relative">
        <Image 
          src="/kucc-logo.png"
          width={40}
          height={40}
          alt="logo kucc"
          className="absolute left-0 top-0"
        />
        <Image
          className="rounded-full object-cover w-[220px] h-[220px] sm:w-[240px] sm:h-[240px] md:w-[260px] md:h-[260px] border-4 border-titleColor p-[6px]"
          src={image}
          alt={name}
          width={200}
          height={200}
        />
      </CardHeader>
      <CardContent className="flex flex-col bg-baseBackground rounded-md p-6 space-y-2">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-center font-semibold text-titleColor">{name}</h1>
        <h2 className="text-base sm:text-lg md:text-xl text-center font-medium ">{position.toUpperCase()}</h2>
      </CardContent>
      <CardFooter className="flex justify-center space-x-4 p-2">
        <Link href={linkedin} target="_blank" className="transition-all hover:translate-y-0.5">
            <FaLinkedin width={20} height={20} className="text-3xl md:text-4xl text-blue-500"/>
        </Link>
        <Link href={`mailto:${mail}`} target="_blank" className="transition-all hover:translate-y-0.5">
            <MdEmail width={20} height={20} className="text-4xl md:text-5xl text-red-800"/>
        </Link>
      </CardFooter>
    </Card>
  )
}

