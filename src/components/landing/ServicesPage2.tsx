import ServicesPage2Card from '@/components/landing/ServicesPage2Card';
import { servicesPage2Items } from '@/data/services-page2';

export default function ServicesPage2() {
    return (
        <section className="w-full py-10 sm:py-14 lg:py-16" id="services-page-2">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <header>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Our Expertise</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                        Tailored Transfer Services
                    </h2>
                </header>

                <div className="mt-6 grid grid-cols-1 gap-10 sm:mt-8 sm:grid-cols-2 sm:gap-3 lg:gap-4 sm:px-10 lg:grid-cols-4 xl:grid-cols-4  mx-auto">
                    {servicesPage2Items.map((item) => (
                        <ServicesPage2Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
