import React from 'react'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden pb-0">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/50 to-black z-10"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 py-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-8">
          <div className="max-w-2xl lg:flex-1">
            <h2 className="company-name text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 tracking-wider">
              BLUE ICE
            </h2>
            <p className="text-sm md:text-base text-gray-300 mb-6 font-light tracking-wide">
              Professional Bartending Company
            </p>
            <p className="text-sm md:text-base text-gray-300 mb-8 font-light tracking-wide max-w-xl">
              Stylish bar setups and exceptional drink experiences for events across India. Handcrafted cocktails, curated mocktails, and professional bartenders creating unforgettable celebrations.
            </p>
          </div>
          
          <div className="w-full lg:w-auto lg:flex-1 flex items-center justify-center lg:justify-end">
            <div className="bartender-video-container">
              <video
                className="bartender-video"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/mixing.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
