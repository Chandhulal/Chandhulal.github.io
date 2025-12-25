import React from 'react'
import Hero from './components/Hero'
import Specialization from './components/Specialization'
import Products from './components/Products'
import WhyBlueIce from './components/WhyBlueIce'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Specialization />
      <Products />
      <WhyBlueIce />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

