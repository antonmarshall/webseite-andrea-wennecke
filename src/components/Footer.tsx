
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-therapy-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Andrea Wennecke</h3>
            <p className="text-white/80 mb-2">Kreativtherapie in Lübeck</p>
            <p className="text-white/80">
              Professionelle Hilfe durch Therapieangebote für Kinder, Jugendliche und Erwachsene.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">Über mich</a></li>
              <li><a href="#services" className="text-white/80 hover:text-white transition-colors">Therapieangebote</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Kontakt</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <address className="text-white/80 not-italic">
              <p className="mb-2">Beckergrube 11, 23552 Lübeck</p>
              <p className="mb-2">
                <a href="mailto:info@kreativtherapie-wennecke.de" className="hover:text-white transition-colors">
                  info@kreativtherapie-wennecke.de
                </a>
              </p>
              <p>
                <a href="tel:+4945147047/42" className="hover:text-white transition-colors">
                  +49 451 47047/42
                </a>
              </p>
            </address>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><Link to="/impressum" className="text-white/80 hover:text-white transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-white/80 hover:text-white transition-colors">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Andrea Wennecke. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
