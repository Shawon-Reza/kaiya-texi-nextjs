export type BookingTab = 'short-trip' | 'full-day' | 'door-to-door';

export const bookingTabs: { id: BookingTab; label: string; value: string }[] = [
  {
    id: 'short-trip',
    label: 'SHORT TRIP',
    value: 'short-trip',
  },
  {
    id: 'full-day',
    label: 'FULL DAY',
    value: 'full-day',
  },
  {
    id: 'door-to-door',
    label: 'DOOR TO DOOR TRANSFER',
    value: 'door-to-door',
  },
];

export type BookingFormData = {
  tripType: BookingTab;
  pickup: string;
  dropoff: string;
  date: string;
  time: string;
};
