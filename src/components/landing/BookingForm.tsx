'use client';

import { FormEvent, useState } from 'react';
import { bookingTabs, type BookingFormData, type BookingTab } from '@/data/booking';


const initialFormData: BookingFormData = {
  tripType: 'short-trip',
  pickup: '',
  dropoff: '',
  date: '',
  time: '',
};

export default function BookingForm() {
  const [activeTab, setActiveTab] = useState<BookingTab>('short-trip');
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTabChange = (tabId: BookingTab) => {
    setActiveTab(tabId);
    setFormData((prev) => ({
      ...prev,
      tripType: tabId,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log('🚕 Hero Booking Form Data:', {
      ...formData,
      submittedAt: new Date().toISOString(),
    });

    setFormData(initialFormData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 shadow-xl sm:p-8 dark:bg-zinc-900"
    >
      {/* Tabs */}
      <div className="mb-6 flex flex-wrap items-center gap-3 border-b border-zinc-200 pb-4 dark:border-zinc-800 sm:gap-4">
        {bookingTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => handleTabChange(tab.id)}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold transition-colors sm:px-4 sm:text-sm ${
              activeTab === tab.id
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'
            }`}
          >
            {tab.label === 'SHORT TRIP' && '🚗'}
            {tab.label === 'FULL DAY' && '📅'}
            {tab.label === 'DOOR TO DOOR TRANSFER' && '🚙'}
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="inline sm:hidden">
              {tab.label === 'SHORT TRIP' && 'Short'}
              {tab.label === 'FULL DAY' && 'Full Day'}
              {tab.label === 'DOOR TO DOOR TRANSFER' && 'Door-to-Door'}
            </span>
          </button>
        ))}
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
        {/* Pickup */}
        <div className="lg:col-span-1">
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            Pickup
          </label>
          <input
            type="text"
            name="pickup"
            placeholder="Choose Airport"
            value={formData.pickup}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          />
        </div>

        {/* Drop-off */}
        <div className="lg:col-span-1">
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            Drop-off
          </label>
          <input
            type="text"
            name="dropoff"
            placeholder="Niseko Village"
            value={formData.dropoff}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          />
        </div>

        {/* Date */}
        <div className="lg:col-span-1">
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          />
        </div>

        {/* Time */}
        <div className="lg:col-span-1">
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
            Time
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="mt-2 w-full rounded-lg border border-zinc-300 bg-zinc-50 px-3 py-2.5 text-sm outline-none transition focus:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-950 dark:text-white"
          />
        </div>

        {/* Button */}
        <div className="flex items-end lg:col-span-1">
          <button
            type="submit"
            className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 lg:mt-7"
          >
            GET QUOTE
          </button>
        </div>
      </div>
    </form>
  );
}
