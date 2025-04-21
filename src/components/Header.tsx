
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'prices', 'faq', 'contact', 'location'];
      let currentSection = '';
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (section: string) => activeSection === section;

  return (
    <header className="sticky top-0 bg-therapy-blue/95 backdrop-blur-sm text-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg md:text-xl font-bold">
            <Link to="/" className="flex items-center gap-3 transition-colors duration-300 hover:text-therapy-lightBlue">
              <img 
                src="/lovable-uploads/f4b48d54-c85b-4c62-b652-2efd7743b03f.png" 
                alt="Bunte Stühle Logo" 
                className="h-8 w-auto"
              />
              <span>Andrea Wennecke</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-6">
            {['about', 'services', 'prices', 'faq', 'contact'].map((section) => (
              <a 
                key={section}
                href={`#${section}`}
                className={`transition-all duration-300 px-3 py-1 rounded-md hover:text-therapy-lightBlue
                  ${isActive(section) ? 'bg-white/10 text-therapy-lightBlue' : ''}`}
              >
                {section === 'about' ? 'Über mich' :
                 section === 'services' ? 'Therapieangebote' :
                 section === 'prices' ? 'Preise' :
                 section === 'faq' ? 'FAQ' :
                 'Kontakt'}
              </a>
            ))}
          </nav>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white hover:bg-therapy-blue/50"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-therapy-blue z-50 flex flex-col animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-white/20">
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/f4b48d54-c85b-4c62-b652-2efd7743b03f.png" 
                  alt="Bunte Stühle Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold">Andrea Wennecke</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-therapy-blue/50"
                onClick={toggleMenu}
              >
                <X size={24} />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4 px-4 pt-8 text-lg">
              <Link 
                to="/" 
                className="py-2 hover:bg-white/10 px-4 rounded-lg"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <a 
                href="#about" 
                className="py-2 hover:bg-white/10 px-4 rounded-lg"
                onClick={toggleMenu}
              >
                Über mich
              </a>
              <a 
                href="#services" 
                className="py-2 hover:bg-white/10 px-4 rounded-lg"
                onClick={toggleMenu}
              >
                Therapieangebote
              </a>
              <a 
                href="#prices" 
                className="py-2 hover:bg-white/10 px-4 rounded-lg"
                onClick={toggleMenu}
              >
                Preise
              </a>
              <a 
                href="#faq" 
                className="py-2 hover:bg-white/10 px-4 rounded-lg"
                onClick={toggleMenu}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                className="py-2 hover:bg-white/10 px-4 rounded-lg"
                onClick={toggleMenu}
              >
                Kontakt
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
