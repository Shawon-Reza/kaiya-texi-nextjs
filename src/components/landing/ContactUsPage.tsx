'use client';

import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function ContactUsPage() {
  return (
    <section
      id='contact'
      className="w-full ">
      <div className=" mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-5  md:mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-400 mb-4">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white">
            We're Here to Help With Your Journey
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 justc md:grid-cols-2 gap-8 md:gap-12 lg:gap-16  items-center">
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-start">
            <ContactInfo />
          </div>

          {/* Right Column - Form */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-6 lg:p-8 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
