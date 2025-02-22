/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: true, // Enable container class
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
      // Add custom animations and keyframes
      animation: {
        fly: "fly 2s ease-in-out forwards", // Rocket fly animation
        fadeInOut: "fadeInOut 3s ease-in-out forwards", // Welcome message animation
        twinkle: "twinkle 1.5s infinite", // Twinkling stars animation
      },
      keyframes: {
        fly: {
          "0%": { transform: "translateY(0)" }, // Start position
          "100%": { transform: "translateY(-1000px)" }, // End position (rocket flies up)
        },
        fadeInOut: {
          "0%": { opacity: 0 }, // Start invisible
          "20%": { opacity: 1 }, // Fully visible
          "80%": { opacity: 1 }, // Stay visible
          "100%": { opacity: 0 }, // Fade out
        },
        twinkle: {
          "0%, 100%": { opacity: 0.7 }, // Twinkle effect
          "50%": { opacity: 0.3 },
        },
      },
    },
  },
  plugins: [],
};

