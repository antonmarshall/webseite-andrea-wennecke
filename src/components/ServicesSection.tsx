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

  return (
    <div 
      className={`service-card relative overflow-hidden rounded-xl shadow-sm transition-all duration-300 cursor-pointer group`}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        {!imageError ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">{title}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
          <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
        </div>
      </div>
      <div className={`absolute inset-0 bg-therapy-${colorClass} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-center items-center p-6`}>
        <p className="text-white text-center">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Kunsttherapie",
      description: "Durch freies Malen, Formen und kreative Materialien Zugang zu Emotionen finden.",
      image: "/images/kunsttherapie.jpg",
      colorClass: "creative",
    },
    {
      title: "Körperorientierte Psychotherapie",
      description: "Verbindung von Körper und Psyche zur ganzheitlichen Wohlbefinden.",
      image: "/images/Körperorientierte Psychotherapie.jpg",
      colorClass: "body",
    },
    {
      title: "Ausdruckstherapie",
      description: "Verschiedene kreative Ausdrucksformen nutzen, um Emotionen zu verarbeiten und neue Perspektiven zu gewinnen.",
      image: "/images/Ausdruckstherapie.jpg",
      colorClass: "expression",
    },
    {
      title: "Traumatherapie",
      description: "Behutsame Bearbeitung traumatischer Erfahrungen durch kreative und körperorientierte Methoden.",
      image: "/images/psychotrauma.jpg",
      colorClass: "healing",
    },
    {
      title: "Einzeltherapie",
      description: "Individuell zugeschnittene Begleitung für persönliche Veränderungswünsche und Entwicklungsziele.",
      image: "/images/einzeltherapie.jpg",
      colorClass: "individual",
    },
    {
      title: "Gruppentherapie",
      description: "In kleinen Gruppen verschiedene Formen und gemeinsam kreative Lösungswege erarbeiten.",
      image: "/images/Gruppentherapie.jpg",
      colorClass: "group",
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
