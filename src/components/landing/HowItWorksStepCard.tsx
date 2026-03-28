import type { HowItWorksStep } from '@/data/how-it-works';

type HowItWorksStepCardProps = {
  step: HowItWorksStep;
};

export default function HowItWorksStepCard({ step }: HowItWorksStepCardProps) {
  const Icon = step.icon;

  return (
    <article className="flex flex-col items-center text-center">
      <div className="flex items-center justify-center rounded-full bg-[#F5F5F5] p-4 dark:bg-zinc-900">
        <Icon size={28} className="text-zinc-900 dark:text-zinc-100" aria-hidden="true" />
      </div>

      <h3 className="mt-4 text-lg xl:text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        {step.id}. {step.title}
      </h3>
      <p className="mt-2 text-sm xl:text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-sm">
        {step.description}
      </p>
    </article>
  );
}
