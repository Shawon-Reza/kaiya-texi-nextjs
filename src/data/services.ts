export type ServiceIcon = 'plane' | 'building2' | 'clock3' | 'map';

export type ServiceItem = {
  id: number;
  title: string;
  description: string;
  icon: ServiceIcon;
};

export const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Airport Transfers',
    description: 'Reliable pickups from all major airports with meet and greet service.',
    icon: 'plane',
  },
  {
    id: 2,
    title: 'City-to-City',
    description: 'Long-distance travel in total comfort without the stress of public transit.',
    icon: 'building2',
  },
  {
    id: 3,
    title: 'Hourly Charters',
    description: 'Dedicated driver at your disposal for business meetings or errands.',
    icon: 'clock3',
  },
  {
    id: 4,
    title: 'Tours & Day Trips',
    description: 'Curated local experiences with drivers who know the hidden gems.',
    icon: 'map',
  },
];
