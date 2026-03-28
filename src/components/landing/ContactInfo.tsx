'use client';

import { Phone, Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Description */}
      <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
        Have a question about your booking or need help planning your trip? Our support team is available to assist you anytime. Reach out to us and we'll make sure your travel experience is smooth and stress-free.
      </p>

      {/* Contact Details */}
      <div className="space-y-6">
        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Phone className="w-6 h-6 text-zinc-900 dark:text-white mt-1" />
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Phone</h3>
            <p className="text-zinc-600 dark:text-zinc-400">+1 (000) 000-0000</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <Mail className="w-6 h-6 text-zinc-900 dark:text-white mt-1" />
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Email</h3>
            <p className="text-zinc-600 dark:text-zinc-400">support@kiayataxi.com</p>
          </div>
        </div>
      </div>

      {/* Availability Notice */}
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        Our team is available 24/7 to help with bookings, changes, or travel questions.
      </p>
    </div>
  );
}
