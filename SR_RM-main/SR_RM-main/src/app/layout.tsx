import type { Metadata } from 'next'
import { Inter } from "next/font/google"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'SR Groups',
  description: 'SR Group of Companies',
  icons: {
    icon: [
      { url: 'SR-RM.jpg', type: 'image/jpg' },
    ],
    shortcut: ['SR-RM.jpg'],
    apple: [
      { url: 'SR-RM.jpg' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Video Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/Lunarcy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" /> {/* Optional overlay */}
        </div>

        {/* Main Content */}
        <div className="flex flex-col min-h-screen relative">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
