import React from 'react';
import { Hand } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CalendlyDialog } from '@/components/CalendlyDialog';

const AboutCard = ({ 
  title, 
  content,
  delayIndex 
}: { 
  title: string; 
  content: string;
  delayIndex: number;
}) => {
  return (
    <div 
      className="bg-white/90 backdrop-blur-sm rounded-xl p-4 md:p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white h-[120px] md:h-auto" 
      style={{ animationDelay: `${0.1 * delayIndex}s` }}
    >
      <h3 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-therapy-blue">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3 md:line-clamp-none">{content}</p>
    </div>
  );
};

const AboutSection = () => {
  const aboutCards = [
    {
      title: "Therapeutin seit über 20 Jahren",
      content: "Als Kreativtherapeutin schaffe ich einen sicheren Raum für persönliche Entdeckungen und Heilung durch Kunst und Bewegung."
    },
    {
      title: "Ganzheitlicher Ansatz",
      content: "Ich verbinde Kunsttherapie, Körperarbeit und Traumatherapie zu einem ganzheitlichen Weg der Entwicklung."
    },
    {
      title: "Persönliche Begleitung",
      content: "Mit Wärme und Verständnis unterstütze ich Sie auf Ihrem individuellen Weg zu innerer Balance."
    },
  ];
  
  return (
    <section id="about" className="section bg-sand">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-therapy-blue">Über Mich</h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-therapy-blue/10 rounded-2xl transform rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/webseite-andrea-wennecke/images/profilbild.png" 
                  alt="Andrea Wennecke"
                  className="w-full h-auto object-cover rounded-2xl max-h-[250px] md:max-h-none object-top"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <div className="grid gap-3 md:gap-6">
              {aboutCards.map((card, index) => (
                <AboutCard 
                  key={index} 
                  title={card.title} 
                  content={card.content}
                  delayIndex={index + 1}
                />
              ))}
            </div>
            <div className="mt-4 md:mt-8 text-center">
              <Link to="/werdegang">
                <Button className="w-full bg-soft-blue text-white hover:bg-soft-blue/90">
                  Zu meinem Werdegang
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
