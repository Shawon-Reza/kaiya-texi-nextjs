import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import JoinNow from "@/components/landing/JoinNow";
import ContactUsPage from "@/components/landing/ContactUsPage";
import { LandingNavbar } from "@/components/landing/navbar";
import Reviews from "@/components/landing/Reviews";
import Services from "@/components/landing/Services";
import TheKaiyaStandard from "@/components/landing/TheKaiyaStandard";
import ServicesPage2 from "@/components/landing/ServicesPage2";
import GlobalCoverage from "@/components/landing/GlobalCoverage";
import PopularDestination from "@/components/landing/PopularDestination";

export default function Home() {
  return (
    <div className="bg-zinc-50 text-zinc-900 pt-20">
      <LandingNavbar />
      <section><HeroSection /></section>
      <section className="px-1 sm:px-5 md:px-8 lg:px-10 xl:px-13 2xl:px-15  dark:bg-zinc-950 py-5 md:py-8 lg:py-10 xl:py-15">
        <HowItWorks />
      </section>

      <section className="px-1 sm:px-5 md:px-8 lg:px-10 xl:px-13 2xl:px-15  dark:bg-zinc-950 py-5 md:py-8 lg:py-10 xl:py-15">
        <Services />
      </section>
      <section className="px-1 sm:px-5 md:px-8 lg:px-10 xl:px-13 2xl:px-15  dark:bg-zinc-950 ">
        <ServicesPage2 />
      </section>

      <section id="about">
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
