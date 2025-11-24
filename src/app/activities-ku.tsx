import ActivityCard from '@/components/ActivityCard'
import { Lightbulb } from 'lucide-react'

export default function Activities() {
  return (
    <section className="relative py-20 md:py-28 bg-baseBackground tech-grid overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accentBlue/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 circuit-pattern opacity-10 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accentBlue/20 border border-accentBlue/30 rounded-full mb-4 backdrop-blur-sm">
            <Lightbulb size={32} className="text-accentBlueLight" />
          </div>
          <p className="text-accentBlueLight font-semibold text-sm uppercase tracking-wider mb-3 tech-text">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-titleColor mb-4 highlight-text">
            Activities We Are <span className="highlight-glow tech-text text-accentBlueLight">Actively Doing</span>
          </h2>
          <div className="w-24 h-1 bg-accentBlue mx-auto rounded-full" />
        </div>

        {/* Activity Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ActivityCard
            title="IT Meet"
            description="IT MEET is an ICT event organized by KUCC and DoCSE to encourage interaction between students from various institutions of Nepal and youths from various walks of life."
            url="https://itmeet.kucc.ku.edu.np"
          />
          <ActivityCard
            title="Software Freedom Day"
            description="Software Freedom Day (SFD) is an annual worldwide celebration of Free Software. SFD is a public education effort with the aim of increasing awareness of Free Software and its virtues, and encouraging its use."
            url="https://sfd.kuosc.org"
          />
          <ActivityCard
            title="NCCI"
            description="National Conference on Computer Innovations (NCCI) is Nepal's premier conference on computer innovations, connecting leading researchers to explore cutting-edge technologies and shape the future of technology and innovation."
            url="https://ncci.kucc.ku.edu.np"
          />
        </div>
      </div>
    </section>
  )
}
