import React from 'react';
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div data-aos="fade-down" className="fixed top-0 right-0 w-full z-[99] bg-black/10 backdrop-blur-smpy-4 sm:py-4">
      <div className="container max-w-full mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center overflow-hidden">
          
          <div className="flex items-center gap-4 text-white font-bold">
            <img src={Logo} alt="Logo" className='w-10' />
            <span>MOON</span>
          </div>

          <div className="text-white hidden md:block">
            <ul className='flex items-center gap-11 text-xl py-4 sm:py-0'>
              <li><a href="#home" className="hover:text-sky-300 transition-all">Home</a></li>
              <li><a href="#about" className="hover:text-sky-300 transition-all">About</a></li>
              <li><a href="#exploration" className="hover:text-sky-300 transition-all">Exploration</a></li>
              <li><a href="#discoveries" className="hover:text-sky-300 transition-all">Discoveries</a></li>
            </ul>
          </div>

          <div>
            <button className='text-white border-2 border-white px-3 py-1 rounded-md hover:bg-white hover:text-black transition-all'>
              Login
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
