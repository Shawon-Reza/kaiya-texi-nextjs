import DestinationCard from '@/components/landing/DestinationCard';
import { popularDestinations } from '@/data/popular-destinations';

const PopularDestination = () => {
  return (
    <section className="bg-zinc-100 py-16 sm:py-20 lg:py-24 dark:bg-zinc-950" id="destinations">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
            Popular Destinations
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7">
          {popularDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;