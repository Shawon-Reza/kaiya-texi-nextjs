import {
  BadgeDollarSign,
  Car,
  Headset,
  History,
  Plane,
  Sparkles,
  LucideIcon,
} from 'lucide-react';

import type { KaiyaStandardItem } from '@/data/kaiya-standard';

const iconMap: Record<KaiyaStandardItem['icon'], LucideIcon> = {
  car: Car,
  badgeDollarSign: BadgeDollarSign,
  plane: Plane,
  headset: Headset,
  sparkles: Sparkles,
  history: History,
};

type KaiyaStandardItemCardProps = {
  item: KaiyaStandardItem;
};

export default function KaiyaStandardItemCard({ item }: KaiyaStandardItemCardProps) {
  const Icon = iconMap[item.icon];

  return (
    <article className="rounded-xl border border-transparent p-1 transition-colors hover:border-zinc-200 dark:hover:border-zinc-800">
      <Icon className="h-5 w-5 text-zinc-900 dark:text-zinc-100" aria-hidden="true" />
      <h3 className="mt-3 text-2xl font-semibold leading-tight text-zinc-900 dark:text-zinc-100 sm:text-xl">
        {item.title}
      </h3>
      <p className="mt-2 max-w-sm text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-[15px]">
        {item.description}
      </p>
    </article>
  );
}
