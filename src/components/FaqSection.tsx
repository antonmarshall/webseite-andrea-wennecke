import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
  colorClass: string;
}

const getHoverColor = (colorClass: string) => {
  switch (colorClass) {
    case 'creative':
      return 'hover:bg-moss-green/20';
    case 'body':
      return 'hover:bg-curry-yellow/20';
    case 'expression':
      return 'hover:bg-soft-blue/20';
    case 'healing':
      return 'hover:bg-warm-purple/20';
    case 'individual':
      return 'hover:bg-coral-pink/20';
    case 'group':
      return 'hover:bg-sage-green/20';
    default:
      return 'hover:bg-gray-600/20';
  }
};

const FaqSection = () => {
  const faqs: FaqItem[] = [
    {
      question: "Für wen eignet sich Kreativtherapie?",
      answer: "Kreativtherapie ist für alle da - egal ob jung oder alt. Sie brauchen keine künstlerischen Vorkenntnisse. Der Weg und das Erleben stehen im Mittelpunkt, nicht das Ergebnis.",
      colorClass: "creative"
    },
    {
      question: "Brauche ich künstlerische Erfahrung?",
      answer: "Nein, keinerlei Vorkenntnisse nötig. Es geht um Ihren persönlichen Ausdruck und darum, was die kreativen Prozesse in Ihnen bewegen - nicht um künstlerische Leistung.",
      colorClass: "body"
    },
    {
      question: "Wie läuft eine Therapiesitzung ab?",
      answer: "Wir starten mit einem kurzen Gespräch über Ihr Befinden. Dann nutzen wir kreative Methoden wie Malen oder Bewegung, je nachdem, was für Sie stimmig ist. Am Ende reflektieren wir gemeinsam die Erfahrungen.",
      colorClass: "expression"
    },
    {
      question: "Was kostet eine Therapiesitzung?",
      answer: "Eine Einzelsitzung (60 Minuten) kostet 120€. Eine Gruppensitzung kostet 200€. Bei regelmäßiger Teilnahme und in besonderen Situationen sind individuelle Vereinbarungen möglich. Sprechen Sie mich gerne darauf an.",
      colorClass: "healing"
    },
    {
      question: "Werden die Kosten von der Krankenkasse übernommen?",
      answer: "Private Kassen übernehmen oft einen Teil der Kosten. Bei gesetzlichen Kassen ist eine Erstattung über Zusatzleistungen möglich. Sprechen Sie mich gerne an - ich berate Sie zu den Möglichkeiten.",
      colorClass: "individual"
    },
  ];

  return (
    <section id="faq" className="section bg-therapy-warm/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold mb-10 text-therapy-blue">Häufig gestellte Fragen</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className={`mb-4 border border-gray-200 rounded-lg overflow-hidden bg-therapy-warm/80 backdrop-blur-sm transition-all duration-300 ${getHoverColor(faq.colorClass)}`}
            >
              <AccordionTrigger 
                className={`px-6 py-4 hover:no-underline ${getHoverColor(faq.colorClass)} text-left font-medium text-therapy-blue`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
