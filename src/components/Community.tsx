import React from 'react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-24 relative overflow-hidden" style={{ 
      backgroundColor: "#ffb566",
      backgroundImage: "radial-gradient(circle at center, #ffc588 0%, #ffb566 100%)"
    }}>
      {/* Floating background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[12%] left-[10%] w-2 h-2 bg-white/20 rounded-full" style={{ animation: 'float 8s ease-in-out infinite' }}></div>
        <div className="absolute top-[30%] left-[25%] w-3 h-3 bg-white/25 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 1s' }}></div>
        <div className="absolute top-[60%] left-[15%] w-4 h-4 bg-white/15 rounded-full" style={{ animation: 'float 9s ease-in-out infinite 0.5s' }}></div>
        <div className="absolute top-[80%] left-[45%] w-2 h-2 bg-white/20 rounded-full" style={{ animation: 'float 6s ease-in-out infinite 2s' }}></div>
        <div className="absolute top-[40%] left-[75%] w-5 h-5 bg-white/10 rounded-full" style={{ animation: 'float 8s ease-in-out infinite 1.5s' }}></div>
        <div className="absolute top-[20%] left-[85%] w-3 h-3 bg-white/20 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 3s' }}></div>
        <div className="absolute top-[70%] left-[80%] w-2 h-2 bg-white/25 rounded-full" style={{ animation: 'float 9s ease-in-out infinite 2.5s' }}></div>
        <div className="absolute top-[45%] left-[55%] w-4 h-4 bg-white/15 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 1.2s' }}></div>
        <div className="absolute top-[35%] left-[5%] w-3 h-3 bg-white/20 rounded-full" style={{ animation: 'float 8s ease-in-out infinite 0.8s' }}></div>
        <div className="absolute top-[75%] left-[30%] w-5 h-5 bg-white/10 rounded-full" style={{ animation: 'float 9s ease-in-out infinite 1.7s' }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side with character image */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="flex items-center justify-center">
                <img 
                  src="/c.png" 
                  alt="Bucky Character" 
                  className="w-full max-w-md mx-auto"
                />
            </div>
          </div>
          
          {/* Right side with social links */}
          <div className="md:w-1/2 text-white md:pl-12">
            <h2 className="text-6xl font-extrabold mb-6">SOCIAL</h2>
            <p className="text-3xl mb-12 text-white/90">join our social community</p>
            
            <div className="flex gap-4 mb-12">
              {/* X/Twitter */}
              <a href="#" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm transition duration-300 w-16 h-16 rounded-xl flex items-center justify-center border-2 border-black/20">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
                </svg>
              </a>
              
              {/* Telegram */}
              <a href="#" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm transition duration-300 w-16 h-16 rounded-xl flex items-center justify-center border-2 border-black/20">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.3 12.25 11.24 9.52 13.11C9.1 13.4 8.72 13.54 8.38 13.53C8.01 13.52 7.3 13.33 6.77 13.16C6.12 12.95 5.62 12.84 5.66 12.47C5.68 12.28 5.93 12.08 6.4 11.89C9.37 10.59 11.35 9.76 12.33 9.4C15.16 8.34 15.73 8.16 16.11 8.16C16.19 8.16 16.38 8.18 16.5 8.28C16.6 8.36 16.63 8.48 16.64 8.56C16.63 8.63 16.65 8.72 16.64 8.8Z" fill="white"/>
                </svg>
              </a>
              
              {/* Discord */}
              <a href="#" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm transition duration-300 w-16 h-16 rounded-xl flex items-center justify-center border-2 border-black/20">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.73 4.87C18.33 4.22 16.84 3.74 15.28 3.5C15.11 3.79 14.94 4.16 14.81 4.45C13.16 4.22 11.56 4.22 10 4.45C9.88 4.16 9.66 3.79 9.49 3.5C7.94 3.74 6.44 4.22 5.04 4.87C2.46 8.65 1.72 12.32 2.09 15.94C3.84 17.23 5.53 18 7.2 18.53C7.55 18.06 7.85 17.56 8.11 17.03C7.45 16.77 6.87 16.46 6.29 16.07C6.43 15.97 6.56 15.87 6.7 15.77C10.27 17.47 14.22 17.47 17.75 15.77C17.88 15.87 18.01 15.97 18.15 16.07C17.58 16.46 16.99 16.77 16.33 17.03C16.59 17.56 16.89 18.06 17.24 18.53C18.9 18 20.62 17.23 22.37 15.94C22.8 11.69 21.67 8.06 19.73 4.87ZM8.75 13.77C7.75 13.77 6.92 12.86 6.92 11.74C6.92 10.61 7.73 9.71 8.75 9.71C9.76 9.71 10.59 10.61 10.57 11.74C10.57 12.86 9.76 13.77 8.75 13.77ZM15.25 13.77C14.24 13.77 13.42 12.86 13.42 11.74C13.42 10.61 14.23 9.71 15.25 9.71C16.27 9.71 17.08 10.61 17.07 11.74C17.07 12.86 16.27 13.77 15.25 13.77Z" fill="white"/>
                </svg>
              </a>
            </div>
            
            <button className="bg-white hover:bg-white/90 transition duration-300 font-bold py-4 px-12 rounded-full text-xl mb-12 text-[#ffb566]">
              Buy Now
            </button>
            
            <h3 className="text-4xl font-extrabold text-white">$BUCKY</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;