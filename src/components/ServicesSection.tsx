import React from 'react';
import { Palette, Brain, Music, Heart, User, Users } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorClass: string;
  imagePath: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, colorClass, imagePath, index }: ServiceCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div 
          className={`service-card border-t-4 ${colorClass} group hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in`}
          style={{ animationDelay: `${0.1 * index}s` }}
        >
          <div className="service-card-icon group-hover:text-therapy-orange transition-colors">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-therapy-blue group-hover:text-therapy-orange transition-colors">{title}</h3>
          <p className="text-gray-700">{description}</p>
          <div className="mt-4 overflow-hidden rounded-lg">
            <img
              src={imagePath}
              alt={title}
              className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Kunsttherapie",
      description: "Durch freies Malen, Formen und kreative Materialien Zugang zu Emotionen finden.",
      colorClass: "border-therapy-lightBlue",
      imagePath: "/therapy-art.jpg",
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: "Körperorientierte Psychotherapie",
      description: "Verbindung von Körper und Psyche zur ganzheitlichen Wohlbefinden.",
      colorClass: "border-therapy-purple",
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
      colorClass: "border-therapy-red",
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
      colorClass: "border-therapy-turquoise",
    },
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-therapy-blue hover:text-therapy-orange transition-colors">
            Mein Therapieangebot
          </h2>
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
              imagePath={service.imagePath}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
