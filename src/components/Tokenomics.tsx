import React from 'react';

const Tokenomics: React.FC = () => {
  // Define the full, correct SVG path data once
  const svgPathData = "M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V336zm32 0V278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z";

  const numIcons = 10; // Example number

  // Generate the background icons dynamically
  const backgroundIcons = Array.from({ length: numIcons }).map((_, i) => {
      const sizes = [8, 10, 12, 16]; // Allowed Tailwind sizes (w-8 to w-16)
      const size = sizes[Math.floor(Math.random() * sizes.length)]; // Randomly select a size
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = Math.random() * 6 + 6; // 6s to 12s
      const delay = Math.random() * 6; // 0s to 6s

      // --- Opacity based on size ---
      let opacity;
      switch (size) {
          case 8:
              opacity = 0.04; // Smallest size = lowest opacity (4%)
              break;
          case 10:
              opacity = 0.06; // 6%
              break;
          case 12:
              opacity = 0.08; // 8%
              break;
          case 16:
              opacity = 0.10; // Largest size = highest opacity (10%)
              break;
          default:
              opacity = 0.07; // Fallback
      }
      // --- End of opacity logic ---

      return (
          <div
              key={`icon-${i}`}
              className={`absolute w-${size} h-${size} text-white`} // Icon container with size class
              style={{
                  top: `${top}%`,
                  left: `${left}%`,
                  animation: `float ${duration}s ease-in-out infinite ${delay}s`,
                  opacity: opacity, // Use the calculated opacity based on size
              }}
          >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                  <path d={svgPathData} />
              </svg>
          </div>
      );
  });


  return (
    <section id="tokenomics" className="py-20 relative overflow-hidden" style={{
      backgroundColor: "#4A90E2",
      backgroundImage: "radial-gradient(circle at center, #5C9EE8 0%, #4A90E2 100%)"
    }}>
      {/* Floating background icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
         {backgroundIcons} {/* Render the generated icons */}
      </div>

      {/* Main content area (code unchanged from previous version) */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="relative max-w-6xl mx-auto">
          {/* Background radial pattern */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#7CB5F5_0%,_transparent_70%)] opacity-20"></div>
          </div>

          {/* Headline: Responsive Text Size */}
          <h2 className="text-4xl md:text-8xl font-extrabold text-white mb-12 md:mb-16 tracking-wider leading-tight md:leading-none text-center relative z-10">
             TOKENOMICS
          </h2>

          {/* Content grid */}
          <div className="flex flex-col md:flex-row items-center relative z-10 gap-12 md:gap-6">
            {/* Left side: Token details grid */}
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/90 backdrop-blur-sm p-4 md:p-8 rounded-xl text-center border-2 border-black">
                  <h3 className="text-lg md:text-2xl font-bold text-black mb-2 md:mb-4">TICKER</h3>
                  <p className="text-3xl md:text-5xl font-extrabold text-[#4A90E2]">$BUCKY</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-4 md:p-8 rounded-xl text-center border-2 border-black">
                  <h3 className="text-lg md:text-2xl font-bold text-black mb-2 md:mb-4">TOTAL SUPPLY</h3>
                  <p className="text-3xl md:text-5xl font-extrabold text-[#4A90E2]">1B</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-4 md:p-8 rounded-xl text-center border-2 border-black">
                  <h3 className="text-lg md:text-2xl font-bold text-black mb-2 md:mb-4">LIQUIDITY BURN</h3>
                  <p className="text-3xl md:text-5xl font-extrabold text-[#4A90E2]">100%</p>
                </div>
                <div className="bg-white/90 backdrop-blur-sm p-4 md:p-8 rounded-xl text-center border-2 border-black">
                  <h3 className="text-lg md:text-2xl font-bold text-black mb-2 md:mb-4">TOTAL TAX</h3>
                  <p className="text-3xl md:text-5xl font-extrabold text-[#4A90E2]">0 / 0</p>
                </div>
              </div>
            </div>

            {/* Right side: Image and Tag */}
            <div className="w-full md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <div className="relative">
                <img
                  src="/t.png"
                  alt="Tokenomics Bucky"
                  className="max-w-[200px] md:max-w-xs w-full rounded-lg shadow-lg"
                />
                <div className="absolute -top-2 -right-2 bg-[#4A90E2] text-white rounded-full py-1 px-3 md:py-2 md:px-4 transform rotate-12 font-bold text-xs md:text-sm shadow-md">
                  BUCKWILD!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;