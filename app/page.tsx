import { LandingNavbar } from "@/components/landing/navbar";
import { LandingSection } from "@/components/landing/LandingSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <LandingNavbar />

      <main>
        <section id="home" className="scroll-mt-28 py-24 sm:py-28">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-zinc-500">
              Fast. Safe. Always Available.
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Book your next ride with Kaiya Taxi.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-zinc-600">
              Reliable city rides, airport transfers, and scheduled pickups with
              transparent pricing and 24/7 support.
            </p>
          </div>
        </section>

        <LandingSection id="services" title="Services">
          <p>
            Local city transfers, airport drop-offs, and premium rides for your
            business or family travel.
          </p>
        </LandingSection>

        <LandingSection id="bookings" title="Bookings">
          <p>
            Reserve in less than a minute. Choose pickup time, destination, and
            vehicle type with instant confirmation.
          </p>
        </LandingSection>

        <LandingSection id="about" title="About">
          <p>
            Kaiya Taxi is built around punctual drivers, clean cars, and a
            smooth booking experience for daily commuters.
          </p>
        </LandingSection>

        <LandingSection id="contact" title="Contact">
          <p>
            Questions or custom requests? Reach us at support@kaiyataxi.com or
            call +1 (000) 123-4567.
          </p>
        </LandingSection>
      </main>
    </div>
  );
}
