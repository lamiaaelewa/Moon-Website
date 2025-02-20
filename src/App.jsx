import React from 'react';
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
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

  return (
    <div className="relative">
      {/* Video as background */}
      <div className="relative w-full min-h-screen overflow-hidden" id="home">
        <div className="absolute inset-0 z-[-2] pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-70 animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`, 
                left: `${Math.random() * 100}%`, 
                animationDelay: `${Math.random() * 3}s`,
              }} >
            </div>
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

      {/* Add StarsBackground here, to overlay across all components */}
      <StarsBackground />

      {/* Other sections with IDs */}
      <div id="about"><Services /></div>
      <div id="exploration"><Banner /> <Banner2 /></div>
      <div id="discoveries"><Footer /></div>
    </div>
  );
}

export default App;
