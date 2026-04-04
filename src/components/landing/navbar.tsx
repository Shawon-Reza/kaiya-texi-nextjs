
"use client";

import { landingNavItems } from "@/data/landing-nav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

export function LandingNavbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-200/70 bg-white/80 backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-900/80">
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


        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="#bookings"
            className="rounded-full bg-zinc-900 px-2 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-zinc-700 "
          >
            Book Now
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white p-3 text-zinc-900 transition-colors hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 md:hidden dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="mt-2 w-56 border border-zinc-200 bg-white p-2 shadow-xl dark:border-zinc-700 dark:bg-zinc-900"
            >
              {landingNavItems.map((item) => (
                <DropdownMenuItem
                  key={item.href}
                  onSelect={() => {
                    window.location.hash = item.href;
                  }}
                  className="w-full cursor-pointer rounded-md px-3 py-2.5 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-white"
                >
                  {item.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          
        </div>
      </div>
    </header>
  );
}
