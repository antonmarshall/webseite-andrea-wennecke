
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-therapy-blue/95 backdrop-blur-sm text-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg md:text-xl font-bold">
            <Link to="/" className="flex items-center">Andrea Wennecke</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-therapy-lightBlue transition-colors duration-300">Home</Link>
            <a href="#about" className="hover:text-therapy-lightBlue transition-colors duration-300">Über mich</a>
            <a href="#services" className="hover:text-therapy-lightBlue transition-colors duration-300">Therapieangebote</a>
            <a href="#prices" className="hover:text-therapy-lightBlue transition-colors duration-300">Preise</a>
            <a href="#faq" className="hover:text-therapy-lightBlue transition-colors duration-300">FAQ</a>
            <a href="#contact" className="hover:text-therapy-lightBlue transition-colors duration-300">Kontakt</a>
          </nav>

          {/* Mobile Menu Button */}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-therapy-blue z-50 flex flex-col">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-white/20">
              <div className="text-xl font-bold">Andrea Wennecke</div>
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
