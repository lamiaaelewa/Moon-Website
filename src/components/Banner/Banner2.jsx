import React from 'react';
import bgVideo2 from "../../assets/sunandmoon.mp4";
import StarsBackground from '../StarsBackground/StarsBackground';

const Banner2 = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
      <StarsBackground />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          
          <div className='space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800'>
            <p data-aos="fade-up" className='text-sky-400 uppercase tracking-widest'>Explore the Cosmic Dance</p>
            <h1 data-aos="fade-up" data-aos-delay="300" className='uppercase text-5xl font-bold'>The Moon and Sun: A Celestial Connection</h1>
            <p data-aos="fade-up" data-aos-delay="500" className='text-lg text-gray-300'>
              Discover the fascinating relationship between the Moon and the Sun. From the mysterious lunar eclipses to the warmth of solar energy, explore how these two celestial bodies shape life on Earth. Are you ready to journey through the cosmos and uncover their cosmic secrets?
            </p>
            <button data-aos="fade-up" data-aos-delay="700" className='primary-button'>Learn More</button>
          </div>
          <div>
             <video data-aos="zoom-in"
                      autoPlay 
                      loop 
                      muted 
                       >
                      <source src={bgVideo2} type="video/mp4" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover" />
                    </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
