import React from 'react';
import { Button } from '@/components/ui/button';
import { CalendlyDialog } from '@/components/CalendlyDialog';
import { Link } from '@/components/ui/link';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-therapy-orange/20 to-transparent pt-16 pb-20 md:pt-20 md:pb-28 px-4">
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-[url('/webseite-andrea-wennecke/images/hero-image.png')] bg-cover bg-center"
        style={{ filter: 'saturate(0.8)' }}
      />
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-therapy-blue animate-fade-in">
            Praxis für Psychotherapie & Kunsttherapie
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Andrea Wennecke
          </h2>
          
          <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg animate-fade-in leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Körperorientierte Therapie für Erwachsene und Jugendliche in einem geschützten Raum.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link href="#services">
              <Button
                variant="outline"
                className="border-therapy-blue text-therapy-blue hover:bg-therapy-blue/10 font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Therapieangebote
              </Button>
            </Link>
            <CalendlyDialog>
              <Button 
                className="bg-therapy-blue hover:bg-therapy-blue/90 text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Termin vereinbaren
              </Button>
            </CalendlyDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
