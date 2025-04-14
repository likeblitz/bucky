import React from 'react';

// Ensure 'float' animation is defined in your CSS

const HowToBuy: React.FC = () => {
  // Updated SVG path data for a gem icon (similar to 💎 emoji)
  const gemPathData = "M378.7 32H133.3L256 182.7L378.7 32zM512 192l-107.4-141.3L289.6 192H512zM107.4 50.67L0 192h222.4L107.4 50.67zM256 480l128-128H128L256 480z";
  const numGems = 20; // Number of gems (15-20)
  const iconColor = 'rgba(255, 255, 255, 0.1)'; // text-white/10 equivalent

  // Generate the background gem icons dynamically
  const backgroundGems = Array.from({ length: numGems }).map((_, i) => {
    const sizes = [10, 12, 16, 20]; // Tailwind sizes
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 5 + 5; // 5s to 10s
    const delay = Math.random() * 5; // 0s to 5s

    return (
      <div
        key={i}
        className={`absolute w-${size} h-${size}`} // Use Tailwind size classes
        style={{
          top: `${top}%`,
          left: `${left}%`,
          animation: `float ${duration}s ease-in-out infinite ${delay}s`,
          color: iconColor, // Set color for SVG fill="currentColor"
        }}
      >
        {/* Using the new gem SVG path */}
        {/* Keeping viewBox="0 0 512 512", adjust if needed for the new path */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
          <path d={gemPathData} />
        </svg>
      </div>
    );
  });

  return (
    <section id="howtobuy" className="py-20 relative overflow-hidden" style={{
      backgroundColor: "#4A90E2",
      backgroundImage: "radial-gradient(circle at center, #5C9EE8 0%, #4A90E2 100%)"
    }}>

      {/* Background gems container */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {backgroundGems} {/* Render the generated gems */}
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 relative" style={{
              textShadow: "2px 2px 0px rgba(0,0,0,0.1)"
            }}>HOW TO BUY</h2>
          </div>

          {/* Grid layout - Removed erroneous curly braces */}
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

            {/* Left column with 2 boxes */}
            <div className="flex flex-col gap-6">
              {/* Box 1 */}
              <div className="relative">
                <div className="absolute inset-0 rounded-xl border-2 border-black/20 translate-y-1 bg-black/20"></div>
                <div className="bg-white backdrop-blur-sm rounded-xl border-2 border-black p-6 h-full relative">
                  <div className="flex flex-col">
                    <div className="w-10 h-10 bg-[#4A90E2] rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">CREATE A WALLET</h3>
                    <p className="text-gray-700">
                      Have the audacity to step into a new era. Create a wallet on Solana.
                    </p>
                  </div>
                </div>
              </div>
              {/* Box 2 - Corrected text/number from previous code */}
               <div className="relative">
                 <div className="absolute inset-0 rounded-xl border-2 border-black/20 translate-y-1 bg-black/20"></div>
                 <div className="bg-white backdrop-blur-sm rounded-xl border-2 border-black p-6 h-full relative">
                   <div className="flex flex-col">
                     <div className="w-10 h-10 bg-[#4A90E2] rounded-lg mb-4 flex items-center justify-center">
                       <span className="text-white font-bold text-xl">2</span>
                     </div>
                     <h3 className="text-xl font-bold text-black mb-2">FIND YOUR WALLET</h3> {/* Corrected title */}
                     <p className="text-gray-700">
                       A new green market is waiting for you. Fund your wallet with the amount you need.
                     </p>
                   </div>
                 </div>
               </div>
            </div>

            {/* Center column with character image */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <img
                  src="/how.png"
                  alt="Bucky Character How To Buy"
                  className="max-w-xs mx-auto"
                />
              </div>
            </div>

            {/* Right column with 2 boxes */}
            <div className="flex flex-col gap-6">
               {/* Box 3 */}
              <div className="relative">
                <div className="absolute inset-0 rounded-xl border-2 border-black/20 translate-y-1 bg-black/20"></div>
                <div className="bg-white backdrop-blur-sm rounded-xl border-2 border-black p-6 h-full relative">
                  <div className="flex flex-col">
                    <div className="w-10 h-10 bg-[#4A90E2] rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">FIND A PAIR</h3>
                    <p className="text-gray-700">
                      BUCKY is waiting for you on one of the DEX exchanges. Find a pair of PUMP/SOL and make an exchange. {/* Corrected token name */}
                    </p>
                  </div>
                </div>
              </div>
              {/* Box 4 */}
              <div className="relative">
                <div className="absolute inset-0 rounded-xl border-2 border-black/20 translate-y-1 bg-black/20"></div>
                <div className="bg-white backdrop-blur-sm rounded-xl border-2 border-black p-6 h-full relative">
                  <div className="flex flex-col">
                    <div className="w-10 h-10 bg-[#4A90E2] rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">4</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">HOLD ON TIGHT</h3>
                    <p className="text-gray-700">
                      Hold on tight, Bucky has just started this bull run. $BUCKY is the key to part of a new era of cryptocurrency!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Erroneous closing brace removed from here */}
          </div>

          {/* Buy Button */}
          <div className="text-center mt-16">
            <button className="bg-black hover:bg-gray-800 text-white text-xl font-bold py-3 px-10 border-2 border-black rounded transition">
              BUY $BUCKY NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;