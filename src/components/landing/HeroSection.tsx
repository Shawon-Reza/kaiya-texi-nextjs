import BookingForm from '@/components/landing/BookingForm';
import TrustBadges from '@/components/landing/TrustBadges';
import HeroSectionTextAnimation1 from './HeroSectionTextAnimation1';


export default function HeroSection() {
    return (
        <section
            className="relative min-h-[calc(100vh-200px)] w-full bg-cover bg-center bg-no-repeat pt-20 sm:pt-28 lg:pt-32 mb-75 md:mb-30"
            style={{
                backgroundImage: `url('/images/hero.jpg')`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content Container */}
            <div className="relative z-10 mx-auto w-full  px-4 sm:px-6 md:px-10 lg:px-15  xl:px-20 2xl:px-25">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left Column - Heading & Description */}
                    <div className="flex flex-col justify-center space-y-6">

                        <h1 className="text-3xl  font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                            <HeroSectionTextAnimation1 text={"Comfortable private transfers with professional drivers"} />
                        </h1>

                        <div className="max-w-lg text-base text-white/90 sm:text-lg">
                            {/* Experience seamless door-to-door travel across Japan most iconic destinations with our architectural concierge service. */}
                            <HeroSectionTextAnimation1 text={"Experience seamless door-to-door travel across Japan most iconic destinations with our architectural concierge service."} />

                        </div>

                        {/* Trust Badges */}
                        <TrustBadges />
                    </div>

                    {/* Right Column - Spacing for responsive */}
                    <div className="hidden lg:block" />
                </div>
            </div>

            {/* Booking Form - Bottom */}
            <div className="absolute inset-x-0 bottom-0 z-40 mx-auto -mb-60 md:-mb-25 mt-10 w-full max-w-7xl px-4 sm:px-6 sm:mt-16 lg:mt-20 lg:px-8">
                <BookingForm />
            </div>
        </section>
    );
}
