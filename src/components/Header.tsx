import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem =
  | { id: string; text: string; type: 'scroll' }
  | { id: string; text: string; type: 'route'; path: string };

const menuItems: MenuItem[] = [
  { id: 'home', text: 'Start', type: 'scroll' },
  { id: 'therapy', text: 'Angebote', type: 'scroll' },
  { id: 'prices', text: 'Preise', type: 'scroll' },
  { id: 'contact', text: 'Kontakt', type: 'scroll' },
  { id: 'about', text: '\u00dcber mich', type: 'route', path: '/about' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();
  const isLegalPage =
    location.pathname === '/impressum' || location.pathname === '/datenschutz';
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) return;

    const sections = ['home', 'therapy', 'prices', 'contact'];
    const handleScroll = () => {
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 0;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const handleNavigation = (item: MenuItem) => {
    setIsMenuOpen(false);

    if (item.type === 'route') {
      navigate(item.path);
      return;
    }

    if (isLegalPage || !isHomePage) {
      navigate('/');
      setTimeout(() => scrollToSection(item.id), 100);
    } else {
      scrollToSection(item.id);
    }
  };

  const isActive = (item: MenuItem) => {
    if (item.type === 'route') {
      return location.pathname === item.path;
    }
    return isHomePage && activeSection === item.id;
  };

  const linkClass = (item: MenuItem) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] ${
      isActive(item)
        ? 'text-brand-primary bg-brand-primary/10'
        : 'text-[var(--text-secondary)] hover:text-brand-primary hover:bg-brand-primary/5'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-surface-elevated/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3 md:px-6">
        <div className="min-w-0 shrink">
          {isLegalPage ? (
            <button
              type="button"
              onClick={() => navigate('/')}
              className="flex items-center text-sm font-medium text-brand-primary transition hover:text-brand-primary-hover"
            >
              <ArrowLeft size={18} className="mr-1.5 shrink-0" />
              Zur{'\u00fc'}ck
            </button>
          ) : (
            <button
              type="button"
              onClick={() =>
                handleNavigation({ id: 'home', text: 'Start', type: 'scroll' })
              }
              className="truncate text-base font-semibold text-brand-primary hover:text-brand-primary-hover md:text-lg"
            >
              Andrea Wennecke
            </button>
          )}
        </div>

        <nav className="hidden items-center gap-0.5 md:flex" aria-label="Hauptnavigation">
          {menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigation(item)}
              className={linkClass(item)}
            >
              {item.text}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-brand-primary transition hover:bg-brand-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring-focus)] md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Men\u00fc schlie\u00dfen' : 'Men\u00fc \u00f6ffnen'}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Men\u00fc schlie\u00dfen"
          />
          <nav
            className="absolute left-0 right-0 top-full z-50 border-b border-[var(--border-subtle)] bg-surface-elevated px-4 py-3 shadow-lg md:hidden"
            aria-label="Mobile Navigation"
          >
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavigation(item)}
                  className={`${linkClass(item)} w-full text-left`}
                >
                  {item.text}
                </button>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
