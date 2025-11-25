import type { Metadata } from 'next'
import { Inter as FontSans } from "next/font/google"
import { Orbitron as FontTech } from "next/font/google"
import './globals.css'
import Footer from '../components/Footer/Footer'
import { cn } from "@/lib/utils"
import NavBar from '../components/Navbar/Navbar'

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontTech = FontTech({
  subsets: ["latin"],
  variable: "--font-tech",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: 'Kathmandu University Computer Club (KUCC)',
  description:
    'Kathmandu University Computer Club KUCC is a non-profit, independent club formed by students of the Department of Computer Science and Engineering in the year 1997. Being registered as the first club of Kathmandu University with the registration number 001/1997 in the Student Welfare, KUCC has worked in the field of ICT for twenty years. As an autonomous community supported by the esteemed Kathmandu University Computer Club (KUCC), KUOSC radiates the same spirit of technological excellence and collaboration.',
  icons: {
    icon: '/kucc-logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-baseBackground font-sans antialiased",
          fontSans.variable,
          fontTech.variable
        )}
      >
        <NavBar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
