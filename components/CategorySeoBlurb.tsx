type Props = { blurb: string };

export default function CategorySeoBlurb({ blurb }: Props) {
  return (
    <section className="bg-[#FAFAF8]">
      <div className="mx-auto max-w-3xl px-4 pb-14 sm:px-6 sm:pb-20">
        <p className="text-sm leading-relaxed text-[#1E2A3A]/70 sm:text-base">
          {blurb}
        </p>
      </div>
    </section>
  );
}
