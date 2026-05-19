import { Camera } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { practiceGalleryImages } from '@/data/practiceGallery';

const PracticeGallery = () => (
  <section id="galerie" className="bg-surface-muted py-20">
    <div className="container mx-auto px-4 md:px-6">
      <div className="mb-12 text-center">
        <div className="mb-4 flex justify-center">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10">
            <Camera className="h-6 w-6 text-brand-primary" aria-hidden />
          </span>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-brand-primary md:text-4xl">
          Praxis-Rundgang
        </h2>
        <p className="text-lg text-[var(--text-secondary)]">
          Ein Blick in die Praxisräume in Lübeck
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <Carousel className="w-full">
          <CarouselContent>
            {practiceGalleryImages.map((image) => (
              <CarouselItem
                key={image.id}
                className="basis-4/5 sm:basis-3/4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="transform overflow-hidden border-0 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="aspect-square mx-auto max-w-xs overflow-hidden md:max-w-none">
                    <img
                      src={image.image}
                      alt={image.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="border border-[var(--border-subtle)] bg-surface-elevated p-6 shadow-md">
                    <h3 className="mb-2 text-xl font-semibold text-brand-primary">
                      {image.title}
                    </h3>
                    <p className="text-[var(--text-secondary)]">
                      {image.description}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="h-10 w-10 border-brand-primary/20 bg-surface-elevated text-brand-primary shadow-lg transition-all duration-200 hover:scale-105 hover:border-brand-primary/40 md:h-14 md:w-14" />
          <CarouselNext className="h-10 w-10 border-brand-primary/20 bg-surface-elevated text-brand-primary shadow-lg transition-all duration-200 hover:scale-105 hover:border-brand-primary/40 md:h-14 md:w-14" />
        </Carousel>
      </div>
    </div>
  </section>
);

export default PracticeGallery;
