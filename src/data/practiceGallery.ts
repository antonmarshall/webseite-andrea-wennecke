const base = import.meta.env.BASE_URL;

export type GalleryImage = {
  id: string;
  title: string;
  description: string;
  image: string;
};

/** Ausgewählte Praxisfotos (umbenannt in public/images/galerie/) */
export const practiceGalleryImages: GalleryImage[] = [
  {
    id: 'therapieraum',
    title: 'Therapieraum',
    description:
      'Weitwinkelansicht des Praxisraums mit Beratungsecke, Bibliothek und Atelier.',
    image: `${base}images/galerie/praxis-weitwinkel-therapieraum.jpeg`,
  },
  {
    id: 'beratungsecke',
    title: 'Beratungsecke',
    description:
      'Gesprächsbereich mit Sesseln und Bücherregal – ruhiger Rahmen für Therapiegespräche.',
    image: `${base}images/galerie/beratungsecke-sessel-buecherregal.jpeg`,
  },
  {
    id: 'atelier-tisch',
    title: 'Atelier & Arbeitstisch',
    description:
      'Kreativer Arbeitsplatz für ausdrucksorientierte und kunsttherapeutische Arbeit.',
    image: `${base}images/galerie/atelier-arbeitstisch-kunsttherapie.jpeg`,
  },
  {
    id: 'atelier-fenster',
    title: 'Atelier mit Fensterblick',
    description:
      'Heller Atelierraum mit großzügigen Fenstern und Platz für gemeinsames Gestalten.',
    image: `${base}images/galerie/atelier-weitwinkel-fenster.jpeg`,
  },
  {
    id: 'bibliothek-kachelofen',
    title: 'Bibliothek & Kachelofen',
    description:
      'Bibliothek, Kachelofen und Besprechungstisch – charakteristischer Altbau-Charme.',
    image: `${base}images/galerie/praxis-bibliothek-kachelofen.jpeg`,
  },
];
