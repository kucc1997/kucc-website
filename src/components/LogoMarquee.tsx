'use client'
import Marquee from 'react-fast-marquee'

type Props = {
  logos: string[] // paths like '/assets/logos/ncci-icon.svg'
  speed?: number // pixels per second, higher = faster
}

export default function LogoMarquee({ logos, speed = 40 }: Props) {
  return (
    <section
      aria-hidden="true"
      className="bg-page border-line border-t py-8 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
    >
      <Marquee autoFill speed={speed} pauseOnHover>
        {logos.map((src) => (
          <div key={src} className="flex items-center px-6 sm:px-10">
            {/* fixed box: every logo is scaled to fit inside it, whatever its shape */}
            <div className="flex h-14 w-28 items-center justify-center sm:h-16 sm:w-36">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-contain opacity-60 grayscale transition duration-150 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  )
}