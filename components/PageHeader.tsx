type Props = {
  kicker: string;
  title: string;
  intro?: string;
};

export default function PageHeader({ kicker, title, intro }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAFAF8] to-[#F3F4F6]">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#F97316]/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#1E2A3A]/8 blur-3xl"
      />
      <div className="relative mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:py-16">
        <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#F97316]">
          {kicker}
        </p>
        <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#1E2A3A] sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {intro && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-[#1E2A3A]/80 sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
