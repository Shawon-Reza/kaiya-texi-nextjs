import HowItWorksStepCard from '@/components/landing/HowItWorksStepCard';
import { howItWorksSteps } from '@/data/how-it-works';

export default function HowItWorks() {
    return (
        <section className="  dark:bg-zinc-950" id="how-it-works">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                <header className="mx-auto max-w-2xl text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                        How It Work
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
                        Three simple steps to your ride
                    </h2>
                </header>

                <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto">
                    {howItWorksSteps.map((step) => (
                        <HowItWorksStepCard key={step.id} step={step} />
                    ))}
                </div>
            </div>
        </section>
    );
}
