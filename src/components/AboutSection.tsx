import React from 'react';
import { Hand } from 'lucide-react';

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
      className="glass-card p-6 transition-all duration-300 hover:bg-therapy-orange/10 hover:scale-[1.02] cursor-pointer" 
      style={{ animationDelay: `${0.1 * delayIndex}s` }}
    >
      <h3 className="text-lg font-semibold mb-2 text-therapy-blue">
        {title}
      </h3>
      <p className="text-gray-700 text-sm">{content}</p>
    </div>
  );
};

const AboutSection = () => {
  const aboutCards = [
    {
      title: "Erfahrene Therapeutin",
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
    <section id="about" className="section bg-neutral-100/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold mb-10 text-therapy-blue">Über Mich</h2>
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          <div className="flex-1 flex flex-col justify-between gap-4">
            {aboutCards.map((card, index) => (
              <AboutCard 
                key={index} 
                title={card.title} 
                content={card.content}
                delayIndex={index + 1}
              />
            ))}
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/webseite-andrea-wennecke/images/profilbild.png" 
                alt="Andrea Wennecke"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
