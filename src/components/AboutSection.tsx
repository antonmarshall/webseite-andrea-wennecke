
import React from 'react';

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
      className="glass-card p-8 transition-all duration-300 hover:bg-therapy-orange/10 animate-fade-in" 
      style={{ animationDelay: `${0.1 * delayIndex}s` }}
    >
      <h3 className="text-xl font-semibold mb-4 text-therapy-blue">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

const AboutSection = () => {
  const aboutCards = [
    {
      title: "Erfahrene Therapeutin",
      content: "Als Kreativtherapeutin schaffe ich einen sicheren Raum, in dem Sie durch Kunst und Bewegung neue Wege zu sich selbst entdecken können."
    },
    {
      title: "Ganzheitlicher Ansatz",
      content: "Ich verbinde Kunsttherapie, Körperarbeit und Traumatherapie zu einem ganzheitlichen Weg der Heilung und des persönlichen Wachstums."
    },
    {
      title: "Persönliche Begleitung",
      content: "Mit Wärme und Verständnis begleite ich Sie auf Ihrem individuellen Weg zu mehr Klarheit und innerer Balance."
    },
  ];
  
  return (
    <section id="about" className="section bg-therapy-orange/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold mb-10 text-therapy-blue">Über Mich</h2>
        <div className="flex flex-col-reverse md:flex-row gap-8">
          <div className="flex-1">
            <div className="grid grid-cols-1 gap-6">
              {aboutCards.map((card, index) => (
                <AboutCard 
                  key={index} 
                  title={card.title} 
                  content={card.content}
                  delayIndex={index + 1}
                />
              ))}
            </div>
          </div>
          <div className="flex-1 flex justify-center items-start">
            <div className="w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/placeholder.svg" 
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
