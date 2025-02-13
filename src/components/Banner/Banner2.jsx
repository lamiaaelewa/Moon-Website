import React from 'react';
import bgVideo2 from "../../assets/sunandmoon.mp4";
import StarsBackground from '../StarsBackground/StarsBackground';

const Banner2 = () => {
  return (
    <div className='relative bg-gray-900 text-white pb-16'>
      <StarsBackground />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          <div className='space-y-5 p-6 border-l-2 border-b-2 border-gray-700 bg-gray-900/40 rounded-lg shadow-md backdrop-blur-lg'>
            <p data-aos="fade-up" className='text-blue-400 uppercase tracking-widest font-medium'>
              Celestial Harmony
            </p>
            <h1 data-aos="fade-up" data-aos-delay="300"
                className='uppercase text-4xl font-extrabold text-gray-200 drop-shadow-sm'>
              The Sun & Moon Connection
            </h1>
            <p data-aos="fade-up" data-aos-delay="500" className='text-lg text-gray-400'>
              Discover the cosmic balance between the Moon and the Sun. From breathtaking eclipses to the rhythm of tides, explore the universe's grand design.
            </p>
            <button data-aos="fade-up" data-aos-delay="700" 
                    className='bg-gray-700 text-gray-200 px-6 py-2 font-semibold uppercase rounded-md shadow-md hover:bg-gray-600 transition duration-300'>
              Learn More
            </button>
          </div>
          <div>
            <video data-aos="zoom-in" autoPlay loop muted className="rounded-lg shadow-lg">
              <source src={bgVideo2} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
