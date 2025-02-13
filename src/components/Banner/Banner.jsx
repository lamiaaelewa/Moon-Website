// Banner.jsx
import React from 'react';
import AstronautImg from "../../assets/lunerastronut.png";
import StarsBackground from '../StarsBackground/StarsBackground';

const Banner = () => {
  return (
    <div className='bg-black text-white pb-12 relative z-50'>
      <StarsBackground />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
          <div>
            <img data-aos="zoom-in" src={AstronautImg} alt="Astronaut on the Moon" className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover" />
          </div>
          <div className='space-y-3 xl:pr-36 p-6 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800'>
            <p data-aos="fade-up"  className='text-sky-400 uppercase tracking-widest'>Explore the Unknown</p>
            <h1 data-aos="fade-up" data-aos-delay="300"
                className='uppercase text-5xl font-bold'>Journey to the Moon</h1>
            <p data-aos="fade-up" data-aos-delay="500" className='text-lg text-gray-300'>
              Step beyond Earth and into the vast, mysterious expanse of space. Discover the hidden secrets of the Moon, relive historic lunar missions, and envision the future of humanity among the stars. The cosmos awaits—are you ready?
            </p>
            <button data-aos="fade-up" data-aos-delay="700" className='primary-button'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;