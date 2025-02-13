
//Hero.js
import React from 'react'

const Hero = () => {
  return (
    <div className="relative z-10 bg-black/20 h-screen text-white">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className='space-y-4 lg:pr-36'>
            <h1 data-aos="fade-up" className='text-5xl font-bold uppercase'>Lost in Lunar Light</h1>
            <p data-aos="fade-up" 
            data-aos-delay="300">
              Since ancient times, the Moon has been Earth's eternal companion,  
              lighting up our nights and influencing the tides.  
              From space explorations to ancient myths, the Moon has always inspired humanity,  
              inviting us to uncover its mysteries and journey through its orbits. 🌙✨  
            </p>

            <button 
              data-aos="fade-up" 
              data-aos-delay="500"
             className="primary-button">
              Learn More
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
