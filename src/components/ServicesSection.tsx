import React from 'react';
import { FaPalette, FaHeartbeat, FaTheaterMasks, FaHandHoldingHeart, FaChild, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, colorClass, index }: ServiceCardProps) => {
  const getBackgroundColor = (colorClass: string) => {
    switch (colorClass) {
      case 'expression':
        return 'bg-[#FF6B6B] hover:bg-[#FF5252]'; // Warm Red
      case 'art':
        return 'bg-[#4ECDC4] hover:bg-[#45B7AF]'; // Turquoise
      case 'trauma':
        return 'bg-[#FFD93D] hover:bg-[#FFC107]'; // Bright Yellow
      case 'youth':
        return 'bg-[#95E1D3] hover:bg-[#7DCDC0]'; // Mint Green
      case 'supervision':
        return 'bg-[#FF8B94] hover:bg-[#FF7680]'; // Soft Pink
      case 'training':
        return 'bg-[#A8E6CF] hover:bg-[#8CD3B7]'; // Light Green
      default:
        return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        colorClass ? `border-t-4 border-${colorClass}` : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6">
        <div className={`text-3xl mb-4 text-${colorClass}`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-therapy-blue">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Ausdrucksorientierte Psychotherapie",
      description: "Durch kreative Ausdrucksformen und körperorientierte Methoden Zugang zu Emotionen finden und verarbeiten.",
      icon: <FaTheaterMasks />,
      colorClass: "expression",
    },
    {
      title: "Kunsttherapie",
      description: "Freies Malen, Formen und kreative Materialien als therapeutische Werkzeuge zur Selbsterfahrung und Heilung.",
      icon: <FaPalette />,
      colorClass: "art",
    },
    {
      title: "Traumatherapie",
      description: "Behutsame Bearbeitung traumatischer Erfahrungen durch kreative und körperorientierte Methoden.",
      icon: <FaHandHoldingHeart />,
      colorClass: "trauma",
    },
    {
      title: "Kinder & Jugendliche",
      description: "Speziell auf die Bedürfnisse von Kindern und Jugendlichen abgestimmte therapeutische Begleitung.",
      icon: <FaChild />,
      colorClass: "youth",
    },
    {
      title: "Supervision",
      description: "Professionelle Beratung und Reflexion für Fachkräfte aus therapeutischen und pädagogischen Berufen.",
      icon: <FaUsers />,
      colorClass: "supervision",
    },
    {
      title: "Weiterbildung",
      description: "Fachliche Fortbildung und Qualifizierung in kreativen und körperorientierten Therapiemethoden.",
      icon: <FaChalkboardTeacher />,
      colorClass: "training",
    },
  ];

  return (
    <section id="services" className="section py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-therapy-blue">Mein Therapieangebot</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Entdecken Sie meine vielfältigen Therapiemethoden für Erwachsene und Jugendliche.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
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
