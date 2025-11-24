import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function KUOSC() {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-br from-baseBackground to-gray-900 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accentBlue/10 to-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-accentBlue/30 to-purple-500/30 rounded-full blur-2xl" />
              
              {/* Logo container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl shadow-accentBlue/20 border border-gray-700">
                <Image
                  src="/kuosc.png"
                  alt="KUOSC Logo"
                  className="object-contain w-64 h-64"
                  height={256}
                  width={256}
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accentBlue/20 to-purple-500/20 border border-accentBlue/30 text-accentBlueLight rounded-full text-sm font-medium backdrop-blur-sm">
              <span>Open Source Wing</span>
            </div>

            {/* Title */}
            <h2 className="space-y-2">
              <span className="block text-xl md:text-2xl lg:text-3xl font-bold text-gray-400 tech-text">Kathmandu University</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-accentBlue via-purple-400 to-pink-400 bg-clip-text text-transparent tech-text">Open Source Community</span>
            </h2>

            {/* Description */}
            <p className="text-base text-gray-400 leading-relaxed">
              <Link
                href="https://kuosc.org.np"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-accentBlueLight hover:text-accentBlue underline decoration-2 underline-offset-2 transition-colors"
              >
                Kathmandu University Open Source Community (KUOSC)
              </Link>{' '}
              is the Open Source related wing of KUCC. It is a vibrant historic community from Kathmandu
              University which provides a common platform for all FOSS enthusiasts to discuss, share,
              and learn about free and open source softwares. KUOSC is specifically focused on all the
              Open Source related activities ranging from training programs like Linux Talks, Useful
              Network Training to advocacy activities like Software Freedom Day celebration and
              organizing different community level workshops and events.
            </p>

            {/* CTA Button */}
            <div className="pt-2">
              <Link
                href="https://kuosc.org.np"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accentBlue to-purple-600 hover:from-accentBlueDark hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg shadow-accentBlue/25 hover:shadow-xl hover:shadow-accentBlue/40 transition-all group"
              >
                Visit KUOSC Website
                <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
