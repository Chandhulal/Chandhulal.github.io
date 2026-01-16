import React, { useState, useEffect } from 'react'

const heroSlides = [
  {
    id: 1,
    title: 'BLUE ICE',
    subtitle: 'Professional Bartending & Mixology Services',
    description: 'Blue Ice by Saj offers professional bartending and mixology services across India. Expert cocktail and mocktail creation for unforgettable events. Premium bartending with exceptional mixology expertise.',
    image: '/logo.png',
    imageAlt: 'Blue Ice - Professional Bartending and Mixology Services by Saj'
  },
  {
    id: 2,
    title: 'PREMIUM EXPERIENCES',
    subtitle: 'Luxury Event Services',
    description: 'Elevate your celebrations with Blue Ice bartending services. Expert mixology and professional bartending by Saj. Premium cocktails and mocktails for intimate gatherings to grand celebrations.',
    image: '/premium-experiences.png',
    imageAlt: 'Premium Bartending and Mixology Services'
  },
  {
    id: 3,
    title: 'SIGNATURE COCKTAILS',
    subtitle: 'Expert Mixology & Cocktail Creation',
    description: 'Blue Ice mixologists create unique, handcrafted cocktails and mocktails using premium spirits and fresh ingredients. Professional bartending and mixology services tailored for your event.',
    image: '/tequila-shot.png',
    imageAlt: 'Signature Cocktails and Mixology by Blue Ice'
  }
]

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden pb-0">
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 z-30">
        <img 
          src="/new_logo.PNG" 
          alt="Blue Ice Logo - Professional Bartending and Mixology Services by Saj"
          className="h-5 sm:h-6 md:h-10 lg:h-14"
          style={{ objectFit: 'contain', maxWidth: '120px' }}
        />
      </div>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/50 to-black z-10"></div>
      </div>
      
      <div className="relative z-10 w-full h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === currentSlide ? 1 : 0,
              pointerEvents: index === currentSlide ? 'auto' : 'none'
            }}
          >
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 pt-16 sm:pt-20 md:pt-0 pb-20 h-full flex items-center">
              <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-4 sm:gap-6 lg:gap-0 w-full">
                <div className="max-w-2xl lg:flex-1 w-full px-2 sm:px-0">
                  <h1 className="company-name text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 tracking-wider">
                    {slide.id === 2 ? (
                      <>
                        <span style={{ color: '#FFD700' }}>PREMIUM</span>
                        <span className="text-white"> EXPERIENCES</span>
                      </>
                    ) : slide.id === 3 ? (
                      <>
                        <span style={{ color: '#FFD700' }}>SIGNATURE</span>
                        <span className="text-white"> COCKTAILS</span>
                      </>
                    ) : (
                      slide.title
                    )}
                  </h1>
                  <p 
                    className="text-base sm:text-lg md:text-xl text-gray-300 mb-4 sm:mb-6 font-light tracking-wide"
                    style={{
                      fontFamily: "'Dancing Script', 'Great Vibes', 'Brush Script MT', cursive",
                      fontWeight: 400
                    }}
                  >
                    {slide.subtitle}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 font-light tracking-wide max-w-xl">
                    {slide.description}
                  </p>
                </div>
                
                <div className="w-full lg:w-auto lg:flex-1 flex items-center justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0">
                  <div className="logo-container" style={{ marginTop: '0' }}>
                    <img 
                      src={slide.image} 
                      alt={slide.imageAlt || `${slide.title} - Blue Ice Bartending and Mixology`} 
                      className="logo-image"
                      style={{ width: '100%', maxWidth: '550px', height: 'auto', display: 'block' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 md:p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 active:bg-white/30 transition-all duration-300 text-white rounded-full touch-manipulation"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-2.5 md:p-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 active:bg-white/30 transition-all duration-300 text-white rounded-full touch-manipulation"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 touch-manipulation ${
              index === currentSlide ? 'bg-white w-6 sm:w-8 md:w-10' : 'bg-white/50 hover:bg-white/75 active:bg-white/90'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero
