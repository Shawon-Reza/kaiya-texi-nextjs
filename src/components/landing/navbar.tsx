
import { landingNavItems } from "@/data/landing-nav";
import Link from "next/link";

export function LandingNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/70 dark:bg-amber-500 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-black  text-white">
            <span aria-hidden className="text-xs font-bold tracking-wide">
              KT
            </span>
          </div>
          <span className="text-lg font-extrabold tracking-tight text-zinc-900">
            KAIYA TAXI
          </span>
        </div>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-9 text-sm font-semibold text-zinc-600">
            {landingNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors lg:text-md xl:text-lg hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="#bookings"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-zinc-700"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
