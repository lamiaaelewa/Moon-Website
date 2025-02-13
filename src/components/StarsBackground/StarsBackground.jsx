import React, { useEffect, useState } from "react";

const StarsBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = Array.from({ length: 30 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-70 animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default StarsBackground;
