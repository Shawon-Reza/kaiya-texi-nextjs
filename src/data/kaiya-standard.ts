export type KaiyaStandardItem = {
  id: number;
  title: string;
  description: string;
  icon: 'car' | 'badgeDollarSign' | 'plane' | 'headset' | 'sparkles' | 'history';
};

export const kaiyaStandardItems: KaiyaStandardItem[] = [
  {
    id: 1,
    title: 'Local driver expertise',
    description: 'Drivers with extensive knowledge of local routes and areas',
    icon: 'car',
  },
  {
    id: 2,
    title: 'Transparent Pricing',
    description: 'No hidden fees, surge pricing, or surprise tolls. The price you see is what you pay.',
    icon: 'badgeDollarSign',
  },
  {
    id: 3,
    title: 'Flight Monitoring',
    description: 'We track your flight in real-time and adjust pickup times for any delays automatically.',
    icon: 'plane',
  },
  {
    id: 4,
    title: '24/7 Support',
    description: 'Our support team is available at any time before, during, and after your trip.',
    icon: 'headset',
  },
  {
    id: 5,
    title: 'Clean and comfortable vehicles',
    description: 'Every vehicle is checked regularly to ensure a clean, safe, and comfortable ride.',
    icon: 'sparkles',
  },
  {
    id: 6,
    title: 'Free Cancellation',
    description: 'Cancel up to 24 hours before your pickup with no penalty on most rides.',
    icon: 'history',
  },
];
