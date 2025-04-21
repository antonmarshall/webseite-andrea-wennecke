
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const handleAppointment = () => {
    // In a real application, this would open a calendar or form
    toast({
      title: "Terminanfrage",
      description: "Bitte kontaktieren Sie mich unter: +49 451 47047/42",
    });
  };

  return (
    <section className="relative bg-gradient-to-b from-therapy-orange/20 to-transparent pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="absolute inset-0 z-0">
        <img
          src="/therapy-hero.jpg"
          alt="Kreativtherapie"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto max-w-5xl relative z-10 px-4">
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
              className="bg-therapy-blue hover:bg-therapy-blue/90 text-white font-semibold px-8 py-6 text-lg group transition-all duration-300"
              onClick={handleAppointment}
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Termin vereinbaren
            </Button>
            <Button
              variant="outline"
              className="border-therapy-blue text-therapy-blue hover:bg-therapy-blue/10 font-semibold px-8 py-6 text-lg group"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
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
