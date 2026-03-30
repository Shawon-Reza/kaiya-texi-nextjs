import ServiceCard from '@/components/landing/ServiceCard';
import Image from 'next/image';

import { services } from '@/data/services';

export default function Services() {
    return (
        <section className=" dark:bg-zinc-950" id="services">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <header>
                    <p className="text-xs md:text-lg font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                        Our Expertise
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl lg:text-5xl">
                        Tailored Transfer Services
                    </h2>
                </header>



                <div className="mt-8 grid grid-cols-1 gap-8 lg:gap-4 lg:mt-10 lg:grid-cols-12 justify-items-center">


                    <div className="overflow-hidden rounded-3xl lg:col-span-4">
                        <Image
                            src="/images/service.png"
                            alt="Private transfer service"
                            width={1200}
                            height={900}
                            className=" w-full object-cover lg:h-full"
                            priority={false}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8  ">
                        {services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
}
