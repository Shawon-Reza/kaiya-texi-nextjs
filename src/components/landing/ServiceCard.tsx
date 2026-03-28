import { Building2, Clock3, LucideIcon, Map, Plane } from 'lucide-react';
import type { ServiceItem } from '@/data/services';

const iconMap: Record<ServiceItem['icon'], LucideIcon> = {
    plane: Plane,
    building2: Building2,
    clock3: Clock3,
    map: Map,
};

type ServiceCardProps = {
    service: ServiceItem;
};

export default function ServiceCard({ service }: ServiceCardProps) {
    const Icon = iconMap[service.icon];

    return (
        <article className="rounded-3xl bg-zinc-200/70 p-4 sm:p-7 dark:bg-zinc-900/80">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900">
                <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                {service.title}
            </h3>
            <p className="mt-3 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl">
                {service.description}
            </p>
        </article>
    );
}


