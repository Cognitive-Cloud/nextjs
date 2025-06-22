// app/page.tsx
'use client'

import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Header */}
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 text-cyan-400">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84C7.9 16.2 9.34 17.8 11 19.3l1 .97 1-.97c1.66-1.5 3.1-3.1 4.59-5.46C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7z"/>
            </svg>
          </div>
          <span className="text-white text-xl font-bold">CognitiveCloud.ai</span>
        </div>
        <nav className="hidden md:flex space-x-8 text-white">
          <Link href="/learning" className="hover:text-cyan-300 transition-colors">MathCraft</Link>
          <Link href="/learning" className="hover:text-cyan-300 transition-colors">Dunn Solutions 24</Link>
          <Link href="/pricing" className="hover:text-cyan-300 transition-colors">Pricing</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="text-center px-6 py-20 max-w-6xl mx-auto">
        {/* Brain Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 text-cyan-400">
            <svg viewBox="0 0 100 100" fill="currentColor" className="animate-pulse">
              <path d="M50 10c-4.4 0-8.5 1.1-12.1 3.1-2.8-1.3-5.9-2-9.2-2-12.1 0-21.9 9.8-21.9 21.9 0 3.3.7 6.4 2 9.2C6.1 45.8 5 49.9 5 54.3c0 12.1 9.8 21.9 21.9 21.9 3.3 0 6.4-.7 9.2-2 3.6 2 7.7 3.1 12.1 3.1s8.5-1.1 12.1-3.1c2.8 1.3 5.9 2 9.2 2 12.1 0 21.9-9.8 21.9-21.9 0-4.4-1.1-8.5-3.1-12.1 1.3-2.8 2-5.9 2-9.2 0-12.1-9.8-21.9-21.9-21.9-3.3 0-6.4.7-9.2 2C58.5 11.1 54.4 10 50 10z"/>
              <circle cx="35" cy="35" r="3" fill="white"/>
              <circle cx="65" cy="35" r="3" fill="white"/>
              <circle cx="50" cy="55" r="2" fill="white"/>
              <path d="M40 65 Q50 75 60 65" stroke="white" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Imagination</span> Meets Science
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Revolutionizing K-12 education with gamified math learning and interactive chemistry exploration
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
          <Link 
            href="/learning"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Explore Programs →
          </Link>
          <button className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
            Watch Demo
          </button>
        </div>

        {/* Learning Modules Section */}
        <section className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            CognitiveCloud Learning Modules
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* MathCraft Module */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 text-cyan-400">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">MathCraft</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our flagship math module featuring gamified, avatar-led K-12 learning that transforms complex concepts into engaging adventures. Students explore arithmetic, algebra, and beyond through interactive storytelling within the CognitiveCloud.ai ecosystem.
              </p>
              <Link 
                href="/learning"
                className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                Enter MathCraft Module
              </Link>
              <div className="mt-4 text-sm text-cyan-300">
                🧠 CognitiveCloud Math Branch
              </div>
            </div>

            {/* Dunn Solutions 24 Module */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-15 transition-all duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 text-pink-400">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Dunn Solutions 24</h3>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Our comprehensive chemistry module providing visual, interactive education with real-world context. Students explore atomic structures, chemical reactions, and scientific discoveries through immersive simulations powered by CognitiveCloud.ai.
              </p>
              <Link 
                href="/learning"
                className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300"
              >
                Enter Dunn Solutions Module
              </Link>
              <div className="mt-4 text-sm text-purple-300">
                🧪 CognitiveCloud Chemistry Branch
              </div>
            </div>
          </div>
        </section>

        {/* Dr. Chet Section */}
        <section className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              DC
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Meet Dr. Chet</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Dr. Chet explains how we're transforming STEM education through gamified learning, cultural representation, and cutting-edge AI technology.
              </p>
              <div className="text-sm text-gray-400">
                <strong>Dr. Chet - AI Education Advisor</strong><br/>
                Avatar video coming soon...
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 border-t border-white border-opacity-20">
        <p>&copy; 2024 CognitiveCloud.ai - Where Imagination Meets Science</p>
      </footer>
    </div>
  );
}
