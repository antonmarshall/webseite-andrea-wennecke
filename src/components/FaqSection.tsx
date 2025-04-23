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
}

const FaqSection = () => {
  const faqs: FaqItem[] = [
    {
      question: "Wie läuft eine Therapiesitzung ab?",
      answer: "Wir starten mit einem kurzen Gespräch über Ihr Befinden. Dann nutzen wir kreative Methoden wie Malen oder Bewegung, je nachdem, was für Sie stimmig ist. Am Ende reflektieren wir gemeinsam die Erfahrungen."
    },
    {
      question: "Für wen eignet sich Kreativtherapie?",
      answer: "Kreativtherapie ist für alle da - egal ob jung oder alt. Sie brauchen keine künstlerischen Vorkenntnisse. Der Weg und das Erleben stehen im Mittelpunkt, nicht das Ergebnis."
    },
    {
      question: "Werden die Kosten von der Krankenkasse übernommen?",
      answer: "Private Kassen übernehmen oft einen Teil der Kosten. Bei gesetzlichen Kassen ist eine Erstattung über Zusatzleistungen möglich. Sprechen Sie mich gerne an - ich berate Sie zu den Möglichkeiten."
    },
    {
      question: "Was kostet eine Therapiesitzung?",
      answer: "Eine Einzelsitzung (60 Minuten) kostet 80€. Für Gruppen- und Paartherapie gelten andere Tarife. Bei regelmäßiger Teilnahme und in besonderen Situationen sind individuelle Vereinbarungen möglich. Sprechen Sie mich gerne darauf an."
    },
    {
      question: "Brauche ich künstlerische Erfahrung?",
      answer: "Nein, keinerlei Vorkenntnisse nötig. Es geht um Ihren persönlichen Ausdruck und darum, was die kreativen Prozesse in Ihnen bewegen - nicht um künstlerische Leistung."
    },
  ];

  return (
    <section id="faq" className="section bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-center text-3xl font-bold mb-10 text-therapy-blue">Häufig gestellte Fragen</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white transition-all duration-300 hover:bg-therapy-orange/10"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-therapy-orange/20 text-left font-medium text-therapy-blue">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700 text-base">
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
