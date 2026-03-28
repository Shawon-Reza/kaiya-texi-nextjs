import type { IconType } from 'react-icons';
import { FaCar } from 'react-icons/fa6';
import { FiSearch, FiTruck, FiCheck } from 'react-icons/fi';

export type HowItWorksStep = {
  id: number;
  title: string;
  description: string;
  icon: IconType;
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: 1,
    title: 'Search ride',
    description:
      'Enter your pickup, destination, and preferred time in our easy widget.',
    icon: FiSearch,
  },
  {
    id: 2,
    title: 'Choose vehicle',
    description:
      'Select the vehicle class that best fits your group size and luggage needs.',
    icon: FaCar ,
  },
  {
    id: 3,
    title: 'Confirm booking',
    description:
      'Secure your booking with instant confirmation and transparent pricing.',
    icon: FiCheck,
  },
];
