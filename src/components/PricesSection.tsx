import React from 'react';
import { User, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PriceCardProps {
  icon: React.ReactNode;
  title: string;
  price: string;
  index: number;
}

const PriceCard = ({ icon, title, price, index }: PriceCardProps) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md p-8 text-center transition-all duration-300 hover:scale-[1.02] hover:bg-gradient-to-br hover:from-white hover:to-therapy-orange/20 hover:shadow-lg animate-fade-in cursor-pointer group"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <div className="flex justify-center mb-4">
        <div className="h-16 w-16 bg-therapy-blue/10 rounded-full flex items-center justify-center text-therapy-blue group-hover:bg-therapy-orange/20 group-hover:text-therapy-orange transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-4 text-therapy-blue group-hover:text-therapy-orange transition-colors duration-300">{title}</h3>
      <p className="text-2xl font-bold mb-6 text-gray-800">{price}</p>
      <Button className="w-full bg-therapy-blue hover:bg-therapy-orange transition-colors">
        Termin vereinbaren
      </Button>
    </div>
  );
};

const PricesSection = () => {
  const priceCards = [
    {
      icon: <User className="h-8 w-8" />,
      title: "Einzeltherapie",
      price: "120€ pro Stunde",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Gruppentherapie",
      price: "200€ pro Stunde",
    },
  ];

  return (
    <section id="prices" className="section bg-therapy-orange/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold mb-10 text-therapy-blue">Preise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {priceCards.map((card, index) => (
            <PriceCard 
              key={index}
              icon={card.icon}
              title={card.title}
              price={card.price}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricesSection;
