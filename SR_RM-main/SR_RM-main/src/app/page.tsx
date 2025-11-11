"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const spaceBackground = document.querySelector('.space-background') as HTMLElement;
      if (spaceBackground) {
        spaceBackground.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="m-0 p-0">
      {/* Background Video */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/videos/Lunarcy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Section with Gradient Background */}
      <section className="mt-0 py-8 px-8 text-center bg-transparent">
        <h1 className="text-5xl font-bold mb-4 text-cyan-500">Welcome to</h1>
        <h1 className="text-5xl font-bold mb-4">
          <span className="white">SR </span><span className="text-cyan-500">Groups</span> 
        </h1>
        <p className="text-xl text-gray-600">Your Trusted Partner in Excellence</p>
      </section>

      {/* Featured Sectors */}
      <section className="py-12 text-center bg-transparent">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-6">Our Sectors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Link href="/who-we-are" className="group p-8 hover:shadow-xl transition-all duration-300 bg-transparent rounded-lg hover:bg-cyan-500 hover:translate-y-[-8px]">
            <h3 className="text-cyan-300 text-2xl font-bold mb-4">SKART Med Hub</h3>
            <p className="text-gray-600">Manufacturing the future. Connecting the care..</p>
          </Link>
          <Link href="/who-we-are" className="group p-8 hover:shadow-xl transition-all duration-300 bg-transparent rounded-lg hover:bg-green-500 hover:translate-y-[-8px]">
            <h3 className="text-cyan-300 text-2xl font-bold mb-4">Zephyrix Solutions</h3>
            <p className="text-gray-600">Leading innovation in IT solutions and digital transformation...</p>
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 text-center bg-transparent">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-6">Quick Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <div className="text-4xl font-bold text-cyan-500 mb-2">40+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-500 mb-2">50+</div>
            <div className="text-gray-600">Expert Team</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-500 mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-cyan-500 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 text-center bg-transparent">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-6">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {/* Jayanth RM */}
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="mb-4 w-[200px] h-[200px] mx-auto">
              <Image
                src="/images/Rithik.jpg"
                alt="Jayanth RM"
                width={200}
                height={200}
                className="rounded-full w-full h-full object-cover"
                priority
              />
            </div>
            <h3 className="text-2xl font-bold text-cyan-500 mb-2">Rithik Saravana</h3>
            <p className="text-gray-400 mb-2">Founder & CEO, SR Groups of Companies</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Rithik Saravana, Founder and CEO of SR Groups of Companies, where his company specialize in delivering innovative IT solutions and providing services across multiple sectors. He is passionate about exploring and expanding our business into diverse industries, including healthcare, staffing solutions, where we strive to make a meaningful impact. With a vision to create transformative value, he led SR Groups by driving growth, fostering strategic partnerships, and building high-performance teams. His focus is on blending technology with business expertise to offer exceptional solutions and deliver sustainable success for our clients across various industries.

            </p>
          </div>

          {/* Rithik Saravana */}
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <div className="mb-4 w-[200px] h-[200px] mx-auto">
              <Image
                src="/images/Rathees.png"
                alt="Rithik Saravana"
                width={200}
                height={200}
                className="rounded-full w-full h-full object-cover"
                priority
              />
            </div>
            <h3 className="text-2xl font-bold text-cyan-500 mb-2">Rathieswaran KS
</h3>
            <p className="text-gray-400 mb-2">CO - Founder & COO, SR Groups of Companies
</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              
Rathieswaran K S, CO – Founder and COO(Chief Operational Officer) of SR Groups of Companies, plays a key role in overseeing the organization’s operations and ensuring seamless execution across all business functions. With a strong focus on operational excellence and innovation, he drives efficiency, productivity, and growth within the company. Passionate about expanding SR Groups into diverse industries such as healthcare and staffing solutions, he works to deliver meaningful impact and long-term value. Under his leadership, the company continues to strengthen its strategic partnerships, optimize processes, and build high-performance teams. His vision centers on integrating business expertise with technology to deliver exceptional solutions and achieve sustainable success for clients across multiple sectors.

            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-gray-600 mb-8">Let's discuss how we can help you achieve your digital transformation goals.</p>
        <Link href="/contact" className="inline-block px-8 py-3 bg-cyan-500 text-gray-600 rounded-full hover:bg-cyan-600 transition-colors duration-300 shadow-lg">
          Get Started Today
        </Link>
      </section>
    </main>
  );
}

