import { globalCoverageStats } from '@/data/global-coverage';
import WorldMap from '../ui/world-map';

export default function GlobalCoverageRight() {
    return (
        <div className="w-full">
            {/* Temporary image for the map side */}
            <div className="overflow-hidden rounded-2xl ">
                <WorldMap
                    dots={[
                        {
                            start: {
                                lat: 64.2008,
                                lng: -149.4937,
                            }, // Alaska (Fairbanks)
                            end: {
                                lat: 34.0522,
                                lng: -118.2437,
                            }, // Los Angeles
                        },
                        {
                            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        },
                        {
                            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                        },
                        {
                            start: { lat: 51.5074, lng: -0.1278 }, // London
                            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                        },
                    ]}
                    className="" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 justify-items-center text-center ">
                {globalCoverageStats.map((stat) => (
                    <div key={stat.id} className="border-l-3 border-zinc-300 pl-4 dark:border-zinc-700">
                        <p className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">{stat.value}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
