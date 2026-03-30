import { ArrowRight } from 'lucide-react';

import type { ServicesPage2Item } from '@/data/services-page2';

type ServicesPage2CardProps = {
    item: ServicesPage2Item;
};

export default function ServicesPage2Card({ item }: ServicesPage2CardProps) {
    return (
        <article className="group relative h-[290px] overflow-hidden rounded-lg sm:h-[320px] lg:h-[360px]">
            <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover"
                loading="lazy"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />

            <div className=" absolute inset-x-0 bottom-0 p-5 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 translate-y-3 sm:p-6">
                <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">{item.title}</h3>
                <p className="mt-2 max-w-[28ch] text-sm text-white/90 sm:text-base">{item.description}</p>
                <div className="mt-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-900 sm:h-11 sm:w-11 cursor-pointer">
                    <ArrowRight className="h-5 w-5 " aria-hidden="true" />
                </div>
            </div>
        </article>
    );
}
