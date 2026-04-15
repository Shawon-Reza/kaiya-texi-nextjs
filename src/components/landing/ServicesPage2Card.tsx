import { ArrowRight } from 'lucide-react';

import type { ServicesPage2Item } from '@/data/services-page2';

type ServicesPage2CardProps = {
    item: ServicesPage2Item;
};

export default function ServicesPage2Card({ item }: ServicesPage2CardProps) {
    return (
        <article className="group relative h-72.5 overflow-hidden rounded-xl sm:h-80 lg:h-96 xl:h-125   hover:shadow-xl shadow-md transform transition-all duration-1000 hover:scale-103 hover:border-zinc-200 dark:hover:border-zinc-800">
            <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover"
                loading="lazy"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/0 opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100" />

            <div className="absolute inset-x-0 bottom-0 translate-y-0 p-5 text-white opacity-100 sm:translate-y-3 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 sm:group-focus-within:translate-y-0 sm:group-focus-within:opacity-100 sm:p-6 hover:shadow-xl shadow-md transform transition-all duration-1000 hover:scale-103 hover:border-zinc-200 dark:hover:border-zinc-800">

                <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">{item.title}</h3>
                <p className="mt-2 max-w-[28ch] text-sm text-white/90 sm:text-base ">{item.description}</p>

                <div className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 sm:h-11 sm:w-11 cursor-pointer transform transition-all duration-1000 hover:scale-103 hover:border-zinc-200 dark:hover:border-zinc-800">
                    <ArrowRight className=" " aria-hidden="true" />
                </div>
            </div>
        </article>
    );
}
