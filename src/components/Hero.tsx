import React from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ 
        backgroundColor: "#4A90E2",
        backgroundImage: "radial-gradient(circle at center, #5C9EE8 0%, #4A90E2 100%)"
      }}
    >
      {/* Background decoration - radial beams */}
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
        {/* Central character image */}
        <div className="mb-8 relative">
          <img 
            src="/heroo.png" 
            alt="Bucky Character" 
            className="w-32 md:w-48 mx-auto animate-spin"
            style={{ animation: 'spin 10s linear infinite' }}
          />
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-black text-center mb-10" style={{
          textShadow: "2px 2px 0px rgba(0,0,0,0.2)",
          fontFamily: '"Comic Sans MS", cursive, sans-serif'
        }}>
          WELCOME TO $BUCKY
        </h1>
        
        {/* Buy button */}
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