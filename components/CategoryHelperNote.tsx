type Props = { note: string };

export default function CategoryHelperNote({ note }: Props) {
  return (
    <section className="bg-[#FAFAF8]">
      <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-6 sm:pt-14">
        <div className="rounded-2xl border-l-4 border-[#F97316] bg-white p-5 shadow-sm">
          <p className="font-heading text-xs font-bold uppercase tracking-widest text-[#F97316]">
            Need help choosing?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#1E2A3A]/85 sm:text-base">
            {note}
          </p>
        </div>
      </div>
    </section>
  );
}
