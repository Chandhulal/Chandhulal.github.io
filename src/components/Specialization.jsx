import React from 'react'

const specializationItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'SIGNATURE COCKTAILS',
    description: 'Expertly crafted cocktails using premium spirits and fresh ingredients, tailored to your event.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'MOCKTAILS & FRESH DRINKS',
    description: 'Sophisticated non-alcoholic beverages that deliver the same premium experience without the alcohol.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'PRESENTATION STYLE',
    description: 'Every drink is a masterpiece, presented with artistic flair and attention to detail.',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'ENTERTAINING GUESTS',
    description: 'Engaging bartending performance that creates memorable moments and elevates your event atmosphere.',
  },
]

function Specialization() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-black -mt-px">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0e27]"></div>
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Blue Ice Mixology & Bartending Specializations
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
            At Blue Ice, led by Saj, we deliver professional bartending and mixology services with a focus on quality, precision, and presentation. 
            Our expert mixologists and bartenders create exceptional cocktails and mocktails designed to elevate every event through expertly crafted drinks and seamless service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
          {specializationItems.map((item) => (
            <div key={item.id} className="relative group">
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <img
                  src={item.image}
                  alt={`${item.title} - Blue Ice Bartending and Mixology Services`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                  <p className="text-xs sm:text-sm md:text-base text-white font-light tracking-wider uppercase mb-1 sm:mb-2">
                    + {item.title}
                  </p>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialization

