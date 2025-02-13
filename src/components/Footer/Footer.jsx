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
    <div className="bg-[#1a1f2b] text-gray-300 relative z-50 py-10">
      <StarsBackground />
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Subscription Section */}
          <div className="space-y-4">
            <h1 className="text-xl font-semibold text-gray-200">Stay Connected</h1>
            <p className="text-gray-400">
              Get the latest updates and news straight to your inbox.
            </p>
            {!isSubmitted ? (
              <div className="flex items-center">
                <input
                  className="py-2 px-3 flex-1 bg-gray-800 border border-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-l-lg"
                  type="email"
                  placeholder="Enter your email"
                />
                <button
                  className="bg-[#2c3445] hover:bg-[#3a4254] px-4 py-2 text-white font-medium rounded-r-lg transition duration-300"
                  onClick={handleSubmit}
                >
                  Subscribe
                </button>
              </div>
            ) : (
              <p className="text-green-400">Thank you for subscribing!</p>
            )}
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h1 className="text-lg font-semibold text-gray-200">Quick Links</h1>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-gray-100 cursor-pointer">Home</li>
                <li className="hover:text-gray-100 cursor-pointer">About</li>
                <li className="hover:text-gray-100 cursor-pointer">Services</li>
                <li className="hover:text-gray-100 cursor-pointer">Contact</li>
              </ul>
            </div>

            <div>
              <h1 className="text-lg font-semibold text-gray-200">Resources</h1>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-gray-100 cursor-pointer">Blog</li>
                <li className="hover:text-gray-100 cursor-pointer">FAQs</li>
                <li className="hover:text-gray-100 cursor-pointer">Support</li>
                <li className="hover:text-gray-100 cursor-pointer">Careers</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h1 className="text-lg font-semibold text-gray-200">Contact Us</h1>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-3">
                <HiLocationMarker className="text-gray-400" />
                <p>123 Space Street, Galaxy City</p>
              </div>
              <div className="flex items-center gap-3">
                <MdMessage className="text-gray-400" />
                <p>contact@spacehub.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MdCall className="text-gray-400" />
                <p>+1 234 567 890</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2025 SpaceHub. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-100 transition">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-100 transition">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-100 transition">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
