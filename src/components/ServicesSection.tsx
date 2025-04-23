import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  colorClass: string;
}

const ServiceCard = ({ title, description, image, colorClass }: ServiceCardProps) => {
  return (
    <div className="bg-therapy-sand-light rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/webseite-andrea-wennecke/images/placeholder.jpg';
          }}
        />
        <div className={`absolute inset-0 ${colorClass} opacity-0 hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}>
          <div className="text-white p-6">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Kunsttherapie",
      description: "Entdecken Sie Ihre kreative Seite und finden Sie neue Wege der Selbstexpression.",
      image: "/webseite-andrea-wennecke/images/kunsttherapie.jpg",
      colorClass: "bg-moss-green/90"
    },
    {
      title: "Körperorientierte Psychotherapie",
      description: "Lernen Sie, Ihren Körper als Ressource für Heilung und Entwicklung zu nutzen.",
      image: "/webseite-andrea-wennecke/images/koerperorientierte-psychotherapie.jpg",
      colorClass: "bg-terracotta/90"
    },
    {
      title: "Ausdruckstherapie",
      description: "Finden Sie Ihren persönlichen Ausdruck durch verschiedene künstlerische Medien.",
      image: "/webseite-andrea-wennecke/images/ausdruckstherapie.jpg",
      colorClass: "bg-sage-green/90"
    },
    {
      title: "Traumatherapie",
      description: "Begleiten Sie den Prozess der Traumaverarbeitung in einem sicheren Rahmen.",
      image: "/webseite-andrea-wennecke/images/traumatherapie.jpg",
      colorClass: "bg-sand/90"
    },
    {
      title: "Einzeltherapie",
      description: "Individuelle Begleitung für Ihre persönliche Entwicklung und Heilung.",
      image: "/webseite-andrea-wennecke/images/einzeltherapie.jpg",
      colorClass: "bg-warm-gray/90"
    },
    {
      title: "Gruppentherapie",
      description: "Gemeinsame Erfahrungen und Unterstützung in der Gruppe.",
      image: "/webseite-andrea-wennecke/images/gruppentherapie.jpg",
      colorClass: "bg-cool-gray/90"
    }
  ];

  return (
    <section id="services" className="section bg-therapy-warm/30">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-bold mb-12 text-therapy-blue">Therapieangebote</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              colorClass={service.colorClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
