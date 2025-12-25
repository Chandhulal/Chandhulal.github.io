import React from 'react'

function Navigation() {
  return (
    <header className="relative bg-black border-b border-gray-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <nav className="flex items-center justify-between py-4 md:py-6">
          <div className="flex items-center gap-8 md:gap-12">
            <a href="#about" className="text-white/90 hover:text-white text-sm md:text-base font-light tracking-wide transition-colors">
              ABOUT
            </a>
            <a href="#specialization" className="text-white/90 hover:text-white text-sm md:text-base font-light tracking-wide transition-colors">
              SERVICES
            </a>
            <a href="#products" className="text-white/90 hover:text-white text-sm md:text-base font-light tracking-wide transition-colors">
              EQUIPMENT
            </a>
          </div>
          
          <div className="flex-shrink-0">
            <div className="text-center">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wider">
                BLUE ICE
              </h1>
              <p className="text-xs md:text-sm text-white/70 tracking-widest uppercase">
                BARTENDING SERVICES
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-8 md:gap-12">
            <a href="#why" className="text-white/90 hover:text-white text-sm md:text-base font-light tracking-wide transition-colors">
              WHY US
            </a>
            <a href="#contact" className="text-white/90 hover:text-white text-sm md:text-base font-light tracking-wide transition-colors">
              CONTACT
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navigation

