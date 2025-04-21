
import React from 'react';

const TherapyServices = () => {
  const services = [
    {
      title: "Kunst- und Gestaltungstherapie",
      color: "bg-[#EA384C]/10",
      textColor: "text-[#EA384C]"
    },
    {
      title: "Psychotherapie",
      color: "bg-[#F97316]/10",
      textColor: "text-[#F97316]"
    },
    {
      title: "Ausdruckstherapie",
      color: "bg-[#33C3F0]/10",
      textColor: "text-[#33C3F0]"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.color} ${service.textColor} p-4 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-[1.01]`}
          >
            {service.title}
          </div>
        ))}
      </div>
      <p className="text-center text-lg text-therapy-blue">
        Traumaverarbeitung für Erwachsene und Jugendliche in einem geschützten Raum
      </p>
    </div>
  );
};

export default TherapyServices;
