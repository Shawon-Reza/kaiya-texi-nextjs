import KaiyaStandardItemCard from '@/components/landing/KaiyaStandardItemCard';
import { kaiyaStandardItems } from '@/data/kaiya-standard';
import { Highlighter } from '../ui/highlighter';

const TheKaiyaStandard = () => {
    return (
        <section className=" py-10 sm:py-12 lg:py-18 dark:bg-zinc-950" id="kaiya-standard">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <header className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                        Why Travelers Trust Kiaya
                    </p>
                    <h2 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
                        The
                        {" "} <Highlighter action="highlight" color="#FF9800" isView>
                            Kiaya
                        </Highlighter>{" "}
                        Standard
                        {/* "highlight" | "circle" | "box" | "bracket" | "crossed-off" | "strike-through" | "underline" */}

                    </h2>






                </header>

                <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-y-12">
                    {kaiyaStandardItems.map((item) => (
                        <KaiyaStandardItemCard key={item.id} item={item} />
                    ))}
                </div>


            </div>
        </section>
    );
};

export default TheKaiyaStandard;