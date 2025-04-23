import React, { useState } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  colorClass: string;
  index: number;
}

const ServiceCard = ({ title, description, image, colorClass, index }: ServiceCardProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Failed to load image: ${image}`, e);
    setImageError(true);
  };

  const getHoverColor = (colorClass: string) => {
    switch (colorClass) {
      case 'creative':
        return 'bg-moss-green/80'; // Moosgrün
      case 'body':
        return 'bg-curry-yellow/80'; // Curry Gelb
      case 'expression':
        return 'bg-soft-blue/80'; // Sanftes Blau
      case 'healing':
        return 'bg-warm-purple/80'; // Warmes Lila
      case 'individual':
        return 'bg-coral-pink/80'; // Korallenrosa
      case 'group':
        return 'bg-sage-green/80'; // Salbeigrün
      default:
        return 'bg-gray-600/80';
    }
  };

  return (
    <div 
      className="service-card relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 cursor-pointer h-[400px] group"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      {/* Bild */}
      <div className="absolute inset-0">
        {!imageError ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-2xl">
            <span className="text-gray-500">{title}</span>
          </div>
        )}
      </div>

      {/* Farbiger Overlay */}
      <div className={`absolute inset-0 ${getHoverColor(colorClass)} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl`} />

      {/* Text-Inhalt */}
      <div className="absolute inset-0 flex flex-col p-6">
        <h3 className="text-2xl font-semibold text-white text-center">{title}</h3>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-white text-center text-lg leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 max-w-[90%]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Kunsttherapie",
      description: "Durch freies Malen, Formen und kreative Materialien Zugang zu Emotionen finden.",
      image: "/webseite-andrea-wennecke/images/kunsttherapie.jpg",
      colorClass: "creative",
    },
    {
      title: "Körperorientierte Psychotherapie",
      description: "Verbindung von Körper und Psyche zur ganzheitlichen Wohlbefinden.",
      image: "/webseite-andrea-wennecke/images/Körperorientierte Psychotherapie.jpg",
      colorClass: "body",
    },
    {
      title: "Ausdruckstherapie",
      description: "Verschiedene kreative Ausdrucksformen nutzen, um Emotionen zu verarbeiten und neue Perspektiven zu gewinnen.",
      image: "/webseite-andrea-wennecke/images/Ausdruckstherapie.jpg",
      colorClass: "expression",
    },
    {
      title: "Traumatherapie",
      description: "Behutsame Bearbeitung traumatischer Erfahrungen durch kreative und körperorientierte Methoden.",
      image: "/webseite-andrea-wennecke/images/psychotrauma.jpg",
      colorClass: "healing",
    },
    {
      title: "Einzeltherapie",
      description: "Individuell zugeschnittene Begleitung für persönliche Veränderungswünsche und Entwicklungsziele.",
      image: "/webseite-andrea-wennecke/images/einzeltherapie.jpg",
      colorClass: "individual",
    },
    {
      title: "Gruppentherapie",
      description: "In kleinen Gruppen verschiedene Formen und gemeinsam kreative Lösungswege erarbeiten.",
      image: "/webseite-andrea-wennecke/images/Gruppentherapie.jpg",
      colorClass: "group",
    },
  ];

  return (
    <section id="services" className="section bg-white py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-therapy-blue">Mein Therapieangebot</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Entdecken Sie meine vielfältigen Therapiemethoden für Erwachsene und Jugendliche.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
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
