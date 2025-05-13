import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  colorClass: string;
}

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

const timelineItems: TimelineItem[] = [
  {
    year: "2020 - heute",
    title: "Eigene Praxis",
    description: "Praxis für Psychotherapie & Kunsttherapie in Lübeck",
    colorClass: "expression"
  },
  {
    year: "2015 - 2020",
    title: "Klinische Tätigkeit",
    description: "Psychosomatische Einrichtungen",
    colorClass: "art"
  },
  {
    year: "2010 - 2015",
    title: "Weiterbildung",
    description: "Psychotherapeutische Ausbildung",
    colorClass: "trauma"
  },
  {
    year: "2010",
    title: "Diplom",
    description: "Kunsttherapie",
    colorClass: "youth"
  },
  {
    year: "2008",
    title: "Zertifizierung",
    description: "Traumatherapie",
    colorClass: "supervision"
  }
];

const Werdegang = () => {
  return (
    <div className="min-h-screen bg-sand">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8">
          <Link 
            to="/"
            className="inline-flex items-center text-therapy-blue hover:text-therapy-blue/80 transition-colors"
          >
            <ArrowLeft className="mr-2" />
            Zurück zur Startseite
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold text-therapy-blue mb-12">Mein Werdegang als Kreativtherapeutin</h1>
        
        <div className="space-y-12">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative pl-8">
              <div className={`absolute left-0 top-0 w-4 h-4 rounded-full ${getBackgroundColor(item.colorClass)}`}></div>
              <div className={`absolute left-2 top-4 bottom-0 w-0.5 ${getBackgroundColor(item.colorClass)}`}></div>
              <div className="ml-4">
                <div className={`text-sm font-semibold ${getBackgroundColor(item.colorClass).replace('bg-', 'text-')}`}>{item.year}</div>
                <h2 className="text-xl font-medium text-gray-800 mt-1">{item.title}</h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Werdegang; 