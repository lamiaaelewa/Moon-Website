// Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="relative z-10 h-screen text-white overflow-hidden w-full max-w-full">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 w-full max-w-full overflow-hidden">
        <h1 className="text-6xl font-bold uppercase tracking-widest drop-shadow-lg">
          Moonlit Odyssey
        </h1>
        
        <p className="mt-4 max-w-2xl text-lg drop-shadow-md">
          The Moon has been a silent witness to Earth’s history, inspiring explorers, poets, and dreamers alike. Let’s embark on a journey through its glowing mysteries. 🌕✨
        </p>
        
        <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition">
          Discover More
        </button>
      </div>
    </div>
  );
}

export default Hero;
