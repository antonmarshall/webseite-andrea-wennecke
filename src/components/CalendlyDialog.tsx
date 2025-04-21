import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AppointmentType {
  id: string;
  title: string;
  duration: string;
}

export const CalendlyDialog = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<AppointmentType | null>(null);

  const appointmentTypes: AppointmentType[] = [
    { id: '1', title: 'Erstgespräch Psychotherapie', duration: '60-75 Minuten' },
    { id: '2', title: 'Folgetermin Psychotherapie', duration: '50 Minuten' },
    { id: '3', title: 'Kunsttherapie Einzelsitzung', duration: '60 Minuten' },
    { id: '4', title: 'Paartherapie', duration: '90 Minuten' },
    { id: '5', title: 'Kostenloses Erstgespräch online', duration: '20 Minuten' },
  ];

  const handleSelect = (type: AppointmentType) => {
    setSelectedType(type);
    setIsOpen(false);
    // Hier würde später die Calendly-URL basierend auf dem ausgewählten Typ geöffnet werden
    window.open(`https://calendly.com/ihre-url/${type.id}`, '_blank');
  };

  return (
    <div className="relative">
      <div 
        className="bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer w-full max-w-xl mx-auto"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="p-4 flex justify-between items-center">
          <div className="text-gray-700">
            {selectedType ? selectedType.title : 'Bitte Termin-Art auswählen'}
          </div>
          <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-w-xl mx-auto z-50">
          {appointmentTypes.map((type) => (
            <div
              key={type.id}
              className="p-4 hover:bg-therapy-blue/5 cursor-pointer border-b last:border-b-0 border-gray-100"
              onClick={() => handleSelect(type)}
            >
              <div className="font-medium text-gray-800">{type.title}</div>
              <div className="text-sm text-gray-500 mt-1">{type.duration}</div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-4 text-gray-600 text-sm">
        Kein passender Termin dabei? Kontaktieren Sie mich gerne direkt.
      </div>
    </div>
  );
};
