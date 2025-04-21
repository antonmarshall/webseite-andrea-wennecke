import React from 'react';
import { Palette, Brain, Music, Heart, User, Users, Hand } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, colorClass, index }: ServiceCardProps) => {
  return (
    <div 
      className={`service-card border-t-4 ${colorClass} transition-all duration-300 hover:bg-gradient-to-br hover:from-white hover:to-therapy-orange/20 hover:scale-[1.03] cursor-pointer group bg-white`}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="service-card-icon group-hover:scale-110 group-hover:text-therapy-orange transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-therapy-blue group-hover:text-therapy-orange transition-colors duration-300">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Kunsttherapie",
      description: "Durch freies Malen, Formen und kreative Materialien Zugang zu Emotionen finden.",
      colorClass: "border-therapy-purple",
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Körperorientierte Psychotherapie",
      description: "Verbindung von Körper und Psyche zur ganzheitlichen Wohlbefinden.",
      colorClass: "border-therapy-turquoise",
    },
    {
      icon: <Music className="h-12 w-12" />,
      title: "Ausdruckstherapie",
      description: "Verschiedene kreative Ausdrucksformen nutzen, um Emotionen zu verarbeiten und neue Perspektiven zu gewinnen.",
      colorClass: "border-therapy-pink",
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Traumatherapie",
      description: "Behutsame Bearbeitung traumatischer Erfahrungen durch kreative und körperorientierte Methoden.",
      colorClass: "border-therapy-lavender",
    },
    {
      icon: <User className="h-12 w-12" />,
      title: "Einzeltherapie",
      description: "Individuell zugeschnittene Begleitung für persönliche Veränderungswünsche und Entwicklungsziele.",
      colorClass: "border-therapy-green",
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Gruppentherapie",
      description: "In kleinen Gruppen verschiedene Formen und gemeinsam kreative Lösungswege erarbeiten.",
      colorClass: "border-therapy-yellow",
    },
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-therapy-blue">Mein Therapieangebot</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie meine vielfältigen Therapiemethoden für Erwachsene und Jugendliche.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              colorClass={service.colorClass}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
