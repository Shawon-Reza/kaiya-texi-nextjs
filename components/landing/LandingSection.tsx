import type { ReactNode } from "react";

type LandingSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function LandingSection({ id, title, children }: LandingSectionProps) {
  return (
    <section id={id} className="scroll-mt-28 border-b border-zinc-200 py-24 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl">
          {title}
        </h2>
        <div className="mt-6 text-zinc-600">{children}</div>
      </div>
    </section>
  );
}
