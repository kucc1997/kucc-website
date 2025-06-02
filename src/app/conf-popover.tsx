'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import {
  MapPin,
  Users,
  ExternalLink,
  X,
  Sparkles,
  Calendar,
  Brain,
  Shield,
  Cpu,
  Layers,
} from 'lucide-react'
import Image from 'next/image'

export default function ConferencePopover() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const handleVisitConference = () => {
    window.open('https://conf.kucc.ku.edu.np/', '_blank')
    setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden border-0 shadow-2xl">
        <div className="relative">
          <div
            className="text-white p-4 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, #2596be 0%, #1e7ba8 50%, #2596be 100%)` }}
          >
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-4 left-4 w-8 h-8 border border-white rounded-full"></div>
              <div className="absolute top-8 right-8 w-4 h-4 bg-white rounded-full"></div>
              <div className="absolute bottom-4 left-8 w-6 h-6 border border-white rounded"></div>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2 text-white hover:bg-white/20 z-10"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="flex items-center justify-center mb-3">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg p-0 overflow-hidden">
                <div className="w-full h-full relative">
                  <Image
                    src="/assets/ncci-icon.svg"
                    alt="NCCI Logo"
                    fill
                    className="object-contain p-1"
                    sizes="64px"
                  />
                </div>
              </div>
            </div>

            <DialogHeader className="text-center">
              <DialogTitle className="text-xl font-bold text-white mb-1 text-center">
                National Conference on Computer Innovations
              </DialogTitle>
              <DialogDescription className="text-blue-100 text-sm font-medium text-center">
                Exploring the Future of Technology and Innovation
              </DialogDescription>
              <div className="flex items-center justify-center gap-4 mt-2 text-blue-100 text-sm">
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  August 24, 2025
                </div>
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  Kathmandu University
                </div>
              </div>
            </DialogHeader>
          </div>

          <CardContent className="p-4 space-y-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge
                variant="secondary"
                style={{ backgroundColor: '#e6f3ff', color: '#2596be', borderColor: '#2596be' }}
              >
                <Users className="w-3 h-3 mr-1" />
                Networking
              </Badge>
              <Badge
                variant="secondary"
                style={{ backgroundColor: '#e6f3ff', color: '#2596be', borderColor: '#2596be' }}
              >
                <MapPin className="w-3 h-3 mr-1" />
                Kathmandu University
              </Badge>
              <Badge
                variant="secondary"
                style={{ backgroundColor: '#e6f3ff', color: '#2596be', borderColor: '#2596be' }}
              >
                <Sparkles className="w-3 h-3 mr-1" />
                Innovation
              </Badge>
            </div>

            <div className="space-y-3">
              <p className="text-gray-700 leading-relaxed text-center text-sm">
                Join Nepal&apos;s premier national conference on computer innovations! Connect with
                leading researchers, explore cutting-edge technologies, and be part of shaping the
                future of technology and innovation.
              </p>

              <div
                className="rounded-lg p-4 border"
                style={{
                  background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)',
                  borderColor: '#2596be',
                }}
              >
                <h4 className="font-semibold text-gray-800 mb-3 flex items-center text-center w-full justify-center text-sm">
                  <Sparkles className="w-4 h-4 mr-2" style={{ color: '#2596be' }} />
                  Conference Themes
                </h4>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-gray-700">
                  <div className="flex items-center">
                    <Brain className="w-3 h-3 mr-2 flex-shrink-0" style={{ color: '#2596be' }} />
                    <span className="font-medium">Intelligent Systems and Data Innovation</span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-3 h-3 mr-2 flex-shrink-0" style={{ color: '#2596be' }} />
                    <span className="font-medium">Secure and Scalable Computing</span>
                  </div>
                  <div className="flex items-center">
                    <Cpu className="w-3 h-3 mr-2 flex-shrink-0" style={{ color: '#2596be' }} />
                    <span className="font-medium">Emerging Technologies</span>
                  </div>
                  <div className="flex items-center">
                    <Layers className="w-3 h-3 mr-2 flex-shrink-0" style={{ color: '#2596be' }} />
                    <span className="font-medium">Human-Centered Software and Interaction</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-1">
              <Button
                onClick={handleVisitConference}
                className="flex-1 text-white shadow-lg hover:opacity-90 text-sm"
                style={{ background: `linear-gradient(135deg, #2596be 0%, #1e7ba8 100%)` }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Conference Website
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="px-4 hover:bg-blue-50 text-sm"
                style={{ borderColor: '#2596be', color: '#2596be' }}
              >
                Later
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 pt-1">
              <span className="text-xs text-gray-500">Organized by</span>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm border overflow-hidden">
                  <div className="w-full h-full relative">
                    <Image
                      src="/kucc-logo.png"
                      alt="KUCC Logo"
                      fill
                      className="object-contain p-0.5"
                      sizes="20px"
                    />
                  </div>
                </div>
                <span className="text-xs font-medium" style={{ color: '#2596be' }}>
                  Kathmandu University Computer Club
                </span>
              </div>
            </div>
          </CardContent>
        </div>
      </DialogContent>
    </Dialog>
  )
}
