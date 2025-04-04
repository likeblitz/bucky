import React from 'react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
      style={{ 
        backgroundColor: "#ffb566",
        backgroundImage: "radial-gradient(circle at center, #ffc588 0%, #ffb566 100%)"
      }}
    >
      {/* Floating background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[15%] w-3 h-3 bg-white/30 rounded-full" style={{ animation: 'float 8s ease-in-out infinite' }}></div>
        <div className="absolute top-[25%] left-[45%] w-2 h-2 bg-white/20 rounded-full" style={{ animation: 'float 6s ease-in-out infinite 1s' }}></div>
        <div className="absolute top-[60%] left-[25%] w-4 h-4 bg-white/25 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 0.5s' }}></div>
        <div className="absolute top-[75%] left-[65%] w-2 h-2 bg-white/30 rounded-full" style={{ animation: 'float 9s ease-in-out infinite 2s' }}></div>
        <div className="absolute top-[40%] left-[85%] w-3 h-3 bg-white/20 rounded-full" style={{ animation: 'float 8s ease-in-out infinite 1.5s' }}></div>
        <div className="absolute top-[15%] left-[75%] w-2 h-2 bg-white/25 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 3s' }}></div>
        <div className="absolute top-[85%] left-[35%] w-3 h-3 bg-white/20 rounded-full" style={{ animation: 'float 6s ease-in-out infinite 2.5s' }}></div>
      </div>

      {/* Paw print patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Paw prints */}
        <div className="absolute top-[12%] left-[20%] w-12 h-12 opacity-10" style={{ animation: 'float 9s ease-in-out infinite 0.7s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#A36B3E">
            <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5.3-86.2 32.6-96.8S212.2 50 226.5 92.9zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
          </svg>
        </div>
        <div className="absolute top-[38%] left-[75%] w-16 h-16 opacity-10 rotate-45" style={{ animation: 'float 8s ease-in-out infinite 1.3s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#A36B3E">
            <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5.3-86.2 32.6-96.8S212.2 50 226.5 92.9zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
          </svg>
        </div>
        <div className="absolute top-[68%] left-[8%] w-14 h-14 opacity-10 -rotate-20" style={{ animation: 'float 7.5s ease-in-out infinite 2.1s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#A36B3E">
            <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5.3-86.2 32.6-96.8S212.2 50 226.5 92.9zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/>
          </svg>
        </div>

        {/* Bones */}
        <div className="absolute top-[22%] left-[60%] w-14 h-14 opacity-10 rotate-15" style={{ animation: 'float 8s ease-in-out infinite 0.9s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#A36B3E">
            <path d="M88 56H40a16 16 0 0 0-16 16v48a24 24 0 0 0 24 24h16a24 24 0 0 0 24-24V56zm-24 88a24 24 0 0 0-24 24v48a16 16 0 0 0 16 16h48a24 24 0 0 0 24-24v-16a24 24 0 0 0-24-24H64zm184 24v-16a24 24 0 0 0-24-24H40a24 24 0 0 0-24 24v16a24 24 0 0 0 24 24h184a24 24 0 0 0 24-24zm264-88h-48a24 24 0 0 0-24 24v16a24 24 0 0 0 24 24h48a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16zm-24 88H296a24 24 0 0 0-24 24v16a24 24 0 0 0 24 24h184a24 24 0 0 0 24-24v-16a24 24 0 0 0-24-24zm40 56H448a24 24 0 0 0-24 24v16a24 24 0 0 0 24 24h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16z"/>
          </svg>
        </div>
        <div className="absolute top-[72%] left-[50%] w-12 h-12 opacity-10 -rotate-30" style={{ animation: 'float 7s ease-in-out infinite 1.8s' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#A36B3E">
            <path d="M88 56H40a16 16 0 0 0-16 16v48a24 24 0 0 0 24 24h16a24 24 0 0 0 24-24V56zm-24 88a24 24 0 0 0-24 24v48a16 16 0 0 0 16 16h48a24 24 0 0 0 24-24v-16a24 24 0 0 0-24-24H64zm184 24v-16a24 24 0 0 0-24-24H40a24 24 0 0 0-24 24v16a24 24 0 0 0 24 24h184a24 24 0 0 0 24-24zm264-88h-48a24 24 0 0 0-24 24v16a24 24 0 0 0 24 24h48a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16zm-24 88H296a24 24 0 0 0-24 24v16a24 24 0 0 0 24 24h184a24 24 0 0 0 24-24v-16a24 24 0 0 0-24-24zm40 56H448a24 24 0 0 0-24 24v16a24 24 0 0 0 24 24h48a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16z"/>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative max-w-5xl mx-auto">
          
          {/* Background card with border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-black/20 translate-y-1 bg-black/20"></div>
          <div className="absolute inset-0 rounded-3xl border-2 border-black/20 bg-[#ffb566]"></div>
          
          <div className="relative p-8 md:p-12">
            {/* Title section */}
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl mb-12 p-6 text-center relative overflow-hidden border-2 border-black/20">
              <div className="absolute inset-0 border-b-4 border-black/20 translate-y-1"></div>
              <h2 className="text-5xl md:text-6xl font-extrabold relative">
                <span className="text-white">ABOUT</span>
                <span className="text-white ml-4">US</span>
                <span className="absolute -inset-1 text-white -z-10 translate-y-1">ABOUT US</span>
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              {/* Content */}
              <div className="md:w-3/5">
                <p className="text-white mb-6 leading-relaxed font-medium">
                  <span className="font-bold">BUCKY</span> is a cryptocurrency that operates on the Solana Network, aiming to be the first beaver coin in the ecosystem.
                </p>
                
                <p className="text-white mb-6 leading-relaxed font-medium">
                  As the first beaver coin on the Solana Network, BUCKY proudly stands as the guardian of the Solana ecosystem. Just as beavers construct and defend their habitats, BUCKY drives the growth of the network with its $BUCKY token.
                </p>
                
                <p className="text-white leading-relaxed font-medium">
                  Devoted to its community, BUCKY ensures that the Solana ecosystem remains robust and continues to capture the attention of the crypto world, drawing more interest to the chain and forging a bright future for $BUCKY.
                </p>
              </div>
              
              {/* Character image */}
              <div className="md:w-2/5 flex justify-center">
                <div className="relative">
                  <img 
                    src="/a.png"
                    alt="Bucky Character" 
                    className="w-64 h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;