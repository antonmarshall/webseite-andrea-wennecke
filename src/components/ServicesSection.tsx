import React from 'react';
import { FaPalette, FaHeartbeat, FaTheaterMasks, FaHandHoldingHeart, FaUser, FaUsers } from 'react-icons/fa';

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
      case 'creative':
        return 'bg-[#FF6B6B] hover:bg-[#FF5252]'; // Warm Red
      case 'body':
        return 'bg-[#4ECDC4] hover:bg-[#45B7AF]'; // Turquoise
      case 'expression':
        return 'bg-[#FFD93D] hover:bg-[#FFC107]'; // Bright Yellow
      case 'healing':
        return 'bg-[#95E1D3] hover:bg-[#7DCDC0]'; // Mint Green
      case 'individual':
        return 'bg-[#FF8B94] hover:bg-[#FF7680]'; // Soft Pink
      case 'group':
        return 'bg-[#A8E6CF] hover:bg-[#8CD3B7]'; // Light Green
      default:
        return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 cursor-pointer h-[400px] group ${getBackgroundColor(colorClass)}`}
      style={{ 
        opacity: 0,
        animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
      }}
    >
      <div className="absolute inset-0 flex flex-col p-6">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-white text-6xl transform transition-all duration-500 group-hover:scale-110">
            {icon}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold text-white text-center mb-4 transform transition-all duration-500 group-hover:-translate-y-2">
            {title}
          </h3>
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
      icon: <FaPalette />,
      colorClass: "creative",
    },
    {
      title: "Körperorientierte Psychotherapie",
      description: "Verbindung von Körper und Psyche zur ganzheitlichen Wohlbefinden.",
      icon: <FaHeartbeat />,
      colorClass: "body",
    },
    {
      title: "Ausdruckstherapie",
      description: "Verschiedene kreative Ausdrucksformen nutzen, um Emotionen zu verarbeiten und neue Perspektiven zu gewinnen.",
      icon: <FaTheaterMasks />,
      colorClass: "expression",
    },
    {
      title: "Traumatherapie",
      description: "Behutsame Bearbeitung traumatischer Erfahrungen durch kreative und körperorientierte Methoden.",
      icon: <FaHandHoldingHeart />,
      colorClass: "healing",
    },
    {
      title: "Einzeltherapie",
      description: "Individuell zugeschnittene Begleitung für persönliche Veränderungswünsche und Entwicklungsziele.",
      icon: <FaUser />,
      colorClass: "individual",
    },
    {
      title: "Gruppentherapie",
      description: "In kleinen Gruppen verschiedene Formen und gemeinsam kreative Lösungswege erarbeiten.",
      icon: <FaUsers />,
      colorClass: "group",
    },
  ];

  return (
    <section id="services" className="section py-16">
      <div className="container mx-auto max-w-7xl px-4">
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
