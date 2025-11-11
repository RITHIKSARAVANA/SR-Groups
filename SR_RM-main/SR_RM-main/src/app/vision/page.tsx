export default function Vision() {
    return (
      <main className="pt-20 min-h-screen">
        <section className="py-16 px-8 max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Vision
          </h1>
  
          <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-700/50">
            <div className="prose max-w-none">
              {/* Main Vision Statement */}
              <div className="mb-12 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
                <p className="text-xl text-gray-100 leading-relaxed font-medium">
                  To be a global leader in transformative IT solutions, redefining the future of technology 
                  with innovation, intelligence, and integrity. We envision a world where businesses harness 
                  the full potential of digital advancements, seamlessly integrating cutting-edge solutions 
                  to drive efficiency, security, and sustainable growth.
                </p>
              </div>
  
              {/* Vision Goals */}
              <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Strategic Vision Goals
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Innovation Leadership */}
                <div className="group bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-xl border border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold ml-4 text-cyan-300 group-hover:text-cyan-200 transition-colors">
                      Innovation Leadership
                    </h4>
                  </div>
                  <p className="text-gray-100">
                    Pioneering breakthrough technologies and methodologies that set new industry standards and 
                    drive digital transformation across sectors.
                  </p>
                </div>
                
                {/* Global Impact */}
                <div className="group bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-xl border border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold ml-4 text-cyan-300 group-hover:text-cyan-200 transition-colors">
                      Global Impact
                    </h4>
                  </div>
                  <p className="text-gray-100">
                    Expanding our global footprint while delivering localized expertise and solutions that 
                    resonate with diverse market needs.
                  </p>
                </div>
                
                {/* Sustainable Solutions */}
                <div className="group bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-xl border border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold ml-4 text-cyan-300 group-hover:text-cyan-200 transition-colors">
                      Sustainable Solutions
                    </h4>
                  </div>
                  <p className="text-gray-100">
                    Creating eco-conscious technology solutions that promote sustainability while delivering 
                    exceptional business value.
                  </p>
                </div>
                
                {/* Client Success */}
                <div className="group bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-xl border border-gray-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold ml-4 text-cyan-300 group-hover:text-cyan-200 transition-colors">
                      Client Success
                    </h4>
                  </div>
                  <p className="text-gray-100">
                    Empowering our clients to achieve and exceed their business objectives through 
                    innovative technology solutions and dedicated support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }