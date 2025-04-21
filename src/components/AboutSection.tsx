
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
      className="glass-card p-8 animate-fade-in" 
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
      content: "Als langjährig tätige Kreativtherapeutin biete ich einen geschützten Raum für Menschen, die durch kunsttherapeutische und körperorientierte Methoden ihr Wohlbefinden steigern möchten."
    },
    {
      title: "Ganzheitlicher Ansatz",
      content: "Mein therapeutischer Ansatz vereint Kunsttherapie, körperorientierte Psychotherapie und Traumatherapie, um vielfältige Wege des Ausdrucks und der Heilung anzubieten."
    },
    {
      title: "Persönliche Begleitung",
      content: "Ich begleite Sie einfühlsam und individuell auf Ihrem persönlichen Weg zu mehr innerer Balance und Klarheit - unabhängig von Alter und Lebenssituation."
    },
  ];
  
  return (
    <section id="about" className="section bg-therapy-orange/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold mb-10 text-therapy-blue">Über Mich</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </section>
  );
};

export default AboutSection;
