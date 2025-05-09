import React from 'react';
import { Link } from '@/components/ui/link';

const Footer = () => {
  return (
    <footer className="bg-soft-blue/95 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-white/80 hover:text-white transition-colors">Über mich</Link></li>
              <li><Link href="#services" className="text-white/80 hover:text-white transition-colors">Therapieangebote</Link></li>
              <li><Link href="#contact" className="text-white/80 hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-white/80">
              <p>Andrea Wennecke</p>
              <p>Beckergrube 11, 23552 Lübeck</p>
              <p>
                <Link href="mailto:info@kreativtherapie-wennecke.de" className="hover:text-white transition-colors">
                  info@kreativtherapie-wennecke.de
                </Link>
              </p>
              <p>
                <Link href="tel:+4945147047/42" className="hover:text-white transition-colors">
                  +49 451 47047/42
                </Link>
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><Link href="/impressum" className="text-white/80 hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="text-white/80 hover:text-white transition-colors">Datenschutz</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Öffnungszeiten</h3>
            <p className="text-white/80">
              Montag - Freitag: 9:00 - 18:00<br />
              Samstag - Sonntag: Geschlossen
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Andrea Wennecke. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
