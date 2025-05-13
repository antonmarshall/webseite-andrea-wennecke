import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'about', 'faq', 'contact', 'location'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (section: string) => activeSection === section;

  const navItems = [
    { id: 'services', label: 'Therapieangebote' },
    { id: 'about', label: 'Über mich' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Kontakt' },
    { id: 'location', label: 'Anfahrt' }
  ];

  return (
    <header className="sticky top-0 bg-soft-blue/95 text-white z-50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-lg md:text-xl font-bold">
            <Link href="/" className="hover:text-white/90 transition-colors">
              <div className="text-sm font-semibold text-white">Praxis für</div>
              <div className="text-sm font-semibold text-white">Psychotherapie & Kunsttherapie</div>
              <div className="text-xs font-normal text-white/80">Andrea Wennecke</div>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`transition-colors duration-200 py-1 px-3 rounded-lg ${
                  isActive(item.id) 
                    ? 'bg-white/20 text-white' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-soft-blue z-50 animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-white/10">
              <div className="text-xl font-bold">Andrea Wennecke</div>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-white hover:bg-white/10"
                onClick={toggleMenu}
              >
                <X size={24} />
              </Button>
            </div>
            <nav className="flex flex-col space-y-2 px-4 pt-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`py-3 px-4 text-lg rounded-lg transition-colors ${
                    isActive(item.id)
                      ? 'bg-white/20 text-white'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
