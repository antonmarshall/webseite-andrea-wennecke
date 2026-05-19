import type { LucideIcon } from 'lucide-react';
import {
  Palette,
  Heart,
  User,
  Users,
  Ear,
  Sparkles,
} from 'lucide-react';

export type TherapyServiceId =
  | 'expressive'
  | 'art'
  | 'trauma'
  | 'youth'
  | 'supervision'
  | 'misophonia';

export type TherapyService = {
  id: TherapyServiceId;
  title: string;
  shortDescription: string;
  detailText: string;
  colorVar: string;
  icon: LucideIcon;
};

export const therapyServices: TherapyService[] = [
  {
    id: 'expressive',
    title: 'Ausdrucksorientierte Psychotherapie',
    shortDescription:
      'Kreativität und Psychotherapie verbunden – mit methodischer Vielfalt.',
    colorVar: '--service-expressive',
    icon: Sparkles,
    detailText: `Die ausdrucksorientierte Psychotherapie verbindet wissenschaftlich fundierte psychotherapeutische Verfahren mit kreativen und körperorientierten Zugängen. Im Mittelpunkt stehen nicht nur Gespräche, sondern auch Bilder, Bewegung, Stimme und andere Ausdrucksformen – je nachdem, was für Sie im Moment stimmig ist.

Durch diese methodische Vielfalt können Themen oft auf verschiedenen Ebenen bearbeitet werden: emotional, körperlich und symbolisch. So entstehen neue Perspektiven und Zugänge zu belastenden Erfahrungen, ohne dass Sie alles sofort in Worte fassen müssen.

Die Therapie richtet sich an Erwachsene und Jugendliche in einem geschützten Rahmen. Im Erstgespräch klären wir gemeinsam, welche Methoden für Ihr Anliegen passend sind.

[Dieser Text ist ein Platzhalter und wird von Andrea Wennecke durch den endgültigen Fachtext ersetzt.]`,
  },
  {
    id: 'art',
    title: 'Kunsttherapie',
    shortDescription:
      'Therapeutische Begleitung durch künstlerische Prozesse und kreative Ausdrucksformen.',
    colorVar: '--service-art',
    icon: Palette,
    detailText: `In der Kunsttherapie steht der therapeutische Prozess im Vordergrund – nicht das künstlerische Können oder ein „schönes Ergebnis“. Malen, Gestalten, Collagieren oder Arbeiten mit verschiedenen Materialien können helfen, Gefühle sichtbar zu machen und innere Themen zu sortieren.

Künstlerische Vorkenntnisse sind nicht erforderlich. Gemeinsam finden wir Wege des Ausdrucks, die zu Ihnen passen. Die entstandenen Werke dienen der Reflexion und dem Dialog in der Therapie, nicht der Bewertung.

Kunsttherapie eignet sich für Menschen, die über das rein Verbale hinaus arbeiten möchten – zum Beispiel bei Stress, Erschöpfung, Lebenskrisen oder der Suche nach mehr innerer Balance.

[Dieser Text ist ein Platzhalter und wird von Andrea Wennecke durch den endgültigen Fachtext ersetzt.]`,
  },
  {
    id: 'trauma',
    title: 'Traumatherapie',
    shortDescription:
      'Behutsame Bearbeitung traumatischer Erfahrungen mit spezialisierten Methoden.',
    colorVar: '--service-trauma',
    icon: Heart,
    detailText: `Traumatische Erfahrungen können das Erleben, den Körper und das Vertrauen in sich und andere nachhaltig beeinflussen. In der Traumatherapie geht es darum, belastende Ereignisse in einem sicheren Tempo zu bearbeiten – mit Methoden, die Ressourcen stärken und Überforderung vermeiden.

Der Fokus liegt auf Stabilisierung, Körperwahrnehmung und schrittweiser Integration. Sie bestimmen mit, wann welche Themen angesprochen werden. Ziel ist nicht, alles sofort aufzuarbeiten, sondern wieder mehr Handlungsspielraum und innere Sicherheit zu gewinnen.

Die Begleitung richtet sich an Erwachsene und Jugendliche. Im Erstgespräch besprechen wir Ihr Anliegen und ob eine traumasensible Arbeit für Sie passend ist.

[Dieser Text ist ein Platzhalter und wird von Andrea Wennecke durch den endgültigen Fachtext ersetzt.]`,
  },
  {
    id: 'youth',
    title: 'Jugendliche',
    shortDescription:
      'Therapeutische Begleitung für Jugendliche – nicht für Kinder.',
    colorVar: '--service-youth',
    icon: User,
    detailText: `Jugendliche stehen oft vor Veränderungen, die Druck, Unsicherheit oder Überforderung auslösen können – in der Schule, in der Familie, im Freundeskreis oder mit sich selbst. In der therapeutischen Begleitung geht es darum, einen Raum zu schaffen, in dem junge Menschen ihre Themen ernst genommen fühlen und auf ihre Weise Ausdruck finden können.

Je nach Persönlichkeit kommen Gespräche, kreative Methoden oder körperorientierte Übungen zum Einsatz. Wichtig ist ein respektvoller Umgang auf Augenhöhe. Das Angebot richtet sich ausdrücklich an Jugendliche – nicht an Kinder im Grundschulalter.

Eltern oder Bezugspersonen können – nach Absprache mit dem Jugendlichen – in einzelnen Schritten einbezogen werden. Im Erstgespräch klären wir Anliegen, Rahmen und Vertraulichkeit.

[Dieser Text ist ein Platzhalter und wird von Andrea Wennecke durch den endgültigen Fachtext ersetzt.]`,
  },
  {
    id: 'supervision',
    title: 'Supervision & Weiterbildung',
    shortDescription:
      'Reflexion für Fachkräfte sowie qualifizierte Fortbildungsangebote.',
    colorVar: '--service-supervision',
    icon: Users,
    detailText: `Supervision bietet Fachkräften im psychosozialen und helfenden Bereich einen geschützten Raum, um berufliche Situationen, Rollenkonflikte und eigene Betroffenheit zu reflektieren. Ziel ist die Stärkung der professionellen Handlungsfähigkeit und die Entlastung im Arbeitsalltag.

Ergänzend werden Weiterbildungsangebote angeboten, die sich an Kolleginnen und Kollegen richten, die ihre therapeutischen oder pädagogischen Kompetenzen vertiefen möchten. Inhalte und Formate werden je nach Zielgruppe und Bedarf abgestimmt.

Interessierte können sich für Termine, Formate und Konditionen direkt melden. Ein kurzes Vorgespräch hilft, passende Rahmenbedingungen zu finden.

[Dieser Text ist ein Platzhalter und wird von Andrea Wennecke durch den endgültigen Fachtext ersetzt.]`,
  },
  {
    id: 'misophonia',
    title: 'Misophonie',
    shortDescription:
      'Begleitung bei starker Reaktion auf bestimmte Geräusche und Alltagsbelastung.',
    colorVar: '--service-misophonia',
    icon: Ear,
    detailText: `Misophonie bezeichnet eine ausgeprägte Reaktion auf bestimmte Alltagsgeräusche – oft begleitet von Anspannung, Ärger oder dem starken Wunsch, der Situation zu entfliehen. Betroffene erleben dies häufig als belastend und schambehaftet, weil ihr Umfeld die Intensität der Reaktion nicht nachvollziehen kann.

In der therapeutischen Begleitung geht es darum, Auslöser und Bewältigungsstrategien zu verstehen, Ressourcen zu stärken und Wege zu finden, den Alltag wieder besser zu bewältigen. Der Ansatz orientiert sich an Ihren individuellen Erfahrungen und Zielen.

Ob und in welchem Rahmen eine Therapie sinnvoll ist, klären wir im Erstgespräch. Fachliche Details zu Methoden und Verlauf werden hier noch ergänzt.

[Dieser Text ist ein Platzhalter und wird von Andrea Wennecke durch den endgültigen Fachtext ersetzt.]`,
  },
];
