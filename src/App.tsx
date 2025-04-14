import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import HowToBuy from './components/HowToBuy';
import Community from './components/Community';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'tokenomics', 'howtobuy', 'community'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen text-gray-800 overflow-x-hidden">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <div className="relative">
        <Hero scrollToSection={scrollToSection} />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/20"></div>
      </div>
      <div className="relative">
        <About />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/20"></div>
      </div>
      <div className="relative">
        <Tokenomics />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/20"></div>
      </div>
      <div className="relative">
        <HowToBuy />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-black/20"></div>
      </div>
      <div className="relative">
        <Community />
      </div>
    </div>
  );
}

export default App;