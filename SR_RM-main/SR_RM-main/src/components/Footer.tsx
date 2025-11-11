import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <Link href="/" className="relative group inline-block">
              <Image
                src="/SR-RM.jpg"
                alt="SR RM Logo"
                width={80}
                height={80}
                className="rounded-full object-cover transition-transform duration-300 transform group-hover:scale-105"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transforming ideas into innovative solutions. Your trusted partner in digital transformation and technological excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Who We Are', 'Mission', 'Vision', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </h3>
            <ul className="space-y-2">
              {[                'Web Development',
                'Mobile Apps',
                'Cloud Solutions',
                'UI/UX Design',
                'IT Consulting'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href="/services"
                    className="text-sm hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 group">
                <svg className="w-5 h-5 text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:srrmgroups@gmail.com" className="text-sm hover:text-cyan-400 transition-colors duration-300">
                 sr.groups0108@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <svg className="w-5 h-5 text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:9524956067" className="text-sm hover:text-cyan-400 transition-colors duration-300">
                9524956067
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <svg className="w-5 h-5 text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:8270801162" className="text-sm hover:text-cyan-400 transition-colors duration-300">
                9952735416
                </a>
              </li>
            </ul>
          </div>
        </div>


        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2024 SR GROUPS. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-1/2 h-[120px] bg-cyan-500/5 blur-[100px]" />
      </div>
    </footer>
  )
} 
