export default function WhoWeAre() {
  return (
    <main className="pt-10 min-h-screen">
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Who We Are
        </h1>
        
        <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-700/50 mb-8">
          <div className="prose max-w-none">
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">SKART Med Hub:</h3>
            <p className="text-gray-100 text-lg leading-relaxed mb-6">
              SKART —the future‐ready health-tech ecosystem where medical manufacturing, med-tech innovation, and digital healthcare solutions converge under one roof. From precision-engineered devices and advanced diagnostics to integrated software platforms and AI-powered care, we enable seamless end-to-end delivery of medical needs. With a global mindset and local agility, we empower healthcare providers, innovators and patients to move faster, smarter and with more confidence. At our core lies a commitment to quality, connectivity and transformation—turning ideas into life-changing solutions, and technologies into healers of tomorrow.”</p>
          </div>
        </div>

        <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-700/50">
          <div className="prose max-w-none">
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">Zephyrix Solutions</h3>
            <p className="text-gray-100 text-lg leading-relaxed mb-6">
               We are an innovative IT solutions provider, dedicated to transforming businesses with cutting-edge technology. 
              Our expertise spans software development, cloud computing, cybersecurity, AI-driven solutions, and IT consulting.              With a passion for excellence and a future-focused approach, we help organizations navigate digital transformation, 
              optimize operations, and achieve sustainable growth.              Our team of experts thrives on solving complex challenges, ensuring seamless technology integration and business success.</p>
          </div>
        </div>
      </section>
    </main>
  )
} 