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
          {/* Left side navigation items (Desktop) */}
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
            >
              Tokenomics
            </button>
            <button
              onClick={() => scrollToSection('howtobuy')}
              className={`text-black hover:font-bold transition uppercase text-sm ${activeSection === 'howtobuy' ? 'font-bold border-b-2 border-black' : ''}`}
            >
              How to Buy
            </button>
          </div>

          {/* Right side navigation/actions (Desktop) */}
          {/* Updated: Removed social icons, linked Join Us button */}
          <div className="hidden md:flex items-center space-x-4">
             {/* Buy Now Button - Keeping original scroll target unless specified otherwise */}
            <button
               onClick={() => scrollToSection('howtobuy')}
               className="bg-black hover:bg-gray-800 text-white text-sm font-bold py-2 px-6 border-2 border-black rounded transition uppercase" // Adjusted style slightly
            >
               Buy Now
            </button>

            {/* Join Us Button - Now scrolls to 'community' */}
            <button
              onClick={() => scrollToSection('community')} // Added onClick to scroll
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 px-6 rounded transition uppercase" // Adjusted style slightly
            >
              Join Us
            </button>
            {/* The div containing social icons and the original Join Us button has been removed */}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu" // Added accessibility label
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
      {/* No changes needed here based on the request */}
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
             {/* Mobile Buy Now Button */}
             <button
                 onClick={() => {
                     scrollToSection('howtobuy'); // Assuming same target as desktop
                     setMobileMenuOpen(false);
                 }}
                 className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 border-2 border-black rounded transition w-full text-center uppercase" // Adjusted style slightly
             >
                 Buy Now
             </button>
             {/* Mobile Join Us Button - linked to community */}
              <button
                 onClick={() => {
                     scrollToSection('community'); // Scrolls to community
                     setMobileMenuOpen(false);
                 }}
                 className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded transition w-full text-center uppercase" // Adjusted style slightly
             >
                 Join Us
             </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;