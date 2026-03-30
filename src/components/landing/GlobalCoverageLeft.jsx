import { ArrowRight } from 'lucide-react';

export default function GlobalCoverageLeft() {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
        Global Coverage
      </p>

      <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-4xl dark:text-zinc-100">
        Travel Anywhere with Local, English-Speaking Drivers
      </h2>

      <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-600 sm:text-md xl:text-lg dark:text-zinc-400">
        <p>
          Kiaya Taxi connects you with trusted local drivers across major cities and airports worldwide.
        </p>
        <p>
          Every ride is handled by professional English-speaking drivers, so you can communicate easily and travel with confidence.
        </p>
        <p>
          From airport pickups to long-distance journeys, we ensure reliable service, safe travel, and a smooth experience wherever you go.
        </p>
      </div>

      <button
        type="button"
        className="group mt-8 inline-flex items-center gap-2 text-lg font-semibold text-zinc-900 transition-colors hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
      >
        View Available Destinations
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </button>
    </div>
  );
}
