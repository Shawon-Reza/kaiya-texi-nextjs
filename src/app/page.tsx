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

export default function Home() {
  return (
    <div className="bg-zinc-50 text-zinc-900">


      <section><LandingNavbar /></section>
      <section><HeroSection /></section>
      <section><HowItWorks /></section>

      <section className="px-1 md:px-3 lg:px-5 xl:px-7">
        <Services />
      </section>
      <section className="  px-1 sm:px-3 md:px-4 lg:px-5 xl:px-10">
        <ServicesPage2 />
      </section>

      <section>
        <TheKaiyaStandard />
      </section>
      <section>
        <PopularDestination />
      </section>
      <section>
        <Reviews />
      </section>
      <section>
        <FAQSection />
      </section>
      <section>
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
