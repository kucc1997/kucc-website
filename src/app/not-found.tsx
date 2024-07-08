import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center mb-8">
        <Image
          src="/not-found.png"
          alt="Not Found"
          className="w-48 h-48 mx-auto mb-4"
          height="48"
          width="48"
        />
        <h2 className="text-4xl font-bold mb-4">Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">Could not find requested resource</p>
        <Link href="/" className="text-lg">
          <Button>Return Home</Button>{' '}
        </Link>
      </div>
    </div>
  )
}
