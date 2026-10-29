import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export default function KUOSC() {
  return (
    <section id="kuosc" className="section border-t border-line">
      <div className="wrap">
        <div className="grid lg:grid-cols-2 gap-[calc(var(--space)*3)] items-center">
          <div className="flex justify-center lg:justify-start">
            <Image src="/kuosc.png" alt="KUOSC Logo" className="object-contain w-64 h-64" height={256} width={256} />
          </div>
          <div className="stack">
            <div className="inline-flex border-b border-brand text-brand fs-small">
              <span>Open Source Wing</span>
            </div>
            <h2>
              <span className="block fs-text text-muted-c">Kathmandu University</span>
              <span className="block text-4xl font-semibold text-brand">Open Source Community</span>
            </h2>
            <p className="fs-small text-muted-c">
              <Link href="https://kuosc.org.np" target="_blank" rel="noreferrer" className="text-brand underline underline-offset-2">
                Kathmandu University Open Source Community (KUOSC)
              </Link>{' '}
              is the Open Source related wing of KUCC. It is a vibrant historic community from Kathmandu
              University which provides a common platform for all FOSS enthusiasts to discuss, share,
              and learn about free and open source softwares. KUOSC is specifically focused on all the
              Open Source related activities ranging from training programs like Linux Talks, Useful
              Network Training to advocacy activities like Software Freedom Day celebration and
              organizing different community level workshops and events.
            </p>
            <Link
              href="https://kuosc.org.np"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 pad bg-brand text-onbrand fs-nav"
            >
              Visit KUOSC Website
              <ExternalLink size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}