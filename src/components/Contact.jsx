import React from 'react'

function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-20 lg:py-24 bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0e27] to-black"></div>
      <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Cheers With Us
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              Ready to make your event unforgettable with professional bartending and mixology services? Contact Blue Ice by Saj today for expert cocktail and mocktail services!
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <a 
              href="mailto:sajblueice@gmail.com"
              className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl p-5 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700/50 hover:border-blue-500/50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4 sm:mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500/30 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 text-center">Email Us</h3>
                <p className="text-xs sm:text-sm md:text-base text-blue-300 font-medium text-center group-hover:text-blue-200 transition-colors break-all">
                  sajblueice@gmail.com
                </p>
              </div>
            </a>
            
            <a 
              href="tel:+919946801454"
              className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-700/50 hover:border-green-500/50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-green-500/20 transition-colors"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4 sm:mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 text-center">Call Us</h3>
                <p className="text-xs sm:text-sm md:text-base text-green-300 font-medium text-center group-hover:text-green-200 transition-colors">
                  +91 9946801454
                </p>
              </div>
            </a>
            
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-gray-700/50 hover:border-purple-500/50 overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-purple-500/20 transition-colors"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4 sm:mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500/30 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 text-center">Service Available</h3>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-purple-300 mb-1 sm:mb-2 text-center">All Over India</p>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 text-center">
                  We travel nationwide for your events
                </p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-gray-700/50 hover:border-orange-500/50 overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-orange-500/20 transition-colors"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4 sm:mb-5">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-all duration-300 group-hover:scale-110">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3 text-center">Office Location</h3>
                <p className="text-xs sm:text-sm md:text-base text-orange-300 leading-relaxed text-center">
                  <span className="font-semibold block mb-1">Vembally</span>
                  <span className="text-gray-400">Ettumanoor, Kottayam District</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

