import React, { useState } from 'react';
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
      answer: "Eine typische Therapiesitzung dauert etwa 50-60 Minuten. Nach einem kurzen Gespräch über Ihr aktuelles Befinden und mögliche Themen für die Sitzung, nutzen wir kreative Methoden wie Malen, Gestalten oder körperorientierte Übungen. Zum Abschluss reflektieren wir gemeinsam über den Prozess und die entstandenen Erkenntnisse."
    },
    {
      question: "Für wen eignet sich Kreativtherapie?",
      answer: "Kreativtherapie eignet sich grundsätzlich für Menschen jeden Alters und mit verschiedensten Anliegen – von Stressbewältigung über Traumaverarbeitung bis hin zu persönlicher Entwicklung. Künstlerische Vorkenntnisse sind nicht erforderlich, da der therapeutische Prozess und nicht das künstlerische Ergebnis im Vordergrund steht."
    },
    {
      question: "Werden die Kosten von der Krankenkasse übernommen?",
      answer: "Die Kostenübernahme hängt von Ihrer Versicherungssituation ab. Einige private Krankenkassen übernehmen die Kosten teilweise oder vollständig. Gesetzliche Krankenkassen übernehmen die Kosten in der Regel nicht direkt, können aber über bestimmte Zusatzleistungen oder im Rahmen einer ärztlich verordneten Heilmitteltherapie abgedeckt sein. Ich berate Sie gerne zu möglichen Erstattungswegen."
    },
    {
      question: "Brauche ich künstlerische Erfahrung für die Kunsttherapie?",
      answer: "Nein, künstlerische Vorkenntnisse oder Talente sind nicht notwendig. In der Kunsttherapie geht es nicht um ästhetische Bewertungen oder handwerkliches Können, sondern um den therapeutischen Prozess und die persönliche Ausdrucksmöglichkeit. Alle Materialien und Techniken werden so eingesetzt, dass sie für jeden zugänglich sind."
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
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden bg-white transition-all duration-300 hover:bg-therapy-orange/5"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-therapy-orange/10 text-left font-medium text-therapy-blue">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-700">
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
