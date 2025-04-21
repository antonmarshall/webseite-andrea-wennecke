
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-therapy-orange/20 to-transparent pt-16 pb-20 md:pt-20 md:pb-28 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-therapy-blue animate-fade-in">
            Andrea Wennecke
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Kreativtherapie in Lübeck
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Kunst- und Gestaltungstherapie, Psychotherapie, Ausdruckstherapie: Traumaverarbeitung für Erwachsene und Jugendliche in einem geschützten Raum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              className="bg-therapy-blue hover:bg-therapy-blue/90 text-white font-semibold px-8 py-6 text-lg"
            >
              Termin vereinbaren
            </Button>
            <Button
              variant="outline"
              className="border-therapy-blue text-therapy-blue hover:bg-therapy-blue/10 font-semibold px-8 py-6 text-lg"
            >
              Therapieangebote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
