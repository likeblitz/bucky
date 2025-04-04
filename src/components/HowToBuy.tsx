import React from 'react';

const HowToBuy: React.FC = () => {
  return (
    <section id="howtobuy" className="py-20 relative overflow-hidden" style={{ 
      backgroundColor: "#4A90E2",
      backgroundImage: "radial-gradient(circle at center, #5C9EE8 0%, #4A90E2 100%)"
    }}>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title with blue background */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 relative" style={{ 
              textShadow: "2px 2px 0px rgba(0,0,0,0.1)" 
            }}>HOW TO BUY</h2>
          </div>
          
          {/* Grid layout with center image */}
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
                      Donald Pump is waiting for you on one of the DEX exchanges. Find a pair of PUMP/SOL and make an exchange.
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
                  alt="Bucky Character" 
                  className="max-w-xs mx-auto"
                />
              </div>
            </div>
            
            {/* Right column with 2 boxes */}
            <div className="flex flex-col gap-6">
              {/* Box 2 */}
              <div className="relative">
                <div className="absolute inset-0 rounded-xl border-2 border-black/20 translate-y-1 bg-black/20"></div>
                <div className="bg-white backdrop-blur-sm rounded-xl border-2 border-black p-6 h-full relative">
                  <div className="flex flex-col">
                    <div className="w-10 h-10 bg-[#4A90E2] rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">FUND YOUR WALLET</h3>
                    <p className="text-gray-700">
                      A new green market is waiting for you. Fund your wallet with the amount you need.
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
          </div>
          
          {/* Buy Button */}
          <div className="text-center mt-16">
            <button className="bg-white hover:bg-white/90 text-[#4A90E2] font-bold py-3 px-10 rounded-full text-xl transition transform hover:scale-105 shadow-lg">
              BUY $BUCKY NOW
            </button>
            <p className="mt-4 text-white text-sm">Contract Address: Coming Soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;