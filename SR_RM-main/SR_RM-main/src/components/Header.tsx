"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => {
    setIsMenuOpen(prevState => {
      if (!prevState) {
        setTimeout(() => setIsMenuOpen(false), 3000) // Close the menu after 3 seconds
      }
      return !prevState
    })
  }

  // Close the dropdown if clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="w-full z-50 bg-transparent">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-2">
        <Link 
          href="/" 
          className="flex items-center"
        >
          <Image
            src="/SR-RM.jpg"
            alt="SR RM Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
        </Link>

        {/* Centered Navigation Links */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex space-x-6">
            <li>
              <Link href="/who-we-are" className="text-blue-300 text-lg font-semibold hover:bg-yellow-500 hover:text-white hover:shadow-lg transition duration-300 px-3 py-1 rounded">Who We Are</Link>
            </li>
            <li>
              <Link href="/mission" className="text-blue-300 text-lg font-semibold hover:bg-yellow-500 hover:text-white hover:shadow-lg transition duration-300 px-3 py-1 rounded">Mission</Link>
            </li>
            <li>
              <Link href="/vision" className="text-blue-300 text-lg font-semibold hover:bg-yellow-500 hover:text-white hover:shadow-lg transition duration-300 px-3 py-1 rounded">Vision</Link>
            </li>
            <li>
              <Link href="/services" className="text-blue-300 text-lg font-semibold hover:bg-yellow-500 hover:text-white hover:shadow-lg transition duration-300 px-3 py-1 rounded">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="text-blue-300 text-lg font-semibold hover:bg-yellow-500 hover:text-white hover:shadow-lg transition duration-300 px-3 py-1 rounded">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-blue-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isMenuOpen && (
        <nav ref={dropdownRef} className="absolute top-16 right-0 w-48 bg-transparent">
          <ul className="flex flex-col items-end">
            <li>
              <Link href="/who-we-are" className="text-blue-300 text-lg font-semibold hover:bg-yellow-500 hover:text-white hover:shadow-lg transition duration-300 px-3 py-1 rounded">Who We Are</Link>
            </li>
            <li>
              <Link href="/mission" className="text-blue-300 text-lg font-semibold hover:bg-yellow-500 hover:text-white hover:shadow-lg transition duration-300 px-3 py-1 rounded">Mission</Link>
            </li>
            <li>
              <Link href="/vision" className="text-blue-300 text-lg font-semibold hover:bg-yellow-500 hover:text-white hover:shadow-lg transition duration-300 px-3 py-1 rounded">Vision</Link>
            </li>
            <li>
              <Link href="/services" className="text-blue-300 text-lg font-semibold hover:bg-yellow-500 hover:text-white hover:shadow-lg transition duration-300 px-3 py-1 rounded">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="text-blue-300 text-lg font-semibold hover:bg-yellow-500 hover:text-white hover:shadow-lg transition duration-300 px-3 py-1 rounded">Contact</Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Animated gradient border at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
      
      {/* Extra glow effect */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm"></div>
    </header>
  )
} 