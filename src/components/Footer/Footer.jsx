import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";
import StarsBackground from '../StarsBackground/StarsBackground';

const Footer = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    
    <div className="bg-gray-800 text-white px-5 relative z-50">
      <StarsBackground />
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5">
          {/* First Column */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
              Be Ready To Grow
            </h1>
            <p className="text-gray-400">
              Get exclusive{" "}
              <span className="text-white font-bold">best update</span> straight to your inbox.
            </p>
            <br />

            {/* Email Input & Button */}
            {!isSubmitted ? (
              <div className="flex items-center h-10">
                <input
                  className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2"
                  type="text"
                  placeholder="Email"
                />
                <button
                  className="bg-orange-500 hover:bg-orange-500/75 h-full inline-block py-2 px-6 text-white"
                  onClick={handleSubmit}
                >
                  Ok
                </button>
              </div>
            ) : (
              <p className="text-green-400 mt-3">Thank you for subscribing!</p>
            )}
          </div>

          {/* Second Column */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Login</li>
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Login</li>
              </ul>
            </div>

            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Contact Us
              </h1>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <HiLocationMarker />
                  <p>Fake Street, Nowhere City</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <MdMessage />
                  <p>contact@notreal.com</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <MdCall />
                  <p>+00 1234 567 890</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="hidden sm:block">
          <div className="flex flex-wrap justify-between items-center text-center py-6 border-t-2 border-gray-300/40">
            <span className="text-sm text-gray-400">@copyright 2025</span>
            <div className="flex items-center justify-center gap-4 mb-4">
              <a href="#">
                <FaInstagram className="text-4xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-4xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-4xl" />
              </a>
            </div>

            <span className="text-sm text-gray-400">
              <ul className="flex gap-3">
                <li className="hover:text-white">Privacy Policy</li>
                <li className="hover:text-white">Terms & Conditions</li>
              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
