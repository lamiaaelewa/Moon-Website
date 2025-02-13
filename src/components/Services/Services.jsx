import React from 'react';
import { FaMoon, FaGlobe, FaMountain } from "react-icons/fa";
import StarsBackground from '../StarsBackground/StarsBackground';

const ServiceData = [
    {
        title: "Phases",
        content: "Moon changes its shape",
        description: "The Moon goes through different phases due to its orbit around Earth.",
        icon: <FaMoon className="text-7xl text-yellow-300"/>,
        aosDelay: "500",
    },
    {
        title: "Gravity",
        content: "Moon affects Earth's tides",
        description: "The Moon's gravitational pull causes ocean tides on Earth.",
        icon: <FaGlobe className="text-7xl text-blue-400"/>,
        aosDelay: "500",
    },
    {
        title: "Surface",
        content: "Mountains and craters",
        description: "The Moon's surface is covered with mountains and impact craters.",
        icon: <FaMountain className="text-7xl text-gray-400"/>,
        aosDelay: "500",
    },
];

const Services = () => {
  return (
    <div className="relative bg-black text-white py-20">
      <StarsBackground />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-12 uppercase text-sky-300 tracking-widest transition-all duration-300">
          Explore the Moon
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-center'>
          {ServiceData.map((data, index) => (
            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={index} 
                 className='relative min-h-[200px] flex flex-col gap-3 justify-center items-center 
                            bg-sky-900/60 rounded-xl backdrop-blur-sm py-8 px-3 w-full lg:w-[300px] mx-auto 
                            shadow-lg transition-all duration-300 hover:scale-105'>
              {data.icon}
              <h1 className='text-xl font-semibold'>{data.title}</h1> 
              <p className='text-sm font-light'>{data.content}</p>
              <p className='text-xs'>{data.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
