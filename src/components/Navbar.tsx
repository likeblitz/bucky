import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 pt-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left side navigation items */}
          <div className="hidden md:flex space-x-12">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`text-black hover:font-bold transition uppercase text-sm ${activeSection === 'hero' ? 'font-bold border-b-2 border-black' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`text-black hover:font-bold transition uppercase text-sm ${activeSection === 'about' ? 'font-bold border-b-2 border-black' : ''}`}
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('tokenomics')}
              className={`text-black hover:font-bold transition uppercase text-sm ${activeSection === 'tokenomics' ? 'font-bold border-b-2 border-black' : ''}`}
            >Tokenomics</button>
            <button 
              onClick={() => scrollToSection('howtobuy')}
              className={`text-black hover:font-bold transition uppercase text-sm ${activeSection === 'howtobuy' ? 'font-bold border-b-2 border-black' : ''}`}
            >How to Buy</button>
          </div>
          
          {/* Right side navigation/actions */}
          <div className="hidden md:flex space-x-4">
            <button 
              onClick={() => scrollToSection('howtobuy')}
              className="bg-black text-white text-xs font-bold py-2 px-4 uppercase"
            >Buy Now</button>
            
            <div className="flex space-x-2">
              {/* Social icons */}
              <a href="#" className="bg-[#E1E1E1] p-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.3 12.25 11.24 9.52 13.11C9.1 13.4 8.72 13.54 8.38 13.53C8.01 13.52 7.3 13.33 6.77 13.16C6.12 12.95 5.62 12.84 5.66 12.47C5.68 12.28 5.93 12.08 6.4 11.89C9.37 10.59 11.35 9.76 12.33 9.4C15.16 8.34 15.73 8.16 16.11 8.16C16.19 8.16 16.38 8.18 16.5 8.28C16.6 8.36 16.63 8.48 16.64 8.56C16.63 8.63 16.65 8.72 16.64 8.8Z" />
                </svg>
              </a>
              <a href="#" className="bg-[#E1E1E1] p-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="bg-[#E1E1E1] p-1 rounded">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.222 0c1.406 0 2.54 1.137 2.607 2.475V24l-2.677-2.273-1.47-1.338-1.604-1.398.67 2.205H3.71c-1.402 0-2.54-1.065-2.54-2.476V2.48C1.17 1.142 2.31.003 3.715.003h16.5L20.222 0zm-6.118 5.683h-.03l-.202.2c2.073.6 3.076 1.537 3.076 1.537-1.336-.668-2.54-1.002-3.744-1.137-.87-.135-1.74-.064-2.475 0h-.2c-.47 0-1.47.2-2.81.735-.467.203-.735.336-.735.336s1.002-1.002 3.21-1.537l-.135-.135s-1.672-.064-3.477 1.27c0 0-1.805 3.144-1.805 7.02 0 0 1 1.74 3.743 1.806 0 0 .4-.533.805-1.002-1.54-.468-2.14-1.404-2.14-1.404s.134.066.335.2h.06c.03 0 .044.015.06.03v.006c.016.016.03.03.06.03.33.136.66.27.93.4.466.202 1.065.403 1.8.536.93.135 1.996.2 3.21 0 .6-.135 1.2-.267 1.8-.535.39-.2.87-.4 1.397-.737 0 0-.6.936-2.205 1.404.33.466.795 1 .795 1 2.744-.06 3.81-1.8 3.87-1.726 0-3.87-1.815-7.02-1.815-7.02-1.635-1.214-3.165-1.26-3.435-1.26l.056-.02zm.168 4.413c.703 0 1.27.6 1.27 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334.002-.74.573-1.338 1.27-1.338zm-4.543 0c.7 0 1.266.6 1.266 1.335 0 .74-.57 1.34-1.27 1.34-.7 0-1.27-.6-1.27-1.334 0-.74.57-1.338 1.27-1.338z" />
                </svg>
              </a>
              <button className="bg-red-600 text-white text-xs font-bold py-2 px-4 uppercase">Join Us</button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-16 left-0 right-0 shadow-md">
          <div className="flex flex-col p-4 space-y-3">
            <button 
              onClick={() => {
                scrollToSection('hero');
                setMobileMenuOpen(false);
              }}
              className={`hover:text-green-600 transition text-left py-2 ${activeSection === 'hero' ? 'text-green-600 font-bold' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={() => {
                scrollToSection('about');
                setMobileMenuOpen(false);
              }}
              className={`hover:text-green-600 transition text-left py-2 ${activeSection === 'about' ? 'text-green-600 font-bold' : ''}`}
            >
              About
            </button>
            <button 
              onClick={() => {
                scrollToSection('tokenomics');
                setMobileMenuOpen(false);
              }}
              className={`hover:text-green-600 transition text-left py-2 ${activeSection === 'tokenomics' ? 'text-green-600 font-bold' : ''}`}
            >
              Tokenomics
            </button>
            <button 
              onClick={() => {
                scrollToSection('howtobuy');
                setMobileMenuOpen(false);
              }}
              className={`hover:text-green-600 transition text-left py-2 ${activeSection === 'howtobuy' ? 'text-green-600 font-bold' : ''}`}
            >
              How to Buy
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition transform hover:scale-105 w-full text-center">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;