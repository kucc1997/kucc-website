import React from 'react'
import { FaPhoneAlt, FaUser } from 'react-icons/fa'

const GetInTouch = () => {
  const clubRepresentatives = [
    {
      id: 1,
      name: 'Sakshi K.C.',
      position: 'President',
      phoneNumber: '9821948158',
    },
    {
      id: 2,
      name: 'Kiran Dahal',
      position: 'Vice President',
      phoneNumber: '9863008384',
    },
    {
      id: 3,
      name: 'Saksham Gyawali',
      position: 'General Secretary',
      phoneNumber: '9847025812',
    },
  ]
  
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Get in touch with the club.
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-4">
        {clubRepresentatives.map((representative) => {
          return (
            <div 
              key={representative.id}
              className="group relative bg-gray-900 border border-gray-800/50 rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-xl shadow-accentBlue/10 hover:shadow-accentBlue/20"
            >
              <div className="relative z-10 text-center space-y-4">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accentBlue/20 flex items-center justify-center border border-gray-700/50">
                    <FaUser className="text-3xl text-accentBlue" />
                  </div>
                </div>
                
                {/* Name */}
                <h3 className="text-xl font-semibold text-white">
                  {representative.name}
                </h3>
                
                {/* Position */}
                <p className="text-sm font-medium text-gray-400 uppercase tracking-wide">
                  {representative.position}
                </p>
                
                {/* Phone with icon */}
                <div className="flex items-center justify-center space-x-2 text-gray-300 pt-2">
                  <FaPhoneAlt className="text-accentBlue text-sm" />
                  <a 
                    href={`tel:${representative.phoneNumber}`}
                    className="text-base hover:text-accentBlue transition-colors"
                  >
                    {representative.phoneNumber}
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default GetInTouch
