import React from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-20" // Added padding-y
      style={{
        backgroundColor: "#4A90E2",
        backgroundImage: "radial-gradient(circle at center, #5C9EE8 0%, #4A90E2 100%)"
      }}
    >
      {/* Background decoration (unchanged) */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1553949345-eb786bb3f7ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=60')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08
        }}></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">

        {/* Character images container - Added min-height */}
        <div className="mb-12 relative flex items-center justify-center w-full min-h-[12rem] md:min-h-[15rem]">

          {/* Left image wrapper - Positioned absolutely */}
          <div className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-24 md:w-32 z-0">
             {/* Inner relative container for ripples */}
            <div className="relative w-full h-full">
              <img
                src="/heroo.png"
                alt="Bucky Character Left"
                className="relative z-10 w-full h-full transform -scale-x-100 animate-spin" // Image above ripples
                style={{ animation: 'spin 10s linear infinite' }}
              />
              {/* Ripple Waves */}
              <div className="ripple-wave" style={{ animationDelay: '0.2s' }}></div>
              <div className="ripple-wave" style={{ animationDelay: '0.7s' }}></div>
              <div className="ripple-wave" style={{ animationDelay: '1.2s' }}></div>
            </div>
          </div>

          {/* Center image wrapper - Higher z-index */}
           <div className="relative w-32 md:w-48 z-10">
            <img
              src="/heroo.png"
              alt="Bucky Character"
              className="relative z-10 w-full h-full animate-spin" // Image above ripples
              style={{ animation: 'spin 10s linear infinite' }}
            />
            {/* Ripple Waves */}
            <div className="ripple-wave" style={{ animationDelay: '0s' }}></div>
            <div className="ripple-wave" style={{ animationDelay: '0.5s' }}></div>
            <div className="ripple-wave" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Right image wrapper - Positioned absolutely */}
           <div className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-24 md:w-32 z-0">
             {/* Inner relative container for ripples */}
             <div className="relative w-full h-full">
              <img
                src="/heroo.png"
                alt="Bucky Character Right"
                className="relative z-10 w-full h-full animate-spin" // Image above ripples
                style={{ animation: 'spin 10s linear infinite' }}
              />
              {/* Ripple Waves */}
              <div className="ripple-wave" style={{ animationDelay: '0.4s' }}></div>
              <div className="ripple-wave" style={{ animationDelay: '0.9s' }}></div>
              <div className="ripple-wave" style={{ animationDelay: '1.4s' }}></div>
            </div>
          </div>
        </div>

        {/* Main heading (unchanged) */}
        <h1 className="text-5xl md:text-7xl font-black text-center mb-10" style={{
          textShadow: "2px 2px 0px rgba(0,0,0,0.2)",
          fontFamily: '"Comic Sans MS", cursive, sans-serif'
        }}>
          WELCOME TO $BUCKY
        </h1>

        {/* Buy button (unchanged) */}
        <button
          onClick={() => scrollToSection('howtobuy')}
          className="bg-black hover:bg-gray-800 text-white text-xl font-bold py-3 px-10 border-2 border-black rounded transition"
        >
          BUY NOW
        </button>
      </div>
    </section>
  );
};

export default Hero;