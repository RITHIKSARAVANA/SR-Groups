export default function Mission() {
  return (
    <main className="pt-20 min-h-screen">
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Our Mission
        </h1>

        <div className="bg-gray-900/60 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-gray-700/50">
          <div className="prose max-w-none">
            <p className="text-gray-100 text-lg leading-relaxed mb-6">
              Our mission is to empower businesses through innovative technology solutions that drive growth, 
              efficiency, and competitive advantage in the digital age.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Key Objectives:</h3>
            <ul className="space-y-4 text-gray-100">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Deliver cutting-edge solutions that transform business operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Foster innovation and technological advancement</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Build lasting partnerships with our clients</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>Maintain the highest standards of quality and reliability</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
} 