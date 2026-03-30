import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import JoinNow from "@/components/landing/JoinNow";
import ContactUsPage from "@/components/landing/ContactUsPage";
import { LandingNavbar } from "@/components/landing/navbar";
import PopularDestination from "@/components/landing/PopularDestination";
import Reviews from "@/components/landing/Reviews";
import Services from "@/components/landing/Services";
import TheKaiyaStandard from "@/components/landing/TheKaiyaStandard";
import ServicesPage2 from "@/components/landing/ServicesPage2";
import GlobalCoverage from "@/components/landing/GlobalCoverage";

export default function Home() {
  return (
    <div className="bg-zinc-50 text-zinc-900">


      <section className="fixed top-0 z-50 w-full bg-white/60 backdrop-blur-md border-b border-zinc-200 dark:bg-zinc-900/80 dark:border-zinc-700">
        <LandingNavbar />
      </section>
      <section><HeroSection /></section>
      <section><HowItWorks /></section>

      <section className="px-1 sm:px-5 md:px-8 lg:px-10 xl:px-13 2xl:px-15  dark:bg-zinc-950 py-5 md:py-8 lg:py-10 xl:py-15">
        <Services />
      </section>
      <section className="px-1 sm:px-5 md:px-8 lg:px-10 xl:px-13 2xl:px-15  dark:bg-zinc-950 ">
        <ServicesPage2 />
      </section>

      <section>
        <TheKaiyaStandard />
      </section>
      <section className="px-1 sm:px-5 md:px-8 lg:px-10 xl:px-13 2xl:px-15  dark:bg-zinc-950 py-5 md:py-8 lg:py-10 xl:py-15">
        <GlobalCoverage />
      </section>
      <section >
        <PopularDestination />
      </section>
      <section>
        <Reviews />
      </section>
      <section className="px-1 sm:px-5 md:px-8 lg:px-10 xl:px-13 2xl:px-15  dark:bg-zinc-950 py-5 md:py-8 lg:py-10 xl:py-15">
        <FAQSection />
      </section>
      <section className="px-1 sm:px-5 md:px-8 lg:px-10 xl:px-13 2xl:px-15  dark:bg-zinc-950 py-5 md:py-8 lg:py-10 xl:py-15">
        <ContactUsPage />
      </section>
      <section>
        <JoinNow />
      </section>
      <section>
        <Footer />
      </section>





      {/*         
      <TheKaiyaStandard />
      <PopularDestination />
      <Reviews />
      <FAQSection />
      <ContactUsPage />
      <JoinNow />
      <Footer /> */}

    </div>
  );
}
