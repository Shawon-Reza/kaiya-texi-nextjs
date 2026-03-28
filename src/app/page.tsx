import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import HowItWorks from "@/components/landing/HowItWorks";
import JoinNow from "@/components/landing/JoinNow";
import ContactUsPage from "@/components/landing/ContactUsPage";
import { LandingNavbar } from "@/components/landing/navbar";
import PopularDestination from "@/components/landing/PopularDestination";
import Reviews from "@/components/landing/Reviews";
import Services from "@/components/landing/Services";
import TheKaiyaStandard from "@/components/landing/TheKaiyaStandard";

export default function Home() {
  return (
    <div className="min-h-screen  bg-zinc-50 text-zinc-900">
      <LandingNavbar />

      <main>
        <section id="home" className="scroll-mt-28 py-24 sm:py-28">
          <div className="mx-auto w-full  px-4 sm:px-6 lg:px-8">
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


      </main>

      <Reviews />
      <HowItWorks />
      <Services />
      <TheKaiyaStandard />
      <PopularDestination />
      <FAQSection />
      
      <ContactUsPage />
      <JoinNow />
      <Footer />

    </div>
  );
}
