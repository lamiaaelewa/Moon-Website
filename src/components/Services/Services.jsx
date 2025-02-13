import React from 'react';
import { FaMoon, FaGlobe, FaMountain } from "react-icons/fa";
import StarsBackground from '../StarsBackground/StarsBackground';

const ServiceData = [
    {
        title: "Lunar Phases",
        content: "The Moon's transformation",
        description: "Observe the fascinating cycle of lunar phases shaping the night sky.",
        icon: <FaMoon className="text-6xl text-gray-300"/>,
        aosDelay: "300",
    },
    {
        title: "Gravitational Pull",
        content: "Moon's effect on tides",
        description: "Feel the invisible force as the Moon controls Earth's ocean tides.",
        icon: <FaGlobe className="text-6xl text-blue-300"/>,
        aosDelay: "400",
    },
    {
        title: "Lunar Terrain",
        content: "Craters & highlands",
        description: "Explore the Moon’s rugged surface, carved by time and impact.",
        icon: <FaMountain className="text-6xl text-gray-400"/>,
        aosDelay: "500",
    },
];

const Services = () => {
  return (
    <div className="relative bg-gray-900 text-white py-20">
      <StarsBackground />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-12 uppercase text-gray-300 tracking-widest">
          Discover the Moon
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 text-center'>
          {ServiceData.map((data, index) => (
            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={index} 
                 className='relative min-h-[220px] flex flex-col gap-4 justify-center items-center 
                            bg-gray-800/40 rounded-xl backdrop-blur-md py-10 px-6 w-full lg:w-[320px] mx-auto 
                            shadow-md hover:shadow-gray-500 transition-all duration-300 hover:scale-105'>
              {data.icon}
              <h1 className='text-xl font-semibold text-gray-200'>{data.title}</h1> 
              <p className='text-md font-light text-gray-400'>{data.content}</p>
              <p className='text-sm text-gray-500'>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
