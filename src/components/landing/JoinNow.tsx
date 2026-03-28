'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function JoinNow() {
  return (
    <section className="w-full bg-zinc-100 dark:bg-zinc-900 py-3 md:py-5 lg:py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-white max-w-2xl">
            Drive with Kiaya Taxi
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-300 max-w-2xl leading-relaxed">
            Join our network of professional drivers and earn on your own schedule. We're looking for experienced, 
            reliable drivers who are passionate about providing excellent service to travelers.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200 text-white font-semibold rounded-full px-8 py-6 text-base transition-colors"
            >
              <Link href="/join-driver">
                Join Now <span className="ml-2">→</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-zinc-900 text-zinc-900 hover:bg-zinc-900 hover:text-white dark:border-zinc-300 dark:text-zinc-300 dark:hover:bg-zinc-300 dark:hover:text-zinc-900 font-semibold rounded-full px-8 py-6 text-base transition-colors"
            >
              <Link href="#learn-more">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
