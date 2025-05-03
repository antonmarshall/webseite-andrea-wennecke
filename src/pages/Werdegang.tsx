import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    year: "2020 - heute",
    title: "Eigene Praxis",
    description: "Praxis für Psychotherapie und Kunsttherapie in Lübeck"
  },
  {
    year: "2015 - 2020",
    title: "Klinische Tätigkeit",
    description: "Psychosomatische Einrichtungen"
  },
  {
    year: "2010 - 2015",
    title: "Weiterbildung",
    description: "Psychotherapeutische Ausbildung"
  },
  {
    year: "2010",
    title: "Diplom",
    description: "Kunsttherapie"
  },
  {
    year: "2008",
    title: "Zertifizierung",
    description: "Traumatherapie"
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
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-therapy-blue"></div>
              <div className="absolute left-2 top-4 bottom-0 w-0.5 bg-therapy-blue"></div>
              <div className="ml-4">
                <div className="text-sm font-semibold text-therapy-blue">{item.year}</div>
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