import React, { useEffect, useRef, useState } from 'react';
import { FaPalette, FaHeartbeat, FaTheaterMasks, FaHandHoldingHeart, FaChild, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}

const ServiceCard = ({ title, description, icon, colorClass, index, isActive, onActivate }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Only run on mobile devices
      if (window.innerWidth >= 768) return;

      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const cardCenter = rect.top + rect.height / 2;
      const viewportCenter = viewportHeight / 2;
      
      // Check if the card's center is near the viewport's center
      const isNearCenter = Math.abs(cardCenter - viewportCenter) < 150; // 150px threshold
      
      if (isNearCenter && !isActive) {
        onActivate();
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isActive, onActivate]);

  const getBackgroundColor = (colorClass: string) => {
    switch (colorClass) {
      case 'expression':
        return 'bg-moss-green'; // Moss Green
      case 'art':
        return 'bg-curry-yellow'; // Curry Yellow
      case 'trauma':
        return 'bg-soft-blue'; // Soft Blue
      case 'youth':
        return 'bg-warm-purple'; // Warm Purple
      case 'supervision':
        return 'bg-coral-pink'; // Coral Pink
      case 'training':
        return 'bg-sage-green'; // Sage Green
      default:
        return 'bg-therapy-blue';
    }
  };

  return (
    <div 
      ref={cardRef}
      className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 cursor-pointer h-[250px] md:h-[400px] group ${getBackgroundColor(colorClass)} ${isActive ? 'is-visible' : ''}`}
      style={{ 
        opacity: 0,
        animation: `fadeIn 0.5s ease-out ${index * 0.1}s forwards`
      }}
    >
      <div className="absolute inset-0 flex flex-col p-4 md:p-6">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-white text-4xl md:text-6xl transform transition-all duration-500 group-hover:scale-110 md:group-hover:scale-110">
            {icon}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <h3 className="text-lg md:text-2xl font-semibold text-white text-center mb-2 md:mb-4 transform transition-all duration-500 group-hover:-translate-y-2 md:group-hover:-translate-y-2">
            {title}
          </h3>
          <p className="text-white text-center text-sm md:text-lg leading-relaxed opacity-0 group-hover:opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 max-w-[90%]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

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
    <section id="services" className="section py-8 md:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-therapy-blue">Mein Therapieangebot</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">
            Entdecken Sie meine vielfältigen Therapiemethoden für Erwachsene und Jugendliche.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              colorClass={service.colorClass}
              index={index}
              isActive={activeCardIndex === index}
              onActivate={() => setActiveCardIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
