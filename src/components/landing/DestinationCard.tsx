"use client";

import { Star } from 'lucide-react';
import TiltedCard from '@/components/ui/TiltedCard';

interface Destination {
  imageUrl: string;
  route: string;
  rating: number;
  description: string;
}

const DestinationCard = ({ destination }: { destination: Destination }) => {
  return (
    <article className="overflow-hidden rounded-2xl transition-transform duration-200 hover:-translate-y-1  dark:border-zinc-800 dark:bg-zinc-900">
      <div className="h-80 w-full sm:h-90">
        <TiltedCard
          imageSrc={destination.imageUrl}
          altText={destination.route}
          captionText={destination.route}
          containerHeight="100%"
          containerWidth="100%"
          imageHeight="100%"
          imageWidth="100%"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent
          overlayContent={
            <div className="flex h-full w-full flex-col justify-end rounded-[15px]  p-5 text-white">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold">{destination.route}</h3>
                <div className="inline-flex shrink-0 items-center gap-1 text-white/95">
                  <Star className="h-4 w-4" />
                  <span className="text-sm font-medium">{destination.rating}</span>
                </div>
              </div>

              <p className="mt-3 text-sm text-white/90">{destination.description}</p>
            </div>
          }
        />
      </div>
    </article>
  );
};

export default DestinationCard;
