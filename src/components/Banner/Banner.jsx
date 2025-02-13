import React from 'react';
import AstronautImg from "../../assets/lunerastronut.png";
import StarsBackground from '../StarsBackground/StarsBackground';

const Banner = () => {
  return (
    <div className='relative bg-gray-900 text-white pb-16'>
      <StarsBackground />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
          <div>
            <img data-aos="zoom-in" 
                 src={AstronautImg} 
                 alt="Astronaut on the Moon" 
                 className="w-full sm:w-[80%] mx-auto max-h-[360px] object-cover drop-shadow-md" />
          </div>
          <div className='space-y-5 p-6 border-l-2 border-b-2 border-l-gray-600 border-b-gray-500 rounded-lg bg-gray-800/40 backdrop-blur-md shadow-md'>
            <p data-aos="fade-up" className='text-blue-300 uppercase tracking-widest font-medium'>
              Journey Beyond
            </p>
            <h1 data-aos="fade-up" data-aos-delay="300"
                className='uppercase text-4xl font-extrabold text-gray-200 drop-shadow-sm'>
              The Lunar Exploration
            </h1>
            <p data-aos="fade-up" data-aos-delay="500" className='text-lg text-gray-400'>
              Embark on a journey beyond Earth, reliving iconic moon missions and uncovering the mysteries of space. The universe awaits—are you ready?
            </p>
            <button data-aos="fade-up" data-aos-delay="700" 
                    className='bg-gray-700 text-gray-200 px-6 py-2 font-semibold uppercase rounded-md shadow-md hover:bg-gray-600 transition duration-300'>
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
