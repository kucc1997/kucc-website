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
    <Card className='w-[290px] md:w-[300px] border border-titleColor shadow-2xl rounded-3xl p-5 bg-slate-50'>
      <CardHeader className="flex justify-center items-center relative">
        <Image 
          src="/kucc-logo.png"
          width={40}
          height={40}
          alt="logo kucc"
          className="absolute left-0 top-0"
        />
        <Image
          className="rounded-full object-cover w-[150px] h-[150px] sm:w-[160px] sm:h-[160px] border-4 bg-blue-100 border-titleColor p-[6px]"
          src={image}
          alt={name}
          width={200}
          height={200}
        />
      </CardHeader>
      <CardContent className="flex-col flex-wrap bg-baseBackground rounded-md p-5 sm:p-4 space-y-2">
        <h1 className="text-xl text-wrap text-center font-semibold text-titleColor">{name}</h1>
        <h2 className="text-base text-wrap text-center font-medium ">{position.toUpperCase()}</h2>
      </CardContent>
      <CardFooter className="flex justify-center space-x-4 p-2">
        <Link href={linkedin} target="_blank" className="transition-all hover:translate-y-0.5">
            <FaLinkedin width={20} height={20} className="text-3xl sm:text-3xl text-blue-500"/>
        </Link>
        <Link href={`mailto:${mail}`} target="_blank" className="transition-all hover:translate-y-0.5">
            <MdEmail width={20} height={20} className="text-4xl sm:text-4xl text-red-800"/>
        </Link>
      </CardFooter>
    </Card>
  )
}

