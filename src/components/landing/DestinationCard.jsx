import { Star } from 'lucide-react';

const DestinationCard = ({ destination }) => {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="h-48 w-full overflow-hidden sm:h-56">
        <img
          src={destination.imageUrl}
          alt={destination.route}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {destination.route}
          </h3>
          <div className="inline-flex shrink-0 items-center gap-1 text-zinc-700 dark:text-zinc-300">
            <Star className="h-4 w-4" />
            <span className="text-sm font-medium">{destination.rating}</span>
          </div>
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {destination.description}
        </p>
      </div>
    </article>
  );
};

export default DestinationCard;
