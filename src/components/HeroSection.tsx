import React from 'react';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section className="relative bg-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-therapy-blue mb-6">
            Kunsttherapeutische Praxis
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Herzlich willkommen in meiner kunsttherapeutischen Praxis in Hannover. 
            Hier finden Sie einen geschützten Raum für Ihre persönliche Entwicklung und Heilung.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="bg-white text-therapy-blue px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 text-center border border-therapy-blue"
            >
              Therapieangebote
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-therapy-blue text-white px-8 py-3 rounded-full hover:bg-therapy-blue-dark transition-colors duration-300 text-center"
            >
              Termin vereinbaren
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <img
          src="/webseite-andrea-wennecke/images/hero-image.jpg"
          alt="Andrea Wennecke - Kreativtherapie"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection; 