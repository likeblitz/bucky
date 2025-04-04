import React from 'react';

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-20 relative overflow-hidden" style={{ 
      backgroundColor: "#4A90E2",
      backgroundImage: "radial-gradient(circle at center, #5C9EE8 0%, #4A90E2 100%)"
    }}>
      
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Background radial pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#7CB5F5_0%,_transparent_70%)] opacity-20"></div>
          </div>
          
          <h2 className="text-6xl font-extrabold text-white mb-12 tracking-wider leading-none text-center">TOKENOMICS</h2>
          
          <div className="flex flex-col md:flex-row items-start relative z-10 gap-12">
            <div className="w-full">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Box 1 */}
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-md text-center border-2 border-black">
                  <h3 className="text-xl font-bold text-black mb-2">TICKER</h3>
                  <p className="text-4xl font-extrabold text-[#4A90E2]">$BUCKY</p>
                </div>
                
                {/* Box 2 */}
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-md text-center border-2 border-black">
                  <h3 className="text-xl font-bold text-black mb-2">TOTAL SUPPLY</h3>
                  <p className="text-4xl font-extrabold text-[#4A90E2]">1B</p>
                </div>
                
                {/* Box 3 */}
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-md text-center border-2 border-black">
                  <h3 className="text-xl font-bold text-black mb-2">LIQUIDITY BURN</h3>
                  <p className="text-4xl font-extrabold text-[#4A90E2]">100%</p>
                </div>
                
                {/* Box 4 */}
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-md text-center border-2 border-black">
                  <h3 className="text-xl font-bold text-black mb-2">TOTAL TAX</h3>
                  <p className="text-4xl font-extrabold text-[#4A90E2]">0 / 0</p>
                </div>
              </div>
            </div>
            
            <div className="md:w-5/12 mt-12 md:mt-0 flex justify-center">
              <div className="relative">
                <div className="absolute top-0 right-0 bg-[#4A90E2] text-white rounded-full py-2 px-4 transform rotate-12 font-bold text-sm">
                  BUCKWILD!
                </div>
                <img 
                  src="/t.png" 
                  alt="Bucky Character" 
                  className="max-w-full h-auto transform -scale-x-100"
                />
                <div className="absolute -left-4 top-1/4 w-8 h-8 bg-[#0A1E5B] rounded-full"></div>
                <div className="absolute -right-2 bottom-1/4 w-6 h-6 bg-[#0A1E5B] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;