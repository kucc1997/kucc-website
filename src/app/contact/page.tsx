import React from 'react'
import GetInTouch from './components/GetInTouch'

export const metadata = {
  title: 'Contact - Kathmandu University Computer Club (KUCC)',
  description: 'Get In Touch With Kathmandu University Computer Club',
}

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-baseBackground via-gray-900 to-gray-950 tech-grid py-16 px-5">
      {/* Gradient decorative blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accentBlue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 circuit-pattern opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-accentBlue via-purple-400 to-pink-400 text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-accentBlue via-purple-400 to-pink-400 rounded-full mx-auto"></div>
        </div>

        <div className="space-y-8">
          <GetInTouch />
          
          <div className="relative rounded-3xl overflow-hidden border border-gray-800/50 shadow-2xl shadow-accentBlue/10">
            <iframe
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ku-location&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="filter brightness-90 grayscale-[20%]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
