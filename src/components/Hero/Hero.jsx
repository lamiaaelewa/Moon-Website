// Hero.js
import React from 'react'

const Hero = () => {
  return (
    <div className="relative z-10 bg-black/20 h-screen text-white flex items-center justify-center">
      <div className="text-center space-y-6 px-6">
        <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">Lunar Light</h1>
        <p data-aos="fade-up" data-aos-delay="300" className="max-w-xl mx-auto">
          The Moon has always been Earth's guiding light, from ancient myths to space exploration. 🌙✨
        </p>
        <button 
          data-aos="fade-up" 
          data-aos-delay="500" 
          className="primary-button mt-4">
          Discover More
        </button>
      </div>
    </div>
  )
}

export default Hero;
