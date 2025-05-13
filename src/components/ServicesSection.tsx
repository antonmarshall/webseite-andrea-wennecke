import React, { useEffect, useRef } from 'react';
import { FaPalette, FaHeartbeat, FaTheaterMasks, FaHandHoldingHeart, FaChild, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  index: number;
}

const ServiceCard = ({ title, description, icon, colorClass, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('group-hover');
          } else {
            entry.target.classList.remove('group-hover');
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the card is visible
        rootMargin: '-10% 0px' // Add some margin to make the effect smoother
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const getBackgroundColor = (colorClass: string) => {
    switch (colorClass) {
      case 'expression':
        return 'bg-moss-green hover:bg-moss-green/90'; // Moss Green
      case 'art':
        return 'bg-curry-yellow hover:bg-curry-yellow/90'; // Curry Yellow
      case 'trauma':
        return 'bg-soft-blue hover:bg-soft-blue/90'; // Soft Blue
      case 'youth':
        return 'bg-warm-purple hover:bg-warm-purple/90'; // Warm Purple
      case 'supervision':
        return 'bg-coral-pink hover:bg-coral-pink/90'; // Coral Pink
      case 'training':
        return 'bg-sage-green hover:bg-sage-green/90'; // Sage Green
      default:
        return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  return (
    <div 
      ref={cardRef}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-therapy-blue">Mein Therapieangebot</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
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
