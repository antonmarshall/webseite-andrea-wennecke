import React from 'react';
import { Link } from '@/components/ui/link';

const Footer = () => {
  return (
    <footer className="bg-therapy-warm-dark py-12">
      <div className="container mx-auto max-w-6xl px-4">
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
            <h3 className="text-lg font-semibold mb-4 text-therapy-blue">Kontakt</h3>
            <p className="text-gray-600">Andrea Wennecke</p>
            <p className="text-gray-600">Beckergrube 11</p>
            <p className="text-gray-600">23552 Lübeck</p>
            <p className="text-gray-600">Tel: +49 451 47047/42</p>
            <p className="text-gray-600">Email: info@kreativtherapie-wennecke.de</p>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-therapy-blue">Rechtliche Hinweise</h3>
            <p className="text-gray-600">© 2024 Andrea Wennecke</p>
            <p className="text-gray-600">Alle Rechte vorbehalten</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
