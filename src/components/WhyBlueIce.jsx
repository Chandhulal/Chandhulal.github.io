import React from 'react'

const features = [
  {
    title: 'Expert Mixology & Bartending',
    description: 'Blue Ice by Saj brings years of experience in professional bartending and mixology, crafting signature cocktails and mocktails with unmatched skill and precision. Our team brings extensive knowledge of mixology techniques, cocktail creation, and presentation artistry. We stay current with industry trends and continuously refine our craft to deliver exceptional drinks that exceed expectations. Every cocktail and mocktail is meticulously prepared using premium ingredients and time-tested mixology methods.',
  },
  {
    title: 'Premium Bartending Service',
    description: 'Exceptional bartending and mixology service that makes every event memorable and your guests impressed. Blue Ice provides a seamless, professional bartending experience from initial consultation through event execution. Our attention to detail, friendly demeanor, and mixology expertise ensures your event runs smoothly. We work closely with you to understand your vision and deliver personalized cocktail and mocktail services that reflect your style and preferences.',
  },
  {
    title: 'Professional Event Bartending',
    description: 'From intimate gatherings to grand celebrations, Blue Ice adapts to any event size with professional bartending and mixology services. Whether you\'re hosting a small dinner party, corporate event, wedding, or large festival, we have the bartending expertise and mixology equipment to handle it all. Our flexible approach means we can scale our cocktail and mocktail services to match your needs, ensuring every guest receives the same high-quality bartending experience regardless of the event size.',
  },
]

function WhyBlueIce() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-[#1a0f2e]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f2e] via-[#2d1b4e] to-black"></div>
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose Blue Ice Bartending & Mixology
            </h2>
            <div className="w-24 h-1 bg-violet-400 mx-auto mb-6"></div>
            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Experience the perfect blend of professional bartending, expert mixology, and premium service. 
              Blue Ice, led by Saj MG, brings years of experience in crafting signature cocktails and mocktails. 
              Our mixology expertise and bartending skills deliver exceptional cocktail and mocktail experiences that make every event memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-violet-900/30 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-violet-700/40 hover:border-violet-600/60"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-white/80 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-br from-[#1a0f2e] via-[#2d1b4e] to-black rounded-2xl p-8 md:p-12 text-center shadow-2xl overflow-hidden border border-violet-800/40">
            <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/10 rounded-full -mr-36 -mt-36 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-violet-400/10 rounded-full -ml-28 -mb-28 blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-24 h-24 bg-violet-900/40 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-violet-600/50">
                  <svg className="w-12 h-12 text-violet-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                Excellence in Every Pour
              </h3>
              <div className="w-20 h-0.5 bg-violet-400/60 mx-auto mb-6"></div>
              <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                With years of expertise in mixology and event service, our team delivers exceptional bartending experiences. Every cocktail is crafted with precision, every event is handled with professionalism, and every guest leaves impressed. Trust in our commitment to excellence and let us elevate your next gathering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyBlueIce

