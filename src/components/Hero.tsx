
import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendlyDialog } from '@/components/CalendlyDialog';

const TherapyTypes = () => {
  const therapyTypes = [
    "Kunst- und Gestaltungstherapie",
    "Psychotherapie", 
    "Ausdruckstherapie"
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
      {therapyTypes.map((type, index) => (
        <div 
          key={index} 
          className="bg-therapy-orange/20 px-4 py-2 rounded-lg text-therapy-blue font-semibold text-center transition-colors hover:bg-therapy-orange/30"
        >
          {type}
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-therapy-orange/20 to-transparent pt-16 pb-20 md:pt-20 md:pb-28 px-4">
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')] bg-cover bg-center"
        style={{ filter: 'saturate(0.8)' }}
      />
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-therapy-blue animate-fade-in">
            Andrea Wennecke
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Kreativtherapie in Lübeck
          </h2>
          
          <TherapyTypes />
          
          <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Traumaverarbeitung für Erwachsene und Jugendliche in einem geschützten, heilsamen Raum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CalendlyDialog>
              <Button 
                className="bg-therapy-blue hover:bg-therapy-blue/90 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Termin vereinbaren
              </Button>
            </CalendlyDialog>
            <a href="#services">
              <Button
                variant="outline"
                className="border-therapy-blue text-therapy-blue hover:bg-therapy-blue/10 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Therapieangebote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
