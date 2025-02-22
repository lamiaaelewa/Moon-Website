import React, { useState } from 'react';
import bgVideo from "./assets/homemoon4.mp4";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner/Banner2';
import Footer from './components/Footer/Footer';
import StarsBackground from './components/StarsBackground/StarsBackground.jsx';
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [showRocket, setShowRocket] = useState(true); // State for rocket visibility
  const [showWelcome, setShowWelcome] = useState(false); // State for welcome message visibility
  const [showWebsite, setShowWebsite] = useState(false); // State for website visibility
  const [isRocketFlying, setIsRocketFlying] = useState(false); // State to control rocket animation

  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  }, []);

  // Function to handle rocket click
  const handleRocketClick = () => {
    setIsRocketFlying(true); // Start rocket animation

    // Hide the rocket after the animation ends
    setTimeout(() => {
      setShowRocket(false);
      setShowWelcome(true); // Show the welcome message
    }, 2000); // Wait for the rocket to fly away (2 seconds)

    // Hide the welcome message and show the website after 3 seconds
    setTimeout(() => {
      setShowWelcome(false);
      setShowWebsite(true); // Show the website
    }, 5000); // 2s (rocket animation) + 3s (welcome message)
  };

  return (
    <div className="relative overflow-x-hidden">
      {/* Background for the rocket and welcome message */}
      {!showWebsite && (
        <div className="fixed inset-0 bg-black z-40"></div> // Black background
      )}

      {/* Rocket Animation */}
      {showRocket && (
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-50"
          onClick={handleRocketClick} // Trigger on click
        >
          <div className={`text-8xl ${isRocketFlying ? "animate-fly" : ""}`}>🚀</div>
        </div>
      )}

      {/* Welcome Message */}
      {showWelcome && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white text-shadow-lg animate-fadeInOut z-50">
          <h1> World of Discovery!</h1>
        </div>
      )}

      {/* Website Content */}
      <div
        className={`transition-opacity duration-1000 ${showWebsite ? "opacity-100" : "opacity-0"}`}
      >
        {showWebsite && (
          <>
            {/* Video Background */}
            <div className="relative w-full min-h-screen overflow-hidden" id="home">
              {/* Twinkling Stars Effect */}
              <div className="absolute inset-0 z-[-2] pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-70 animate-twinkle"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  ></div>
                ))}
              </div>
              <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover z-[-3] max-w-full"
              >
                <source src={bgVideo} type="video/mp4" />
              </video>

              {/* Content above the video */}
              <div className="relative z-10">
                <Navbar />
                <Hero />
              </div>
            </div>

            {/* Stars Background Component */}
            <StarsBackground />

            {/* Other sections with IDs */}
            <div id="about"><Services /></div>
            <div id="exploration"><Banner /> <Banner2 /></div>
            <div id="discoveries"><Footer /></div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;